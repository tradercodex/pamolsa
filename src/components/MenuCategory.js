import React from 'react';
import Search from '../components/Search'
import '../styles/products.css'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

const MenuCategory = ({search,onTextChanged,renderSuggestions,display,options,setSearch,searchPress,match,typesProducts,typesBusiness,}) => {

    let url = match.url

    return ( 
        <div className="Menu-Category_pm">
            <div>
                <Search search={search} onTextChanged={onTextChanged} renderSuggestions={renderSuggestions}  display={display} options={options} setSearch={setSearch} searchPress={searchPress} url={url} typesBusiness={typesBusiness} />
                <div className="categories-products">
                    <div className="menu-categories">
                        <ul>
                            {
                                typesProducts.map(tp => (
                                    <li key={tp.id}>
                                        <Link to={`/productos/${tp.name}/${tp.id}`} className={ url === `/productos/${tp.name}/${tp.id}` ? "active-category" : 'category' }><img width="20px" src={`https://` + tp.url} /><span>{tp.name}</span></Link>
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