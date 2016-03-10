function refreshCount () {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			document.getElementById("count").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","dd.txt",true);
	xhttp.send();
}

function test(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			document.getElementById("count").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","dd2.txt",true);
	xhttp.send();
}

function check(){
	var xhttp = new XMLHttpRequest();
	// var data = "";
	var showTabContent = document.getElementById("showTab")
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			while (showTabContent.hasChildNodes()) {
				showTabContent.removeChild(showTabContent.lastChild);
			}
			// var data = JSON.parse(responseText)
			showTabContent.innerHTML = xhttp.responseText;
			// alert(showTabContent.length);
		}
	};
	xhttp.open("POST","dd3.txt",true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//Content-type:text/plain;charset=utf-8
	xhttp.send("fname=Henry&lname=Ford");
	xhttp.send(data);
}

