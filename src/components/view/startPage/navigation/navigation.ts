import { IComponent } from '../../InterfaseComponent';
// eslint-disable-next-line import/no-cycle

const navAnchor = ['Учебник', 'Аудиовызов', 'Спринт', 'Статистика', 'Авторы', 'Авторизация'];
const classItem = ['book', 'audioGame', 'sprint', 'statistic', 'teams', 'autorise'];

class Navigation implements IComponent {
    start(): HTMLDivElement {
        const navigation = document.createElement('nav') as HTMLDivElement;
        navigation.classList.add('header__navigation');

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
        navigation.append(navigationUL);
        return navigation;
    }
}

export default Navigation;
