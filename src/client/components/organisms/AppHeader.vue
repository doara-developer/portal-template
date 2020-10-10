<template>
    <div class="app-header">
        <AppMenu />
        <AppTitle>Potal Template</AppTitle>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppTitle from "@client/components/atoms/AppTitle.vue";
import AppMenu from "@client/components/molecules/AppMenu.vue";

export default defineComponent({
    components: {
        AppMenu,
        AppTitle,
    },
});
</script>
<style lang="scss" scoped>
.app-header {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    background-color: sandybrown;
    color: white;
    align-items: center;
}
</style>
