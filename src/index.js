
import React from './lib/react.js'
import ReactDom from './lib/react-dom.js'

class Menu extends React.Component {
    render(){
        return <h1>memu {this.props.title}</h1>
    }
}
//组件必须大写开头
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
                <Menu title = {this.states.title}/>
                <span>{this.states.title}</span>
                <p>{this.props.id}</p>
                <span onClick={this.handleClick.bind(this)}>hello</span>
            </div>
        )
    }
}


ReactDom.render((
    <App id="9999">hello</App>
), document.body)