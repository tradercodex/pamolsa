import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactSelect from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { useForm, Controller } from 'react-hook-form'
import makeAnimated from 'react-select/animated';
import $ from 'jquery'
import '../styles/dashboard.css'
import {
    getLineProducts,
    getTypesProducts,
    getSubtypes,
    getAddSubtypes,
    getMaterials,
    getTypesBusiness,
    sendProduct
}
    from '../redux/actions/product'

const DashboardAddProduct = () => {

    const { errors, handleSubmit, register, control } = useForm()

    const lines = useSelector(state => state.products.lineProducts)
    const types = useSelector(state => state.products.typesProducts)
    const subTypes = useSelector(state => state.products.subTypesProducts)
    const addSubTypes = useSelector(state => state.products.addSubTypesProducts)
    const materials = useSelector(state => state.products.materials)
    const business = useSelector(state => state.products.typesBusiness)
    const dispatch = useDispatch();

    const [productsImages, setProductsImages] = useState({
        images: []
    })

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
        dispatch(getTypesProducts(100, 1));
        dispatch(getSubtypes());
        dispatch(getAddSubtypes());
        dispatch(getMaterials());
        dispatch(getTypesBusiness());
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

    console.log(productsImages)

    const deleteImage = i => () => {
        setProductsImages({
            images: productsImages.images.filter((image, index) => i !== index)
        })
    }

    const sendSubmit = (data, e) => {
        console.log(data)
        const formData = new FormData;

        formData.append('name', data.name);
        formData.append('tradename', data.tradename);
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
        formData.append('min_quantity', data.min_quantity);
        formData.append('shape', data.shape)
        formData.append('colour', data.colour);
        formData.append('temperature', data.temperature);
        formData.append('brand', data.brand);
        formData.append('line', data.line.name);
        formData.append('type', data.type.name)
        formData.append('subtype', data.subtype.name);
        formData.append('add_subtype', data.add_subtype.name)
        formData.append('material_name', data.material_name.name)
        formData.append('material_short_name', data.material_short_name);
        for (var i = 0; i < data.business.length; i++) {
            formData.append('business', data.business[i].name);
        }
        for (let pic of productsImages.images) {
            formData.append('file', pic)
        }
        dispatch(sendProduct(formData))
        console.log(data)
        e.target.reset();
    }

    return (
        <div className="content-ds-fluid">
            <div className="title-content-ds">
                <h6>Agregar una nueva noticia</h6>
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
                                            ref={
                                                register({
                                                    required: {
                                                        value: false,
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.material_short_name && errors.material_short_name.message}
                                        </div>
                                    </div>
                                    <div className="input-ds">
                                        <div><label>Largo del producto</label></div>
                                        <input
                                            type="text"
                                            name="long"
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
                                        <div><label>Ancho del producto</label></div>
                                        <input
                                            type="text"
                                            name="width"
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
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>Diametro del producto</label></div>
                                        <input
                                            type="text"
                                            name="diameter"
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
                                        <div><label>Altura del producto</label></div>
                                        <input
                                            type="text"
                                            name="height"
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
                                        <div><label>Peso del producto</label></div>
                                        <input
                                            type="text"
                                            name="weight"
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
                                <div className="container-grid-ds-forms">
                                    <div className="input-ds">
                                        <div><label>UE Interno</label></div>
                                        <input
                                            type="text"
                                            name="ue_intern"
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
                                <div className="input-ds">
                                    <div>
                                        <label>Linea de producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <ReactSelect
                                                styles={selectStyles}
                                                options={lines}
                                                getOptionLabel={lines => lines.name}
                                                getOptionValue={lines => lines.id}
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

                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div>
                                        <label>Tipo de producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                styles={selectStyles}
                                                options={types}
                                                getOptionLabel={types => types.name}
                                                getOptionValue={types => types.id}
                                                getNewOptionData={(inputValue, optionLabel) => ({
                                                    id: optionLabel,
                                                    name: inputValue,
                                                    __isNew__: true
                                                })}
                                            />}
                                        isClearable
                                        name="type"
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
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div>
                                        <label>Subtipo del producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                styles={selectStyles}
                                                options={subTypes}
                                                getOptionLabel={subTypes => subTypes.name}
                                                getOptionValue={subTypes => subTypes.id}
                                                getNewOptionData = { ( inputValue , optionLabel ) => ({
                                                    id :  optionLabel ,
                                                    name :  inputValue ,
                                                    __isNew__ :  true 
                                                })} 
                                            />}
                                        name="subtype"
                                        isClearable
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Ingrese el subtipo del producto"
                                            }
                                        }}
                                    />
                                    <div className="error-ds">
                                        {errors.subtype && errors.subtype.message}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="input-ds">
                                    <div>
                                        <label>Agrega un subtipo del producto</label>
                                    </div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                styles={selectStyles}
                                                options={addSubTypes}
                                                getOptionLabel={addSubTypes => addSubTypes.name}
                                                getOptionValue={addSubTypes => addSubTypes.id}
                                                getNewOptionData={(inputValue, optionLabel) => ({
                                                    id: optionLabel,
                                                    name: inputValue,
                                                    __isNew__: true
                                                })}
                                            />}
                                        name="add_subtype"
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
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div><label>Material de producto</label></div>
                                    <Controller
                                        as={
                                            <CreatableSelect
                                                styles={selectStyles}
                                                options={materials}
                                                getOptionLabel={materials => materials.name}
                                                getOptionValue={materials => materials.id}
                                                getNewOptionData = { ( inputValue , optionLabel ) => ({
                                                    id :  optionLabel ,
                                                    name :  inputValue ,
                                                    __isNew__ :  true 
                                                })} 
                                            />}
                                        name="material_name"
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
                                    <div><label>Nombre corto del material del producto</label></div>
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
                                <div className="input-ds">
                                    <div>
                                        <label>Agregue los tipos de nogocio</label>
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
                                <div className="input-ds" style={{ marginTop: "20px" }}>
                                    <div><label>Imagen de la noticia</label></div>
                                    <div className="img-input-ds">
                                        <img style={{ width: "100%" }} id="imgPerfil" src={require('../images/img/uploadimage.jpg')} alt="img" />
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={handleProductsImages}
                                            id="profile-image"
                                            accept="image/*"
                                            ref={
                                                register({
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese la imagen de la noticia'
                                                    }
                                                })
                                            }
                                        />
                                        <div className="error-ds">
                                            {errors.file && errors.file.message}
                                        </div>
                                        {
                                            productsImages.images.length > 0 ?
                                                productsImages.images.map((item, index) =>
                                                    <div key={index}>
                                                        {item.name}
                                                        <button type="button" onClick={deleteImage(index)} className="">x</button>
                                                    </div>)
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <button style={{ marginTop: "20px" }} type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashboardAddProduct;