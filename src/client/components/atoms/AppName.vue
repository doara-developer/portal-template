<template>
    <div class="app-name"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.app-name {
    text-align: center;
}
</style>
