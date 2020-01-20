import React, { Component } from "react";
import Player from "./player/player"

class Hero extends Component{
    constructor() {
        super();
        this.state = {
            post: false,
        };
    }
    setPostTrue() {
        if (this.state.post !== true) { this.setState({ post: true }) }
      }
      render() {
         
          return (
              <div className="front">
                  <Player />
              </div>
          )
      }
}

export default Hero;