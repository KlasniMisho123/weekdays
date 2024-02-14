import express from "express"


const app = express();
const port = 3000;



app.get("/", (req, res) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    const date = new Date();
    const day = date.getDay();


    let currentDay = days[day]
    let type = "weekend";
    let adv = "it's time to rest";

    if (day === 0 || day === 6 ){
        res.render("index.ejs", {
            currentDay: currentDay,
            dayType: type,
            advice: adv
        });}
         else {
            res.render("index.ejs", {
                currentDay: currentDay,
                dayType: "weekday",
                advice: "it's time to work hard"
        });}
});


app.listen(port,() => {
    console.log(`server is running on: ${port}`)
})