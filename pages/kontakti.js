import Header from "../components/Header";
import Form from "../components/homePage/Form";
import Map from "../components/Map";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Kontakti = () => {
  const { t } = useTranslation("contact");
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const name = t("name");
  const email = t("email");
  const message = t("message");
  const phone = t("phone");
  const lName = t("lName");
  const send = t("send");

  return (
    <div className="w-full min-h-screen kontaktiBg overflow-hidden">
      <Header />
      <main className="w-full h-full pt-24">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-orange-main md:text-headerDesktop pb-10 text-mobH3">
            {t("contact")}
          </h1>
          <p className="w-2/3 text-center md:text-paragraphDesktop text-mobParagraph">
            {t("contactText")}
          </p>
        </div>
        <Form
          name={name}
          lName={lName}
          phone={phone}
          message={message}
          email={email}
          send={send}
        />
        <div className="w-full flex md:flex-row flex-col items-center px-[12vw] justify-between ">
          <div className="md:w-4/5 w-full">
            <Map />
          </div>

          <div className="md:w-1/3 w-full flex md:flex-col md:items-start justify-around">
            {/* location */}
            {!isMobile && (
              <div className="flex md:flex-row flex-col md:items-start items-center gap-4 pb-6">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.5843 7.74568C36.0376 4.40327 35.6083 1.58336 31.848 1.01733C29.3404 0.640083 26.7985 0.789697 24.2956 0.51087C20.8523 0.458064 17.3758 0.615279 13.8925 0.60648C11.0886 0.59968 6.53511 0.128023 4.48063 2.52547C2.455 4.88812 1.85489 9.18624 2.02728 12.161C2.2776 16.4835 1.76836 20.9088 1.50011 25.2236C1.24471 29.3321 1.57225 34.1194 5.57363 36.2708C9.09026 38.161 12.7341 37.2841 16.4669 37.7218C20.6687 38.2142 24.7457 37.7822 28.9483 37.2057C29.9796 37.0641 31.032 36.9165 31.9662 36.4464C36.6211 34.1037 35.8217 27.7318 36.0811 23.4114C36.3883 18.2948 37.4173 12.8425 36.5848 7.74651L36.5843 7.74568Z"
                    fill="#67AE3E"
                  />
                  <g clip-path="url(#clip0_84_203)">
                    <path
                      d="M13.5114 16.3807C13.8042 16.7779 14.0908 17.1955 14.1186 17.2545C14.3787 18.4326 14.8374 19.2739 15.3233 20.1648C15.5908 20.6562 15.8678 21.164 16.1104 21.7366C16.3672 22.3508 16.9674 23.3557 17.2238 23.7857C17.2856 23.8891 17.3274 23.9585 17.339 23.98C17.4225 24.1483 17.5745 24.3603 17.7091 24.5475C17.779 24.6451 17.8715 24.7736 17.9077 24.836C17.898 25.0201 17.9951 25.2201 18.1801 25.3928C18.3749 25.5746 18.667 25.7255 18.9494 25.7255C19.0235 25.7255 19.0969 25.7148 19.1677 25.692C19.3314 25.641 19.4515 25.4646 19.5314 25.3448C19.6727 25.2871 19.7077 25.101 19.7258 25.004C19.7313 24.9742 19.7355 24.946 19.731 24.946C21.4404 22.4716 22.4852 20.4918 23.02 18.7157C23.1342 18.3316 23.25 17.9495 23.3658 17.5675C23.4823 17.1851 23.5987 16.8024 23.7123 16.4176C23.7948 16.1429 23.8769 15.6854 23.9316 15.3828C23.9526 15.2684 23.9669 15.1835 23.9714 15.1644C24.1429 14.6499 24.2839 13.6006 24.2803 13.5318L24.2978 13.4409C24.5822 11.7265 24.8756 9.95417 23.7634 8.13741C23.2937 7.37028 22.7389 6.89401 21.8476 6.49342C21.5461 6.35489 20.9955 6.24922 20.6992 6.19254C20.6251 6.17812 20.5711 6.16839 20.5601 6.16604C20.3903 6.10533 20.1641 6.05871 19.9364 6.02315L19.9383 5.99463L19.9138 5.99329C19.5925 5.96881 19.2613 5.91983 18.9115 5.86818C18.0333 5.73837 17.1252 5.60554 16.2828 5.85007C15.8807 5.96747 15.365 6.4042 14.7064 7.18638L14.6614 7.23938C12.6625 9.31203 12.7971 11.7583 12.9394 14.3475C12.9757 14.9975 13.1439 15.873 13.5114 16.3805L13.5114 16.3807ZM17.7968 12.1201C17.996 11.6719 18.4011 11.3895 18.9669 11.304C19.5634 11.2164 20.1991 11.5103 20.5139 12.0208C20.8361 12.5431 20.8079 13.2663 20.4466 13.7412C20.3127 13.9176 20.1276 14.0729 19.8982 14.2028C18.7337 14.8656 18.107 14.036 17.9421 13.7667C17.6347 13.2609 17.5772 12.6138 17.7968 12.12L17.7968 12.1201Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M28.612 26.7411C28.0698 25.8221 26.8011 25.1019 24.9423 24.6561L24.6019 24.5716C24.2264 24.4773 23.7942 24.3734 23.3494 24.2969C23.2937 24.5756 23.209 24.8527 23.0799 25.1207C23.0113 25.2629 22.9427 25.4055 22.8738 25.5477C22.8318 25.6353 22.7826 25.7174 22.7302 25.7969C25.2729 26.2072 26.6982 27.149 26.7183 27.5314C26.7506 28.1412 25.8998 29.3122 23.4778 29.8603C22.4176 30.1002 20.7523 30.3252 19.5172 30.395C19.1319 30.4175 18.6832 30.403 18.2186 30.3859C17.8388 30.3715 17.6826 30.3638 17.6496 30.3638C17.6425 30.3638 17.6412 30.3638 17.6444 30.3648C17.2821 30.2984 16.7007 30.2682 16.1483 30.2437L16.0651 30.24C13.5011 29.334 12.3504 28.2295 12.3669 27.5817C12.3731 27.3453 12.527 27.1316 12.8224 26.9488L13.0097 26.831C13.1566 26.7378 13.3083 26.6402 13.4759 26.5563C13.7457 26.4235 13.8793 26.3554 13.9563 26.3047C14.0161 26.2846 14.1694 26.239 14.5201 26.1618L14.5809 26.1474C14.9691 26.0445 15.4065 25.9619 15.8678 25.8932C15.7297 25.6503 15.5695 25.4219 15.4401 25.1743C15.4217 25.1391 15.411 25.1059 15.3939 25.0714C15.3628 25.0167 15.3285 24.9637 15.2988 24.9073C15.2166 24.75 15.1551 24.5877 15.1021 24.4236C14.9361 24.4478 14.7 24.4904 14.4923 24.528C14.3904 24.5467 14.2752 24.5675 14.2817 24.5689C13.7049 24.6014 13.1423 24.7544 12.8059 24.8872C12.6933 24.9328 12.5623 25.0083 12.4549 25.0737L12.4174 25.0962C10.862 25.6714 9.99503 26.4661 9.84108 27.4593C9.69357 28.4099 10.2218 29.3736 11.412 30.3242C11.993 30.7875 12.9108 31.0488 13.9221 31.3369L14.9544 31.6307C15.0301 31.6515 15.1727 31.6951 15.2151 31.7102C15.831 31.9346 17.0632 31.9819 17.9878 31.9819C18.7988 31.9819 19.6499 31.9444 20.1549 31.8863C20.4331 31.8545 20.7184 31.824 21.0096 31.7931C22.0933 31.6774 23.2149 31.5566 24.186 31.353C26.6019 30.8465 28.5166 29.5478 28.843 28.1925C28.9627 27.7005 28.8825 27.199 28.612 26.7412L28.612 26.7411Z"
                      fill="#ffffff"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_84_203">
                      <rect
                        width="20"
                        height="27.5"
                        fill="white"
                        transform="translate(9.23975 5.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="  text-sm ">
                  <p>Zahir Pajaziti</p>
                  <p>Podujevë, Kosovë</p>
                </div>
              </div>
            )}
            {/* phone  */}
            {!isMobile && (
              <div className="flex items-start gap-4 pb-6">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.6645 7.85262C36.1178 4.5102 35.6885 1.69029 31.9282 1.12426C29.4206 0.747016 26.8787 0.89663 24.3758 0.617804C20.9325 0.564998 17.456 0.722212 13.9727 0.713414C11.1688 0.706613 6.61531 0.234957 4.56083 2.63241C2.5352 4.99505 1.93508 9.29317 2.10747 12.2679C2.3578 16.5904 1.84856 21.0157 1.58031 25.3306C1.32491 29.439 1.65244 34.2264 5.65383 36.3777C9.17046 38.2679 12.8143 37.3911 16.5471 37.8287C20.7489 38.3212 24.8259 37.8891 29.0285 37.3126C30.0598 37.171 31.1122 37.0234 32.0464 36.5534C36.7013 34.2107 35.9019 27.8387 36.1613 23.5184C36.4685 18.4018 37.4975 12.9495 36.665 7.85345L36.6645 7.85262Z"
                    fill="#67AE3E"
                  />
                  <g clip-path="url(#clip0_84_116)">
                    <rect
                      width="19.7468"
                      height="24.1558"
                      transform="translate(9.3756 7.01318)"
                      fill="#67AE3E"
                    />
                    <path
                      d="M28.3287 24.9597L28.1699 24.8258C27.9862 24.5432 27.7127 24.4169 27.4706 24.3051L26.9995 24.1899L26.9605 24.1264L26.8587 24.1024C26.556 23.9528 26.2378 23.8243 25.9294 23.6997C25.6112 23.5711 25.309 23.4488 25.0272 23.3064L25.0328 23.2948C24.9535 23.2532 24.8716 23.204 24.7868 23.1534C24.4568 22.9553 24.0458 22.7094 23.5849 22.7996C23.5017 22.8162 23.4206 22.8379 23.3406 22.8624C23.2773 22.8532 23.2182 22.8515 23.1605 22.8567C22.956 22.8765 22.8048 22.9726 22.7013 23.0424C22.5155 23.114 22.2084 23.3081 22.2125 23.3094H22.2133C21.897 23.431 21.5403 23.5682 21.2343 23.7145C21.0869 23.7318 20.9481 23.7311 20.8007 23.7118C20.7542 23.7091 20.6299 23.6777 20.4978 23.6446C20.0764 23.5385 19.4442 23.3796 18.9755 23.4876C18.7317 23.3889 18.4734 23.2824 18.217 23.1598C18.0505 23.073 17.8322 22.922 17.6475 22.766L17.616 22.7393L17.5758 22.7291C17.5283 22.7178 17.4706 22.675 17.4764 22.6856C16.8236 21.9232 16.3457 21.0575 15.8783 19.7937C15.7084 19.3035 15.3841 18.4868 15.2266 18.0937C15.6858 17.819 16.1943 17.4964 16.193 17.4944C16.944 17.1773 18.0304 16.5325 18.6285 15.7526C18.8143 15.4807 18.8955 15.1227 18.847 14.806C18.8289 14.6073 18.6796 14.3549 18.659 14.3232C18.5686 14.1309 18.4763 13.8987 18.3839 13.6382C18.3609 13.524 18.3224 13.3799 18.2739 13.2318C18.2402 13.0461 18.21 12.8526 18.1835 12.6521C18.2196 12.2516 18.2286 11.8378 18.0728 11.524C18.0391 11.4336 17.978 11.354 17.8869 11.2813C17.8532 11.1448 17.8326 11.0123 17.8324 11.0098L17.8234 10.9747C17.7888 10.8805 17.7612 10.817 17.7338 10.7532C17.7083 10.6954 17.6834 10.6373 17.6368 10.5211L17.5736 10.4247C17.4951 10.2121 17.237 9.98712 17.1864 9.9441L17.1551 9.92284C17.0911 9.88947 17.0351 9.8509 16.9804 9.81357C16.8679 9.73694 16.7514 9.65808 16.5919 9.6205C16.4228 9.58045 16.3188 9.55202 16.2553 9.53224L16.1257 9.45882C15.7556 9.29591 15.3461 9.17428 14.9504 9.0566C14.7568 8.99925 14.5617 8.94115 14.3938 8.8885C14.2823 8.8304 14.1718 8.78986 14.0543 8.74709C13.9595 8.71248 13.8587 8.67589 13.7172 8.61409L13.6156 8.59011C13.5517 8.57528 13.5017 8.5508 13.4509 8.52732C13.3869 8.4979 13.3139 8.46428 13.2211 8.44227L13.0425 8.4C13.0183 8.3869 12.9926 8.37478 12.9703 8.36564C12.2518 8.0005 11.2469 7.77628 10.7828 8.34907C10.5586 8.62546 10.4709 9.01282 10.3861 9.3871C10.3476 9.55545 10.3115 9.7149 10.2649 9.85384C10.1881 9.99351 10.1224 10.2434 10.0967 10.349C9.87574 10.6145 9.77299 11.0676 9.70805 11.3559C9.63971 11.8152 9.66225 12.1791 9.68624 12.564C9.70054 12.7712 9.71411 12.9892 9.71411 13.2439C9.72914 13.6985 9.72671 14.0814 9.72477 14.4861C9.72332 14.8105 9.72138 15.1452 9.72865 15.5439L9.75095 15.9254C9.83043 17.306 9.90555 18.6104 10.3052 19.9253C10.4942 20.4988 10.7452 21.0573 10.9881 21.5977C11.0755 21.793 11.1628 21.9873 11.2452 22.1769L11.3675 22.4785C11.6469 23.1709 11.8488 23.6718 12.2542 24.3976C12.7617 25.2997 13.6132 26.114 14.3904 26.8005C14.5603 26.9279 14.7478 27.0292 14.9286 27.1269C15.1067 27.2235 15.2749 27.3147 15.4317 27.4312C15.6016 27.5464 15.7424 27.6937 15.8914 27.8497C16.0462 28.0124 16.2069 28.1805 16.3971 28.3088C16.9717 28.7634 17.721 29.0583 18.3826 29.3184L18.5059 29.3668C18.7679 29.4717 18.9697 29.5542 19.134 29.621L19.3897 29.7248C19.5164 29.8499 19.7139 29.9228 19.926 29.9251C20.1288 29.9918 20.3721 30.0623 20.8066 30.1849C21.0644 30.2459 21.6697 30.3359 21.6814 30.3369L21.9509 30.4007C22.0044 30.4368 22.1241 30.4964 22.3565 30.5493C22.712 30.6897 22.9791 30.7527 23.3838 30.8484C23.4674 30.8682 23.5491 30.8632 23.6087 30.8598C23.6278 30.8588 23.6448 30.857 23.6494 30.8566L23.8891 30.9144C24.3602 31.0296 24.8475 31.1473 25.3121 31.1463C25.8006 31.2494 26.3008 31.1505 26.6005 30.9003C26.807 30.7688 26.9146 30.5438 27.0094 30.3453C27.0539 30.2521 27.0959 30.1639 27.147 30.0887L27.2638 29.9038C27.6077 29.3609 27.835 29.0022 28.0412 28.3044C28.1568 28.0188 28.2993 27.6488 28.3705 27.3318C28.5101 26.8987 28.513 26.4174 28.5154 25.9521C28.5164 25.7862 28.5176 25.6226 28.5249 25.4636L28.5065 25.3474C28.48 25.2196 28.4488 25.0607 28.3288 24.9598L28.3287 24.9597Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_84_116">
                      <rect
                        width="19.7468"
                        height="24.1558"
                        fill="#67AE3E"
                        transform="translate(9.3756 7.01318)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-sm">
                  <p>+381 (0) 38 570 974</p>
                  <p>+377 (0) 44 241 688</p>
                  <p>+377 (0) 44 163 396</p>
                </div>
              </div>
            )}
            {/* email */}
            {!isMobile && (
              <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="39"
                    height="40"
                    transform="translate(0.99585)"
                    fill="white"
                  />
                  <path
                    d="M38.6618 7.97432C38.085 4.53319 37.6319 1.63 33.6637 1.04725C31.0176 0.658868 28.3352 0.812901 25.694 0.525839C22.0603 0.471474 18.3917 0.633332 14.7158 0.624274C11.7569 0.617272 6.95181 0.131685 4.78377 2.59994C2.64618 5.03236 2.0129 9.45743 2.19482 12.52C2.45898 16.9702 1.92159 21.5262 1.63851 25.9685C1.369 30.1983 1.71464 35.127 5.93719 37.3419C9.64819 39.2879 13.4934 38.3851 17.4325 38.8357C21.8666 39.3427 26.1689 38.8979 30.6038 38.3044C31.6921 38.1586 32.8027 38.0066 33.7885 37.5227C38.7007 35.1108 37.8572 28.5507 38.1308 24.1027C38.4551 18.835 39.541 13.2217 38.6624 7.97518L38.6618 7.97432Z"
                    fill="#67AE3E"
                  />
                  <g clip-path="url(#clip0_84_368)">
                    <path
                      d="M33.0268 13.6015C32.7688 11.419 30.4855 10.0826 28.3502 9.75977C27.5339 9.63629 26.6971 9.60048 25.8719 9.51228C23.6709 9.29204 21.4544 9.21988 19.2446 9.29579C17.3617 9.3594 15.4838 9.53099 13.6269 9.80895C11.7948 10.0832 10.8592 10.521 9.86446 11.2832C9.00504 11.9407 8.46929 12.7281 8.15115 13.547C8.14949 13.5508 8.14839 13.5545 8.14728 13.5582C8.0335 13.9073 7.95618 14.2804 7.91696 14.6781C7.85234 15.319 7.80815 15.9589 7.78054 16.5977C7.66068 19.4067 7.87333 22.2034 8.20528 25.0077C8.46321 27.1902 10.7465 28.5266 12.8818 28.8494C13.6981 28.9729 14.5349 29.0087 15.3601 29.0969C17.5611 29.3172 19.7776 29.3893 21.9874 29.3134C23.8703 29.2498 25.7482 29.0782 27.6051 28.8003C29.4372 28.526 30.3728 28.0882 31.3676 27.326C32.227 26.6685 32.7627 25.8811 33.0809 25.0622C33.082 25.0584 33.0836 25.0547 33.0848 25.051C33.1985 24.7019 33.2759 24.3288 33.3151 23.9311C33.3797 23.2902 33.4239 22.6503 33.4515 22.0115C33.5714 19.2025 33.3587 16.4058 33.0268 13.6015ZM27.6532 14.3237C27.3212 14.8604 26.9412 15.3666 26.5336 15.852C26.1558 16.3021 25.7427 16.7249 25.2948 17.1108C24.8269 17.5144 24.3238 17.88 23.8195 18.2403C22.9181 18.8845 21.9874 19.4842 21.0131 20.0209C20.711 20.1871 20.3266 20.1968 20.025 20.0209C19.6555 19.8049 19.2888 19.5842 18.9276 19.3549C18.4857 19.0748 18.0571 18.7791 17.6417 18.4638C17.5462 18.3911 17.4484 18.3184 17.3606 18.2366C16.8315 17.8512 16.3057 17.4615 15.7865 17.0649C15.338 16.7217 14.8851 16.3764 14.4736 15.9915C14.3974 15.9209 14.3239 15.8477 14.2538 15.7713C13.8738 15.3559 13.5325 14.9005 13.2475 14.4189C13.1138 14.1928 13.09 13.9394 13.1491 13.6892C13.2055 13.4476 13.3894 13.2536 13.5987 13.1231C13.7109 13.0542 13.8324 13.0168 13.9622 13.0109C14.0925 12.9825 14.2223 12.9884 14.3527 13.028C14.5874 13.0905 14.8161 13.2573 14.9376 13.4631C15.0867 13.7154 15.2507 13.9592 15.4297 14.1928C15.433 14.197 15.4369 14.2013 15.4402 14.2056C15.5252 14.3082 15.6131 14.4092 15.7058 14.5049C15.8798 14.684 16.0709 14.847 16.2631 15.0069C16.6625 15.3388 17.0745 15.6558 17.4904 15.9685C17.5097 15.9835 17.5296 15.9979 17.549 16.0123C17.7384 16.1535 17.9284 16.294 18.119 16.4336C18.3388 16.5945 18.5697 16.7463 18.7751 16.9237C18.8381 16.9783 18.9027 17.0301 18.969 17.0809C19.0308 17.1263 19.0938 17.1712 19.1568 17.2156C19.6019 17.5283 20.0631 17.8191 20.5304 18.1003C20.6558 18.0281 20.7812 17.9543 20.9054 17.8795C21.7312 17.3829 22.5271 16.8393 23.2981 16.2657C24.025 15.7093 24.6833 15.0854 25.2583 14.3809C25.5118 14.0554 25.7471 13.7175 25.9631 13.3679C26.0973 13.1515 26.3039 13.0093 26.548 12.9328C26.7998 12.8537 27.0749 12.912 27.3019 13.028C27.514 13.1365 27.6891 13.3744 27.7515 13.5941C27.8183 13.8287 27.783 14.1142 27.6532 14.3237Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_84_368">
                      <rect
                        width="25.7383"
                        height="20.0759"
                        fill="#67AE3E"
                        transform="translate(7.74689 9.26611)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="  text-sm">
                  <p>ananasimpex@gmail.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakti;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "menu"])),
    },
  };
}