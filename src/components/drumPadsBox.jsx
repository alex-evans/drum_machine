import React from "react";
import { connect } from "react-redux";
import DrumPad from "./drumPad";

class DrumPadsBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="drum-pads-box">
                <DrumPad padId="Q" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
                <DrumPad padId="W" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                <DrumPad padId="E" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
                <DrumPad padId="A" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
                <DrumPad padId="S" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
                <DrumPad padId="D" sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
                <DrumPad padId="Z" sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
                <DrumPad padId="X" sound="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" />
                <DrumPad padId="C" sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(DrumPadsBox);