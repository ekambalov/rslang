import { Router } from './router';

function listener(e: Event) {
    if ((e.target as HTMLElement).closest('.teamPage__btn')) new Router().showStartPage();
    if ((e.target as HTMLElement).closest('.main__mobileImgBlock_autor') || (e.target as HTMLElement).closest('.teams'))
        new Router().showTeamPage();
    if (
        (e.target as HTMLElement).closest('.main__mobileImgBlock_autorize') ||
        (e.target as HTMLElement).closest('.autorise')
    )
        new Router().showFormAutorise();
    if (
        (e.target as HTMLElement).closest('.returnBtn') ||
        (e.target as HTMLButtonElement).classList.contains('returnBtn') ||
        (e.target as HTMLElement).closest('.houme')
    )
        new Router().showStartPage();
}
export default listener;
