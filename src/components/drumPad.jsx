import React from "react";
import { connect } from "react-redux";
import { playDrum } from "../redux/actions";


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.drumTap = this.drumTap.bind(this);
    }

    drumTap(event) {
        this.props.playDrum(event.target.value)
    }

    render() {
        return (
            <div className="drum-pad">
                <button onClick={this.drumTap} value={this.props.padId}>{this.props.padId}</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { playDrum })(DrumPad);