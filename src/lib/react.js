import {renderComponent} from './react-dom.js'

class Component{
    constructor(props){
        this.props = props;
        this.states = {};
    }
    setState(newState){
        Object.assign(this.states,newState)
        //重新渲染
        renderComponent(this)
    }
}

function createElement(tag,attrs,...children){
    return {
        tag,
        attrs,
        children
    }
}

export default {
    createElement,
    Component
}

export {
    createElement,
    Component
}