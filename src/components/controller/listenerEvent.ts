import { Router } from './router';

function listener(e: Event) {
    if ((e.target as HTMLElement).closest('.teamPage__btn')) new Router().showStartPage();
    if (
        (e.target as HTMLElement).closest('.header__mobileImgBlock_autor') ||
        (e.target as HTMLElement).closest('.teams')
    )
        new Router().showTeamPage();
}
export default listener;
