/*
 * @Author: xyh
 * @Date: 2021-08-07 21:46:29
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-07 22:08:40
 * @FilePath: \proste-demo\src\apis\apis.ts
 * @Description: 接口内容
 */

import http from './helper';

export const getList = async():Promise<any> => {
  return await http.get('http://jsonplaceholder.typicode.com/users');
};