import React from 'react';
import {Link} from 'react-router-dom'

const products = [
    {
        "_id": 0,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 1,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 2,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 3,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 4,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 5,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 6,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 7,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
    {
        "_id": 8,
        "name": "Plato bandeja 2D2 Bioform Carton P15"
    },
]

const ProductsFilter = () => {
    return (
        <div className="products-default">
            {
                products.map(product => (
                    <div key={product._id}>
                        <div className="product">
                            <div className="square-products"></div>
                            <h5>{product.name}</h5>
                            <div className="img-product">
                                <img src={require('../images/img/carton.png')} />
                            </div>
                            <Link to="/productos/envase/detail">Ver más</Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default ProductsFilter;