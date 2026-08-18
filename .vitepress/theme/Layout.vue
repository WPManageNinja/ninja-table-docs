<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- doc-footer-before renders above the Previous/Next pager (see screenshots).
         The default theme's #doc-after slot sits *below* the pager. -->
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>
