import React, { Component } from 'react';
import{ Card,
    CardImg,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button } from 'reactstrap';

class CreateFighter extends Component {
    state = {
        image: '',
        name: '',
        primaryStyle: '',
        secondaryStyle: '',
        backupStyle: '',
        score: '',
        id: ''
    }

    // fightStyles = [
    //     'Aikido',
    //     'Boxing',
    //     'Jiu Jitsu',
    //     'Judo',
    //     'Karate',
    //     'Kickboxing',
    //     'Muay Thai',
    //     'Wrestling'
    // ]

    // dropdownTitles = [
    //     'Primary Style',
    //     'Secondary Style',
    //     'Backup Style'
    // ]

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        //validation and routing
    }

    // fetchCharacterImage = () => {
         //API call
    // }

    //TODO: remove the ability to enter duplicate fight styles
    //TODO: create dropdown component to reduce duplication

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Card body className="text-center">
                            <CardImg top width="auto" src="../../../public/img/fighter.jpg" alt="Fight character" />
                            <CardBody>
                                <CardTitle> {this.state.name} </CardTitle>
                            </CardBody>
                        </Card>
                        <Label for="characterName">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="characterName"
                            placeholder="Enter Character Name"
                            onChange={this.handleChange}>
                        </Input>
                        <Label for="striking-style">Striking Style</Label>
                        <Input type="select" name="select" id="striking-style">
                            <option>Boxing</option>
                            <option>Karate</option>
                            <option>Muay Thai</option>
                        </Input>
                        <Label for="grappling-style">Grappling Style</Label>
                        <Input type="select" name="select" id="grappling-style">
                            <option>Aikido</option>
                            <option>Jiu Jitsu</option>
                            <option>Judo</option>
                        </Input>
                        <Button>GO FIGHT</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;