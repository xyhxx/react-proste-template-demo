import { FC, useEffect, useReducer} from 'react';
import style from '@styles/app.module.scss';
import { useCount } from '@/controllers';
import { Link } from 'react-router-dom';
import { ProfilePage } from '@routes/name';
import { filter } from '@utils/shared';
import logo from '@assets/logo.png';

const testArr = [1, 2, 3, 4, 5, 6];

type ActionType = {
  type: 'ADD',
  payload: number[],
}
const reduceAction = (state = [] as number[], action: ActionType):number[] => {
  switch (action.type) {
    case 'ADD': {
      return [...action.payload];
    }
  }

  return [...state];
};

const App:FC = () => {
  const [count, increment, reduce] = useCount(0);
  const [arr, dispatch] = useReducer(reduceAction, []);

  useEffect(() => {
    const result = filter<number, number>(testArr, val => val > 2);

    dispatch({type: 'ADD', payload: result});
  }, []);

  return <>
    <img src={logo} style={{width: '400px'}}></img>
    <h1 className={style.title} data-testid='title'>count is {count}</h1>
    <div className={style.btnGroup}>
      <button onClick={increment} data-testid='increment'>increment</button>
      <button onClick={reduce} data-testid='reduce'>reduce</button>
    </div>
    <Link to={ProfilePage} data-testid='link'>toProfile</Link>
    <div data-testid='arr-list'>
      {arr.map(val => {
        return <h5 key={val}>{val}</h5>;
      })}
    </div>
  </>;
};

export default App;