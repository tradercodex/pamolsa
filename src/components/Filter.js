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
    nameFilter
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
                                <ArrowBackProduct /><p onClick={goBackProduct} className="path" style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "10px", marginBottom: "20px" }}>{nameTypeBusiness ? "Tipo de negocio" : <>{nameFilter ? "Busqueda de producto" : 'Tipo de producto'}</>} / <span style={{ color: "#009FE3" }}>
                                    {nameFilter || nameTypeProduct || nameTypeBusiness}
                                </span></p>
                            </div>

                        </> : 
                         <div className="movil desktop">
                            <ArrowBackProduct /><p onClick={goBackProduct} className="path" style={{ fontFamily: "Amble-bold", color: "#4D4D4C", fontSize: "10px", marginBottom: "20px" }}>Linea de producto / <span style={{ color: "#009FE3" }}>
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
                            countProductsByFilter ? <p>{'' || countProductsByFilter + ` productos`}</p>
                                :
                                <p>{countProduct || 0 + ` productos`}</p>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Filter);