import React, { Component } from "react";
import Time from "./childcomponents/time";
import Info from "./childcomponents/info";
import "./player.scss"

class Player extends Component {
    constructor() {
        super();
        this.state = {
            play: false,
            currentTime: 0
        };
    }
    static defaultProps = {
        track: {
            name: "1984",
            artist: "CARLMARTINS",
            album: "Led Line Tullinge",
            year: 2017,
            artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
            duration: 168,
            source: "https://www.beatstars.com/embed/track/?id=644100",
            buyUrl: "https://carlmartins.com/beat/1984-store-test-track-644100",
            desciption: "Yeah I'm callin' in to request... uh... any music, that ain't this. Stop playing everything that you been playing because your music sounds like a dumpster rollin' down five flights o' stairs!"
        }
    }
    togglePlay() {
        let audio = document.querySelector('#audio');
        let status = this.state.play;
        let classNames; 
        if (status !== true) {
            this.setState({ play: true });
            classNames = 'fa fa-fw fa-play';
            audio.play()
        }else{
            this.setState({ play: false });
            classNames = 'fa fa-fw fa-pause';
            audio.pause()
        }
    }
    // Toggle play 
    
    updateTime = (time) => {
        time = Math.floor(time);
        this.setState({ currentTime: time });
      }

    render() {
        return (

            <div className="Player">
                <div className="Background" style={{ 'backgroundImage': 'url(' + this.props.track.artwork + ')' }}></div>
                <div className="Header"><div className="Title">Now playing</div></div>
                <div className="Artwork" style={{ 'backgroundImage': 'url(' + this.props.track.artwork + ')' }}></div>
                <Info track={this.props.track} />
                <div className="Button" onClick={this.togglePlay}>
					<i className="fa fa-fw fa-play"></i>
				</div>
                <Time duration={this.props.track.duration} currentTime={this.state.currentTime} />
                <audio id="audio"><source src={this.props.track.source} /></audio>
            </div>
        )
    }
}

export default Player