<template>
	<div class="app h-full">
		<!-- Sidebar -->
		<Sidebar class="z-10"/>

		<!-- Content -->
		<router-view class="ml-16 h-full relative"/>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
	:root {
		--primary: #fde047;
		--primary-alt: rgb(250, 204, 21);
		--dark: #000;
		--dark-alt: #365314;
		--light: #ffffff;
		--sidebar-width: 200px;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Fira sans', sans-serif;
	}
	body {
		background: var(--dark);
		height: 100%;
	}
	button {
		cursor: pointer;
		appearance: none;
		border: none;
		outline: none;
		background: none;
	}
	html {
		height: 100%;
	}
</style>