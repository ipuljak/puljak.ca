import EventConstants from "Constants/EventConstants";

const UserActionsUtils = {
    detectSwipe(el, callback) {
        let touchsurface = el,
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
            handleswipe = callback || function(swipedir){};

        touchsurface.addEventListener('touchstart', function(e) {
            let touchobj = e.changedTouches[0];
            swipedir = 'none';
            //dist = 0;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime();
            e.preventDefault();
        }, false);

        touchsurface.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, false);

        touchsurface.addEventListener('touchend', function(e) {
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
            e.preventDefault();
        }, false);
    }
};

export default UserActionsUtils;