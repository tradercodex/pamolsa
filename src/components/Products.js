import React, { Fragment } from 'react'
import Filter from './Filter'
import ProductsFilter from './ProductsFilter'

const Products = ({productsFilter, productsByType}) => {
    return ( 
        <Fragment>
            <Filter />
            <ProductsFilter productsFilter={productsFilter} productsByType={productsByType} />
        </Fragment>
     );
}
 
export default Products;