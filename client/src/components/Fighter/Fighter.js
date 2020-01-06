import React from 'react';
import{ Card,
    CardImg,
    CardTitle,
    CardBody} from 'reactstrap';

//Set card colour as red vs blue for gameplay

const Fighter = (props) => {
    const { name } = props;
    return (
        <div>
            <Card body inverse color="success" className="text-center">
                <CardImg top width="auto" src="../../../public/img/fighter.jpg" alt="Fight character" />
                <CardBody>
                    <CardTitle> {name} </CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Fighter;