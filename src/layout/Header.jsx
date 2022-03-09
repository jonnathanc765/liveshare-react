import React from "react";


const Header = (props) => {

  return (
    <header style={{ backgroundColor: props.color || 'white', padding: 20 }}>
      <h2 style={{ color: props.color === 'black' ? 'white' : 'black' }} >Mi pagina web - Version {props.version || '1.0.0'}</h2>
    </header>
  )
}


export default Header