/* Greeting to User */
/* console.log("Hello this is the CAT-WHISPERER!");
console.log("Let's play!"); */

/* Array for options to uplift your cat */
const moodLifter = [
  {
    mood: "cool",
    solutions: [
      "go for a walk and do it right away!",
      "listen to her favorite music",
      "talk to a cat-friend",
    ],
  },
  {
    mood: "so-so",
    solutions: [
      "play with the cat-stick, of course!",
      "watch a movie she loves",
      "try a new hobby",
    ],
  },
  {
    mood: "shit",
    solutions: [
      "eat some nice cat-food, you idiot!",
      "take a deep breath and count to ten",
      "write down her thoughts",
    ],
  },
  {
    mood: "curious",
    solutions: [
      "explore a cardboard box maze",
      "investigate a mysterious sound",
      "climb to a high perch and observe",
    ],
  },
  {
    mood: "happy",
    solutions: [
      "dance around like a crazy cat",
      "chase a laser pointer",
      "nap in a sunny spot",
    ],
  },
];

const sendMoodButton = document.getElementById("send_mood");

sendMoodButton.addEventListener("click", upliftCat);

/* create Function to give solutions for different moods/cases */
function upliftCat() {
  /* query for the mood of the cat */
  /*  const catMood = prompt(
    "How is your cat today? (Choose: “cool”, “so-so”, “shit”)"
  ); */

  const catMood = document.getElementById("floatingInputDisabled").value;

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
