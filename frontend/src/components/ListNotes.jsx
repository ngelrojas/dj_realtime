import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const ListNotes = ({ notes, handleItemClick }) => {
    let notes_list = notes.map((note) =>{
        return (
            <ListGroupItem key={note.id} href="#" onClick={(id) => handleItemClick(note.id)}>
                <p>{note.title}</p> 
            </ListGroupItem>
        ) 
    })

    return(
        <ListGroup>
            {notes_list} 
        </ListGroup>
    )
}

export default ListNotes

