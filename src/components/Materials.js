import React from 'react';
import { withRouter } from 'react-router-dom'

const materials = [
    {
        "_id": 0,
        "name": "Todos",
        "count": 53
    },
    {
        "_id": 1,
        "name": "Bioform fibra",
        "count": 3
    },
    {
        "_id": 2,
        "name": "Bioform carton",
        "count": 3
    },
    {
        "_id": 3,
        "name": "PS espumado",
        "count": 10
    },
    {
        "_id": 4,
        "name": "EPS",
        "count": 4
    },
    {
        "_id": 5,
        "name": "Polopapel",
        "count": 5
    },
    {
        "_id": 6,
        "name": "Aluminio",
        "count": 5
    },
    {
        "_id": 7,
        "name": "PET",
        "count": 5
    },
    {
        "_id": 8,
        "name": "PP",
        "count": 0
    },
    {
        "_id": 10,
        "name": "PS Rigido",
        "count": 0
    },
    {
        "_id": 11,
        "name": "PCV",
        "count": 18
    }
]

const Materials = ({match}) => {

    let url = match.url
    let regex = '/productos/'

    url = url.replace(regex,'')

    return (
        <div className="Materials-sidebar_pm">
            <div>
                <div style={{padding: "0px 10px 10px 10px"}}>
                <p>Linea de producto / <span>{`${url}`}</span></p>
                <h5>Material</h5>
                </div>
                <div>
                    {
                        materials.map(material => (
                            <div key={material._id} className="material">
                                <div>{material.name}</div>
                                <div>{material.count}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default withRouter(Materials);