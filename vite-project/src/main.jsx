import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting } from './Greeting.jsx'
import Product from './Product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Greeting />
        <Product />
    </>
)