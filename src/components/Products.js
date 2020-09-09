import React, { Fragment } from 'react'
import Filter from './Filter'
import ProductsFilter from './ProductsFilter'

const Products = () => {
    return ( 
        <Fragment>
            <Filter />
            <ProductsFilter />
        </Fragment>
     );
}
 
export default Products;