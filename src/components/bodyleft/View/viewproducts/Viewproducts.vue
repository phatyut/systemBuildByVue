<template>
    <div>{{ viewproducts }}</div>
</template>
<script>
import { ref } from 'vue';
export default {
        setup(){
            const viewproducts = ref(100);
            return {
                viewproducts
            }
        }

}

</script>