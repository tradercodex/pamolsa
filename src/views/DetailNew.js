import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import '../styles/distributor.css'
import Arrow from '../images/svg/arrowback';
import Footer from '../components/Footer';


const DetailNew = () => {

    const history = useHistory();

    const back = () => {
        history.goBack();
    }

    return ( 
        <Fragment>
            <Header />
            <div className="Detail-new_pm">
                <div className="back">
                    <button onClick={back}><Arrow/>Volver</button>
                </div>
            </div>
            <div className="container-detail_new">
                <h2>Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje</h2>
                <div className="info-detail">
                    <span>Por Lima al dia -19 febrero, 2020</span>
                    <p className="text">Lima.- Pamolsa, empresa peruana dedicada al diseño, fabricación y comercialización de empaques, realizó la instalación de estaciones de reciclaje de plástico PET en 27 locales de la cadena de restaurantes Pardos Chicken a nivel Lima y Callao. Mediante este proyecto ambas organizaciones, en conjunto con la ONG Recicla, ¡Pe!, buscan promover el reciclaje de PET en el país.<br/><br/> En el proceso, los colaboradores de la cadena de restaurantes serán los responsables de mostrar a sus clientes la forma correcta de separar los residuos en las estaciones de reciclaje. Por su parte, la ONG se encargará de la coordinación con los recicladores formales para el recojo del material acopiado. Finalmente,Recicloplas Perú, la operación de reciclaje de PET de Pamolsa, cerrará el ciclo con los recicladores para el aprovechamiento del PET acopiado.<br/><br/> Este proyecto tiene diversos beneficios como la promoción del reciclaje por medio de la educación a la comunidad. También, favorece a los recicladores formales porque estas estaciones se convierten en un punto de acopio seguro para ellos. Otro aspecto positivo es que pone a disposición de la sociedad los medios necesarios para que puedan reciclar. Además, disminuye la generación de residuos sólidos en los locales de Pardos Chicken.<br/><br/> Finalmente,es importante saber que en Recicloplas,el PET reciclado es clasificado, triturado y lavado. Luego, en Pamolsa, el mismo material pasa por un proceso de descontaminación certificado por la FDA (Administración de Alimentos y Medicamentos de Estados Unidos) y es utilizado nuevamente en la fabricación de envases para la industria alimentaria. Así pues, Pamolsa tiene el objetivo de que todos sus productos de PET contengan por lo menos un 40% de material reciclado.</p>
                    <div className="Font text">
                        <div>Fuente</div>
                        <Link to="#">Pamolsa, Pardos Chicken y Recicla,Pe! promueven el reciclaje</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
        
     );
}
 
export default DetailNew;