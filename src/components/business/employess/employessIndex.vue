<template>
  <h3 class="regist__past__title justify-content-start">My employees <router-link to="/business/employess/add">
      <img src="@/assets/img/svg/add.svg" alt="add">
    </router-link></h3>
  <div class="row cat__row">
    <employesCard
      :key="employee"
      v-for="employee in employess"
      :name="employee.name"
      :email="employee.email"
      :sport_complex="employee.sport_complex"
      :route="employee.link"
    >
    </employesCard>
  </div>
</template>

<script>
import employesCard from '@/components/minicomps/employessCard.vue'
  export default {
    components: {
      employesCard
    },
    data() {
      return {
        employess: [
          {
            name: 'Falonchiev Pistonchi',
            email: 'falonchi@gmail.com',
            sport_complex: 'Sport Complex name',
            link: 'edit',
          },
          {
            name: 'Falonchiev Pistonchi',
            email: 'falonchi@mail.ru',
            sport_complex: 'Sport Complex name',
            link: 'edit',
          }
        ]
      }
    },

  }
</script>

<style>

</style>