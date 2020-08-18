import React, { Fragment } from 'react';
import Play from '../images/svg/play'
import '../styles/known.css'

const KnownVideo = () => {
    return (
        <Fragment>
            <div className="Known-video_pm">
                <div className="container-known_video">
                    <div className="play-known">
                        <div className="square">

                        </div>
                        <div className="img-video_known">
                            <div className="img">
                                <img src={require('../images/img/videoimg.png')} />
                            </div>
                        </div>
                        <div className="play-button_pm">
                            <button><Play /></button>
                        </div>
                    </div>
                    <div className="info-known_our">
                        <div>
                            <h4>Conoce más de nosotros</h4>
                            <p>Generamos valor con procesos sostenibles, Conoce nuestra iniciativa corporativa</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default KnownVideo;