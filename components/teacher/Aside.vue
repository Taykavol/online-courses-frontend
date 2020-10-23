<template>
  <aside
    class=" bg-white border  flex flex-col  
		 rounded-r-lg overflow-y-auto"
  >
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
  <div class=" flex justify-around ">
    <div class=" flex flex-col items-center w-1/2">
      <span class="mt-4 text-gray-600">Monthly earnings</span>
      <span class=" text-2xl ">${{summ?summ:0}} </span>
    </div>
    <div class="flex flex-col items-center w-1/2">
      <span class="mt-4 text-gray-600">Next payout </span>
      <span class=" text-2xl  ">{{currentDate}}</span>
    </div>
  </div>

    <div v-if="orders.length>0" class="mt-4 flex items-center">
      <span class="  tracking-wide text-center w-full text-xl">Last payments</span>
    </div>
    <div v-if="orders.length>0" class="">
      <div v-for="(item,index) in orders" :key="index" class=" border-t p-4 flex w-full bg-white capitalize ">
        <div class="h-10 w-10 rounded-full self-center  bg-orange-500 flex justify-center items-center text-3xl text-white ">{{item.buyer.email?item.buyer.email[0]:item.buyer.lichessId[0]}}</div>
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
    <div @click="getOrders" v-else class=" mt-4 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 hover:via-purple-300 text-center p-4 text-xl text-gray-700 cursor-pointer hover:text-gray-900">
      See last payments
    </div>
  </aside>
</template>

<script>
import Axios from 'axios';
export default {
  props:{
    // orders:{
    //   type:Array
    // },
    summ:{
      type:Number
    }
  },
  data() {
    return {
      date: new Date(),
      invoices:[],
      orders:[],
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
      const {data} = await Axios.get('/order/all')
      this.orders = data
      console.log('Orders:',data)
    }
  }
};
</script>

<style></style>
