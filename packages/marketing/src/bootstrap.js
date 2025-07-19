import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
//mount function to start the App

const mount=(el)=>{
 ReactDom.render(
    <App />,
    el
 )
}

//If we are in Development or in Isolation call mount immediately
if (process.env.NODE_ENV==='development') {
    
    const devRoot=document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}


//we are running through container
//and we should export the mount function

export {mount}
