<template>
    <div class="relative text-white w-full h-full flex flex-col justify-center items-center" >
            <div class=" relative w-80 h-100 gap-10 bg-gray-700/60 flex flex-col rounded-md p-8 ">
                    <div class="flex flex-col gap-2 ">
                        <div class="relative text-[18px] font-bold">Login with your account.</div>
                        <div>
                                <hr>
                        </div>
                    </div>
                    <div class="flex flex-col relative  gap-3">     
                            <div class="flex flex-col gap-2">
                                    <div @click="clickcounter">UserName{{ checkpage.aftercreated }}</div>
                                    <div><input type="text" class="w-full" placeholder="name/gmail"></div>
                            </div>
                            <div class="flex flex-col gap-2">
                                    <div>PassWord:</div>
                                    <div><input type="password" class="w-full" placeholder="Password"></div>
                            </div>
                    </div>
                <div class="  absolute bottom-8 right-8 justify-end items-center">
                <div><router-link to="/signup">SignUp</router-link></div>
                    <div >
                            <button class="bg-green-700/70 px-2.5 py-1 rounded-md hover:bg-green-700"
                                    @click="login"
                                    >
                                    LogIn
                            </button>
                    </div>
                </div>
            
        
            </div>
    </div>
</template>
<script>
import { inject, } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
        const router = useRouter();
       const checkpage = inject("checkpage");
       const login = ()=>{
        checkpage.aftercreated = true
        
        
        router.push("/view")
        
       }


       return {
        checkpage,
        login
       }
  }
};



</script>
<style scoped>
input{
    border: 1px solid gray;
    outline: none;
    height: 45px;
    border-radius: 5px;
    padding-left: 5px;
}

</style>