<template>
    <div class="app-icon"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({});
</script>
<style lang="scss" scoped>
.app-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-color: sandybrown;
}
</style>
