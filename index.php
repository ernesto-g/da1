 <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>
	
	

	  

		<nav class="light-blue darken-4">
			<div class="nav-wrapper">
			  <a href="#"  class="brand-logo right">Smart HOME</a>
			  <ul id="nav-mobile" class="left hide-on-med-and-down">
				<li><a href="#" onclick="showSidebar();" ><i class="material-icons">menu</i></a></li>
				<li class="active"><a href="#">Dispositivos</a></li>
				<li><a href="#">Configuracion</a></li>
			  </ul>
			</div>
		</nav>	
		
		
		
		<ul id="slide-out" class="sidenav">
			<li>
				<div class="user-view">
					<div class="background">
						<img src="images/office.jpg">
					</div>
					<a href="#user"><img class="circle" src="images/yuna.jpg"></a>
					<a href="#name"><span class="white-text name">John Doe</span></a>
					<a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
				</div>
			</li>
			<li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
			<li><a href="#!">Second Link</a></li>
			<li><div class="divider"></div></li>
			<li><a class="subheader">Subheader</a></li>
			<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
		</ul>
		

	  <div class="container">
 			<h4 id='title'>Dispositivos</h4>
		  <ul class="collection" id='devicesList'>
		  </ul>

	  </div>	


	<footer class="page-footer light-blue darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">FIUBA</h5>
                <p class="grey-text text-lighten-4">Especializacion IoT - Gestion de Datos y Aplicaciones</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Desarrollo de Aplicaciones I</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            	2019 
            <!-- <a class="grey-text text-lighten-4 right" href="#!">More Links</a> -->
            </div>
          </div>
    </footer>
	
	
	<!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
	  <script type="text/javascript" src="js/main.js"></script>
		<script type="text/javascript" src="js/MyFramework.js"></script>
		<script type="text/javascript" src="js/ControllerMainPage.js"></script>
		<script type="text/javascript" src="js/ViewMainPage.js"></script>

    </body>
	
	<script>
		var instances;
		
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			//var instances = M.Sidenav.init(elems, options);
			instances = M.Sidenav.init(elems);
			console.log(instances[0]);
		});
		
		function showSidebar(){
			console.log("menu");
			instances[0].open();
		}
	</script>
  </html>