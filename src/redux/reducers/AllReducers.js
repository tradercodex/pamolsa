import { combineReducers } from 'redux';
import contact from './contact'
import alerts from './alert'
import news from './new'
import newspaper from './newpaper'
import banners from './banner'
import products from './product'
import vacants from './vacant'
import activities from './activity'
import communities from './community'
import cart from './cart'
import auth from './auth'
import newfile from './newFile'
import places from './place'

export default combineReducers({
    contact,
    alerts,
    news,
    newspaper,
    banners,
    vacants,
    products,
    activities,
    communities,
    cart,
    auth,
    newfile,
    places
});