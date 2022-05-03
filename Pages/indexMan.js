
        function changeImg() {
            var Image_Id = document.getElementById('getImage');
			 var Image_Id = document.getElementById('header');
			 var Image_Id = document.getElementById('info');
            if (Image_Id.src.match("/Nike-landingPage/assets/zoomx-vaporfly-next-running-shoe-4Q5jfG.png")) {
                Image_Id.src = "/Nike-landingPage/assets/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png";
				
            }
            else {
                Image_Id.src = "/Nike-landingPage/assets/zoomx-vaporfly-next-running-shoe-4Q5jfG.png";
            }
        }        
  