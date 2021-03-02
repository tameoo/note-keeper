import React, { Component } from 'react';
import './note-color.css';
export default class NoteColor extends Component {
    render() { 
        return (
            <div className="color-picker" onClick={(e) => this.props.OnSetColor(e)}>
                <div className="circle" id="white"></div>
                <div className="circle" id="blue"></div>
                <div className="circle" id="yellow"></div>
                <div className="circle" id="green"></div>
                <div className="circle" id="red"></div>
            </div>
        );
    }
}

       

