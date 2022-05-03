import React from "react";
import AgentService from "../services/AgentService";
import {Col, Row, Badge, Card} from "react-bootstrap";

class AgentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            agent: {}
        }
    }
    
    render() {
        return (
            <div>

                {this.props.agentData
                    .sort((a,b) => (a.role.displayName > b.role.displayName) ? 1 : ((b.role.displayName > a.role.displayName) ? -1 : 0))
                    .map(agent =>
                        
                        <div key = {agent.uuid}> {agent.displayName}
                        </div>
                    )
                }
            </div>
        )
    }
}
export default AgentComponent