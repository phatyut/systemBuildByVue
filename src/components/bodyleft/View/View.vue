<template>
    <div class="flex flex-col relative w-full h-full gap-3 p-3">
                    <div class="relative w-full h-auto p-3 " v-show="view.viewuseraccount">
                            <div class="bg-gray-600">
                                    <UserAcount></UserAcount>
                            </div>
                    </div>
                    <div class="flex  relative w-full h-full gap-3 p-3">
                            <div class="relative flex flex-col w-[70%] h-full  gap-2.5">
                                    
                                    <div class="bg-gray-700 flex flex-col p-2.5 gap-2.5 rounded-md">
                                            <div>View Demo</div>
                                            <div class="grid grid-cols-4 gap-2.5   *:bg-gray-500 *:h-20 *:rounded-md ">
                                                <div><Viewuser></Viewuser></div>
                                                <div><Viewproducts></Viewproducts> </div>
                                                <div><Viewproducts></Viewproducts> </div>
                                                <div><Viewproducts></Viewproducts> </div>
                                            </div>
                                    </div>
                                    <div class="relative w-full flex flex-rows bg-gray-700 ">
                                        <!-- <div>Years: {{ years }}</div> -->
                                        <div >
                                            <Viewyearly></Viewyearly>
                                        </div>
                                    
                                    </div>
                            </div>

                            <div class="relative w-[30%] h-full bg-gray-700">
                            
                            </div>
                    </div>
    </div>
</template>
<script>
import UserAcount from '../users/UserAcount.vue';
import Viewuser from './viewuser/Viewuser.vue';
import Viewproducts from './viewproducts/Viewproducts.vue';
import Viewyearly from './viewyearsly/Viewyearly.vue';


import { inject } from 'vue';
export default{
    components:{
        UserAcount,
        Viewuser,
        Viewproducts,
        Viewyearly
    },


    setup(){
        const view = inject("view");

        
        return {
            view,
        }

    }
}
</script>