import React from 'react';
import{ Card,
    CardImg} from 'reactstrap';
import defaultImg from '../../img/fighter.jpg';

const FighterDefault = () => {
    return (
        <div>
            <Card body inverse className="fighter-default-card">
                <CardImg className="danger" width="100%" src={ defaultImg } alt="Fight character" />
            </Card>
        </div>
    )
}

export default FighterDefault;