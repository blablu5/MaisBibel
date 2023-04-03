<script>
import draggable from 'vuedraggable'
let id = 0;
export default {
  components: {
      draggable,
  },
  data() {
    return {
      drag: false,
      artikels: [
        { id: id++, titel: 'Positive Aspekte von Mais', text: 'Positive Aspekte von Mais', hinzugefügt: 0 },
        { id: id++, titel: 'Weshalb Zuchinis Mais angreifen', text: 'Weshalb Zuchinis Mais angreifen', hinzugefügt: 0  },
        { id: id++, titel: 'Mais ist Gott', text: 'Learn Vue', hinzugefügt: 0  },
        { id: id++, titel: 'Die Wahrheit über Zellen', text: 'Learn HTML', hinzugefügt: 0  },
        { id: id++, titel: 'Positive Aspekte von Zuchinis', text: 'Learn JavaScript', hinzugefügt: 0  },
        { id: id++, titel: 'Erkennung von Verschwöhrungs-theorien', text: 'Learn Vue', hinzugefügt: 0  }
        ]
    }
  }
}
</script>
  
<template>
  <draggable 
    v-model="artikels" 
    group="people" 
    @start="drag=true" 
    @end="drag=false" 
    item-key="id">
    <template #item="{element}">
      <div class="text-white">{{element.titel}}</div>
     </template>
  </draggable>
</template>
