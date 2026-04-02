<template>
    <div class="text-white">
    
    Status of checkview page : <span @click="signup">{{ view.viewpage }}</span>
    </div>
</template>
<script>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
export default{
    setup(){
        const router = useRouter();
        const view = inject("view");
        const signup = () =>{
            view.viewpage = true;
            router.push('/view')

        }
        return {
            view,
            signup
        }
    }
}
</script>