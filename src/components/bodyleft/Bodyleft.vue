<template>
    <div>
            <div>
            This profile
            <button @click="signout" class="bg-gray-700/50 flex gap-1 justify-center items-center px-1 rounded-[5px]">
                    <div class="text-[13px] font-bold">
                        SignOut
                    </div>
                    <div>
                        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
                    </div>
            </button>
            </div>
            <div class="relative w-full h-full flex flex-wrap gap-5 p-3.5 text-[15px] font-bold
                         *:text-gray-500 *:hover:text-white *:hover:underline">
                <router-link to="/view">View</router-link>
                <router-link to="/products">Products</router-link>
                <router-link to="/settings">Settings</router-link>
                <router-link to="/user">User</router-link>
               
            </div>
    </div>
</template>
<script>
import {ref,inject} from 'vue'
import { useRouter } from 'vue-router';
export default{
    setup(){
        const router = useRouter();
        const view =inject("view");
        const signout = ()=>{
            view.viewpage = false;
            router.push('/signin')
        };
        return {
            signout,
            view
        }
    }
}


</script>