<template>
    <body class="upload-body">
    <div class="upload-container">
        <div class="main-panel">
            <div class="user-text">
                HEY ROHAN WELCOME !
            </div>

            <!-- <div class="add-cover">
                
                <div class="add-btn">
                    <div class="add-text">
                        Add File
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="white"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <polyline fill="none" points="14 2 14 8 20 8" stroke="white" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" />
                        <line fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            x1="12" x2="12" y1="18" y2="12" />
                        <line fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            x1="9" x2="15" y1="15" y2="15" />
                    </svg>
                </div>
            </div> -->
            
            <div class="add-box">
                <div class="upload-text">
                    Upload your files
                </div>
                <div class="drop-box">
                    <img class="files-icon" src="../assets/files.png" alt="">
                    <div class="drop-text">
                        Drag & Drop your files here
                    </div>
                </div>
            </div>
            <div class="qr-cover">
                <div class="qr-btn">
                    <div class="qr-text">
                        Click Here To Generate QR Code
                    </div>

                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" id="Layer_1"
                        viewBox="0 0 200 200">
                        <title />
                        <path
                            d="M75,15H35A20.06,20.06,0,0,0,15,35V75A20.06,20.06,0,0,0,35,95H75A20.06,20.06,0,0,0,95,75V35A20.06,20.06,0,0,0,75,15Zm0,60H35V35H75Zm0,30H35a20.06,20.06,0,0,0-20,20v40a20.06,20.06,0,0,0,20,20H75a20.06,20.06,0,0,0,20-20V125A20.06,20.06,0,0,0,75,105Zm0,60H35V125H75ZM165,15H125a20.06,20.06,0,0,0-20,20V75a20.06,20.06,0,0,0,20,20h40a20.06,20.06,0,0,0,20-20V35A20.06,20.06,0,0,0,165,15Zm0,60H125V35h40ZM50,65H60a5.38,5.38,0,0,0,5-5V50a5.38,5.38,0,0,0-5-5H50a5.38,5.38,0,0,0-5,5V60A5.38,5.38,0,0,0,50,65Zm0,90H60a5.38,5.38,0,0,0,5-5V140a5.38,5.38,0,0,0-5-5H50a5.38,5.38,0,0,0-5,5v10A5.38,5.38,0,0,0,50,155Zm90-90h10a5.38,5.38,0,0,0,5-5V50a5.38,5.38,0,0,0-5-5H140a5.38,5.38,0,0,0-5,5V60A5.38,5.38,0,0,0,140,65Zm-30,80h10a5.38,5.38,0,0,0,5-5V130a5.38,5.38,0,0,1,5-5h10a5.38,5.38,0,0,0,5-5V110a5.38,5.38,0,0,0-5-5H110a5.38,5.38,0,0,0-5,5v30a5.38,5.38,0,0,0,5,5Zm70-40H170a5.38,5.38,0,0,0-5,5v30a5.38,5.38,0,0,0,5,5h10a5.38,5.38,0,0,0,5-5V110A5.38,5.38,0,0,0,180,105Zm-60,60H110a5.38,5.38,0,0,0-5,5v10a5.38,5.38,0,0,0,5,5h10a5.38,5.38,0,0,0,5-5V170A5.38,5.38,0,0,0,120,165Zm60,0H170a5.38,5.38,0,0,1-5-5V150a5.38,5.38,0,0,0-5-5H130a5.38,5.38,0,0,0-5,5v10a5.38,5.38,0,0,0,5,5h10a5.38,5.38,0,0,1,5,5v10a5.38,5.38,0,0,0,5,5h30a5.38,5.38,0,0,0,5-5V170A5.38,5.38,0,0,0,180,165Z" />
                    </svg>
                </div>
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

                <div class="delete-file">
                    <!-- <div class="delete-text">Delete</div> -->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 14 18">
                        <title />
                        <desc />
                        <defs />
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                            <g fill="white" id="Core" transform="translate(-299.000000, -129.000000)">
                                <g id="delete" transform="translate(299.000000, 129.000000)">
                                    <path
                                        d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z"
                                        id="Shape" />
                                </g>
                            </g>
                        </g>
                    </svg>
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

    .user-text {
        font-size: 50px;
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

    .delete-file {
        display: flex;
        justify-content: center;
        align-items: center;
        width: min-content;
        background: rgb(218, 26, 26);
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        height: min-content;
        margin-left: 10px;
    }

    .delete-file:active,
    .add-btn:active {
        transform: scale(0.95);
    }

    .delete-file svg {
        height: 18px;
        width: 18px;
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