<template>
 <!-- component -->
  <div class="flex justify-center w-full bg-white   mx-auto h-full text-base">
        <div class=" px-8 pb-4 flex flex-col  sm:w-1/2 ">
            <div class=" flex justify-center text-xl my-5 text-gray-700   uppercase tracking-tighter">
                <div @click="isLogin=true"  :class="{'text-purple-600 border-b-2 border-purple-600':isLogin}" class=" cursor-pointer">Login</div>
                <div class=" mx-2 lowercase">OR</div>
                <div @click="isLogin=false" :class="{'text-purple-600 border-b-2 border-purple-600':!isLogin}" class=" cursor-pointer">Create Account</div>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <div   class="text-xs text-center text-gray-500 uppercase">Easy and Fast</div>
                <!-- <div v-if="!isLogin"  class="text-xs text-center text-gray-500 uppercase">or Sign up with email</div> -->
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div  class="mt-2">
                <div @click="loginLichess" class="bg-gray-700 text-white  py-2 px-4 w-full rounded hover:bg-gray-600 flex justify-center cursor-pointer">
                    <div v-if="isLogin" class="">Login with Lichess.org</div>
                    <div v-if="!isLogin" class="">Sign up with Lichess.org</div>
                </div>
            </div>
            <div class="mt-4 flex items-center justify-between">
                <span class="border-b w-1/5 lg:w-1/4"></span>
                <div v-if="isLogin"  class="text-xs text-center text-gray-500 uppercase">or login with email</div>
                <div v-if="!isLogin"  class="text-xs text-center text-gray-500 uppercase">or Sign up with email</div>
                <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div class="mt-4">
                <input v-model="email" placeholder="Email" class=" text-gray-700 focus:outline-none  outline-none  border-b-2  py-1 px-1 block w-full appearance-none" type="email">
                <div v-if="!(email.includes('@')&&email.includes('.'))&&email!=''" class=" text-xs text-red-600 ">*Email incorrect</div>
            </div>
            <div v-if="isLogin" class="mt-4">
                <input v-model="loginPassword" placeholder="Password" class="  text-gray-700 focus:outline-none  border-b-2 rounded py-1 px-1 block w-full appearance-none " type="password">
            </div>
            <div v-if="!isLogin" class="mt-4">
                <input v-model="singUpPassword" placeholder="Password" class="text-gray-700 focus:outline-none  border-b-2 rounded py-1 px-1 block w-full appearance-none" type="password">
            </div>
            <div v-if="!isLogin" class="mt-4 px-1">
                <input v-model="singUpPasswordRepeat" placeholder="Repeat password" class="text-gray-700 focus:outline-none  border-b-2 rounded py-1  block w-full appearance-none" type="password">
                <div v-if="singUpPassword!=singUpPasswordRepeat" class=" text-xs text-red-600 ">*Passwords not matched</div>
            </div>

            <div v-if="isLogin" class="mt-8">
                <div @click="login " :class="{'hover:bg-blue-700 hover:text-white cursor-pointer':isPossibleToLogin}" class=" text-blue-700 border-2 border-blue-700 text-xl font-medium  py-1 px-4 w-full rounded text-center  ">Login</div>
                <div v-if="errorLogin" class=" text-sm text-red-600 text-center ">{{errorLogin}}</div>

            </div>
            <div v-if="!isLogin" class="mt-8">
                <button @click="signUp" class="hover:bg-green-700 text-green-700 border-2 border-green-700 text-xl font-medium  py-1 px-4 w-full rounded hover:text-white">Create Account</button>
            </div>

        </div>
        <img src="https://images.unsplash.com/photo-1527698334848-f475f9d99449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class=" hidden sm:block w-1/2 object-cover" alt="">

</div>
</template>

<script>
export default {
    data() {
        return {
            isLogin:true,
            singUpPassword:null,
            loginPassword:null,
            singUpPasswordRepeat:null,
            email:'',
            errorLogin:null
        }
    },
    created() {
        // console.log('Hey')
    },
    computed:{
        isPossibleToLogin() {
            return (this.email.includes('@')&&this.email.includes('.'))&&this.email!=''&&this.loginPassword!=''
        }
    },
    methods:{
        async signUp() {
            const user = {
                "password":this.singUpPassword,
                "email":this.email
            }
            const {data} = await this.$store.dispatch('register', user)
            if(this.$store.getters.isLoggedIn)
            this.$modal.hide('registration');
            // console.log(data.token)
        },
        async login() {
            if(!this.isPossibleToLogin) return console.log('not allows')
            const user = {
                "password":this.loginPassword,
                "email":this.email
            }
            const {data} = await this.$store.dispatch('login', user)
            if(data.error) this.errorLogin = data.error
            if(this.$store.getters.isLoggedIn)
            this.$modal.hide('registration');
        },
        async loginLichess() {
            await this.$store.dispatch('loginLichess')
        }
    }

}
</script>

<style>
.out-non {
    outline:none;
}
</style>