import React, { Fragment } from 'react'
import FilterIcon from '../images/svg/filtericon'
import Filter from './Filter'
import ProductsFilterByLine from './ProductsFilterByLine'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SidebarProductsByBusiness from '../components/SidebarProductsByBusiness'
import SidebarProductsByLine from '../components/SidebarProductsByLine'
import SidebarProductsByTypes from '../components/SidebarProducts'
import CloseModal from '../images/svg/closemodal';
import { withRouter } from 'react-router-dom';

function getModalStyle() {
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        maxWidth: 1200,
        top: 90,
        margin: "20px auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        boxShadow: theme.shadows[5],
        borderRadius: '20px'
    },
}));

const Products = ({
    pathname,
    line,
    products,
    countProduct,
    lineBioform,
    lineFoodService,
    lineIndustrial,
    lineAgroIndustrial,
    productsByFilter,
    nameFilter,
    toggleTypesProductsRadio,
    countProductsByFilter,
    nameTypeProduct,
    nameTypeBusiness,
    type_id,
    business,
    lines,
    types,
    materials,
    toggleMaterialsProductsRadio,
    toggleLinesProductsRadio,
    match
}) => {

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

    const body = (
        <div>
            {
                pathname === `/productos/linea/${line}` ?
                    <div style={modalStyle} className={classes.paper}>
                        <div className="close-modal-filter">
                            <CloseModal closeModal={handleClose} />
                        </div>
                        <SidebarProductsByLine
                            types={types}
                            business={business}
                            materials={materials}
                            toggleTypesProductsRadio={toggleTypesProductsRadio}
                            toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                            toggleLinesProductsRadio={toggleLinesProductsRadio}
                        />
                    </div>
                    :
                    <>
                        {
                            business ?
                                <div style={modalStyle} className={classes.paper}>
                                    <div className="close-modal-filter">
                                        <CloseModal closeModal={handleClose} />
                                    </div>
                                    <SidebarProductsByTypes
                                        business={business}
                                        lines={lines}
                                        materials={materials}
                                        toggleTypesProductsRadio={toggleTypesProductsRadio}
                                        toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                                        toggleLinesProductsRadio={toggleLinesProductsRadio}
                                    />
                                </div> :
                                <div style={modalStyle} className={classes.paper}>
                                    <div className="close-modal-filter">
                                        <CloseModal closeModal={handleClose} />
                                    </div>
                                    <SidebarProductsByBusiness
                                        types={types}
                                        lines={lines}
                                        materials={materials}
                                        toggleTypesProductsRadio={toggleTypesProductsRadio}
                                        toggleMaterialsProductsRadio={toggleMaterialsProductsRadio}
                                        toggleLinesProductsRadio={toggleLinesProductsRadio}
                                    />
                                </div>
                        }
                    </>
            }
        </div>
    );

    return (
        <Fragment>
            <Filter
                nameTypeBusiness={nameTypeBusiness}
                nameTypeProduct={nameTypeProduct}
                lineBioform={lineBioform}
                lineFoodService={lineFoodService}
                lineIndustrial={lineIndustrial}
                lineAgroIndustrial={lineAgroIndustrial}
                countProduct={countProduct}
                countProductsByFilter={countProductsByFilter}
                nameFilter={nameFilter}
            />
            <div className="filter-button">
                <button onClick={handleOpen}><FilterIcon /><span>Filtrar</span></button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <ProductsFilterByLine
                lineBioform={lineBioform}
                products={products}
                toggleTypesProductsRadio={toggleTypesProductsRadio}
                productsByFilter={productsByFilter}
            />
        </Fragment>
    );
}

export default withRouter(Products);