---
template: true
aside: false
outline: false
---
<template v-for="post in curPosts" :key="post.url">
  <h2 :id="post.title" class="post-title">
    <a :href="post.url">{{ post.title }}</a>
    <a
      class="header-anchor"
      :href="`#${post.title}`"
      :aria-label="`Permalink to &quot;${post.title}&quot;`"
      >​</a
    >
  </h2>
  <div class="post-date hollow-text">{{ post.date.string }}</div>
  <el-tag
    v-for="tag in post.tags"
    class="mr-2"
    :key="tag"
    effect="light"
    >
    {{ tag }}
  </el-tag>
  <div v-if="post.excerpt" v-html="post.excerpt"></div>
</template>
<div class="pagination-container">
  <el-pagination
    background
    v-model:current-page="current"
    v-model:pageSize="pageSize"
    layout="prev, pager, next"
    :total="total"
    class="mt-4"
    hide-on-single-page
    @current-change="onCurrentChange"
  />
</div>

<script lang="ts" setup>
import { ref, computed } from "vue";
// // 非Vue组件需要手动引入
import { ElMessage, ElPagination, ElTag } from "element-plus";
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/pagination/style/css'
import 'element-plus/es/components/tag/style/css'

import { data as posts } from "../.vitepress/theme/data/survive.data.mts";
console.log('posts===>', posts)

// const search = globalThis.location.search.slice(1);
// const searchParams = new URLSearchParams(search);
// const page = searchParams.get("page") || 1;

const current = ref(1);
const pageSize = ref(10);
const total = ref(posts.length);

const curPosts = computed(() => {
    return posts.slice(
        (current.value - 1) * pageSize.value,
        current.value * pageSize.value
    );
});

const onCurrentChange = (
    index,
    pageInfo
) => {
    ElMessage({
      type: 'success',
      message: `转到第${index}页`
    })
    // const url = new URL(globalThis.location as any);
    // url.searchParams.set("page", index.toString());
    // globalThis.history.replaceState({}, "", url);

    globalThis.scrollTo({
        top: 0,
    });
};
</script>
<style>
  .pagination-container{
    display: flex;
    justify-content: center;
  }
  .el-pagination ul.el-pager{
    padding-left: 0;
  }
</style>