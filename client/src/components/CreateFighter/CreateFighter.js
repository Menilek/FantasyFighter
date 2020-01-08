import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button } from 'reactstrap';
import Fighter from '../Fighter/Fighter';

class CreateFighter extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            striking: 'Boxing',
            grappling: 'Aikido'
        }
    }

    //^ state contains default form values

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

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewFighter = newFighter => {
        axios.post('/api/fighter', newFighter).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);});
    }

    onSubmit = e => {
        e.preventDefault();
        //validation and routing
        const newFighter = {
            name: this.state.name,
            striking: this.state.striking,
            grappling: this.state.grappling
        };

        this.addNewFighter(newFighter);

        // this.setState({
        //     name: '',
        //     striking: '',
        //     grappling: ''
        // })
    }

    // fetchCharacterImage = () => {
         //API call
    // }

    render(){
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Fighter props={this.state.name} />
                        <Label for="characterName">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="characterName"
                            placeholder="Enter Character Name"
                            onChange={this.onChange}>
                        </Input>
                        <Label for="striking">Striking Style</Label>
                        <Input type="select" name="striking" id="striking" onChange={this.onChange}>
                            <option>Boxing</option>
                            <option>Karate</option>
                            <option>Muay Thai</option>
                        </Input>
                        <Label for="grappling">Grappling Style</Label>
                        <Input type="select" name="grappling" id="grappling" onChange={this.onChange}>
                            <option>Aikido</option>
                            <option>Jiu Jitsu</option>
                            <option>Judo</option>
                        </Input>
                        <Link to='/play'>
                            <Button block color="dark">
                                GO FIGHT
                            </Button>
                        </Link>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;