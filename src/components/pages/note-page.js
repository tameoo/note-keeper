import React from 'react';
import NoteCardContainer from '../note-card-container';
import './note-page.css';

const NotePage = () => {
	return (
		<section id="note-page">
			<div className="container note-page-container">
				<h2>Notes</h2>
				<NoteCardContainer/>
			</div>
		</section>
	);
}

export default NotePage;