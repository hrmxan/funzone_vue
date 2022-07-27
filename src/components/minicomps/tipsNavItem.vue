<template>
<a @click.prevent="" class="mute_buttons tips__nav_item" href="#">
    <span class="line"></span>
    {{title}}
</a>
</template>

<script>
export default {
    props: {
        title: String,
    },
}
</script>

<style>

</style>
