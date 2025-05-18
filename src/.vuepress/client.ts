import { defineClientConfig } from "vuepress/client";

import SocialLink from "./components/SocialLink.ts";
import MyTabs from "./components/MyTabs.vue";


export default defineClientConfig({
    enhance: ({ app }) => {
        app.component("SocialLink", SocialLink);
        app.component("MyTabs", MyTabs);
    },
    // 你可以在这里添加或覆盖布局
});