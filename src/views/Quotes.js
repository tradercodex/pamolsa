import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import SidebarProducts from '../components/SidebarProducts'

import '../styles/quotes.css'
import Footer from '../components/Footer';
import Products from '../components/Products';

import { 
    getMaterials, 
    getProductByFilter, 
    getTypesBusiness, 
    getTypesProducts, 
    getLineProducts,
    getProductsByType
} from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const Quotes = ({ match }) => {

    const type_id = match.params.id

    const linesProducts = useSelector(state => state.products.lineProducts)
    const typesProducts = useSelector(state => state.products.typesProducts)
    const typesBusiness = useSelector(state => state.products.typesBusiness)
    const productsFilter = useSelector(state => state.products.productsByFilter)
    const materials = useSelector(state => state.products.materials)
    const productsByType = useSelector(state => state.products.productsByTypes)
    const dispatch = useDispatch();

    const [businessId, setBussinesId] = useState({
        ids: []
    });
    const [materialId, setMatarialId] = useState()
    const [lineId, setLineId] = useState();

    const toggleChange = (e) => {
        setMatarialId(e.target.value)
    }

    const toggleChangeCheckbox = (e,item) => {
        const { ids } = businessId;
        let newArr = [];

        if (!ids.includes(item)) {
            newArr = [...ids, item];
        } else {
            newArr = ids.filter(a => a !== item);
        }

        setBussinesId({
            ids: newArr
        })
    }

    const toggleLineProductsRadio = (e) => {
        setLineId(e.target.value)
    }

    useEffect(() => {

            dispatch(getTypesProducts(8, 1));
            dispatch(getTypesBusiness());
            dispatch(getMaterials());
            dispatch(getLineProducts(4,1));
            dispatch(getProductByFilter(type_id, materialId, businessId.ids,lineId))
            dispatch(getProductsByType(type_id))
        }, [type_id, materialId, businessId.ids,lineId])

        console.log(productsByType)

        return (
            <Fragment>
                <Header />
                <MenuCategory typesProducts={typesProducts} />
                <div className="Quotes-pm">
                    <div className="Sidebar-Material_Quote">
                        <SidebarProducts 
                            linesProducts={linesProducts} 
                            toggleChangeCheckbox={toggleChangeCheckbox} 
                            toggleLineProductsRadio = {toggleLineProductsRadio}
                            typesBusiness={typesBusiness} 
                            toggleChange={toggleChange} 
                            materials={materials} 
                        />
                    </div>
                    <div className="Products-Quote">
                        <Products productsFilter={productsFilter} productsByType={productsByType} />
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

export default Quotes;