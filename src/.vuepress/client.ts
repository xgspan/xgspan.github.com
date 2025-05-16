import { defineClientConfig } from "vuepress/client";

import SocialLink from "./components/SocialLink.js";

export default defineClientConfig({
    enhance: ({ app }) => {
        app.component("SocialLink", SocialLink);
    },
    // 你可以在这里添加或覆盖布局
});