
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function ()
{
    var data=request.response;
    var result=JSON.parse(data);

//! Task 1: Get all countries form asia continent:
    
    /*
    var region=result.filter((ele)=>ele.region==="Asia")
    var country=region.map((ele)=>ele.name.common)
    console.log(country);
    */
   
//! Task 2: Get all country with a population less than 2,00,000:

    /*
    var population=result.filter((ele)=>ele.population<200000)
    console.log(population.map(ele=>ele.name.common));
    */
    
//! Task 3: Print the following details name, capital,flag using for each function:

    
    //var res=result.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag));
    
//! Task 4: total population using reduce function:

    /*
    var totalpopulation=result.reduce((acc,cv)=>{
        return acc+cv.population;
        },0)
    console.log("Total population :",totalpopulation);
    */
//! Task 5: Print the country uses usd dollar as a currency
    
    /*
    var usdollar=result.filter((ele)=>ele.currencies&&ele.currencies.USD)
    var usdollarcountry=usdollar.forEach((ele)=>console.log(ele.name.common));
    */
}