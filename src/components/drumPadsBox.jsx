import React from "react";
import { connect } from "react-redux";
import DrumPad from "./drumPad";

class DrumPadsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="drum-pads-box">
                <DrumPad padId="Q" />
                <DrumPad padId="W" />
                <DrumPad padId="E" />
                <DrumPad padId="A" />
                <DrumPad padId="S" />
                <DrumPad padId="D" />
                <DrumPad padId="Z" />
                <DrumPad padId="X" />
                <DrumPad padId="C" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(DrumPadsBox);