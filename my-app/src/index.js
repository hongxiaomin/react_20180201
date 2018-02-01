import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let eleObj={
    type:'div',
    props:{
        className:'red',
        id:1,
        children:['hello',
            {type:'span',props:{
                className:'blue',
                children:['world']
            }}
        ]
    }
};

function render(eleObj,container){
    let {type,props}=eleObj;
    let ele=document.createElement(type);
    for(let attr in props){
        if(attr==='children'){
            props.children.forEach(function(item){
                if(typeof item==='string'){
                    let textNode=document.createTextNode(item);
                    ele.appendChild(textNode)
                }else if(typeof item==='object'){
                    render(item,ele);
                }
            })
        }else if(attr==='className'){
            ele.setAttribute('class',props[attr])
        }else{
            ele.setAttribute(attr,props[attr])
        }
    }
    container.appendChild(ele);
}

render(eleObj, document.getElementById('root'));
registerServiceWorker();
