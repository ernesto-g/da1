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
		echo("Vino un POST");
	}

}

?>
