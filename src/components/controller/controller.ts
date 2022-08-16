import Store from '../model/store';
import AppViewer from '../view/appViewer';

class Controller {
    store: Store;

    viewer: AppViewer;

    constructor(store: Store, viewer: AppViewer) {
        this.store = store;
        this.viewer = viewer;
    }

    init() {
        new AppViewer().start();
    }
}

export default Controller;
