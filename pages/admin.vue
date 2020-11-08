<template>
  <div class="">
      <CoursesForVerification/>
  </div>
</template>

<script>
import CoursesForVerification from '~/components/admin/CoursesForVerification'

export default {
middleware:['auth'],
components:{
    CoursesForVerification
}
}
</script>

<style>

</style>