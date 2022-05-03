import React, { useState, useEffect } from 'react';
import { Col, Row, Badge, Card, Modal, Tabs, Tab } from "react-bootstrap";
import AgentService from "../services/AgentService";
import logo from '../utils/img/valorant.png';

function AgentsComponentFunction() {

    const [agents, setAgents] = useState([]);
    const [agentDetail, setAgentDetail] = useState({});
    const [show, setShow] = useState(false);
    let audio = new Audio("https://media.valorant-api.com/sounds/1798160596.wav")

    useEffect(() => {
        var data;
        AgentService.getAgents().then((response) => {
            data = response.data;
            setAgents(data);
        });
    }, []);

    const startAgentVoice = () => {
        /*audio.play();*/
    }

    function handleClick() {
        setShow(!show);
    }

    function setContentModal(a) {
        setAgentDetail(a);
    }

    return (
        <div>

            <h1>Vavá, tomar no cu <hr /></h1>

            { show &&
                <Modal size="xl" show={show} onHide={handleClick} onEntering={startAgentVoice}>

                    <div className="bgImageHaven">

                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <Row xs={1} md={2} lg={2}>

                                {/* MUDANÇA 02/05
                                <Col className="bgImageVLogo">

                                    <div className="baseIndex">

                                        <img src={agentDetail.fullPortraitV2}
                                            alt={'Imagem do agente ' + agentDetail.displayName}
                                            value={agentDetail.displayName} width="600"
                                            className="agent" />

                                        <img src={agentDetail.background}
                                            alt={'Imagem de ícone do agente ' + agentDetail.displayName}
                                            value={agentDetail.displayName} width="500"
                                            className="background" />

                                    </div>

                                </Col><br />
                                */}

                                <Col className="zIndex">

                                    <img src={logo}
                                        alt={'Imagem de logo'} width="500"
                                        className="logo" />

                                    <img src={agentDetail.background}
                                        alt={'Imagem de ícone do agente ' + agentDetail.displayName}
                                        value={agentDetail.displayName} width="500"
                                        className="background" />

                                    <img src={agentDetail.fullPortraitV2}
                                        alt={'Imagem do agente ' + agentDetail.displayName}
                                        value={agentDetail.displayName} width="600"
                                        className="agent" />


                                </Col>

                                <Col>

                                    {/* <p style={{
                                    backgroundImage: `url(` + agentDetail.role.displayIcon + `)`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `left`,
                                    width: `1px !important`,
                                    backgroundSize: `contain`
                                    }}>*/}

                                    <p>
                                        <hr />
                                        <img className="agentIcon" src={agentDetail.displayIcon}
                                            alt={'Imagem de ícone do agente ' + agentDetail.displayName}
                                            value={agentDetail.displayName} width="150" />

                                        <h6 className="agentRole">{agentDetail.role.displayName.toUpperCase()}</h6>
                                        <h1 className="agentNameValorant">{agentDetail.displayName.toUpperCase()}</h1>
                                    </p>

                                    <p>

                                        <Tabs defaultActiveKey="info" id="controlled-tab-example" className="mb-3">

                                            <Tab eventKey="info"
                                                title={
                                                    <div>
                                                        <h6>INFO</h6>
                                                        <img src={agentDetail.role.displayIcon}
                                                            alt={'Imagem da habilidade do agente ' + agentDetail.displayName}
                                                            width="30" />
                                                    </div>

                                                }>
                                                <p>
                                                    <h6>{agentDetail.description}</h6>
                                                    <hr />
                                                    <h4>{agentDetail.role.displayName}</h4>
                                                    <h6>{agentDetail.role.description}</h6>
                                                </p>

                                            </Tab>

                                            <Tab eventKey={agentDetail.abilities[0].displayName}
                                                title={
                                                    <div>
                                                        <h6>C</h6>
                                                        <img src={agentDetail.abilities[0].displayIcon}
                                                            alt={'Imagem da habilidade do agente ' + agentDetail.displayName}
                                                            width="30" />
                                                    </div>
                                                }>

                                                <h4>{agentDetail.abilities[0].displayName}</h4>
                                                <h6>{agentDetail.abilities[0].description}</h6>

                                            </Tab>

                                            <Tab eventKey={agentDetail.abilities[1].displayName}
                                                title={
                                                    <div>
                                                        <h6>Q</h6>
                                                        <img src={agentDetail.abilities[1].displayIcon}
                                                            alt={'Imagem da habilidade do agente ' + agentDetail.displayName}
                                                            width="30" />
                                                    </div>
                                                }>

                                                <h4>{agentDetail.abilities[1].displayName}</h4>
                                                <h6>{agentDetail.abilities[1].description}</h6>

                                            </Tab>

                                            <Tab eventKey={agentDetail.abilities[2].displayName}
                                                title={
                                                    <div>
                                                        <h6>E</h6>
                                                        <img src={agentDetail.abilities[2].displayIcon}
                                                            alt={'Imagem da habilidade do agente ' + agentDetail.displayName}
                                                            width="30" />
                                                    </div>
                                                }>

                                                <h4>{agentDetail.abilities[2].displayName}</h4>
                                                <h6>{agentDetail.abilities[2].description}</h6>

                                            </Tab>

                                            <Tab eventKey={agentDetail.abilities[3].displayName}
                                                title={
                                                    <div>
                                                        <h6>X</h6>
                                                        <img src={agentDetail.abilities[3].displayIcon}
                                                            alt={'Imagem da habilidade do agente ' + agentDetail.displayName}
                                                            width="30" />
                                                    </div>
                                                }>

                                                <h4>{agentDetail.abilities[3].displayName}</h4>
                                                <h6>{agentDetail.abilities[3].description}</h6>

                                            </Tab>

                                        </Tabs>

                                    </p>

                                </Col>

                            </Row>

                        </Modal.Body>

                        <Modal.Footer>
                            <p>footer</p>
                        </Modal.Footer>

                    </div>
                </Modal >
            }

            <Row xs={1} md={2} lg={3}>
                {agents
                    .sort((a, b) => (a.role.displayName > b.role.displayName) ? 1 : ((b.role.displayName > a.role.displayName) ? -1 : 0))
                    .map(agent =>
                        <div key={agent.uuid}>

                            <Card border="light" variant="primary" onClick={() => { handleClick(); setContentModal(agent) }} >

                                {/*<Card.Body className="card-border" style={{
                                    backgroundImage: `linear-gradient(to right, rgba(255, 236, 207, .6), rgba(242, 202, 109, .6)), url(`+agent.background+`)`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundPosition: `right`,
                                    }}>*/}

                                <Card.Body className="card-border">

                                    <Col>

                                        <Row xs={2} md={1} lg={2}>

                                            <Col className="align-left">
                                                <h6 className="agentNumber">
                                                    #00{agents.findIndex(o => o.uuid === agent.uuid) + 1}
                                                </h6>

                                                <h6>
                                                    <Badge pill bg="dark" text="light">
                                                        <img src={agent.role.displayIcon} alt={'Imagem da função do agente ' + agent.displayName} width="15" />
                                                        {agent.role.displayName}
                                                    </Badge>
                                                </h6>

                                                <Card.Title>
                                                    <h1 class="agentName">{agent.displayName.toUpperCase()}</h1>
                                                </Card.Title>

                                                <Row xs={5} md={5} lg={5}>

                                                    {agent.abilities.map(ability =>
                                                        <p key={ability.uuid}>
                                                            {ability.displayIcon !== null &&
                                                                <img src={ability.displayIcon} alt={'Imagem da habilidade do agente ' + agent.displayName} width="30" />
                                                            }
                                                        </p>
                                                    )}

                                                </Row>

                                            </Col>

                                            <Col className="agentIconCol" >
                                                <img className="agentIcon" src={agent.displayIcon} alt={'Imagem de ícone do agente ' + agent.displayName} value={agent.displayName} width="150" />
                                            </Col>

                                        </Row>

                                    </Col>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
            </Row>

        </div >
    )
}

export default AgentsComponentFunction