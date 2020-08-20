import React, { Fragment } from 'react';
import Play from '../images/svg/play'
import '../styles/known.css'
import WOW from 'wowjs'

class KnownVideo extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <Fragment>
                <div className="Known-video_pm">
                    <div className="container-known_video">
                        <div className="play-known">
                            <div className="square wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="0.3s"
                            >
                            </div>
                            <div className="img-video_known">
                                <div className="img wow animate__animated animate__fadeInLeft"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.6s">
                                    <img src={require('../images/img/videoimg.png')} />
                                </div>
                            </div>
                            <div className="play-button_pm wow animate__animated animate__fadeIn"
                                data-wow-duration="2s"
                                data-wow-delay="0.9s">
                                <button><Play /></button>
                            </div>
                        </div>
                        <div className="info-known_our">
                            <div>
                                <h4
                                    className="wow animate__animated animate__fadeIn"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.3s">Conoce más de nosotros</h4>
                                <p
                                    className="wow animate__animated animate__fadeInDown"
                                    data-wow-duration="2s"
                                    data-wow-delay="0.3s"
                                >Generamos valor con procesos sostenibles, Conoce nuestra iniciativa corporativa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default KnownVideo;