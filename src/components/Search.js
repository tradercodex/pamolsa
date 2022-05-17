import React from 'react';

import { withRouter } from 'react-router-dom'
import SearchIcon from '../images/svg/search'
import FilterIcon from '../images/svg/filter'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MarkerSearch from '../images/svg/markersearch';
import { useHistory } from 'react-router-dom'
import i18n from "i18next";

function getModalStyle() {
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        maxWidth: 1200,
        top: 200,
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        boxShadow: theme.shadows[5],
        borderRadius: '20px'
    },
}));

const Search = ({ search, onTextChanged, renderSuggestions, display, options, match, typesBusiness, setSearch, searchPress, onChangeUbication, searchPressUbication, t }) => {

    const pathname = match.path
    const url = match.url
    const history = useHistory();

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const goBack = () => {
        history.replace('/productos');
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title" className="title-choose_business">{t('productos.seleccionar_tipo_negocio')}</h2>
            <div className="categories-business">
                {
                    typesBusiness && typesBusiness.length > 0 ?
                        typesBusiness.map(item => (
                            <div className="business-choose" key={item.id}>
                                <a className={url === `/productos/negocio/${item.name}/${item.id}` ? "active-category" : 'category'} href={`/productos/negocio/${item.name}/${item.id}`}>
                                    <img src={`https://` + item.url} alt="" />
                                    {i18n.language === 'es' ? item.name : item.name_en}
                                </a>
                            </div>
                        )) : ''
                }
            </div>
        </div>
    );


    return (
        <div>
            {
                pathname === "/productos" ||
                    pathname === "/productos/:name/:id" ||
                    pathname === "/productos/:name/detail" ||
                    pathname === "/productos/:name"
                    ?
                    <div className="Search product">
                        {
                            pathname === "/productos" ? '' : <button onClick={goBack} className="btn-back">{t('volver')}</button>
                        }
                        <div className="Search-container">
                            <SearchIcon />
                            <input onKeyUp={searchPress} value={search} onChange={onTextChanged} style={{ padding: "15px 5px 15px 50px" }} type="text" placeholder={t('productos.buscador')} />
                            {renderSuggestions()}
                            <button type="button" onClick={handleOpen}><FilterIcon /></button>
                            {
                                display && (
                                    <div className="autocontainer">
                                        {
                                            options.map((v, i) => {
                                                return (
                                                    <div key={i}>
                                                        <span>{v.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </div>
                    </div> : ''
            }

            {
                pathname === "/home/distribuidores" ?
                    <div className="Search">
                        <div className="Search-container distributor">
                            <MarkerSearch />
                            <input onKeyUp={searchPressUbication} type="text" name="ubication" onChange={onChangeUbication} placeholder="Ingresa tu distrito o departamento - Ejemplo (Callao)" />
                        </div>
                    </div> : ''
            }

            {
                pathname === "/productos/linea/:id" || pathname === "/productos/negocio/:name/:id" || pathname === "/producto/detalle/:id" ?
                    <div className="Search product">
                        <button onClick={goBack} className="btn-back">{t('volver')}</button>
                        <div className="Search-container lines">
                            <SearchIcon />
                            <input style={{ marginBottom: "0" }} name="query" type="text" onKeyUp={searchPress} value={search} onChange={onTextChanged} placeholder={t('productos.buscador')} />
                            {renderSuggestions()}
                            <button type="button" onClick={handleOpen}><FilterIcon /></button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </div>
                    </div> : ''
            }
        </div>
    );
}

export default withRouter(Search);