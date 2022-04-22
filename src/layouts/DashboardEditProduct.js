import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import makeAnimated from 'react-select/animated';
import { useHistory } from 'react-router-dom'
import Delete from '@material-ui/icons/Delete'
import { setAlert } from '../redux/actions/alert'
import axios from 'axios'
import { deleteImageProduct } from '../redux/actions/product'
import $ from 'jquery'
import '../styles/dashboard.css'
import {
    getLineProducts,
    getTypesProducts,
    getSubtypes,
    getAddSubtypes,
    getMaterials,
    getTypesBusiness,
    getKeywords,
    updateProduct,
    getProduct as getProducts
}
    from '../redux/actions/product'

const token = localStorage.getItem('token')

let config = {
    headers: {
        'x-access-token': token
    }
}

const DashboardEditProduct = ({ match }) => {

    const id = match.params.id

    const lines = useSelector(state => state.products.lineProducts)
    const types = useSelector(state => state.products.typesProducts)
    const addSubTypes = useSelector(state => state.products.addSubTypesProducts)
    const materials = useSelector(state => state.products.materials)
    const business = useSelector(state => state.products.typesBusiness)
    const keywords = useSelector(state => state.products.keywords)
    const dispatch = useDispatch();
    const history = useHistory();

    const [productsImages, setProductsImages] = useState({
        images: []
    })

    const [productsRelationates, setProductsRelationates] = useState({
        related_products: []
    })

    const [product, setProduct] = useState({
        name: '',
        tradename: '',
        code: '',
        diameter: '',
        diameter_unit: '',
        height: '',
        height_unit: '',
        long: '',
        long_unit: '',
        weight: '',
        weight_unit: '',
        width: '',
        width_unit: '',
        ue_intern: '',
        popular: '',
        ue_master: '',
        line: '',
        business_types: [],
        product_type: '',
        file: '',
        min_quantity: '',
        unit: '',
        unit_quantity: '',
        brand: '',
        shape: '',
        colour: '',
        temperature: '',
        related_products: [],
    })

    const { errors, handleSubmit, register, control, setValue } = useForm({
        defaultValues: {
            file: product.file
        }
    })

    const popularVals = [
        { value: '0', label: 'No' },
        { value: '1', label: 'Sí' }
    ]

    const getProduct = async () => {
        const res = await axios.get(`https://ws.pamolsa.com.pe/api/product/find?product_id=${id}`)
        setProduct({
            name: res.data.data.name,
            tradename: res.data.data.tradename,
            code: res.data.data.code,
            diameter: res.data.data.diameter,
            diameter_unit: res.data.data.diameter_unit,
            height: res.data.data.height,
            height_unit: res.data.data.height_unit,
            long: res.data.data.long,
            long_unit: res.data.data.long_unit,
            weight: res.data.data.weight,
            weight_unit: res.data.data.weight_unit,
            width: res.data.data.width,
            width_unit: res.data.data.width_unit,
            ue_intern: res.data.data.ue_intern,
            ue_master: res.data.data.ue_master,
            popular: { value: res.data.data.popular, label: res.data.data.popular == 0 ? "No" : "Si" },
            file: res.data.data.image,
            unit: res.data.data.unit,
            unit_quantity: res.data.data.unit_quantity,
            brand: res.data.data.brand,
            colour: res.data.data.colour,
            shape: res.data.data.shape,
            temperature: res.data.data.temperature,
            material_short_name: res.data.data.material.short_name,
            min_quantity: res.data.data.min_quantity,
            line: { label: res.data.data.product_line.name, value: res.data.data.product_line.id },
            product_type: { label: res.data.data.product_type.name, value: res.data.data.product_type.id },
            business_types: res.data.data.business?.map(item => ({ label: item.name, value: item.id })),
            keywords: res.data.data.keywords?.map(item => ({ label: item.name, value: item.id })),
            related_products: res.data.data.related_products?.map(item => ({ related_product: item.code, id: item.id }))
        })
        setValue("line", { label: res.data.data.product_line.name, value: res.data.data.product_line.id })
        setValue("product_type", { label: res.data.data.product_type.name, value: res.data.data.product_type.id })
        setValue("product_addtl_subtype", { label: res.data.data.product_addtl_subtype.name, value: res.data.data.product_addtl_subtype.id })
        setValue("material", { label: res.data.data.material.name, value: res.data.data.material.id })
        setValue("business", res.data.data.business?.map(item => ({ name: item.name, id: item.id })))
        setValue("keywords", res.data.data.keywords?.map(item => ({ name: item.name, id: item.id })))
        setValue("related_products", res.data.data.related_products?.map(item => ({ code: item.code, id: item.id })))
        setValue("popular", { value: res.data.data.popular, label: res.data.data.popular == 0 ? "No" : "Si" })
    }

    const linesSelect = lines?.map(item => ({ label: item.name, value: item.id }))
    const productTypeSelect = types?.map(item => ({ label: item.name, value: item.id }))
    const addSubTypesSelect = addSubTypes?.map(item => ({ label: item.name, value: item.id }))
    const materialSelect = materials?.map(item => ({ label: item.name, value: item.id }))

    useEffect(() => {
        $('#profile-image').change(function (e) {
            addImage(e);
        });
        function addImage(e) {
            try {
                var file = e.target.files[0],
                    imageType = /image.*/;
                if (file) {
                    if (!file.type.match(imageType))
                        return;
                }

                var reader = new FileReader();
                reader.onload = fileOnload;
                reader.readAsDataURL(file);

            } catch (error) {
                console.log("Error recuperar imagen");
            }

            function fileOnload(e) {
                var result = e.target.result;
                $('#imgPerfil').attr("src", result);
            }
        }

        dispatch(getLineProducts());
        dispatch(getTypesProducts(20, 1));
        dispatch(getSubtypes());
        dispatch(getAddSubtypes());
        dispatch(getMaterials());
        dispatch(getTypesBusiness());
        dispatch(getKeywords());
        getProduct();
    }, [])

    const selectStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "rgba(0, 0, 0, 0.87);" : "rgba(0, 0, 0, 0.87);",
            fontSize: 16,
            fontFamily: 'Amble-light',
            backgroundColor: state.isSelected ? "#fff" : "#fff",
            textAlign: "left",
            cursor: "pointer",
            outline: "none",
        }),
        container: base => ({
            ...base,
            width: "100%"
        }),
        control: (base, state) => ({
            ...base,
            fontSize: 14,
            paddingLeft: "10px",
            borderRadius: "5px",
            width: "100%",
            textAlign: "left",
            backgroundColor: '#292B49',
            cursor: "pointer",
            outline: "none",
            fontFamily: 'Amble-light',
            borderColor: state.isSelected ? "#C4C4C4" : "#C4C4C4"
        }),
        dropdownIndicator: base => ({
            ...base,
        }),
        indicatorSeparator: base => ({
            ...base,
            display: "none"
        }),
        valueContainer: base => ({
            ...base,
            padding: 0,
            paddingLeft: 2
        })
    };

    const handleProductsImages = (e) => {
        setProductsImages({
            images: productsImages.images.concat([e.target.files[0]])
        })
    }

    const deleteImage = i => () => {
        setProductsImages({
            images: productsImages.images.filter((image, index) => i !== index)
        })
    }

    const popularChange = (e) => {
        setProduct({
            ...product,
            popular: e.target.value
        })
    }

    const sendSubmit = (data, e) => {
        const formData = new FormData;

        formData.append('product_id', id)
        if (data.name) formData.append('name', data.name.trim());
        if (data.tradename) formData.append('tradename', data.tradename.trim());
        if (data.code) formData.append('code', data.code.trim());
        if (data.long) formData.append('long', data.long.trim());
        if (data.long_unit) formData.append('long_unit', data.long_unit.trim());
        if (data.width) formData.append('width', data.width.trim());
        if (data.width_unit) formData.append('width_unit', data.width_unit.trim());
        if (data.diameter) formData.append('diameter', data.diameter.trim());
        if (data.diameter_unit) formData.append('diameter_unit', data.diameter_unit.trim());
        if (data.height) formData.append('height', data.height.trim());
        if (data.height_unit) formData.append('height_unit', data.height_unit.trim());
        if (data.weight) formData.append('weight', data.weight.trim());
        if (data.weight_unit) formData.append('weight_unit', data.weight_unit.trim());
        if (data.ue_intern) formData.append('ue_intern', data.ue_intern.trim());
        if (data.ue_master) formData.append('ue_master', data.ue_master.trim());
        if (data.unit) formData.append('unit', data.unit.trim());
        if (data.unit_quantity) formData.append('unit_quantity', data.unit_quantity.trim());
        if (data.popular) formData.append('popular', data.popular.value);
        if (data.min_quantity) formData.append('min_quantity', data.min_quantity.trim());
        if (data.shape) formData.append('shape', data.shape.trim());
        if (data.colour) formData.append('colour', data.colour.trim());
        if (data.temperature) formData.append('temperature', data.temperature.trim());
        if (data.brand) formData.append('brand', data.brand.trim());
        if (data.line) formData.append('line', data.line.label.trim());
        if (data.product_type) formData.append('type', data.product_type.label.trim());
        if (data.product_addtl_subtype) formData.append('add_subtype', data.product_addtl_subtype.label.trim());
        if (data.material) formData.append('material_name', data.material.label.trim());
        if (data.material_short_name) formData.append('material_short_name', data.material_short_name.trim());
        if (data.business) {
            for (var i = 0; i < data.business.length; i++) {
                formData.append('business', data.business[i].name);
            }
        }
        if (data.keywords) {
            for (var i = 0; i < data.keywords.length; i++) {
                formData.append('keywords', data.keywords[i].name);
            }
        }
        for (let picRelated of product.related_products) {
            formData.append('related_product', picRelated.related_product)
        }
        for (let pic of productsImages.images) {
            formData.append('file', pic)
        }

        if (formData) {
            dispatch(updateProduct(formData))
            setTimeout(() => {
                history.push('/administrador/productos');
                dispatch(setAlert("Producto editado correctamente", "", 4000))
                dispatch(getProducts(100, 1));
            }, 4000);
        }
        e.target.reset();
    }


    const deletingProductImage = (imageId) => {
        let result = window.confirm("Seguro que desea eliminar esta imagen")
        if (result === true) {
            if (imageId) {
                dispatch(deleteImageProduct(imageId))
                setTimeout(() => {
                    window.location.replace(`/administrador/productos/editar/${id}`);
                    dispatch(setAlert("Se elimino la imagen  del producto", "", 4000))
                }, 4000);
            }
        }
    }

    const addProductRelacionated = () => {
        setProduct({
            ...product,
            related_products: product.related_products.concat([{ related_product: '' }])
        })
    }

    const deleteProductRelacionated = (id, i) => async () => {
        setProduct({
            ...product,
            related_products: product.related_products.filter((related_product, index) => i !== index)
        })
        const res = await axios.put(`https://ws.pamolsa.com.pe/api/product/related/delete?related_product_id=${id}`, null, config)
    }

    const readCode = i => e => {
        const newCode = product.related_products.map((related_product, index) => {
            if (i !== index) return related_product;
            return {
                ...related_product,
                related_product: e.target.value
            }
        })
        setProduct({
            ...product,
            related_products: newCode
        })
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Editar producto</h6>
            </div>
            <div className="content-form">
                <div className="">
                    <form onSubmit={handleSubmit(sendSubmit)}>
                        <div className="form-grid">
                            <div>
                                <div className="input-ds">
                                    <div><label>Nombre del producto</label></div>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={product.name}
                                        minLength="1"
                                        maxLength="100"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el nombre del producto'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.name && errors.name.message}
                                    </div>
                                </div>
                                <div className="input-ds">
                                    <div><label>Nombre comercial del producto</label></div>
                                    <input
                                        type="text"
                                        name="tradename"
                                        defaultValue={product.tradename}
                                        minLength="1"
                                        maxLength="150"
                                        ref={
                                            register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese el nombre comercial del producto'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.tradename && errors.tradename.message}
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Código del producto</label></div>
                                        <input
                                            type="text"
                                            name="code"
                                            defaultValue={product.code}
                                            minLength="1"
                                            maxLength="65"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener un código"
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.code && errors.code.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Largo</label></div>
                                        <input
                                            type="number"
                                            name="long"
                                            step={"0.01"}
                                            defaultValue={product.long}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.long && errors.long.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Unidad del largo</label></div>
                                        <input
                                            type="text"
                                            name="long_unit"
                                            defaultValue={product.long_unit}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.long_unit && errors.long_unit.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>UE Interno</label></div>
                                        <input
                                            type="number"
                                            name="ue_intern"
                                            defaultValue={product.ue_intern}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Ancho</label></div>
                                        <input
                                            type="number"
                                            name="width"
                                            defaultValue={product.width}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.width && errors.width.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Unidad del ancho</label></div>
                                        <input
                                            type="text"
                                            name="width_unit"
                                            defaultValue={product.width_unit}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.width_unit && errors.width_unit.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>UE Master</label></div>
                                        <input
                                            type="number"
                                            name="ue_master"
                                            defaultValue={product.ue_master}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Diametro</label></div>
                                        <input
                                            type="number"
                                            name="diameter"
                                            defaultValue={product.diameter}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.diameter && errors.diameter.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Unidad del diametro</label></div>
                                        <input
                                            type="text"
                                            name="diameter_unit"
                                            defaultValue={product.diameter_unit}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.diameter_unit && errors.diameter_unit.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Forma</label></div>
                                        <input
                                            type="text"
                                            name="shape"
                                            defaultValue={product.shape}
                                            maxLength="45"
                                            ref={
                                                register({
                                                    required: {
                                                        value: false,
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Altura</label></div>
                                        <input
                                            type="number"
                                            name="height"
                                            defaultValue={product.height}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.height && errors.height.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Unidad de la altura</label></div>
                                        <input
                                            type="text"
                                            name="height_unit"
                                            defaultValue={product.height_unit}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.height_unit && errors.height_unit.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Color</label></div>
                                        <input
                                            type="text"
                                            name="colour"
                                            defaultValue={product.colour}
                                            maxLength="45"
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Peso</label></div>
                                        <input
                                            type="number"
                                            name="weight"
                                            defaultValue={product.weight}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.weight && errors.weight.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Unidad del peso</label></div>
                                        <input
                                            type="text"
                                            name="weight_unit"
                                            defaultValue={product.weight_unit}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.weight_unit && errors.weight_unit.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Unidades</label></div>
                                        <input
                                            type="text"
                                            name="unit"
                                            defaultValue={product.unit}
                                            maxLength="100"
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Cantidad</label></div>
                                        <input
                                            type="number"
                                            name="unit_quantity"
                                            defaultValue={product.unit_quantity}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false,
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Minima cantidad</label></div>
                                        <input
                                            type="number"
                                            name="min_quantity"
                                            defaultValue={product.min_quantity}
                                            step={"0.01"}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="input-ds rt">
                                    <div className="related-products_add">
                                        <label>Agregue los productos relacionados</label>
                                        <label>(Escriba el codigo del producto)</label>
                                        <button onClick={addProductRelacionated} type="button"> + Agregar producto relacionado</button>
                                    </div>
                                    {
                                        product.related_products.map((input, index) => (
                                            <div key={index}>
                                                <label>Producto relacionado {index + 1}:</label>
                                                <div className="related-products_add">
                                                    <input
                                                        type="text"
                                                        onChange={readCode(index)}
                                                        defaultValue={input.related_product}
                                                    />
                                                    <button onClick={deleteProductRelacionated(input.id, index)} type="button">Eliminar</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="container-grid-ds-forms doble">
                                    <div className="input-ds">
                                        <div><label>Marca</label></div>
                                        <input
                                            type="text"
                                            name="brand"
                                            defaultValue={product.brand}
                                            maxLength="45"
                                            ref={
                                                register({
                                                    required: {
                                                        value: false,
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Temperatura</label></div>
                                        <input
                                            type="text"
                                            name="temperature"
                                            defaultValue={product.temperature}
                                            maxLength="65"
                                            ref={
                                                register({
                                                    required: {
                                                        value: false
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="input-ds rt">
                                    <div>
                                        <label>Linea de producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                styles={selectStyles}
                                                options={linesSelect}
                                            />}
                                        name="line"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese la linea del producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.line && errors.line.message}
                                    </div>
                                </div>

                                <div className="input-ds rt" style={{ marginTop: "20px" }}>
                                    <div>
                                        <label>Tipo de producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                styles={selectStyles}
                                                options={productTypeSelect}
                                            />}
                                        name="product_type"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese el tipo de producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.type && errors.type.message}
                                    </div>
                                </div>
                                <div className="input-ds rt" style={{ marginTop: "20px" }}>
                                    <div>
                                        <label>Agrega un subtipo del producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                styles={selectStyles}
                                                options={addSubTypesSelect}
                                            />}
                                        name="product_addtl_subtype"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese el agredado del tipo del producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.add_subtype && errors.add_subtype.message}
                                    </div>
                                </div>
                                <div className="input-ds rt" style={{ marginTop: "20px" }}>
                                    <div><label>Material de producto</label></div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                styles={selectStyles}
                                                options={materialSelect}
                                            />}
                                        name="material"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese el material del producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.material_name && errors.material_name.message}
                                    </div>
                                </div>
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div><label>Nombre corto del material del producto (solo si se agrega un nuevo material de producto)</label></div>
                                    <input
                                        type="text"
                                        name="material_short_name"
                                        defaultValue={product.material_short_name}
                                        ref={
                                            register({
                                                required: {
                                                    value: false,
                                                    message: 'Ingrese el nombre corto del material del producto'
                                                }
                                            })
                                        }
                                    />
                                    <div className="error-ds">
                                        {errors.material_short_name && errors.material_short_name.message}
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="input-ds rt">
                                    <div>
                                        <label>Agregue los tipos de negocio</label>
                                    </div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                isMulti
                                                styles={selectStyles}
                                                options={business}
                                                getOptionLabel={business => business.name}
                                                getOptionValue={business => business.id}
                                                components={makeAnimated}
                                                getNewOptionData={(inputValue, optionLabel) => ({
                                                    id: optionLabel,
                                                    name: inputValue,
                                                    __isNew__: true
                                                })}
                                            />}
                                        name="business"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese los tipos de negocio que tiene este producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.business && errors.business.message}
                                    </div>
                                </div>
                                <div className="input-ds rt">
                                    <div>
                                        <label>Agregue los keywords</label>
                                    </div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                isMulti
                                                styles={selectStyles}
                                                options={keywords}
                                                getOptionLabel={keywords => keywords.name}
                                                getOptionValue={keywords => keywords.id}
                                                components={makeAnimated}
                                                getNewOptionData={(inputValue, optionLabel) => ({
                                                    id: optionLabel,
                                                    name: inputValue,
                                                    __isNew__: true
                                                })}
                                            />}
                                        name="keywords"
                                        isClearable
                                        control={control}
                                    />
                                    <div className="error-ds">
                                        {errors.keywords && errors.keywords.message}
                                    </div>
                                </div>
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div><label>¿Quieres que este producto sea popular?</label></div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                styles={selectStyles}
                                                options={popularVals}
                                                getOptionLabel={popularVals => popularVals.label}
                                                getOptionValue={popularVals => popularVals.value}
                                                getNewOptionData={(inputValue, optionLabel) => ({
                                                    id: optionLabel,
                                                    name: inputValue,
                                                    __isNew__: true
                                                })}
                                            />}
                                        isClearable
                                        name="popular"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: false
                                            }
                                        }}
                                    />
                                    <div className="input-ds" style={{ marginTop: "20px" }}>
                                        <div><label>Imagen del producto</label></div>
                                        {
                                            product.file && product.file.length > 0 ?
                                                <div className="success-image">
                                                    <p>Lista de imagenes del Producto</p>
                                                </div> : ''
                                        }
                                        <div className="img-input-ds edit">
                                            {
                                                product.file && product.file.length > 0 ?
                                                    product.file.map(item => (
                                                        <div>
                                                            <img style={{ width: "100%" }} id="imgPerfil" src={`https://` + item.url || require('../images/img/uploadimage.webp')} alt="img" />
                                                            <button onClick={() => deletingProductImage(item.id)} className="delete"><Delete /></button>
                                                        </div>
                                                    )) :

                                                    <div>
                                                        <img style={{ width: "100%" }} id="imgPerfil" src={require('../images/img/uploadimage.webp')} alt="img" />
                                                    </div>
                                            }
                                            <input
                                                type="file"
                                                name="file"
                                                onChange={handleProductsImages}
                                                id="profile-image"
                                                accept="image/*"
                                                ref={
                                                    register({
                                                        required: {
                                                            value: false,
                                                            message: 'Ingrese la imagen del producto'
                                                        }
                                                    })
                                                }
                                            />
                                            <div className="error-ds">
                                                {errors.file && errors.file.message}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {
                                    productsImages.images.length > 0 ?
                                        <div className="success-image" style={{ marginTop: "30px" }}>
                                            <p>Lista de imagenes de productos agregados recientemente</p>
                                        </div>
                                        :
                                        <div className="error-image" style={{ marginTop: "30px" }}>
                                            <p>No hay productos nuevos agregados</p>
                                        </div>
                                }
                                {
                                    productsImages.images.length > 0 ?
                                        productsImages.images.map((item, index) =>
                                            <div key={index} className="images-adds">
                                                {item === undefined ? '' : item.name}
                                                <button type="button" onClick={deleteImage(index)} className="">x</button>
                                            </div>)
                                        : null
                                }
                            </div>
                            <button style={{ marginTop: "20px" }} type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashboardEditProduct;