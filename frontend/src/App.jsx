import React from 'react'
import {Button, Container, Row, Col} from 'reactstrap'
import ListNotes from './components/ListNotes.jsx'
import { fetchNotes, fetchNote, updateNote } from './api'


class App extends React.Component
{
    constructor(props){
        super(props)

        this.state = {
            notes: [],
            current_note_id: 0,
            is_creating: true,
            is_fetching: true
        }

        this.handleItemClick = this.handleItemClick.bind(this)
        this.handleAddNote = this.handleAddNote.bind(this)
        this.getData = this.getData.bind(this)

    }
    componentDidMount(){
       this.getData() 
    }

    handleItemClick(id){
        this.setState((prevState) => {
            return{is_creating: false, current_note_id: id} 
        }) 
    }
    
    async getData(){
        let data = await fetchNotes();
        this.setState({notes: data, is_fetching: false})
    }

    handleAddNote(){
        this.setState((prevState) => {
            return { is_creating: true } 
        }) 
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="10">
                            <h2>Realtime notes</h2>
                        </Col>
                        <Col xs="2">
                            <Button color="primary" onClick={this.handleAddNote}>Create a new note</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4">
                            <ListNotes notes={this.state.notes} handleItemClick={(id) => this.handleItemClick(id)} />      
                        </Col>
                        <Col xs="8">
                            <p>Content/Editing here...</p>
                            {
                                this.state.is_creating ?
                                "creating now...":
                                `Editing note with id: ${this.state.current_note_id}`
                            }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        ) 
    }
}
export default App

