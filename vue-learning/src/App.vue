<template>
    <router-view/>
</template>

<style>
html {
	height: 100%;
}

body {
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

@keyframes fade {
	from {
		opacity: 1;
	}
	50% {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

@-webkit-keyframes fade {
	from {
		opacity: 1;
	}
	50% {
		opacity: 0.4;
	}
	to {
		opacity: 1;
	}
}

.blink {
	display: unset !important;
	animation: fade 1000ms infinite;
	-webkit-animation: fade 1000ms infinite;
}

.sloveMove {
	transition: all 0.2s linear;
}
</style>
