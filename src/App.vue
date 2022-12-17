<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

:root h1 {
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

:root h2 {
	font-size: 1.25rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
a {
	text-decoration: none;
	color: inherit;
}

h2 {
	color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; 
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>