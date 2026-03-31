<template>
    <div class="relative w-full h-full  flex flex-col">
        <div class="flex justify-center items-center gap-3.5 relative w-full h-auto">
            <button @click="this.componentId = 'Viewpro'">ViewPro</button>
            <button>DelPro</button>
            <button @click="this.componentId = 'Addpro'">AddPro</button>
            <button>UpPro</button>
        </div>
        <div>
            <KeepAlive>
                <component :is="componentId"></component>
            </KeepAlive>
        </div>
        
    </div>
</template>
<script>
import Viewpro from './viewpro/Viewpro.vue';
import Addpro from './addpro/Addpro.vue';
import { ref } from 'vue';
export default{
    components:{
        Viewpro,
        Addpro
    },
    data(){
        return {
            componentId:'Viewpro'    
        }
    },setup(){
        const resultProduct = ref(0);
        return {
            resultProduct
        }
    }
}

</script>