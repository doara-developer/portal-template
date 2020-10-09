<template>
    <div class="app-header">
        <AppTitle><slot name="title"></slot></AppTitle>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppTitle from "@client/components/atoms/AppTitle.vue";
export default defineComponent({
    components: {
        AppTitle,
    },
});
</script>
<style lang="scss" scoped>
.app-header {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
