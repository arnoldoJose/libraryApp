import React  ,{ useContext,Suspense, lazy } from 'react'

import { BrowserRouter as Router , Redirect, Route, Switch } from 'react-router-dom';

import './Css/estilonav.css';
import { CRMAuthContext } from "./Context/AuthProvider";
import { StateKey } from './Context/StateKey'
import { Provider } from "./Context/Provider";

import Login from "./Components/Admin/Login";

import Prestamos from "./Components/Admin/Prestamos";
import EspecificBook from "./Components/Admin/EspecificBook";
import Reservations from "./Components/Admin/Reservations";
import Returns from "./Components/Admin/Returns";

import Register from "./Components/Admin/Register";
import CaseAdmin from "./Components/Admin/CaseAdmin";
import FormAddBook from "./Components/Admin/FormAddBook";
import EditBook from "./Components/Admin/EditBook";
import ReportAdmin from "./Components/Admin/ReportAdmin";

// const CaseAdmin = lazy(() => import('./Components/Admin/CaseAdmin'));
// const Returns = lazy(() => import("./Components/Admin/Returns"));
// const Prestamos = lazy(() => import("./Components/Admin/Prestamos"));
// const EspecificBook = lazy(() => import("./Components/Admin/EspecificBook"));
// const Reservations = lazy(() => import("./Components/Admin/Reservations"));

function App() {

   const { auth } = useContext(CRMAuthContext);
//books loan return reservation
  return (
    <>
      <Router>
        <Provider>
          <StateKey>
            <Switch>
              <Route exact path="/admin/login" component={Login} />

              {auth.auth || localStorage.getItem("token") ? (
                <Route
                  exact
                  path="/sistemAdministration"
                  component={CaseAdmin}
                />
              ) : (
                <Redirect to="/admin/login" />
              )}


                <Route exact path="/admin/loans" component={Prestamos} />
                <Route exact path="/admin/books" component={EspecificBook} />
                <Route exact path="/admin/returns" component={Returns} />
                <Route
                  exact
                  path="/admin/reservations"
                  component={Reservations}
                />

                <Route exact path="/admin/add/books" component={FormAddBook} />
                <Route exact path="/admin/register" component={Register} />
                <Route exact path="/admin/edit/:id" component={EditBook} />

                {auth.user.typeUser === "admin" ? (
                  <Route exact path="/admin/report" component={ReportAdmin} />
                ) : (
                  <Redirect to="/admin/login" />
                )}

            </Switch>
          </StateKey>
        </Provider>
      </Router>
    </>
  );
}

export default App;
