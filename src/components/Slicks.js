import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../styles/slicks.css";

const Slicks = ({ match, banners, t }) => {
  let pathname = match.path;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  console.log(banners)
  // {
  //     banners && banners.length > 0 ?
  //         banners.map(item => (
  //             <div key={item.id}>
  //                 <Style>
  //                     {
  //                         `.Rotate-slick {
  //                             overflow: hidden;
  //                             position: relative;
  //                             width: 2200px;
  //                             height: 1206.42px;
  //                             top: -410px;
  //                             z-index: 3000;
  //                             left: -153px;
  //                             border-radius: 191px;
  //                             transform: rotate(-21.34deg);
  //                         }

  //                         @media (max-width: 1440px) {
  //                             .Rotate-slick::after{
  //                                 min-width: 110%;
  //                                 min-height: 105%;
  //                                 background-size: contain !important;
  //                             }
  //                         }
  //                         `

  //                     }
  //                     <div className="Rotate-slick">
  //                         <div className="Elipse">
  //                             {/* <img src={item.circle.url === null} alt=""/> */}
  //                         </div>
  //                         <div className="info-slick">
  //                             <h2>{item.name}</h2>
  //                             <p>{item.subname}</p>
  //                             <div className="more-btn">
  //                                 <Link to="/productos/linea/2">Conocer más</Link>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </Style>
  //                 <div className="footer-slick">
  //                     <div className="tree-pm banner">
  //                         <img src={require('../images/img/tree.gif')} />
  //                     </div>
  //                 </div>
  //             </div>
  //         )) : ''
  // }

  return (
    <Fragment>
      {pathname === "/" ? (
        <div className="content-slick-home bg md movil xs ss">
          <div className="Slicks-pm">
            <div className="Radius"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick first xs ss">
                  <div
                    className="info-slick second"
                    style={{ top: "1184px", left: "200px" }}
                  >
                    {/* <h2>Bioform</h2> */}
                    {/* <p style={{ marginBottom: "50px" }}>
                      {t('home.bioform')}
                    </p> */}
                    <div className="more-btn">
                      <a
                        style={{ background: "#fff", color: "#3F8332", marginTop: "10vh" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.bioform.pe/"
                      >
                        {t('home.conoce_mas')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Rotate-slick movil express xs ss">
                  {/* <div className="Elipse movil x">
                                            <img src={require('../images/img/circlebanner.png')} alt="" />
                                        </div>
                                        <div className="biof movil x">
                                            <img src={require('../images/img/bioformbanner.png')} alt="" />
                                        </div> */}
                  <div
                    className="info-slick second"
                    style={{ top: "650px", left: "200px" }}
                  >
                    <h2>{t('home.conoce_mas')}</h2>
                    <p>Tel: (01) 641-9595 - Wsp: 934-440291</p>
                    <p>
                      {t('home.horario')}
                    </p>
                    <div className="more-btn">
                      <a
                        style={{ background: "#005382" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.pamolsaexpress.com/"
                      >
                        {t('home.ecommerce')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}

      {pathname === "/nosotros" ? (
        <div>
          <div className="Slicks-pm Us">
            <div className="Radius Us"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us Main tablet ls movil xs">
                  <div className="info-slick Us ls">
                    <h2>{t('nosotros.nosotros')}</h2>
                    <p>
                      {t('nosotros.ofrecemos')}
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
      {pathname === "/sostenibilidad" ? (
        <div>
          <div className="Slicks-pm Us">
            <div className="Radius Us"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us Sb movil ls xs">
                  <div className="info-slick Us">
                    <h2>{t('sostenibilidad.sostenibilidad')}</h2>
                    <p>{t('sostenibilidad.sostenibilidad_desc')}</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
      {pathname === "/trabaja-con-nosotros" ? (
        <div>
          <div className="Slicks-pm Us" style={{ background: "#F9F9F9" }}>
            <div className="Radius Us"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us Wu movil ls xs">
                  <div className="info-slick Us">
                    <h2>
                      {t('trabaja.trabaja')}
                    </h2>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
      {pathname === "/clientes" ? (
        <div>
          <div className="Slicks-pm Us">
            <div className="Radius Us Clients"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us Cl movil ls xs">
                  <div className="info-slick Us">
                    <h2>{t('clientes.clientes')}</h2>
                    <p>{t('clientes.clientes_desc')}</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
      {pathname === "/noticias" ? (
        <div className="content-slick-new new">
          <div className="Slicks-pm Us">
            <div className="Radius Us News"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us New movil ls xs ">
                  <div className="info-slick Us">
                    <h2>{t('noticias.noticias')}</h2>
                    <p>{t('noticias.noticias_desc')}</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
      {pathname === "/contacto" ? (
        <div>
          <div className="Slicks-pm Us">
            <div className="Radius Us"></div>
            <Slider {...settings}>
              <div>
                <div className="Rotate-slick Us Ctt movil ls xs">
                  <div className="info-slick Us">
                    <h2>{t('contacto.contacto')}</h2>
                    <p>{t('contacto.contacto_desc')}</p>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="tree-new contact">
              <img src={require("../images/img/tree.webp")} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default withRouter(Slicks);
