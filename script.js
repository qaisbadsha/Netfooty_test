function welcome() {
			var x = document.getElementById("team_select").value; // try by name

			alert(x +"    Welcomes you!");
		}


		//another script for time left for premier league. Will move it out later. 

		function time_left() {
			var x = new Date();
			document.getElementById("sidebar").innerHTML = x + "2 more months till the start of the Premier League!";

	
		}