<template>
  <div class=" h-full bg-gray-700 w-64 ">
      <!-- component -->
<div class=" flex items-center  bg-gray-800 justify-center puzzle-scroll h-full w-64  overflow-y-auto nav">
		<div class="flex w-full h-full    p-4 ">
			<ul class="flex flex-col w-full">
				
				<li @click="setPuzzle(-1);isActive='puzzle-1'" class="my-px cursor-pointer">
					<div
					   :class="isActive==`puzzle-1 `?'flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 bg-gray-700':'flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700' ">
						<span class="flex items-center justify-center text-lg text-green-400">
							<svg fill="none"
								 stroke-linecap="round"
								 stroke-linejoin="round"
								 stroke-width="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 class="h-6 w-6">
								<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</span>
						<span class="ml-3">Add new</span>
					</div>
				</li>
				<li class="my-px">
					<span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Puzzles</span>
				</li>
				
				<li  @click="setPuzzle(index);isActive=`puzzle${index}`" v-for="(puzzle,index) in puzzles" :key="index" class="my-px cursor-pointer">
					<div 
					   :class="isActive==`puzzle${index}`?' flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 bg-gray-700':'flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700 ' ">
						<span class="flex items-center justify-center text-lg text-gray-500">
							{{index+1}}
						</span>
						<span class="ml-2">puzzle</span>
					</div>
				</li>
				
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
export default {
 props:{
	 puzzles:{
		 type:Array
	 },
	 setPuzzle:{
		 type:Function
	 },
	 isActiveProp:{
		 type:String,
	 }
 },
 data() {
	 return {
		 isActive:'puzzle-1'
	 }
 },
//  computed:{
// 	 isActive() {
// 		 return this.isActiveProp
// 	 }
//  },
 mounted() {
	 if(this.isActiveProp)
	 this.isActive = this.isActiveProp
	 console.log('isActive',this.isActive)
 }
}
</script>

<style scoped>
.nav {
    height: 100%;
}
.puzzle-scroll::-webkit-scrollbar {
            width: 4px;
            cursor: pointer;
            /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/

        }
        .puzzle-scroll::-webkit-scrollbar-track {
            background-color: rgba(229, 231, 235, var(--bg-opacity));
            cursor: pointer;
            /*background: red;*/
        }
        .puzzle-scroll::-webkit-scrollbar-thumb {
            cursor: pointer;
            background-color: #a0aec0;
            /*outline: 1px solid slategrey;*/
        }
</style>