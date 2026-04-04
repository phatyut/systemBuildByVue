<template>
  <div class="relative w-full h-75  border-l-1 border-gray-300 border-b-1"></div>
  <div>{{ yearsly }}</div>
  <div>{{ d }}</div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const yearsly = ref(2026);
    const d = ref(null)

    const viewTime = () => {
        let d  = new Date();
        let newd = d.getDate() ;
        d.value = newd;
    }

    onMounted(() => {
      viewTime()
    })

    return {
      yearsly,
      d
      
    }
  }
}
</script>
