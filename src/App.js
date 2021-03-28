import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import './Css/estilonav.css';
import Main from './Components/Main';

import Book from './Components/Book';
import Books from './Components/Books';
import { Provider } from './Context/Provider'
//categories
import History from './Components/History/History';
import Novelas from './Components/Categories/Novelas/Novelas';
// import Novela from "./Components/Categories/Novelas/Novela";
import Poemas from './Components/Categories/Poemas/Poemas';
import Documentaries from "./Components/Categories/Documentaries/Documentaries";
import Otros from "./Components/Categories/Otros/Otros";

//authors
import Authors from './Components/Authors/Authors';
import News from './Components/News';

//admin
import Login from './Components/Admin/login';
import CaseAdmin from './Components/Admin/CaseAdmin';
import Prestamos from './Components/Admin/Prestamos';
import EspecificBook from './Components/Admin/EspecificBook';
import Reservations from './Components/Admin/Reservations';
import Returns from './Components/Admin/Returns';
import FormLoans from "./Components/Admin/FormLoans";
import FormAddBook from './Components/Admin/FormAddBook';

function App() {
  let isTrue = true;
console.log();
  return (
    <>
      <Router>
        <Provider>
          <Switch>
            <Route exact path="/libraryApp/" component={Main} />
            <Route exact path="/history" render={() => <History />} />
            <Route exact path="/book/:id" component={Book} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/novela" component={Novelas} />
            <Route exact path="/poema" component={Poemas} />
            <Route exact path="/documentales" component={Documentaries} />
            <Route exact path="/otros" component={Otros} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/news" component={News} />
            <Route exact path="/admin/login" component={Login} />
            {isTrue ? (
              <Route exact path="/admin/count" component={CaseAdmin} />
            ) : null}
            (<Route exact path="/admin/loans" component={Prestamos} />)
            <Route exact path="/admin/books" component={EspecificBook} />
            <Route exact path="/admin/add/books" component={FormAddBook} />
            <Route exact path="/admin/reservations" component={Reservations} />
            <Route exact path="/admin/returns" component={Returns} />
            <Route exact path="/admin/loan/:id" component={FormLoans} />
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
