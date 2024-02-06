const routes = [
  {
    path: "/",
    data: `<main>
        <div class="hero">
        <button class='github'><svg class='github-logo' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" fill="#231f20"/></svg>
            Vist the github repo
            <svg class='arrow' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.26946 7.6625L12.6817 1.95767C12.7826 1.85129 12.8626 1.72499 12.9173 1.586C12.9719 1.447 13 1.29803 13 1.14758C13 0.843741 12.8855 0.552344 12.6817 0.337496C12.5807 0.231114 12.4609 0.146727 12.3291 0.0891533C12.1972 0.0315797 12.0559 0.00194772 11.9131 0.00194772C11.6249 0.00194772 11.3484 0.122648 11.1446 0.337496L6.50092 5.24365L1.85725 0.337496C1.75662 0.230555 1.63691 0.145674 1.505 0.0877485C1.37309 0.0298231 1.23161 0 1.08872 0C0.945823 0 0.804342 0.0298231 0.672437 0.0877485C0.540531 0.145674 0.420813 0.230555 0.320186 0.337496C0.21873 0.443564 0.138201 0.569756 0.0832472 0.708793C0.0282927 0.847831 9.53674e-07 0.996961 9.53674e-07 1.14758C9.53674e-07 1.2982 0.0282927 1.44733 0.0832472 1.58637C0.138201 1.72541 0.21873 1.8516 0.320186 1.95767L5.73239 7.6625C5.83302 7.76944 5.95274 7.85433 6.08464 7.91225C6.21655 7.97018 6.35803 8 6.50092 8C6.64382 8 6.7853 7.97018 6.91721 7.91225C7.04911 7.85433 7.16883 7.76944 7.26946 7.6625Z" fill="#7077A1"/>
            </svg>
            </button>
        <h2>Custom user-authentication app</h2>
        <p>Created using vanilia JS and GO. For anyone looking to get the fundementals down</p>
        <button class='li-su-big'><a href="/signup" onclick="router(event)">Get Started</a>
            <svg class='arrow' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.26946 7.6625L12.6817 1.95767C12.7826 1.85129 12.8626 1.72499 12.9173 1.586C12.9719 1.447 13 1.29803 13 1.14758C13 0.843741 12.8855 0.552344 12.6817 0.337496C12.5807 0.231114 12.4609 0.146727 12.3291 0.0891533C12.1972 0.0315797 12.0559 0.00194772 11.9131 0.00194772C11.6249 0.00194772 11.3484 0.122648 11.1446 0.337496L6.50092 5.24365L1.85725 0.337496C1.75662 0.230555 1.63691 0.145674 1.505 0.0877485C1.37309 0.0298231 1.23161 0 1.08872 0C0.945823 0 0.804342 0.0298231 0.672437 0.0877485C0.540531 0.145674 0.420813 0.230555 0.320186 0.337496C0.21873 0.443564 0.138201 0.569756 0.0832472 0.708793C0.0282927 0.847831 9.53674e-07 0.996961 9.53674e-07 1.14758C9.53674e-07 1.2982 0.0282927 1.44733 0.0832472 1.58637C0.138201 1.72541 0.21873 1.8516 0.320186 1.95767L5.73239 7.6625C5.83302 7.76944 5.95274 7.85433 6.08464 7.91225C6.21655 7.97018 6.35803 8 6.50092 8C6.64382 8 6.7853 7.97018 6.91721 7.91225C7.04911 7.85433 7.16883 7.76944 7.26946 7.6625Z" fill="#7077A1"/>
                </svg>
        </button>
        </div>
        <div class="grad"></div>
    </main>`,
  },
  {
    path: "/signin",
    data: `<main>
        <form class="form_container">
            <div class="logo_container">
                <svg class='logo-svg-card' width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.429 0H5.09613C3.74457 0 2.44836 0.536926 1.49261 1.49261C0.536926 2.44836 0 3.74457 0 5.09613V14.429L14.429 0ZM0.525757 26.4725C3.69952 45.0619 20.2863 51.5477 23.8907 52.74C24.9224 53.0864 26.039 53.0864 27.0707 52.74C31.061 51.415 50.9614 43.6128 50.9614 20.0788V5.09613C50.9614 3.74457 50.4245 2.44836 49.4688 1.49261C48.5131 0.536926 47.2169 0 45.8653 0H26.5C26.5 1.2796 26.0118 2.5592 25.0355 3.53552L3.53552 25.0355C2.69312 25.8779 1.62494 26.3569 0.525757 26.4725Z" fill="url(#paint0_linear_2_18)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 17.571V22.7443C11 36.5095 22.3245 41.076 24.5952 41.848C25.1823 42.0507 25.8177 42.0507 26.4048 41.848C28.6755 41.073 40 36.5095 40 22.7443V13.9808C40 13.1902 39.6945 12.4321 39.1506 11.873C38.6068 11.314 37.8691 11 37.1 11H17.571L11 17.571Z" fill="url(#paint1_linear_2_18)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_18" x1="25.4807" y1="0" x2="25.4807" y2="52.9998" gradientUnits="userSpaceOnUse">
                    <stop offset="0.652972" stop-color="#6C5DE6"/>
                    <stop offset="1" stop-color="#281A9C"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_18" x1="25.5" y1="11" x2="25.5" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EB866A"/>
                    <stop offset="0.417269" stop-color="#EBA16A"/>
                    </linearGradient>
                    </defs>
                </svg>            

            </div>
            <div class="title_container">
              <p class="title">Login to your Account</p>
              <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input_container">
              <label class="input_label" for="email_field">Email</label>
              <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
                <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
              </svg>
              <input placeholder="name@mail.com" title="Inpit title" type="text" class="input_field" id="email_field">
              </div>
              <span class='errorText' id='InvalidEmail'></span>
            <div class="input_container">
              <label class="input_label" for="password_field">Password</label>
              <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
              </svg>
              <input placeholder="Password" title="Inpit title" type="password" class="input_field" id="password_field">
            </div>
            <span class='errorText' id='InvalidEmail'></span>
            <button onclick="signin(event)" title="Sign In" class="sign-in_btn">
              <span>Sign In</span>
            </button>
          
            <div class="separator">
              <hr class="line">
              <span>Or</span>
              <hr class="line">
            </div>
            <button title="Sign Up" type="submit" class="sign-in_ggl">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
              <span>Sign In with Google</span>
            </button>
            <button title="Sign In" type="submit" class="sign-in_apl">
              <svg class='github-logo' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" fill="#231f20"/></svg>
              <span>Sign In with Github</span>
            </button>
            <p class="note">Terms of use &amp; Conditions</p>
          </form>
    </main>`,
  },
  {
    path: "/signup",
    data: ` <main>
        <form class="form_container">
            <div class="logo_container">
                <svg class='logo-svg-card' width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.429 0H5.09613C3.74457 0 2.44836 0.536926 1.49261 1.49261C0.536926 2.44836 0 3.74457 0 5.09613V14.429L14.429 0ZM0.525757 26.4725C3.69952 45.0619 20.2863 51.5477 23.8907 52.74C24.9224 53.0864 26.039 53.0864 27.0707 52.74C31.061 51.415 50.9614 43.6128 50.9614 20.0788V5.09613C50.9614 3.74457 50.4245 2.44836 49.4688 1.49261C48.5131 0.536926 47.2169 0 45.8653 0H26.5C26.5 1.2796 26.0118 2.5592 25.0355 3.53552L3.53552 25.0355C2.69312 25.8779 1.62494 26.3569 0.525757 26.4725Z" fill="url(#paint0_linear_2_18)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 17.571V22.7443C11 36.5095 22.3245 41.076 24.5952 41.848C25.1823 42.0507 25.8177 42.0507 26.4048 41.848C28.6755 41.073 40 36.5095 40 22.7443V13.9808C40 13.1902 39.6945 12.4321 39.1506 11.873C38.6068 11.314 37.8691 11 37.1 11H17.571L11 17.571Z" fill="url(#paint1_linear_2_18)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2_18" x1="25.4807" y1="0" x2="25.4807" y2="52.9998" gradientUnits="userSpaceOnUse">
                    <stop offset="0.652972" stop-color="#6C5DE6"/>
                    <stop offset="1" stop-color="#281A9C"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2_18" x1="25.5" y1="11" x2="25.5" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EB866A"/>
                    <stop offset="0.417269" stop-color="#EBA16A"/>
                    </linearGradient>
                    </defs>
                </svg>            

            </div>
            <div class="title_container">
              <p class="title">Login to your Account</p>
              <span class="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input_container">
              <label class="input_label" for="email_field">Email</label>
              <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
                <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
              </svg>
              <input placeholder="name@mail.com" title="Inpit title" type="text" class="input_field" id="email_field">
            </div>
            <span class='errorText' id='InvalidEmail'></span>
            <div class="input_container">
              <label class="input_label" for="password_field">Password</label>
              <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
              </svg>
              <input placeholder="Password" title="Inpit title" type="password" class="input_field" id="password_field">
            </div>
            <button title="Sign Up" class="sign-in_btn">
              <span>Sign Up</span>
            </button>
          
            <div class="separator">
              <hr class="line">
              <span>Or</span>
              <hr class="line">
            </div>
            <button title="Sign Up" type="submit" class="sign-in_ggl">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
              <span>Sign Up with Google</span>
            </button>
            <button title="Sign Up" type="submit" class="sign-in_apl">
              <svg class='github-logo' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" fill="#231f20"/></svg>
              <span>Sign Up with Github</span>
            </button>
            <p class="note">Terms of use &amp; Conditions</p>
          </form>
    </main>`,
  },
  {
    path: "/page",
    data: `    <main>
        <div class="hero">
        <button class='github'><svg class='github-logo' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0"/><path d="m16.24 22a1 1 0 0 1 -1-1v-2.6a2.15 2.15 0 0 0 -.54-1.66 1 1 0 0 1 .61-1.67c2.44-.29 4.69-1.07 4.69-5.3a4 4 0 0 0 -.67-2.22 2.75 2.75 0 0 1 -.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0 -2.09 1.09 1 1 0 0 1 -.84.15 10.15 10.15 0 0 0 -5.52 0 1 1 0 0 1 -.84-.15 7.4 7.4 0 0 0 -2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1 -.43 2.08 4.07 4.07 0 0 0 -.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1 -.21 1 2.06 2.06 0 0 0 -.55 1.56v2.69a1 1 0 0 1 -2 0v-.57a6 6 0 0 1 -5.27-2.09 3.9 3.9 0 0 0 -1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67v2.54a1 1 0 0 1 -.94 1z" fill="#231f20"/></svg>
            Vist the github repo
            <svg class='arrow' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.26946 7.6625L12.6817 1.95767C12.7826 1.85129 12.8626 1.72499 12.9173 1.586C12.9719 1.447 13 1.29803 13 1.14758C13 0.843741 12.8855 0.552344 12.6817 0.337496C12.5807 0.231114 12.4609 0.146727 12.3291 0.0891533C12.1972 0.0315797 12.0559 0.00194772 11.9131 0.00194772C11.6249 0.00194772 11.3484 0.122648 11.1446 0.337496L6.50092 5.24365L1.85725 0.337496C1.75662 0.230555 1.63691 0.145674 1.505 0.0877485C1.37309 0.0298231 1.23161 0 1.08872 0C0.945823 0 0.804342 0.0298231 0.672437 0.0877485C0.540531 0.145674 0.420813 0.230555 0.320186 0.337496C0.21873 0.443564 0.138201 0.569756 0.0832472 0.708793C0.0282927 0.847831 9.53674e-07 0.996961 9.53674e-07 1.14758C9.53674e-07 1.2982 0.0282927 1.44733 0.0832472 1.58637C0.138201 1.72541 0.21873 1.8516 0.320186 1.95767L5.73239 7.6625C5.83302 7.76944 5.95274 7.85433 6.08464 7.91225C6.21655 7.97018 6.35803 8 6.50092 8C6.64382 8 6.7853 7.97018 6.91721 7.91225C7.04911 7.85433 7.16883 7.76944 7.26946 7.6625Z" fill="#7077A1"/>
            </svg>
            </button>
        <h2>You have been Authenticated</h2>
        <p>Created using vanilia JS and GO. For anyone looking to get the fundementals down</p>
        <button class='li-su-big'>Sign Out
            <svg class='arrow' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.26946 7.6625L12.6817 1.95767C12.7826 1.85129 12.8626 1.72499 12.9173 1.586C12.9719 1.447 13 1.29803 13 1.14758C13 0.843741 12.8855 0.552344 12.6817 0.337496C12.5807 0.231114 12.4609 0.146727 12.3291 0.0891533C12.1972 0.0315797 12.0559 0.00194772 11.9131 0.00194772C11.6249 0.00194772 11.3484 0.122648 11.1446 0.337496L6.50092 5.24365L1.85725 0.337496C1.75662 0.230555 1.63691 0.145674 1.505 0.0877485C1.37309 0.0298231 1.23161 0 1.08872 0C0.945823 0 0.804342 0.0298231 0.672437 0.0877485C0.540531 0.145674 0.420813 0.230555 0.320186 0.337496C0.21873 0.443564 0.138201 0.569756 0.0832472 0.708793C0.0282927 0.847831 9.53674e-07 0.996961 9.53674e-07 1.14758C9.53674e-07 1.2982 0.0282927 1.44733 0.0832472 1.58637C0.138201 1.72541 0.21873 1.8516 0.320186 1.95767L5.73239 7.6625C5.83302 7.76944 5.95274 7.85433 6.08464 7.91225C6.21655 7.97018 6.35803 8 6.50092 8C6.64382 8 6.7853 7.97018 6.91721 7.91225C7.04911 7.85433 7.16883 7.76944 7.26946 7.6625Z" fill="#7077A1"/>
                </svg>
        </button>
        </div>
        <div class="grad"></div>
    </main>`,
  },
];

