import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'lib-flexible'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import "@/styles/reset.less"
import "@/styles/icon/icon.less"

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
</Provider>
)
