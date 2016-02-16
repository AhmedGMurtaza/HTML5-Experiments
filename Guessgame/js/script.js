// Author: Ahmed Murtaza
// Email: ahmed.gmurtaza@hotmail.com
// Released: 2012

(function(){

	var score,
		timer,
		num=0,
		pass = 0,
		fail = 0,
		count = 0,
		duplicate = [],
		random_num,
		random_limit = [18,19,23,25,12,11,25,21,17],
		target,
		d = document,
		GEBI = "getElementById",
		play_again = d[GEBI]('reset'),
		temp,
		result = d[GEBI]('result'),
		result_h1 = d[GEBI]('result-h1'),
		result_h2 = d[GEBI]('result-h2');
		result_hh2 = d[GEBI]('result-hh2');
		random_num  = Math.floor(Math.random()* 25),
		score = d[GEBI]('score-num'), // SCORE
		brick = d.getElementsByTagName('li'),
		p = d.createElement('p'),
		turns  = d[GEBI]('timer');

		if (parseInt(sessionStorage.fail) != 0 &&  parseInt(sessionStorage.fail) != 1 && parseInt(	  	        sessionStorage.fail) != 2 && parseInt(sessionStorage.fail) != 3){ 
			sessionStorage.pass = 0;
			sessionStorage.fail = 0;
		}
		
		turns.childNodes[1].innerHTML = parseInt(sessionStorage.pass);
		turns.childNodes[3].innerHTML = parseInt(sessionStorage.fail);
		
	if(random_num >= 15 && random_num <= 25){
		target = d[GEBI]('target').innerHTML = random_num ; // TARGET NUMBER
	}
	else{
		target = d[GEBI]('target').innerHTML = random_num + 20; // TARGET NUMBER
	}
	
	function run(){

	if(	parseInt(sessionStorage.pass) == 3){
					results();
		 			result_h1.innerHTML= "Awesome!!";
					result_h2.innerHTML= "You Won the Game!!";

					sessionStorage.pass = 0;
					sessionStorage.fail = 0;
					
					localStorage.setItem('result','pass') 
	 	}
	else if( parseInt(sessionStorage.fail) == 3){
				results();
				result_h1.innerHTML= "Sorry!!";
				result_h2.innerHTML= "You lost the Game!!";
				sessionStorage.pass = 0;
				sessionStorage.fail = 0;
	
				localStorage.setItem('result','Fail')

		}

	else {
			for(;count < brick.length;count++){ // ADDING CLICK EVENT TO EACH BRICK
				duplicate[count] = Math.floor(Math.random() * brick.length);
				duplicate[0] = 0;
				brick[count].addEventListener('click',function(){
				score.innerHTML = parseInt(score.innerHTML) + duplicate[this.value];
	
					if(this.value != 0){
						this.childNodes[0].src = "images/" + duplicate[this.value] + ".jpg";
						this.childNodes[0].className = "image-hover";
					}
				
				this.value = 0;    
				
				if(score.innerHTML > target){
					sessionStorage.fail = parseInt(sessionStorage.fail) + 1;
					turns.childNodes[1].innerHTML = parseInt(sessionStorage.fail);// = fail to session storage;
					score.innerHTML = 0;
					resetify();
					}
				else if(score.innerHTML == target){
					sessionStorage.pass = parseInt(sessionStorage.pass) + 1;
					turns.childNodes[0].innerHTML = parseInt(sessionStorage.pass);// = pass to session storage;
					score.innerHTML = 0;
					resetify();
					}
				
					});
			}
		}
	} // run ended

	function resetify(){
		window.location.reload();
		}
	
	function results(){
				result.style.display = "block";
				
		};
		
	var wrapper = d[GEBI]('wrapper');
		wrapper.addEventListener('mouseover',run);
		
	play_again.addEventListener('click',function(){

					localStorage.setItem('name',d[GEBI]('myname').value);
					localStorage.setItem('email',d[GEBI]('myemail').value);
					localStorage.setItem('result',parseInt(localStorage.getItem('result')));
        						 });

})();