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
  let context = "You are a travel agent expert who loves traveling. Your mission is to generate travel plans in basic HTML and separate each line with a <br />. The title should begin with `Travel Guide for`. Use a header for each travel information section and ol for the information. Sign the travel guide with `AI Travel Guide` inside a <strong> element at the end of the travel plans. Do not include the ```htm`. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate a 3-day travel guide for tourists that includes popular attractions and recommended restaurants while visiting ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a travel guide for ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayItinerary);

  

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generateItenerary);

function capitalizeFirstLetter() {
  const input = document.getElementById('user-instructions');
  const value = input.value;
  if (value.length > 0) {
      input.value = value.charAt(0).toUpperCase() + value.slice(1);
  }
}