#pragma strict

function OnTriggerEnter ( col : Collider ) {

	if ( GoalArea.goal == false && col.tag == "Player" ) {
		Application.LoadLevel( Application.loadedLevel );
	}

}