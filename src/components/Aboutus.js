import React from 'react';

const AboutUs = () => {
    return (
        <div className="About-us_pm">
            <div className="container-about_us">
                <div className="info-about">
                    <div>
                        <h3>Quienes Somos</h3>
                        <p>
                            En 1994 iniciamos nuestra operación como una empresa dedicada al diseño, fabricación y comercialización de envases desechables. A través de los años hemos venido creciendo, incorporando nuevas líneas de producto al ritmo de las necesidades del mercado. Nuestros envases están fabricados en plástico (poliestireno, poliestireno expandido, polipropileno y pet), papel y aluminio.<br /><br /> Atendemos a diversos tipos de clientes de consumo masivo o food service, además de clientes industriales y agroindustriales, abarcando no sólo el mercado peruano sino también extendiendo nuestra cobertura a varios países de Sudamérica y Centroamérica.<br /><br /> Formamos parte de la organización Carvajal, grupo multinacional que tiene sede principal en Colombia y con presencia en 16 países en América Latina.
                        </p>
                    </div>
                </div>
                <div className="card-about">
                    <div className="square us">
                    </div>
                    <div className="img-about_us">
                        <div className="img">
                            <img src={require('../images/img/aboutus.png')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;