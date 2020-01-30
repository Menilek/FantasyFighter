import React, { Component } from 'react';
import axios from 'axios';
import FighterPlayer from '../Fighter/FighterPlayer';
import MessageModal from './MessageModal';
import { Container, Row, Col } from 'reactstrap';

class PlayGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            playerName: '',
            opponentName: '',
            playerColour: 'danger',
            opponentColour: 'primary',
            opponentID: '',
            winner: 'MENILEK'
        }
    }

    getPlayer = () => {
        const playerID = this.props.location.state.id;
        axios.get(`/api/fighter/${playerID}`).then(res => {
            this.setState({
                playerName: res.data.name
            });
        });
    }
    
    getOpponent = () => {
        axios.get('/api/fighter').then(res => {
            this.setState({
                opponentName: res.data.name,
                opponentID: res.data._id
            });
        });
    }

    //TODO: insert winner into state - console log this.state.winner is empty - stub data in state
    pickRandomWinner = () => {
        const fighters = [this.state.playerName, this.state.opponentName]
        let index = Math.floor(Math.random() *2);
        var name = fighters[index].toUpperCase();
        this.setState({ winner: name });
    }

    //TODO: implement getNewOpponent route using ID to return a unique opponent
    //getNewOpponent(){
    // axios.get(`/api/fighter/${!opponentID}`)
    //}

    componentDidMount(){
        this.getOpponent();
        this.getPlayer();
    }

    componentDidUpdate(){
        if(this.state.winner === ''){
            this.pickRandomWinner();
        }
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="12" sm="4" md="4">
                            <FighterPlayer name={this.state.playerName} color={this.state.playerColour} />
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <MessageModal winner={this.state.winner}/>
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <FighterPlayer name={this.state.opponentName} color={this.state.opponentColour} />
                        </Col>
                    </Row>
                </Container>               
            </div>
        )
    }
}

export default PlayGame;