import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmbedLink = () => {
    return(
        <React.Fragment>
                <div className="bg-black flex flex-col p-6 md:flex-row">
                    <div className="ratio ratio-16x9 p-5 rounded-lg md:mr-5">
                        <iframe src="https://www.youtube.com/embed/gI7qfHuLQ6Q?si=hT3MOWa_loTMWepD" title="YouTube video" allowFullScreen></iframe>
                    </div>
                    <div className="ratio ratio-16x9 p-4 rounded-lg md:ml-5">
                        <iframe src="https://www.youtube.com/embed/snbTCWL6rxo?si=e8rARdpSCOnfuPwY" title="YouTube video" allowFullScreen></iframe>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default EmbedLink;