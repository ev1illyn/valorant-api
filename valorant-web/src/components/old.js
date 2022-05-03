import React from "react";
import {Col, Row, Badge, Card} from "react-bootstrap";
import AgentService from "../services/AgentService";
import AgentComponent from "./AgentComponent";
import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class AgentsComponent extends React.Component { state = { agents:[] }

    constructor(props) {
        super(props)
        this.state = {
            agents:[]
        }
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
                <h1 className="text-center">Lista de Agentes</h1>

                <table className="table table-striped">

                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Descrição</td>
                            <td>Ícone</td>
                            <td>Retrato busto</td>
                            <td>Retrato Completo</td>
                            <td>Retrato Completo V2</td>
                            <td>Tela de Fundo</td>
                            <td>Função</td>
                            <td>Habilidades</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.agents.map(
                                agent =>
                                <tr key = {agent.uuid}>
                                    <td> {agent.displayName} </td>
                                    <td> {agent.description} </td>
                                    <td> <img src={agent.displayIcon} alt={'Imagem de ícone do agente ' + agent.displayName} width="150"></img> </td>
                                    <td> <img src={agent.bustPortrait} alt={'Imagem de busto do agente ' + agent.displayName} width="300"></img> </td>
                                    <td> <img src={agent.fullPortrait} alt={'Imagem de corpo do agente ' + agent.displayName} width="300"></img> </td>
                                    <td> <img src={agent.fullPortraitV2} alt={'Imagem de corpo v2 do agente ' + agent.displayName} width="300"></img> </td>
                                    <td> <img src={agent.background} alt={'Imagem de fundo do agente ' + agent.displayName} width="300"></img> </td>
                                   
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>Nome</td>
                                                    <td>Descrição</td>
                                                    <td>Ícone</td>
                                                </tr>
                                            </thead>
                                            <tr>
                                                <td> {agent.role.displayName} </td>
                                                <td> {agent.role.description} </td>
                                                <td> <img src={agent.role.displayIcon} alt={'Imagem da função do agente ' + agent.displayName} width="100"></img> </td>
                                            </tr>
                                        </table>

                                    <td> {agent.abilities.map(
                                        ability =>
                                        <tr key = {ability.uuid}>

                                        <table>

                                            <thead>
                                                <tr>
                                                    <td>Slot</td>
                                                    <td>Nome</td>
                                                    <td>Descrição</td>
                                                    <td>Ícone</td>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td> {ability.slot} </td>
                                                    <td> {ability.displayName} </td>
                                                    <td> {ability.description} </td>
                                                    <td> <img src={ability.displayIcon} alt={'Imagem da habilidade do agente ' + agent.displayName} width="100"></img> </td>
                                                </tr>
                                            </tbody>

                                        </table>

                                            </tr>

                                    )} </td>

                                </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        )
    }
}

export default AgentsComponent