import React from 'react'

const SidebarProductsByLine = ({business, types, materials}) => {

    console.log(business)
    console.log(types)

    console.log(materials)

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipos de productos</h5>
                </div>
                <div>
                    {   
                        types && types.length > 0 ?
                        types.map(item => (
                            <div key={item.id} className="material">
                                <div style={{ display: "flex", justifyContent: "center" }}><input className="only-one" name="line" value={item.id} style={{ marginRight: "10px" }} type="radio" />{item.name}</div>
                            </div>
                        )) : ''
                    }
                </div>
                <div style={{ padding: "0px 10px 10px 10px" }}>
                    <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Tipo de negocio</h5>
                </div>
                <div>
                    {
                        business && business.length > 0 ?
                        business.map(item => (
                            <div key={item.id} className="material">
                                <div style={{ display: "flex", justifyContent: "center" }}><input style={{ marginRight: "10px" }} type="checkbox" />{item.name}</div>
                            </div>
                        )) : ''
                    }
                    <div style={{ padding: "0px 10px 10px 10px" }}>
                        <h5 style={{ color: "#4D4D4C", fontSize: "12px", fontFamily: "Amble-bold" }}>Material</h5>
                    </div>
                    {
                        materials && materials ?
                        materials.map(material => (
                            <div key={material.id} className="material">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <input className="only-one" name="id" value={material.id} style={{ marginRight: "10px" }} type="radio" />
                                    {material.name}
                                </div>
                            </div>
                        )) : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default SidebarProductsByLine;