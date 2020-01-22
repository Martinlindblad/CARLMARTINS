import React, { Component } from "react";


class Info extends Component {

    render() {
        return (
            <div className="TrackInformation">
                <h1 className="Artist">{this.props.producer}</h1>
                <div className="Name">{this.props.track.title}</div>
                <div className="Album">{this.props.track.album} ({this.props.track.year})</div>
            </div>
        )
    }
}
export default Info
