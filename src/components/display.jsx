import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="display-box">
                <div id="display">
                    { this.props.drumPlayed }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Display);