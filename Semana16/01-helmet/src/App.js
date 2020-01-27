import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom';
import AppRoute from './Components/AppRoute';
import Productos from './Components/Client/Productos';
import Users from './Components/Admin/Users';

import AdminLayout from './Layouts/AdminLayout';
import ClientLayout from './Layouts/ClientLayout';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AppRoute exact path="/" component={Productos} layout={ClientLayout} title={'React Ventas'}subtitle="Con React Ventas puedes incrementar tus ventas" />
          
          <AppRoute exact path="/admin/users" component={Users} layout={AdminLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

