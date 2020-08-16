<template>
  <div class="group inline-block ">
    <button
      class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
    >
      <span class="pr-1 font-semibold flex-1">{{email}}</span>
      <span>
        <svg
          class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </span>
    </button>
    <ul
      class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 w-full cursor-pointer absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
    >
      <nuxt-link to="/dashboard" class="rounded-sm px-3 py-1 hover:bg-gray-300 block ">Dashboard</nuxt-link>
      <nuxt-link to="/dashboard?tab=settings" class="rounded-sm px-3 py-1 hover:bg-gray-300 block">Settings</nuxt-link>
      <li v-if=" false " class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
        <button
          class="w-full text-left flex items-center outline-none focus:outline-none"
        >
          <span class="pr-1 flex-1">Langauges</span>
          <span class="mr-auto">
            <svg
              class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="bg-white border rounded-sm absolute top-0 right-0 
            transition duration-150 ease-in-out origin-top-left
            min-w-32
            "
        >
          <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
          <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
            <button
              class="w-full text-left flex items-center outline-none focus:outline-none"
            >
              <span class="pr-1 flex-1">Python</span>
              <span class="mr-auto">
                <svg
                  class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white border rounded-sm absolute top-0 right-0 
            transition duration-150 ease-in-out origin-top-left
            min-w-32
            "
            >
              <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
              <li class="px-3 py-1 hover:bg-gray-100">3+</li>
            </ul>
          </li>
          <li class="px-3 py-1 hover:bg-gray-100">Go</li>
          <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
        </ul>
      </li>
      <div @click="logout" class="rounded-sm px-3 py-1 hover:bg-red-200 flex justify-start">
          <div class=""><svg viewBox="0 0 20 20" fill="currentColor" class=" self-end w-6 h-6"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg></div>
          <div class="">Logout</div>
        </div>
          

    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        email() {
            return localStorage.getItem('email')||this.$store.state.user.email
        }
    },
    methods:{
        async logout() {
            await this.$store.dispatch('logout')
        }
    }
};
</script>

<style scoped>
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* .group:hover > ul {
  color: red;
  transform: scale(1);
} */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
