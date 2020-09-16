import React, { Fragment } from 'react';
import ReactSelect from 'react-select'
import GalleryNews from '../components/GalleryNews'

const NewsSearch = () => {

    const selectStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: "1px dotted black",
          color: state.isSelected ? "black" : "black",
          fontSize: 16,
          backgroundColor: state.isSelected ? "black" : "black",
          textAlign: "left",
          cursor: "pointer",
          outline: "none",
        }),
        container: base => ({
          ...base,
          width: "100%"
        }),
        control: (base,state) => ({
          ...base,
          height: 42,
          minHeight: 32,
          fontSize: 14,
          paddingLeft: "20px",
          borderRadius: "50px",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
          outline: "none",
          fontFamily: 'Amble-light',
          borderColor: state.isSelected ? "#ECECEC" : "#ECECEC"
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

    return (
        <Fragment>
            <div className="news-search">
                <h2>Noticias Pamolsa</h2>
                <p className="text">Son canales de comercialización de empaques desechables. Atienden en sus locales a diferentes tipos de usuarios, pueden vender al por menor o ser grandes mayoristas.</p>

                <div className="search-date">
                    <div className="input-select s1">
                        <ReactSelect
                            placeholder="Mes"
                            styles={selectStyles}
                        />
                    </div>
                    <div className="input-select s2">
                        <ReactSelect 
                            placeholder="Año"
                            styles={selectStyles}
                        />
                    </div>
                    <div className="input-select s3">
                        <ReactSelect 
                            placeholder="Ordenar por"
                            styles={selectStyles}
                        />
                    </div>
                </div>

                <GalleryNews />
            </div>
        </Fragment>
    );
}

export default NewsSearch;