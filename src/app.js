import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjetives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = ["com", "es"];

  for (let pronoun of pronouns) {
    for (let adjetive of adjetives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          console.log(`${pronoun}${adjetive}${noun}.${domain}`)
        }
      }
    }
  }

};
