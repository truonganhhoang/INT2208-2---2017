var count = -1;
var correct = 0;
var incorrect = 0;
function render(){
	if(count == (questions.length -1) ){
		 if(correct >= 4)
		{
			document.getElementById("end").innerHTML = "<a href='../Man4/5.4.html'><b>Qua màn</b></a>";
			document.getElementById("end").style.fontFamily = "Roboto Slab,sans-serif";
			
		}
		else {
		document.getElementById("end").innerHTML= "<a href='./5.3.html'><b>Chơi lại</b></a>";
		document.getElementById("end").style.fontFamily = "Roboto Slab,sans-serif";
		}
		return true;
		
	}

	count++;
	document.getElementById("run").innerHTML = " ";
	document.getElementById("a").checked = false;
	document.getElementById("b").checked = false;
	document.getElementById("c").checked = false;
	document.getElementById("d").checked = false;

	document.getElementById("h-typeOfQuestions").innerHTML = typeOfQuestions[count];
	if(typeOfQuestions[count] == " "){
		document.getElementById("h-questions").innerHTML = " ";
		document.getElementById("anh").src = questions[count];
		document.getElementById("anh").width = "500";
		document.getElementById("anh").height = "200";

		} else {
		document.getElementById("h-questions").innerHTML = questions[count];
	}

	document.getElementById("a").disabled = false;
	document.getElementById("b").disabled = false;
	document.getElementById("c").disabled = false;
	document.getElementById("d").disabled = false;

	document.getElementById("0").innerHTML = choices[count][0];
	document.getElementById("1").innerHTML = choices[count][1];
	document.getElementById("2").innerHTML = choices[count][2];
	document.getElementById("3").innerHTML = choices[count][3];

	document.getElementById("a").value = choices[count][0];
	document.getElementById("b").value = choices[count][1];
	document.getElementById("c").value = choices[count][2];
	document.getElementById("d").value = choices[count][3];
	document.getElementById("rank").innerHTML = count + 1 + "/" + questions.length;
}

function submitAnswer(){
	var ans;
	useranswers = document.getElementsByName("pop");
	
	for(var i =0;i< useranswers.length; i++){
		if(useranswers[i].checked){
			ans = useranswers[i].value;
		} else {
			useranswers[i].disabled = true;
		}
	}
		
		if(ans == answers[count]){
			console.log("helpp");document.getElementById("run").innerHTML = "Chính Xác!";
			document.getElementById("run").style.color = "green";
			document.getElementById("run").style.fontSize= "xx-large";

			console.log(correct);
			correct = correct + 1;
			document.getElementById("correct").innerHTML = correct;
		} 
		else{
			document.getElementById("run").innerHTML = "Sai rồi!" ;
			document.getElementById("run").style.color = "red";
			document.getElementById("run").style.fontSize = 'xx-large';
			
			console.log(incorrect);
			incorrect = incorrect + 1;
			document.getElementById("incorrect").innerHTML = incorrect;
		}
	  
}

