class Component{
    constructor(props){
        this.props = props;
        this.states = {};
    }
    setState(newState){
        Object.assign(this.states,newState)
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