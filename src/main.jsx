import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './App.jsx'
import './index.css'
import './../node_modules/rsuite/dist/rsuite.css'
import { BrowserRouter } from "react-router-dom";
import { CustomProvider } from 'rsuite';
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/Slices/AuthSlice.js"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <CustomProvider rtl>
  <Provider store={store}>
  <App/>
  <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={true}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
  </Provider>

  </CustomProvider>

  </BrowserRouter>
  </React.StrictMode>,
)
