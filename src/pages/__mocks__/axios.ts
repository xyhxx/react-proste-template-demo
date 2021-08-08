/*
 * @Author: xyh
 * @Date: 2021-08-07 23:02:16
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-07 23:06:27
 * @FilePath: \proste-demo\src\pages\Profile\__mocks__\axios.ts
 * @Description: axios mocks
 */
type MockType ={
  create(): any;
  get(url: string): Promise<any> | null;
};

const mock = {
  create():MockType {
    return this;
  },
  get(url:string):Promise<any> | null {
    if (url === 'http://jsonplaceholder.typicode.com/users') {
      return Promise.resolve({data: [
        {id: '1', name: 'simon'},
        {id: '2', name: 'david'},
      ]});
    }

    return null;
  },
};
export default mock;