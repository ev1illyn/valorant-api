package com.valorant.template;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.valorant.model.agents.Agent;
import com.valorant.model.agents.Agents;
import com.valorant.repository.AgentRepository;

public class TemplateRest implements AgentRepository {

	private UriComponents uri;
	private RestTemplate restTemplate = new RestTemplate();

	public TemplateRest() {

		uri = UriComponentsBuilder.newInstance()
				.scheme("https")
				.host("valorant-api.com")
				//.path("v1/agents")
				.path("v1")
				.queryParam("language", "pt-BR")
				.queryParam("isPlayableCharacter", "true")
				.build();
	}

	public ResponseEntity<Agents> getAgents() {

		URI agentsUri = UriComponentsBuilder
		        .fromUriString(uri.toUriString())
		        .path("/agents")
		        .build()
		        .toUri();

		ResponseEntity<Agents> entity = restTemplate.getForEntity(agentsUri, Agents.class);

		return entity;
		
	}
	
	public ResponseEntity<Agent> getAgentById(String id) {

		URI agentUri = UriComponentsBuilder
		        .fromUriString(uri.toUriString())
		        .path("/agents/" + id)
		        .build()
		        .toUri();
		
		ResponseEntity<Agent> entity = restTemplate.getForEntity(agentUri, Agent.class);
		
		return entity;

	}
}
