<template>
    <div>
    
    <input type="checkbox" v-model="view.viewuseraccount">
    </div>
</template>
<script>
import { inject,watch } from 'vue';
export default{
    setup(){
        const view = inject("view");
        watch(()=>view.viewuseraccount,(newval)=>{
            if(newval){
                view.viewuseraccount = true
            }
        })

        return {
            view,
        }
    }
}

</script>