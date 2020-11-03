import React, { useEffect } from 'react';
import Search from '../components/Search'
import '../styles/products.css'
import { Link, withRouter } from 'react-router-dom';

const MenuCategory = ({match,typesProducts}) => {

    let url = match.url

    console.log(typesProducts)

    return ( 
        <div className="Menu-Category_pm">
            <div>
                <Search />
                <div className="categories-products">
                    <div className="menu-categories">
                        <ul>
                            {
                                typesProducts.map(tp => (
                                    <li key={tp.id}>
                                        <Link className={ url === `/productos/${tp.name}/${tp.id}` ? "active-category" : 'category' } to={`/productos/${tp.name}/${tp.id}`}>{tp.name}</Link>
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