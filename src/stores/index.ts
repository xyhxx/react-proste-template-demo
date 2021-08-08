/*
 * @Author: xyh
 * @Date: 2021-08-07 20:47:03
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-07 21:27:01
 * @FilePath: \proste-demo\src\stores\index.ts
 * @Description:
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import profile, {ProfileState} from './profile/reducer';

const store = createStore(combineReducers({profile}), applyMiddleware(thunk));

//#region 导出store
export default store;
//#endregion

//#region 导出类型

//dispatch类型
export type {
  ProfileDispatch,
} from './profile/action';

// store类型
export type StoreState = {
  profile: ProfileState,
};
//#endregion

//#region 导出action
export {
  editAgeAction,
  editNameAction,
} from './profile/action';
//#endregion
