const { useState } = React;
const { createRoot } = ReactDOM;

function interpolateRange([min1, max1], [min2, max2], value) {
  return (
    ((Math.min(value, max1) - min1) / (max1 - min1)) * (max2 - min2) + min2
  );
}

function updateTransform({ x, y }) {
  const setTransform = (selector, xMult, yMult) => {
    document
      .querySelector(selector)
      .style.setProperty(
        "--transform-3d",
        `translate3d(${x * xMult}px, ${y * yMult}px, 0)`
      );
  };

  setTransform("#face", 20, 20);
  setTransform("#face-components", 60, 60);
  setTransform("#ear", -20, -20);
}

const shake = (positions) => {
  positions.forEach((pos, index) => {
    setTimeout(() => {
      updateTransform(pos);
    }, index * 200);
  });
};

const shakeHeadX = () => {
  const positions = [
    { x: 0, y: 0 },
    { x: 0.7, y: 0 },
    { x: -0.7, y: 0 },
    { x: 0.7, y: 0 },
    { x: 0, y: 0 },
  ];

  shake(positions);
};

const shakeHeadY = () => {
  const positions = [
    { x: 0, y: 0 },
    { x: 0, y: -0.7 },
    { x: 0, y: 0.7 },
    { x: 0, y: -0.7 },
    { x: 0, y: 0.7 },
    { x: 0, y: 0 },
  ];

  shake(positions);
};

const validateForm = (data) => {
  const { email, password } = data;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;

  if (
    !email ||
    !password ||
    !emailRegex.test(email) ||
    !passwordRegex.test(password)
  ) {
    shakeHeadX();

    return false;
  }

  shakeHeadY();
  return true;
};

