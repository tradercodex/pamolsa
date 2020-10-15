import React from 'react';

import { withRouter } from 'react-router-dom'

import SearchIcon from '../images/svg/search'
import FilterIcon from '../images/svg/filter'
import Restaurant from '../images/svg/restaurant'
import Bakery from '../images/svg/bakery'
import Coffe from '../images/svg/coffe'
import Delivery from '../images/svg/delivery'
import Fish from '../images/svg/fish'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 20
    const left = 24

    return {
        top: `${top}%`,
        left: `${left}%`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        maxWidth: 1200,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
        boxShadow: theme.shadows[5],
        borderRadius: '20px'
    },
}));

const Search = ({ match }) => {

    const pathname = match.path

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
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title" className="title-choose_business">Selecciona el tipo negocio que tienes</h2>
            <div className="categories-business">
                <div className="business-choose">
                    <button><Restaurant />Restaurante</button>
                </div>
                <div className="business-choose">
                    <button><Bakery />Panaderia</button>
                </div>
                <div className="business-choose">
                    <button><Coffe />Cafeteria</button>
                </div>
                <div className="business-choose">
                    <button><Delivery />Delivery</button>
                </div>
                <div className="business-choose">
                    <button><Fish />Chifa</button>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {
                pathname === "/productos" || pathname === "/productos/:name" || pathname === "/productos/:name/detail" ?
                    <div className="Search">
                        <div className="Search-container">
                            <SearchIcon />
                            <input type="text" placeholder="¿Qué producto necesitas?" />
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

{
                pathname === "/home/distribuidores" ?
                    <div className="Search">
                        <div className="Search-container">
                            <SearchIcon />
                            <input type="text" placeholder="¿Qué producto necesitas?" />
                        </div>
                    </div> : ''
            }
        </div>
    );
}

export default withRouter(Search);