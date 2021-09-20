<template>
  <body class="qr-body">

    <!-- -------- QR BACKDROP -------  -->

    <div v-bind:class="qrcode ? 'qr-backdrop': ''" @click="qrcode = false"></div>

    <!-- -------- QR POP UP -------  -->

    <div v-bind:class="qrcode ? 'qr-popup': 'qr-pop-hide'">
      <div class="qr-text">Here Is Your QR Code</div>
      <img class="qr-img" src="https://www.investopedia.com/thmb/ZG1jKEKttKbiHi0EkM8yJCJp6TU=/1148x1148/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="Qr_Code">
    </div>


    <div class="form-container">
      <div class="fillup-text">Fill Up Some Of Your Details To Continue !</div>

      <div class="form-profile">
        <div class="form">
          <div
            class="inp-box name-box"
            v-bind:class="name ? 'name-active' : ''"
          >
            <div class="inp-text">Name</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              enable-background="new 0 0 50 50"
              height="24px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              width="24px"
              xml:space="preserve"
            >
              <rect fill="none" height="50" width="50" />
              <path
                d="M30.933,32.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z"
              />
            </svg>
            <input type="text" @click="name = true" />
          </div>

          <div
            class="inp-box phone-box"
            v-bind:class="phone ? 'phone-active' : ''"
          >
            <div class="inp-text">Phone</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 1600 1600"
              width="24px"
            >
              <path
                d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
              />
            </svg>
            <input type="number" @click="phone = true" />
          </div>

          <div
            class="inp-box email-box"
            v-bind:class="email ? 'email-active' : ''"
          >
            <div class="inp-text">Email</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="26px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="26px"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z"
                />
                <path
                  d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z"
                />
              </g>
            </svg>
            <input type="text" @click="email = true" />
          </div>

          <div
            class="inp-box city-box"
            v-bind:class="city ? 'city-active' : ''"
          >
            <div class="inp-text">City</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              baseProfile="tiny"
              height="24px"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="24px"
              xml:space="preserve"
            >
              <path
                d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z"
              />
            </svg>
            <input type="text" @click="city = true" />
          </div>

          <div class="inp-box zip-box" v-bind:class="zip ? 'zip-active' : ''">
            <div class="inp-text">Zip Code</div>
            <svg
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title />
              <g data-name="Link Alt" id="Link_Alt">
                <path
                  d="M11.29,12.71,14.58,16,16,17.42l3.3,3.29a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L17.41,16,16,14.59l-3.29-3.3a1,1,0,0,0-1.42,1.42Z"
                />
                <path
                  d="M11.29,12.71,14.58,16,16,17.42l3.3,3.29a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L17.41,16,16,14.59l-3.29-3.3a1,1,0,0,0-1.42,1.42Z"
                />
                <path
                  d="M14.41,20.24a3,3,0,0,0,.88,2.12L21,28a3,3,0,0,0,4.24,0L28,25.2a3,3,0,0,0,0-4.25l-5.65-5.65a3,3,0,0,0-4.25,0h0l3.29,3.28a2,2,0,1,1-2.82,2.82L15.3,18.13h0A3,3,0,0,0,14.41,20.24Z"
                />
                <path
                  d="M4,11l5.66,5.66a3,3,0,0,0,4.24,0l-3.29-3.3a2,2,0,1,1,2.82-2.82l3.29,3.3h0a3,3,0,0,0,0-4.24L11.05,4A3,3,0,0,0,6.81,4L4,6.81A3,3,0,0,0,4,11Z"
                />
              </g>
            </svg>
            <input type="number" @click="zip = true" />
          </div>

          <div class="inp-box org-box" v-bind:class="org ? 'org-active' : ''">
            <div class="inp-text">Organisation</div>
            <svg
              height="26px"
              width="26px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              id="Layer_1"
              style="enable-background: new 0 0 91 91"
              version="1.1"
              viewBox="0 0 91 91"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M52.7,19.1H19.9v53.2h32.8V19.1z M34.7,62.2h-3.4v-6.2h3.4V62.2z M34.7,49.7h-3.4v-6.2h3.4V49.7z M34.7,37.3h-3.4v-6.2h3.4   V37.3z M45,62.2h-3.4v-6.2H45V62.2z M45,49.7h-3.4v-6.2H45V49.7z M45,37.3h-3.4v-6.2H45V37.3z"
                />
                <path
                  d="M75.2,65.6V40.9l-19.7,0v31.4h13C72.2,72.3,75.2,69.3,75.2,65.6z M67.6,62.3H61V59h6.6V62.3z M67.6,54H61v-3.4h6.6V54z"
                />
              </g>
            </svg>
            <input type="text" @click="org = true" />
          </div>

          <div
            class="inp-box facebook-box"
            v-bind:class="facebook ? 'facebook-active' : ''"
          >
            <div class="inp-text">Facebook Link</div>
            <svg
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <title />
              <path
                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
              />
            </svg>
            <input type="text" @click="facebook = true" />
          </div>

          <div
            class="inp-box instagram-box"
            v-bind:class="instagram ? 'instagram-active' : ''"
          >
            <div class="inp-text">Instagram Link</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="26px"
              id="Layer_1"
              style="enable-background: new 0 0 56.7 56.7"
              version="1.1"
              viewBox="0 0 56.7 56.7"
              width="26px"
              xml:space="preserve"
            >
              <g>
                <circle cx="28.1" cy="30" r="4.4" />
                <path
                  d="M33.6,19.2h-11c-1.6,0-3,0.5-3.9,1.4c-0.9,0.9-1.4,2.3-1.4,3.9v11c0,1.6,0.5,3,1.5,4c1,0.9,2.3,1.4,3.9,1.4h10.9   c1.6,0,3-0.5,3.9-1.4c1-0.9,1.5-2.3,1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6,19.7,35.3,19.2,33.6,19.2z M28.1,36.8   c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8S35,26.2,35,30C35,33.8,31.9,36.8,28.1,36.8z M35.2,24.5c-0.9,0-1.6-0.7-1.6-1.6   s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S36.1,24.5,35.2,24.5z"
                />
                <path
                  d="M28.3,5.2c-13.6,0-24.6,11-24.6,24.6c0,13.6,11,24.6,24.6,24.6c13.6,0,24.6-11,24.6-24.6C53,16.2,41.9,5.2,28.3,5.2z    M41.4,35.6c0,2.3-0.8,4.3-2.2,5.7c-1.4,1.4-3.4,2.1-5.6,2.1H22.7c-2.2,0-4.2-0.7-5.6-2.1c-1.5-1.4-2.2-3.4-2.2-5.7v-11   c0-4.6,3.1-7.8,7.8-7.8h11c2.3,0,4.2,0.8,5.6,2.2c1.4,1.4,2.1,3.3,2.1,5.6V35.6z"
                />
              </g>
            </svg>
            <input type="text" @click="instagram = true" />
          </div>

          <div
            class="inp-box message-box"
            v-bind:class="message ? 'message-active' : ''"
          >
            <div class="inp-text">message</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              width="24px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="enable-background: new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xml:space="preserve"
            >
              <g id="info" />
              <g id="icons">
                <path
                  d="M20,1H4C1.8,1,0,2.8,0,5v10c0,2.2,1.8,4,4,4v3c0,0.9,1.1,1.3,1.7,0.7L9.4,19H20c2.2,0,4-1.8,4-4V5   C24,2.8,22.2,1,20,1z M14,13H8c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1C15,12.6,14.6,13,14,13z M16,9H8   C7.4,9,7,8.6,7,8c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1C17,8.6,16.6,9,16,9z"
                  id="message"
                />
              </g>
            </svg>
            <textarea @click="message = true"></textarea>
          </div>
        </div>
        <div class="profile-box">
          <!-- Profile Picture  -->

          <div class="picture-box">
            <img src="/img/avatar.f620e5fd.svg" alt="">
          </div>

          <div class="pic-btn">
            Upload Profile
          </div>
        </div>
      </div>

      <div class="submit-cover">
        <div class="submit-btn" @click="qrcode = true">
          Submit
          <svg
            fill="white"
            heigh="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path
                d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      name: false,
      phone: false,
      email: false,
      city: false,
      message: false,
      zip: false,
      facebook: false,
      instagram: false,
      org: false,
      qrcode: false
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

