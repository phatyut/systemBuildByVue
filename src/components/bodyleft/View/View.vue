<template>
    <div class="flex flex-col relative w-full h-full gap-3 ">
                    <div class="relative w-full h-auto   " v-show="view.viewuseraccount">
                            <div class="bg-gray-600  rounded-md">
                                    <UserAcount></UserAcount>
                            </div>
                    </div>
                    <div class="flex  relative w-full h-full gap-3 ">
                            <div class="relative flex flex-col w-[70%] h-full  gap-2.5">
                                    <div class="relative w-full h-auto bg-gray-700 p-3 rounded-md flex justify-between items-center gap-3" v-show="view.viewtitle">
                                        TITLE: 
                                        <input type="text" 
                                                        class="outline-none w-full h-auto relative border-b-1 px-3 " 
                                                        v-model="textontitle" :disabled="checktitle" ref="inputref"> 
                                        <div class=" hover:cursor-pointer">
                                                <font-awesome-icon icon="fa-solid fa-pen-to-square" @click="edittitle"  />
                                        </div>
                                        <div>
                                                <font-awesome-icon icon="fa-solid fa-floppy-disk" @click="savetitle" />
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gray-700 flex flex-col p-2.5 gap-2.5 rounded-md">
                                            <div>View Demo</div>
                                            <div class="grid grid-cols-4 gap-2.5   *:bg-gray-500 *:h-20 *:rounded-md ">
                                                <div><Viewuser></Viewuser></div>
                                                <div><Viewproducts></Viewproducts> </div>
                                                <div><Viewproducts></Viewproducts> </div>
                                                <div><Viewproducts></Viewproducts> </div>
                                            </div>
                                    </div>
                                    <div class="relative w-full flex flex-col bg-gray-700 rounded-md ">
                                        <!-- <div>Years: {{ years }}</div> -->
                                        <div  class="relative w-full h-full p-3">
                                            <Viewyearly></Viewyearly>
                                        </div>
                                    
                                    </div>
                            </div>

                            <div class="relative w-[30%] h-full bg-gray-700 rounded-md">
                            
                            </div>
                    </div>
    </div>
</template>
<script>
import UserAcount from '../users/UserAcount.vue';
import Viewuser from './viewuser/Viewuser.vue';
import Viewproducts from './viewproducts/Viewproducts.vue';
import Viewyearly from './viewyearsly/Viewyearly.vue';


import { ref,nextTick,inject } from 'vue';
export default{
    components:{
        UserAcount,
        Viewuser,
        Viewproducts,
        Viewyearly
    },
    data(){
        return {
            
        }
    },


    setup(){
        
        const checktitle =ref(true);
        const view = inject("view");
        const textontitle = ref('Change you something..');
        let inputref= ref(null);
        const edittitle = ()=>{
            checktitle.value = false;
            nextTick(() => {
                    inputref.value?.focus()
                })
        }
        const savetitle =()=>{
             checktitle.value = true;
        }

        
        return {
            view,
            checktitle,
            textontitle,
            inputref,
            edittitle,
            savetitle
        }

    }
}
</script>