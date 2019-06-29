class UI {
  constructor() {
    this.entry = document.getElementById("entry");
  }

  // display profile in ui
  renderPoke(pokeData) {
    console.log(pokeData);
    this.entry.innerHTML = `
    <h3 class="page-heading mb-3 mt-3">${pokeData.species.name
      .charAt(0)
      .toUpperCase() + pokeData.species.name.slice(1)}</h3>
    <div class="card card-body mb-5">
    <div class="row">
        <div class="col-md-6">
        <img class="img-fluid mb-3" src="${pokeData.sprites.front_default}">  
        <span class="badge badge-dark">#${pokeData.order}</span>
        <span class="badge badge-dark">${pokeData.types[0].type.name.toUpperCase()}</span>
        ${
          pokeData.types[1]
            ? `<span class="badge badge-dark">${pokeData.types[1].type.name.toUpperCase()}</span>`
            : ""
        }
        </div>
        <div class="col-md-6 mt-3">
          <ul>
            <li class="badge">ATTACK--------- ${
              pokeData.stats[0].base_stat
            }</li>
            <li class="badge">SP.ATTACK------ ${
              pokeData.stats[1].base_stat
            }</li>
            <li class="badge">DEFENSE-------- ${
              pokeData.stats[2].base_stat
            }</li>
            <li class="badge">SP.DEFENSE----- ${
              pokeData.stats[3].base_stat
            }</li>
            <li class="badge">SPEED---------- ${
              pokeData.stats[4].base_stat
            }</li>
            <li class="badge">HP------------- ${
              pokeData.stats[5].base_stat
            }</li>
          </ul>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item move-button"> GENGAR USED <i>${pokeData.moves[
                  Math.floor(Math.random() * pokeData.moves.length)
                ].move.name.toUpperCase()}!
                </i></li>
            </ul>
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
