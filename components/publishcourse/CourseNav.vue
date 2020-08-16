<template>
<div class=" h-full w-1/6 fixed">
      <!-- component -->
<div class=" flex items-center  bg-gray-800 justify-center puzzle-scroll h-full  overflow-y-auto ">
		<div class="flex w-full h-full    p-4 ">
			<div class="flex flex-col w-full">
				<div class="my-px">
					<div 
					   class="flex flex-row items-center h-12 px-2 rounded-lg text-gray-600 bg-gray-100 cursor-pointer">
						<span class="flex items-center justify-center text-lg text-gray-500">
							<svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</span>
						<span class="ml-1">Dashboard</span>
					</div>
				</div>

				<div class="my-px">
					<span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Puzzles</span>
				</div>
				
				<div @click="setComponent('course-settings')" class="my-px cursor-pointer ">
					<div 
					   :class="isActive==`puzzle`?' flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 bg-gray-700':'flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700 ' ">
						<span class="flex items-center justify-center text-lg text-gray-500">
							good
						</span>
						<span class="ml-2">puzzle</span>
					</div>
				</div>
				<div @click="setComponent('course-builder')" class="my-px cursor-pointer">
					<div 
					   :class="isActive==`puzzle`?' flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 bg-gray-700':'flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700 ' ">
						<span class="flex items-center justify-center text-lg text-gray-500">
							good
						</span>
						<span class="ml-2">puzzle</span>
					</div>
				</div>
				<div @click="$set(course,'status','VERIFY')" v-if="course.status=='BUILDING'"  class="my-px mt-auto">
					<div 
					   class="flex flex-row justify-center items-center h-12 px-2 rounded-lg text-gray-600 bg-yellow-400 cursor-pointer">
						<!-- <span class="flex items-center justify-center text-lg text-gray-800">
							<svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</span> -->
						<span class="ml-1 font-serif text-black text-xl ">Send to verify</span>
					</div>
				</div>
				<div v-if="course.status=='VERIFY'" class="my-px mt-auto">
					<div 
					   class="flex flex-row justify-center items-center h-12 px-2 rounded-lg text-gray-600 bg-gray-400 ">
						<!-- <span class="flex items-center justify-center text-lg text-gray-800">
							<svg viewBox="0 0 20 20" fill="currentColor" class="chevron-left w-6 h-6"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
						</span> -->
						<span class="ml-1 font-serif text-black text-xl ">Verifing...</span>
					</div>
				</div>
				
			</div>
		</div>
	</div>
  </div>
</template>
<script>

export default {
 props:{
     course:{
         type:Object
	 },
	 setComponent:{
		 type:Function
	 }
 },
 data(){
	 return {
		 isActive:false

	 }
 }

}
</script>

<style scoped>
.nav {
    width: 20rem;
    @media (max-width: 1280px ) {
        width: 15rem;
    }
    
}
</style>