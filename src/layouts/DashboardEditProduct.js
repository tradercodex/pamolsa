import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
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
    updateProduct,
    getProduct as getProducts
}
    from '../redux/actions/product'

const DashboardEditProduct = ({ match }) => {

    const id = match.params.id

    const lines = useSelector(state => state.products.lineProducts)
    const types = useSelector(state => state.products.typesProducts)
    const addSubTypes = useSelector(state => state.products.addSubTypesProducts)
    const materials = useSelector(state => state.products.materials)
    const business = useSelector(state => state.products.typesBusiness)
    const dispatch = useDispatch();
    const history = useHistory();

    const [productsImages, setProductsImages] = useState({
        images: []
    })

    const [product, setProduct] = useState({
        name: '',
        code: '',
        diameter: '',
        height: '',
        long: '',
        weight: '',
        width: '',
        ue_intern: '',
        popular: '',
        ue_master: '',
        uee: '',
        line: '',
        business_types: [],
        product_type: '',
        file: '',
        min_quantity: '',
        unit: '',
        brand: '',
        shape: '',
        colour: '',
        temperature: ''
    })

    const { errors, handleSubmit, register, control, setValue } = useForm({
        defaultValues: {
            file: product.file
        }
    })

    const getProduct = async () => {
        const res = await axios.get(`https://wspamolsa.com.pe/api/product/find?product_id=${id}`)
        setProduct({
            name: res.data.data.name,
            code: res.data.data.code,
            diameter: res.data.data.diameter,
            height: res.data.data.height,
            long: res.data.data.long,
            weight: res.data.data.weight,
            width: res.data.data.width,
            ue_intern: res.data.data.ue_intern,
            ue_master: res.data.data.ue_master,
            popular: res.data.data.popular,
            uee: res.data.data.uee,
            file: res.data.data.image,
            unit: res.data.data.unit,
            brand: res.data.data.brand,
            colour: res.data.data.colour,
            shape: res.data.data.shape,
            temperature: res.data.data.temperature,
            min_quantity: res.data.data.min_quantity,
            line: { label: res.data.data.product_line.name, value: res.data.data.product_line.id },
            product_type: { label: res.data.data.product_type.name, value: res.data.data.product_type.id },
            business_types: res.data.data.business?.map(item => ({ label: item.name, value: item.id }))
        })
        setValue("line", { label: res.data.data.product_line.name, value: res.data.data.product_line.id })
        setValue("product_type", { label: res.data.data.product_type.name, value: res.data.data.product_type.id })
        setValue("product_addtl_subtype", { label: res.data.data.product_addtl_subtype.name, value: res.data.data.product_addtl_subtype.id })
        setValue("material", { label: res.data.data.material.name, value: res.data.data.material.id })
        setValue("business", res.data.data.business?.map(item => ({ name: item.name, id: item.id })))
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
        dispatch(getTypesProducts(9, 1));
        dispatch(getSubtypes());
        dispatch(getAddSubtypes());
        dispatch(getMaterials());
        dispatch(getTypesBusiness());
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
        formData.append('name', data.name);
        formData.append('code', data.code);
        formData.append('long', data.long);
        formData.append('width', data.width);
        formData.append('diameter', data.diameter);
        formData.append('height', data.height)
        formData.append('weight', data.weight);
        formData.append('ue_intern', data.ue_intern)
        formData.append('ue_master', data.ue_master);
        formData.append('uee', data.uee);
        formData.append('unit', data.unit)
        formData.append('popular', product.popular)
        formData.append('min_quantity', data.min_quantity);
        formData.append('shape', data.shape)
        formData.append('colour', data.colour);
        formData.append('temperature', data.temperature);
        formData.append('brand', data.brand);
        formData.append('line', data.line.label);
        formData.append('type', data.product_type.label)
        formData.append('add_subtype', data.product_addtl_subtype.label)
        formData.append('material_name', data.material.label)
        formData.append('material_short_name', data.material_short_name);
        for (var i = 0; i < data.business.length; i++) {
            formData.append('business', data.business[i].name);
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
            }, 2000);
        }
        e.target.reset();
    }


    const deletingProductImage = (imageId) => {
        if (imageId) {
            dispatch(deleteImageProduct(imageId))
            setTimeout(() => {
                window.location.replace(`/administrador/productos/editar/${id}`);
                dispatch(setAlert("Se elimino la imagen  del producto", "", 4000))
            }, 2000);
        }
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Edite su producto</h6>
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
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Código del producto</label></div>
                                        <input
                                            type="text"
                                            name="code"
                                            defaultValue={product.code}
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
                                        <div><label>Largo del producto</label></div>
                                        <input
                                            type="text"
                                            name="long"
                                            defaultValue={product.long}
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener un largo"
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.long && errors.long.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Ancho del producto</label></div>
                                        <input
                                            type="text"
                                            name="width"
                                            defaultValue={product.width}
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener un ancho"
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.width && errors.width.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Diametro del producto</label></div>
                                        <input
                                            type="text"
                                            name="diameter"
                                            defaultValue={product.diameter}
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener un diámetro"
                                                    }
                                                })
                                            }
                                        />
                                         <div className="error-ds">
                                            {errors.diameter && errors.diameter.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Altura del producto</label></div>
                                        <input
                                            type="text"
                                            name="height"
                                            defaultValue={product.height}
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener una altura"
                                                    }
                                                })
                                            }
                                        />
                                          <div className="error-ds">
                                            {errors.height && errors.height.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Peso del producto</label></div>
                                        <input
                                            type="text"
                                            name="weight"
                                            defaultValue={product.weight}
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: "El producto debe tener un peso"
                                                    }
                                                })
                                            }
                                        />
                                         <div className="error-ds">
                                            {errors.weight && errors.weight.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>UE Interno</label></div>
                                        <input
                                            type="text"
                                            name="ue_intern"
                                            defaultValue={product.ue_intern}
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
                                        <div><label>UE Master</label></div>
                                        <input
                                            type="text"
                                            name="ue_master"
                                            defaultValue={product.ue_master}
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
                                        <div><label>UEE</label></div>
                                        <input
                                            type="text"
                                            name="uee"
                                            defaultValue={product.uee}
                                            ref={
                                                register({
                                                    required: {
                                                        value: false,
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="container-grid-ds-forms doble">
                                    <div className="input-ds">
                                        <div><label>Unidades</label></div>
                                        <input
                                            type="text"
                                            name="unit"
                                            defaultValue={product.unit}
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
                                            type="text"
                                            name="min_quantity"
                                            defaultValue={product.min_quantity}
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
                                <div className="container-grid-ds-forms doble">
                                    <div className="input-ds">
                                        <div><label>Forma</label></div>
                                        <input
                                            type="text"
                                            name="shape"
                                            defaultValue={product.shape}
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
                                        <div><label>Color</label></div>
                                        <input
                                            type="text"
                                            name="colour"
                                            defaultValue={product.colour}
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
                                <div className="container-grid-ds-forms doble">
                                    <div className="input-ds">
                                        <div><label>Marca</label></div>
                                        <input
                                            type="text"
                                            name="brand"
                                            defaultValue={product.brand}
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
                                        <label>Agregue los tipos de nogocio</label>
                                    </div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                isMulti
                                                styles={selectStyles}
                                                options={business}
                                                getOptionLabel={business => business.name}
                                                getOptionValue={business => business.id}
                                                components={makeAnimated}
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
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div><label>¿Quieres que este producto sea popular ? (Colocar 0 = No ó colocar 1 = Si)</label></div>
                                    <div className="flex-popular">
                                        <input
                                            type="text"
                                            name="popular"
                                            min="0"
                                            defaultValue={product.popular}
                                            onChange={popularChange}
                                            max="1"
                                        />
                                    </div>
                                    <div className="input-ds" style={{ marginTop: "20px" }}>
                                        <div><label>Imagen de la noticia</label></div>
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
                                                            <img style={{ width: "100%" }} id="imgPerfil" src={`http://` + item.url || require('../images/img/uploadimage.jpg')} alt="img" />
                                                            <button onClick={() => deletingProductImage(item.id)} className="delete"><Delete /></button>
                                                        </div>
                                                    )) :

                                                    <div>
                                                        <img style={{ width: "100%" }} id="imgPerfil" src={require('../images/img/uploadimage.jpg')} alt="img" />
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