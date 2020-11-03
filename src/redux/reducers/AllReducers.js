import { combineReducers } from 'redux';
import contact from './contact'
import alerts from './alert'
import news from './new'
import newspaper from './newpaper'
import banners from './banner'
import products from './product'
import vacants from './vacant'

export default combineReducers({
    contact,
    alerts,
    news,
    newspaper,
    banners,
    vacants,
    products
});