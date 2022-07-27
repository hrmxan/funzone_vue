<template>
  <div class="accardion mute_buttons">
      <strong class="accardion__title">
        <a href="#!">
          <span>{{title}}</span>
          <span class="plus"><img src="@/assets/img/svg/plus.svg" alt="plus_ic"></span>
        </a>
        <!-- <pre>{{index}}</pre> -->
      </strong>
      <ul>
        <li :key="item" v-for="item in items" class="accardion__item">
          <a :href="item.link">
            {{item.title}}
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props: {
      title: String,
      items: Array,
      index: Number,
    }

  }
</script>

<style>

</style>