<template>
 <!-- component -->
  <div class="flex flex-col  w-full bg-white   mx-auto h-full text-base">
      <div class=" relative">
        <img  class=" w-full h-56   object-cover" src="/images/photo-register.jpg" alt="">
        <div :class="{'bg-green-300':authType=='register','bg-blue-300':authType=='login'}" class=" absolute px-4 py-2  text-lg top-0 mt-8 text-gray-900 flex items-center justify-center">{{authType=="register"?'Registration':'Login'}}</div>
      </div>

        <div class=" px-5 h-full  flex flex-col   ">
            <!-- <div class=" flex justify-center text-xl my-5 text-gray-700   uppercase tracking-tighter">
                <div @click="isLogin=true"  :class="{'text-purple-600 border-b-2 border-purple-600':isLogin}" class=" cursor-pointer">Login</div>
                <div class=" mx-2 lowercase">OR</div>
                <div @click="isLogin=false" :class="{'text-purple-600 border-b-2 border-purple-600':!isLogin}" class=" cursor-pointer">Create Account</div>
            </div> -->
            <div class="mt-4 flex items-center justify-between">
                <!-- <span class="border-b w-10 border-gray-400"></span> -->
                <div  class="text-xs text-center tracking-tight   ">
                    <div class="inline-block">Recommended for</div>
                    <div class=" bg-blue-700 text-xs self-center px-1 rounded-full text-white  inline-block">GM</div>
                    <div class=" bg-red-700 text-xs self-center px-1 rounded-full text-white  inline-block">IM</div>
                    <div class=" bg-pink-500 text-xs self-center px-1 rounded-full text-white  inline-block">WGM</div>
                    and everyone
                </div>
                <!-- <span class="border-b  w-10 border-gray-400"></span> -->
            </div>
            <div  class="mt-4">
                <div @click="loginLichess" class="bg-gray-700 text-white  py-1 px-4 w-full rounded hover:bg-gray-600 flex justify-center cursor-pointer">
                    <div class=" text-base flex justify-center items-center font-neucha tracking-wide font-light"> <img src="/icons/lichess.png" class=" mr-1  w-8 h-8 inline-block" alt=""> Lichess.org   </div>
                </div>
            </div>
            <div class=" my-2 flex items-center justify-center">
                <span class="border-b w-full border-gray-400"></span>

                <div   class="text-xs text-center text-gray-700  mx-6 ">OR</div>
                <span class="border-b w-full border-gray-400 "></span>

            </div>
            <div class="  flex justify-center space-x-2 ">
                <svg @click="loginGoogle()" class="w-10 h-10 cursor-pointer duration-200 transform hover:scale-105" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path style="fill:#FBBB00;" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                    C103.821,274.792,107.225,292.797,113.47,309.408z"/>
                <path style="fill:#518EF8;" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"/>
                <path style="fill:#28B446;" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"/>
                <path style="fill:#F14336;" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                    C318.115,0,375.068,22.126,419.404,58.936z"/>
                </svg>
                <!-- <svg  aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16 w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> -->
                <svg @click="loginFacebook()" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14 w-10 h-10 text-blue-700 cursor-pointer duration-200 transform hover:scale-105" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                <svg @click="loginVK()" class="w-10 h-10 cursor-pointer duration-200 transform hover:scale-105" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 112.196 112.196" style="enable-background:new 0 0 512 512" xml:space="preserve">
                    <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <circle id="XMLID_11_" style="" cx="56.098" cy="56.098" r="56.098" fill="#4d76a1" data-original="#4d76a1"/>
                            </g>
                            <path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M53.979,80.702h4.403c0,0,1.33-0.146,2.009-0.878   c0.625-0.672,0.605-1.934,0.605-1.934s-0.086-5.908,2.656-6.778c2.703-0.857,6.174,5.71,9.853,8.235   c2.782,1.911,4.896,1.492,4.896,1.492l9.837-0.137c0,0,5.146-0.317,2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463   c-6.168-5.725-5.342-4.799,2.088-14.702c4.525-6.031,6.334-9.713,5.769-11.29c-0.539-1.502-3.867-1.105-3.867-1.105l-11.076,0.069   c0,0-0.821-0.112-1.43,0.252c-0.595,0.357-0.978,1.189-0.978,1.189s-1.753,4.667-4.091,8.636c-4.932,8.375-6.904,8.817-7.71,8.297   c-1.875-1.212-1.407-4.869-1.407-7.467c0-8.116,1.231-11.5-2.397-12.376c-1.204-0.291-2.09-0.483-5.169-0.514   c-3.952-0.041-7.297,0.012-9.191,0.94c-1.26,0.617-2.232,1.992-1.64,2.071c0.732,0.098,2.39,0.447,3.269,1.644   c1.135,1.544,1.095,5.012,1.095,5.012s0.652,9.554-1.523,10.741c-1.493,0.814-3.541-0.848-7.938-8.446   c-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525,0.069   c0,0-1.58,0.044-2.16,0.731c-0.516,0.611-0.041,1.875-0.041,1.875s8.24,19.278,17.57,28.993   C44.264,81.287,53.979,80.702,53.979,80.702L53.979,80.702z" fill=""/>
                        </g>
                    </g>
                </svg>

            </div>
            <!-- <div class="mt-4">
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
            </div> -->

        </div>

</div>
</template>

<script>
export default {
    props:{
        authType:{
            type:String
        }
    },
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
            const redirectUri = process.env.baseUrl+`/auth/?provider=lichess`;
            const state = Math.random().toString(36).substring(2);
            const authorizationUri = `https://oauth.lichess.org/oauth/authorize?response_type=code&client_id=${process.env.lichessClientId}&redirect_uri=${redirectUri}&scope=email:read&state=${state}`;
            window.location.href = authorizationUri;
        },
        loginGoogle() {
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.baseUrl}/auth/?provider=google-${this.authType}&response_type=code&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email&client_id=231498108232-bqrk6v0pmvnm8o8igcn6en22f42g41ls.apps.googleusercontent.com` 
        },
        // registerGoogle() {
        //     window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.baseUrl}/auth/?provider=google-register&response_type=code&access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email&client_id=231498108232-bqrk6v0pmvnm8o8igcn6en22f42g41ls.apps.googleusercontent.com` 
        // },
        loginFacebook() {
            // &scope=email
            window.location.href = `https://www.facebook.com/v9.0/dialog/oauth?client_id=314836566324405&redirect_uri=${process.env.baseUrl}/auth/?provider=facebook-${this.authType}&scope=email&state={st=state123abc,ds=123456789}`
        },
        loginVK() {
            window.location.href = `https://oauth.vk.com/authorize?client_id=7678450&display=page&redirect_uri=${process.env.baseUrl}/auth/?provider=vk&scope=email`
        }
    }

}
</script>

<style>
.out-non {
    outline:none;
}
</style>