/*
 * @Author: xyh
 * @Date: 2021-08-07 23:09:27
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-08 13:54:19
 * @FilePath: \proste\src\pages\__tests__\Profile.tsx
 * @Description:
 */

import {act, fireEvent, render, screen as sc} from '@testing-library/react';
import store from '@stores/index';
import {Provider} from 'react-redux';
import {Profile} from '@pages/index';

beforeEach(async() => {
  await act(async() => {
    render(<Provider store={store}>
      <Profile />
    </Provider>);
  });
});

test(`
  test redux
  1. edit name title is user name is edit, age is 0
  2. edit age title is user name is edit, age is 10
`, async() => {
  const title = sc.getByTestId('title');
  const editNameBtn = sc.getByTestId('edit_name');
  const editAgeBtn = sc.getByTestId('edit_age');

  await act(() => {
    fireEvent.click(editNameBtn);
    fireEvent.click(editAgeBtn);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  });

  expect(title).toHaveTextContent('user name is edit, age is 10');
});

test('axios get name list', () => {
  const list = sc.getByTestId('list');

  expect(list.childElementCount).toBe(2);
});
