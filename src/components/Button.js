import React from 'react'
import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
  return (
    <button className='btn' style={{backgroundColor:color}} onClick={() => onClick()}>{text}</button>
  )
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propsTypes = {
    text:PropTypes.string,
    color:PropTypes.string
}

export default Button