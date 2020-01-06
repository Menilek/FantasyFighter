import React from 'react';
import{ Card,
    CardImg,
    CardTitle,
    CardBody} from 'reactstrap';

const Fighter = (props) => {
    const { name, color } = props;
    return (
        <div>
            <Card body inverse color={color} className="text-center">
                <CardImg top width="auto" src="../../../public/img/fighter.jpg" alt="Fight character" />
                <CardBody>
                    <CardTitle> {name} </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Fighter;