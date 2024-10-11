<template>
  <Layout>
    <template v-if="!page.filePath.startsWith('list/')" #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          :key="page.filePath"
          repo="lixunchang/lixunchang.github.io"
          repo-id="R_kgDOM8KhBQ"
          category="Announcements"
          category-id="DIC_kwDOM8KhBc4CjRWV"
          mapping="url"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          :theme="isDark ? 'dark' : 'light_tritanopia'"
          lang="zh-CN"
          loading="lazy"
          crossorigin="anonymous"
          async
        />
      </div>
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme";
import NotFound from "./404.vue";
import { watch } from "vue";
import { inBrowser, useData } from "vitepress";

const { isDark, page } = useData();

const { Layout } = DefaultTheme;

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
    "https://giscus.app"
  );
});
</script>