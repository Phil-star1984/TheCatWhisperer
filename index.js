import moodLifter from "./data.js";

/* console.log(moodLifter[0].solutions[0]); */

const sendMoodButton = document.getElementById("send_mood");

/* create Function to give solutions for different moods */
function upliftCat() {
  /* muss die catMood Variable außerhalb der Funtion oder innerhalb sein? */
  let catMood = document.getElementById("cat_mood_input").value;

  /* check the mood of the cat and give solution */
  const moodCheck = moodLifter.filter((item) => {
    return item.mood === catMood;
  });

  const x = Math.floor(Math.random() * 3);

  document.getElementById(
    "mood_output"
  ).innerHTML = `The status of your cat is ${catMood.toUpperCase()}. Possible Solutions: ${moodCheck[0].solutions[
    x
  ].toUpperCase()}`;

  catMood = "";
}

function changeBgImg() {
  document.body.style.backgroundImage = "url(images/AdobeStock_479388341.jpg)";
}

function buttonKlick() {
  upliftCat();
  changeBgImg();
}

const changeBckgrd = document.getElementById("change_bckgrd");
changeBckgrd.addEventListener("click", changeBgImg);
/* setInterval(changeBgImg(), 1000); */
sendMoodButton.addEventListener("click", buttonKlick);

/* window.addEventListener("load", () => {
  document.body.style.backgroundimage = "url(images/AdobeStock_479388341.jpg)";
}); */
