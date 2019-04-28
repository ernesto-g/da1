<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1"/>
<script>
"use strict";
function submitForm(oFormElement)
{
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){ alert (xhr.responseText); } // success case
  xhr.onerror = function(){ alert (xhr.responseText); } // failure case
  xhr.open (oFormElement.method, oFormElement.action, true);
  xhr.send (new FormData (oFormElement));
  return false;
}
</script>
</head>

<body>
<form method="post" action="device.php" onsubmit="return submitForm(this);">
  <input type="hidden" value="person"   name="user" />
  <input type="hidden" value="password" name="pwd" />
  <input type="hidden" value="place"    name="organization" />
  <input type="hidden" value="key"      name="requiredkey" />
  <input type="submit" value="post request"/>
</form>
</body>
</html>