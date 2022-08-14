import React from 'react';
import Card from "./Card";

const CardList = ({users}) => {
    return (
        
        <div className="movieApp">
            {users.map(elm => (
                <Card e={elm} />
            ))}
        </div>
    )
}

export default CardList;