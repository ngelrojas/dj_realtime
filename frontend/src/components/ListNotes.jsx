import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {Note} from './Note';


export const ListNotes = ({notes, handleItemClick}) => {
    let notes_list = notes.map((note) =>{
        return(
            <ListGroupItem key={note.id} href="#" onClick={(id) => handleItemClick(note.id)}>
                
                <Note title={note.title} />
            </ListGroupItem>
        ) 
    })
    return(
        <ListGroup>
            {notes_list} 
        </ListGroup>
    )
}
