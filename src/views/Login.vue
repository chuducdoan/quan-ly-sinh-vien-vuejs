<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-inner">
        <h1>Login</h1>
        <form @submit.prevent="">
          <div class="form-group">
            <input type="text" placeholder="Username or Email" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" />
          </div>
          <div class="login-extra">
            <a href="#">Forgot Password?</a>
            <base-button size="lg" :is-full="true">Login</base-button>
          </div>
          <div class="login-footer">
            <span class="line"></span>
            <span>Or</span>
            <span class="line"></span>
          </div>
          <div class="login-social">
            <base-button size="sm" color="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M15.4454 7.11281H14.8748V7.08342H8.49984V9.91675H12.503C11.919 11.5661 10.3497 12.7501 8.49984 12.7501C6.15278 12.7501 4.24984 10.8471 4.24984 8.50008C4.24984 6.15302 6.15278 4.25008 8.49984 4.25008C9.58323 4.25008 10.5689 4.65879 11.3194 5.32639L13.3229 3.32287C12.0578 2.14385 10.3656 1.41675 8.49984 1.41675C4.58807 1.41675 1.4165 4.58831 1.4165 8.50008C1.4165 12.4119 4.58807 15.5834 8.49984 15.5834C12.4116 15.5834 15.5832 12.4119 15.5832 8.50008C15.5832 8.02514 15.5343 7.56154 15.4454 7.11281Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.2334 5.20314L4.56063 6.90987C5.19034 5.35083 6.71538 4.25008 8.50002 4.25008C9.58342 4.25008 10.5691 4.65879 11.3195 5.32639L13.3231 3.32287C12.058 2.14385 10.3658 1.41675 8.50002 1.41675C5.77931 1.41675 3.41986 2.95277 2.2334 5.20314Z"
                  fill="#FF3D00"
                />
                <path
                  d="M8.49978 15.5832C10.3294 15.5832 11.9919 14.883 13.2488 13.7444L11.0565 11.8893C10.3215 12.4483 9.42326 12.7506 8.49978 12.7499C6.65741 12.7499 5.09306 11.5751 4.50372 9.93567L2.19385 11.7154C3.36614 14.0093 5.74685 15.5832 8.49978 15.5832Z"
                  fill="#4CAF50"
                />
                <path
                  d="M15.4456 7.11265H14.875V7.08325H8.5V9.91659H12.5031C12.2238 10.7016 11.7206 11.3875 11.0557 11.8896L11.0567 11.8889L13.249 13.7441C13.0939 13.885 15.5833 12.0416 15.5833 8.49992C15.5833 8.02498 15.5345 7.56138 15.4456 7.11265Z"
                  fill="#1976D2"
                />
              </svg>
              Google
            </base-button>
            <base-button size="sm" color="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g clip-path="url(#clip0_37_5453)">
                  <path
                    d="M13.3211 0.793091H15.9155L10.2488 7.28659L16.9157 16.1229H11.6961L7.60782 10.7628L2.92958 16.1229H0.334084L6.39518 9.17691L0 0.793091H5.35275L9.04776 5.69123L13.3211 0.793091ZM12.4119 14.5667H13.8497L4.5704 2.26792H3.02896L12.4119 14.5667Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_37_5453">
                    <rect width="16.9157" height="16.9157" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Twitter
            </base-button>
            <base-button size="sm" color="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_37_5457)">
                  <path
                    d="M12.3674 0.00897786C12.3298 -0.0330503 10.975 0.025568 9.79597 1.30522C8.61697 2.58376 8.79836 4.05032 8.8249 4.08792C8.85145 4.12553 10.506 4.18414 11.5623 2.69657C12.6185 1.20899 12.405 0.052112 12.3674 0.00897786ZM16.0327 12.9857C15.9796 12.8796 13.4613 11.6209 13.6957 9.20098C13.9302 6.77994 15.5483 6.11633 15.5737 6.04444C15.5992 5.97255 14.9135 5.1707 14.1868 4.7648C13.6533 4.47862 13.0628 4.31466 12.4581 4.28479C12.3387 4.28147 11.9239 4.17972 11.0712 4.41309C10.5093 4.56682 9.24297 5.06452 8.89458 5.08443C8.54508 5.10434 7.50544 4.5071 6.38727 4.34894C5.67168 4.21069 4.91296 4.49383 4.36992 4.71171C3.82797 4.92849 2.79718 5.54564 2.07606 7.18584C1.35495 8.82494 1.73209 11.4218 2.00196 12.2292C2.27182 13.0355 2.69321 14.3572 3.4099 15.3216C4.04696 16.4099 4.89195 17.1653 5.24477 17.4219C5.59758 17.6785 6.59298 17.8488 7.28313 17.496C7.83835 17.1554 8.84039 16.9596 9.23634 16.974C9.63118 16.9884 10.4098 17.1443 11.2072 17.5701C11.8388 17.788 12.436 17.6973 13.0344 17.454C13.6327 17.2096 14.4987 16.2827 15.5096 14.4036C15.8934 13.5299 16.0681 13.0576 16.0327 12.9857Z"
                    fill="black"
                  />
                  <path
                    d="M12.3674 0.00897786C12.3298 -0.0330503 10.975 0.025568 9.79597 1.30522C8.61697 2.58376 8.79836 4.05032 8.8249 4.08792C8.85145 4.12553 10.506 4.18414 11.5623 2.69657C12.6185 1.20899 12.405 0.052112 12.3674 0.00897786ZM16.0327 12.9857C15.9796 12.8796 13.4613 11.6209 13.6957 9.20098C13.9302 6.77994 15.5483 6.11633 15.5737 6.04444C15.5992 5.97255 14.9135 5.1707 14.1868 4.7648C13.6533 4.47862 13.0628 4.31466 12.4581 4.28479C12.3387 4.28147 11.9239 4.17972 11.0712 4.41309C10.5093 4.56682 9.24297 5.06452 8.89458 5.08443C8.54508 5.10434 7.50544 4.5071 6.38727 4.34894C5.67168 4.21069 4.91296 4.49383 4.36992 4.71171C3.82797 4.92849 2.79718 5.54564 2.07606 7.18584C1.35495 8.82494 1.73209 11.4218 2.00196 12.2292C2.27182 13.0355 2.69321 14.3572 3.4099 15.3216C4.04696 16.4099 4.89195 17.1653 5.24477 17.4219C5.59758 17.6785 6.59298 17.8488 7.28313 17.496C7.83835 17.1554 8.84039 16.9596 9.23634 16.974C9.63118 16.9884 10.4098 17.1443 11.2072 17.5701C11.8388 17.788 12.436 17.6973 13.0344 17.454C13.6327 17.2096 14.4987 16.2827 15.5096 14.4036C15.8934 13.5299 16.0681 13.0576 16.0327 12.9857Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_37_5457">
                    <rect width="17.6961" height="17.6961" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Apple
            </base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-container {
  background-color: #d9deef;
  display: flex;
  height: 100vh;
  background-image: url(../assets/image/bg-login.png);
  background-repeat: no-repeat;
  justify-content: flex-end;
  padding-right: 106px;
}

.login-wrap {
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-inner {
  width: 100%;
}

.login-inner h1 {
  text-align: center;
  font-size: 50px;
  position: relative;
  margin-bottom: 100px;
}

.login-inner h1::after {
  content: '';
  position: absolute;
  width: 88px;
  height: 4px;
  background-color: #1b5299;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
}

.form-group {
  margin-bottom: 36px;
}

.form-group input {
  height: 35px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #565353;
  color: #565353;
  font-size: 16px;
}

.form-group input:focus {
  outline: none;
  /* border: none; */
}

.login-extra a {
  color: #1b5299;
  text-decoration: none;
  font-style: italic;
  margin-bottom: 20px;
  display: inline-block;
}

.login-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.login-footer span.line {
  height: 1px;
  display: inline-block;
  background-color: #000;
  width: 44%;
}

.login-footer span {
  color: #565353;
}

.login-social {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-social button {
  width: calc(100% / 3 - 22.67px);
}
</style>
