function NPV(effectiveRate,cashFlow)
{
    try{
        let sum = 0;
        //const discountedCashFlows = cashFlow.map(n => n/(1+effectiveRate));
        //const sum = discountedCashFlows.reduce((total, n) => total + n, 0);
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