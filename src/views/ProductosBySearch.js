import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SearchProductsByLine from '../components/SearchProductsByLine'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { getTypesBusiness } from '../redux/actions/product'
// import SidebarProductsByBusiness from '../components/SidebarProductsByBusiness'
import Products from '../components/Products'
import axios from 'axios'
import Pagination from '../components/Pagination'
import ProductsPopulate from '../components/ProductsPopulate'
import Footer from '../components/Footer'

const ProductsBySearch = ({ match }) => {

    const business_id = match.params.id
    const nameFilter = match.params.name

    const typesBusiness = useSelector(state => state.products.typesBusiness)
    const productsByFilter = useSelector(state => state.products.productsByFilter)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const [productsPopulate, setProductsPopulate] = useState([])
    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)
    const [lines, setLines] = useState();
    const [types, setTypes] = useState();
    const [productsFilter, setProductsFilter] = useState([])
    const [materials, setMaterials] = useState();
    const [productsItems, setProductsItems] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    const [search, setSearch] = useState('')
    const [materialId, setMaterialId] = useState({
        ids: ''
    })
    const [lineId, setLineId] = useState({
        ids: ''
    });
    const [typeId, setTypeId] = useState({
        ids: ''
    });

    // const toggleLineProductsRadio = (e, item) => {
    //     const { ids } = lineId;
    //     let newArr = [];

    //     if (!ids.includes(item)) {
    //         newArr = [...ids, item];
    //     } else {
    //         newArr = ids.filter(a => a !== item);
    //     }
    //     setLineId({
    //         ids: newArr
    //     })
    // }

    // const toggleTypesProductsRadio = (e, item) => {
    //     const { ids } = typeId;
    //     let newArr = [];

    //     if (!ids.includes(item)) {
    //         newArr = [...ids, item];
    //     } else {
    //         newArr = ids.filter(a => a !== item);
    //     }
    //     setTypeId({
    //         ids: newArr
    //     })
    // }

    // const toggleMaterialsProductsRadio = (e,item) => {
    //     const { ids } = materialId;
    //     let newArr = [];

    //     if (!ids.includes(item)) {
    //         newArr = [...ids, item];
    //     } else {
    //         newArr = ids.filter(a => a !== item);
    //     }
    //     setMaterialId({
    //         ids: newArr
    //     })
    // }

    const apiGetSearch = async () => {
        const response = await Axios.get(`http://localhost:8090/api/product/find/query?query=${nameFilter}`);
        setProductsFilter(response.data.data)
        console.log(response.data.data)
    }

    const apiGetLines = async () => {
        const response = await Axios.get(`http://localhost:8090/api/product/line/list?business=${business_id}`);
        setLines(response.data.data)
    }

    const apiGetTypes = async () => {
        const response = await Axios.get(`http://localhost:8090/api/product/types/list?business=${business_id}`);
        setTypes(response.data.data)
    }

    const apiGetMaterial = async () => {
        const response = await Axios.get(`http://localhost:8090/api/product/material/list?business=${business_id}`);
        setMaterials(response.data.data)
    }

    const apiProductsPopulate = async () => {
        const res = await axios.get('http://localhost:8090/api/product/find/popular')
        setProductsPopulate(res.data.data)
    }

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

        const loadProductsItems = async () => {
            const res = await axios.get('http://localhost:8090/api/product/list');
            setProductsItems(res.data.data)
       }

       loadProductsItems();

        apiGetLines();
        apiGetTypes();
        apiGetMaterial();
        apiGetLines();
        apiGetSearch();
        apiProductsPopulate();
        dispatch(getTypesBusiness(8, 1));
    }, [])

    useEffect(() => {
        setCartItems(cart.cartItems)
    }, [cart.cartItems])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPostsByFilter = productsByFilter.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let number = Object.keys(cartItems).length

    const countProductsByFilter = productsFilter.length

    const searchPress = (e) => {
        if (e.keyCode === 13) {
            window.location.replace(`/productos/${e.target.value}`)
        }
    }

    const onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = productsItems.sort().filter(v => regex.test(v.name));
        }
        setSuggestions(suggestions)
        setSearch(value)
    }

    const suggestionSelected = (value) => {
        setSearch(value);
        setSuggestions([]);
    }


    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null
        }
        return (
            <ul className="autocomplete">
                {suggestions.map((item) => <li onClick={() => suggestionSelected(item.name)}>{item.name}</li>)}
            </ul>
        )
    }

    return (
        <>
            <Header number={number} />
            <SearchProductsByLine search={search} onTextChanged={onTextChanged} renderSuggestions={renderSuggestions} setSearch={setSearch} searchPress={searchPress} typesBusiness={typesBusiness} />
            <div className="Quotes-pm">
                {/* <div className="Sidebar-Material_Quote">
                <SidebarProductsByBusiness
                    lines={lines}
                    types={types}
                    materials={materials}
                    toggleTypesProductsRadio={toggleTypesProductsRadio}
                    toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                    toggleLinesProductsRadio={toggleLineProductsRadio}
                />
            </div> */}
                <div className="Products-Quote Search-Products" style={{ gridColumn: "1/12" }}>
                    <Products
                        nameFilter={nameFilter}
                        productsByFilter={productsFilter || currentPostsByFilter}
                        countProductsByFilter={countProductsByFilter}
                    />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPostsFilter={productsByFilter.length}
                        paginate={paginate}
                    />
                </div>
            </div>
            <ProductsPopulate productsPopulate={productsPopulate} />
            <Footer />
        </>
    );
}

export default ProductsBySearch;