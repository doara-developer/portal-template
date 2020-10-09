<template>
    <PortalPage />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PortalPage from "@client/components/pages/PortalPage.vue";

export default defineComponent({
    components: {
        PortalPage,
    },
});
</script>
