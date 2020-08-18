import React from 'react';
import '../styles/information.css'

const Informations = () => {
    return (
        <div className="Informations">
            <div className="square-information"></div>
            <div className="container-informations">
                <div className="img-carbajal">
                    <div className="wc">
                        <div className="square-carbajal"></div>
                        <img src={require('../images/img/carbajal.png')} />
                    </div>
                </div>
                <div className="info-carbajal">
                    <div>
                        <img src={require('../images/img/logocarbajal.png')} />
                        <h6>Línea ética de carvajal</h6>
                        <p>
                            La Organización Carvajal consciente de su responsabilidad con la sociedad, enmarca dentro de la integridad el actuar ético de sus Empresas y sus colaboradores.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-documents">
                <div className="info-documents">
                    <div className="idms">
                    <h5>Documentos informativos</h5>
                    <p>Encuentra aquí toda la información que podrías necesitar</p>
                    </div>
                </div>
                <div className="documents">
                    <div>
                    <div className="document">
                        <div className="button-document">
                            <button><img src={require('../images/img/arrowdownload.png')} /></button>
                        </div>
                        <p>Documento 1</p>
                    </div>
                    <div className="document">
                        <div className="button-document">
                            <button><img src={require('../images/img/arrowdownload.png')} /></button>
                        </div>
                        <p>Documento 2</p>
                    </div>
                    <div className="document">
                        <div className="button-document">
                            <button><img src={require('../images/img/arrowdownload.png')} /></button>
                        </div>
                        <p>Documento 3</p>
                    </div>
                    <div className="document">
                        <div className="button-document">
                            <button><img src={require('../images/img/arrowdownload.png')} /></button>
                        </div>
                        <p>Documento 4</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informations;