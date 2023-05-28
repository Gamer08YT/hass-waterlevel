class WaterlevelCard extends HTMLElement {
    // Store last Value to change only when updated.
    valueIO = null;

    // Whenever the state changes, a new `hass` object is set. Use this to
    // update your content.
    set hass(hass) {
        // Initialize the content if it's not there yet.
        if (!this.content) {
            this.innerHTML = `
        <ha-card header="Zisterne">
         <div class="tank-container">
            <img style="height: 15rem; width: auto; position: relative;" src="/local/images/tank.png">
          <div class="card-content"></div>
        </div>
        </ha-card>
      `;
            this.content = this.querySelector("div");
        }

        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : "unavailable";


        // Update Content if Value has changed.
        if (this.valueIO !== stateStr) {
            this.content.innerHTML = `
      The state of ${entityId} is ${stateStr}!
      <br><br>
                 <div class="tank-water" style="width: 100%; height: ${stateStr}px; background-image: url(/local/images/water.jpg);">
          
       </div>`;

            // Update cached Value.
            this.valueIO = stateStr;
        }

        // Set Value if not null.
        if (this.valueIO == null)
            this.valueIO = stateStr

            ;
    }

    // The user supplied configuration. Throw an exception and Home Assistant
    // will render an error card.
    setConfig(config) {
        if (!config.entity) {
            throw new Error("You need to define an entity");
        }
        this.config = config;
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }

}

customElements.define("hass-waterlevel-card", WaterlevelCard);

function loadCSS(url) {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

loadCSS("/local/hass-waterlevel-card.css");