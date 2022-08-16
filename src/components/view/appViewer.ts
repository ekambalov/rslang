import Header from './startPage/header';
import { IComponentBody } from './InterfaseComponent';

class AppViewer implements IComponentBody {
    start(): HTMLBodyElement {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.classList.add('body');
        const header = new Header();
        body.prepend(header.start());
        return body;
    }
}

export default AppViewer;
