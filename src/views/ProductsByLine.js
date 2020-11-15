import Axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Header from '../components/Header';
import SearchProductsByLine from '../components/SearchProductsByLine';
import SidebarProductsByLine from '../components/SidebarProductsByLine'
import Products from '../components/Products'

const ProductByLine = ({match}) => {

    let line = match.params.id

    const [business, setBusiness] = useState();
    const [types, setTypes] = useState();
    const [materials, setMaterial] = useState();
    const [products, setProducts] = useState();

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

    const apiGetProductsByLine = async () => {
        const response = await Axios.get(`http://3.120.185.254:8090/api/product/list?line_id=${line}`);
        setProducts(response.data.data)
    }

    useEffect(()=> {
        apiGetBusiness();
        apiGetTypes();
        apiGetMaterial();
        apiGetProductsByLine();
    },[])

    console.log(products)

    return (
        <>
            <Header />
            <SearchProductsByLine />
            <div className="Quotes-pm">
                <div className="Sidebar-Material_Quote">
                    <SidebarProductsByLine business={business} types={types} materials={materials} />
                </div>
                <div className="Products-Quote">
                    <Products products={products} />
                </div>
            </div>
        </>
    );
}

export default ProductByLine;