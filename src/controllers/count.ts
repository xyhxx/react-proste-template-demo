import { useState } from 'react';

type UseCount = [number, () => void, () => void ];

export const useCount = (init:number):UseCount => {
  const [count, setCount] = useState(init);

  const increment = () => setCount(val => val + 1);
  const reduce = () => setCount(val => val - 1);

  return [
    count,
    increment,
    reduce,
  ];
};