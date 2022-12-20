import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
	{id: 1, name: 'Romeo'},
	{id: 2, name: 'Nadin'},
	{id: 3, name: 'Tiko'},
	{id: 4, name: 'Sancho'},
]

let messages = [
	{id: 1, message: 'Hello'},
	{id: 2, message: 'How are yoy?'},
	{id: 3, message: 'Hi'},
	{id: 4, message: 'Hi'},
]

let posts = [
	{id: 1, message: 'Hi, how are you?', likesCount: 15},
	{id: 2, message: 'It\'s my first post', likesCount: 10},
	{id: 3, message: 'Hi, my friend', likesCount: 12},
	{id: 4, message: 'SIUUUUUUU', likesCount: 100},
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts}/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
