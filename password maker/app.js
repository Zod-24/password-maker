function onBtn() {

	var answer = [];
	var ans_sum;
	
	var set_number = document.form1.inNumber.checked;
	var set_alphabet = document.form1.inAlphabet.checked;
	var set_symbol = document.form1.inSymbol.checked;
	
	var set_number_count = document.form2.inNumberCount.value;
	
	var output_element = document.getElementById("output");
	
	if(!set_number && !set_alphabet && !set_symbol)
		return;

	if(set_number && !set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
		answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
		}
	}
	else if(set_number && set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 3)){
				case 0:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	}
	else if(set_number && set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 4)){
				case 0:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
				case 3:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
					
			}
		}
	}
	else if(!set_number && set_alphabet && !set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 2)){
				case 0:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 1:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	}
	else if(!set_number && set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 3)){
				case 0:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
				case 1:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
					break;
				case 2:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
					break;
			}
		}
	} 
	else if(!set_number && !set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
		answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
		}
	}
	else if(set_number && !set_alphabet && set_symbol){
		for(var i = 0; i < set_number_count; i++){
			switch(Math.floor(Math.random() * 2)){
				case 0:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
					break;
				case 1:
					answer[i] = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
					break;
			}
		}
  }
  
	ans_sum = answer[0];
	for(var i = 1; i < set_number_count; i++){
		ans_sum = ans_sum + answer[i];
	}
	output_element.innerHTML = ans_sum;
}