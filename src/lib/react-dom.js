import React from "./react.js"
function setAttrbute(node,attrs){
    if(!attrs) return;
    for(let key in attrs){
        if(key.startsWith('on')){
            node[key.toLocaleLowerCase()] = attrs[key]
        }else if(key ==='style'){
            Object.assign(node.style,attrs[key])
        }else{
            node[key]=attrs[key]
        }
    }
}
function render(vdom,container){
    let node = createDomfromVdom(vdom)
    container.appendChild(node)
}
//虚拟dom变成真实的dom
function createDomfromVdom(vdom){
    let node;
    if(typeof vdom==='string'){
        node = document.createTextNode(vdom)
    }
    if(typeof vdom === 'object'){
        if(typeof vdom.tag==='function'){
         // let component =  new vdom.tag(vdom.attrs)
         let component = getComponent(vdom.tag,vdom.attrs)
          let vnode = component.render()
          node = createDomfromVdom(vnode)
          component.$root = node
        }else{
            node = document.createElement(vdom.tag)
            setAttrbute(node,vdom.attrs)
            vdom.children.forEach(childVdom=>render(childVdom,node)) 
        }
        
    }
    return node
}
function getComponent(constructor,attrs){
    if(constructor.prototype instanceof React.Component){
        return new constructor(attrs)
    }else{
        let App = class extends React.Component{}
        App.prototype.render = function(){
            return constructor(attrs)
        }
        return new App(attrs)
    }
}
//组件渲染
function renderComponent(component){
    let vdom = component.render()
    let vnode = createDomfromVdom(vdom)
    if(component.$root){
        component.$root.parentNode.replaceChild(vnode,component.$root)
    }
}
const ReactDom = {
    render(vdom,container){
        container.innerHTML = ''
        render(vdom,container)
    },
    renderComponent
}
export default ReactDom