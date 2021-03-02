import React, { Component} from 'react';
import Spinner from '../spinner';
import NoteCard from '../note-card';
import NoteService from '../../services';
import NoteModal from '../note-modal';
import './note-card-container.css';

export default class NoteCardContainer extends Component {
    
    service = new NoteService()

	state = {
		loading: true,
        notes: null,
        id: null,
        modal: false,
        update: false
	}

	componentDidMount(){
        this.service.getFetchData()
        .then(data => data.json())
        .then(notes => {
            console.log(notes)
			this.setState({loading: false, notes})}
        );
    }   

    OnOpenModal = (id) => {
        this.setState({
            id,
            modal: true
        });
    }

    OnCloseModal = (e) => {
        e.preventDefault();
        this.setState({
            modal: false
        });
    }
    
    OnDelete = (id) => {
        let newNotes = {};
            for (const key in this.state.notes) {
            if(key !== id){
                newNotes[key] = this.state.notes[key];
            }
        }
        this.setState({
            notes: newNotes,
            update: true
        });
        this.service.deleteFetchData(id);
    }

    OnUpdate = (e,id,obj) => {
        e.preventDefault();
        let newNotes = {};

        const note = {
            ...obj
        }

        for (const key in this.state.notes) {
                if(key === id){
                    newNotes[key] = note;
                } else {
                    newNotes[key] = this.state.notes[key];
                }
        }

        this.setState({
            notes: newNotes,
            update: true
        });

        this.service.updateFetchData(id,obj);
    }

    OnSetUpdate = () => {
        setTimeout(() => this.setState({update: false}),2000)
    }

	render() {
        const {notes, loading,id,modal,update} = this.state;

        if(!notes && loading){
			return <Spinner/>
		}

		if((!notes && !loading) || Object.keys(notes).length === 0){
			return (
                <p>You dont have notes!!! <br/> Go back and Write it!</p>
			);
        }

        let openModal = null;
        if(modal){
            openModal = <NoteModal id={id} 
                                notes={notes} 
                                OnUpdate={this.OnUpdate} 
                                OnDelete={this.OnDelete} 
                                OnSetUpdate={this.OnSetUpdate}
                                OnCloseModal={this.OnCloseModal}/>
        }
        
        let clazz = update ? "note-update active" : "note-update"
		return (
            <React.Fragment>
                <NoteCard notes={notes} OnOpenModal={this.OnOpenModal}/>
                {openModal}
                <div className={clazz}><div>Note updated</div></div>
            </React.Fragment>
		);
	}

}
