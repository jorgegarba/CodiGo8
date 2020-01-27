import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import AppRoute from './Components/AppRoute';
import Productos from './Components/Client/Productos';
// import Users from '../Components/Admin/Users';

import AdminLayout from './Layouts/AdminLayout';
import ClientLayout from './Layouts/ClientLayout';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AppRoute exact path="/" component={Productos} layout={ClientLayout} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

