import React from 'react'
import Item from './Item'



const List = (props) => {

  return (
    <ul>
      {
        props.users.map(user => (
          <Item user={user} key={user.id} updateHandler={props.updateHandler} />
        ))
      }
    </ul>
  )
}

export default List