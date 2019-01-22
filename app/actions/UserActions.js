import {EventEmitter} from 'events';
import EventConstants from 'Constants/EventConstants';

const UserActions = {
    emitter: new EventEmitter(),

    openSidebar() {
        UserActions.emitter.emit(EventConstants.USER.OPEN_SIDEBAR);
    },

    closeSidebar() {
        UserActions.emitter.emit(EventConstants.USER.CLOSE_SIDEBAR);
    }
};

export default UserActions;