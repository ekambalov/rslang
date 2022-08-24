import Observer from '../Abstract/observer';

export default class DataBaseServices extends Observer {
  // constructor() {
  //   super();
  //  this.session();
  // }
  /*
  async session(): Promise<void> {
    const email = sessionStorage.getItem('rs-lang-autorise-user');
    if (email) {
      this.isAutorise = true;
      const user: UserModel | null = await getUser(email);
      if (user) {
        this.user = user;
        this.dispath('account');
      }
    }
  }

  async action(action: string): Promise<void> {
    if (action === 'registration') {
      this.dispath('registration');
    }
    if (action === 'addUser') {
      if (!this.user.image) {
        this.user.image = './assets/no-user.png';
      }

      sessionStorage.setItem('match-match-game', this.user.email);
      this.dispath('account');
      this.isUser = true;
      document.location.hash = '#/score';
    }
    if (action === 'update') {
      await updateUser(this.user);
      this.dispath('account');
      document.location.hash = '#/score';
    }
    if (action === 'cancel') {
      document.location.hash = '#/score';
    }
  }
*/
}
