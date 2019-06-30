class UI {
  constructor() {
    this.entry = document.getElementById("entry");
  }

  // display profile in ui
  renderPoke(pokeData) {
    console.log(pokeData);
    this.entry.innerHTML = `
    
    
    <div class="row entry">
    <div class="twelve columns">
      <h2 class="">
      ${pokeData.species.name.charAt(0).toUpperCase() +
        pokeData.species.name.slice(1)}
      </h2>
      <h3>#${pokeData.id}</h3>
      
    </div>
      <div class="entry twelve columns" id="entry">
        <!-- sprite -->
        <div class="six columns">
        <img class="" src="${pokeData.sprites.front_default}">
        </div>
        <!-- primary info -->
        <div class="six columns u-pull-right">
          <!-- primary info 1 -->
          <button class="six columns">${pokeData.types[0].type.name.toUpperCase()}</button>
          ${
            pokeData.types[1]
              ? `<button class=" six columns u-pull-right">${pokeData.types[1].type.name.toUpperCase()}</button>`
              : ""
          }
          <!-- primary info 2 -->
          <div class="twelve columns center-text">
            ${pokeData.name.toUpperCase()} USED <i>${pokeData.moves[
      Math.floor(Math.random() * pokeData.moves.length)
    ].move.name.toUpperCase()}!</i>
          </div>
          <!-- primary info 3 -->
          <div class="twelve columns">
            <button class="six columns u-pull-left" id>
              ATTACK ${pokeData.stats[0].base_stat}
            </button>
            <button class="six columns  u-pull-right">
              SP. ATTACK ${pokeData.stats[1].base_stat}
            </button>
            <button class="six columns ">
              DEFENSE ${pokeData.stats[2].base_stat}
            </button>
            <button class="six columns u-pull-right">
              SP. DEFENSE ${pokeData.stats[3].base_stat}
            </button>
            <button class="six columns">
              SPEED ${pokeData.stats[4].base_stat}
            </button>
            <button class="six columns u-pull-right">
              HP ${pokeData.stats[5].base_stat}
            </button>
          </div>
          <!-- primary info 4 -->
          <div class="twelve columns">
          </div>
          <!-- primary info 5 -->
          <div class="twelve columns">
          </div>
          <!-- primary info 6 -->
          <div class="twelve columns">
          </div>
        </div>
      </div>
    </div>
`;
  }
  // show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach(repo => {
      output += `

        `;
    });
    // output repos
    document.getElementById("repos").innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    //clear remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".searchContainer");
    // get search box
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);
    // timeout after three seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile if input empty
  clearEntry() {
    this.profile.innerHTML = "";
  }
}
