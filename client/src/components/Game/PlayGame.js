import React, { Component } from 'react';
import axios from 'axios';
import Fighter from '../Fighter/Fighter';
import { Container, Row, Col, Button, Card, CardBody, CardImg } from 'reactstrap';
import versusImg from '../../img/versus.jpg';

class PlayGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            playerName: 'Berzerker',
            opponentName: 'Godzilla',
            playerColour: 'danger',
            opponentColour: 'primary'
        }
    }

    //Opponent cannot be the same character - check that id's are not the same
    //Validation against empty collection - collection should not be empty due to cpu generated fighters
    getOpponent(){
        axios.get('/api/fighter').then(res => {
            const name = res.data.name;
            console.log(res.data);
            this.setState({
                opponentName: name,
                opponentColour: 'primary'
            })
        });
    }

    componentDidMount(){
        this.getOpponent();
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="12" sm="4" md="4.5">
                            <Fighter name={this.state.playerName} color={this.state.playerColour} />
                        </Col>
                        <Col xs="12" sm="4" md="2.5">
                            <Card className="border-0">
                                <CardBody>
                                    <CardImg src={ versusImg } alt="VERSUS"/>
                                    <Button block size="lg">FIGHT</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="4" md="4.5">
                            <Fighter name={this.state.opponentName} color={this.state.opponentColour} />
                        </Col>
                    </Row>
                </Container>               
            </div>
        )
    }

}

export default PlayGame;