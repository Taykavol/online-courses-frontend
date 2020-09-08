<template>
  <div class=" w-full flex flex-col overflow-y-auto">
    <div class=" pt-2  px-10  flex-1 bg-gray-200   rounded-l-lg">
      <div class="mr-6  mt-8 py-2 h-full  flex flex-col bg-gray-100 rounded-lg">
        <!-- <div class=" h-64 flex">
          <div
            class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center"
          >
            <div class="">Last month</div>
            <div class="mt-1 text-3xl font-semibold">
              $ 1,579.20*% = $ 947.52
            </div>
            <div
              class="float-right text-base bg-green-400 rounded px-2 py-1 text-white cursor-pointer"
            >
              Finished
            </div>
          </div>
          <div
            class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center"
          >
            <div class="">This month</div>
            <div class="mt-1 text-3xl font-semibold">$ 1,579.20</div>
            <div
              class="float-right text-base bg-blue-400 rounded px-2 py-1 text-white cursor-pointer"
            >
              Active
            </div>
          </div>
          <div
            class=" w-1/3 bg-gray-300 m-4 flex flex-col justify-center items-center"
          >
            <div class="">Total earning</div>
            <div class="mt-1 text-3xl font-semibold">$ 17979.20</div>
            <div
              class="float-right text-base bg-green-400 rounded px-2 py-1 text-white cursor-pointer"
            >
              Finished
            </div>
          </div>
        </div> -->
        <div
          class="min-w-screen  bg-gray-200 flex items-center justify-center px-5 py-5"
        >
          <div class="w-full max-w-3xl">
            <div class="-mx-2 md:flex">
              <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                  <div
                    class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
                  >
                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                        Total revenue
                      </h4>
                      <h3
                        class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                      >
                       <span class=" font-mono">$</span> 3682  
                      </h3>
                      <p class="text-xs text-green-500 leading-tight">
                        ▲ 57.1%
                      </p>
                    </div>
                    <!-- <div class="absolute bottom-0 inset-x-0">
                      <canvas id="chart1" height="70"></canvas>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                  <div
                    class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
                  >
                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                        Students
                      </h4>
                      <h3
                        class="text-3xl text-gray-700 font-semibold leading-tight my-3"
                      >
                        11427
                      </h3>
                      <p class="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                    </div>
                    <!-- <div class="absolute bottom-0 inset-x-0">
                      <canvas id="chart2" height="70"></canvas>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-2">
                <div class="rounded-lg shadow-sm mb-4">
                  <div
                    class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden"
                  >
                    <div class="px-3 pt-8 pb-10 text-center relative z-10">
                      <h4 class="text-sm uppercase text-gray-500 leading-tight">
                        Instractor rating
                      </h4>
                      <h3
                        class="text-3xl text-gray-700 font-semibold leading-tight mt-3"
                      >
                        5 
                      </h3>
                      <span class=" text-xs">based on 10 reviews</span>
                      <!-- <p class="text-xs text-green-500 leading-tight">▲ 8.2%</p> -->
                    </div>
                    <!-- <div class="absolute bottom-0 inset-x-0">
                      <canvas id="chart3" height="70"></canvas>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div class=" p-4">
      <div class="">Last payments</div>
      <div class=" grid grid-cols-1 md:grid-cols-3 gap-3"> 
        <!-- component -->
      <!-- This is an example component -->
        <!-- <div class="m-auto">
          <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
            <div class="flex flex-row">
              <div class="px-2">
                <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                  </svg>
              </div>
              <div class="ml-2 ">
                <span class="font-semibold">Successfully Saved!</span>
                <span class="block text-gray-500">by user: mvkvol@yandex.ru</span>
              </div>
            </div>
          </div>
        </div> -->
        <div
          v-for="item in orders"
          :key="item.course.createdAt"
          class="mt-2 p-2 flex justify-between items-center bg-white shadow-lg rounded-lg
		    	font-semibold "
        >
          <!-- link -->
        
          <div class="flex">
            <!-- <img
              class="h-10 w-10 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RZ5sKLtFG-Q2xfXlLa5DbFsmF52Gc-C49B4s63CtSxLkzQY&s"
              alt="accelerator profile"
            /> -->
            <div class=" self-center">
                <svg width="24" height="24" class=" w-12 h-12" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                  </svg>
              </div>
            <div class="flex flex-col ml-4">
              <div class="">

              <p class=" truncate w-24">{{item.course.title}}</p>
              </div>
              <span class="text-sm text-gray-600">user: {{item.buyer.email}}</span>
              <span class=" text-gray-700" >{{item.createdAt.split('T')[0] }} </span>
            </div>
          </div>

          <div class=" text-2xl font-mono  ">${{item.price}}</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <!-- <aside-component class=" w-1/4"></aside-component> -->
  </div>
</template>

<script>
import AsideComponent from "~/components/dashboard/Aside.vue";
import axios from "axios"
export default {
  components: {
    AsideComponent
  },
  data() {
    return {
      orders:[]
    }
  },
  async created() {
    const data = await axios({url:"/order/all", method:"GET"})
    this.orders = data.data
    // console.log('createdAt',this.orders)
  }
};
</script>

<style></style>
