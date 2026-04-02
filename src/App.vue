 <!-- <div
        @click="hideandshow"
        class="fixed top-[45%] left-0 flex justify-center items-center rounded-r-full h-8
               bg-gray-700/90 cursor-pointer hover:text-white text-[15px] z-30"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div> -->


<template>
<div class="relative w-screen h-screen flex gap-0.5 ">
      <div class="relative w-[20%] h-full bg-gray-800">
          <Bodyleft></Bodyleft>
      </div>

      <div class="relative w-[80%] h-full bg-gray-800"  v-if="view.viewpage">
              <routerView></routerView>

      </div>

      <div class="fixed w-screen h-screen bg-red-200 left-0 top-0" v-else>
          <routerView></routerView>
      </div>

</div>
</template>
<script>
import { ref,provide ,reactive ,onMounted,watch} from 'vue';
export default{
  setup(){
    const view = reactive({
                          viewpage:false
                        });
    
    provide('view',view);


    onMounted(()=>{
      const prevents = localStorage.getItem('view.viewpage');
      if(prevents !==null){
        view.viewpage = JSON.parse(prevents)
      }
    });
     watch(()=>view.viewpage,(newval)=>{
          localStorage.setItem('view.viewpage',JSON.stringify(newval))
     })


    return {
      view
    }

  }
}
</script>