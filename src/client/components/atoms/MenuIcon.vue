<template>
    <div class="menu-icon">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.menu-icon {
    position: relative;
    width: 25px;
    height: 20px;
    display: block;
    margin: 0 20px 0 15px;
    cursor: pointer;
    span {
        position: absolute;
        display: block;
        width: 25px;
        height: 2px;
        border-radius: 3px;
        background-color: white;
    }
    .top {
        top: 0px;
    }
    .middle {
        top: 9px;
    }
    .bottom {
        bottom: 0px;
    }
}
</style>
