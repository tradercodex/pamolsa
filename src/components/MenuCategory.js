import React from 'react';
import Search from '../components/Search'
import category1 from '../images/img/category.png'
import category2 from '../images/img/category2.png'
import category3 from '../images/img/category3.png'
import category4 from '../images/img/category4.png'
import category5 from '../images/img/category5.png'
import category6 from '../images/img/category6.png'
import category7 from '../images/img/category7.png'
import category8 from '../images/img/category8.png'
import category9 from '../images/img/category9.png'
import '../styles/products.css'
import { Link, withRouter } from 'react-router-dom';

const categories = [
    {
        "_id": 0,
        "name": "Contenedores",
        "img": category1
    },
    {
        "_id": 1,
        "name": "Envases y Tapas",
        "img": category2
    },
    {
        "_id": 2,
        "name": "Envase Bisagra",
        "img": category3
    },
    {
        "_id": 3,
        "name": "Bandeja",
        "img": category4
    },
    {
        "_id": 4,
        "name": "Domos y Bases",
        "img": category5
    },
    {
        "_id": 5,
        "name": "Vasos y Tapas",
        "img": category6
    },
    {
        "_id": 6,
        "name": "Salseros",
        "img": category7
    },
    {
        "_id": 7,
        "name": "Films",
        "img": category8
    },
    {
        "_id": 8,
        "name": "Otros",
        "img": category9
    },
]


const MenuCategory = ({match}) => {

    let url = match.url

    return ( 
        <div className="Menu-Category_pm">
            <div>
                <Search />
                <div className="categories-products">
                    <div className="menu-categories">
                        <ul>
                            {
                                categories.map(category => (
                                    <li key={category._id}>
                                        <Link className={ url === `/productos/${category.name}` ? "active-category" : 'category' } to={`/productos/${category.name}`}><img src={category.img} alt=""/><span>{category.name}</span></Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(MenuCategory);