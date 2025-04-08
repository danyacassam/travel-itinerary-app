function displayItinerary(response){
    console.log("Travel itinerary generated");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generateItenerary(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    

  let apiKey = "b58bbb4t1103db3dc6e99f919a41e51o";
  let context = "You are a travel agent expert who loves traveling. Your mission is to generate an itinerary for 2 days in basic HTML. Make it precise and clear, with bullet points of the most important things to visit and eat in the city. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a travel itinerary for ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a itinerary for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayItinerary);


}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generateItenerary);