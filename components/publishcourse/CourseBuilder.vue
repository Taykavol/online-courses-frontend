<template>
<div class=" flex   w-full">
  <div class="  w-1/4 bg-gray-800 text-gray-400 p-6 fixed h-screen overflow-y-auto overscroll-contain   ">
    <!-- <div class="h-48"></div>
    <div class="h-48"></div>
    <div class="h-48"></div> -->
    <div class=" flex ">
					<NuxtLink 
            to='/teacher'
					   class="flex flex-row justify-center items-center h-10 px-2 rounded-lg text-gray-700 bg-gray-100 w-1/2 cursor-pointer hover:bg-gray-300 mr-3">
						<span class="flex items-center justify-center text-lg ">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14 w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
							<!-- <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> -->
						</span>
						<span  class="ml-2">Homepage</span>
						<!-- <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">3</span> -->
					</NuxtLink>
          <NuxtLink :to="`/course/${$route.params.id}`" target="_blank" v-if="!this.isSaving"
					   class="flex flex-row justify-center items-center h-10 px-2 rounded-lg text-white bg-teal-500 w-1/2 cursor-pointer hover:bg-teal-600">
             <div  class=" flex">
                <span class="flex items-center justify-center text-lg ">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                </span>
                <span class="ml-2">Preview</span>
             </div>
             
						<!-- <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">3</span> -->
					</NuxtLink>
          <div v-else class="flex flex-row justify-center items-center h-10 px-2 rounded-lg text-white bg-teal-500 w-1/2 cursor-pointer hover:bg-teal-600">
              <div  class="">
               <svg class="w-6 h-6 animate-spin" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
             </div>
          </div>
    </div>
    <div class="h-px bg-white opacity-50 mx-auto mt-2"></div>
    <div class=" flex my-4"> 
      <div @click="helpButton=!helpButton" v-if="helpButton" class=" cursor-pointer">
        <svg class="w-6 h-6 inline-block text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Help
      </div>
      <div @click="helpButton=!helpButton" v-else class="cursor-pointer ">
        <svg  class="w-6 h-6 inline-block text-blue-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        For publishing quality course you need satisfy some conditions by converting all
      <svg  class="w-5 h-5 mr-1 text-red-400 self-center inline-block " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>to
      <svg class="w-5 h-5  text-green-500 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>.
      Use tabs "Curriculum" and "Settings" for it and then button "Verification" will be avalable for pushing.
      </div>
    </div>
    <div class=" flex justify-center mt-4 z-10 relative">
        <div :class="{'bg-yellow-200 cursor-not-allowed text-gray-600 ':((!validateCurriculum(course)||totalPuzzles<5||totalPreview<2 ||totalPreview>5 ||totalDuration2<7200)||!validateSettings(courseProp)) ,'text-gray-800  hover:bg-yellow-500 bg-yellow-400 cursor-pointer':!((!validateCurriculum(course)||totalPuzzles<5||totalPreview<2 ||totalPreview>5||totalDuration2<7200)||!validateSettings(courseProp))}"
					   class="flex flex-row justify-center items-center h-10 px-2 rounded-lg   w-3/4   mr-3 ">
						<span class="flex items-center justify-center text-lg ">
              <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
							<!-- <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> -->
						</span>
						<span class="ml-2">Sent to Verification</span>
						<!-- <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">3</span> -->
					</div>
    </div>
    <div class="  flex justify-center">
      <div class=" -mt-6 z-0  border-gray-400 border-2 h-full w-full p-4 pt-8"> 

      <div class=" flex  ">
            <div 
              @click="isComponent='curriculum'"
              :class="{' bg-blue-200  text-white':isComponent=='curriculum'}"
              class="flex flex-row justify-center items-center h-10 px-2 rounded-lg text-gray-700 bg-gray-100 w-1/2 cursor-pointer hover:bg-blue-200 mr-3">
              <span class="flex items-center justify-center text-lg ">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                <!-- <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> -->
              </span>
              <span class="ml-1">Curriculum</span>
              <svg  v-if="!validateCurriculum(course)||totalPuzzles<5||totalPreview<2 ||totalPreview>5||totalDuration2<7200" class="w-5 h-5 mr-1 text-red-400 self-center ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
              <svg v-else class="w-5 h-5 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <!-- <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">3</span> -->
            </div>
            <div 
              @click="isComponent='settings'"
              :class="{' bg-blue-200  text-white':isComponent=='settings'}"
              class="flex flex-row justify-center items-center h-10 px-2 rounded-lg  w-1/2 cursor-pointer text-gray-800 bg-gray-100 hover:bg-blue-200 ">
              <span class="flex items-center justify-center text-lg ">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </span>
              <span class="ml-1">Settings</span>
              <svg  v-if="!validateSettings(courseProp)" class="w-5 h-5 mr-1 text-red-400 self-center ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
              <svg v-else class="w-5 h-5 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <!-- <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">3</span> -->
            </div>
      </div>
      </div>
    </div>
    <div class="flex justify-around mt-5">
      <div class=" flex items-center">
        <div class="">Course name</div>
        <svg v-if="!courseProp.title" class="w-4 h-4 ml-1 text-red-400 self-center " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
        <svg v-else class="w-4 h-4 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
      <div class="flex items-center">
        <div class="">Course image</div>
        <svg v-if="!courseProp.pictureUri" class="w-4 h-4 ml-1 text-red-400 self-center " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
        <svg v-else class="w-4 h-4 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
      <div class="flex items-center">
        <div class="">Promo video</div>
        <svg v-if="!courseProp.promoVideo" class="w-4 h-4 ml-1 text-red-400 self-center " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
        <svg v-else class="w-4 h-4 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
    <div class="flex justify-around mt-5">
      <div class=" flex flex-col ">
          <div class="">Puzzles</div>
          <div class="font-medium text-lg flex items-center mb-3 ">
          <div class=" ml-2">
          {{totalPuzzles}}<span v-if="totalPuzzles<5">/</span><span v-if="totalPuzzles<5" class=" text-green-500">5</span>
          </div>
          <div class="">
              <svg  v-if="totalPuzzles<5" class="w-5 h-5 mr-1 text-red-400 self-center ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
              <svg v-else class="w-5 h-5 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
      </div>
      <div class=" flex flex-col items-center ">
          <div class="">Free lessons</div>
          <div class="font-medium text-lg flex items-center mb-3 ">
            <div class=" ml-2">
            {{totalPreview}}<span v-if="totalPreview<2">/</span><span v-if="totalPreview<2" class=" text-green-500">2</span>
            </div>
            <div class=" flex">
                <svg  v-if="totalPreview<2 ||totalPreview>5" class="w-5 h-5 mr-1 text-red-400 self-center ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
                <svg v-else class="w-5 h-5 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <div v-if="totalPreview>5" class=" text-sm">(too much)</div>
            </div>
          </div>
      </div>
    </div>
    <div class=" ">
      <div class=" flex">
        <div class="  text-center font-medium text-lg text-yellow-400 ">
          Curriculum
        </div>
        <svg v-if="totalDuration2<7200" class="w-5 h-5 mr-1 text-red-400 self-center ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
        <svg v-else class="w-6 h-6 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <div class=" self-center ">

          
          {{totalDuration}}<span v-if="totalDuration2<7200">/</span><span v-if="totalDuration2<7200" class=" text-green-400">2:00:00</span>
        </div>
      </div>
      <div class="h-px bg-white opacity-50 mx-auto"></div>
      <draggable
        @sort="onSort"
        filter=".ignore-elements-module"
        :disabled="!sortableElement"
        drag-class="drag-class"
        class=" "
        :list="course"
        :animation="500"
        handle=".module-handle"
      >
      <div v-for="(item, index) in course" :key="item.id" class=" flex  justify-between  items-baseline">
        <a :href="`#item${index}`" class="  mt-1   flex items-center w-full select-none  hover:bg-gray-700 cursor-pointer truncate">
          <div class="">
            <svg v-if="validateModule(item)" class="w-4 h-4 mr-1 ml-auto text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <svg v-else class="w-4 h-4 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
          
          </div>
          <div class="  cursor-pointer truncate ">
            {{index+1}}. {{item.name}}
          </div>
        </a>
          <div class=" ">
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" class="module-handle cursor-move svg-inline--fa fa-expand-arrows-alt fa-w-14 text-gray-600 hover:text-gray-300 w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>
          </div>
      </div>
      </draggable>
    </div>
    
  </div>
  <div class=" w-1/4"></div>
  <!-- <transition name="page" mode="out-in"> -->
  <keep-alive>
    
 <div v-if="isComponent=='curriculum'" class=" flex flex-col  w-3/4 px-10  ">
   
    <!-- <div class="" @click="">Create module {{parent_index+2}} </div> -->
    <!-- <div class=" fixed w-5/6 z-40 ">
      <div class=" flex   h-12 bg-gray-800   ">
        <div class=" ml-auto flex justify-end items-center h-full">
          <div class=" text-3xl mr-2  font-mono text-gray-200 ">
            {{ totalDuration }}
          </div>
          <div v-if="totalDuration2<7200" class=" mr-12 text-red-600">
            <svg viewBox="0 0 20 20" fill="currentColor" class="ban w-6 h-6"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
          </div>
          <div v-if="totalDuration2>=7200" class=" mr-12 text-green-500">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="check-circle w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div @click="$router.push('/video')" class="my-px mr-16 ">
            <div
              class="flex flex-row justify-center items-center h-8 px-4 rounded-lg text-gray-800 bg-gray-200 cursor-pointer"
            >
              <div class=" text-lg font-serif  ">Preview</div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div
      class="   flex justify-center w-full  bg-transparent self-start opacity-0   hover:opacity-100  relative transition-opacity duration-1000"
     >
      <!-- Create lesson Icon -->
      <div
        @click="createEmptyModule(0)"
        class="  h-10 w-10   hover:text-green-700   cursor-pointer"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus-circle"
          class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
          ></path>
        </svg>
      </div>
    </div>

    <draggable
      @sort="onSort"
      filter=".ignore-elements-module"
      :disabled="!sortableElement"
      class=" "
      :list="course"
      :animation="500"
      group="mod"
      handle=".module-handle"
    >
      <transition-group :name="transitionName" tag="div">
        <div :id="`item${parent_index}`" v-for="(item, parent_index) in course" :key="item.id" class="">
          <div
            class=" bg-gray-200 border-2 rounded-lg cursor-move module-handle transition-all duration-1000  bigLesson "
          >
            <div class=" text-2xl  flex items-baseline mt-2 ml-4">
              <!-- Number module -->
              <div
                :class="
                  item.name != ''
                    ? ' span--module-access '
                    : ' span--module-fail'
                "
                class=" h-10 w-10 flex-none mr-2 flex justify-center items-center font-bold text-yellow-500 p-2"
              >
                {{ parent_index + 1 }}
              </div>
              <!-- Input module -->
              <div class="">
                <div
                  v-if="!showModuleInput[parent_index]"
                  @click="$set(showModuleInput, parent_index, true)"
                  class=" outline-none w-full max-w-full bg-gray-200 cursor-pointer ignore-elements-module "
                >
                  {{ item.name }}
                </div>
                <input
                v-focus
                  v-if="showModuleInput[parent_index] || item.name.length == 0"
                  :ref="'input' + item.id"
                  @click="$event.target.focus()"
                  @focus="stopSort"
                  @blur="onBlurName(parent_index)"
                  @change="onChangeName(parent_index)"
                  @keypress.stop.enter="onBlurName(parent_index);onChangeName(parent_index)"
                  class="  outline-none w-full max-w-full bg-gray-200 ignore-elements-module "
                  maxlength="60"
                  size="50"
                  type="text"
                  :value="item.name"
                  placeholder="Lesson name"
                />
              </div>
              <div
                @click="deleteEmptyModule(parent_index)"
                v-if="item.lessons.length == 0"
                class=" cursor-pointer ignore-elements-module px-2 text-3xl text-red-700 ml-auto   "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="trash-alt"
                  class="transition duration-200 h-12 w-12 transform hover:scale-125 text-red-700 cursor-pointer svg-inline--fa fa-trash-alt fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- First area between lessons -->
            <div
              class="filtered w-full flex flex-col justify-between module-handle "
            >
              <div
                class=" h-full w-full bg-transparent self-start opacity-0 cursor-move hover:opacity-100  relative transition-opacity duration-1000 "
              >
                <!-- First button add -->
                <div
                  @click="createLesson(-1, parent_index)"
                  class=" h-10 w-10  hover:text-green-700 ignore-elements-module cursor-pointer "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus-circle"
                    class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <draggable
              :animation="200"
              @sort="onSort"
              :list="course[parent_index].lessons"
              group="people"
              :disabled="!sortableElement"
              filter=".ignore-elements-lesson"
              handle=".lesson-handle"
              ghostClass="sortable-ghost"
              chosenClass="sortable-chosen"
              dragClass="sortable-drag"
            >
              <transition-group :name="transitionName2" tag="div">
                <div
                  v-for="(lesson, index) in course[parent_index].lessons"
                  :key="lesson.id"
                  class=" "
                >
                  <!-- Lesson -->
                  <div
                    :id="lesson.order"
                    class="flex mx-1 xl:mx-16  bg-white shadow-lg rounded-lg overflow-hidden  lesson relative ignore-elements-module lesson-handle "
                  >
                    <!-- Black stripe -->
                    <div
                      :class="{'bg-green-700':(lesson.video.vimeoId||lesson.puzzles.length)&&lesson.name}"
                      class="w-2 flex-none bg-red-500"
                    ></div>
                    <!-- Info -->
                    <div class="flex items-center px-2 py-3 ">
                      <!-- Number of chapter -->
                      <div class=" text-4xl  ">{{ lesson.order + 1 }}</div>
                      <!-- Main info, includes  -->
                      <div class="ml-3 ">
                        <!-- Lesson name -->
                        <div class=" ">
                          <input
                            v-focus="true"
                            placeholder="Chapter (require)"
                            @focus="stopSort"
                            @keypress.prevent.enter="
                            onBlurLessonInput(lesson); onChangeLessonInput(lesson);
                            "
                            @blur="onBlurLessonInput(lesson)"
                            @change="onChangeLessonInput(lesson)"
                            v-if="
                              showLessonInput[lesson.order] ||
                                lesson.name.length == 0
                            "
                            maxlength="60"
                            size="40"
                            type="text"
                            class=" text-xl text-gray-800 outline-none"
                            :value="lesson.name"
                          />
                          <div
                            v-if="!showLessonInput[lesson.order]"
                            @click="
                              showLessonInput[lesson.order] = !showLessonInput[
                                lesson.order
                              ];
                              showLessonInput.splice();
                            "
                            class="text-xl font-medium tracking-tight text-gray-800 inline-block cursor-pointer "
                          >
                            {{ lesson.name }}
                          </div>
                        </div>
                        <!-- Description -->
                        <div class=" ">
                          <div class=" flex description">
                            <!-- Div description  -->
                            <div
                              @click="
                                showDescriptionInput[
                                  lesson.order
                                ] = !showDescriptionInput[lesson.order];
                                showDescriptionInput.splice();
                              "
                              v-if="
                                !showDescriptionInput[lesson.order] &&
                                  lesson.description.length > 0
                              "
                              class="text-gray-600 break-words cursor-pointer w-full "
                            >
                              {{ lesson.description }}
                            </div>
                            <!-- Input description -->
                            <textarea
                              v-focus
                              placeholder="Description"
                              @focus="stopSort"
                              @blur="onBlurDescriptionInput(lesson)"
                              @change="onChangeDescriptionInput(lesson)"
                              @keypress.prevent.enter="
                               onBlurDescriptionInput(lesson); onChangeDescriptionInput(lesson);
                              "
                              v-if="showDescriptionInput[lesson.order]"
                              rows="1"
                              cols="80"
                              maxlength="150"
                              class=" outline-none w-full h-full rounded-lg break-words overflow-hidden "
                              type="text"
                              :value="lesson.description"
                            />

                            <!-- Button Add description -->
                            <div
                              class=" px-1 border-2 text-sm border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer align-text-top"
                              @click="
                                showDescriptionInput[
                                  lesson.order
                                ] = !showDescriptionInput[lesson.order];
                                showDescriptionInput.splice();
                              "
                              v-if="
                                !showDescriptionInput[lesson.order] &&
                                  lesson.description.length == 0
                              "
                            >
                              Add description
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Delete icon. -->
                    <div class=" ml-auto  flex  items-center flex-none  ">
                      <!-- Video -->
                      <!-- <div class="">Process: {{ process }}</div> -->
                      <div v-if='process[lesson.order]>0' class=" overflow-hidden flex flex-col">
                        <div
                          v-if="process[lesson.order]"
                          class="shadow  bg-gray-100 mt-2 w-32"
                        >
                          <div
                            class=" bg-teal-500 text-xs leading-none py-1 text-center text-white duration-500"
                            :style="'width:' + process[lesson.order] + '%'"
                          >
                            {{ process[lesson.order] }}%
                          </div>
                        </div>
                        <!-- <div v-if="lesson.video.duration&&lesson.video.duration!=0" class="">
                          Duration:
                          {{ Math.floor(lesson.video.duration / 60) }}:{{
                            Math.floor(lesson.video.duration) % 60 > 10
                              ? Math.floor(lesson.video.duration) % 60
                              : "0" + (Math.floor(lesson.video.duration) % 60)
                          }}
                        </div> -->
                      </div>
                      <!-- v-if="process[lesson.order]==0" -->
                      <svg v-if="process[lesson.order]==-1" class="w-10 h-10 animate-bounce text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <!-- <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> -->
                        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
                        <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" class=" overflow-visible w-10 h-10" >
                            <circle cx="20" cy="20"  r="20" stroke="red" fill="transparent" stroke-width="5"/>
                        </svg> -->
                      <div
                        :class="{'text-green-700':lesson.video.duration}"
                        class=" relative h-10 w-10 mx-2 cursor-pointer   transition duration-200 transform text-gray-700 hover:text-gray-900"
                      >
                      <div v-if="lesson.video.duration" class=" absolute lesson-duration ">
                        {{ Math.floor(lesson.video.duration / 60) }}:{{
                            Math.floor(lesson.video.duration) % 60 > 10
                              ? Math.floor(lesson.video.duration) % 60
                              : "0" + (Math.floor(lesson.video.duration) % 60)
                          }}
                      </div>
                        <input
                          accept="video/mp4,video/x-m4v,video/*"
                          :ref="`input${lesson.id}`"
                          @change="uploadVideo(`input${lesson.id}`, lesson)"
                          type="file"
                          class=" relative block h-10 w-10 overflow-hidden opacity-0 z-20 cursor-pointer "
                        />
                        <svg
                          version="1.1"
                          class="w-10 h-10 absolute inset-0  hover:text-gray-900 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="96.992px"
                          height="96.992px"
                          viewBox="0 0 96.992 96.992"
                          style="enable-background:new 0 0 96.992 96.992;"
                          xml:space="preserve"
                        >
                          <g>
                            <path
                              fill="currentColor"
                              d="M82.297,17.002L66.028,0.732C65.559,0.263,64.924,0,64.26,0H16.463c-1.381,0-2.5,1.119-2.5,2.5v91.992
                        c0,1.381,1.119,2.5,2.5,2.5h64.066c1.381,0,2.5-1.119,2.5-2.5V18.769C83.029,18.105,82.766,17.471,82.297,17.002z M67.787,58.854
                        c0,0.104-0.062,0.201-0.156,0.244c-0.035,0.018-0.074,0.023-0.111,0.023c-0.062,0-0.125-0.021-0.174-0.064l-9.236-7.953v7.985
                        c0,0.591-0.479,1.07-1.071,1.07H30.275c-0.591,0-1.07-0.479-1.07-1.07V37.902c0-0.59,0.479-1.07,1.07-1.07h26.762
                        c0.593,0,1.07,0.48,1.07,1.07v7.985l9.238-7.953c0.078-0.068,0.189-0.083,0.284-0.04s0.156,0.139,0.156,0.243L67.787,58.854
                        L67.787,58.854z M62.051,22.342c-0.337,0-0.658-0.133-0.896-0.371c-0.237-0.238-0.372-0.561-0.372-0.897l0.002-15.126L77.18,22.343
                        L62.051,22.342L62.051,22.342z"
                            />
                          </g>
                        </svg>
                        <!-- <svg class="w-8 h-8 absolute inset-0 text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>                 -->
                        <!-- <div class="text-center absolute top-0 left-0 ">{{lesson.video?lesson.video.name:''}}</div> -->
                      </div>

                      <modal
                        :name="'my-first-modal' + lesson.id"
                        width="100%"
                        :maxWidth="1200"
                        height="620px"
                        :adaptive="true"
                        transition="page"
                        @opened="stopSort"
                        @closed="startSort"
                        @before-close="askToCloseModalPuzzleBuilder"
                        class="  modal-css cursor-default  "
                      >
                        <puzzle-component
                          class=" "
                          :saveFunction="saveData"
                          :puzzles="lesson.puzzles"
                        ></puzzle-component>
                      </modal>
                      <!-- Puzzle -->
                      <div
                        @click="showPuzzleComponent(lesson.id)"
                        class=" w-8 h-8 transition duration-200 transform hover:scale-125 mr-8 cursor-pointer relative"
                      >
                        <div
                          class=" badge absolute bg-pink-600 flex justify-center"
                        >
                          <div class=" text-gray-100 font-bold">
                            {{ lesson.puzzles.length }}
                          </div>
                        </div>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chess-board"
                          class="svg-inline--fa fa-chess-board fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M255.9.2h-64v64h64zM0 64.17v64h64v-64zM128 .2H64v64h64zm64 255.9v64h64v-64zM0 192.12v64h64v-64zM383.85.2h-64v64h64zm128 0h-64v64h64zM128 256.1H64v64h64zM511.8 448v-64h-64v64zm0-128v-64h-64v64zM383.85 512h64v-64h-64zm128-319.88v-64h-64v64zM128 512h64v-64h-64zM0 512h64v-64H0zm255.9 0h64v-64h-64zM0 320.07v64h64v-64zm319.88-191.92v-64h-64v64zm-64 128h64v-64h-64zm-64 128v64h64v-64zm128-64h64v-64h-64zm0-127.95h64v-64h-64zm0 191.93v64h64v-64zM64 384.05v64h64v-64zm128-255.9v-64h-64v64zm191.92 255.9h64v-64h-64zm-128-191.93v-64h-64v64zm128-127.95v64h64v-64zm-128 255.9v64h64v-64zm-64-127.95H128v64h64zm191.92 64h64v-64h-64zM128 128.15H64v64h64zm0 191.92v64h64v-64z"
                          ></path>
                        </svg>
                      </div>
                      <!-- Divider -->
                      <div
                        class=" w-px bg-gray-900 opacity-25 self-stretch h-full  "
                      ></div>
                      <div class=" flex flex-col justify-center items-center mx-2 text-gray-700">
                        <svg v-if="lesson.preview" @click="setPreviewFalse(lesson)" class="w-10 h-10 mx-2 stroke-2 cursor-pointer hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        <svg v-else @click="setPreviewTrue(lesson)"  class="w-10 h-10 mx-2 stroke-2 cursor-pointer hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
                        <!-- <div class=" text-sm">preview</div> -->
                      </div>
                      <!-- Divider -->
                      <div
                        class=" w-px bg-gray-900 opacity-25 self-stretch h-full  "
                      ></div>
                      <!-- Delete Icon -->
                      <div
                        class=" rounded-full mx-6   "
                        @click.stop="deleteLesson(index, parent_index)"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="trash-alt"
                          class="transition duration-200 w-8 h-8 transform hover:scale-125 text-red-700 cursor-pointer svg-inline--fa fa-trash-alt fa-w-14"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- Area between lessons: -->
                  <div
                    class="module-handle h-full w-full bg-transparent self-start opacity-0 cursor-move  hover:opacity-100  relative transition-opacity duration-1000 "
                  >
                    <!-- Create lesson Icon -->
                    <div
                      @click="createLesson(index, parent_index)"
                      class=" h-10 w-10  hover:text-green-700  ignore-elements-module cursor-pointer"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus-circle"
                        class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </transition-group>
              <!-- End lesson -->
            </draggable>
          </div>
          <!-- <div class="" @click="">Create module {{parent_index+2}} </div> -->
          <div
            class="ignore-elements-module flex justify-center h-full w-full bg-transparent self-start opacity-0   hover:opacity-100  relative transition-opacity duration-1000"
          >
            <!-- Create lesson Icon -->
            <div
              @click="createEmptyModule(parent_index + 1)"
              class="  h-10 w-10  hover:text-green-600   cursor-pointer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus-circle"
                class=" transition duration-200 transform hover:scale-125  svg-inline--fa fa-plus-circle fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </transition-group>
    </draggable>

    <rawDisplayer class="col-3" :value="course" title="List" />
    <rawDisplayer class="col-3" :value="showLessonInput" title="List" />
    <rawDisplayer class="col-3" :value="courseWithoutOrdering" title="List" />
 </div>
  <CourseSettings v-else class=" w-3/4 p-8 " :course="courseProp"/>
  </keep-alive>
  <!-- </transition> -->
        <!-- <CourseBuilder class=" " v-else :course="course.curriculum"/> -->
