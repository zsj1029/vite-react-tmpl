class Account {
  state: User = { isLogin: false, login_name: 'neuro', password: '', count: 0 };
  add(val: number) {
    const { count } = this.state;
    // console.log(val);
    // @ts-ignore
    this.setState({ count: count + val });
  }
  sub() {
    const { count } = this.state;
    // @ts-ignore
    this.setState({ count: count - 1 });
  }
  async addLater() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.add(2);
  }
}

export default Account;

export interface User {
  login_name: string;
  password?: string;
  isLogin: boolean;
  count: number;
}
