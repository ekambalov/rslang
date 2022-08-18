import Header from './startPage/header';
import { IComponentBody } from './InterfaseComponent';
import listener from '../controller/listenerEvent';
import Footer from './footer/footer';

class AppViewer implements IComponentBody {
    start(): HTMLBodyElement {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.classList.add('body');
        const header = new Header();
        const footer = new Footer();
        body.prepend(header.start(), footer.start());
        body.addEventListener('click', listener);
        return body;
    }
}

export default AppViewer;
