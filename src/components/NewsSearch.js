
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import ReactSelect from 'react-select'
import GalleryNews from '../components/GalleryNews'

const NewsSearch = ({ news, t }) => {

  const [newDate, setNewDate] = useState();
  const [selectDate, setSelectDate] = useState({
    month: '',
    year: '',
    order: ''
  })

  const order = [
    { value: '1', label: 'DESC' },
    { value: '2', label: 'ASC' },
  ]

  const months = [
    { value: '1', label: t('noticias.enero') },
    { value: '2', label: t('noticias.febrero') },
    { value: '3', label: t('noticias.marzo') },
    { value: '4', label: t('noticias.abril') },
    { value: '5', label: t('noticias.mayo') },
    { value: '6', label: t('noticias.junio') },
    { value: '7', label: t('noticias.julio') },
    { value: '8', label: t('noticias.agosto') },
    { value: '9', label: t('noticias.septiembre') },
    { value: '10', label: t('noticias.octubre') },
    { value: '11', label: t('noticias.noviembre') },
    { value: '12', label: t('noticias.diciembre') }
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

  const handleChangeOrder = (selectedOption) => {
    setSelectDate({
      ...selectDate,
      order: selectedOption.label
    })
  }

  useEffect(() => {
    const getNewDate = async () => {
      const { month, year, order } = selectDate
      const res = await Axios.get(`https://ws.pamolsa.com.pe/api/news/listByDate?page=1&year=${year}&month=${month}&order=${order}`);
      setNewDate(res.data.data)
    }
    getNewDate();

  }, [selectDate])




  return (
    <Fragment>
      <div className="news-search">
        <h2>{t('noticias.pamolsa')}</h2>

        <div className="search-date">
          <div className="input-select s1">
            <ReactSelect
              placeholder={t('noticias.mes')}
              styles={selectStyles}
              options={months}
              onChange={handleChangeMonth}
            />
          </div>
          <div className="input-select s2">
            <ReactSelect
              placeholder={t('noticias.anio')}
              styles={selectStyles}
              options={years}
              onChange={handleChangeYear}
            />
          </div>
          <div className="input-select s3">
            <ReactSelect
              placeholder={t('noticias.ordenar')}
              styles={selectStyles}
              options={order}
              onChange={handleChangeOrder}
            />
          </div>
        </div>

        <GalleryNews news={news} newDate={newDate} t={t} />
      </div>
    </Fragment>
  );
}

export default NewsSearch;