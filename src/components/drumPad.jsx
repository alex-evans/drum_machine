import React from "react";
import { connect } from "react-redux";
import { drumPlayed } from "../redux/actions";


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.drumKeyBoard = this.drumKeyBoard.bind(this);
        this.drumTap = this.drumTap.bind(this);
    }

    drumKeyBoard(event) {
        console.log('keyhit')
        console.log(event.key)
        console.log(event.target.value)
    }

    drumTap(event) {
        document.getElementById(event.target.value).play()
        this.props.drumPlayed(event.target.value)
    }

    render() {
        return (
            <div className="drum-pad">
                <button onClick={this.drumTap} value={this.props.padId}>{this.props.padId}</button>
                <audio className="clip" id={this.props.padId} src={this.props.sound}></audio>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { drumPlayed })(DrumPad);