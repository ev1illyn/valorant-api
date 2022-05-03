package com.valorant.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.valorant.model.agents.Agent;
import com.valorant.model.agents.Agents;
import com.valorant.model.agents.Data;
import com.valorant.repository.AgentRepository;
import com.valorant.template.TemplateRest;

import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
public class AgentService {
	
	AgentRepository agentRepository = new TemplateRest();
	
	public List<Data> getAgents() throws Exception {

		Agents agents = this.agentRepository.getAgents().getBody();
		
		if (agents.getStatus() != 200) throw new Exception("Ocorreu um erro na API do Valorant!");
		
		return agents.getData()
				.stream()
				//.filter(a -> !a.getUuid().equals("ded3520f-4264-bfed-162d-b080e2abccf9"))
				.collect(Collectors.toList());
	}

	public Data getAgentByName(String nomeAgente) throws Exception {
		
		String idAgente = this.getAgents()
				.stream()
				.filter(a -> a.getDisplayName().toLowerCase().equals(nomeAgente.toLowerCase()))
				.findFirst()
				.get()
				.getUuid();
		
		Agent agent = this.agentRepository.getAgentById(idAgente).getBody();
		
		if (agent.getStatus() != 200) throw new Exception("Ocorreu um erro na API do Valorant!");
		
		return agent.getData();
	}

}
