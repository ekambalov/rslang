import Controller from './controller/controller';
import Store from './model/store';
import AppViewer from './view/appViewer';

class App {
    controller: Controller;

    constructor() {
        const viewer = new AppViewer();
        const store = new Store();
        this.controller = new Controller(store, viewer);
    }

    start(): void {
        this.controller.init();
    }
}

export default App;
