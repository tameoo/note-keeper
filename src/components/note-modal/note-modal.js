import React, { Component } from 'react';
import NoteColor from '../note-color';
import './note-modal.css';

export default class NoteModal extends Component {

    state = {
        id: null,
        color: null,
        title: '',
        descr: '',
        showColor: false,
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            ...this.props.notes[this.props.id]
        });
    }
  
    OnShowColor = () => {
        this.setState({
            showColor: !this.state.showColor
        });
    }

    OnSetColor = (e) => {
        let color;
        switch(e.target.id){
            case 'white': 
                color = '#ffffff'
                    break;
            case 'blue':
                color = '#b2ebf2'
                    break;
            case 'yellow':
                color = '#ffff8d'
                        break;
            case 'green':
                color = '#ccff90'
                    break;
            case 'red':
                color = '#ff8a80'
                    break;
            default:
                return; 
        }

        this.setState({
            color
        })
    }

    render() {
        const {id, color, title, descr,showColor} = this.state;
        let colorBar = null;    
        if(showColor){
            colorBar = <NoteColor  OnSetColor={this.OnSetColor}/>
        }

            return (
                <div className="note-modal-wrappper">
                    <div className="note-modal-inner container">
                        <form className="note-modal" 
                                style={{backgroundColor: color}}
                                autoComplete="off"
                                >
                            <div className="note-modal-title">
                                <input type="text" id="title" 
                                        placeholder="Your title" 
                                        maxLength="40" 
                                        className="note-modal-input"
                                        value={title}
                                        onChange={e => this.setState({ title: e.target.value })}
                                        />
                                <span className="note-modal-counter">{title.length}/40</span>
                            </div>
                            <div className="note-modal-descr">
                                <textarea type="text"
                                            id="notes" 
                                            placeholder="Take a note..." 
                                            maxLength="200" 
                                            className="note-modal-input"
                                            value={descr}
                                            onChange={e => this.setState({ descr: e.target.value })}
                                            />
                                <span className="note-modal-counter">{descr.length}/200</span>
                            </div>
                            <div className="note-modal-valid"></div>
                            <div className="note-modal-buttons">
                                <div className="rigth-buttons">
                                    <button type="button" 
                                            className="modal-left"
                                            onClick={this.OnShowColor}>
                                        <i className="fas fa-paint-brush"></i>
                                    </button>
                                    <button type="button" 
                                            className="modal-left"
                                            onClick={(e) => {
                                                this.props.OnCloseModal(e);
                                                this.props.OnDelete(id)
                                                this.props.OnSetUpdate();
                                            }}>
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </div>
                                <div className="left-buttons">
                                    <button className="modal-right" 
                                            type="submit"
                                            onClick={(e) => {
                                                this.props.OnCloseModal(e);
                                                this.props.OnUpdate(e,id,{color: color, title: title, descr: descr})
                                                this.props.OnSetUpdate();
                                            }}>
                                            Update
                                    </button>
                                    <button className="modal-right"
                                            onClick={(e) => this.props.OnCloseModal(e)}>
                                            Close
                                    </button>
                                </div>
                                {colorBar}
                            </div>
                        </form>
                    </div>
                </div>
            );
    }
}