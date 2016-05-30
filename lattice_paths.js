	 
/* Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?*/

function lattice_paths(col_nr,line_nr){

var counter = 1;
var start = Math.pow ( 2  , col_nr);
var end  =  Math.pow(2, (col_nr + line_nr)) - Math.pow(2, line_nr) ;

for( i = start ; i <= end ; i++){
	var stri = i.toString(2).split('');
	var local_sum = 0;
	for (j = 0 ; j < stri.length ; j++){
		local_sum += parseInt(stri[j],10);
		}
	if (local_sum == col_nr)
		counter +=1;
	};
return (counter);
	};

console.log(lattice_paths(20,20));