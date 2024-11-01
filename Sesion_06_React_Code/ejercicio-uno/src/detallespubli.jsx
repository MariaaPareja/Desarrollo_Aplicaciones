import React from 'react';
import { useParams } from 'react-router-dom';
 
const detallespublic = () => {
    const { postId } = useParams();
    return (
        <div>
            <h2>Detalles de la Publicación</h2>
            <p>Mostrando detalles para la publicación ID: {postId}</p>
        </div>
    );
};
 
export default BlogDetail;
