import React from 'react';
import { Link } from 'react-router-dom';
 
const publicaciones = () => {
    return (
        <div>
            <h2>Lista de Publicaciones</h2>
            <ul>
                <li><Link to="post/101">Publicación 101</Link></li>
                <li><Link to="post/102">Publicación 102</Link></li>
                <li><Link to="post/103">Publicación 103</Link></li>
            </ul>
        </div>
    );
};
 