const root = document.getElementById("root");

function router(event) {
  event.preventDefault();
  history.pushState({}, "newUrl", event.target.href);
  let route = routes.find((route) => route.path == window.location.pathname);
  root.innerHTML = route.data;
  navColorLink();
}
const url = "http://localhost:3000";

function signin(event) {
  event.preventDefault();
  const email = document.getElementById("email_field").value;
  const password = document.getElementById("password_field").value;
  // console.log(password)
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      user: true,
      signup: false,
    }),
  }).then((resp) =>
    resp
      .json()
      .then((data) => ({
        data: data,
        // status: resp.status
      }))
      .then((resp) => {
        console.log(resp.data, resp.data.title);
      })
  );
}

function signup(event) {
  event.preventDefault();
  const email = document.getElementById("email_field").value;
  const password = document.getElementById("password_field").value;
  console.log(password);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      user: true,
      signup: true,
    }),
  }).then((resp) => console.log(resp));
}

window.addEventListener("popstate", function () {
  let data = routes.find((route) => route.path == window.location.pathname);
  root.innerHTML = data.data;
});

window.addEventListener("DOMContentLoaded", function () {
  let route = routes.find((route) => route.path == window.location.pathname);
  root.innerHTML = route.data;
  navColorLink();
});

const links = document.querySelectorAll("nav ul li a");

function navColorLink() {
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
