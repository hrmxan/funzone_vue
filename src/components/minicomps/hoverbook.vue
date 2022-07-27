<template>
    <div class="control__body">
        <div class="sum_input">
        </div>
        <a @click.prevent="$emit('booking')" href="#!" class="mute_buttons"><span>Book now</span></a>
    </div>
</template>

<script>
    export default {
        methods: {
            
        },
    }
</script>

<style scoped>
    .control__body {
        opacity: 1;
        visibility: visible;
        top: 80%;
    }

    .control__body {
        display: flex;
        flex-direction: column;
        background: linear-gradient(84.91deg, #37C756 8.18%, #316743 90.36%);
        box-shadow: 0px 4px 8px rgb(0 0 0 / 50%);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px;
        min-width: 100px;
        z-index: 10;
        transition: 0.5s;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        display: flex;
        min-width: 100%;
        flex-shrink: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: 'Krona One';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        background: rgba(255, 255, 255, 0.85);
        padding: 5px;
        user-select: none;
    }

    .control__body::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -18px;
        border-bottom: 9px solid #33904B;
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
    }

    a span {
        display: flex;
        width: 100% !important;
        height: 100% !important;
        justify-content: center;
        align-items: center;
        background: linear-gradient(84.91deg, #37C756 8.18%, #316743 90.36%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style>