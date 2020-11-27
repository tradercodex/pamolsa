import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './styles/global.css'

// Vistas
import Us from './views/Us'
import Products from './views/Products';
import Distributor from './views/Distributor'
import Sustainability from './views/Sustainability'
import WorkWithUs from './views/WorkWithUs'
import Clients from './views/Clients'
import News from './views/News';
import Contact from './views/Contact'
import Postulation from './views/Postulation';
import DetailProducts from './views/DetailProducts';
import DetailNew from './views/DetailNew';
import Dashboard from './views/Dashboard'
import GalleryNewPaper from './views/GalleryNewPaper';
import Login from './views/Login'
import ProductsByLine from './views/ProductsByLine';
import ProductsByType from './views/ProductsByType';
import ProductsByBusiness from './views/ProductsByBusiness'
import Quote from './views/Quote';
import { useDispatch } from 'react-redux'
import { updateCard } from './redux/actions/cart';
import DetailCommunity from './views/DetailCommunity';
import NotFound from './components/NotFound'
import ProductosBySearch from './views/ProductosBySearch'

const token = localStorage.getItem('token')

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCard());
  }, [])

  const Home = React.lazy(async () => {
    await new Promise(resolve => setTimeout(resolve,100))
    return import('./views/Home');
  })

  return (
    <Suspense fallback={
      <div className="content" id="content">
        <div className="cube-wrapper">
          <span className="loading" data-name="Loading">Cargando</span>
        </div>
      </div>
    }>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Us} />
          <Route exact path="/productos" component={Products} />
          <Route exact path="/productos/linea/:id" component={ProductsByLine} />
          <Route exact path="/cotizador" component={Quote} />
          <Route exact path="/productos/negocio/:name/:id" component={ProductsByBusiness} />
          <Route exact path="/productos/:name" component={ProductosBySearch} />
          <Route exact path="/sostenibilidad" component={Sustainability} />
          <Route exact path="/trabaja-con-nosotros" component={WorkWithUs} />
          <Route exact path="/trabaja-con-nosotros/postúlate" component={Postulation} />
          <Route exact path="/clientes" component={Clients} />
          <Route exact path="/noticias" component={News} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/home/distribuidores" component={Distributor} />
          <Route exact path="/productos/:name/:id" component={ProductsByType} />
          <Route exact path="/producto/detalle/:id" component={DetailProducts} />
          <Route exact path="/noticias/galeria-periodistica" component={GalleryNewPaper} />
          <Route exact path="/noticias/:name" component={DetailNew} />
          <Route exact path="/sostenibilidad/comunidad/:name" component={DetailCommunity} />
          <Route exact path="/login" component={Login} />
          {
            token ? <Route exact patch="/admin" component={Dashboard} /> : 'No se encontro la pagina'
          }
          <NotFound />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
