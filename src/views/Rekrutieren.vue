<script setup>
import job1 from '../components/job1.vue';
</script>

<script>
export default {
  components :{
    job1
},
  data(){
    return{
      entschieden: false,
      beitreten: true,
      erklärungMais: "Das ist Ja schon mal einen guten start in das Gespräch. Hier hast du eine Auswahl an Gesprächsthemen. Drücke auf den Titel der Gesprächsthemen um sie genauer durchzulesen. Falls du davon ausgehst, dass es positiv währe das jeweilige Thema anzusprechen drückst du auf + . Wenn das Thema nicht angesprochen werden darf auf - .",
      erklärungZucchetti: "Falls die Person nicht sofort dem Mais Fanclub beitreten will, helfen folgende Dinge: Auflisten wer schon alles beigetreten ist, positive Dinge über Mais erzählen, verweigern mehr Informationen über die Mais Geschichten zu erzählen bis die Person beigetreten ist.",
      disabled: false
    }
  },
  methods: {
    change(beitreten) {
      this.beitreten = beitreten
      if (!this.entschieden) {
        this.entschieden = true 
        this.scrolling()
      }
      this.disabled = true
    },
    scrolling() {
      const el = document.getElementById("arrows");
      el.scrollIntoView();
    }
  }
}

</script>

<template>  
  <div class="relative">
      <div class="bg-black min-h-screen">
          <header class="break-words py-5 bg-greenbg bg-bottom pb-12">
              <h1 class="break-words text-white font-bold text-5xl text-center font-fantasy">rekrutier Training</h1>
          </header>
          <div class="pb-5 bg-yellowbg bg-bottom">
            <div class="mx-20 pb-5">
                <h2 class="break-words font-fantasy font-bold text-4xl">Treniere Personen vom Mais-Fanclub zu überzeugen</h2>
                <p>Zuerst fragst du die Person ob sie dem Mais-Fanclub beitreten Möchte.</p>
            </div>    
          </div>
          <div>
              <div class="mx-auto max-w-xs rounded-full bg-yellow-500">
                  <h2 class="font-fantasy text-center">Drücke auf die Antwort die die Person gegeben hat.</h2>
              </div>
              <div class="flex justify-center">
                  <button :disabled="disabled" v-on:click="change(true)" class="mr-10 mt-5 w-32 h-32 rounded-full bg-yellow-400 active:bg-yellow-900" type="button">
                      <h2 class="active:text-white text-2xl align-middle active:align-top font-fantasy font-bold">Ja</h2>
                  </button>
                  <button :disabled="disabled" v-on:click="change(false)" class="ml-10 mt-5 w-32 h-32 rounded-full bg-green-900 active:bg-green-600" type="button">
                      <h2 class="text-white active:text-black text-2xl align-middle active:align-top font-fantasy font-bold">Nein</h2>
                  </button>
              </div>
          </div>
          <div id="arrows" class="flex justify-center">
            <img class="pr-20" v-if="beitreten&&entschieden" src="../assets/arrowYes.svg" alt="Pfeil">
            <img class="pl-20" v-else-if="!beitreten" src="../assets/arrowNo.svg" alt="Pfeil">
          </div>
          <div v-if="beitreten&&entschieden">
            <p class="text-white mx-5 my-10">{{ erklärungMais }}</p>
            <job1/>
          </div>
          <div v-else-if="!beitreten">
            <p class="text-white mx-5 my-10">{{ erklärungZucchetti }}</p>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>