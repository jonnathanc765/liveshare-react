import React from 'react'
import { useState } from 'react'

const Item = (props) => {


  const [user, setUser] = useState(props.user)
  const handle = () => setUser({ ...user, ...{ username: 'maria', phone: '688052644' } })
  
  return (
    <li>
      <p>
        <strong>
          Nombre de usuario:
        </strong>
        { user.username }
      </p>

      <p>
        <strong>
          Telefono:
        </strong>
        { user.phone }
      </p>
      <button type='button' onClick={ handle }>Modificar</button>
    </li>
  )
}

export default Item
