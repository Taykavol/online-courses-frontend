<template>
  <div class=" flex flex-col space-y-1 w-full ">
    <div v-for="item in invoices" class="ivoice p-2 flex items-center bg-white border">
        <div class=" w-32 ">Period: {{item.month+1}}.{{item.year}}</div>
        <!-- <div class=" ml-1 w-px bg-gray-600 self-stretch"></div> -->
        <div class=" "> <span class=" text-white p-1 rounded text-sm" :class="{'bg-blue-700':item.profile.title=='GM','bg-red-600':item.profile.title=='IM'}">{{item.profile.title}}</span>  {{item.profile.teacherName}}</div>
        <!-- <div class=" ml-1 w-px bg-gray-600 self-stretch"></div> -->
        <div class=" ml-2">Total: {{item.total}}$</div>
        <div class=" mx-2">PayPal: {{item.profile.paypalId?item.profile.paypalId:'no Id'}}</div>
        <div class="mx-2">Payment Method: {{item.profile.paymentMethod}} </div>
        <div class="  border ml-auto cursor-pointer">
            <svg class="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
        </div>

    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            invoices:null
        }
    },
    async created() {
       const {data} =await Axios({url:"/invoices/all"})
       this.invoices = data
       console.log('Invoices:',data)
    },

}
</script>

<style>

</style>