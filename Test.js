// WAP to sort a fixed-size array (5 elements) into ascending order
// Then calculate sum of all the elements


/*let number = [7,9,4,8,2];
console.log("length of array is: ",number.length);
console.log("unsorted array is: ",number);

// variables declaration
var i;    // var used in 1st for loop
var j;    // var used in nested for loop
var k;    // var used in summation loop
var temp; // temporary variable used for interchage logic


   /* for (i = 0 ; i<  5;  ++i) 
    {
       for (j = i +1; j < 5; ++j)
       {
           // if i>j then interchange
           if (number[i] > number[j])
           {
               temp = number[i];
               number[i]=number[j];
               number[j]= temp;
   
           }
          
       }
    }
  
 console.log("sorted array in ascending order is: ",number);

 // sum of all elements//

 //MANUAL Style (Not Recommended)//
//const sum = number[0] + number[1] + number[2] + number[3] + number[4];
//console.log("sum of all elements is: ",sum);

///////////////////////////
//I AM SMART (I do like this//
// my array is [2 4 7 8 9]
//              ! ! ! ! !
//   indexing:  0 1 2 3 4
//
//loop runs from 0 to 4
///////////////////////////
/*let summation=0;
 for ( k= 0; k< 5 ; k++)
 {
    summation += number[k];
 }
 console.log("sum using loop = ", summation);*/

 //WAP to find out wheather the number is odd or even?//

 let num = [1,2,3,4,5,6,7,8,9,];

console.log('even numbers are');
for (var i = 1 ; i < 10 ; i += 2 ) {
   console.log(i);
}


console.log('odd numbers are ');
for (var i = 2 ; i < 10 ; i += 2 ) {
  console.log(i);
}