package com.valorant.repository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.valorant.model.agents.Agent;
import com.valorant.model.agents.Agents;

@Repository
public interface AgentRepository {

	ResponseEntity<Agents> getAgents();
	ResponseEntity<Agent> getAgentById(String id);
}
