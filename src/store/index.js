import { makeAutoObservable } from "mobx";
import { counter } from "./actions/counter";
class Store {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

   updateCount(value) {
    this.count = counter(this.count,value);
  }
}
const store = new Store();
export default store;