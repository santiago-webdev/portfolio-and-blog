# TODOs

## Update the link if it stays in a section for too long

If the viewport is seeing let's say #projects for more than 5 seconds update the
link to include that without modifying the view.

## For the scroll tracker

Make it smooth and put it in the sidebar in the desktop

## Improve navigation in modal box

For the search modal box, close it when using the back arrow in the browser. And
also add keyboard navigation with arrow keys.

## Fix intersiction observer for button to top and navigation

It's not being updated to the current <main> after navigation, so it's ignored.

## Changes to layouts

Blog cards should use role='presentation', and the hamburger menu should use
aria-pressed and hide the expanded menu when clicking or scrolling.

## Make use of <base>

## Maybe make use of LinkUI to redirect to search again

If the user reaches the bottom of the screen don't just show the button to the
top but also show a `LinkUI` to go to either Home or to search for another post.
