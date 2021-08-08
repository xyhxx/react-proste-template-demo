import { FC, useState } from 'react';
import style from '@styles/app.module.scss';

const App:FC = () => {
  const [count, setCount] = useState(0);

  return <>
    <h1 className={style.title} data-testid='title'>count is {count}</h1>
    <div className={style.btnGroup}>
      <button onClick={() => setCount(val => val + 1)} data-testid='increment'>increment</button>
      <button onClick={() => setCount(val => val - 1)} data-testid='reduce'>reduce</button>
    </div>
  </>;
};

export default App;