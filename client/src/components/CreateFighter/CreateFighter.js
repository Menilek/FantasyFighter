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
import FighterDefault from '../Fighter/FighterDefault';

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
                <Form className="fighter-form" onSubmit={this.onSubmit}>
                    <Row>
                        <Col sm="12"  md={{ size: 4, offset: 2 }}>                  
                                <FighterDefault />
                        </Col>
                        <Col sm="12" md="4">
                            <FormGroup>
                                <Label for="characterName">NAME</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="characterName"
                                    placeholder="Enter Character Name"
                                    onChange={this.onChange}>
                                </Input>
                                <Label for="striking" >STRIKING STYLE</Label>
                                <Input type="select" name="striking" id="striking" onChange={this.onChange}>
                                    <option>Boxing</option>
                                    <option>Karate</option>
                                    <option>Muay Thai</option>
                                </Input>
                                <Label for="grappling" >GRAPPLING STYLE</Label>
                                <Input type="select" name="grappling" id="grappling" onChange={this.onChange}>
                                    <option>Aikido</option>
                                    <option>Jiu Jitsu</option>
                                    <option>Judo</option>
                                </Input>
                            </FormGroup>
                        <Button block size="lg" onClick={this.onSubmit}>GO FIGHT</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default CreateFighter;