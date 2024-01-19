import React from 'react'
import '../utils/Utils.css'

const Button = ({text}) => {
  return (
    <div className='button'>
      {text}
    </div>
  )
}

const Container = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}


export {Container, Button}