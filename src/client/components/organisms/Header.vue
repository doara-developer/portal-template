<template>
    <div class="header">
        <AppMenu />
        <HeaderTitle>Potal Template</HeaderTitle>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderTitle from "@client/components/atoms/HeaderTitle.vue";
import AppMenu from "@client/components/molecules/AppMenu.vue";

export default defineComponent({
    components: {
        AppMenu,
        HeaderTitle,
    },
});
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: sandybrown;
    color: white;
}
</style>
