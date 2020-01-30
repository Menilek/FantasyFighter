import React from 'react';
import{ Card,
    CardImg,
    CardTitle,
    CardBody} from 'reactstrap';
import defaultImg from '../../img/fighter.jpg';

const FighterPlayer = (props) => {
    const { name, color } = props;
    return (
        <div>
            <Card body inverse color={ color } className="text-center">
                <CardImg className={ color } src={ defaultImg } alt="Fight character" />
                <CardBody>
                    <CardTitle> { name } </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default FighterPlayer;