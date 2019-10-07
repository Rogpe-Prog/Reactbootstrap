import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function AlertClose(){
    const [show, setShow] = useState(true)

    if(show){
      return(
       <Alert variant="danger" onClose={()=> setShow(false)} dismissible>
           <Alert.Heading>Oh Man! You got an Error !-) </Alert.Heading>
           <p>
            Change this and that and try again.
           </p>
       </Alert>
      )
    }
    return <Button variant="dark" size="sm" onClick={() => setShow(true)}>Again and Again</Button>
}

export default AlertClose

