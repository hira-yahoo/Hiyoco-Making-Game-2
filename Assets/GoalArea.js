﻿#pragma strict

static var goal : boolean;
goal = false;

function OnTriggerEnter ( col : Collider ) 
{
	if ( col.tag == "Player" )
	{
		goal = true;
	}

}