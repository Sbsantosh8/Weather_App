// const apiKey = "ee761e57bca64b599e624258241901";
// // let City = "Hyderabad";

// let inputCity = document.getElementById("inputCity");
// let button = document.getElementById("button");
// let w = document.getElementById("temperature");
// let city = document.getElementById("city");
// let humidity = document.getElementById("humidity");

// // 


// button.addEventListener("click",()=>{
  
//         console.log(typeof inputCity.value);
// let City = inputCity.value
// let URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${City}&aqi=yes`

// console.log(City)
// })


// getting().then(res=>{
  
//        w.innerText = "Temparature : " + res.current.temp_c +" " + "deg C";
//        city.innerText = "City : " + res.location.name;
//        humidity.innerText = "humidity : " + res.current.humidity;
//      })
    






// async function getting(){
   
   
   
   
//     let a = await fetch(URL);

//     let b = await a.json();
//    console.log(b);
//    return b;
    
    
    
    


// }



const apiKey = "ee761e57bca64b599e624258241901";

let inputCity = document.getElementById("inputCity");
let button = document.getElementById("button");
let w = document.getElementById("temperature");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");

button.addEventListener("click", async () => {
  let City = inputCity.value;
  let URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${City}&aqi=yes`;

  console.log(City);

  try {
    let res = await getting(URL);

    w.innerText = "Temperature: " + res.current.temp_c + "  °C";
    city.innerText = "City: " + res.location.name;
    humidity.innerText = "humidity: " + res.current.humidity + "%";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

async function getting(URL) {
  try {
    let a = await fetch(URL);
    let b = await a.json();
    console.log(b);
    return b;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}












    
    
    
  



// let a = fetch(URL);
// a.then(result =>{
    // console.log(result);
    // let b = result.json();
//    b.then(result =>{
    // console.log(result.current.temp_c);
//    })
    // return result.json();
// })
// .then(res =>{
    // console.log(res.current.temp_c);
// })
// 
// 

















// console.log(getting());
 
 
 
 


//  console.log(aaa);



// 
// function getWeatherData(){
    // return new Promise((resolve,reject)=>{
//    
        // setTimeout(()=>{
    // console.log("fetching Temperature....");
// 
    // let weatherResult = fetch(URL);
//    
//    let store =  weatherResult.then(responseObject =>{
        // responseObject.json()
        // .then(result =>{
            // console.log(result.current.temp_c);
        //    
        //  
        // })
    // })
//   
//   
//   
//   
    //  resolve(store);
//    
// 
    // 
        // },3000)
// 
// 
    // })
// }
// 
// 
// 

// getWeatherData().then(result,() =>{
    // console.log(result);
// })
// 
// 
// 
// const apiKey = "ee761e57bca64b599e624258241901";
// const City = "Mumbai";
// 
// const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${City}&aqi=yes`;
// let w = document.getElementById("weather");
// 
// function getWeatherData() {
//   return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   console.log("Fetching Weather....");
// 
    //   fetch(URL)
        // .then(response => {
        //   if (!response.ok) {
            // throw new Error(`HTTP error! Status: ${response.status}`);
        //   }
        //   return response.json();
        // })
        // .then(data => {
        //   resolve(data);
        //   console.log(data.current.temp_c);
        // })
        // .catch(error => {
        //   reject(error);
        // });
    // }, 3000);
//   });
// }
// 
// getWeatherData()
//   .then(result => {
    // console.log(result);
    // Handle the result data here
//   })
//   .catch(error => {
    // console.error(error);
    // Handle the error here
//   });
//