console.log("Landing Page");

//** == const == */
const contentAPI = document.querySelector(`.group relative`);
const API = ` `; 

// ** == Call API ==*/
const apiData = async  (urlAPI) => {
 const response = await  fetch(urlAPI); 
 const data = await response.json(); 
 return data; 
}


