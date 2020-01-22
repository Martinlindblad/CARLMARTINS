import React, { Component } from "react";
import Time from "./childcomponents/time";
import Info from "./childcomponents/info";
import Api from '../../../data/data.json';
import "./player.scss"



class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playStatus: false,
            currentTime: 0,
            producer: "CARLMARTINS",
            id: 1,
            track: {
                title: "1984",
                album: "Led Line Tullinge",
                year: 2017,
                artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
                duration: 168,
                source: "https://stream.beatstars.com/c/carlmartins-258227/644100/506f48319b5719fb438351a19889d655.mp3?on_callback=true",
                buyUrl: "https://carlmartins.com/beat/1984-store-test-track-644100",
                desciption: "Yeah I'm callin' in to request... uh... any music, that ain't this. Stop playing everything that you been playing because your music sounds like a dumpster rollin' down five flights o' stairs!"
            }

        };
        this.togglePlayPause = this.togglePlayPause.bind(this);
    }

    componentDidMount() {
        this.setCurrentTrackData();

    }

    setCurrentTrackData() {
        // this.setState({ track: {} });

        Api.map((trackData, index) => {
            // if(trackData.id === index) {
            //     this.setState({ 
            //         id: trackData.id,
            //         producer: trackData.producer,
            //         track: trackData.track.map(item => (
            //         ))               
            //     })
            // }
            return (console.log(trackData, index));

        })


    }

    togglePlayPause() {
        let status = this.state.playStatus;  
        let time = this.state.currentTime;
        let duration = this.state.track.duration   
        let audio = document.getElementById('audio');
        if (status === false) {
            status = true; audio.play();
        } else if( time === duration) {
            status = false; audio.pause();
        }
         else {
            status = false; audio.pause();
        }
        this.setState({ playStatus: status });
        setInterval(() => {
            this.updateTime();
        }, 1000);
        // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }


    // updateTime = () => {

    //     if(this.currentTime !== this.state.duration) {
    //         this.setState({ currentTime: this.state.currentTime+ 1 })
    //     }
    //     else{
    //         this.setState({ currentTime: 0 })
    //     }
    // }
    updateTime = (time) => {
        
        let audio = document.getElementById('audio');
            time = audio.currentTime;
            time = Math.floor(time);
        this.setState({ currentTime: time })
    }





    // updateTime = () => {

    //     if(this.state.currentTime !== this.state.track.duration && this.state.playStatus === true) {
    //         this.setState({ currentTime: this.state.currentTime+1 })
    //     }
    //     else if(this.state.currentTime > this.state.track.duration && this.state.playStatus === true) {
    //         this.setState({ 
    //             currentTime: 0,
    //             playStatus : false
    //         })
    //         console.log('me not happy')
    //     }
    //     else if(this.state.currentTime !== this.state.track.duration && this.state.playStatus === false){
    //         this.setState({ currentTime: this.state.currentTime})           
    //     }
    //     else{
    //         this.setState({ currentTime: 0 })
    //     }
    // }








    render() {
        return (

            <div className="Player">
                <div className="overlay"></div>
                <div className="Header"><div className="Title">Now playing</div></div>
                <div className="Artwork" style={{ 'backgroundImage': 'url(' + this.state.track.artwork + ')' }}></div>
                <Info track={this.state.track} />
                <div className="Button" onClick={this.togglePlayPause}>
                    {this.state.playStatus === false ? "▶" : "⏸"}
                </div>
                <Time duration={Math.floor(this.state.track.duration  / 60) + ':' +  Math.floor(this.state.track.duration % 60)} currentTime={this.state.currentTime} />
                <audio id="audio"><source src={this.state.track.source} /> </audio>
            </div>
        )
    }
}

export default Player