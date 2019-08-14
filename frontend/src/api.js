const url = 'http://127.0.0.1:8000/api/v1/notes/';

export const fetchNotes = async () => {
  return fetch(url, {mode: 'cors'})
    .then(res => res.json() )
    .then(data => {
          return data
    });
}

export const fetchNote = (id) => {
    return{
        'id': 123,
        'title': 'hello',
        'content': 'testing...'
    }
}

export const addNote = (note) => {
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stingify(note)
    }).then(res => res.json())
    .then(data => {
        console.log(data); 
    })

    return note;
}

export const updateNote = (note) => {
    console.log('we are updating...');
    console.log('update a note with id', note.id);
}



