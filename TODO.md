# TODOs

## Make `Post` a global class

I use `Post` everywhere, and I want to avoid importing it in every component.

## Put the theme switcher outside the hamburger menu

Because you are more likely to need a theme switch every now and then on mobile
devices.

## Style the scrollbar in webkit based browsers

And don't forget to update the reset.css options related to this

## Add return types to all functions

It's just much clearer to read

## Redo theme switcher

At the moment if you set it to system the next reload of the site will change
the button to either 'light' or 'dark', it should just stay as 'system', maybe
just change the icon.

## Make navbar blurred

`backdrop-filter` causes some problems with `position`, so for now I'm not
going to implement anything with it.

## Snap and lock into each section of the landing page

With the intersection observer API implement and css snapping features it should
be doable.
