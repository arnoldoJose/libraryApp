import React from 'react'

import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import './Css/estilonav.css';

import Main from './Components/Main';

import Book from './Components/Book';
import Books from './Components/Books';

import { Provider } from './Context/Provider';
//categories quitar tambien
import Novelas from './Components/Categories/Novelas/Novelas';
import History from './Components/History/History';
import Poemas from './Components/Categories/Poemas/Poemas';
import Documentaries from "./Components/Categories/Documentaries/Documentaries";
import Otros from "./Components/Categories/Otros/Otros";
//authors quitar
import Authors from './Components/Authors/Authors';
import News from './Components/News';


function App() {

  return (
    <>
      <Router>
        <Provider>
          <Switch>
            <Route exact path="/libraryApp/" component={Main} />
            <Route exact path="/history/" component={History} />
            <Route exact path="/book/:id" component={Book} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/novela" component={Novelas} />
            <Route exact path="/poema" component={Poemas} />
            <Route exact path="/documentales" component={Documentaries} />
            <Route exact path="/otros" component={Otros} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/news" component={News} />
          </Switch>
        </Provider>
      </Router>
    </>
  );}

export default App;
