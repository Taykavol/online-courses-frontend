<template>
  <div class=" container mx-auto flex space-x-4 ">
      <CoursesForVerification class=" flex  mt-4 "/>
      <Invoices class="mt-4"/>
  </div>
</template>

<script>
import CoursesForVerification from '~/components/admin/CoursesForVerification'
import Invoices from '~/components/admin/Invoices'

export default {
middleware:['auth'],
components:{
    CoursesForVerification,Invoices
}
}
</script>

<style>

</style>