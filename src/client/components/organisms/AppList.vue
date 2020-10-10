<template>
    <div class="app-list">
        <SectionTitle>Application List</SectionTitle>
        <AppButton>
            <template #app-name>Sample App1</template>
        </AppButton>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SectionTitle from "@client/components/atoms/SectionTitle.vue";
import AppButton from "@client/components/molecules/AppButton.vue";

export default defineComponent({
    components: {
        SectionTitle,
        AppButton,
    },
});
</script>
<style lang="scss" scoped>
.app-list {
    padding-left: 35px;
    padding-top: 10px;
    color: sandybrown;
}
</style>
