import EventConstants from "Constants/EventConstants";

const UserActionsUtils = {
    /**
     * Swipe detection given an element and callback function
     * @param element
     * @param callback
     */
    detectSwipe(element, callback) {
        let touchsurface = element,
            swipedir,
            startX,
            startY,
            distX,
            distY,
            threshold = 150,
            restraint = 100,
            allowedTime = 300,
            elapsedTime,
            startTime,
            handleswipe = callback || (swipedir => {});

        // User begins to touch the screen
        touchsurface.addEventListener('touchstart', e => {
            let touchobj = e.changedTouches[0];
            swipedir = EventConstants.SWIPE_DIRECTION.NONE;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime();
        }, false);

        // User is dragging across the screen
        touchsurface.addEventListener('touchmove', e => {}, false);

        // User stops touching the screen
        touchsurface.addEventListener('touchend', e => {
            let touchobj = e.changedTouches[0];

            distX = touchobj.pageX - startX;
            distY = touchobj.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;

            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    swipedir = (distX < 0) ?
                        EventConstants.SWIPE_DIRECTION.LEFT :
                        EventConstants.SWIPE_DIRECTION.RIGHT;
                } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                    swipedir = (distY < 0) ?
                        EventConstants.SWIPE_DIRECTION.UP :
                        EventConstants.SWIPE_DIRECTION.DOWN;
                }
            }

            handleswipe(swipedir);
        }, false);
    }
};

export default UserActionsUtils;