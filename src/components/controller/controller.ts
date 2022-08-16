import Store from '../model/store';
import appViewer from '../view/appViewer';

class Controller {
    store: Store;

    viewer: appViewer;

    constructor(store: Store, viewer: appViewer) {
        this.store = store;
        this.viewer = viewer;
    }

    init() {
        // init will be here
    }
}

export default Controller;
