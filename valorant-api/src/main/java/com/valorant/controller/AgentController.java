package com.valorant.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valorant.model.agents.Data;
import com.valorant.service.AgentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/agents")
public class AgentController {

	@Autowired
	private AgentService agentService;

	@GetMapping
	private ResponseEntity<List<Data>> getAgents() throws Exception {

		Optional<List<Data>> agentesEncontrados = Optional.ofNullable(agentService.getAgents());

		if (agentesEncontrados.isPresent()) { return ResponseEntity.ok(agentesEncontrados.get()); }

		return ResponseEntity.notFound().build();


	}

	@GetMapping("/{agentName}")
	private ResponseEntity<Data> getAgentByName(@PathVariable String agentName) throws Exception {

		Optional<Data> agenteEncontrado = Optional.ofNullable(agentService.getAgentByName(agentName));

		if (agenteEncontrado.isPresent()) { return ResponseEntity.ok(agenteEncontrado.get()); }
		
		return ResponseEntity.notFound().build();

	}

}
