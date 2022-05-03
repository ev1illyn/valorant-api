import axios from 'axios'

const AGENTS_REST_API_URL
    = 'http://localhost:8080/agents';

class AgentService {

    getAgents() {
        console.log(axios.get(AGENTS_REST_API_URL));
        return axios.get(AGENTS_REST_API_URL);
    }

    getAgentsByName(name) {
        return axios.get(AGENTS_REST_API_URL + name);
    }

}

export default new AgentService();