<template>
  <aside
    class=" bg-white border  flex flex-col  
		 rounded-r-lg  relative "
  >
  <!-- <svg class="w-8 h-8 absolute right-0 -mt-10 cursor-pointer text-gray-800  mr-2 transform duration-150 hover:scale-110" height="640pt" viewBox="-30 0 640 640" width="640pt" xmlns="http://www.w3.org/2000/svg"><path d="m300.585938 101.449219-15.308594-101.449219h-224.601563c-33.820312 0-60.675781 27.554688-60.675781 61.371094v424.71875c0 33.816406 26.855469 60.8125 60.675781 60.8125h213.054688l153.492187-232.402344v-165.734375zm0 0" fill="#00acea"/><path d="m285.277344.140625 141.527344 148.625h-94.210938c-26.164062 0-47.316406-21.152344-47.316406-47.316406zm0 0" fill="#00efd1"/><g fill="#083863"><path d="m279.851562 318.675781h-181.324218c-7.652344 0-13.917969 6.265625-13.917969 13.917969 0 7.65625 6.265625 13.914062 13.917969 13.914062h181.324218c7.652344 0 13.917969-6.257812 13.917969-13.914062 0-7.652344-6.121093-13.917969-13.917969-13.917969zm0 0"/><path d="m98.527344 276.929688h140.96875c7.652344 0 13.917968-6.261719 13.917968-13.917969 0-7.652344-6.265624-13.914063-13.917968-13.914063h-140.96875c-7.652344 0-13.917969 6.261719-13.917969 13.914063 0 7.65625 6.265625 13.917969 13.917969 13.917969zm0 0"/><path d="m234.066406 389.648438h-135.539062c-7.652344 0-13.917969 6.265624-13.917969 13.914062 0 7.65625 6.265625 13.917969 13.917969 13.917969h135.539062c7.65625 0 13.917969-6.261719 13.917969-13.917969 0-7.648438-6.261719-13.914062-13.917969-13.914062zm0 0"/></g><path d="m426.804688 286.8125c86.28125 12.101562 152.65625 86.136719 152.65625 175.753906 0 97.96875-79.457032 177.433594-177.425782 177.433594-67.351562 0-126.078125-37.574219-156-92.960938-13.636718-25.1875-21.429687-53.992187-21.429687-84.609374 0-97.96875 79.460937-177.429688 177.429687-177.429688 8.351563.140625 16.558594.699219 24.769532 1.8125zm0 0" fill="#fedb41"/><path d="m458.671875 449.488281h-42.582031v-43.277343c0-7.65625-6.261719-13.917969-13.917969-13.917969-7.652344 0-13.914063 6.261719-13.914063 13.917969v43.277343h-43.277343c-7.65625 0-13.917969 6.261719-13.917969 13.914063 0 7.65625 6.261719 13.921875 13.917969 13.921875h43.277343v42.582031c0 7.652344 6.261719 13.917969 13.914063 13.917969 7.65625 0 13.917969-6.265625 13.917969-13.917969v-42.582031h42.582031c7.65625 0 13.914063-6.265625 13.914063-13.921875 0-7.652344-6.257813-13.914063-13.914063-13.914063zm0 0" fill="#083863"/></svg> -->
  <svg @click="getOrders" version="1.1"  class="w-8 h-8 absolute right-0 -mt-10 cursor-pointer text-gray-800  mr-2 transform duration-150 hover:scale-110" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 512.548 512.548" style="enable-background:new 0 0 512.548 512.548;" xml:space="preserve">
      <path style="fill:#FFC107;" d="M266.941,0c-5.891,0-10.667,4.776-10.667,10.667v234.667c0,5.891,4.776,10.667,10.667,10.667h234.667
        c5.891,0,10.667-4.776,10.667-10.667C512.121,109.903,402.371,0.153,266.941,0z"/>
      <path style="fill:#2196F3;" d="M382.034,452.117L234.941,263.019V32c0-5.891-4.776-10.667-10.667-10.667
        c-123.52,0-224,110.059-224,245.333C0.427,402.097,110.177,511.847,245.607,512c49.173,3.821,97.795-12.45,134.763-45.099
        C384.837,463.237,385.575,456.683,382.034,452.117z"/>
      <path style="fill:#4CAF50;" d="M501.607,277.333H288.274c-5.891,0.001-10.666,4.778-10.664,10.669c0,2.437,0.835,4.8,2.366,6.696
        l138.667,171.669c1.86,2.308,4.596,3.737,7.552,3.947h0.747c2.699,0.002,5.299-1.02,7.275-2.859
        c49.69-46.469,77.943-111.423,78.059-179.456C512.274,282.109,507.499,277.333,501.607,277.333z"/>
  </svg>
  <!-- <svg @click="getOrders" :class="{' text-blue-700':ordersVisible}" class="w-8 h-8 absolute right-0 -mt-10 cursor-pointer text-gray-800  mr-2 transform duration-150 hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg> -->
  <!-- <svg class="w-8 h-8 absolute right-0 -mt-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg> -->
  <div class=" border-b flex p-2">
    <div class=" w-1/2 flex flex-col items-center ">
      <div class="text-gray-600">Payout method<span class=" text-red-500">*</span> </div>
      <!-- <div class=" mt-1 text-green-800 hover:text-white hover:bg-green-800 duration-150 border-green-800 rounded-full border-2 px-2 cursor-pointer">Select</div> -->
      <!-- <div @click="binanceAuth()" class=" bg-blue-600 px-2 cursor-pointer text-white ">Binance</div>
      <div @click="paypalAuth()" :class="{'bg-green-700':profile.paymentMethod=='PAYPAL','bg-blue-600':profile.paymentMethod=='NO'}" class="  px-2 cursor-pointer text-white">PayPal</div> -->
      <Select v-if="profile" 
      :options="[
      {title:'PAYPAL',text:'PayPal',fn:paypalAuth, url:'images/payment/paypal.png'},
      {title:'BINANCE',text:'Binance',fn:binanceAuth, url:'images/payment/binance.jpg'},
      ]" 
      :currentValue='profile.paymentMethod=="NO"?"Not selected":profile.paymentMethod'>
      
      
      </Select>
     
     
      <!-- paypalAuth() -->
    </div>
    <div class=" w-1/2 flex flex-col items-center ">
      <div class="text-gray-600">Your profit</div>
      <div class=" text-2xl font-semibold">{{profile.profit*100}}%</div>
    </div>
    <div class="flex flex-col"></div>
  </div>
  <div class=" border-b flex">
    <div class=" flex flex-col items-center w-1/3 mb-2">
      <span class="mt-4 text-gray-600">{{getMonth(date.getMonth()-2) }} {{date.getMonth()-2>=0?date.getFullYear():date.getFullYear()-1 }}</span>
      <span class=" text-2xl ">${{invoice2LastMonth?invoice2LastMonth.total:'0'}} </span>
      <span :class="{'text-green-600':invoice2LastMonth.status=='PAYOUT', 'text-orange-500':invoice2LastMonth.status=='PENDING'}" class="  -mt-2 lowercase ">{{invoice2LastMonth.status}}</span>
    </div>
    <div class=" flex flex-col items-center w-1/3">
      <span class="mt-4 text-gray-600">{{getMonth(date.getMonth()-1) }} {{date.getMonth()-1>=0?date.getFullYear():date.getFullYear()-1 }}</span>
      <span class=" text-2xl ">${{invoiceLastMonth?invoiceLastMonth.total:'0'}} </span>
      <span :class="{'text-green-600':invoiceLastMonth.status=='PAYOUT', 'text-orange-500':invoiceLastMonth.status=='PENDING'}" class="  -mt-2 lowercase">{{invoiceLastMonth.status}}</span>

    </div>
    <div class=" flex flex-col items-center w-1/3">
      <span class="mt-4 text-gray-600">{{getMonth(date.getMonth()) }} {{date.getFullYear()}}</span>
      <span class=" text-2xl ">${{invoiceThisMonth?invoiceThisMonth.total:'0'}} </span>
      <span class=" text-blue-500 -mt-2 ">current</span>
    </div>
  </div>
  <div :class="{'mb-2':!ordersVisible}" class=" flex justify-around  ">
    <div class=" flex flex-col items-center w-1/2">
      <span class="mt-4 text-gray-600">Monthly earnings</span>
      <span class=" text-2xl ">${{invoiceThisMonth?invoiceThisMonth.total:'0'}} </span>
    </div>
    <div class="flex flex-col items-center w-1/2">
      <span class="mt-4 text-gray-600">Next payout </span>
      <span class=" text-2xl  ">{{currentDate}}</span>
    </div>
  </div>

    <div v-if="orders&&ordersVisible" class="mt-4 flex items-center">
      <span class="  tracking-wide text-center w-full text-xl">Last payments</span>
    </div>
    <div v-if="orders&&ordersVisible" class="">
      <div v-for="(item,index) in orders" :key="index" class=" border-t p-4 flex w-full bg-white capitalize ">
        <!-- <div class="h-10 w-10 rounded-full self-center  bg-orange-500 flex justify-center items-center text-3xl text-white ">{{item.buyer.email?item.buyer.email[0]:item.buyer.lichessId[0]}}</div> -->
        <img class=" w-10 h-10" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9ImZsYXQiPjxwYXRoIGQ9Im0yOTYgMzQ0IDE0Ny44ODIgNzMuOTQxYTYwIDYwIDAgMCAxIDMyLjU2NCA0NS4xOGwzLjU1NCAyNC44NzloLTQ0OGwzLjU1NC0yNC44NzlhNjAgNjAgMCAwIDEgMzIuNTY0LTQ1LjE4bDE0Ny44ODItNzMuOTQxeiIgZmlsbD0iI2VhZWFlOCIgZGF0YS1vcmlnaW5hbD0iI2VhZWFlOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMDggMzY4aDk2djEyMGgtOTZ6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTIxNiAzMTJ2MzJsLTggMjRoNDggNDhsLTgtMjR2LTMyeiIgZmlsbD0iI2ZkYzlhNiIgZGF0YS1vcmlnaW5hbD0iI2ZkYzlhNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNjAgMjAwdi03My42NzVhNTMuOSA1My45IDAgMCAwIC0xNS43ODYtMzguMTExbC0xNi40MjgtMTYuNDI4YTUzLjkgNTMuOSAwIDAgMCAtMzguMTExLTE1Ljc4NmgtNTIuODMxYTUzLjkgNTMuOSAwIDAgMCAtNDQuODQ0IDI0bC05LjQ2NCAzLjE1NWE0NC42NTggNDQuNjU4IDAgMCAwIC0yMy4wMzYgMTcuNTk0IDQ0LjY2NiA0NC42NjYgMCAwIDAgLTcuNSAyNC43NzN2NzQuNDc4eiIgZmlsbD0iIzU1MzAwYiIgZGF0YS1vcmlnaW5hbD0iIzU1MzAwYiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yOTYgMzEydjE5LjY0Yy0uMDguMDYtLjE3LjExLS4yNS4xN2E3MC45IDcwLjkgMCAwIDEgLTc5Ljc1LS4xN3YtMTkuNjR6IiBmaWxsPSIjZTZhZjg5IiBkYXRhLW9yaWdpbmFsPSIjZTZhZjg5IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzMjhhNzAuOSA3MC45IDAgMCAxIC02NS44MjctNDQuNTY3IDE5OC4xNTYgMTk4LjE1NiAwIDAgMSAtMTQuMTczLTczLjU5NnYtNTcuODM3bDI0LTQwLjczIDUuMTE0IDQuMTg1YTEyNi4yNjYgMTI2LjI2NiAwIDAgMCA3OS45NjIgMjguNTQ1aDUwLjkyNHY2NS44MzdhMTk4LjE1NiAxOTguMTU2IDAgMCAxIC0xNC4xNzMgNzMuNiA3MC45IDcwLjkgMCAwIDEgLTY1LjgyNyA0NC41NjN6IiBmaWxsPSIjZmRjOWE2IiBkYXRhLW9yaWdpbmFsPSIjZmRjOWE2IiBzdHlsZT0iIj48L3BhdGg+PGcgZmlsbD0iIzU1MzAwYiI+PHBhdGggZD0ibTMwNCAxODRhNy45ODggNy45ODggMCAwIDEgLTIuNTMxLS40MTNsLTI0LThhOCA4IDAgMSAxIDUuMDYtMTUuMTc4bDI0IDhhOCA4IDAgMCAxIC0yLjUyOSAxNS41OTF6IiBmaWxsPSIjNTUzMDBiIiBkYXRhLW9yaWdpbmFsPSIjNTUzMDBiIiBzdHlsZT0iIj48L3BhdGg+PGNpcmNsZSBjeD0iMjkwIiBjeT0iMjAyIiByPSIxMCIgZmlsbD0iIzU1MzAwYiIgZGF0YS1vcmlnaW5hbD0iIzU1MzAwYiIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTIwOCAxODRhOCA4IDAgMCAxIC0yLjUyOS0xNS41OTFsMjQtOGE4IDggMCAxIDEgNS4wNiAxNS4xNzhsLTI0IDhhNy45OTIgNy45OTIgMCAwIDEgLTIuNTMxLjQxM3oiIGZpbGw9IiM1NTMwMGIiIGRhdGEtb3JpZ2luYWw9IiM1NTMwMGIiIHN0eWxlPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIyMjIiIGN5PSIyMDIiIHI9IjEwIiBmaWxsPSIjNTUzMDBiIiBkYXRhLW9yaWdpbmFsPSIjNTUzMDBiIiBzdHlsZT0iIj48L2NpcmNsZT48L2c+PHBhdGggZD0ibTI0Ni4xMTEgMjgwaC02LjExMWE4IDggMCAwIDEgMC0xNmg2LjExMWE2OC4xMTggNjguMTE4IDAgMCAwIDMwLjMxMS03LjE1NSA4IDggMCAxIDEgNy4xNTYgMTQuMzEgODQuMjA5IDg0LjIwOSAwIDAgMSAtMzcuNDY3IDguODQ1eiIgZmlsbD0iI2U2YWY4OSIgZGF0YS1vcmlnaW5hbD0iI2U2YWY4OSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNjQgMjQ4aC0xNmE4IDggMCAwIDEgLTgtOHYtMjRhOCA4IDAgMCAxIDE2IDB2MTZoOGE4IDggMCAwIDEgMCAxNnoiIGZpbGw9IiNlNmFmODkiIGRhdGEtb3JpZ2luYWw9IiNlNmFmODkiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMTc2IDE3NmgtMTEuMDU2YTIwLjk0NCAyMC45NDQgMCAwIDAgLTIwLjk0NCAyMC45NDR2MTQuMTEyYTIwLjk0NCAyMC45NDQgMCAwIDAgMi4yMTEgOS4zNjYgMjAuOTQ0IDIwLjk0NCAwIDAgMCAxOC43MzMgMTEuNTc4aDE5LjA1NnoiIGZpbGw9IiNmZGM5YTYiIGRhdGEtb3JpZ2luYWw9IiNmZGM5YTYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzM2IDE3NmgxMS4wNTZhMjAuOTQ0IDIwLjk0NCAwIDAgMSAyMC45NDQgMjAuOTQ0djE0LjExMmEyMC45NDQgMjAuOTQ0IDAgMCAxIC0yLjIxMSA5LjM2NiAyMC45NDQgMjAuOTQ0IDAgMCAxIC0xOC43MzMgMTEuNTc4aC0xOS4wNTZ6IiBmaWxsPSIjZmRjOWE2IiBkYXRhLW9yaWdpbmFsPSIjZmRjOWE2IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTcyIDQ4OHYtMzJhOCA4IDAgMCAxIDE2IDB2MzJ6IiBmaWxsPSIjY2JjYmNiIiBkYXRhLW9yaWdpbmFsPSIjY2JjYmNiIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQyNCA0ODh2LTMyYTggOCAwIDAgMSAxNiAwdjMyeiIgZmlsbD0iI2NiY2JjYiIgZGF0YS1vcmlnaW5hbD0iI2NiY2JjYiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMjQgMzkyIDE2IDMyaDMybDE2LTMyLTMyLTI0eiIgZmlsbD0iIzAyOTZlNSIgZGF0YS1vcmlnaW5hbD0iIzAyOTZlNSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNDAgNDI0LTggNjRoNDhsLTgtNjR6IiBmaWxsPSIjMDI5NmU1IiBkYXRhLW9yaWdpbmFsPSIjMDI5NmU1IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI3NCA0NDBoLTM2bDItMTZoMzJ6IiBmaWxsPSIjMDI5NmU1IiBkYXRhLW9yaWdpbmFsPSIjMDI5NmU1IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzNjgtNTYgNDAtMTYtNDggMjQtMjR6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzNjggNTYgNDAgMTYtNDgtMjQtMjR6IiBmaWxsPSIjYjBkMmZkIiBkYXRhLW9yaWdpbmFsPSIjYjBkMmZkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI3NCA0NDBoLTM2bDItMTZoMzJ6IiBmaWxsPSIjMDI2Y2EyIiBkYXRhLW9yaWdpbmFsPSIjMDI2Y2EyIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
          <div class="flex flex-col ml-4 w-3/5  ">
            <span class=" truncate ">{{item.course.title}}</span>
            <span class="text-sm text-gray-600">user:{{item.buyer.email||item.buyer.lichessId}}</span>
            <span class=""></span>
          </div>
          <div class=" flex flex-col justify-end items-end -mt-2 ml-auto    ">
            <div class="text-xl  text-gray-800">${{item.price}}</div>
            <div class="">{{dateFormat(item.createdAt)}}</div>
          </div>
      </div>
    </div>
    <!-- <div @click="getOrders" v-else class=" mt-4 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 hover:via-purple-300 text-center p-4 text-xl text-gray-700 cursor-pointer hover:text-gray-900">
      See last payments
    </div> -->
  </aside>
