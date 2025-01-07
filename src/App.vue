<script setup></script>

<template>
	<div class="mx-auto h-screen w-full">
		<nav class="p-4 grid grid-cols-3 items-center">
			<div class="text-white text-lg font-bold raskhal-font">
				JRequeDev
			</div>
			<div class="flex justify-center">
				<ul class="flex space-x-4">
					<li>
						<router-link to="/" class="text-white"
							>Clientes</router-link
						>
					</li>
					<li>
						<router-link to="/about" class="text-white"
							>About</router-link
						>
					</li>
					<li>
						<router-link to="/contact" class="text-white"
							>Contact</router-link
						>
					</li>
				</ul>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<style scoped>
	@import url("https://fonts.googleapis.com/css2?family=Raskhal+Brush&display=swap");

	nav {
		background-color: #2d3748;
	}

	.raskhal-font {
		/* font-family: "Raskhal Brush", cursive; */
	}
</style>
