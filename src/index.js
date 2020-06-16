
import React from './lib/react.js'
import ReactDom from './lib/react-dom.js'

function clickMe(){
    console.log('click me')
}
let styleObj = {
    color:'blue',
    fontSize:'20px'
}
let div = (
    <div className="hello" id="header" onClick={clickMe} style={styleObj}>
        <span>hello</span>
        <span>world</span>
    </div>
);
ReactDom.render(div,document.body)