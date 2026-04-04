<template>
    <div class=" relative w-full h-full ">
    
    <input type="checkbox" v-model="view.viewuseraccount">
    <input type="checkbox" v-model="view.viewtitle">



    <button class="flex  px-2 py-1.5 gap-2 rounded-md bg-gray-400 hover:cursor-pointer" @click="savesetting">
        <div>Save</div>
        <div><font-awesome-icon icon="fa-solid fa-floppy-disk" /></div>
    </button>


    </div>
</template>
<script>
import { inject,watch } from 'vue';
export default{
    setup(){
        const view = inject("view");
        watch(()=>view.viewuseraccount,(newval)=>{
            if(newval){
                view.viewuseraccount = false

            }
        });
        watch(()=>view.viewtitle,(newval)=> {
                    if(newval){
                        view.viewtitle=true
                    }
        })

        const savesetting =()=>{
            alert("You clicked save button")
        }

        return {
            view,
            savesetting
        }
    }
}

</script>