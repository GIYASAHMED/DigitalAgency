import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/Aboutus/About';
import Home from './components/Home';
import Services from './components/services/Service';
import ServicesDetails from './components/services/ServicesDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: "",
      element:<Home/>
    }, {
      path: "about",
      element:<About/>
      },
      {
        path: "services",
        element:<Services/>
      },
      {
        path: "ServicesDetails",
        element:<ServicesDetails/>
    }]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router} />

    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
