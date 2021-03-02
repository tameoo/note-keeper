import React, {Component} from 'react';
import NoteColor from '../note-color';
import NoteService from '../../services';
import './note-menu.css';

export default class NoteMenu extends Component{
    service = new NoteService();

    state = {
        showColor: false,
        color: 'white',
        title: '',
        descr: '',
        saved: false,
        validation : null
    }


    OnShowColor = () => {
        this.setState({
            showColor: !this.state.showColor
        })
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

    OnSubmit = (e) => {
        e.preventDefault();
        const iTitle = document.getElementById('title');
        const iDescr = document.getElementById('notes');

        if(iTitle.value === '' && iDescr.value === '' ){
            this.setState({
                validation: 'You forgot write something...'
            });
        }
        
        if(iTitle.value === '' && iDescr.value !== ''){
            this.setState({
                validation: 'Please write your title...'
            });
        }
        
        if(iDescr.value === '' && iTitle.value !== ''){
            this.setState({
                validation: 'Please write your note...'
            });
        }

        if(iTitle.value.length > 0 && iDescr.value.length > 0){
            const {color,title,descr} = this.state
            this.service.setfetchData({
                color,
                title,
                descr
            });
            this.setState({
                showColor: false,
                color: 'white',
                title: '',
                descr: '',
                saved: true,
                validation: null
            })
            e.target.reset();
            setTimeout(() => this.setState({saved: false}), 2000);
        }
    }
    
    render(){
        const {showColor, color, title, descr, saved,validation} = this.state;
        let colorBar = null;    

        if(showColor){
            colorBar = <NoteColor  OnSetColor={this.OnSetColor}/>
        }

        let clazz = saved ? "note-saved active" : "note-saved"

        return(
            <div className="note-menu">
                <div className="note-menu-wrapper container">
                    <div className="note-menu-inner">
                        <h2>Add some notes</h2>
                        <form className="note-form" 
                                style={{backgroundColor: color}} 
                                onSubmit={(e) =>this.OnSubmit(e)} 
                                autoComplete="off">
                            <div className="note-form-title">
                                <input type="text" id="title" 
                                        placeholder="Your title" 
                                        maxLength="40" 
                                        className="note-form-input"
                                        onChange={(e) => {
                                            this.setState({
                                                title: e.target.value
                                            })
                                        }}/>
                                <span className="note-form-counter">{title.length}/40</span>
                            </div>
                            <div className="note-form-menu">
                                <textarea type="text"
                                            id="notes" 
                                            placeholder="Take a note..." 
                                            maxLength="200" 
                                            className="note-form-input"
                                            onChange={(e) => {
                                                this.setState({
                                                    descr: e.target.value
                                                })
                                            }}/>
                                <span className="note-form-counter">{descr.length}/200</span>
                            </div>
                            <div className="note-form-valid"><Validation text={validation}/></div>
                            <div className="note-form-buttons">
                                <button type="button" className="note-paint" onClick={this.OnShowColor}>
                                    <i className="fas fa-paint-brush"></i>
                                </button>
                                <button className="note-submit" 
                                        type="submit">
                                        Add Note
                                </button>
                                {colorBar}
                            </div>
                        </form>
                    </div>
                    <div className={clazz}><div>Note saved</div></div>
                </div>
            </div>
        );
    }

}

const Validation = ({text}) => {
    if(!text){
        return null;
    }
    return <div><i className="fas fa-exclamation-circle"></i>{text}</div>
}