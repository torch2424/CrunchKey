<script language="JavaScript">
//Our arraylists for our numbers and operators
var operators = [];
var numbers = [];
var answer;
//No longer doing order of operations
//var order = ["^", "*", "/", "+", "-"];

//Function to compute answer and display it in text
function compute()
{
	operators = [];
	numbers = [];
	//Get the input from the text box, working
	var input = document.getElementById('inputBox').value;
	
	//parse the string
	parseInput(input);
	
	//performing math
	//Need to makesure opertators is not null or zero
	if(operators != null && operators.length > 0)
	{
		//perform math
		//make order of operations array
		//loop for order of operations
		console.log("START!!!!!!!!");
			//loop for doing math if those operators exist
			for(ii = 0; ii < operators.length; ii++)
			{
				//If we are currently doing the operator in order of operations,
				//and they are more numbers than operators or an equal amount (as it should be)
				if(numbers.length >= operators.length && numbers[ii + 1] != null)
				{
					console.log("entered the matrix");
					var tempAnswer;
					//Exponent
					if(operators[ii] == "^")
					{
						//The orignial number we are powering
						var base = numbers[ii];
						tempAnswer = base;
						//multiple number by itself that many times
						//Start one since we dont start exponents at zero
						for(var j = 1; j < numbers[ii + 1]; j++)
						{
							tempAnswer = tempAnswer * base;
						}
					}
					//Multiplication
					else if(operators[ii] == "*" || operators[ii] == "x")
					{
						console.log(numbers[ii] + "," + numbers[ii + 1]);
						tempAnswer = numbers[ii] * numbers[ii + 1];
					}
					//Division
					else if(operators[ii] == "/")
					{
						tempAnswer = numbers[ii] / numbers[ii + 1];
					}
					//Addition
					else if(operators[ii] == "+")
					{
						tempAnswer = numbers[ii] + numbers[ii + 1];
						console.log(numbers[ii] + "," + numbers[ii + 1]);
					}
					//Subtraction
					else if(operators[ii] == "-")
					{
						tempAnswer = numbers[ii] - numbers[ii + 1];
					}
					
					console.log("here is temp answer now: " + tempAnswer);
					//Lastly replace the old numbers and remove the operators
					//Using splice method
					numbers.splice(ii, 2, tempAnswer);
					operators.splice(ii, 1);
					
					//since there may be another of this operator, check for this operator again, by subtracting 1 from ii
					ii--;
				}
				//Log the process
				console.log("iteration " + ii + " leaves the numbers: " + numbers + "\nand operators: " + operators);
			}
		}
	//The last remaining number is the answer
	if(numbers != null && numbers.length > 0)
	{
		console.log("final answer: " + numbers[0]);
		answer = numbers[0];
	}
	//Output answer, working
	document.getElementById('answer').innerHTML = answer;
	
}

//Function to parse our input into operators and numbers
function parseInput(math)
{
	var operatorsRegex = /[-*x+/^]/g;
	//parse the numbers and operators
	//Using Character quotes for ^ since its special
	operators = math.match(operatorsRegex);
	//Putting all digits, persiods and opertators into an array
	tempEquation = math.match(/[.0-9-*x+/^]/g);
	//Now we are getting all the floats from the array, by adding all digits and periods to 
	//a string, and then parsing that string for floats
	if(tempEquation != null)
	{
		var tempFloat = "";
		for(i = 0; i < tempEquation.length; i++)
		{
			if(operatorsRegex.test(tempEquation[i]) == false)
			{
				tempFloat = tempFloat + tempEquation[i];
				//Need to check if last digit in string
				if(i == tempEquation.length - 1)
				{
					numbers.push(parseFloat(tempFloat));
				}
			} 
			else if(tempFloat != null && tempFloat != "")
			{
				numbers.push(parseFloat(tempFloat));
				tempFloat = "";
			}
		}
	}
}
</script>
