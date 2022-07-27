<template>
<loader v-if="isLoading" />
<header>
    <Navbar />
</header>
<main>
    <router-view />
</main>
<body>
  
</body>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import loader from '../components/minicomps/loader.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        Navbar,
        loader,
    },
    computed: {
        ...mapGetters({
            isLoading: 'isLoading',
        }),
    },

}
</script>

<style>

</style>
