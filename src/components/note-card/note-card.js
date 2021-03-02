import React, { Component } from 'react';
import './note-card.css';

export default class NoteCard extends Component {

    renderItem = (data) => {
        const arr = [];
        for (const card in data) {
            const id = {id : card}
            const note = {...data[card], ...id }
            arr.push(note);
        }

        return arr.map(({id,title,descr,color}) => {
            
            if(title?.length > 20 ){
                title = `${title.substring(0,20)}...`;
            }

            if(descr?.length > 80){
                descr = `${descr.substring(0,80)}...`;
            }
            return(
                <div className="note-card" key={id} style={{backgroundColor:color}}>
                    <div className="note-card-title">{title}</div>
                    <div className="note-card-descr">{descr}</div>
                    <button className="note-card-update"
                            onClick={() => this.props.OnOpenModal(id)}>
                        <i className="fas fa-pen"></i>
                    </button>
                </div>
            );
        });
    }


    render() {
        const items = this.renderItem(this.props.notes);
        return (
            <div className="note-card-container">
                {items}
            </div>
        );
    }
}
