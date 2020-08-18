import React from 'react';
import Logo from '../images/svg/logo';
import '../styles/footer.css'

const Footer = () => {
    return ( 
        <div className="Footer-pm">
            <div className="container-footer">
                <div className="logo">
                    <Logo />
                </div>
                <div className="contact">
                    <div className="title">
                        <h6>Contacto</h6>
                        <div className="info-contact">
                            <div className="center">Central: (01) 719- 2100</div>
                            <div className="cell">Ventas: 994 644 843/ 994 647 087</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="copy-socials">
                <div className="copy">
                    <p>© Photo, Inc. 2019. We love our users!</p>
                </div>
                <div className="copy-right">
                    <div className="span">Nuestras redes</div>
                    <div className="socials">
                        <a><img src={require('../images/img/facebook.png')} /></a>
                        <a><img src={require('../images/img/in.png')} /></a>
                        <a><img src={require('../images/img/twitter.png')} /></a>
                        <a><img src={require('../images/img/instagram.png')} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;