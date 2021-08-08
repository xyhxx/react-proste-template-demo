/*
 * @Author: xyh
 * @Date: 2021-08-07 23:08:54
 * @LastEditors: xyh
 * @LastEditTime: 2021-08-08 14:00:45
 * @FilePath: \proste\src\pages\__tests__\App.tsx
 * @Description:
 */

import {act, fireEvent, render, screen as sc} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from '@routes/index';
import {renderRoutes} from 'react-router-config';
import store from '@stores/index';
import {Provider} from 'react-redux';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Provider>,
  );
});

test(`
  1. click increment btn, innterHTML is count is 1
  2. click reduce btn, innertTHML is count is 0
`, () => {
  const incrementBtn = sc.getByTestId('increment');
  const reduceBtn = sc.getByTestId('reduce');
  const html = sc.getByTestId('title');

  fireEvent.click(incrementBtn);

  expect(html).toHaveTextContent('count is 1');

  fireEvent.click(reduceBtn);

  expect(html).toHaveTextContent('count is 0');
});

test('find arr list', () => {
  const list = sc.getByTestId('arr-list');

  expect(list.childElementCount).toBe(4);
});

test('route link', async() => {
  const linkBtn = sc.getByTestId('link');

  fireEvent.click(linkBtn);

  let title;
  // 等待页面跳转完成后的useeffect中的加载完成
  await act(async() => {
    title = await sc.findByTestId('title');
  });

  expect(title).toHaveTextContent('user name is unset, age is 0');
});