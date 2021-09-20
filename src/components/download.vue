<template>
    <body class="upload-body">
    <div class="upload-container">
        <div class="main-panel">
            <div class="drive-text">
                Welcome To My Drive !
            </div>
        </div>

        <div class="side-bar">
            <div class="file-logo-main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none"
                        stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <polyline fill="none" points="14 2 14 8 20 8" stroke="rgb(250 250 250)" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    <line fill="none" stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="16" x2="8" y1="13" y2="13" />
                    <line fill="none" stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" x1="16" x2="8" y1="17" y2="17" />
                    <polyline fill="none" points="10 9 9 9 8 9" stroke="rgb(250 250 250)" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                </svg>
            </div>
            <div class="file-box-cover">

            <div class="file-box">
                <div class="file-cover">
                    <div class="file-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none"
                                stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <polyline fill="none" points="14 2 14 8 20 8" stroke="rgb(250 250 250)"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <line fill="none" stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="16" x2="8" y1="13" y2="13" />
                            <line fill="none" stroke="rgb(250 250 250)" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="16" x2="8" y1="17" y2="17" />
                            <polyline fill="none" points="10 9 9 9 8 9" stroke="rgb(250 250 250)" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" />
                        </svg>
                    </div>
                    <div class="file-name">
                        File Name
                    </div>
                </div>

                <div class="download-file">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M0 0h48v48h-48z" fill="none"/><path fill="white" d="M38.71 20.07c-1.36-6.88-7.43-12.07-14.71-12.07-5.78 0-10.79 3.28-13.3 8.07-6.01.65-10.7 5.74-10.7 11.93 0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zm-4.71 5.93l-10 10-10-10h6v-8h8v8h6z"/></svg>
                </div>
            </div>

        </div>

        </div>
    </div>
</body>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .upload-body {
        overflow: hidden;
        min-height: 100vh;
        width: 100vw;
        background: #161623;
        display: grid;
        place-items: center;
        user-select: none;
        background: url("../assets/upload3.jpg") no-repeat center center/cover;
    }

    .upload-container {
        display: flex;
        width: 98vw;
        height: 95vh;
        background: rgb(250 250 250/0.1);
        border-radius: 15px;
        box-shadow: 0 0 5px #1D4ED8, 0 0 15px #1D4ED8, 0 0 25px #1D4ED8, 0 0 30px #1D4ED8, 0 0 35px #1D4ED8;
        border-top: 1px solid rgb(250 250 250/0.3);
        border-left: 1px solid rgb(250 250 250/0.3);
        font-family: 'Open Sans', sans-serif !important;
        backdrop-filter: blur(5px);

    }

    .main-panel {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

    }

    .side-bar {
        background: rgb(250 250 250/0.2);
        width: 30vw;
        border-radius: 0 15px 15px 0;
        display: flex;
        flex-direction: column;
    }

    .drive-text {
        font-size: 60px;
        font-weight: 700;
        text-align: center;
        color: rgb(250 250 250/0.9);
        margin-top: 20px;
    }

    .file-cover {
        display: flex;
        place-items: center;
    }

    .file-logo {
        width: 28px;
        height: 28px;
        margin: 0 10px;
    }

    .file-name {
        color: white;
        font-size: 20px;
        margin: 8px;
        white-space: nowrap;
    }

    .download-file {
        display: flex;
        justify-content: center;
        align-items: center;
        width: min-content;
        background: #059669;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        height: min-content;
        margin-left: 10px;
    }

    .download-file:active,
    .add-btn:active {
        transform: scale(0.95);
    }

    .download-file svg {
        height: 18px;
        width: 18px;
        transform: scale(1.3);
    }

    .delete-text {
        font-size: 18px;
        margin-right: 5px;
        color: white;
    }

    .add-btn,
    .qr-btn {
        background-color: #2563EB;
        width: min-content;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        border-radius: 13px;
        margin: auto;
        cursor: pointer;
        box-shadow: 0 0 20px rgb(0 0 0/0.4);
    }

    .add-btn {
        padding: 20px 35px;
    }

    .qr-btn {
        background: #059669;
    }

    .add-text {
        font-size: 40px;
        color: white;
        white-space: nowrap;
        margin-right: 10px;
    }

    .add-btn svg {
        height: 50px;
        width: 50px;
    }

    .qr-text {
        white-space: nowrap;
        color: white;
        font-size: 23px;
        margin-right: 10px;
    }

    .qr-btn svg {
        width: 35px;
        height: 35px;
    }

    .file-box {
        border-radius: 12px;
        width: min-content;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        border-bottom: 1px solid white;
        padding: 5px 0;
    }

    .file-box-cover{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        margin: 5px 10px 12px 0;
    }

    .file-logo-main {
        display: grid;
        place-items: center;
        margin: 30px;
    }

    .file-logo-main svg {
        width: 90px;
    }

    ::-webkit-scrollbar{
        width: 7px;
    }

    ::-webkit-scrollbar-track{
        display: none ;
    }

    ::-webkit-scrollbar-thumb{
        background: rgb(250 250 250/0.6);
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: rgb(250 250 250/0.9);
        border-radius: 50px;
    }

    .add-box{
        display: grid;
        place-items: center;
    }

    .drop-box{
        width: max-content;
        height: 280px;
        width: 450px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='31' ry='31' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
border-radius: 31px;
    }

    .upload-text{
        color: white;
        font-size: 30px;
        margin-bottom: 25px;

    }
    .files-icon{
        width: 75px;
    }

    .drop-text{
        color: rgb(250 250 250/0.85);
        font-size: 20px;
        margin-bottom: 25px;
        margin-top: 10px;
    }
</style>