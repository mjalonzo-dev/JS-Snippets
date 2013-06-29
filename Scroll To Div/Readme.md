# JQuery Scroll To Div

 Simple Scroll to div script.

## Description
 The #main-link's part of the selector for the click event. When triggered, it grabs the link's href attribute, "#anchor-id" for example, and passes it to the goToByScroll() function. The function then gets the anchor element's Y-offset from the top of the document and scrolls down to it.

## Usage

	<a class="link" href="#anchor-id">Link</a>
	...

	<div id="anchor-id"> ... </div>

When a.link is clicked, the browser should scroll down to div#anchor-id