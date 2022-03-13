import logo from './logo.svg';
import './App.css';
import store from "./store"
import { observer } from 'mobx-react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-center flex-column">
            <button className="btn" onClick={() => store.updateCount(1)}>
              Increment
            </button>
            <span>{store.count}</span>
            <button className="btn" onClick={() =>store.updateCount(-1)}>
              Decrement
            </button>
          </div>

        <a
          className="App-link"
          href="https://github.com/yogeshwaran-ramesh/mobx-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Git Repo
        </a>
      </header>
    </div>
  );
}

export default observer(App);
