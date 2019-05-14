<?php

class ControllerDevices extends ControllerManager
{


	public function get($f3)
	{
		if($f3->get('PARAMS.id')!=null)
		{
			$id = $f3->get('PARAMS.id');
		}
		else
		{			
			$result = $this->db->exec('SELECT * FROM Devices');
			echo(json_encode($result));
		}

	}

	public function post($f3)
	{
		$out = ["response"=>true,"idDevice"=>$_POST["id"],"state"=>$_POST["checked"]];
		echo(json_encode($out));
	}

}

?>
