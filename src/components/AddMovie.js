import React, { useState } from 'react'
import { FormControl , Form , Button ,Modal } from 'react-bootstrap'

export default function AddMovie({addMovie}) {
    
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [posterUrl,setPosterUrl] = useState('');
    const [rating,setRating] = useState(1);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleAdd = ()=> {
  if(title && description && posterUrl && rating){
    addMovie({title , description , posterUrl , rating , id:Math.random()}) ;
    handleClose()
    setTitle('')
    setDescription('')
    setPosterUrl('')
    setRating(1)
  }
};

  return (
    <div id='add'> 
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form  >
            <FormControl type = 'text' style={{ margin:'0px 10px' }} placeholder = 'enter your movie name' onChange={e=>setTitle(e.target.value)} />
            <FormControl type = 'text' style={{ margin:'0px 10px' }} placeholder = 'enter your movie description' onChange={e=>setDescription(e.target.value)}/>
            <FormControl type = 'url' style={{ margin:'0px 10px' }} placeholder = 'enter your movie posteUrl'onChange={e=>setPosterUrl(e.target.value)} />
            <FormControl type = 'number' style={{ margin:'0px 10px' }} placeholder = 'enter your movie rate' onChange={e=>setRating(e.target.value)} />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  
  )
}