.qr-body {
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
  background: #161623;
  display: grid;
  place-items: center;
  user-select: none;
  background: url("../assets/qrbg.jpg") no-repeat center center/cover;
}

.form-container {
  height: 90vh;
  width: 90vw;
  background: white;
  box-shadow: 0 0 15px rgb(0 0 0/0.5);
  border-radius: 25px;
  font-family: "Poppins", sans-serif !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.fillup-text {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 10px;
  color: rgb(0 0 0/0.8);
}

.inp-box {
  position: relative;
  padding: 15px 15px 5px 15px;
  height: min-content;
  width: 80%;
}

.inp-box input {
  width: 100%;
  font-size: 20px;
  padding: 5px 5px 0 5px;
  padding-left: 35px;
  border: none;
  z-index: 15;
  position: relative;
  background: rgb(0 0 0 / 0%);
}

.inp-box::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: 2px;
  width: 0%;
  background: linear-gradient(lime, rgb(47 145 255));
}

.inp-box::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 0;
  z-index: 1;
  height: 1px;
  width: 100%;
  background: rgb(0 0 0/0.8);
}

.message-box {
  grid-column: 1 / span 2;
}

.name-active::before,
.phone-active::before,
.email-active::before,
.city-active::before,
.message-active::before,
.zip-active::before,
.org-active::before,
.facebook-active::before,
.instagram-active::before {
  width: 100%;
  transition: 0.5s;
}
.inp-text {
  font-weight: 700;
  font-size: 20px;
  color: rgb(0 0 0/0.8);
  position: absolute;
  top: 18px;
  left: 45px;
  padding: 0 5px;
}

