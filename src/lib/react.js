import ReactDom from './react-dom.js'

class Component{
    constructor(props){
        this.props = props;
        this.states = {};
    }
    setState(newState){
        Object.assign(this.states,newState)
        //重新渲染
        ReactDom.renderComponent(this)
    }
}
const React = {
    createElement(tag,attrs,...children){
        return {
            tag,
            attrs,
            children
        }
    },
    Component
}
export default React