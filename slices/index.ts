// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  genre_block: defineAsyncComponent(() => import("./Genres/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue"))
});
