import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

const Filter = ({ match }) => {

    let name = match.params.name

    return (

        <Fragment>
            <div className="Filter_pm">
                <p style={{fontFamily: "Amble-bold", color: "#4D4D4C",fontSize: "10px",marginBottom: "20px"}}>Linea de producto / <span style={{color: "#009FE3"}}>{`${name}`}</span></p>
                <div className="container-filter_pm">
                    <div className="Name-category">
                        <p>{name}</p>
                    </div>
                    <div className="Count-products">
                        <p>53 productos</p>
                    </div>
                    <div className="Order-by">
                        <div>
                            <p>Ordernar por</p>
                        </div>
                        <div className="select-order">
                            <p>Más vendido</p>
                        </div>
                    </div>
                    <div className="View-options">
                        <div>
                            <p>Vista por</p>
                        </div>
                        <div>
                            <p>icon</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Filter);