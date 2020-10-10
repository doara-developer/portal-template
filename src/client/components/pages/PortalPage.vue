<template>
    <div class="portal-page">
        <Header />
        <AppList />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@client/components/organisms/Header.vue";
import AppList from "@client/components/organisms/AppList.vue";

export default defineComponent({
    components: {
        Header,
        AppList,
    },
});
</script>
<style lang="scss" scoped>
.portal-page {
    width: 100%;
}
</style>
