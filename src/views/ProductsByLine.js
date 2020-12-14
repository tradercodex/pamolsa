import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SearchProductsByLine from '../components/SearchProductsByLine';
import SidebarProductsByLine from '../components/SidebarProductsByLine'
import Products from '../components/Products'
import { useDispatch, useSelector } from "react-redux";
import { getProductByFilter, getTypesBusiness } from '../redux/actions/product'
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const ProductByLine = ({ match, location }) => {

    let pathname = location.pathname
    let line = match.params.id
    let lineFoodService = line == 1 ? "Food Service" : ''
    let lineBioform = line == 2 ? "Ecoamigable Bioform" : ''
    let lineIndustrial = line == 3 ? "Industrial" : ''
    let lineAgroIndustrial = line == 4 ? "Agroindustrial" : ''

    const productsByFilter = useSelector(state => state.products.productsByFilter)
    const typesBusiness = useSelector(state => state.products.typesBusiness)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const [postsPerPage] = useState(12)
    const [business, setBusiness] = useState();

    const [types, setTypes] = useState();
    const [materials, setMaterial] = useState();
    const [typeId, setTypeId] = useState({
        ids: []
    });
    const [materialId, setMaterialId] = useState({
        ids: []
    });
    const [businessId, setBussinesId] = useState({
        ids: []
    });

    const toggleTypesProductsRadio = (e, item) => {
        const { ids } = typeId;
        let newArr = [];

        if (!ids.includes(item)) {
            newArr = [...ids, item];
        } else {
            newArr = ids.filter(a => a !== item);
        }
        setTypeId({
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

    const toggleMaterialsProductsRadio = (e, item) => {
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

    const apiGetTypes = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/types/list?line_id=${line}`);
        setTypes(response.data.data)
    }

    const apiGetBusiness = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/business/list?line_id=${line}`);
        setBusiness(response.data.data)
    }

    const apiGetMaterial = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/material/list?line_id=${line}`);
        setMaterial(response.data.data)
    }

    let countProductsByFilter = productsByFilter.length

    useEffect(() => {

        const movilOpen = document.getElementById('movil');
        const header = document.getElementById('header')
        const movilClose = document.getElementById('close-movil')

        movilOpen.addEventListener('click', function () {
            header.classList.add('movile-active')
        })

        movilClose.addEventListener('click', function () {
            header.classList.remove('movile-active')
        })

        apiGetBusiness();
        apiGetTypes();
        apiGetMaterial();
        dispatch(getTypesBusiness());
    }, [])

    useEffect(() => {
        setCartItems(cart.cartItems)
        dispatch(getProductByFilter(line, typeId.ids, materialId.ids, businessId.ids))
    }, [line, typeId.ids, materialId.ids, businessId.ids, cart.cartItems])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsByFilter = productsByFilter.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let number = Object.keys(cartItems).length

    const filter = currentPostsByFilter.filter(product => {
        return product.name.includes(search)
    })

    const searchPress = (e) => {
        if (e.keyCode === 13) {
            window.location.replace(`/productos/${e.target.value}`)
        }
    }

    return (
        <>
            <Header number={number} />
            <SearchProductsByLine setSearch={setSearch} searchPress={searchPress} typesBusiness={typesBusiness} />
            <div className="Quotes-pm">
                <div className="Sidebar-Material_Quote">
                    <SidebarProductsByLine
                        business={business}
                        types={types}
                        materials={materials}
                        toggleTypesProductsRadio={toggleTypesProductsRadio}
                        toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                        toggleChangeCheckbox={toggleChangeCheckbox}
                    />
                </div>
                <div className="Products-Quote">
                    <Products
                        line={line}
                        pathname ={pathname}
                        business={business}
                        types={types}
                        materials={materials}
                        toggleTypesProductsRadio={toggleTypesProductsRadio}
                        toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                        toggleChangeCheckbox={toggleChangeCheckbox}
                        lineBioform={lineBioform}
                        lineFoodService={lineFoodService}
                        lineIndustrial={lineIndustrial}
                        lineAgroIndustrial={lineAgroIndustrial}
                        productsByFilter={filter}
                        countProductsByFilter={countProductsByFilter}
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPostsFilter={productsByFilter.length}
                        totalFilter={filter.length}
                        paginate={paginate}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductByLine;