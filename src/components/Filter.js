import React from 'react'
import { withRouter } from 'react-router-dom'

const Filter = ({match}) => {

    let url = match.url
    let regex = '/productos/'

    url = url.replace(regex,'')

    return (
        <div className="Filter_pm">
            <div className="container-filter_pm">
                <div className="Name-category">
                    <p>{url}</p>
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
    );
}

export default withRouter(Filter);