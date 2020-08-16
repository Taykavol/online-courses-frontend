<template>
  <!-- component -->
  <div class="  flex justify-center items-center h-screen  ">
    <div
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-3/4   "
    >
      <div class="-mx-3 md:flex mb-6">
        <div class=" w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 text-center"
            for="grid-first-name"
          >
            Course name
          </label>
          <input
            v-model="courseName"
            :class="[courseName.length==0?'border-red-500':'border-black','appearance-none block w-full bg-gray-100 text-gray-500 border  rounded py-3 px-4 ']"
            id="grid-first-name"
            type="text"
            placeholder="My course name"
          />
          <p  :class="courseName.length==0?'text-red-500 text-xs italic':' invisible text-xs italic'">Please fill out this field.</p>
        </div>
        <!-- <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-100 text-grey-darker border border-gray-100 rounded py-3 px-4"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div> -->
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-grey-dark text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-100 border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            >
              <option value="Openings">Openings</option>
              <option value="Middlegame">Middlegame</option>
              <option value="Endgame">Endgame</option>
              <option value="Games">Games</option>
              <option value="Basics">Basics</option>
               <!-- <option value="OPENINGS">Openings</option>
              <option value="MIDDLEGAME">Middlegame</option>
              <option value="ENDGAME">Endgame</option>
              <option value="GAMES">Games</option>
              <option value="BASICS">Basics</option> -->
            </select>
            <div
              class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-grey-darker"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-zip"
          >
            Zip
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            courseName:""
        }
    }
};
</script>

<style></style>
