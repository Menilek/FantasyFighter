import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
            grappling: 'Aikido',
            redirect: false,
        }
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

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewFighter = newFighter => {
        axios.post('/api/fighter', newFighter).then(res => {
            console.log(res.data);
            this.setState({redirect: true})
        }).catch(err => {
            console.log(err);});
    }

    onSubmit = e => {
        e.preventDefault();
        const newFighter = {
            name: this.state.name,
            striking: this.state.striking,
            grappling: this.state.grappling
        };

        this.addNewFighter(newFighter);
    }

    // fetchCharacterImage = () => {
         //API call
    // }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/play' />
        }
      }

    render(){
        return(
            <div>
                {this.renderRedirect()}
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
                        <Button block color="dark" onClick={this.onSubmit}>GO FIGHT</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;