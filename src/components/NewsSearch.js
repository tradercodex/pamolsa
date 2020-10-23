
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import ReactSelect from 'react-select'
import GalleryNews from '../components/GalleryNews'

const NewsSearch = ({ news }) => {

  const [ newDate , setNewDate ] = useState(); 
  const [ selectDate, setSelectDate ] = useState({
    month: '',
    year: ''
  })

  const months = [
    { value: '1', label: 'Enero' },
    { value: '2', label: 'Febrero' },
    { value: '3', label: 'Marzo' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Mayo' },
    { value: '6', label: 'Junio' },
    { value: '7', label: 'Julio' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' }
  ]

  const years = [
    { value: '1', label: '2020' },
    { value: '2', label: '2021' },
    { value: '3', label: '2022' },
    { value: '4', label: '2023' },
    { value: '5', label: '2024' },
    { value: '6', label: '2025' },
    { value: '7', label: '2026' },
    { value: '8', label: '2027' },
    { value: '9', label: '2028' },
    { value: '10', label: '2029' },
    { value: '11', label: '2030' }
  ]

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

  const getNewDate = async () => {

    const { month, year } = selectDate
    console.log(month)
    const res = await Axios.get(`http://3.120.185.254:8090/api/news/listByDate?page=1&year=${year}&month=${month}`);
    setNewDate(res.data.data)
  }

  useEffect(()=> {
    getNewDate();
  },[selectDate])

  console.log(newDate)

  const handleChangeMonth = (selectedOption) => {
    setSelectDate({
      ...selectDate,
      month: selectedOption.value
    })
  }

  const handleChangeYear = (selectedOption) => {
    setSelectDate({
      ...selectDate,
      year: selectedOption.label
    })
  }

  console.log(selectDate)

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
              options={months}
              onChange={handleChangeMonth}
            />
          </div>
          <div className="input-select s2">
            <ReactSelect
              placeholder="Año"
              styles={selectStyles}
              options={years}
              onChange={handleChangeYear}
            />
          </div>
          <div className="input-select s3">
            <ReactSelect
              placeholder="Ordenar por"
              styles={selectStyles}
            />
          </div>
        </div>

        <GalleryNews news={news} newDate={newDate} />
      </div>
    </Fragment>
  );
}

export default NewsSearch;