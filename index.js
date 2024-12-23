function NPV(effectiveRate,cashFlow)
{
    try{

        if(typeof effectiveRate === 'string' || typeof cashFlow === 'string')
            //console.log("Input validation error occurred: ", "please ensure all input value is/are of type numeric");
            throw new Error("\x1b[31m Input validation error - please ensure all input value is/are of type numeric \x1b[0m");
        else
            1

        let sum = 0;
        for(var i = 0; i < cashFlow.length; i++){
            console.log(cashFlow[i]/(1+effectiveRate)**(i+1));
            sum += cashFlow[i]/(1+effectiveRate)**(i+1);
        } return sum ;
        
    }
    catch(error){
        console.log("An error occurred: ", error.message);
    }
}


module.exports = NPV