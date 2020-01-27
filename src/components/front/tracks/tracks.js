import React, { Component } from "react"
import "./tracks.scss"

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [
                {
                    track: 'one',
                    producer: "CARLMARTINS",
                    id: 1,
                    title: "1984",
                    album: "Led Line Tullinge",
                    year: 2017,
                    artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
                    duration: 168,
                    source: "https://stream.beatstars.com/c/carlmartins-258227/644100/506f48319b5719fb438351a19889d655.mp3?on_callback=true",
                    buyUrl: "https://carlmartins.com/beat/1984-store-test-track-644100",
                    desciption: "Yeah I'm callin' in to request... uh... any music, that ain't this. Stop playing everything that you been playing because your music sounds like a dumpster rollin' down five flights o' stairs!"
                },
                {
                    track: 'two',
                    producer: "CARLMARTINS",
                    id: 1,
                    title: "1984",
                    album: "Led Line Tullinge",
                    year: 2017,
                    artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
                    duration: 168,
                    source: "https://stream.beatstars.com/c/carlmartins-258227/644100/506f48319b5719fb438351a19889d655.mp3?on_callback=true",
                    buyUrl: "https://carlmartins.com/beat/1984-store-test-track-644100",
                    desciption: "Yeah I'm callin' in to request... uh... any music, that ain't this. Stop playing everything that you been playing because your music sounds like a dumpster rollin' down five flights o' stairs!"
                },
                {
                    track: 'three',
                    producer: "CARLMARTINS",
                    id: 1,
                    title: "Mastered",
                    album: "Led Line Tullinge",
                    year: 2019,
                    artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
                    duration: 168,
                    source: "https://stream.beatstars.com/c/carlmartins-258227/644100/506f48319b5719fb438351a19889d655.mp3?on_callback=true",
                    buyUrl: "https://carlmartins.com/beat/1984-store-test-track-644100",
                    desciption: "Yeah I'm callin' in to request... uh... any music, that ain't this. Stop playing everything that you been playing because your music sounds like a dumpster rollin' down five flights o' stairs!"
                },

            ]
        };
    }
    render() {
        return (

            <div className="tracks-container">
                {this.state.tracks.map((track, i) => {
                    return (
                        <div key={i} className={track.track} style={{ 'backgroundImage': 'url(' + track.artwork + ')' }}>
                            <h2 className="Artist">{track.title}</h2>
                            <div className="track-info">
                                <h3>{track.album}</h3>
                                <p>{track.desciption}</p>
                            </div>
                            <div className="button" onClick={this.togglePlayPause}>
                                {this.state.playStatus === false ? "▶" : "⏸"}
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
        )
    }
}
export default Tracks