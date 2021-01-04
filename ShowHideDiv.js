import { Button } from '@material-ui/core';
import React, { Component } from 'react';
class HideShow extends Component {
    state = {
        toggleState: false
    }

    handleToggle = () => {
        let toggleNewState = this.state.toggleState;
        this.setState({ toggleState: !toggleNewState })
    }

    render() {
        var Data = null;
        if (this.state.toggleState) {
            Data = (
                <div>
                    <h1>Button Toggled</h1>
                </div>
            )
        }
        return (
            <div>
                < Button onClick={this.handleToggle}> ToggleButton</Button >
                {Data}
            </div>
        )
    }
}
export default HideShow;
