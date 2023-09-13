import useWindowSize from "../hooks/useWindowSize";
import { motion } from "framer-motion";

const BannerBlob = ({ bgColor, height, width, animateInitial }) => {
  //declare soze
  const size = useWindowSize();
  //breakpoint
  const isMobile = size.width < 768;
  
  return (
    <motion.svg
      initial={animateInitial ? { scale: 5 } : { scale: 1 }}
      animate={{
        scale: 1,
        transition: { delay: 0.5, duration: 0.5, type: "easeIn" },
      }}
      height={height}
      width={width}
      viewBox={isMobile ? "0 0 383 298" : "0 0 716 342"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0 z-20 `}
    >
      {isMobile ? (
        <path
          d="M380.7 159.974C379.242 156.948 378.326 157.796 374.713 151.947C372.924 149.05 372.299 147.467 371.885 146.163C371.3 144.327 370.17 140.77 370.587 136.811C371.078 132.148 373.192 131.885 374.1 126.284C374.591 123.253 374.416 120.817 374.285 118.917C373.723 110.717 373.595 98.2802 374.291 87.9417C373.041 85.8879 371.78 83.849 370.51 81.8349C365.818 74.4035 360.976 67.2449 356.013 60.3444C354.772 58.618 353.522 56.9065 352.264 55.2148C352.007 54.8675 351.736 54.4756 351.462 54.0837C351.333 53.9399 351.208 53.791 351.102 53.6521C348.542 50.3581 345.971 47.0938 343.366 43.904C339.973 39.7517 336.534 35.7186 333.064 31.7499C318.824 23.2023 304.824 13.469 290.442 5.60106C290.279 5.51177 290.114 5.43239 289.951 5.3431C282.372 3.64647 271.873 1.7663 262.034 1.61251C261.483 1.60259 258.692 1.57283 254.911 1.12139C252.817 0.873343 250.739 0.198664 248.645 0.0547985C244.176 -0.257737 239.73 0.843578 235.278 1.00729C225.048 1.37935 214.812 1.25533 204.579 1.33967C199.807 1.37935 195.036 1.35951 190.265 1.52818C184.808 1.72165 179.367 3.17023 173.896 1.87048C172.509 1.54306 171.102 1.32478 169.704 1.29006C168.311 1.25533 166.793 0.957678 165.552 1.77126C163.492 3.12062 161.426 3.0214 159.337 3.05613C156.671 3.10078 154 3.00156 151.335 2.89242C143.202 2.56004 135.072 2.53028 126.945 3.1355C123.441 3.39843 119.939 3.93421 116.435 4.12272C114.472 4.2269 112.528 4.04831 110.625 5.25876C109.886 5.73004 108.941 5.78957 108.168 5.47208C107.443 5.17939 106.713 4.95119 105.985 4.76267C105.177 4.9115 104.37 5.0504 103.565 5.20419C100.951 5.70524 98.3399 6.23109 95.7317 6.78671C94.8613 6.97522 93.9938 7.16374 93.1234 7.35721C93.8254 7.1935 94.5274 7.03476 95.2323 6.87105C93.9282 7.10421 92.6298 7.48619 91.3313 7.80865C85.9237 9.15305 80.5331 10.676 75.1683 12.4421C64.6811 15.8998 54.2881 20.2952 44.1576 26.0845C41.7064 27.4835 39.295 29.071 36.8551 30.5245C36.7496 30.589 36.6582 30.6436 36.5698 30.6932C36.5641 30.6981 36.5584 30.7031 36.5527 30.7081C35.2828 31.7399 34.0015 32.7271 32.7459 33.8185C31.9954 34.4684 31.2591 35.1679 30.5229 35.8575C28.1429 43.9834 25.4862 51.7769 21.6652 57.8937C21.5567 61.9219 21.1686 65.9353 20.3667 69.899C17.242 85.3174 10.8641 96.3951 6.61499 110.633C4.90851 116.353 3.19917 122.008 1.35001 127.495C0.493912 131.806 -0.279428 135.283 0.100108 141.033C0.231376 143.042 0.26562 141.673 1.06464 148.003C2.7911 161.65 2.49147 166.835 5.15678 173.001C5.85022 174.603 5.88731 174.291 6.70631 176.196C8.0675 179.361 10.2791 184.495 10.4474 190.87C10.613 197.16 8.74096 202.717 6.48373 209.414C6.42665 209.582 6.38099 209.721 6.3496 209.811C5.15107 212.013 3.78132 215.312 3.93256 219.157C4.02388 221.479 4.60317 222.372 5.54773 226.107C6.1099 228.33 6.48373 230.602 7.0088 234.253C12.0426 241.545 15.584 250.941 19.1397 260.511C19.4079 260.952 19.6762 261.429 19.9358 261.964C20.9375 264.018 21.2343 265.497 21.5339 266.905C21.668 267.258 21.8021 267.615 21.9363 267.967C22.4784 269.381 23.0292 270.78 23.5885 272.174C24.6929 273.99 25.2094 274.426 31.476 278.023C35.0003 280.047 38.6216 281.634 42.0802 283.946C42.3313 284.115 42.6424 283.996 42.9134 284.105C45.496 285.137 48.2298 285.588 50.6212 287.379C54.5649 290.326 59.0166 290.693 62.5123 291.328C66.71 292.087 69.4581 292.588 73.2221 291.799C78.0019 290.802 79.9595 288.659 82.3395 290.976C83.558 292.161 84.5711 294.205 86.9596 295.311C87.5674 295.594 88.238 296.046 89.4308 295.936C91.6681 295.733 93.9367 294.999 96.1369 295.391C101.89 296.408 107.637 295.639 113.382 295.857C115.042 295.922 116.715 296.368 118.347 296.939C119.474 297.33 120.496 297.4 121.637 296.909C123.401 296.155 125.238 295.778 126.942 297.524C127.907 298.511 128.811 297.752 129.77 297.395C130.983 296.948 132.353 296.175 133.457 296.715C136.148 298.035 138.711 297.36 141.322 296.472C143.382 295.768 145.397 294.974 147.431 297.053C148.042 297.678 149.064 297.276 149.883 297.137C155.031 296.269 160.164 295.088 165.324 294.493C172.854 293.625 180.402 293.208 187.939 292.494C190.019 292.295 192.071 292.96 194.203 292.112C195.726 291.506 197.479 292.841 199.134 292.871C204.593 292.97 210.052 292.836 215.508 292.846C219.843 292.851 224.183 293.183 228.512 292.905C233.851 292.563 236.676 292.305 240.626 291.199C242.917 290.559 245.169 289.73 248.673 289.562C250.017 289.497 251.016 289.577 251.284 289.592C253.998 289.78 262.499 289.914 264.499 289.919C275.007 289.934 279.624 286.486 285.006 288.331C286.761 288.932 288.085 289.879 289.452 290.703C295.693 290.564 301.931 290.341 308.172 290.048C310.917 285.915 313.494 281.128 316.99 281.123C319.663 281.123 319.555 283.921 323.556 285.935C327.314 287.83 330.955 287.146 333.786 285.916C337.824 282.096 341.779 278.028 345.643 273.682C347.258 270.209 348.791 266.499 352.672 262.535C362.223 252.777 368.25 259.643 372.973 249.741C373.626 248.372 374.705 240.861 376.859 225.834C378.514 214.3 379.342 208.531 380.007 201.382C380.209 199.179 380.555 195.201 381.222 189.541C382.076 182.298 382.024 182.526 382.469 179.787C383.437 173.829 383.217 165.193 380.7 159.974Z"
          fill={bgColor}
        />
      ) : (
        <path
          d="M711.7 183.594C708.974 180.121 707.262 181.094 700.508 174.382C697.163 171.057 695.995 169.241 695.221 167.743C694.128 165.637 692.015 161.555 692.794 157.011C693.711 151.66 697.664 151.358 699.361 144.93C700.279 141.451 699.953 138.656 699.708 136.475C698.657 127.064 698.417 112.791 699.718 100.926C697.382 98.5691 695.024 96.2291 692.65 93.9176C683.88 85.389 674.826 77.1735 665.549 69.254C663.229 67.2727 660.892 65.3085 658.539 63.3671C658.059 62.9685 657.552 62.5188 657.04 62.069C656.8 61.9039 656.565 61.7331 656.368 61.5737C651.583 57.7933 646.776 54.047 641.906 50.3862C635.563 45.6209 629.134 40.9922 622.647 36.4375C596.027 26.6278 569.854 15.4575 542.967 6.42781C542.663 6.32533 542.354 6.23423 542.049 6.13175C527.88 4.18462 508.254 2.02684 489.859 1.85035C488.83 1.83896 483.612 1.8048 476.544 1.2867C472.628 1.00204 468.744 0.227739 464.829 0.0626315C456.474 -0.29605 448.163 0.967875 439.841 1.15576C420.716 1.58276 401.58 1.44042 382.449 1.53721C373.53 1.58276 364.61 1.55998 355.69 1.75356C345.49 1.9756 335.317 3.63806 325.09 2.1464C322.497 1.77064 319.867 1.52013 317.253 1.48028C314.65 1.44042 311.812 1.09882 309.491 2.03253C305.639 3.58113 301.777 3.46726 297.872 3.50711C292.889 3.55835 287.896 3.44449 282.913 3.31923C267.709 2.93778 252.51 2.90362 237.317 3.59821C230.766 3.89995 224.22 4.51484 217.669 4.73118C213.999 4.85075 210.366 4.64578 206.808 6.03496C205.426 6.57583 203.66 6.64415 202.214 6.27978C200.859 5.94387 199.494 5.68198 198.133 5.46563C196.623 5.63643 195.114 5.79584 193.609 5.97234C188.723 6.54737 183.841 7.15086 178.965 7.78852C177.338 8.00487 175.717 8.22121 174.089 8.44325C175.402 8.25537 176.714 8.07319 178.032 7.8853C175.594 8.15289 173.167 8.59128 170.739 8.96135C160.63 10.5042 150.552 12.2521 140.523 14.2789C120.918 18.2472 101.489 23.2915 82.5502 29.9357C77.9677 31.5412 73.4598 33.3631 68.8986 35.0312C68.7012 35.1052 68.5304 35.1679 68.3651 35.2248C68.3544 35.2305 68.3437 35.2362 68.3331 35.2419C65.9591 36.4261 63.5638 37.5591 61.2165 38.8116C59.8134 39.5575 58.4371 40.3602 57.0607 41.1516C52.6115 50.4773 47.6448 59.4216 40.5016 66.4415C40.2989 71.0645 39.5733 75.6704 38.0743 80.2194C32.2327 97.9144 20.3095 110.628 12.3661 126.968C9.17586 133.532 5.98034 140.022 2.52341 146.319C0.922984 151.267 -0.522738 155.258 0.186786 161.856C0.432185 164.162 0.496202 162.591 1.98994 169.856C5.21747 185.518 4.65732 191.468 9.63999 198.544C10.9363 200.383 11.0057 200.025 12.5368 202.211C15.0814 205.843 19.2159 211.736 19.5306 219.052C19.8401 226.271 16.3405 232.648 12.1207 240.334C12.014 240.527 11.9286 240.687 11.8699 240.789C9.62932 243.317 7.06863 247.103 7.35137 251.515C7.52209 254.18 8.60504 255.205 10.3709 259.492C11.4218 262.042 12.1207 264.65 13.1022 268.84C22.5128 277.21 29.1332 287.993 35.7803 298.975C36.2818 299.482 36.7833 300.029 37.2687 300.643C39.1412 303 39.696 304.697 40.2562 306.314C40.5069 306.718 40.7577 307.128 41.0084 307.532C42.022 309.155 43.0516 310.761 44.0972 312.36C46.1618 314.444 47.1274 314.945 58.8425 319.073C65.431 321.396 72.2008 323.218 78.6665 325.871C79.136 326.064 79.7175 325.928 80.2243 326.053C85.0522 327.237 90.1629 327.755 94.6335 329.811C102.006 333.192 110.328 333.614 116.863 334.342C124.711 335.214 129.848 335.789 136.885 334.883C145.821 333.739 149.48 331.279 153.929 333.938C156.207 335.299 158.101 337.645 162.566 338.914C163.703 339.239 164.956 339.757 167.186 339.632C171.369 339.398 175.61 338.556 179.723 339.005C190.478 340.172 201.222 339.29 211.961 339.54C215.066 339.615 218.192 340.127 221.243 340.782C223.351 341.231 225.26 341.311 227.394 340.747C230.691 339.882 234.127 339.449 237.312 341.453C239.115 342.586 240.806 341.715 242.598 341.305C244.866 340.793 247.426 339.905 249.491 340.525C254.522 342.04 259.312 341.266 264.194 340.246C268.045 339.438 271.812 338.527 275.615 340.913C276.757 341.63 278.667 341.169 280.198 341.009C289.822 340.013 299.419 338.658 309.064 337.975C323.143 336.978 337.253 336.5 351.342 335.68C355.231 335.453 359.067 336.216 363.052 335.242C365.901 334.547 369.176 336.079 372.271 336.113C382.476 336.227 392.681 336.073 402.881 336.085C410.985 336.09 419.099 336.472 427.192 336.153C437.173 335.76 442.455 335.464 449.838 334.194C454.122 333.46 458.331 332.509 464.882 332.316C467.395 332.242 469.262 332.333 469.763 332.35C474.837 332.566 490.729 332.72 494.469 332.725C514.111 332.743 522.743 328.786 532.804 330.904C536.085 331.593 538.56 332.68 541.116 333.625C552.783 333.466 564.445 333.209 576.112 332.874C581.244 328.131 586.061 322.637 592.596 322.631C597.595 322.631 597.392 325.842 604.872 328.154C611.898 330.329 618.705 329.543 623.997 328.131C631.546 323.747 638.939 319.079 646.163 314.091C649.182 310.106 652.047 305.847 659.302 301.298C677.158 290.099 688.425 297.979 697.254 286.615C698.475 285.044 700.492 276.424 704.52 259.179C707.614 245.942 709.161 239.32 710.404 231.116C710.783 228.588 711.428 224.022 712.677 217.526C714.272 209.214 714.176 209.476 715.008 206.333C716.816 199.495 716.406 189.583 711.7 183.594Z"
          fill={bgColor}
        />
      )}
    </motion.svg>
  );
};
export default BannerBlob;