<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Editor from './Editor.vue'

export default {
  name: 'App',
  components: {
    Editor
  }
}
</script>

<template>
	<div class="container">
		<Editor />
	</div>
</template>

<style>
.container {
	margin:1em;
	border:1px solid black;
}
</style>
