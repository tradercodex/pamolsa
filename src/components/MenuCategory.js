import React from 'react';
import Search from '../components/Search'
import '../styles/products.css'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

const MenuCategory = ({searchPress,match,typesProducts,typesBusiness,resetCheckbox,setProductsQuery,setSearch}) => {

    let url = match.url

    return ( 
        <div className="Menu-Category_pm">
            <div>
                <Search searchPress={searchPress} url={url} setSearch={setSearch} setProductsQuery={setProductsQuery} typesBusiness={typesBusiness} />
                <div className="categories-products">
                    <div className="menu-categories">
                        <ul>
                            {
                                typesProducts.map(tp => (
                                    <li key={tp.id}>
                                        <a onClick={resetCheckbox} href={`/productos/${tp.name}/${tp.id}`} className={ url === `/productos/${tp.name}/${tp.id}` ? "active-category" : 'category' }><img width="20px" src={`http://` + tp.url} /><span>{tp.name}</span></a>
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