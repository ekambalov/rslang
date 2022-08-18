import { IComponentBody } from './Interfase-component';
import listener from '../controller/listener-event';
import Header from './StartPage/Header/header';
import Main from './StartPage/Main/main';
import Footer from './StartPage/Footer/footer';

class AppViewer implements IComponentBody {
    start(): HTMLBodyElement {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.classList.add('body');
        const header = new Header().start();
        const main = new Main().start();
        const footer = new Footer().start();
        body.prepend(header, main, footer);
        body.addEventListener('click', listener);
        return body;
    }
}

export default AppViewer;
