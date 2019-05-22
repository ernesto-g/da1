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
		$stateValue = 0;
		if($_POST["checked"]=="true")
			$stateValue = 1;

		$data = array(1=>$stateValue,2=>$_POST["id"]);
		
		$result = $this->db->exec("UPDATE Devices SET state=? WHERE id=?",$data);

		if($result==1)
			$out = ["response"=>true,"idDevice"=>$_POST["id"],"state"=>$_POST["checked"]];
		else
			$out = ["response"=>false,"msg"=>"Error modificando base de datos"];

		echo(json_encode($out));
	}

}

?>
