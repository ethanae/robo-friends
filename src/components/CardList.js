import React from "react";

//components
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        robots.map(r => {
            return <Card key={r.id} id={r.id} name={r.name} email={r.email} />
        })
    );
}

export default CardList;

