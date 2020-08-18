import React from 'react';
import Search from '../components/Search'
import '../styles/products.css'
import { Link, withRouter } from 'react-router-dom';

const categories = [
    {
        "_id": 0,
        "name": "Contenedores térmicos"
    },
    {
        "_id": 1,
        "name": "Bandejas"
    },
    {
        "_id": 2,
        "name": "Platos"
    },
    {
        "_id": 3,
        "name": "Envases circulares"
    },
    {
        "_id": 4,
        "name": "Envases rectangulares"
    },
    {
        "_id": 5,
        "name": "Envases visagra"
    },
    {
        "_id": 6,
        "name": "Domos y pisos de torta"
    },
    {
        "_id": 7,
        "name": "Vasos"
    },
    {
        "_id": 8,
        "name": "Accesorios"
    },
    {
        "_id": 9,
        "name": "Clamshells y Pummets"
    },
]


const MenuCategory = ({match}) => {

    let url = match.url
    console.log(url)

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
                                        <Link className={ url === `/productos/${category.name}` ? "active-category" : '' } to={`/productos/${category.name}`}>{category.name}</Link>
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