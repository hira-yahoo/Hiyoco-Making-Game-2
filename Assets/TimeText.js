#pragma strict

static var time : float;

function Start () {

	time = 0;
}

function Update () {

	if ( GoalArea.goal == false )
	{
		time += Time.deltaTime;
	}
	
	var now : int = time;
	var text = GetComponent( UnityEngine.UI.Text );
	text.text = "<Color=red>TIME: " + now + "</Color>";
		

}