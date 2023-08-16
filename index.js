import moodLifter from "./data.js";

console.log(moodlifter.mood);

const sendMoodButton = document.getElementById("send_mood");

sendMoodButton.addEventListener("click", upliftCat);

/* create Function to give solutions for different moods/cases */
function upliftCat() {
  /* query for the mood of the cat */
  /*  const catMood = prompt(
    "How is your cat today? (Choose: “cool”, “so-so”, “shit”)"
  ); */

  let catMood = document.getElementById("floatingInputDisabled").value;

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

  /*   switch (mood) {
    case "shit":
      const moodMatching = moodLifter.filter((item) => {
        return item.mood === "shit";
      });
      const x = Math.floor(Math.random() * 3);
      alert(
        `The status of your cat is ${mood.toUpperCase()}. Possible Solutions: ${moodMatching[0].solutions[
          x
        ].toUpperCase()}`
      );
      break;
    case "so-so":
      const moodMatching = moodLifter.filter((item) => {
        return item.mood === "so-so";
      });
      const x = Math.floor(Math.random() * 3);
      alert(
        `The status of your cat is ${mood.toUpperCase()}. Possible Solutions: ${moodMatching[0].solutions[
          x
        ].toUpperCase()}`
      );
      break;
    case "cool":
      const moodMatching = moodLifter.filter((item) => {
        return item.mood === "cool";
      });
      const x = Math.floor(Math.random() * 3);
      alert(
        `The status of your cat is ${mood.toUpperCase()}. Possible Solutions: ${moodMatching[0].solutions[
          x
        ].toUpperCase()}`
      );
      break;
    default:
      alert("ERROR. This is no mood");
  } */
}
