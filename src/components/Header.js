import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

function Header({title,onClick,showAdd}) {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title:'React Task Tracker'
}

Header.propTypes = {
  title:PropTypes.string
}


export default Header;