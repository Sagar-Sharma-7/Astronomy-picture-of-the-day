// cookie
document.cookie = "SameSite=Lax"

const heading = document.querySelector("#mainH1");
const dateBox = document.querySelector("#date");
const title = document.querySelector(".title");
const image = document.querySelector("img");
const contentBox = document.querySelector(".explain");

// text content
heading.textContent = 'Astronomy Picture of the Day';

// APOD = Astronomy Picture of the Day
const APOD = async () => {
    const API = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    try {
        const fetchData = await fetch(API);
        const jsonData = await fetchData.json()
        console.log(jsonData);

        title.innerHTML = jsonData.title
        contentBox.innerHTML = jsonData.explanation;
        image.setAttribute("src", jsonData.url);
        
        const date = new Date(jsonData.date);
        const today = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const monthsList = [
                     "Jan",
                     "Feb", 
                     "Mar", 
                     "Apr", 
                     "May", 
                     "Jun", 
                     "Jul",
                     "Aug",
                     "Sep", 
                     "Oct", 
                     "Nov", 
                     "Dec"
                 ];
        
        dateBox.innerHTML = `${today} ${monthsList[month]} ${year}`;

        image.addEventListener("click", () => {
            window.open(jsonData.url)
        })
        
    } catch (error) {
        console.log(error);
        title.innerHTML = "No Internet";

    };
};

APOD();
