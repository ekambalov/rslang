import Observer from '../Abstract/observer';

export default class FormService extends Observer {
  errorMessage = () => {
    this.dispath('error-message');
  };

  removeErrorMessage = () => {
    this.dispath('remove-error-message');
  };
}
