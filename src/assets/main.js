let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }
    if(!validateInput(input.value)){
      return false;
    }
    else{
      attempt.value++;
    }
    var results = getResults(input.value);
    if(results){
      setMessage('You Win! :)');
      showAnswer(true);
      showReplay();
    }
    else if(!results && attempt.value >= 10){
      setMessage('You Lose! :(');
      showAnswer(false);
      showReplay();
    }
    else{
      setMessage('Incorrect, try again.');
    }
}

//implement new functions here
function setHiddenFields(){
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(input){
  document.getElementById('message').innerHTML = input;
}

function validateInput(input){
  if(input.length == 4){
    return true;
  }
  else{
    setMessage('Guesses must be exactly 4 characters long.')
    return false;
  }
}

function getResults(input){
  var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(var i = 0; i < input.length; i++){
    if(input.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if(input.indexOf(answer.value.charAt(i)) > -1){
      html += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else {
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  html += '</div></div>';
  document.getElementById('results').innerHTML += html;
  if(input == answer.value){
    return true;
  }
  else{
    return false;
  }
}

function showAnswer(input){
  document.getElementById('code').innerHTML = answer.value;
  if(input){
    document.getElementById('code').className = " success";
  }
  else{
    document.getElementById('code').className = " failure";
  }
}

function showReplay(){
  document.getElementById('guessing-div').style.display = "none";
  document.getElementById('replay-div').style.display = "block";
}
