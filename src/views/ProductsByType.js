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
    getProductByFilterType,
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
    const [search, setSearch] = useState('')
    const [material, setMaterial] = useState();
    const [products, setProducts] = useState([]);
    const [materialId, setMaterialId] = useState({
        ids: []
    })
    const [countProduct, setCountProduct] = useState();
    const [lineId, setLineId] = useState({
        ids: []
    });
    const [businessId, setBussinesId] = useState({
        ids: []
    });

    const toggleLineProductsRadio = (e, item) => {
        const { ids } = lineId;
        let newArr = [];

        if (!ids.includes(item)) {
            newArr = [...ids, item];
        } else {
            newArr = ids.filter(a => a !== item);
        }
        setLineId({
            ids: newArr
        })
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

    const toggleMaterialsProductsRadio = (e,item) => {
        const { ids } = materialId;
        let newArr = [];

        if (!ids.includes(item)) {
            newArr = [...ids, item];
        } else {
            newArr = ids.filter(a => a !== item);
        }
        setMaterialId({
            ids: newArr
        })
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

    let countProductsByFilter = productsByFilter.length

    useEffect(()=> {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')
    
        movilOpen.addEventListener('click',function(){
            header.classList.add('movile-active')
        })
    
        movilClose.addEventListener('click',function(){
            header.classList.remove('movile-active')
        })

        apiGetMaterial();
        apiGetLines();
        apiGetBusiness();
        apiGetMaterial();
        dispatch(getTypesBusiness(9,1));
        dispatch(getTypesProducts(9, 1));
    },[])

    useEffect(() => {
        setCartItems(cart.cartItems)
        dispatch(getProductByFilterType(type_id,lineId.ids, materialId.ids, businessId.ids));
    }, [type_id,lineId.ids, materialId.ids, businessId.ids,cart.cartItems])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const currentPostsByFilter = productsByFilter.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let number = Object.keys(cartItems).length

    const searchPress = (e) => {
        if(e.keyCode === 13) {
             window.location.replace(`/productos/${e.target.value}`)
        }
   }

    return (
        <Fragment>
            <Header number={number} />
            <MenuCategory typesBusiness={typesBusiness} setSearch={setSearch} searchPress={searchPress} typesProducts={typesProducts} />
            <div className="Quotes-pm">
                <div className="Sidebar-Material_Quote">
                    <SidebarProducts
                        materials={material}
                        business={business}
                        lines={lines}
                        toggleChangeCheckbox={toggleChangeCheckbox}
                        toggleLineProductsRadio={toggleLineProductsRadio}
                        toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                    />
                </div>
                <div className="Products-Quote">
                    <Products
                        nameTypeProduct={nameTypeProduct}
                        productsByFilter={currentPostsByFilter}
                        countProduct={countProduct}
                        countProductsByFilter={countProductsByFilter}
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
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