import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import versusImg from '../../img/versus.jpg';

class MessageModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            modal: false,
            count: 3,
            winner: '',
            content: '',
            redirect: false
        }
    }

    fightDescriptors = [
        "A BRUTAL WAR ENSUES",
        "SO MUCH SCREAMING",
        "SOMEONE IS DYING!?"
    ]

    countdown = (msg) => {
        this.interval = setInterval(() => {           
            if(this.state.count > 0){
                this.setState({content: this.state.count, count: this.state.count - 1});
            } else {
                this.setState({content: msg});
                clearInterval(this.interval);
            }
        },1000);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    //TODO: implemenet redirect using history - currently not functional
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{pathname:'/'}}/>
        }
    }

    //TODO: trigger countdown after modal is opened to show countdown followed by winner
    componentDidMount(){
        const winner = this.props.winner + " WINS";
        if(this.state.modal === true){
            this.countdown(winner);
        }
    }

    render(){
        const headingIndex = Math.floor(Math.random() * 3);
        return(
            <div>
                {this.renderRedirect()}
                <Card body inverse className="border-0">
                    <CardBody>
                        <CardImg src={ versusImg } alt="VERSUS"/>
                        <Button block size="lg" onClick={this.toggle}>FIGHT</Button>
                    </CardBody>
                </Card>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader className="modalContent" toggle={this.toggle}>{this.fightDescriptors[headingIndex]}</ModalHeader>
                    <ModalBody>
                        <h2 id="modalMsg" className="modalContent">{this.state.content}</h2>
                        <Button block size="lg" onClick={this.goHome}>CREATE NEW FIGHTER</Button>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default MessageModal;