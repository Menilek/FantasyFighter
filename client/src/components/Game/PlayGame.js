import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Fighter from '../Fighter/Fighter';
import { Container, Row, Col, Button } from 'reactstrap';

class PlayGame extends Component {

    cardState = {
        stubPlayerName: 'Berzerker',
        stubOpponentName: 'Godzilla',
        playerColour: 'danger',
        opponentColour: 'primary'
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="6" sm="4">
                            <Fighter name={this.cardState.stubPlayerName} color={this.cardState.playerColour} />
                        </Col>
                        <Col xs="6" sm="4">
                            <Button block color="success">FIGHT</Button>
                        </Col>
                        <Col xs="6" sm="4">
                            <Fighter name={this.cardState.stubOpponentName} color={this.cardState.opponentColour} />
                        </Col>
                    </Row>
                </Container>               
            </div>
        )
    }

}

export default PlayGame;