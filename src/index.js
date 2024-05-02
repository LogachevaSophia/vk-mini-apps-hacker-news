import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
bridge.send("VKWebAppInit")

const root = ReactDOM.createRoot(document.getElementById('root')); 
const router = createHashRouter([
  {
    path: '/',
    panel: 'home_panel',
    view: 'default_view',
  },
  {
    path: '/post/:postId',
    panel: 'persik_panel',
    view: 'default_view',
  },
 
 
]);

root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
