import React from "react";
import {Col, Row, Badge, Card, Button, Modal} from "react-bootstrap";
import AgentService from "../services/AgentService";
import AgentComponent from "./AgentComponent";

class AgentsComponent extends React.Component { state = { agents:{}, agent:{} }

    constructor(props) {
        super(props)
        this.state = {
            agents: [],
            agent: {},
            show: false
        }
    }

    handleClickOpen = (a) => {
        this.setState({
            agent: Object.assign({}, a),
            show: !this.state.show
        }, () => {
        console.log(this.state.agent);
        });
    }
    
    handleClickClose = () => {
        this.setState({
            agent: {},
            show: !this.state.show
        }, () => {
        console.log(this.state);
        });
    }
    
    componentDidMount() {
        AgentService.getAgents().then((response) => {
            var data = response.data
            this.setState({ agents: data})
        });
    }

    render() {
        return(
            <div>

            <Button variant="primary" onClick={this.handleClick}>
                Launch demo modal
            </Button>

            <Modal size="lg" show={this.state.show} onHide={this.handleClickClose}>
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.agent.uuid}
                </Modal.Body>
                <Modal.Footer>
                    <p>footer</p>
                </Modal.Footer>
            </Modal>

                {/*<AgentComponent agentData={this.state.agents}/>*/}

                <Row xs={1} md={2} lg={3}>
                    {this.state.agents
                    .sort((a,b) => (a.role.displayName > b.role.displayName) ? 1 : ((b.role.displayName > a.role.displayName) ? -1 : 0))
                    .map(agent =>
                        <div key = {agent.uuid}>

                            <Card border="light" variant="primary" onClick={() => this.handleClickOpen({agent})} >
                                
                                {/*<Card.Body className="card-border" style={{
                                    backgroundImage: `linear-gradient(to right, rgba(255, 236, 207, .6), rgba(242, 202, 109, .6)), url(`+agent.background+`)`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `right`,
                                    }}>*/}
                                
                                <Card.Body className="card-border">
                                    
                                    <Col>

                                        <Row xs={2} md={1} lg={2}>

                                            <Col className="align-left">
                                                <Badge bg="light" text="dark">
                                                    #00{this.state.agents.findIndex(o => o.uuid === agent.uuid) + 1}
                                                </Badge>

                                                <h6>
                                                    <Badge pill bg="secondary">
                                                        <img src={agent.role.displayIcon} alt={'Imagem da função do agente ' + agent.displayName} width="15"></img>
                                                        {agent.role.displayName}
                                                    </Badge>
                                                </h6>

                                                <Card.Title>
                                                    <h2>{agent.displayName}</h2>
                                                </Card.Title>
   
                                                <Row xs={5} md={5} lg={5}>
                                                            
                                                    { agent.abilities.map(ability =>
                                                        <p key = {ability.uuid}>
                                                            {ability.displayIcon !== null &&
                                                                <img src={ability.displayIcon} alt={'Imagem da habilidade do agente ' + agent.displayName} width="30"/>
                                                            }
                                                        </p>
                                                    )}
                                                                
                                                </Row>   
                                                            
                                            </Col>
                                            
                                            <Col className="agentIconCol" >
                                                <img className="agentIcon" src={agent.displayIcon} alt={'Imagem de ícone do agente ' + agent.displayName} value={agent.displayName} width="150"/>
                                            </Col>

                                        </Row>
                                                
                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Row>

            </div>
        )
    }
}

export default AgentsComponent