const Goodboy = () => {
  return (
    <>
      <div class="goodboy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1600 1200"
          shape-rendering="geometricPrecision"
        >
          <g>
            <g filter="url(#a)" opacity=".23">
              <ellipse cx="803" cy="958.5" fill="#000" rx="238" ry="17.5" />
            </g>
            <g filter="url(#b)" opacity=".4">
              <ellipse cx="803" cy="959" fill="#000" rx="159" ry="7" />
            </g>
            <g filter="url(#c)" opacity=".23">
              <ellipse cx="753.5" cy="974.5" fill="#000" rx="27.5" ry="5.5" />
            </g>
            <g filter="url(#d)" opacity=".23">
              <ellipse cx="829.5" cy="974.5" fill="#000" rx="28.5" ry="5.5" />
            </g>
            <rect
              width="100"
              height="42"
              x="565"
              y="917"
              fill="url(#e)"
              rx="21"
            />
            <rect
              width="100"
              height="42"
              fill="url(#f)"
              rx="21"
              transform="matrix(-1 0 0 1 1035 917)"
            />
            <g id="ear">
              <g id="ear-left">
                <path
                  fill="url(#g)"
                  d="M613 486.5v-98.828c0-9.816 11.882-14.716 18.802-7.754L694 442.5l-81 44Z"
                />
                <path
                  fill="url(#h)"
                  d="M613 495.5v-95.124c0-6.303 7.676-9.395 12.045-4.853L676 448.5l-63 47Z"
                />
                <path
                  fill="url(#i)"
                  d="M613 495.5v-95.124c0-6.303 7.676-9.395 12.045-4.853L676 448.5l-63 47Z"
                />
              </g>
              <g id="ear-right">
                <path
                  fill="url(#j)"
                  d="M988 486.5v-98.828c0-9.816-11.882-14.716-18.802-7.754L907 442.5l81 44Z"
                />
                <path
                  fill="url(#k)"
                  d="M988 495.5v-95.124c0-6.303-7.676-9.395-12.045-4.853L925 448.5l63 47Z"
                />
                <path
                  fill="url(#l)"
                  d="M988 495.5v-95.124c0-6.303-7.676-9.395-12.045-4.853L925 448.5l63 47Z"
                />
              </g>
            </g>
            <path
              fill="url(#m)"
              d="M553.318 581.332C561.024 470.76 652.968 385 763.808 385h74.042c110.98 0 202.99 85.972 210.51 196.697l15.85 233.152C1069.5 892.83 1007.68 959 929.516 959H671.735c-78.253 0-140.113-66.321-134.673-144.385l16.256-233.283Z"
            />
            <path
              fill="url(#n)"
              d="M553.318 581.332C561.024 470.76 652.968 385 763.808 385h74.042c110.98 0 202.99 85.972 210.51 196.697l15.85 233.152C1069.5 892.83 1007.68 959 929.516 959H671.735c-78.253 0-140.113-66.321-134.673-144.385l16.256-233.283Z"
            />
            <path
              fill="url(#o)"
              d="M866.899 966.839A34.522 34.522 0 0 1 839.778 980c-12.982 0-23.568-10.409-23.787-23.389l-1.768-104.892c-.123-7.264 5.733-13.219 12.998-13.219h95.442c18.37 0 28.65 21.183 17.282 35.614l-73.046 92.725Z"
            />
            <path
              fill="url(#p)"
              d="M733.101 966.839A34.522 34.522 0 0 0 760.222 980c12.982 0 23.568-10.409 23.787-23.389l1.768-104.892c.123-7.264-5.733-13.219-12.998-13.219h-95.442c-18.37 0-28.65 21.183-17.282 35.614l73.046 92.725Z"
            />
            <g filter="url(#q)" id="face">
              <path
                fill="url(#r)"
                d="M605.734 572.427C612.297 488.642 682.201 424 766.243 424h68.514c84.042 0 153.946 64.642 160.509 148.427l4.173 53.273c4.901 62.543-37.319 119.029-98.689 132.042l-30.137 6.391a338.018 338.018 0 0 1-140.226 0l-30.137-6.391c-61.37-13.013-103.588-69.499-98.689-132.042l4.173-53.273Z"
              />
            </g>
            <g id="face-components">
              <g id="eye">
                <g filter="url(#s)" id="left-eye">
                  <path
                    fill="#95F9FF"
                    fill-rule="evenodd"
                    d="M720.5 532c-15.74 0-28.5 12.76-28.5 28.5s12.76 28.5 28.5 28.5 28.5-12.76 28.5-28.5-12.76-28.5-28.5-28.5Z 
                  M684 560.5c0-20.158 16.342-36.5 36.5-36.5s36.5 16.342 36.5 36.5-16.342 36.5-36.5 36.5-36.5-16.342-36.5-36.5Z"
                    clip-rule="evenodd"
                  />
                </g>
                <g filter="url(#t)">
                  <path
                    fill="#95F9FF"
                    fill-rule="evenodd"
                    d="M879.5 532c-15.74 0-28.5 12.76-28.5 28.5s12.76 28.5 28.5 28.5 28.5-12.76 28.5-28.5-12.76-28.5-28.5-28.5ZM843 560.5c0-20.158 16.342-36.5 36.5-36.5s36.5 16.342 36.5 36.5-16.342 36.5-36.5 36.5-36.5-16.342-36.5-36.5Z"
                    clip-rule="evenodd"
                  />
                </g>

                <animateTransform
                  id="eyeOpened"
                  attributeName="transform"
                  type="scale"
                  values="1,1;1,1;1,0;1,1;1,0;1,1;1,1"
                  keyTimes="0;0.2;0.35;0.5;0.65;0.8;1"
                  dur="1s"
                  additive="replace"
                  fill="freeze"
                />
              </g>

              <g filter="url(#u)">
                <path
                  stroke="#99F9FF"
                  stroke-linecap="round"
                  stroke-width="6"
                  d="M774 611c0 8.008 6.492 14.5 14.5 14.5 4.539 0 8.591-2.086 11.25-5.351A14.474 14.474 0 0 0 811 625.5c8.008 0 14.5-6.492 14.5-14.5"
                />
              </g>

              <g filter="url(#v)">
                <path
                  stroke="#99F9FF"
                  stroke-linecap="round"
                  stroke-width="6"
                  d="M714 623h-23"
                />
              </g>
              <g filter="url(#w)">
                <path
                  stroke="#99F9FF"
                  stroke-linecap="round"
                  stroke-width="6"
                  d="M713.557 637 701 640.365"
                />
              </g>

              <g id="kiri-1" filter="url(#x)">
                <path
                  stroke="#99F9FF"
                  stroke-linecap="round"
                  stroke-width="6"
                  d="M880 623h23"
                />
              </g>
              <g id="kiri-2" filter="url(#y)">
                <path
                  stroke="#99F9FF"
                  stroke-linecap="round"
                  stroke-width="6"
                  d="M880.443 637 893 640.365"
                />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="e"
              x1="570"
              x2="605"
              y1="959"
              y2="929"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0F0F0" />
              <stop offset=".212" stop-color="#E9E9E9" />
              <stop offset="1" stop-color="#B9B9B9" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="5"
              x2="40"
              y1="42"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0F0F0" />
              <stop offset=".212" stop-color="#E9E9E9" />
              <stop offset="1" stop-color="#D1D1D1" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="613"
              x2="658.582"
              y1="377"
              y2="445.448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EDEDED" />
              <stop offset=".196" stop-color="#EEE" />
              <stop offset=".516" stop-color="#E9E9E9" />
              <stop offset="1" stop-color="#C8C8C8" />
            </linearGradient>
            <linearGradient
              id="h"
              x1="657.522"
              x2="602.771"
              y1="386.44"
              y2="440.411"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CECECE" />
              <stop offset="1" stop-color="#DBDBDB" stop-opacity=".56" />
            </linearGradient>
            <linearGradient
              id="i"
              x1="639.5"
              x2="639.5"
              y1="383"
              y2="454.837"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#494949" />
              <stop offset="1" stop-color="#161616" />
            </linearGradient>
            <linearGradient
              id="j"
              x1="988"
              x2="942.418"
              y1="377"
              y2="445.448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EDEDED" />
              <stop offset=".196" stop-color="#EEE" />
              <stop offset=".516" stop-color="#E9E9E9" />
              <stop offset="1" stop-color="#C8C8C8" />
            </linearGradient>
            <linearGradient
              id="k"
              x1="943.478"
              x2="998.229"
              y1="386.44"
              y2="440.411"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CECECE" />
              <stop offset="1" stop-color="#DBDBDB" stop-opacity=".56" />
            </linearGradient>
            <linearGradient
              id="l"
              x1="961.5"
              x2="961.5"
              y1="383"
              y2="454.837"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#494949" />
              <stop offset="1" stop-color="#161616" />
            </linearGradient>
            <linearGradient
              id="m"
              x1="610"
              x2="625.469"
              y1="408.875"
              y2="916.152"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F0F0F0" />
              <stop offset="1" stop-color="#E6E6E6" />
            </linearGradient>
            <linearGradient
              id="o"
              x1="852.172"
              x2="849.214"
              y1="978.003"
              y2="882.592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EAEAEA" />
              <stop offset=".574" stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#E7E7E7" />
            </linearGradient>
            <linearGradient
              id="p"
              x1="747.828"
              x2="750.786"
              y1="978.003"
              y2="882.592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EAEAEA" />
              <stop offset=".574" stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#E7E7E7" />
            </linearGradient>
            <linearGradient
              id="r"
              x1="800.5"
              x2="800.5"
              y1="424"
              y2="735"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#494949" />
              <stop offset="1" stop-color="#161616" />
            </linearGradient>
            <filter
              id="a"
              width="502"
              height="61"
              x="552"
              y="928"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2"
                stdDeviation="6.5"
              />
            </filter>
            <filter
              id="b"
              width="346"
              height="42"
              x="630"
              y="938"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2"
                stdDeviation="7"
              />
            </filter>
            <filter
              id="c"
              width="75"
              height="31"
              x="716"
              y="959"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2"
                stdDeviation="5"
              />
            </filter>
            <filter
              id="d"
              width="77"
              height="31"
              x="791"
              y="959"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2"
                stdDeviation="5"
              />
            </filter>
            <filter
              id="q"
              width="398.649"
              height="355.485"
              x="601.175"
              y="424"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5.5" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="shape" result="effect1_innerShadow_1_2" />
            </filter>
            <filter
              id="s"
              width="139"
              height="139"
              x="651"
              y="491"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="16.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.45 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="t"
              width="139"
              height="139"
              x="810"
              y="491"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="16.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.45 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="u"
              width="68.5"
              height="31.5"
              x="765.5"
              y="602.5"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="v"
              width="40"
              height="17"
              x="682.5"
              y="614.5"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="w"
              width="29.558"
              height="20.366"
              x="692.499"
              y="628.499"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="x"
              width="40"
              height="17"
              x="871.5"
              y="614.5"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="y"
              width="29.558"
              height="20.366"
              x="871.942"
              y="628.499"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2"
                result="shape"
              />
            </filter>
            <filter
              id="z"
              width="232"
              height="33"
              x="288.5"
              y="1064"
              color-interpolation-filters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2"
                stdDeviation="5"
              />
            </filter>
            <radialGradient
              id="n"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="matrix(0 52.5 -173.172 0 800.5 959)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity=".34" />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

const Form = () => {
  const [pwdType, setPwdType] = useState("password");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
    if (e.target.type === "password") {
      updateTransform({
        x: 0,
        y: -0.8,
      });
    } else {
      updateTransform({
        x: interpolateRange([0, 32], [-1.4, 1.4], value.length),
        y: e.target.getAttribute("y"),
      });
    }
  };

  const handleBlur = () => {
    updateTransform({ x: 0, y: 0 });
  };

  const handleFocus = (e) => {
    if (e.target.type === "password") {
      updateTransform({
        x: 0,
        y: -1.2,
      });
    } else {
      updateTransform({ x: 0, y: e.target.getAttribute("y") });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(formData);
  };

  const togglePwd = () => {
    setPwdType(pwdType === "text" ? "password" : "text");
  };
  return (
    <div class="form">
      <label class="field">
        <span class="material-symbols-rounded"> mail </span>
        <input
          type="email"
          id="email"
          name="email"
          y="0.8"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </label>
      <label class="field">
        <span class="material-symbols-rounded"> lock </span>
        <input
          type={pwdType}
          id="password"
          name="password"
          y="1.4"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <label htmlFor="password" class="toggle-password" onClick={togglePwd}>
          <span class="material-symbols-rounded">
            {pwdType === "text" ? "visibility" : "visibility_off"}
          </span>
        </label>
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

function App() {
  return (
    <form>
      <Goodboy />
      <Form />
    </form>
  );
}

const rootElement = document.getElementById("container");

// Create a root
const root = createRoot(rootElement);

// Render the app
root.render(<App />);
