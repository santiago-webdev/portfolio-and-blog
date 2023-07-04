---
title: How I use external drives
description: Learn basic Unix tools to encrypt with luks2 a Btrfs file system
datetime: 2023-06-23 16:10
tags: [Publish, Linux, Tooling]
finished: true
summary:
  Use cryptsetup to create a luks2 container in your drive, open with a mapper,
  format to Btrfs, mount to /mnt, and create the needed subvolumes
---

# How I use external drives

Living in a third world country sometimes includes "loosing" your external
drives, and I don't think anybody likes to have an anonymous source looking
through your files, that's why I always encrypt my laptop and external drives.

## Let's start

For this tutorial I'll briefly explain the steps you need to take in order
to setup your external drives and how to consequently make use of this drives.

_**Note**: I should also mention that I'll be using the drive `/dev/sda` and
the partition `/dev/sda1` but you should check your setup with `lsblk`._

I divided this in two sections.

| Sections            | Subject                                               |
| ------------------- | ----------------------------------------------------- |
| [One](#section-one) | Initial set of steps to configure the drive           |
| [Two](#section-two) | Steps to mount the drive each time we want to use it. |

### Section one:

To format and encrypt the drive using luks2 and use Btrfs you can follow this
set of steps:

1. [Wipe the drive](#wipe-the-drive)
2. [Create single partition](#create-single-partition)
3. [Use luks2](#use-luks2)
4. [Open the encrypted partition](#open-the-encrypted-partition)
5. [Use btrfs](#use-btrfs)
6. [Btrfs structure](#btrfs-structure)
7. [Unmount and start with section two](#unmount-and-start-with-section-two)

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

#### Use btrfs

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
# sudo btrfs subvolume create /mnt/@movies
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

1. [Create mounting point](#create-mounting-point)
2. [Open the encrypted drive](#open-the-encrypted-drive)
3. [Mount partition](#mount-partition)
4. [Grant permissions to user](#grant-permissions-to-user)
5. [After using the drive](#after-using-the-drive)
6. [Close container](#close-container)

#### Create mounting point

```bash
mkdir -p ~/.local/cryptdata
```

#### Open the encrypted drive

```bash
sudo cryptsetup luksOpen /dev/sda1 cryptdata
```

#### Mount partition

Mount the encrypted btrfs drive partition, you can choose any mount point, in
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
