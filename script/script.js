var state = 0;

function calculate(){
	
document.calc.output.value=eval(document.calc.output.value);	
	
	
	
}
function erase(){	
	document.calc.output.value=0;
}

function entries(s){
	if(state==1){
		if(document.calc.output.value==0){
			document.calc.output.value="";
		}
		document.calc.output.value+=s;
	}
}

function on(){
	if(state==0){
		document.calc.output.value=0;
		state = 1;
	}
}

function off(){
	erase();
	state = 0;
}