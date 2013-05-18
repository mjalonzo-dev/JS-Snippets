# Fix for Flexslider 2's Touch Sensitivity

 This fix will reduce Flexslider's swipe/touch sensitivity. Avoiding unwanted slide changes when swiping up/down to scroll. Thanks to [Yuri Vvedensky](https://github.com/vv3d0x) for the fix. Borrowed from [here](https://github.com/woothemes/FlexSlider/issues/530)

 Fix for [Flexslider v2.1](https://github.com/woothemes/FlexSlider)

## Usage

 Replace the following lines of code with the new code:

	function onTouchMove(e) {

	dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;

	scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));

		if (!scrolling || Number(new Date()) - startT > 500) {
			e.preventDefault();
			
			if (!fade && slider.transitions) {
				if (!vars.animationLoop) {
					dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
				}

				slider.setProps(offset + dx, "setTouch");
			}
		}
	}