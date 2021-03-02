import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    OnClickLink = (first, second) => {
       
        if(!first.classList.contains('router-active')){
            first.classList.add('router-active');
            second.classList.remove('router-active');
        }
    }

    render(){

        return(
            <header>
                <div className="header d-flex">
                    <div className="header-logo d-flex align-items-center">
                        <div className="header-logo-img">
                            <i className="far fa-sticky-note"></i>
                        </div>
                        <h5>NoteKeep</h5>
                    </div>
                    <div className="header-routing d-flex align-items-center">
                        <Link id="add" 
                            className="router router-active" 
                            to="/" 
                            onClick={() => {
                                this.OnClickLink(document.getElementById('add'),document.getElementById('saved'));
                            }}> 
                            Add
                        </Link>
                        <Link id="saved"
                            className="router" 
                            to="/notepage" 
                            onClick={() => {
                                this.OnClickLink(document.getElementById('saved'),document.getElementById('add'));
                            }}>
                            Saved
                        </Link>
                    <div className="header-icon">
                        <a href="https://github.com/tameoo" target="blank">
                                <i className="fab fa-github"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
};

