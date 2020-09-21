import React from "react";
import Display from "./display";
import DrumPadsBox from "./drumPadsBox";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <main id="drum-machine">
                <Display />
                <DrumPadsBox />
            </main>
        )
    }
}

export default DrumMachine;