</template>

<script>
import Axios from 'axios';
import Select from '~/components/common/Select'
export default {
  components:{
    Select
  },
  props:{
    // orders:{
    //   type:Array
    // },
    profile:{
      type:Object
    },
   
    summ:{
      type:Number
    }
  },
  data() {
    return {
      date: new Date(),
      invoices:[],
      orders:null,
      ordersVisible:false,
      paymentSelect:false
    }
  },
  computed:{
    currentDate() {
      const inThisNumberMonth = 1
      return `7.${(this.date.getMonth()+inThisNumberMonth)%12+1}.${(this.date.getMonth()+inThisNumberMonth)%12+1>this.date.getMonth()?this.date.getFullYear():this.date.getFullYear()+1}`
    },
    invoiceThisMonth() {
      if(this.invoices.length==0) return 0
      let temp = this.invoices.filter(invoice=>invoice.month==this.date.getMonth())
      temp = temp.find(invoice=>invoice.year==this.date.getFullYear())
      if(temp) return temp
      return 0
    },
    invoiceLastMonth() {
      if(this.invoices.length==0) return 0
      let temp = this.invoices.filter(invoice=>invoice.month==(((this.date.getMonth()-1)+12)%12))
      temp = temp.find(invoice=>invoice.year==(this.date.getMonth()-1)>=0?this.date.getFullYear():(this.date.getFullYear()-1))
      if(temp) return temp
      return 0
    },
    invoice2LastMonth() {
      if(this.invoices.length==0) return 0
      let temp = this.invoices.filter(invoice=>invoice.month==(((this.date.getMonth()-2)+12)%12))
      temp = temp.find(invoice=>invoice.year==(this.date.getMonth()-2)>=0?this.date.getFullYear():(this.date.getFullYear()-1))
      if(temp) return temp
      return 0
    },
    
  },
  async created() {
    // console.log(this.profile)
    if(this.$store.getters.revenue) {
      this.invoices = this.$store.getters.revenue
    } else {
      const {data} = await Axios.get('/order/invoice')
      this.$store.commit('setRevenue',data)
      this.invoices = data
    }
    if(this.$store.getters.orders) {
      this.orders = this.$store.getters.orders
    } 
    // console.log('data', data)
  },
  methods:{
    binanceAuth() {
      // a28f296f2cbe6c64b4d5dec24735d39b1b6fffcf
      // agFahL6k7F55ISeuW4WsArjgyJkNeTTuqS31EpqmCLNHYXUDt5bfPdglMnld9b2Q
      const clientId ='agFahL6k7F55ISeuW4WsArjgyJkNeTTuqS31EpqmCLNHYXUDt5bfPdglMnld9b2Q'
      const redirect_url = 'https%3A%2F%2Flocalhost%3A3000'
      const SCOPES = 'user:email'
      // &state=CSRF_TOKEN
      const url = `https://accounts.binance.com/en/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_url}&scope=${SCOPES}&state=CSRF_TOKEN`
      console.log(url)
      location.href= url
    },
    paypalAuth() {
      const SCOPES ='email'
      const clientId = 'AQecO_cPaI4jsY-S7rBVo0QxhQv_NP7gzZML2kACL8P6LqDWabpeo1JfkLFuwFYl3zRG6wB7cxu2h7NO'
      const redirectUrl = 'http%3A%2F%2F127.0.0.1:3000%2Fpaypal'
      const url = `https://www.sandbox.paypal.com/connect?flowEntry=static&client_id=${clientId}&scope=${SCOPES}&redirect_uri=${redirectUrl}`
      location.href= url
    },
    selectPayment(option) {
      console.log(option)
      if(option=='binance')
      return this.binanceAuth()
      if(option=='paypal')
      return this.paypalAuth()
      this.paymentSelect = false
      console.log(this.paymentSelect)
    },
    dateFormat(date) {
      const newDate = new Date(date).toLocaleDateString()
      return newDate
    },
    timeFormat(time) {
      const newTime = new Date(date).toLocaleTimeString()
      return newTime
    },
    getMonth(index) {
      const floor = (index+12) % 12
      console.log('index',floor)
      switch (floor) {
        case 0: return 'Jan';
        case 1: return 'Feb';
        case 2: return 'Mar';
        case 3: return 'Apr';
        case 4: return 'May';
        case 5: return 'Jun';
        case 6: return 'Jul';
        case 7: return 'Aug';
        case 8: return 'Sep';
        case 9: return 'Oct';
        case 10: return 'Nov';
        case 11: return 'Dec';
      }
    },
    async getOrders() {
      this.ordersVisible=!this.ordersVisible
      if(this.orders) return
      const {data} = await Axios.get('/order/all')
      this.orders = data
      console.log('Orders:',data)
    }
  }
};
</script>

<style></style>
