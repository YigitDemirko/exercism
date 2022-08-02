//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accountOpen = false;
    this.accountBalance = 0;
  }
  open() {
    if(!this.accountOpen){
      this.accountOpen = true;
      this.accountBalance = 0;
    } else {
      throw new ValueError();
    }
  }
  close() {
    if(this.accountOpen){
      this.accountOpen = false;
    } else {
      throw new ValueError();
    }
  }
  deposit(val) {
    if(val > 0 && this.accountOpen){
      this.accountBalance += val;
    } else {
      throw new ValueError();
    }
  }
  withdraw(val) {
    if(val > 0 && val <= this.accountBalance && this.accountOpen){
      this.accountBalance -= val;
    } else {
      throw new ValueError();
    }
  }
  get balance() {
    if(this.accountOpen){
      return this.accountBalance;
    } else {
      throw new ValueError();
    }
  }
}
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
