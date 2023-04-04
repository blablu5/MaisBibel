<template>
	<main>
		<div id="content" class="p-4 max-w-3xl m-auto">
			<h1 class="text-6xl text-center break-words">Mais-Fanclub</h1>
			<p class="mt-4 max-w-xl ml-0 mr-auto">Lerne mehr über den Mais-Fanclub. Lies die Bibel, die 10 Gebote oder treniere deine Rekrutierungsskills.</p>
			<h2 class="max-w-xl mr-0 ml-auto text-2xl text-green-900 font-bold text-right">Neu hier? Mach dein Leben grlücklich und tritt dem Mais-Fanclub bei. Keine Verpflichtungen nur ein harmloser Fanclub</h2>
		</div>
		<ul class="background bg-yellow-300">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</main>
</template>

<style scoped>
	@keyframes animate {
		0%{
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}
		100%{
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
	#content {
		z-index: 1;
		position: relative;
	}
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	.background li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: #ffffff00;
		animation: animate 19s linear infinite;
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill='%23ffffffdd' height='800px' width='800px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M388.902,232.382l-17.193,17.193c-2.861-78.47-40.014-199.658-103.875-245.751c-7.064-5.1-16.603-5.1-23.668,0 C178.805,51,143.168,173.293,140.284,249.57l-17.186-17.186c-12.687-12.692-34.518-3.704-34.518,14.299v97.89 c0,92.32,75.103,167.428,167.414,167.428c92.32,0,167.428-75.108,167.428-167.428v-97.89 C423.42,228.739,401.631,219.653,388.902,232.382z M181.431,236.77h61.088c11.167,0,20.221-9.054,20.221-20.221 s-9.054-20.221-20.221-20.221h-55.425c1.653-8.27,3.587-16.468,5.763-24.54h49.662c11.167,0,20.221-9.054,20.221-20.221 s-9.054-20.221-20.221-20.221h-36.383c13.9-35.655,31.883-65.978,49.862-84.378c17.986,18.409,35.977,48.75,49.881,84.424 c-10.748,0.473-19.324,9.311-19.324,20.175c0,11.167,9.054,20.221,20.221,20.221h12.366c2.176,8.072,4.11,16.271,5.763,24.54 h-18.127c-11.167,0-20.221,9.053-20.221,20.221s9.054,20.221,20.221,20.221h23.792c0.59,7.575,0.903,15.126,0.903,22.611 c0,0.643-0.013,1.286-0.019,1.929h-24.675c-11.167,0-20.221,9.054-20.221,20.221s9.054,20.221,20.221,20.221h12.751 l-63.536,63.528l-63.528-63.528h50.053c11.167,0,20.221-9.054,20.221-20.221s-9.054-20.221-20.221-20.221h-61.971 c-0.005-0.643-0.019-1.286-0.019-1.929C180.528,251.898,180.841,244.345,181.431,236.77z M382.98,344.57h-0.001 c0,70.02-56.966,126.986-126.986,126.986c-70.012,0-126.973-56.966-126.973-126.986v-49.072l112.675,112.675 c7.839,7.84,20.659,7.937,28.595,0.001c32.585-32.581,99.498-99.486,112.69-112.677V344.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	background-repeat: no-repeat no-repeat;
	background-position: center center;
	background-size: cover;
	}




	.background li:nth-child(0) {
		left: 18%;
		width: 192px;
		height: 192px;
		bottom: -192px;
		animation-delay: 1s;
	}
	.background li:nth-child(1) {
		left: 60%;
		width: 12px;
		height: 12px;
		bottom: -12px;
		animation-delay: 4s;
	}
	.background li:nth-child(2) {
		left: 43%;
		width: 265px;
		height: 265px;
		bottom: -265px;
		animation-delay: 1s;
	}
	.background li:nth-child(3) {
		left: 82%;
		width: 125px;
		height: 125px;
		bottom: -125px;
		animation-delay: 15s;
	}
	.background li:nth-child(4) {
		left: 11%;
		width: 51px;
		height: 51px;
		bottom: -51px;
		animation-delay: 2s;
	}
	.background li:nth-child(5) {
		left: 15%;
		width: 138px;
		height: 138px;
		bottom: -138px;
		animation-delay: 6s;
	}
	.background li:nth-child(6) {
		left: 89%;
		width: 91px;
		height: 91px;
		bottom: -91px;
		animation-delay: 16s;
	}
	.background li:nth-child(7) {
		left: 35%;
		width: 281px;
		height: 281px;
		bottom: -281px;
		animation-delay: 2s;
	}
	.background li:nth-child(8) {
		left: 20%;
		width: 259px;
		height: 259px;
		bottom: -259px;
		animation-delay: 35s;
	}
	.background li:nth-child(9) {
		left: 7%;
		width: 98px;
		height: 98px;
		bottom: -98px;
		animation-delay: 3s;
	}
	.background li:nth-child(10) {
		left: 30%;
		width: 113px;
		height: 113px;
		bottom: -113px;
		animation-delay: 20s;
	}
	.background li:nth-child(11) {
		left: 23%;
		width: 193px;
		height: 193px;
		bottom: -193px;
		animation-delay: 20s;
	}
	.background li:nth-child(12) {
		left: 35%;
		width: 52px;
		height: 52px;
		bottom: -52px;
		animation-delay: 59s;
	}
	.background li:nth-child(13) {
		left: 56%;
		width: 244px;
		height: 244px;
		bottom: -244px;
		animation-delay: 27s;
	}
	.background li:nth-child(14) {
		left: 27%;
		width: 32px;
		height: 32px;
		bottom: -32px;
		animation-delay: 2s;
	}
	.background li:nth-child(15) {
		left: 69%;
		width: 224px;
		height: 224px;
		bottom: -224px;
		animation-delay: 21s;
	}
	.background li:nth-child(16) {
		left: 10%;
		width: 58px;
		height: 58px;
		bottom: -58px;
		animation-delay: 3s;
	}
	.background li:nth-child(17) {
		left: 0%;
		width: 76px;
		height: 76px;
		bottom: -76px;
		animation-delay: 29s;
	}
	.background li:nth-child(18) {
		left: 23%;
		width: 142px;
		height: 142px;
		bottom: -142px;
		animation-delay: 89s;
	}
	.background li:nth-child(19) {
		left: 82%;
		width: 291px;
		height: 291px;
		bottom: -291px;
		animation-delay: 74s;
	}
	.background li:nth-child(20) {
		left: 61%;
		width: 19px;
		height: 19px;
		bottom: -19px;
		animation-delay: 54s;
	}
	.background li:nth-child(21) {
		left: 13%;
		width: 66px;
		height: 66px;
		bottom: -66px;
		animation-delay: 61s;
	}
	.background li:nth-child(22) {
		left: 21%;
		width: 124px;
		height: 124px;
		bottom: -124px;
		animation-delay: 1s;
	}
</style>