<template>
    <div class="p-5">
      <div class="w-96 mx-auto flex flex-wrap border rounded-2xl">
        <div class="p-5 h-96" v-if="this.zoomid != null">
          <button class="text-white font-fantasy border-white" @click="zoom(zoomid)">zurück</button>
          <h1 class="font-fantasy text-white text-3xl pb-5">{{ this.artikels[zoomid].titel }}</h1>
          <p class="font-fantasy text-white">{{ this.artikels[zoomid].text }}</p>
        </div>
        <div
          v-else
          class="w-40 my-4 p-2 mx-auto h-24 border rounded-2xl bg-black"
          v-for="artikel in artikels"
          :key="artikel.id"
        >
          <input
            :disabled="finished"
            v-if="artikel.hinzugefuegt === 2"
            v-on:click="reset(artikel.id)"
            class="font-fantasy absolute ml-20 mt-12 border h-8 w-8 bg-green-300 rounded-xl"
            type="button"
            value="+"
          />
          <input
           :disabled="finished"
            v-else
            v-on:click="changePositive(artikel.id)"
            class="font-fantasy absolute ml-20 mt-12 border h-8 w-8 bg-green-700 rounded-xl"
            type="button"
            value="+"
          />
          <input
            :disabled="finished"
            v-if= "artikel.hinzugefuegt === 1"
            v-on:click="reset(artikel.id)"
            class="font-fantasy absolute ml-28 mt-12 border h-8 w-8 bg-red-300 rounded-xl"
            type="button"
            value="-"
          />
          <input
          :disabled="finished"
            v-else
            v-on:click="changeNegative(artikel.id)"
            class="font-fantasy absolute ml-28 mt-12 border h-8 w-8 bg-red-700 rounded-xl"
            type="button"
            value="-"
          />
          <button id="titel" class="font-fantasy text-white text-left" @click="zoom(artikel.id)">{{ artikel.titel }}</button>
        </div>
      </div>
      <div  ref="resault">
        <p v-if = "finished && score === 100" class="text-white mx-5 my-5">Richtige Auswahl {{ score }} Punkte von 100 Punkte.</p>
        <p v-else-if="finished"  class="text-white mx-5 my-5">Das war leider nicht ganz korrekt. Du hast {{ score }} Punkte von maximal 100 Punkten erreicht. Die richtige Antwort währe gewesen die oberen viel Themen ja und die unteren zwei Themen nein. Pro richtiges Thema das hinzugefügt wurde +25 und pro falsches Thema das hinzugefügt wurde -25.</p>
      </div>
    </div>
  </template>
  
  <script>
  let id = null;
  export default {
    data() {
      return {
        zoomid: null,
        score: 0,
        artikels: [
          {
            id: id++,
            titel: "Positive Aspekte von Mais",
            text: "Mais ist eine wichtige Quelle von Kohlenhydraten, Ballaststoffen und Vitaminen wie B-Vitamine und Vitamin C. Es wird als Tierfutter und zur Herstellung von Lebensmitteln wie Popcorn, Tortillas und Maissirup verwendet. Mais kann auch als erneuerbare Energiequelle dienen, da es zur Herstellung von Ethanol und Biodiesel verwendet wird.",
            hinzugefuegt: 0,
          },
          {
            id: id++,
            titel: "Zucchinis sind gefährlich",
            text: "Zucchinis sind das Gegenteil von Mais. Mais ist alles Gute und Zucchinis sind alles schlechtes. Da Zucchinis so schlecht sind sollten sie nur mit Hass gegessen werden.",
            hinzugefuegt: 0,
          },
          { id: id++, 
            titel: "Mais der Erschaffer", 
            text: "Atome sind sekundäres Mais. Sekundäres Mais wurde aus primärem Mais erschaffen. Der erschaffer der Erde ist also Mais.", 
            hinzugefuegt: 0 },
          {
            id: id++,
            titel: "Die Wahrheit über Zellen",
            text: "Hatten sie schon mal Sonnenbrand? Das war nicht Sonnenbrand sonder Popkorn aus sekundärem Mais. Wer zu lange in der Sonne steht verwandelt sich von Mais zu Popkorn.",
            hinzugefuegt: 0,
          },
          {
            id: id++,
            titel: "Positive Aspekte von Zucchinis",
            text: "Zucchinis sind eine köstliche und nahrhafte Ergänzung zu jeder Mahlzeit. Sie sind kalorienarm, reich an Ballaststoffen, Vitaminen und Mineralstoffen, und können in vielen Rezepten verwendet werden.",
            hinzugefuegt: 0,
          },
          {
            id: id++,
            titel: "Erkennung von Verschwoerungs-theorien",
            text: "Verschwörungstheorien können anhand einiger Merkmale erkannt werden, wie fehlende oder manipulierte Beweise, irrationale Argumente, selektive Wahrnehmung und mangelnde Unterstützung von Experten oder Fakten.",
            hinzugefuegt: 0,
          },
        ],
      };
    },
    computed: {
      finished() {
        return this.artikels.every(article => article.hinzugefuegt !== 0);
      }
    },
    watch: {
      finished(newVal, oldVal) {
        this.calculateScore();
      },
      zoomid(newVal) {
      console.log('zoomid changed to', newVal);
    }
    },
    methods: {
      zoom(id) {
        if (this.zoomid === id) {
          this.zoomid = null;
        }
        else {
          this.zoomid = id;
        }
      },
      changePositive(id) {
        this.artikels[id].hinzugefuegt = 2;
      },
      changeNegative(id) {
        this.artikels[id].hinzugefuegt = 1;
      },
      reset(id) {
        this.artikels[id].hinzugefuegt = 0;
      },
      calculateScore() {
        for (let i = 0; i < 4; i++) {
            if (this.artikels[i].hinzugefuegt === 2) {
              this.score += 25;
            }
          }
          for (let i = 4; i < 6; i++) {
            if (this.artikels[i].hinzugefuegt === 2) {
              this.score -= 25;
            }     
          }
      }
    },
  };
  </script>
  
  