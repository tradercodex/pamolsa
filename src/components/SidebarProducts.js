import React from 'react';
import { withRouter } from 'react-router-dom'

const SidebarProducts = ({ match,linesProducts,typesBusiness, materials, getMaterialId, toggleChange, toggleChangeCheckbox, toggleLineProductsRadio }) => {

    console.log(linesProducts)

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipo de línea</h5>
                </div>
                <div>
                    {
                        linesProducts.map(line => (
                            <div key={line.id} className="material">
                                <div style={{ display: "flex", justifyContent: "center" }}><input className="only-one" name="line" value={line.id} onClick={(e) => toggleLineProductsRadio(e, line.id)} style={{ marginRight: "10px" }} type="radio" />{line.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipo de negocio</h5>
                </div>
                <div>
                    {
                        typesBusiness.map(business => (
                            <div key={business.id} className="material">
                                <div style={{ display: "flex", justifyContent: "center" }}><input onClick={(e) => toggleChangeCheckbox(e, business.id)} style={{ marginRight: "10px" }} type="checkbox" />{business.name}</div>
                            </div>
                        ))
                    }
                    <div style={{ padding: "0px 10px 10px 10px" }}>
                        <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Material</h5>
                    </div>
                    {
                        materials.map(material => (
                            <div key={material.id} className="material" onClick={(e) => toggleChange(e)}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <input className="only-one" name="id" value={material.id} style={{ marginRight: "10px" }} type="radio" />
                                    {material.name}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default withRouter(SidebarProducts);