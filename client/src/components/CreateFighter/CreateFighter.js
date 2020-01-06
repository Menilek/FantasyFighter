import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button } from 'reactstrap';
import Fighter from '../Fighter/Fighter';

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
        //if(!this.state.name === '') return <Redirect to='/PlayGame' />
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
                        <Fighter props={this.state.name} />
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
                        <Button block color="dark">
                            <Link to='/play'>GO FIGHT</Link>
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;