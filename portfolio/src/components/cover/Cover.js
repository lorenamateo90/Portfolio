import React from 'react';
import "./Cover.scss";
import coverVideo from "../../media/coverVideo.mp4"
const Cover = () => {
    return (
        <div className="cover">
            <video className="video" src={coverVideo} autoPlay muted />
            <h1 className="cover__name">Lorena Mateo</h1>
            <p className="cover__job">Desarrolladora Junior</p>
        </div>
    )
}

export default Cover
