import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './styles/global.css'

// Vistas
import Us from './views/Us'
import Claims from './views/Claims'
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

  const Home = React.lazy(() => {
    return import('./views/Home');
  })

 /* const Home = lazy(() => import('./views/Home'));
  const Us = lazy(() => import('./views/Us'));
  const Products = lazy(() => import('./views/Products'));
  const ProductsByLine = lazy(() => import('./views/ProductsByLine'));
  const Quote = lazy(() => import('./views/Quote'));
  const ProductsByBusiness = lazy(() => import('./views/ProductsByBusiness'));
  const ProductosBySearch = lazy(() => import('./views/ProductosBySearch'));
  const Sustainability = lazy(() => import('./views/Sustainability'));
  const WorkWithUs = lazy(() => import('./views/WorkWithUs'));
  const Postulation = lazy(() => import('./views/Postulation'));
  const Clients = lazy(() => import('./views/Clients'));
  const News = lazy(() => import('./views/News'));
  const Contact = lazy(() => import('./views/Contact'));
  const Distributor = lazy(() => import('./views/Distributor'));
  const ProductsByType = lazy(() => import('./views/ProductsByType'));
  const DetailProducts = lazy(() => import('./views/DetailProducts'));
  const GalleryNewPaper = lazy(() => import('./views/GalleryNewPaper'));
  const DetailNew = lazy(() => import('./views/DetailNew'));
  const DetailCommunity = lazy(() => import('./views/DetailCommunity'));
  const Login = lazy(() => import('./views/Login'));
  const Dashboard = lazy(() => import('./views/Login'));*/

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/libro-de-reclamaciones" component={Claims} />
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
            token ? <Route exact patch="/admin" component={Dashboard} /> : <NotFound />
          }
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
