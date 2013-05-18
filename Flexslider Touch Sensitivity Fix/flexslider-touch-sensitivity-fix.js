function onTouchMove(e) {
	dx = (vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
	scrolling = (vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));
	
	if (!scrolling) {
		distance = Math.abs(startX - e.touches[0].pageX);
		e.preventDefault();
		
		if (!fade && slider.transitions) {
			if (!vars.animationLoop) {
				dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
			}
			
			slider.setProps(offset + dx, "setTouch");
		}
	} else {
		el.removeEventListener('touchmove', onTouchMove, false);
	}
}