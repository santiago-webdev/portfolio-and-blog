---
title: How I use encrypted drives
description: Learn basic Unix tools to encrypt with luks2 a Btrfs file system
datetime: 2023-06-23 16:10
tags: [Publish, Linux, Tooling]
finished: true
summary:
  Use cryptsetup to create a luks2 container in your drive, open with a mapper,
  format to Btrfs, mount to /mnt, and create the needed subvolumes
---

Living in a third world country sometimes includes "loosing" your external
drives or laptops, and I don't think anybody likes to have an anonymous source looking
through your files, that's why I always encrypt all of my installations.

## Let's start

For this tutorial I'll briefly explain the steps you need to take in order
to setup your drives and how to consequently make use of this drives, either
externally or internally to your pc.

_**NOTE**: I should also mention that I'll be using the drive `/dev/sda` and
the partition `/dev/sda1` but you should check your setup with `lsblk`._

I divided this in three sections.

| Sections                | Subject                                             |
| ----------------------- | --------------------------------------------------- |
| [One](#section-one)     | Initial set of steps to configure the drive         |
| [Two](#section-two)     | How to use encrypted Btrfs external drives          |
| [Three](#section-three) | How to configure an internal encrypted Btrfs drives |

### Section one:

To format and encrypt the drive using luks2 and use Btrfs you can follow this
set of steps:

- [Section one:](#section-one)
  - [Wipe the drive](#wipe-the-drive)
  - [Create single partition](#create-single-partition)
  - [Use luks2](#use-luks2)
  - [Open the encrypted partition](#open-the-encrypted-partition)
  - [Use Btrfs](#use-btrfs)
  - [Btrfs structure](#btrfs-structure)
  - [Unmount and start with section two](#unmount-and-start-with-section-two)

#### Wipe the drive

```bash
sudo wipefs --all /dev/sda
# sudo sgdisk --zap-all /dev/sda # You probably have used this command if you installed Arch Linux
```

#### Create single partition

```bash
sudo gdisk /dev/sda
```

#### Use luks2

You can add other settings but plain luks2 is enough encryption for my use case.

```bash
sudo cryptsetup luksFormat --type luks2 /dev/sda1
```

#### Open the encrypted partition

This will create a mapper, in this case `/dev/mapper/cryptdata`, and we'll use
it for the next steps, you can use any name, I used `cryptdata`.

For the purpose of this tutorial you need to look at _mappers_ like some sort of
"interface" to interact with complex file structures, in this case with being
en encrypted partition in your drive.

```bash
sudo cryptsetup luksOpen /dev/sda1 cryptdata
```

#### Use Btrfs

Format your encrypted partition to Btrfs.

```bash
sudo mkfs.btrfs /dev/mapper/cryptdata
```

#### Btrfs structure

For the sake of simplicity in this example I'll just use only one @ subvolume,
but you can use as many as you want, for example you could have a subvolume of
@movies with a higher compression rate.

```bash
sudo mount /dev/mapper/cryptdata /mnt
sudo btrfs subvolume create /mnt/@
# sudo btrfs subvolume create /mnt/@torrents
# sudo btrfs subvolume create /mnt/@workspace
sudo umount /mnt
sudo mount -o defaults,noatime,autodefrag,compress-force=zstd:3,space_cache=v2,subvol=@ /dev/mapper/cryptdata /mnt
```

#### Unmount and start with section two

```bash
sudo umount /mnt
sudo cryptsetup luksClose cryptdata
```

### Section two:

Mount(decrypt) and unmount the drive

- [Section two:](#section-two)
  - [Create mounting point](#create-mounting-point)
  - [Open the encrypted drive](#open-the-encrypted-drive)
  - [Mount partition](#mount-partition)
  - [Grant permissions to user](#grant-permissions-to-user)
  - [After using the drive](#after-using-the-drive)
  - [Close container](#close-container)

#### Create mounting point

```bash
mkdir -p ~/.local/cryptdata
```

#### Open the encrypted drive

```bash
sudo cryptsetup luksOpen /dev/sda1 cryptdata
```

#### Mount partition

Mount the encrypted Btrfs drive partition, you can choose any mount point, in
my case I choose `~/.local/cryptdata` to match the name of the mapper.

```bash
sudo mount -o defaults,noatime,autodefrag,compress-force=zstd:3,space_cache=v2,subvol=@ /dev/mapper/cryptdata ~/.local/cryptdata
```

#### Grant permissions to user

```bash
sudo chown $USER: ~/.local/cryptdata
```

#### After using the drive

When you finish working with the drive you need to unmount the mount point

```bash
sudo umount ~/.local/cryptdata
```

#### Close container

You then can disconnect your drive safely

```bash
sudo cryptsetup luksClose cryptdata
```

### Section three

**_Note:_** _I recommend reading everything first for this section before doing
anything to your drives_

In this section I detail how to configure secondary drives that you have installed
in your laptop or desktop, if it's brand new you need to follow [[#Section one:]](#section-one)
to set it up, now I'll explain the steps to automount and autodecrypt an internal
secondary drive:

- [Section three](#section-three)
  - [Create keyfile](#create-keyfile)
  - [Generate a keyfile](#generate-a-keyfile)
  - [Add this keyfile as the encryption key](#add-this-keyfile-as-the-encryption-key)
  - [Decrypt at boot, configure `/etc/crypttab`](#decrypt-at-boot-configure-etccrypttab)
  - [Mount at boot, configure `/etc/fstab`](#mount-at-boot-configure-etcfstab)
  - [Missing permissions to write to mounting points](#missing-permissions-to-write-to-mounting-points)

#### Create keyfile

I don't want to enter two passwords each time I start my laptop, I just want to
enter one password that can decrypt and mount both my NVMe where I have by Linux
install and my secondary HDD drive

So to do that you'll leave your install as is, with your current setup you'll be
entering one password each boot. But after mounting and reading from this drive
you'll need to provide a keyfile that cryptsetup is able to read and decrypt and
mount your secondary drive.

#### Generate a keyfile

**You should do this steps as root with**, you can open another TTY
or by doing `sudo su`, and for security reasons we are settings the file
permissions to 400 so that other groups or users(not even your own user) can't
access the keyfile.

```bash
sudo dd if=/dev/urandom of=/root/.keyfile bs=1024 count=4
sudo chmod 0400 /root/.keyfile
```

#### Add this keyfile as the encryption key

Define the `.keyfile` as the a key for the drive

```bash
cryptsetup -v luksAddKey -i 1 /dev/sda1 /root/.keyfile
```

#### Decrypt at boot, configure `/etc/crypttab`

This will just decrypt the partition, not mount it,.

To unlock/decrypt the partition on startup we define it in `/etc/crypttab`, it's like
doing [[#Open the encrypted drive]](#open-the-encrypted-drive)
but instead of typing the password you provide the `.keyfile` we just created
and the mapper is defined in the first column, it could be any name just like in
[[#Open the encrypted drive]](#open-the-encrypted-drive), I only
have one drive so I just named it "cryptdata".

And we also need to get the **UUID** of our **drive partition**, so for that to
go well here's some warnings:

- Make sure to not confuse **UUID** with _PARTUUID_
- And to choose your **drive partition**, not the _mapper_ of your drive
  - `/dev/sda1` is the drive partition, `/dev/sda` is the drive, `/dev/mapper/cryptdata` is the mapper

So to get the UUID you can do:

```bash
# I'll use my drive UUID as an example next
blkid -s UUID -o value /dev/sda1 # 511fc517-313a-36c1-a78e-2d4ed3964f8d
```

```bash
cryptdata UUID=$(blkid -s UUID -o value /dev/sda1) /root/.keyfile luks,discard
cryptdata UUID=511fc517-313a-36c1-a78e-2d4ed3964f8d /root/.keyfile luks,discard
```

If you are a proud vim user like I am you can easily insert this UUID in the
file doing `:r!blkid -s UUID -o value /dev/sda1`

#### Mount at boot, configure `/etc/fstab`

After decrypting the drive we need to finally mount the partitions(subvolumes
most likely for Btrfs) inside the encrypted container.

This file will not be empty so just to be sure make a backup.

```bash
sudo cp /etc/fstab /etc/fstab.bak
```

Now we need to define in `/etc/fstab` _what_ we want to mount, you can decrypt
your drive and just mount one partition, or subvolume, so this is up to you.

For ext4 drives

```bash
/dev/mapper/cryptdata  /<mount-point>  ext4  defaults  0  2
```

For Btrfs you'll probably have multiple subvolumes and options for it like
compression, I give you an example of my drive, you have to hard code your user
here so don't try anything weird like using `$USER` just replace YOUR_USER with
your user

I mount the root subvolume `@` that I created earlier under `~/.local/cryptdata`
so that I can access the drive and put unrelated stuff from time to time there,
but this will depend on what you want to do with your drive.

Also I should note there's a different with the mounting options, in [[##Btrfs
structure]](#btrfs-structure) we use `subvol=@` but here's it will be
`subvolid=999`, how do you get the id? Well you can follow the [[##Section
two:]](#section-two) to mount the drive partition at `/mnt` or any other mounting
point, and run:

```bash
sudo btrfs subvolume list /mnt
# Output:
# ID 256 gen 14 top level 5 path @
# ID 257 gen 15 top level 5 path @torrents
# ID 258 gen 21 top level 5 path @workspace
```

```bash
/dev/mapper/cryptdata /home/YOUR_USER/.local/cryptdata  btrfs defaults,noatime,autodefrag,compress-force=zstd:3,space_cache=v2,subvolid=256 0 2

/dev/mapper/cryptdata /home/YOUR_USER/.local/torrents    btrfs defaults,noatime,autodefrag,compress-force=zstd:3,space_cache=v2,subvolid=257 0 2

/dev/mapper/cryptdata /home/YOUR_USER/workspace          btrfs defaults,noatime,autodefrag,compress-force=zstd:3,space_cache=v2,subvolid=258 0 2
```

#### Missing permissions to write to mounting points

At this point you can restart your PC and everything should be ready to work.
If your user can't write to the mounting points you defined in the `/etc/fstab`.

```bash
# Logged as your user so that $USER is set correctly
sudo chown $USER:users /<mount-point> -R
# If that doesn't work you could try with the wheel group
sudo chown $USER:wheel /<mount-point> -R
```
