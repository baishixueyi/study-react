
import React from './lib/react.js'
import ReactDom from './lib/react-dom.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.states = {
            title: 'llljkl'
        }
    }

    handleClick() {
        this.setState({
            title:'测试'
        })
    }
    render() {
        return (
            <div>
                <span>{this.states.title}</span>
                <span onClick={this.handleClick.bind(this)}>hello</span>
            </div>
        )
    }
}


ReactDom.render((
    <App>hello</App>
), document.body)