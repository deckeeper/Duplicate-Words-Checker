	string_to_array = function (str) {
     return str.trim().split(" ");
};


	function findduplicates () {

		var name = document.getElementById("myTextArea").value;
     // prep
  const arr = string_to_array(name);

  const counter = (prev, next) => Object.assign(prev, { [next] : (prev[next] || 0) + 1 });
  const singles = function(key){ return this[key] === 1 };
  const multiples = function(key){ return this[key] > 1 };

  // work
  const counted = arr.reduce(counter, {});
  const filtered = Object.keys(counted).filter(multiples.bind(counted));
  console.log(filtered);

  if (filtered == ''){
  	const result = 'No Duplicates';
  	document.getElementById('result').innerHTML = result;
  }
  else{
  document.getElementById('result').innerHTML = filtered;
  }
};


function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        document.getElementById("click").click();
    }
}