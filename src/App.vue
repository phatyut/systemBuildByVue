


<template>
<div class="relative w-screen h-screen flex gap-0.5 ">
      <div class="relative w-[20%] h-full bg-gray-800">
          <Bodyleft></Bodyleft>
      </div>

      <div class="relative w-[80%] h-full bg-gray-800 flex flex-col "  v-if="view.viewpage">
            
            <div class=" relative w-full h-full p-2 overflow-y-scroll">
              <routerView></routerView>
            </div>

      </div>

      <div class="fixed w-screen h-screen bg-gray-800 left-0 top-0" v-else>
          <routerView></routerView>
      </div>

</div>
</template>
<script>
import UserAcount from './components/bodyleft/users/UserAcount.vue';
import { ref,provide ,reactive ,onMounted,watch} from 'vue';
export default{
  components:{
          UserAcount
        },
  setup(){
    const view = reactive({
                          viewpage:false,
                          viewuseraccount:true,
                          viewtitle:true
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