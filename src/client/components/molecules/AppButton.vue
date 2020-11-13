<template>
    <div class="app-button">
        <AppIcon />
        <AppName><slot name="app-name"></slot></AppName>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppIcon from "@client/components/atoms/AppIcon.vue";
import AppName from "@client/components/atoms/AppName.vue";

export default defineComponent({
    components: {
        AppIcon,
        AppName,
    },
});
</script>
<style lang="scss" scoped>
.app-button {
    width: 140px;
    height: 160px;
    cursor: pointer;
}
</style>
