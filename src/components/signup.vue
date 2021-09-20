<template>
  <body>
    <img class="wave" src="../assets/wave.png" />
    <div class="container">
      <div class="img">
        <img src="../assets/bg.svg" />
      </div>
      <div class="login-content">
        <form action="index.html">
          <img src="../assets/avatar.svg" />
          <h2 class="title">Welcome</h2>
          <div class="input-div one" v-bind:class="animate ? 'focus' : ''">
            <div class="i">
              <svg fill="rgb(56 211 159)" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" height="24" version="1.1" width="24"><g transform="translate(0 -1028.4)"><path d="m8.4062 1041.1c-2.8856 1.3-4.9781 4-5.3437 7.3 0 1.1 0.8329 2 1.9375 2h14c1.105 0 1.938-0.9 1.938-2-0.366-3.3-2.459-6-5.344-7.3-0.649 1.3-2.011 2.3-3.594 2.3s-2.9453-1-3.5938-2.3z" fill="rgb(56 211 159)"/><path d="m17 4a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="rgb(56 211 159)" transform="translate(0 1031.4)"/><path d="m12 11c-1.277 0-2.4943 0.269-3.5938 0.75-2.8856 1.262-4.9781 3.997-5.3437 7.25 0 1.105 0.8329 2 1.9375 2h14c1.105 0 1.938-0.895 1.938-2-0.366-3.253-2.459-5.988-5.344-7.25-1.1-0.481-2.317-0.75-3.594-0.75z" fill="rgb(56 211 159)" transform="translate(0 1028.4)"/></g></svg>
            </div>
            <div class="div">
              <h5>Username</h5>
              <input type="text" class="input"  @click="animate = true"/>
            </div>
          </div>
          <div class="input-div pass" v-bind:class="animate2 ? 'focus' : ''">
            <div class="i">
              <svg fill="rgb(56 211 159)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve"><g id="info"/><g id="icons"><path d="M20,10h-4H8l0-2.8c0-2.1,1.5-4,3.6-4.2C14,2.8,16,4.7,16,7l0,0c0,0.6,0.4,1,1,1h1c0.6,0,1-0.4,1-1l0,0   c0-3.8-3-6.9-6.8-7C8.3-0.1,5,3.1,5,7v3H4c-1.1,0-2,0.9-2,2v7c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5v-7C22,10.9,21.1,10,20,10z    M13,17.7V19c0,0.5-0.5,1-1,1s-1-0.5-1-1v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2C14,16.7,13.6,17.4,13,17.7z" id="password"/></g></svg>
            </div>
            <div class="div" @click="animate2 = true">
              <h5>Password</h5>
              <input type="password" class="input" />
            </div>
          </div>
          <!-- <a href="#" class="forgot-pass">Forgot Password?</a> -->
          <div class="btn">Signup</div>
          <a href="#" class="login-ac">Click Here If You Already Have Account</a>
        </form>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      animate: false,
      animate2: false
      
    }
  }}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

.login-ac , .forgot-pass{
    text-align: center;
    font-size: 16px;
    color: rgb(0 0 0/0.8);
}

body{
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    min-height: 100vh;
    width: 100vw;
}

.wave{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100%;
	z-index: -1;
}

.container{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
}

.img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.login-content{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}

.img img{
	width: 500px;
}

form{
	width: 360px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	color: #333;
	text-transform: uppercase;
	font-size: 2.9rem;
}

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
    color: rgb(0 0 0/0.8);
}

.login-content .input-div.one{
	margin-top: 0;
}

.i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
    position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: rgb(0 0 0/0.5);
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #38d39f;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #38d39f;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: rgb(0 0 0/0.8);
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover{
	color: #38d39f;
}

.btn{
	display: grid;
    place-items: center;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}
.btn:hover{
	background-position: right;
}


@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		width: 290px;
	}

	.login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	.img img{
		width: 400px;
	}
}

@media screen and (max-width: 900px){
	.container{
		grid-template-columns: 1fr;
	}

	.img{
		display: none;
	}

	.wave{
		display: none;
	}

	.login-content{
		justify-content: center;
	}
}
</style>