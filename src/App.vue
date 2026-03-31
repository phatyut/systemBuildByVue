<template>

<div class="relative h-screen w-screen flex" v-if="checkpage.aftercreated">

    <div class=" flex flex-cols relative h-full bg-gray-800 border-r border-white" :style="{ width: width + '%' }">
         
         <div class="absolute top-[45%] right-[0%] flex justify-center items-center rounded-l-full h-10 px-.5
                     bg-gray-700/90 cursor-pointer hover:text-white text-[15px]"
             @click="showandhide">
                                <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </div>
         <div class="relative w-full h-full">
                <Bodyleft></Bodyleft>
         </div>        
    </div>
    <div>{{ numberone }}</div>

        <div class="relative h-full bg-gray-800 border-r border-white" :style="{ width: w + '%' }">
            <div v-if="checkbodyleft" 
                 @click="hideandshow"
                 class="fixed top-[45%] left-0 flex justify-center items-center rounded-r-full h-8
                     bg-gray-700/90 cursor-pointer hover:text-white text-[15px] z-30" 
                >
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />          
            </div>
           

            <router-view></router-view>
        </div>
</div>

<div class="relative h-screen w-screen bg-gray-800 " v-else>  
   <router-view></router-view>  
   

</div>


  
</template>

<script>
import { ref,provide,reactive } from 'vue'
import { useRouter } from 'vue-router';

export default {

    setup() {
  const width = ref(20)
  const w = ref(80)
  const checkbodyleft = ref(false)

  const checkpage = reactive({            
    aftercreated: false
  })
  provide("checkpage", checkpage)

  const showandhide = () => {
    width.value = 0
    w.value = 100
    checkbodyleft.value = true
  }

  const hideandshow = () => {
    width.value = 20
    w.value = 80
    checkbodyleft.value = false
  }

  return {
    width,
    w,
    checkbodyleft,
    showandhide,
    hideandshow,
    checkpage
  }
}

}
</script>