.inp-box svg {
  position: absolute;
  top: 21px;
  fill: rgb(0 0 0/0.8);
  z-index: 16;
}

.inp-box svg path {
  fill: rgb(0 0 0/0.8);
}
.name-active svg path,
.phone-active svg path,
.email-active svg path,
.city-active svg path,
.zip-active svg path,
.org-active svg path,
.facebook-active svg path,
.instagram-active svg path {
  fill: #10b981;
}
.message-box .inp-text {
  top: 19px;
}
.name-active .inp-text,
.phone-active .inp-text,
.email-active .inp-text,
.city-active .inp-text,
.zip-active .inp-text,
.org-active .inp-text,
.facebook-active .inp-text,
.instagram-active .inp-text {
  top: -10px;
  transition: top 0.2s;
  color: rgb(42 104 179);
}
.message-active .inp-text {
  top: -15px;
  transition: 0.2s;
}

.name-active::after,
.phone-active::after,
.email-active::after,
.city-active::after,
.message-active::after,
.zip-active::after,
.org-active::after,
.facebook-active::after,
.instagram-active::after {
  width: 0;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
  grid-gap: 30px;
  place-items: center;
  flex-grow: 1;
}

.form-profile {
  margin: 15px;
  display: flex;
}

.profile-box {
  width: 300px;
  display: grid;
  place-content: center;
  padding-bottom: 30px;
}

.pic-btn{
  background: #7C3AED;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
  width: min-content;
  white-space: nowrap;
  box-shadow: 0 0 12px rgb(0 0 0/0.6);
  cursor: pointer;
  margin: auto;
  margin-top: 15px;
}

.pic-btn:active{
  transform: scale(0.95);
}

.picture-box img{
  width: 200px;
  height: 200px;
  margin: auto;
}

textarea {
  width: 100%;
  height: 50px;
  resize: none;
  border: none;
  font-size: 20px;
  padding: 5px;
  font-family: "Poppins", sans-serif !important;
  padding-left: 35px;
  position: relative;
  background: transparent;
}

.message-box svg {
  top: 25px;
}

textarea::-webkit-scrollbar {
  display: none;
}
.submit-cover {
  height: min-content;
}

.submit-btn {
  background: rgb(47 145 255);
  padding: 12px 25px;
  border-radius: 50px;
  width: min-content;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: auto;
  box-shadow: 0 0 15px rgb(0 0 0/0.6);
  cursor: pointer;
  display: flex;
  margin-bottom: 10px;
}

.submit-btn svg {
  margin-left: 10px;
}

.submit-btn:active {
  transform: scale(0.95);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.qr-backdrop{
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  backdrop-filter: blur(15px);
  background: rgb(0 0 0/0.6);
}

.qr-popup{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
  height: 600px;
  max-height: 90vh;
  position: fixed;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  z-index: 101;
  background: white;
  box-shadow: 0 0 15px rgb(0 0 0/0.8);
  border-radius: 20px;
}

.qr-pop-hide{
  display: none;
}

.qr-text{
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin: 15px 0;
}

.qr-img{
  width: 400px;
  height: 400px;
}


</style>