import React, { Fragment } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import ArrowBackProduct from '../images/svg/arrowbackproducts'

const Filter = ({
    nameTypeBusiness,
    nameTypeProduct,
    countProduct,
    lineBioform,
    lineFoodService,
    lineIndustrial,
    lineAgroIndustrial,
    countProductsByFilter,
    nameFilter,
    t
}) => {

    const history = useHistory();

    const goBackProduct = () => {
        history.replace('/productos');
    }

    return (

        <Fragment>
            <div className="Filter_pm">
                {
                    nameTypeProduct || nameTypeBusiness || nameFilter ?
                        <>
                            <div className="movil desktop">
                                <ArrowBackProduct /><p onClick={goBackProduct} className="path" style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "10px", marginBottom: "20px" }}>{nameTypeBusiness ? t('productos.tipos_negocios') : <>{nameFilter ? t('productos.busqueda') : t('productos.tipos_productos')}</>} / <span style={{ color: "#009FE3" }}>
                                    {nameFilter || nameTypeProduct || nameTypeBusiness}
                                </span></p>
                            </div>

                        </> :
                        <div className="movil desktop">
                            <ArrowBackProduct /><p onClick={goBackProduct} className="path" style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "10px", marginBottom: "20px" }}>{t('productos.lineas_productos')} / <span style={{ color: "#009FE3" }}>
                                {`${lineBioform || lineFoodService || lineIndustrial || lineAgroIndustrial || nameTypeProduct}`}
                            </span>
                            </p>
                        </div>
                }
                <div className="Name-category movil">
                    {nameTypeProduct || nameTypeBusiness ? <p>{nameTypeProduct || nameTypeBusiness || nameFilter}</p> :
                        <p>{lineBioform || lineFoodService || lineIndustrial || lineAgroIndustrial || nameFilter}</p>
                    }
                </div>
                <div className="container-filter_pm">
                    <div className="Name-category">
                        {nameTypeProduct || nameTypeBusiness ? <p>{nameTypeProduct || nameTypeBusiness || nameFilter}</p> :
                            <p>{lineBioform || lineFoodService || lineIndustrial || lineAgroIndustrial || nameFilter}</p>
                        }
                    </div>
                    <div className="Count-products">
                        {
                            countProductsByFilter ? <p>{'' || countProductsByFilter + ' ' + t('productos.productos')}</p>
                                :
                                <p>{countProduct || 0 + ' ' + t('productos.productos')}</p>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Filter);