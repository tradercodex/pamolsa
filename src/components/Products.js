import React, { Fragment } from 'react'
import Filter from './Filter'
import ProductsFilterByLine from './ProductsFilterByLine'

const Products = ({  
    products,
    countProduct, 
    lineBioform, 
    lineFoodService,
    lineIndustrial,
    lineAgroIndustrial,
    productsByFilter, 
    toggleTypesProductsRadio,
    countProductsByFilter,
    nameTypeProduct,
    nameTypeBusiness
}) => {
    return ( 
        <Fragment>
            <Filter 
                nameTypeBusiness = {nameTypeBusiness}
                nameTypeProduct={nameTypeProduct}
                lineBioform={lineBioform} 
                lineFoodService={lineFoodService} 
                lineIndustrial={lineIndustrial} 
                lineAgroIndustrial={lineAgroIndustrial}
                countProduct = {countProduct}
                countProductsByFilter={countProductsByFilter}
            />
            <ProductsFilterByLine 
                lineBioform={lineBioform} 
                products={products} 
                toggleTypesProductsRadio={toggleTypesProductsRadio}
                productsByFilter={productsByFilter}
            />
        </Fragment>
     );
}
 
export default Products;