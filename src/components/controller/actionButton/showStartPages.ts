import Header from '../../view/startPage/header';

function showStartPage(e: Event): void {
    e.stopPropagation();
    document.querySelector('.teamPage')?.replaceWith?.(new Header().start());
}
export default showStartPage;
