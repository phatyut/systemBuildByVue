<template>
    <div class="relative w-full h-full  flex flex-col gap-3 ">
        <div class="flex justify-center items-center gap-3.5 relative w-full h-auto ">
            <button @click="this.componentId = 'Viewpro'">ViewPro</button>
            <button @click="this.componentId = 'Delpro'">DelPro</button>
            <button @click="this.componentId = 'Addpro'">AddPro</button>
            <button @click="this.componentId = 'Uppro'">UpPro</button>
        </div>
        <div class="relative w-full h-full bg-gray-700 text-white">
            <KeepAlive>
                <component :is="componentId"></component>
            </KeepAlive>
        </div>
        
    </div>
</template>
<script>
import Viewpro from './viewpro/Viewpro.vue';
import Addpro from './addpro/Addpro.vue';
import Delpro from './delpro/Delpro.vue';
import Uppro from './uppro/Uppro.vue';
import { ref } from 'vue';
export default{
    components:{
        Viewpro,
        Addpro,
        Delpro,
        Uppro
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