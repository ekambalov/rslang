// import './autorise-Form.scss';
// import { IComponent } from '../../Components/view/Interfase-component';
// import { createDiv, createForm, createInput, createBtn, createLabel, createText } from '../../utils/HTML-Builder';

// class FormBlock implements IComponent {
//     start(): HTMLDivElement {
//         const formBlock = createDiv(['main__formBlock']);
//         const forma = createForm('post', 'formAutorize', ['formBlock__form']);
//         const helloTxt = createText('Привет!', 'h5', ['formBlock__form_txt']);

//         const labelName = createLabel('Ваш email:', 'inputName', ['formBlock__form_label', 'labelName']);
//         const inputName = createInput('email', ['formBlock__form_input', 'inputName'], 'inputName');
//         inputName.focus();

//         const labelPassword = createLabel('Пароль:', 'inputPassword', ['formBlock__form_label', 'labelPassword']);
//         const inputPassword = createInput('password', ['formBlock__form_input', 'inputPassword'], 'inputPassword');

//         const buttonFormOpen = createBtn('Войти', ['formBlock__form_btn', 'openBtn'], 'submit');
//         const buttonFormRegistr = createBtn('Регистрация', ['formBlock__form_btn', 'registrBtn'], 'submit');
//         const buttonReturn = createBtn('return', ['returnBtn'], 'button');

//         forma.append(helloTxt, labelName, inputName, labelPassword, inputPassword, buttonFormOpen, buttonFormRegistr);
//         formBlock.append(forma, buttonReturn);
//         return formBlock;
//     }
// }

// export default FormBlock;
