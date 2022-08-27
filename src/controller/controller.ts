import Store from '../Models/store';
import AppViewer from '../view/appViewer';

class Controller {
    store: Store;

    viewer: AppViewer;

    constructor(store: Store, viewer: AppViewer) {
        this.store = store;
        this.viewer = viewer;
    }

    init() {
        this.viewer.start();
    }
}

export default Controller;
