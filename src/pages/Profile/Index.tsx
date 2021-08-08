/*
 * @Author: xyh
 * @Date: 2021-08-07 21:14:58
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-07 22:25:06
 * @FilePath: \proste-demo\src\pages\Profile\Index.tsx
 * @Description: 个人中心页面
 */

import { FC, useEffect, useState } from 'react';
import {ProfileTitle} from '@components/index';
import { useDispatch, useSelector } from 'react-redux';
import { editAgeAction, editNameAction, ProfileDispatch, StoreState } from '@stores/index';
import { ProfileState } from '@stores/profile/reducer';
import { getList } from '@apis/index';

export const Profile:FC = () => {
  const {name, age} = useSelector<StoreState, ProfileState>(val => val.profile);
  const dispatch:ProfileDispatch = useDispatch();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then(val => {
      setList(() => val.data);
    });
  }, []);

  const editName = () => {
    dispatch(editNameAction('edit')).then(val => {
      console.log(val);
    });
  };
  const editAge = () => {
    dispatch(editAgeAction(10)).then(val => {
      console.log(val);
    });
  };

  return <>
    <ProfileTitle />
    <h3 data-testid='title'>user name is {name}, age is {age}</h3>
    <button onClick={editName} data-testid='edit_name'>edit name</button>
    <button onClick={editAge} data-testid='edit_age'>edit age</button>
    <ul data-testid='list'>
      {list.map((val:any) => {
        return <h1 key={val.id}>{val.name}</h1>;
      })}
    </ul>
  </>;
};
