import React, { Fragment } from 'react'
import Filter from './Filter'
import ProductsFilter from './ProductsFilter'

const Products = ({products}) => {
    return ( 
        <Fragment>
            <Filter />
            <ProductsFilter products={products} />
        </Fragment>
     );
}
 
export default Products;