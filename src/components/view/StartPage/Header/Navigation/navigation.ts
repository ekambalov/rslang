import { IComponentNav } from '../../../Interfase-component';
import { createDiv, createImg } from '../../../../../utils/HTML-Builder';

const navAnchor = ['Главная', 'Учебник', 'Аудиовызов', 'Спринт', 'Статистика', 'Авторы'];
const classItem = ['houme', 'book', 'audioGame', 'sprint', 'statistic', 'teams'];

class Navigation implements IComponentNav {
    closeMain(e: Event): void {
        e.stopPropagation();
        (document.querySelector('.header__navigation') as HTMLDivElement).classList.toggle('active');
    }

    start(): HTMLDivElement {
        const navigation = createDiv(['header__navigation']);
        const closeMenu = createImg('../../../assets/img/closeMenu.png', 'icon close menu', [
            'header__navigation_icon',
        ]);
        closeMenu.addEventListener('mouseover', () => {
            closeMenu.src = '../../../assets/img/closeMenu2.png';
        });
        closeMenu.addEventListener('mouseleave', () => {
            closeMenu.src = '../../../assets/img/closeMenu.png';
        });
        closeMenu.addEventListener('click', this.closeMain);
        const navigationUL = document.createElement('ul') as HTMLUListElement;
        navigationUL.classList.add('header__navigation_ul');

        for (let i = 0; i < navAnchor.length; i += 1) {
            const navigationLI = document.createElement('li') as HTMLLIElement;
            navigationLI.classList.add('header__navigation_li');
            navigationLI.classList.add(`${classItem[i]}`);

            const anchorNav = document.createElement('a') as HTMLAnchorElement;
            anchorNav.classList.add('header__navigation_a');

            anchorNav.innerHTML = navAnchor[i];
            navigationLI.append(anchorNav);
            navigationUL.append(navigationLI);
        }
        navigation.append(closeMenu, navigationUL);
        return navigation;
    }
}

export default Navigation;
