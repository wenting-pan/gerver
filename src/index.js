import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';

class SayHi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        const self = this;
        Request.get('/test')
            .end(function (err, res) {
                self.setState({ text: res.text })
            });
    }

    render() {
        return (
            <p>{this.state.text}</p>
        )
    }
}

ReactDOM.render(
<SayHi/>,
document.getElementById('root')
);