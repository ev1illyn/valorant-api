package com.valorant.valorant;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Description;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.valorant.model.agents.Agent;
import com.valorant.model.agents.Agents;
import com.valorant.service.AgentService;

@SpringBootTest
class ValorantApiApplicationTests {

	@Autowired
	private AgentService agentService;

	@Test
	@Disabled
	@Description("Testa consumo da API")
	public void consumeApiValorant() {
	
		RestTemplate restTemplate = new RestTemplate();
		
		// link da API https://valorant-api.com/v1/agents
		UriComponents uri = UriComponentsBuilder.newInstance()
				.scheme("https")
				.host("valorant-api.com")
				.path("v1/agents")
				.queryParam("language", "pt-BR")
				.build();

		ResponseEntity<Agents> entity = restTemplate.getForEntity(uri.toUriString(), Agents.class);

		System.out.println("consumeApiValorant----------------------------------------------------------------------------------------------");
		System.out.println("URI = " + uri);
		System.out.println("STATUS = " + entity.getBody().getStatus());
		System.out.println("DATA = " + entity.getBody().getData().get(4));
		
	}
	
	@Test
	@Disabled
	@Description("Testa consumo da API")
	public void testaAgente() {

		RestTemplate restTemplate = new RestTemplate();
		
		UriComponents testUri = UriComponentsBuilder.newInstance()
				.scheme("https")
				.host("valorant-api.com")
				.path("v1/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa")
				.queryParam("language", "pt-BR")
				.build();
		
		ResponseEntity<Agent> testEntity = restTemplate.getForEntity(testUri.toUriString(), Agent.class);

		System.out.println("testaAgente----------------------------------------------------------------------------------------------");
		System.out.println("URI = " + testUri);
		System.out.println("STATUS = " + testEntity.getBody().getStatus());
		System.out.println("DATA = " + testEntity.getBody().getData());
		}
	
	@Test
	@Disabled
	@Description("Testa serviço de Agentes")
	public void testaAgentService() throws Exception {
		
		System.out.println("testaAgentService----------------------------------------------------------------------------------------------");
		agentService.getAgents().stream().forEach(a -> System.out.println(a));
		
	}

	@Test
	@Disabled
	@Description("Testa serviço de Agente by Id")
	public void testaAgentByIdService() throws Exception {
		String nome = "sagE";
		System.out.println("testaAgentByIdService----------------------------------------------------------------------------------------------");
		System.out.println(agentService.getAgentByName(nome).toString());

	}
	
	@Test
	@Description("Testa serviço de Agentes remove sova duplicado")
	public void testaAgentsRemoveDuplicatedSova() throws Exception {
		System.out.println("testaAgentsRemoveDuplicatedSova----------------------------------------------------------------------------------------------");
		agentService.getAgents()
			.stream()
			//.filter(a -> !a.getUuid().equals("ded3520f-4264-bfed-162d-b080e2abccf9"))
			.forEach(a -> System.out.println(a.getDisplayName() + " - " + a.getUuid()));
	}
	
}
