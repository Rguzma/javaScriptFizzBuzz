
let num= 0;

function fizzbuzz (n){

    // let outString = '';
    let values = [];
    


    if (typeof (n ) == 'string'){
        console.log ("Parameter must be an number");

    }
    else if (n <0){
        console.log ("Parameter must be a positive number");

    }
    else if (n >=0 ){
        for (i=0; i<n; i++){
            if ((i % 3 == 0 )&& (i%5==0)) {
            // // console.log (i + ", and FIZZBUZZ!");
            // outString += i + ", and FIZZBUZZ!";
            values.push ("FIZZBUZZ");
            }
            else if (i%3==0 ){
                // console.log(i +", Fizz");
            //    outString= i +", Fizz";
                values.push("Fizz");
            }
            else if (i%5 ==0) {
                // console.log(i + ", Buzz");
                // outString += i + ", Buzz";
                values.push("Buzz");

            }
            else {
                // console.log(i + ",");
                // outString += i + ",";
                values.push(i)
            }

           
        }
        return values.join(',');
    }
    


}

console.log(fizzbuzz("hola"));