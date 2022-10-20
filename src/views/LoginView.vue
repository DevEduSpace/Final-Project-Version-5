<template>
	<div class="content">
		<main class="login">
			<section class="forms">
				<form class="register" @submit.prevent="register">
					<h2>Register</h2>
					<!-- Radio buttons for register's user select -->
					<div class="radio-containers">
						<input type="radio" id="studentButt" name="UserType" value="student" v-model="isStudent"
							@change="updateUserType('student')">
						<label for="studentButt"> Student</label>
						<input type="radio" id="tutorButt" name="UserType" value="tutor" v-model="isTutor"
							@change="updateUserType('tutor')">
						<label for="tutorButt"> Tutor Company</label>
						<input type="radio" id="sponsorButt" name="UserType" value="sponsor" v-model="isSponsor"
							@change="updateUserType('sponsor')">
						<label for="sponsorButt"> Sponsor Company</label>
					</div>
					<!-- Email and password input fields for user firebase authentication -->
					<input type="email" placeholder="Email address" v-model="register_form.email" />
					<input type="password" placeholder="Password" v-model="register_form.password" />
					<input type="submit" value="Register" />
				</form>

				<form class="login" @submit.prevent="login">
					<h2>Login</h2>
					<!-- Email and password input fields for user firebase authentication -->
					<input type="email" placeholder="Email address" v-model="login_form.email" />
					<input type="password" placeholder="Password" v-model="login_form.password" />
					<input type="submit" value="Login" />
				</form>
			</section>
		</main>
	</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
	setup() {
		const userType = ref({});
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}
		const register = () => {
			store.dispatch('register', register_form.value);
		}
		return {
			login_form,
			register_form,
			login,
			register
		}
	},
	methods: {
		updateUserType(type) {
			if (this.isStudent) {
				this.$store.dispatch('updateUserType', type)
			}
		}
	}
};
</script>

<style>
.header {
	background: rgb(96, 34, 59);
	padding: 10px;
}

.headerText {
	font-weight: bold;
	color: white;
	font-size: 60px;
	padding-left: 10px;
}

.nav-link {
	color: white;
	text-decoration: none;
	padding-bottom: 20px;
	text-align: center;
}

.forms {
	display: flex;
	min-height: 70vh;
}

form {
	flex: 1 1 0%;
	padding: 0rem 1rem 0rem;
}

form.register {
	color: #FFF;
	background-color: rgb(96, 34, 59);
	background-image: linear-gradient(to bottom right,
			rgb(96, 34, 59) 0%,
			rgb(96, 34, 59) 100%);
}

form.login {
	color: rgb(96, 34, 59);
	background-color: rgb(255, 255, 255);
	background-image: linear-gradient(to bottom right,
			rgb(255, 255, 255) 0%,
			rgb(255, 255, 255) 100%);
}

h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

h3 {
	font-size: 1rem;
	text-transform: uppercase;
	margin-bottom: -0.5rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}

form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
	background-color: rgb(96, 34, 59);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(96, 34, 59);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

input[type="radio"] {
	opacity: 0;
	position: fixed;
	width: 0;
}

.radio-containers {
	text-align: center;
	padding: 1rem 0rem;
}

.radio-containers label {
	display: inline-block;
	background-color: rgb(255, 255, 255);
	padding: 10px 20px;
	font-family: sans-serif, Arial;
	color: rgb(96, 34, 59);
	border: 2px solid rgb(96, 34, 59);
	border-radius: 4px;
	width: 60%;
}

.radio-containers input[type="radio"]:checked+label {
	background-color: rgb(96, 34, 59);
	border-color: rgb(96, 34, 59);
	color: rgb(255, 255, 255);
	border: 2px dashed rgb(255, 255, 255);
}

.radio-containers label:hover {
	background-color: rgb(255, 190, 214);
}
</style>