</div>
</template>
<script>
// import Progress from 'easy-circular-progress'
// import VModal from 'vue-js-modal'
import CourseSettings from "~/components/publishcourse/CourseSettings"
import PuzzleComponent from "~/components/publishcourse/puzzlebuilder/PuzzleComponent.vue";
import draggable from "vuedraggable";
import RawDisplayer from "~/components/publishcourse/RawDisplayer";
import axios from "axios";
// import {tus} from "tus-js-client";
export default {
  directives: {
    focus: {
      // определение директивы
      inserted: function(el) {
        // console.log('sdf',el.value)
        // if(el.value)        
        el.focus();
      }
    }
  },
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    RawDisplayer,
    PuzzleComponent,
    CourseSettings
  },
  // watch:{

  // },

  computed: {
    totalDuration() {
      let temp = this.totalDuration2;
      // if (this.course.length == 0) return;
      // this.course.forEach(curriculum => {
      //   curriculum.lessons.forEach(lesson => (temp += lesson.video.duration));
      // });
      const hours = Math.floor(temp / 3600);
      const minutes = Math.floor(Math.floor(temp / 60) % 60);
      const second = (Math.floor(temp) % 3600) % 60;
      console.log(temp);
      return `${hours}:${minutes > 10 ? minutes : "0" + minutes}:${
        second > 10 ? second : "0" + second
      }`;
    },
    totalDuration2() {
      let temp = 0;
      if (this.course.length == 0) return;
      this.course.forEach(curriculum => {
        curriculum.lessons.forEach(lesson => (temp += lesson.video.duration));
      });
      return temp
    },
    totalPuzzles() {
      let temp = 0;
      let temp2 = 0;
      console.log('count Puzzles', temp)
      if (this.course.length == 0) return 0;
      this.course.forEach(curriculum => {
        curriculum.lessons.forEach(lesson => {temp += lesson.puzzles.length; lesson.puzzles.forEach(puzzle=>puzzle.order=temp2++);} );
      });
      console.log('Total puzzles:', temp)
      return temp
    },
    totalPreview() {
      let temp = 0
      if (this.course.length == 0) return 0;
      this.course.forEach(curriculum => {
        curriculum.lessons.forEach(lesson => {
          if(lesson.preview)
          temp++
        });
      })
      return temp
    },
    courseWithoutOrdering() {
      // const newCourse = JSON.parse(JSON.stringify(this.course));
      // for (let i = 0; i < this.course.length; i++) {
      //   for (let j = 0; j < newCourse[i].lessons.length; j++) {
      //     this.$delete(newCourse[i].lessons[j], "order");
      //   }
      // }
      return this.course;
    }
  },
  data() {
    return {
      videoDuration: [],
      process: [],
      showModuleInput: [],
      showLessonInput: [],
      showDescriptionInput: [],
      sortableElement: true,
      moduleID: 0,
      lessonID: 0,
      lastLessonOrder:0,
      transitionName: "",
      transitionName2: "",
      saveInterval:null,
      isComponent:'curriculum',
      course:this.courseProp.curriculum,
      isSaving:false,
      helpButton:true
    };
  },
  props: {
    courseProp: {
      type: Object,
      require: true
    },
  },

  created() {
    let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.$set(this.course[i].lessons[j], "order", temp);
          temp++;
        }
      }
      this.lastLessonOrder = temp;
  },
  notifications: {
      successNotification: { 
        title: 'Success',
        message: 'Very good',
        type: 'success' 
      },
      errorNotification: { 
        title: 'Problem',
        message: 'Something wrong, try later.',
        type: 'error' 
      },
    },
  methods: {
     saveData(seconds=0) {
       
      if(this.saveInterval) {
        console.log('hey')
        clearTimeout(this.saveInterval);
      } 
      // if(this.saveInterval.type)
      // this.saveInterval.clear()
        console.log('interval',this.saveInterval)
      
      this.isSaving=true
      this.saveInterval = setTimeout( async ()=>{
        try {
          const curriculum = JSON.stringify(this.courseWithoutOrdering)
          const good=  await axios({url:`/buildcourse/${this.$route.params.id}`,data:{curriculum,lessons:this.lastLessonOrder,duration:this.totalDuration2,totalPuzzles:this.totalPuzzles},method:"PUT",headers:{"Content-Type":"application/json"}})
          this.successNotification({message:"Saved!"})
          this.isSaving = false
          if(this.$store.getters.myBuildCourses)
          this.$store.commit('setMyBuildCourseCurriculum',{courseId:this.$route.params.id,curriculum})
          
        } catch (error) {
          this.errorNotification()
          this.isSaving = false
        }
      }, seconds*1000)
      // this.saveInterval
    },
    async uploadVideo(ref, lesson) {
      // if(lesson.video.vimeoId) {
      // }
      let tus = require("tus-js-client");
      const file = this.$refs[ref][0].files[0];
      if (!file) {
        return;
      }
      // Get size of file and duration
      const validateFile = file => {
        var video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = async () => {
          try {
            window.URL.revokeObjectURL(video.src);
            if (video.duration < 1) return;
            this.$set(lesson.video, "duration", video.duration);
            const curriculum = JSON.stringify(this.courseWithoutOrdering)
            const good=  await axios({url:`/buildcourse/${this.$route.params.id}`,data:{curriculum,lessons:this.lastLessonOrder,duration:this.totalDuration2,totalPuzzles:this.totalPuzzles},method:"PUT",headers:{"Content-Type":"application/json"}})
            console.log('Save')
            this.successNotification({message:"Video was downloaded"})
            this.isSaving = false
            if(this.$store.getters.myBuildCourses)
            this.$store.commit('setMyBuildCourseCurriculum',{courseId:this.$route.params.id,curriculum})
          } catch (error) {
            this.errorNotification()
            this.isSaving = false
          }
          
        };
        video.src = URL.createObjectURL(file);
      };
      this.$set(this.process, lesson.order, -1);

      // Get link and vimeoId to the system.
      const data = await axios({url:`video/video/${this.$route.params.id}`,method:"POST", data:{
        size:file.size
      },
      headers:{
        "Content-Type":"application/json"
      }})
      const {vimeoId,uploadLink} = data.data

      // console.log('Upload info:', vimeoId,uploadLink)
      // Set lesson video.
      if(lesson.video.vimeoId) await axios.delete(`/video/${lesson.video.vimeoId}/${this.$route.params.id}`)
      this.$set(lesson.video, "vimeoId", vimeoId);

      let upload = new tus.Upload(file, {
        uploadUrl: uploadLink,
        onError(error) {
          console.log("Failed because: " + error);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          this.$set(this.process, lesson.order, percentage);
          console.log(bytesUploaded, bytesTotal, percentage + "%");
        },
         onSuccess: async ()=> {
          validateFile(file);
          // this.course.splice()
          // setTimeout(()=>{

          // })
          // let tumbl =  await fetch(`https://api.vimeo.com/videos/${vimeoId}/pictures`, {
          //   method: "GET",
          //   headers: {
          //   Authorization: "Bearer 3e92014e848e2e2cf2be98351cf18204"
          // }
          // });
          // tumbl = await tumbl.json()
          // console.log('tumbe',tumbl)
          // await this.saveData()
          console.log("Download %s from %s", upload.file.name, upload.url);
        }
      });
      upload.start();

      if (event) event.target.value = "";
    },
    //on Change
    onBlurDescriptionInput(lesson) {
      this.showDescriptionInput[lesson.order] = false; 
      this.startSort();

    },
    onChangeDescriptionInput(lesson) {
      lesson.description = event.target.value;
      // this.showDescriptionInput[lesson.order] = false;
      this.saveData(4)
    },
    onBlurLessonInput(lesson) {
      this.showLessonInput[lesson.order] = false;
      this.startSort();
    },
    onChangeLessonInput(lesson) {
      // this.$set(lesson, "name", event.target.value)
      lesson.name = event.target.value;
      this.saveData(4)
    },
    onBlurName(index) {
      this.showModuleInput[index] = false
      // this.$set(this.showModuleInput, index, false);
      this.startSort();
    },
    onChangeName(index) {
      
      this.$set(this.course[index], "name", event.target.value);
      this.saveData()
    },
    startSort() {
      this.sortableElement = true;
    },
    stopSort() {
      this.sortableElement = false;
      clearTimeout(this.saveInterval)
    },
    onSort(trans2 = true) {
      this.transitionName2 = "";
      if (trans2) this.transitionName2 = "";
      let temp = 0;
      for (let i = 0; i < this.course.length; i++) {
        for (let j = 0; j < this.course[i].lessons.length; j++) {
          this.$set(this.course[i].lessons[j], "order", temp);
          temp++;
        }
      }
      this.lastLessonOrder = temp
      this.saveData(5)
    },
    // Lesson

    createLesson(number, group) {
      // let bool = false;
      // let j = 0;
      // let index;
      // while (bool == false && j < this.course.length) {
      //   bool = this.course[j].lessons.some(lesson => lesson.name == "");
      //   index = this.course[j].lessons.find(lesson => lesson.name == "");
      //   if (index) index = index.order;
      //   j++;
      // }

      // if (bool) {
      //   window.location.href = `#${index}`;
      // } else {
        this.transitionName2 = "list2";
        this.course[group].lessons.splice(number + 1, 0, {
          name: "",
          description: "",
          id: Math.random(),
          video: { id: Math.random(), duration: 0 },
          puzzles: []
        });
        this.onSort(false);
      // }
    },
    async deleteLesson(number, group) {
      const isDeleted = confirm("Are you sure, you want to delete lesson?");

      if (!isDeleted) return;
      this.$set(this.process, this.course[group].lessons[number].order, 0);
      // console.log('DELETED COURSE',this.course[group].lessons[number].video.vimeoId)
      if(this.course[group].lessons[number].video.vimeoId)
      await axios.delete(`/video/${this.course[group].lessons[number].video.vimeoId}/${this.$route.params.id}`)
      if (this.course[0].lessons.length == 1 && this.course.length == 1) {
        // this.course[0].name = "";
        // this.course[0].lessons[0].id = Math.random()
        this.course[0].lessons[0].name =""
        this.course[0].lessons[0].description = ""
        this.course[0].lessons[0].puzzles = []
        this.course[0].lessons[0].video = {
          // id: Math.random(),
          //   vimeoId: null,
            duration: 0
          }
        this.$set(this.course[0].lessons[0],'id',Math.random())
        
        // this.course[0].lessons[0] = {
        //   name: "",
        //   description: "",
        //   id: Math.random(),
        //   puzzles: [],
        //   video: {
        //     id: Math.random(),
        //     vimeoId: null,
        //     duration: 0
        //   }
        // };
        this.course[0].lessons.splice();
        // this.saveInterval=null
        console.log(this.saveInterval)

        const curriculum = JSON.stringify(this.courseWithoutOrdering)
        const good=  await axios({url:`/buildcourse/${this.$route.params.id}`,data:{curriculum,lessons:this.lastLessonOrder,duration:this.totalDuration2},method:"PUT",headers:{"Content-Type":"application/json"}})
        console.log('Save')
        if(this.$store.getters.myBuildCourses)
        this.$store.commit('setMyBuildCourseCurriculum',{courseId:this.$route.params.id,curriculum})
        // clearTimeout(this.saveInterval);
        // this.saveData()
        // thi
        // this.onSort(false);
        
      } else if (this.course[group].lessons.length == 1) {
        this.transitionName = "list";
        this.course.splice(group, 1);
        this.saveData()
        this.onSort(false);

      } else {
        this.transitionName2 = "list2";
        this.course[group].lessons.splice(number, 1);
        this.onSort(false);
      }
    },

    createEmptyModule(number) {
      // if(this.course.length>=3) return 
      this.transitionName = "list";
      for (let i = number; i < this.course.length; i++) {
        this.$set(this.course[i], "order", this.course[i].order + 1);
      }
      this.course.splice(number, 0, {
        order: number,
        id: Math.random(),
        name: "",
        lessons: [
          {
            name: "",
            description: "",
            id: Math.random(),
            puzzles: [],
            video: { duration: 0 }
          }
        ]
      });
      this.onSort()
    },
    deleteEmptyModule(index) {
      this.course.splice(index, 1);
      this.saveData()
    },
    // Puzzle module

    showPuzzleComponent(id) {
      this.$modal.show("my-first-modal" + id);
    },
    setPreviewFalse(lesson) {
      this.$set(lesson,'preview',false)
      this.saveData(5)
    },
    setPreviewTrue(lesson) {
      this.$set(lesson,'preview',true)
      this.saveData(5)
    },
    validateModule(chapter) {
     return !chapter.lessons.find(lesson=>!lesson.name) && chapter.name && !chapter.lessons.find(lesson=>!(lesson.video.vimeoId||lesson.puzzles.length>0))
    },
    validateCurriculum(course) {
    console.log('Val curric')
    return course.filter(chapter=> this.validateModule(chapter)).length==course.length
    },
    validateSettings(course) {
      console.log('Validate course')
      return course.title && course.pictureUri && course.promoVideo
    },
    askToCloseModalPuzzleBuilder(event) {
      console.log('cancel', event)
      if(!confirm('Are you want to close PuzzleBuilder?'))
      event.stop()
    }
  }
};
</script>

