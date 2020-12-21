import React from 'react';
import Search from '../components/Search'
import '../styles/products.css'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

const MenuCategory = ({setSearch,searchPress,match,typesProducts,typesBusiness,}) => {

    let url = match.url

    return ( 
        <div className="Menu-Category_pm">
            <div>
                <Search setSearch={setSearch} searchPress={searchPress} url={url} typesBusiness={typesBusiness} />
                <div className="categories-products">
                    <div className="menu-categories">
                        <ul>
                            {
                                typesProducts.map(tp => (
                                    <li key={tp.id}>
                                        <Link to={`/productos/${tp.name}/${tp.id}`} className={ url === `/productos/${tp.name}/${tp.id}` ? "active-category" : 'category' }><img width="20px" src={`http://` + tp.url} /><span>{tp.name}</span></Link>
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