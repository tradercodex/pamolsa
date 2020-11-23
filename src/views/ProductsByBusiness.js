import React ,{ useState, useEffect } from  'react'
import Header from '../components/Header'
import SearchProductsByLine from '../components/SearchProductsByLine'
import { useSelector,useDispatch } from 'react-redux'
import Axios from 'axios'
import { getTypesBusiness, getProductByFilter } from '../redux/actions/product'
import SidebarProductsByBusiness from '../components/SidebarProductsByBusiness'
import Products from '../components/Products'
import Pagination from '../components/Pagination'

const ProductsByBusiness = ({match}) => {

    const business_id = match.params.id
    const nameTypeBusiness = match.params.name

    const typesBusiness = useSelector(state => state.products.typesBusiness)
    const productsByFilter = useSelector(state => state.products.productsByFilter)
    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState(cart.cartItems)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)
    const [lines, setLines] = useState();
    const [types, setTypes] = useState();
    const [materials, setMaterials] = useState();
    const [products, setProducts] = useState([]);
    const [materialId, setMatarialId] = useState()
    const [countProduct, setCountProduct] = useState();
    const [lineId, setLineId] = useState();
    const [typeId, setTypeId] = useState();

    const toggleMaterialsProductsRadio = (e) => {
        setMatarialId(e.target.value)
    }

    const toggleLinesProductsRadio = (e) => {
        setLineId(e.target.value)
    }

    const toggleTypesProductsRadio = (e) => {
        setTypeId(e.target.value)
    }

    const apiGetLines = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/line/list?business=${business_id}`);
        setLines(response.data.data)
    }

    const apiGetTypes = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/types/list?business=${business_id}`);
        setTypes(response.data.data)
    }

    const apiGetMaterial = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/material/list?business=${business_id}`);
        setMaterials(response.data.data)
    }

    const apiGetProductsByBusiness = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/list?business=${business_id}`);
        setProducts(response.data.data)
        setCountProduct(response.data.extra.total)
    }

    let countProductsByFilter = productsByFilter.length

    useEffect(()=>{
        apiGetLines();
        apiGetTypes();
        apiGetMaterial();
        apiGetLines();
        dispatch(getTypesBusiness(8, 1));
        apiGetProductsByBusiness();
    },[])

    useEffect(() => {
        setCartItems(cart.cartItems)
        dispatch(getProductByFilter(lineId, typeId, materialId, business_id));
    }, [lineId, typeId, materialId,business_id,cart.cartItems])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    const currentPostsByFilter = productsByFilter.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let number = Object.keys(cartItems).length

    return ( 
        <>
        <Header number={number} />
        <SearchProductsByLine typesBusiness={typesBusiness} />
        <div className="Quotes-pm">
            <div className="Sidebar-Material_Quote">
                <SidebarProductsByBusiness
                    lines={lines}
                    types={types}
                    materials={materials}
                    toggleTypesProductsRadio={toggleTypesProductsRadio}
                    toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                    toggleLinesProductsRadio={toggleLinesProductsRadio}
                />
            </div>
            <div className="Products-Quote">
                <Products
                    products={currentPosts}
                    nameTypeBusiness={nameTypeBusiness}
                    countProduct={countProduct}
                    productsByFilter={currentPostsByFilter}
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
        </>
     );
}
 
export default ProductsByBusiness;