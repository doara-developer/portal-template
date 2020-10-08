import { shallowMount } from "@vue/test-utils";
import App from "@client/components/App.vue";

describe("App.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(App);
    });
});
