<script setup>
const runtimeConfig = useRuntimeConfig()
const { data: randomNumber } = await useFetch(
	runtimeConfig.public.apiBase + '/' + 'random'
)

const { data: message } = await useFetch(
	runtimeConfig.public.apiBase + '/' + ''
)
</script>

<template>
	<div
		class="w-screen h-screen bg-teal-600 flex flex-col items-center justify-center"
	>
		<p>Discord!</p>
		<p>Golang message: {{ message }}</p>
		<p>Golang random: {{ randomNumber }}</p>
	</div>
</template>
