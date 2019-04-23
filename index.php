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

			
			  <a href="#"  class="brand-logo right">Logo</a>
			  <ul id="nav-mobile" class="left hide-on-med-and-down">
				<li><a href="#" onclick="showSidebar();" ><i class="material-icons">menu</i></a></li>
				<li><a href="#">Ejemplo 2</a></li>
				<li class="active" ><a href="#">Ejemplo 3</a></li>
			  </ul>
			</div>
		</nav>	
		
		<!-- <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>	 -->
		
		
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
	  
		<div class="row">
		  <div class="col s1">1</div>
		  <div class="col s1">2</div>
		  <div class="col s1">3</div>
		  <div class="col s1">4</div>
		  <div class="col s1">5</div>
		  <div class="col s1">6</div>
		  <div class="col s1">7</div>
		  <div class="col s1">8</div>
		  <div class="col s1">9</div>
		  <div class="col s1">10</div>
		  <div class="col s1">11</div>
		  <div class="col s1">12</div>
		</div>
		
		
		  <ul class="collection">
			<li class="collection-item avatar">
			  <img src="images/yuna.jpg" alt="" class="circle">
			  <span class="title">Title</span>
			  <p>First Line <br>
				 Second Line
			  </p>
			  <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
			<li class="collection-item avatar">
			  <i class="material-icons circle">folder</i>
			  <span class="title">Title</span>
			  <p>First Line <br>
				 Second Line
			  </p>
			  <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
			<li class="collection-item avatar">
			  <i class="material-icons circle green">insert_chart</i>
			  <span class="title">Title</span>
			  <p>First Line <br>
				 Second Line
			  </p>
			  <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
			<li class="collection-item avatar">
			  <i class="material-icons circle red">play_arrow</i>
			  <span class="title">Title</span>
			  <p>First Line <br>
				 Second Line
			  </p>
			  <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
			</li>
		  </ul>
  
	
		<table class="striped">
			<thead>
			  <tr>
				  <th>Name</th>
				  <th>Item Name</th>
				  <th>Item Price</th>
			  </tr>
			</thead>

			<tbody>
			  <tr>
				<td>Alvin</td>
				<td>Eclair</td>
				<td>$0.87</td>
			  </tr>
			  <tr>
				<td>Alan</td>
				<td>Jellybean</td>
				<td>$3.76</td>
			  </tr>
			  <tr>
				<td>Jonathan</td>
				<td>Lollipop</td>
				<td>$7.00</td>
			  </tr>
			</tbody>
		</table>
	   </div>		  
	<footer class="page-footer light-blue darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
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
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
    </footer>
	
	
	<!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>
	  <script type="text/javascript" src="js/main.js"></script>

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