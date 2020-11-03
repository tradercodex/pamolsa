import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getAllProducts, deleteProduct } from '../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const DashboardProduct = () => {

    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getAllProducts(1));
    }, [])

    const deletingProduct = (id) => {

        const formData = new FormData();
        formData.append('product_id', id)
        let result = window.confirm("Estas seguro de eliminar este banner?, recuerda que tambien se borrará de tu pagina de inicio")
        if (result === true) {
            dispatch(deleteProduct(formData))
        }
    }

    return (
        <Fragment>
            <div className="content-grid-cards">
                <div className="card-ds">
                    <div className="body-card">
                        <div style={{ width: "100%" }}>
                            <div className="img title-content-ds">
                                <img src={require('../images/img/lineproducts.png')} alt="" />
                                <Link>Agregar</Link>
                            </div>
                            <p>Tipo de línea</p>
                        </div>
                    </div>
                </div>
                <div className="card-ds">
                    <div className="body-card">
                        <div style={{ width: "100%" }}>
                            <div className="img title-content-ds">
                                <img src={require('../images/img/lineproducts.png')} alt="" />
                                <Link>Agregar</Link>
                            </div>
                            <p>Tipo de negocios</p>
                        </div>
                    </div>
                </div>
                <div className="card-ds">
                    <div className="body-card">
                        <div style={{ width: "100%" }}>
                            <div className="img title-content-ds">
                                <img src={require('../images/img/lineproducts.png')} alt="" />
                                <Link>Agregar</Link>
                            </div>
                            <p>Materiales</p>
                        </div>
                    </div>
                </div>
                <div className="card-ds">
                    <div className="body-card">
                        <div style={{ width: "100%" }}>
                            <div className="img title-content-ds">
                                <img src={require('../images/img/lineproducts.png')} alt="" />
                                <Link>Agregar</Link>
                            </div>
                            <p>Tipo de línea</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-ds-fluid">
                <div className="title-content-ds">
                    <h6>Tus productos actualmente</h6>
                    <Link to="/administrador/productos/nuevo">Agregar producto</Link>
                </div>
                <div className="grid-container-ds">
                    <div className="table-products" style={{ gridColumn: "1/9" }}>
                        <Paper>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{color: "#fff"}}>Producto</TableCell>
                                            <TableCell style={{color: "#fff"}}>Material</TableCell>
                                            <TableCell style={{color: "#fff"}}>Abr.Material</TableCell>
                                            <TableCell style={{color: "#fff"}}>Editar</TableCell>
                                            <TableCell style={{color: "#fff"}}>Eliminar</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            products.map(item => {
                                                return (
                                                    <TableRow key={item.id}>
                                                        <TableCell style={{color: "#fff"}}>{item.name}</TableCell>
                                                        <TableCell style={{color: "#fff"}}>{item.material.name}</TableCell>
                                                        <TableCell style={{color: "#fff"}}>{item.material.short_name}</TableCell>
                                                        <TableCell><Link style={{color: "#55F09D"}} to={`/administrador/productos/editar/${item.id}`}><EditIcon /></Link></TableCell>
                                                        <TableCell><Link style={{color: "#F34F6B"}} onClick={() => deletingProduct(item.id)} to="#"><DeleteIcon /></Link></TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DashboardProduct;