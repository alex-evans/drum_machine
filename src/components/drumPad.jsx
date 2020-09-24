import React from "react";
import { connect } from "react-redux";
import { drumPlayed } from "../redux/actions";


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleDrumClick = this.handleDrumClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    playDrum(drumId) {
        document.getElementById(drumId).play()
        this.props.drumPlayed(drumId)
    }

    handleKeyPress(event) {
        if(event.key.toUpperCase() === this.props.padId) {
            this.playDrum(this.props.padId)
        }
    }

    handleDrumClick(event) {
        this.playDrum(event.target.value)
    }

    render() {
        return (
            <div className="drum-pad" id="pad-{{this.props.padId}}">
                <button onClick={this.handleDrumClick} value={this.props.padId}>{this.props.padId}
                    <audio className="clip" id={this.props.padId} src={this.props.sound}></audio>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { drumPlayed })(DrumPad);