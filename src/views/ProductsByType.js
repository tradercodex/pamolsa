import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header'
import MenuCategory from '../components/MenuCategory'
import SidebarProducts from '../components/SidebarProducts'

import '../styles/quotes.css'
import Footer from '../components/Footer';
import Products from '../components/Products';
import Axios from 'axios'
import Pagination from '../components/Pagination'

import {
    getProductByFilter,
    getTypesProducts,
    getTypesBusiness
} from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'

const ProductsByType = ({ match }) => {

    const type_id = match.params.id
    const nameTypeProduct = match.params.name

    const typesBusiness = useSelector(state => state.products.typesBusiness)
    const typesProducts = useSelector(state => state.products.typesProducts)
    const productsByFilter = useSelector(state => state.products.productsByFilter)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)
    const [lines, setLines] = useState();
    const [business, setBusiness] = useState();
    const [material, setMaterial] = useState();
    const [products, setProducts] = useState([]);
    const [materialId, setMatarialId] = useState()
    const [countProduct, setCountProduct] = useState();
    const [lineId, setLineId] = useState();
    const [businessId, setBussinesId] = useState({
        ids: []
    });

    const toggleChange = (e) => {
        setMatarialId(e.target.value)
    }

    const toggleChangeCheckbox = (e, item) => {
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

    const apiGetLines = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/line/list?type_id=${type_id}`);
        setLines(response.data.data)
    }

    const apiGetBusiness = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/business/list?type_id=${type_id}`);
        setBusiness(response.data.data)
    }

    const apiGetMaterial = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/material/list?type_id=${type_id}`);
        setMaterial(response.data.data)
    }

    const apiGetProductsByTypes = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/list?type_id=${type_id}`);
        setProducts(response.data.data)
        setCountProduct(response.data.extra.total)
    }

    let countProductsByFilter = productsByFilter.length

    useEffect(()=> {
        apiGetMaterial();
        apiGetLines();
        apiGetBusiness();
        apiGetMaterial();
        apiGetProductsByTypes();
        dispatch(getTypesBusiness(9,1));
        dispatch(getTypesProducts(8, 1));
    },[])

    useEffect(() => {
        setCartItems(cart.cartItems)
        dispatch(getProductByFilter(lineId, type_id, materialId, businessId.ids));
    }, [lineId, type_id, materialId, businessId.ids,cart.cartItems])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const currentPostsByFilter = productsByFilter.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let number = Object.keys(cartItems).length

    return (
        <Fragment>
            <Header number={number} />
            <MenuCategory typesBusiness={typesBusiness} typesProducts={typesProducts} />
            <div className="Quotes-pm">
                <div className="Sidebar-Material_Quote">
                    <SidebarProducts
                        materials={material}
                        business={business}
                        lines={lines}
                        toggleChangeCheckbox={toggleChangeCheckbox}
                        toggleLineProductsRadio={toggleLineProductsRadio}
                        toggleChange={toggleChange}
                    />
                </div>
                <div className="Products-Quote">
                    <Products
                        nameTypeProduct={nameTypeProduct}
                        products={currentPosts}
                        productsByFilter={currentPostsByFilter}
                        countProduct={countProduct}
                        countProductsByFilter={countProductsByFilter}
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={products.length}
                        totalPostsFilter={productsByFilter.length}
                        paginate={paginate}
                    />
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ProductsByType;