package com.valorant.model.agents;

import java.util.ArrayList;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Data {
	
	private String uuid;
	private String displayName;
	private String description;
	private String developerName;
	private ArrayList<String> characterTags;
	private String displayIcon;
	private String displayIconSmall;
	private String bustPortrait;
	private String fullPortrait;
	private String fullPortraitV2;
	private String killfeedPortrait;
	private String background;
	private String assetPath;
	private boolean isFullPortraitRightFacing;
	private boolean isPlayableCharacter;
	private boolean AvailableForTest;
	private boolean isBaseContent;
	private Role role;
	private ArrayList<Abilities> abilities;
	
}
