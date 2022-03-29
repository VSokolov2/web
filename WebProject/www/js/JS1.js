var cols, rows;
cols = 5; rows =5;

var arr = new Array();
for (var i = 0; i < rows; i++)
{
	arr[i] = new Array();
	for (var j = 0; j < cols; j++)
	{
		arr[i][j] = j+i+1;
		console.log(arr[i][j])
	}
}
	
var string = new String();
for (var i = 0; i < arr.length; i++)
{
	for (var j = 0; j < arr[i].length; j++)
	{
		string = string + arr[i][j] + ' ';
		console.log(string);
	}
	string += '\n';
}
string += "-------------\n";

var arr1 = new Array();
var arr2 = new Array();
var change1 = 1;
var change2 = 3;

arr1 = arr[change1-1];
arr2 = arr[change2-1];

arr[change2-1] = arr1;
arr[change1-1] = arr2;

for (var i = 0; i < arr.length; i++)
{
	for (var j = 0; j < arr[i].length; j++)
	{
		string = string + arr[i][j] + ' ';
		console.log(string);
	}
	string += '\n';
}