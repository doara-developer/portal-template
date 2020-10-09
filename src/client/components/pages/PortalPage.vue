<template>
    <div class="portal-page">
        <AppHeader>
            <template #title>Potal Template</template>
        </AppHeader>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "@client/components/molecules/AppHeader.vue";

export default defineComponent({
    components: {
        AppHeader,
    },
});
</script>
<style lang="scss" scoped>
.portal-page {
    width: 100%;
}
</style>
