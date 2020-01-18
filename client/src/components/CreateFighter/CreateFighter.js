import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import{
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col } from 'reactstrap';
import Fighter from '../Fighter/Fighter';

class CreateFighter extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            striking: 'Boxing',
            grappling: 'Aikido',
            redirect: false,
            id: ''
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
            this.setState({id: res.data._id, redirect: true});
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
          return <Redirect to={{pathname:'/play', state:{id: this.state.id}}}/>
        }
      }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Fighter props={this.state.name} />
                        <Label for="characterName" size="lg">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="characterName"
                            placeholder="Enter Character Name"
                            bsSize="lg"
                            onChange={this.onChange}>
                        </Input>
                    </FormGroup>
                    <Row form>
                        <Col md="6">
                            <FormGroup>
                                <Label for="striking" size="lg">Striking Style</Label>
                                <Input type="select" name="striking" id="striking" bsSize="lg" onChange={this.onChange}>
                                    <option>Boxing</option>
                                    <option>Karate</option>
                                    <option>Muay Thai</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="grappling" size="lg">Grappling Style</Label>
                                <Input type="select" name="grappling" id="grappling" bsSize="lg" onChange={this.onChange}>
                                    <option>Aikido</option>
                                    <option>Jiu Jitsu</option>
                                    <option>Judo</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Button block size="lg" onClick={this.onSubmit}>GO FIGHT</Button>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;