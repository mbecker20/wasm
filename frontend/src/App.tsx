import type { Component } from 'solid-js';

import styles from './App.module.css';

import { greet, add } from './pkg/wasm';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div>
        1 + 2 = {add(1, 2)}
      </div>
      <button onClick={() => greet("max")}>
        click to greet
      </button>
    </div>
  );
};

export default App;
