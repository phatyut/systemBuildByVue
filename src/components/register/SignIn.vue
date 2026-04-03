<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
      <h2 class="text-2xl font-bold text-center text-gray-700">Login</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-600">Email</label>
          <input 
            v-model="email"
            type="email"
          
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-600">Password</label>
          <input 
            v-model="password"
            type="password"
           
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <!-- Submit -->
        <button 
          type="submit"
          class="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>

import { inject } from 'vue';
import { useRouter } from 'vue-router';
export default{
        
        setup(){
                const router = useRouter();
                const view = inject("view");
                const handleLogin = ()=>{
                        view.viewpage= true;
                        router.push("/view")
                }


                return {
                        view,
                        handleLogin
                }
        }
}

</script>
