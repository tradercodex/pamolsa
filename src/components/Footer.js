import React from "react";
import Logo from "../images/svg/logo";
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from 'react-scroll'
import Book from '../images/img/bookclaims.png';
import "../styles/footer.css";
import ArrowFooter from "../images/svg/arrowfooter";
import declaration from "../pdf/declaracion.pdf";
import procedimiento from "../pdf/procedimiento.pdf";
import politicasig from '../images/img/politicasig.webp'
import politicaproteccion from "../pdf/politicaproteccion.pdf";

const Footer = () => {
  return (
    <div>
      <div className="Footer-pm">
        <div className="container-footer">
          <div className="logo">
            <Logo />
          </div>
          <div className="claims">
            <div className="center">
              <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter
                to="/libro-de-reclamaciones"
              >
                <img src={Book} alt="libro de reclamaciones" width="210px" height="120px"/>
              </LinkRouter></Link>
            </div>
          </div>
          <div className="declaration">
            <div className="title">
              <h6>Declaración de beneficiario final</h6>
              <div className="info-contact">
                <div className="center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={declaration}
                  >
                    Peruana de Moldeados SAC
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="information">
            <div className="title">
              <h6>Documento informativo</h6>
              <div className="info-contact">
                <div className="center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={politicaproteccion}
                  >
                    Pólitica de privacidad
                  </a>
                </div>
                <div className="center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={politicasig}
                  >
                    Pólitica de SIG
                  </a>
                </div>
                <div className="center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={procedimiento}
                  >
                    Procedimiento de aplicación del programa de cumplimiento
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="title">
              <h6>Contacto</h6>
              <div className="info-contact">
                <div className="center">Central: (511) 710 3020</div>
                <div className="cell">Central de ventas: (01) 641 9595</div>
                <div className="cell">WhatsApp: 934 440 291</div>
                <div className="cell">
                  Horario: Lunes a Viernes de 8:30 AM a 5:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy-socials desktop">
          <div className="copy">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="http://www.arquimarkets.com/"
            >
              <p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p>
            </a>
          </div>
          <div className="copy-right">
            <div className="span">Nuestras redes</div>
            <div className="socials">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/pamolsaoficial"
                target="_blank"
              >
                <img src={require("../images/img/facebook.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/13052324/admin/"
                target="_blank"
              >
                <img src={require("../images/img/in.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/pamolsa/"
                target="_blank"
              >
                <img src={require("../images/img/instagram.webp")} />
              </a>
            </div>
          </div>
        </div>
        <div className="copy-socials movil">
          <div className="copy-right">
            <div className="span">Nuestras redes</div>
            <div className="socials">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/pamolsaoficial"
                target="_blank"
              >
                <img src={require("../images/img/facebook.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/13052324/admin/"
                target="_blank"
              >
                <img src={require("../images/img/in.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/pamolsa/"
                target="_blank"
              >
                <img src={require("../images/img/instagram.webp")} />
              </a>
            </div>
          </div>
          <div className="copy">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="http://www.arquimarkets.com/"
            >
              <p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p>
            </a>
          </div>
        </div>
      </div>
      <div className="Footer-pm movil">
        <div className="container-footer">
          <div className="logo">
            <Logo />
          </div>
          <div className="claims">
            <div className="center">
              <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter
                to="/libro-de-reclamaciones"
              >
                <img src={Book} alt="libro de reclamaciones" />
              </LinkRouter></Link>
            </div>
          </div>
          <div className="accordion-footer">
            <div className="declaration collapse-footer" id="declaration">
              <div className="title">
                <div className="sp-title">
                  <a
                    href="#declaration" 
                    className=""
                  >
                    Declaración de beneficiario final
                  </a>
                  <ArrowFooter />
                </div>
                <div className="info-contact content">
                  <div className="center">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={declaration}
                    >
                      Peruana de Modelos SAC
                    </a>
                  </div>
                  <div className="center">
                    <Link to="header" smooth={true} duration={1000} offset={-2000}><LinkRouter
                      to="/libro-de-reclamaciones"
                    >
                      Libro de reclamaciones
                    </LinkRouter></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="information collapse-footer" id="information">
              <div className="title">
                <div className="sp-title">
                  <a href="#information" className="">
                    Documento informativo
                  </a>
                  <ArrowFooter />
                </div>
                <div className="info-contact content">
                  <div className="center">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={politicaproteccion}
                    >
                      Pólitica de privacidad
                    </a>
                  </div>
                  <div className="center">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={politicasig}
                    >
                      Pólitica de SIG
                    </a>
                  </div>
                  <div className="center">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={procedimiento}
                    >
                      Procedimiento de aplicación del programa de cumplimiento
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact collapse-footer" id="contact">
              <div className="title">
                <div className="sp-title">
                  <a rel="noopener noreferrer" href="#contact" className="">
                    Contacto
                  </a>
                  <ArrowFooter />
                </div>
                <div className="info-contact content">
                  <div className="center">Central: (511) 710 3020</div>
                  <div className="cell">Central de ventas: (01) 641 9595</div>
                  <div className="cell">WhatsApp: 934 440 291</div>
                  <div className="cell">
                    Horario: Lunes a Viernes de 8:30 AM a 5:30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy-socials desktop">
          <div className="copy">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="http://www.arquimarkets.com/"
            >
              <p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p>
            </a>
          </div>
          <div className="copy-right">
            <div className="span">Nuestras redes</div>
            <div className="socials">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/pamolsaoficial"
                target="_blank"
              >
                <img src={require("../images/img/facebook.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/13052324/admin/"
                target="_blank"
              >
                <img src={require("../images/img/in.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/pamolsa/"
                target="_blank"
              >
                <img src={require("../images/img/instagram.webp")} />
              </a>
            </div>
          </div>
        </div>
        <div className="copy-socials movil">
          <div className="copy-right">
            <div className="span">Nuestras redes</div>
            <div className="socials">
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/pamolsaoficial"
                target="_blank"
              >
                <img src={require("../images/img/facebook.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/13052324/admin/"
                target="_blank"
              >
                <img src={require("../images/img/in.webp")} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/pamolsa/"
                target="_blank"
              >
                <img src={require("../images/img/instagram.webp")} />
              </a>
            </div>
          </div>
          <div className="copy">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="http://www.arquimarkets.com/"
            >
              <p>© Todos los derechos reservados 2020 - Make by Arquimarkets</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
