import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/global.css'

// Vistas
import Home from './views/Home';
import Us from './views/Us'
import Products from './views/Products';
import Distributor from './views/Distributor'
import Quotes from './views/Quotes'
import Sustainability from './views/Sustainability'
import WorkWithUs from './views/WorkWithUs'
import Clients from './views/Clients'
import News from './views/News';
import Contact from './views/Contact'
import Postulation from './views/Postulation';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Us} />
          <Route exact path="/productos" component={Products} />
          <Route exact path="/sostenibilidad" component={Sustainability} />
          <Route exact path="/trabaja-con-nosotros" component={WorkWithUs} />
          <Route exact path="/trabaja-con-nosotros/postúlate" component={Postulation} />
          <Route exact path="/clientes" component={Clients} />
          <Route exact path="/noticias" component={News} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/home/distribuidores" component={Distributor} />
          <Route exact path="/productos/:name" component={Quotes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