<style lang="scss" scoped>
.bigLesson {
  height: 120%;
}
.lesson {
  transition: transform 2s;
  @apply cursor-move;
}

.span {
  &--module-access {
    background: #183153;
    border-radius: 20%;
    
  }
  &--module-fail {
    background: #b40036;
    border-radius: 20%;
    
  }
}
textarea {
  resize: none;
}
.badge {
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.description {
}
.list-leave-active {
  transition: all 0s;
  opacity: 0;
  position: absolute;
}
.list-move {
  transition: all 0.5s;
}
.list-enter-active {
  transition: all 0.5s;
  transform: translate(30px);
  position: absolute;
}
.list-enter {
  opacity: 0;
}
.list-enter-to {
  
  // transition: all .5s;
}
.list2-leave-active {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
}

.list2-enter-active {
  position: absolute;
}

input[type="file"]::-webkit-file-upload-button {
  cursor: pointer;
}
.sortable-ghost {
  opacity: 0;
}
// .prisma-bg {
//   background:  center -50px no-repeat, radial-gradient( 37.86% 77.79% at 50% 50%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747;
// }

.sortable-drag {
  opacity: 1;
}

.trash {
  transform: translate(50%, -50%);
}

.modal-css {
  z-index: 10;
}
.modal-css-2 {
  z-index: 2;
}
.lesson-duration {
  font-size: .8rem;
   bottom: -1rem;
   left: .4rem;
  //  right: 0;
  //  left: 50%;
}
.drag-class {
  // z-index: 100;
  // color:red !important;
  // opacity: 1 !important;
  // z-index: 100;
}
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  @apply bg-gray-300;
  // background: orange;
}
*::-webkit-scrollbar-thumb {
  @apply bg-gray-500  rounded-lg m-px;
  // background-color: blue;
  // border-radius: 20px;
  // border: 3px solid orange;
}
</style>
