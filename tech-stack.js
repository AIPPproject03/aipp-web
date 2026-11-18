/**
 * AIPP PROTOCOL — SECTION 02: TECH STACK & SYSTEM LAYERS ENGINE
 * Metaphor Arc: Wajah (Face) -> Mesin (Engine) -> Otak (Brain) -> Tangan (Hands)
 * Hardware-Accelerated Liquid Glass • 60fps Micro-Interactions • FLIP Project Evidence
 * Vanilla JS • Pure SVG Icons (Simple Icons + Devicon + Lucide)
 */

(function () {
  'use strict';

  // 1. DEVICE & CAPABILITY HEURISTICS
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  // 2. OFFICIAL SVG ICONS REPOSITORY (EMBEDDED LOCAL SVGs — ZERO RUNTIME CDN HOTLINKS)
  const TECH_ICONS = {
  "javascript": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\"/></svg>",
    "brand": "#F7DF1E"
  },
  "typescript": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\"/></svg>",
    "brand": "#3178C6"
  },
  "nextdotjs": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z\"/></svg>",
    "brand": "#FFFFFF"
  },
  "react": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\"/></svg>",
    "brand": "#61DAFB"
  },
  "html5": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"/></svg>",
    "brand": "#E34F26"
  },
  "css3": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\"><path fill=\"currentColor\" d=\"M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z\"/></svg>",
    "brand": "#1572B6"
  },
  "tailwindcss": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z\"/></svg>",
    "brand": "#06B6D4"
  },
  "nodedotjs": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z\"/></svg>",
    "brand": "#5FA04E"
  },
  "hono": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.445.002a45.529 45.529 0 0 0-5.252 8.146 8.595 8.595 0 0 1-.555-.53 27.796 27.796 0 0 0-1.205-1.542 8.762 8.762 0 0 0-1.251 2.12 20.743 20.743 0 0 0-1.448 5.88 8.867 8.867 0 0 0 .338 3.468c1.312 3.48 3.794 5.593 7.445 6.337 3.055.438 5.755-.333 8.097-2.312 2.677-2.59 3.359-5.634 2.047-9.132a33.287 33.287 0 0 0-2.988-5.59A91.34 91.34 0 0 0 12.615.053a.216.216 0 0 0-.17-.051Zm-.336 3.906a50.93 50.93 0 0 1 4.794 6.552c.448.767.817 1.57 1.108 2.41.606 2.386-.044 4.354-1.951 5.904-1.845 1.298-3.87 1.683-6.072 1.156-2.376-.737-3.75-2.335-4.121-4.794a5.107 5.107 0 0 1 .242-2.266c.358-.908.79-1.774 1.3-2.601l1.446-2.121a397.33 397.33 0 0 0 3.254-4.24Z\"/></svg>",
    "brand": "#E36002"
  },
  "postgresql": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z\"/></svg>",
    "brand": "#4169E1"
  },
  "prisma": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z\"/></svg>",
    "brand": "#5A67D8"
  },
  "ethereum": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z\"/></svg>",
    "brand": "#627EEA"
  },
  "bitcoin": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z\"/></svg>",
    "brand": "#F7931A"
  },
  "network": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" /> <rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\" /> <rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\" /> <path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\" /> <path d=\"M12 12V8\" /> </svg>",
    "brand": "#38BDF8"
  },
  "candlestick": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M9 5v4\" /> <rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\" /> <path d=\"M9 15v2\" /> <path d=\"M17 3v2\" /> <rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\" /> <path d=\"M17 13v3\" /> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> </svg>",
    "brand": "#10B981"
  },
  "scanEye": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M3 7V5a2 2 0 0 1 2-2h2\" /> <path d=\"M17 3h2a2 2 0 0 1 2 2v2\" /> <path d=\"M21 17v2a2 2 0 0 1-2 2h-2\" /> <path d=\"M7 21H5a2 2 0 0 1-2-2v-2\" /> <circle cx=\"12\" cy=\"12\" r=\"1\" /> <path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\" /> </svg>",
    "brand": "#EC4899"
  },
  "gemini": {
    "svg": "<svg class=\"tech-icon-svg\" fill=\"currentColor\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81\"/></svg>",
    "brand": "#8E75FF"
  },
  "trendingUp": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M16 7h6v6\" /> <path d=\"m22 7-8.5 8.5-5-5L2 17\" /> </svg>",
    "brand": "#06B6D4"
  },
  "users": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> </svg>",
    "brand": "#38BDF8"
  },
  "kanban": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M5 3v14\" /> <path d=\"M12 3v8\" /> <path d=\"M19 3v18\" /> </svg>",
    "brand": "#A855F7"
  },
  "chartColumn": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"M18 17V9\" /> <path d=\"M13 17V5\" /> <path d=\"M8 17v-3\" /> </svg>",
    "brand": "#10B981"
  },
  "trophy": {
    "svg": "<svg class=\"tech-icon-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> <path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\" /> <path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\" /> <path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\" /> <path d=\"M4 22h16\" /> <path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\" /> <path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\" /> </svg>",
    "brand": "#F59E0B"
  }
};

  // 3. 4-LAYER DATA ARCHITECTURE (VISIBILITY PROGRESSION: FACE -> ENGINE -> BRAIN -> HANDS)
  const stackLayers = [
    {
      key: "frontend",
      index: 0,
      metaphorId: "Wajah",
      metaphorEn: "Face",
      depthBadgeId: "LAPISAN 01 // WAJAH SISTEM",
      depthBadgeEn: "LAYER 01 // THE SYSTEM FACE",
      depthSubtitleId: "Permukaan Visual & Interaksi Langsung",
      depthSubtitleEn: "Visual Presentation & Direct Interaction",
      labelId: "Front-End Core",
      labelEn: "Front-End Core",
      summaryId: "Fondasi browser murni, performa render tinggi, dan arsitektur komponen modern.",
      summaryEn: "Core browser foundations, high-performance rendering, and modular architecture.",
      items: [
        {
          name: "Vanilla JavaScript (ES6+)",
          descId: "Pemrograman web modular murni tanpa overhead dependensi, cepat dan efisien.",
          descEn: "Modern modular JavaScript for lightweight, ultra-fast browser logic without runtime overhead.",
          icons: ["javascript"],
          bentoSpan: 2,
          projects: [
            { id: "wallet", title: "AIPP.Wallet", roleId: "Kriptografi & Web App Tanpa Dependensi", roleEn: "Cryptography & Zero-Dependency Web App" },
            { id: "desatampa", title: "Desa Tampa Portal", roleId: "Interaktivitas & Modul Pemetaan", roleEn: "Interactivity & Mapping Modules" }
          ]
        },
        {
          name: "TypeScript",
          descId: "Pengetikan statis ketat untuk arsitektur kode berskala besar yang aman dari bug.",
          descEn: "Statically typed JavaScript to catch structural errors early and maintain clean codebases.",
          icons: ["typescript"],
          bentoSpan: 1,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Next.js Full-Stack Bertipe Ketat", roleEn: "Strictly Typed Next.js Full-Stack" }
          ]
        },
        {
          name: "Next.js & React",
          descId: "Pengembangan web reaktif modern dengan SSR, optimalisasi SEO, dan rendering dinamis.",
          descEn: "Component-based reactive architecture with server-side rendering and static optimization.",
          icons: ["nextdotjs", "react"],
          bentoSpan: 1,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Arsitektur Next.js & Serverless", roleEn: "Next.js & Serverless Architecture" },
            { id: "adanest", title: "Adanest", roleId: "Aplikasi Web Reaktif Single-Page", roleEn: "Single-Page Reactive Web App" }
          ]
        },
        {
          name: "HTML5 & Semantic SEO",
          descId: "Struktur semantik dokumen web modern yang ramah aksesibilitas dan mesin pencari.",
          descEn: "Semantic markup structures optimized for accessibility, SEO, and structural integrity.",
          icons: ["html5"],
          bentoSpan: 2,
          projects: [
            { id: "desatampa", title: "Desa Tampa Portal", roleId: "Struktur Semantik Ramah Mesin Pencari", roleEn: "Semantic Structures & Public SEO" },
            { id: "wallet", title: "AIPP.Wallet", roleId: "Formulir Transaksi Aksesibel & Semantik", roleEn: "Accessible & Semantic Transaction Forms" }
          ]
        },
        {
          name: "CSS3 & Tailwind CSS",
          descId: "Desain antarmuka hardware-accelerated, sistem Liquid Glass, dan tata letak responsif.",
          descEn: "Hardware-accelerated layouts, responsive grid patterns, and refined Liquid Glass styling.",
          icons: ["css3", "tailwindcss"],
          bentoSpan: 2,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Dashboard Responsif & Tata Letak Darurat", roleEn: "Responsive Emergency Dashboard Layouts" },
            { id: "desatampa", title: "Desa Tampa Portal", roleId: "Antarmuka Responsif Ringan Seluler", roleEn: "Ultra-Light Mobile Responsive Interface" }
          ]
        }
      ]
    },
    {
      key: "backend",
      index: 1,
      metaphorId: "Mesin",
      metaphorEn: "Engine",
      depthBadgeId: "LAPISAN 02 // MESIN & JALUR DATA",
      depthBadgeEn: "LAYER 02 // RUNTIME ENGINE & PIPELINES",
      depthSubtitleId: "Komputasi Runtime, Jalur Data & Kriptografi",
      depthSubtitleEn: "Runtime Computation, Data Pipelines & Cryptography",
      labelId: "Back-End & Web3",
      labelEn: "Back-End & Web3",
      summaryId: "Layanan server, basis data relasional, dan eksplorasi kriptografi sisi klien.",
      summaryEn: "Server services, relational databases, and client-side cryptography exploration.",
      items: [
        {
          name: "Node.js & Hono.js",
          descId: "Runtime cepat dan framework backend modern untuk layanan API berlatensi rendah.",
          descEn: "Ultra-fast JavaScript runtime and lightweight framework for low-latency backend APIs.",
          icons: ["nodedotjs", "hono"],
          bentoSpan: 2,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Backend Endpoint Hono.js Latensi Rendah", roleEn: "Low-Latency Hono.js Dispatch Backend" },
            { id: "adanest", title: "Adanest", roleId: "Layanan Node.js & RESTful Server", roleEn: "Node.js Server & RESTful Microservices" }
          ]
        },
        {
          name: "PostgreSQL & Prisma ORM",
          descId: "Manajemen basis data relasional bertipe aman dengan integritas skema data terjamin.",
          descEn: "Type-safe database modeling and low-overhead SQL queries for robust applications.",
          icons: ["postgresql", "prisma"],
          bentoSpan: 2,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Database Log & Riwayat Kejadian Kebakaran", roleEn: "Emergency Incident & Hazard Log Database" },
            { id: "adanest", title: "Adanest", roleId: "Skema Data Relasional & Validasi Pengguna", roleEn: "Relational Habit Tracking & User Schemas" }
          ]
        },
        {
          name: "Client-Side Cryptography (ethers.js / bitcoinjs-lib)",
          descId: "Eksplorasi penandatanganan transaksi mandiri offline (secp256k1, BIP-39/44/84).",
          descEn: "Implementation of offline ECDSA key derivation, PBKDF2, and non-custodial wallet flows.",
          icons: ["ethereum", "bitcoin"],
          bentoSpan: 2,
          projects: [
            { id: "wallet", title: "AIPP.Wallet", roleId: "Signing Offline ECDSA & Derivasi Multi-Chain", roleEn: "Offline ECDSA Signing & Multi-Chain Derivation" }
          ]
        },
        {
          name: "RESTful API Architecture",
          descId: "Perancangan endpoint standar industri dengan validasi payload dan struktur respons bersih.",
          descEn: "Standardized API design with secure payload validations and clean resource serialization.",
          icons: ["network"],
          bentoSpan: 2,
          projects: [
            { id: "siwaras", title: "SIWARAS", roleId: "Google Apps Script RESTful API Serverless", roleEn: "Serverless Apps Script RESTful API Endpoint" },
            { id: "adaapi", title: "ADAAPI", roleId: "Validasi Payload & Integrasi Notifikasi SMTP", roleEn: "Secure Payload Dispatch & SMTP Integration" }
          ]
        }
      ]
    },
    {
      key: "quant",
      index: 2,
      metaphorId: "Otak",
      metaphorEn: "Brain",
      depthBadgeId: "LAPISAN 03 // OTAK & LOGIKA INFERENSI",
      depthBadgeEn: "LAYER 03 // THE INFERENCE BRAIN",
      depthSubtitleId: "Algoritma Kuantitatif & Logika Inferensi AI",
      depthSubtitleEn: "Quantitative Modeling & AI Inference Logic",
      labelId: "Quant & Terapan AI",
      labelEn: "Quant & Applied AI",
      summaryId: "Sistem otomasi perdagangan algoritmik dan integrasi computer vision terapan.",
      summaryEn: "Algorithmic trading systems and applied computer vision integrations.",
      items: [
        {
          name: "MQL5 & MetaTrader 5",
          descId: "Pemrograman sistem robot trading otomatis terstruktur dengan manajemen risiko kuantitatif.",
          descEn: "Algorithmic Expert Advisor systems with mathematical risk controls and live market execution.",
          icons: ["candlestick"],
          bentoSpan: 2,
          projects: [
            { id: "athletics", title: "Quantitative Risk & Disiplin Algoritmik", roleId: "Riset Pemodelan Strategi Kuantitatif", roleEn: "Quantitative Strategy & Risk Research" }
          ]
        },
        {
          name: "YOLOv11 Computer Vision",
          descId: "Deteksi objek visual real-time yang diterapkan pada sistem verifikasi bahaya kebakaran darurat.",
          descEn: "Real-time object detection models applied to instant emergency fire and smoke verification.",
          icons: ["scanEye"],
          bentoSpan: 2,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Verifikasi Otomatis Citra Api & Asap Real-Time", roleEn: "Real-Time Fire & Smoke Visual Detection" }
          ]
        },
        {
          name: "Gemini API",
          descId: "Integrasi model kecerdasan buatan Google untuk pemrosesan konteks dan asistensi bahasa alami.",
          descEn: "Applied natural language processing and intelligent multimodal query augmentation.",
          icons: ["gemini"],
          bentoSpan: 2,
          projects: [
            { id: "adaapi", title: "ADAAPI", roleId: "Augmentasi Bahasa Alami Laporan Darurat", roleEn: "Emergency Incident Natural Language Augmentation" }
          ]
        },
        {
          name: "Systematic DCA & Risk Analytics",
          descId: "Pola pikir kuantitatif jangka panjang dengan alokasi modal dan pemodelan statistik.",
          descEn: "Disciplined capital allocation models and quantitative probabilistic risk assessment.",
          icons: ["trendingUp"],
          bentoSpan: 2,
          projects: [
            { id: "foundation", title: "Model Probabilitas & Disiplin Eksekusi", roleId: "Fondasi Analitis Berkelanjutan", roleEn: "Continuous Analytical Foundation" }
          ]
        }
      ]
    },
    {
      key: "leadership",
      index: 3,
      metaphorId: "Tangan",
      metaphorEn: "Hands",
      depthBadgeId: "LAPISAN 04 // TANGAN & EKSEKUSI NYATA",
      depthBadgeEn: "LAYER 04 // THE EXECUTION HANDS",
      depthSubtitleId: "Eksekusi Lapangan, Manajemen Tim & Resiliensi",
      depthSubtitleEn: "Field Execution, Team Orchestration & Resilience",
      labelId: "Kepemimpinan & Analisis",
      labelEn: "Leadership & Analytics",
      summaryId: "Manajemen tim lintas disiplin, ketegasan operasional, dan analisis data bisnis.",
      summaryEn: "Cross-functional team coordination, operational rigor, and structured data analysis.",
      items: [
        {
          name: "Cross-Functional Leadership",
          descId: "Memimpin tim mahasiswa multi-disiplin dalam proyek sipil dan pengabdian masyarakat.",
          descEn: "Steering multidisciplinary teams to deliver civic technology impact and measurable outcomes.",
          icons: ["users"],
          bentoSpan: 2,
          projects: [
            { id: "desatampa", title: "Desa Tampa Portal", roleId: "Ketua KKN 204 (Memimpin 15 Mahasiswa)", roleEn: "KKN 204 Leader (Led 15 Students)" },
            { id: "adaapi", title: "ADAAPI", roleId: "Team Leader Hackathon Permikomnas 2025", roleEn: "Permikomnas 2025 Hackathon Team Leader" }
          ]
        },
        {
          name: "Project Lifecycle Management",
          descId: "Perencanaan alur kerja rekayasa, mitigasi hambatan teknis, dan eksekusi tepat sasaran.",
          descEn: "Structuring product milestones, technical risk assessments, and timely delivery schedules.",
          icons: ["kanban"],
          bentoSpan: 2,
          projects: [
            { id: "siwaras", title: "SIWARAS", roleId: "Siklus Proyek Magang UT dari Riset hingga Deploy", roleEn: "UT Internship Project Lifecycle to Deploy" },
            { id: "adaapi", title: "ADAAPI", roleId: "Sprint Cepat Hackathon 36 Jam", roleEn: "36-Hour Hackathon Rapid Sprint" }
          ]
        },
        {
          name: "Statistical Analysis (SPSS)",
          descId: "Pengolahan data empiris dan visualisasi analitik untuk validasi riset akademik.",
          descEn: "Empirical data modeling and statistical significance testing for academic publications.",
          icons: ["chartColumn"],
          bentoSpan: 2,
          projects: [
            { id: "foundation", title: "S1 Informatika (IPK 3.86)", roleId: "Pemodelan Statistik & Uji Signifikansi Riset", roleEn: "Statistical Modeling & Academic Validation" }
          ]
        },
        {
          name: "Tournament Resilience",
          descId: "Ketangguhan mental dan eksekusi presisi di bawah tekanan yang ditempa lewat bulu tangkis.",
          descEn: "Mental fortitude and decisive precision under pressure honed through national competition.",
          icons: ["trophy"],
          bentoSpan: 2,
          projects: [
            { id: "athletics", title: "Pelatnas PBSI Cipayung & PORPROV XII", roleId: "Atlet Delegasi Seleknas & Emas Beregu", roleEn: "PBSI National Selection & Team Gold" }
          ]
        }
      ]
    }
  ];

  // 4. ACTIVE STATE TRACKERS
  let activeCategoryKey = "frontend";
  let expandedCardIndices = new Set();
  let isTransitioning = false;
  let viewportEntered = false;

  function getCurrentLang() {
    return window.currentLang || localStorage.getItem("aipp-lang") || "id";
  }

  // 5. RENDER LAYER DEPTH INDICATOR
  function renderLayerIndicator(activeKey) {
    const indicatorEl = document.getElementById("stack-layer-indicator");
    if (!indicatorEl) return;

    const isEn = getCurrentLang() === "en";
    const currentLayer = stackLayers.find((l) => l.key === activeKey) || stackLayers[0];
    const currentIndex = currentLayer.index;

    indicatorEl.innerHTML = `
      <div class="depth-telemetry">
        <div class="depth-badge">
          <span class="depth-pulse-dot"></span>
          <span class="depth-badge-label font-mono">
            ${isEn ? currentLayer.depthBadgeEn : currentLayer.depthBadgeId}
          </span>
        </div>
        <div class="depth-subtitle">
          ${isEn ? currentLayer.depthSubtitleEn : currentLayer.depthSubtitleId}
        </div>
      </div>

      <div class="depth-segments-track" role="progressbar" aria-valuenow="${currentIndex + 1}" aria-valuemin="1" aria-valuemax="4" aria-label="Kedalaman Lapisan Sistem">
        ${stackLayers.map((l, idx) => {
          const isPassed = idx <= currentIndex;
          const isCurrent = idx === currentIndex;
          return `
            <button
              type="button"
              class="depth-segment-node ${isPassed ? 'passed' : ''} ${isCurrent ? 'active' : ''}"
              onclick="window.AippTechStack.selectTab('${l.key}')"
              title="${isEn ? l.metaphorEn : l.metaphorId}"
              aria-label="Layer 0${idx + 1}: ${isEn ? l.metaphorEn : l.metaphorId}"
            >
              <div class="depth-segment-bar">
                <div class="depth-segment-fill"></div>
              </div>
              <div class="depth-segment-meta font-mono">
                <span class="depth-segment-num">0${idx + 1}</span>
                <span class="depth-segment-tag">${isEn ? l.metaphorEn : l.metaphorId}</span>
              </div>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  // 6. RENDER TABS (WAI-ARIA COMPLIANT & KEYBOARD ACCESSIBLE)
  function renderTabs(activeKey) {
    const container = document.getElementById("stack-tabs");
    if (!container) return;

    const isEn = getCurrentLang() === "en";
    container.setAttribute("role", "tablist");
    container.setAttribute("aria-label", isEn ? "System Architecture Layers" : "Arsitektur Lapisan Sistem");

    container.innerHTML = stackLayers.map((cat, idx) => {
      const isActive = cat.key === activeKey;
      return `
        <button
          type="button"
          role="tab"
          id="tab-${cat.key}"
          aria-selected="${isActive ? 'true' : 'false'}"
          aria-controls="stack-panel"
          tabindex="${isActive ? '0' : '-1'}"
          class="skill-tab-btn ${isActive ? 'active' : ''}"
          onclick="window.AippTechStack.selectTab('${cat.key}')"
        >
          <span class="tab-index-tag font-mono">0${idx + 1} //</span>
          <span class="tab-label-text">${isEn ? cat.labelEn : cat.labelId}</span>
          <span class="tab-metaphor-pill font-mono">${isEn ? cat.metaphorEn : cat.metaphorId}</span>
        </button>
      `;
    }).join("");

    setupTabsKeyboardNav(container);
  }

  function setupTabsKeyboardNav(container) {
    const tabs = Array.from(container.querySelectorAll('[role="tab"]'));
    tabs.forEach((tab, index) => {
      tab.onkeydown = (e) => {
        let targetIndex = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          targetIndex = (index + 1) % tabs.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          targetIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === "Home") {
          targetIndex = 0;
        } else if (e.key === "End") {
          targetIndex = tabs.length - 1;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          tabs[targetIndex].focus();
          const targetKey = stackLayers[targetIndex].key;
          window.AippTechStack.selectTab(targetKey);
        }
      };
    });
  }

  // 7. RENDER CARDS GRID (BENTO 4-COLUMN WITH ZERO ORPHANS)
  function renderCards(activeKey, animateEntrance = true) {
    const container = document.getElementById("stack-panel");
    if (!container) return;

    const isEn = getCurrentLang() === "en";
    const category = stackLayers.find((c) => c.key === activeKey) || stackLayers[0];

    container.setAttribute("role", "tabpanel");
    container.setAttribute("aria-labelledby", `tab-${category.key}`);

    const cardsHtml = category.items.map((item, idx) => {
      const isExpanded = expandedCardIndices.has(idx);

      // Render official SVG icon tiles
      const iconTilesHtml = item.icons.map((iconKey) => {
        const iconData = TECH_ICONS[iconKey] || TECH_ICONS.javascript;
        return `
          <div class="tech-icon-tile" style="--tile-brand: ${iconData.brand};" title="${iconKey}">
            ${iconData.svg}
          </div>
        `;
      }).join("");

      // Render connected project pills
      const projectPillsHtml = (item.projects || []).map((proj) => {
        return `
          <a
            href="#${proj.id === 'athletics' ? 'athletics' : (proj.id === 'foundation' ? 'foundation' : 'project-' + proj.id)}"
            class="project-proof-pill"
            onclick="window.AippTechStack.navigateToProject(event, '${proj.id}')"
            title="${isEn ? proj.roleEn : proj.roleId}"
          >
            <span class="proof-pill-bullet"></span>
            <span class="proof-pill-name font-semibold">${proj.title}</span>
            <span class="proof-pill-role font-mono">${isEn ? proj.roleEn : proj.roleId}</span>
            <svg class="proof-pill-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        `;
      }).join("");

      const bentoSpanClass = item.bentoSpan === 2 ? 'bento-span-2' : 'bento-span-1';

      return `
        <article
          class="skill-card ${bentoSpanClass} ${isExpanded ? 'is-expanded' : ''}"
          data-card-index="${idx}"
          tabindex="0"
          style="--card-order: ${idx}; cursor: pointer;"
          onclick="window.AippTechStack.onCardClick(event, ${idx})"
        >
          <!-- Specular Glare & Ambient Glow -->
          <div class="card-ambient-glow"></div>
          <div class="card-specular-glare"></div>

          <!-- Card Header: Badging & Official Tech Icons -->
          <div class="skill-header">
            <span class="skill-badge font-mono">
              ${category.metaphorId.toUpperCase()} // 0${idx + 1}
            </span>
            <div class="tech-icon-group">
              ${iconTilesHtml}
            </div>
          </div>

          <!-- Card Body: Title & Retained Description -->
          <div class="skill-body">
            <h4 class="skill-title">${item.name}</h4>
            <p class="skill-desc">${isEn ? item.descEn : item.descId}</p>
          </div>

          <!-- Card Footer & FLIP/Expand Evidence Trigger -->
          <div class="skill-footer">
            <button
              type="button"
              class="skill-expand-btn font-mono"
              onclick="window.AippTechStack.toggleCardExpand(event, ${idx})"
              aria-expanded="${isExpanded ? 'true' : 'false'}"
              aria-label="${isExpanded ? (isEn ? 'Close Project Proof' : 'Tutup Bukti Proyek') : (isEn ? 'Inspect Used In Projects' : 'Lihat Bukti Proyek')}"
            >
              <span class="expand-btn-text">
                ${isExpanded
                  ? (isEn ? "Sembunyikan Bukti" : "Sembunyikan Bukti")
                  : (isEn ? "Dipakai di: " + (item.projects ? item.projects.length : 0) + " Proyek" : "Dipakai di: " + (item.projects ? item.projects.length : 0) + " Proyek")}
              </span>
              <svg class="expand-chevron ${isExpanded ? 'rotated' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>

          <!-- Expandable Detail Drawer: Projects Section Evidence -->
          <div class="skill-detail-drawer ${isExpanded ? 'open' : ''}">
            <div class="drawer-header font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>${isEn ? "EVIDENCE IN SELECTED WORKS //" : "BUKTI DI REKAYASA NYATA //"}</span>
            </div>
            <div class="drawer-project-list">
              ${projectPillsHtml}
            </div>
          </div>
        </article>
      `;
    }).join("");

    container.innerHTML = cardsHtml;

    // Attach 3D tilt interaction for desktop
    setupCardInteractions(container);

    // Staggered entrance animation
    if (animateEntrance && !isReducedMotion) {
      triggerCardsEntrance(container);
    }
  }

  // 8. INTERACTION ENGINES: 3D MOUSE TILT (DESKTOP)
  function setupCardInteractions(container) {
    if (isTouchDevice || isReducedMotion || window.innerWidth < 1024) return;

    const cards = container.querySelectorAll('.skill-card');
    cards.forEach((card) => {
      let rafId = null;

      card.onmousemove = (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Clamped 3D tilt max 5 degrees
          const rotateX = Math.max(-5, Math.min(5, ((y - centerY) / centerY) * -5));
          const rotateY = Math.max(-5, Math.min(5, ((x - centerX) / centerX) * 5));

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
        });
      };

      card.onmouseleave = () => {
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      };
    });
  }

  // 9. STAGGERED ENTRANCE ANIMATION (TRANSFORM + OPACITY ONLY)
  function triggerCardsEntrance(container) {
    const cards = container.querySelectorAll('.skill-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px) scale(0.97)';
      
      const delay = index * 70; // ~70ms staggered timing
      setTimeout(() => {
        card.style.transition = 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, delay);
    });
  }

  // 10. TAB CHANGE TRANSITION ENGINE
  let transitionTimer = null;

  function selectTab(key) {
    if (key === activeCategoryKey && !isTransitioning) return;

    if (transitionTimer) {
      clearTimeout(transitionTimer);
      transitionTimer = null;
    }

    activeCategoryKey = key;
    window.activeStackTab = key;
    expandedCardIndices.clear();

    renderLayerIndicator(key);
    renderTabs(key);

    const container = document.getElementById("stack-panel");
    if (!container) return;

    if (isReducedMotion) {
      isTransitioning = false;
      renderCards(key, false);
      return;
    }

    isTransitioning = true;
    const oldCards = container.querySelectorAll('.skill-card');

    if (oldCards.length === 0) {
      renderCards(key, true);
      isTransitioning = false;
      return;
    }

    // Exit animation: fade + translate down slightly
    oldCards.forEach((c) => {
      c.style.transition = 'opacity 0.16s ease-out, transform 0.16s ease-out';
      c.style.opacity = '0';
      c.style.transform = 'translateY(12px)';
    });

    transitionTimer = setTimeout(() => {
      renderCards(key, true);
      isTransitioning = false;
      transitionTimer = null;
    }, 160);
  }

  // 11. TOGGLE CARD EXPANSION
  function toggleCardExpand(e, index) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (expandedCardIndices.has(index)) {
      expandedCardIndices.delete(index);
    } else {
      expandedCardIndices.clear();
      expandedCardIndices.add(index);
    }

    const container = document.getElementById("stack-panel");
    if (!container) return;

    const cards = container.querySelectorAll('.skill-card');
    cards.forEach((card, idx) => {
      const isExpanded = expandedCardIndices.has(idx);
      const drawer = card.querySelector('.skill-detail-drawer');
      const btn = card.querySelector('.skill-expand-btn');
      const chevron = card.querySelector('.expand-chevron');
      const text = card.querySelector('.expand-btn-text');
      const isEn = getCurrentLang() === "en";
      const category = stackLayers.find((c) => c.key === activeCategoryKey) || stackLayers[0];
      const item = category.items[idx];
      const projCount = item && item.projects ? item.projects.length : 0;

      if (isExpanded) {
        card.classList.add('is-expanded');
        if (drawer) drawer.classList.add('open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (chevron) chevron.classList.add('rotated');
        if (text) text.textContent = isEn ? "Sembunyikan Bukti" : "Sembunyikan Bukti";
      } else {
        card.classList.remove('is-expanded');
        if (drawer) drawer.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotated');
        if (text) text.textContent = isEn ? "Dipakai di: " + projCount + " Proyek" : "Dipakai di: " + projCount + " Proyek";
      }
    });
  }

  // 11b. CARD ROOT CLICK HANDLER (ALLOWS FULL-CARD TAP EXPAND)
  function onCardClick(e, index) {
    if (e.target.closest('a') || e.target.closest('button')) return;
    toggleCardExpand(e, index);
  }

  // 12. PROJECT NAVIGATION & EVIDENCE HIGHLIGHTER
  function navigateToProject(e, projectId) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    let targetEl = null;
    if (projectId === 'athletics') {
      targetEl = document.getElementById('athletics');
    } else if (projectId === 'foundation') {
      targetEl = document.getElementById('foundation') || document.getElementById('scene2');
    } else {
      targetEl = document.getElementById('project-' + projectId) || document.getElementById('projects');
    }

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Flash temporary cyan aura
      targetEl.classList.remove('evidence-pulse-highlight');
      void targetEl.offsetWidth; // trigger reflow
      targetEl.classList.add('evidence-pulse-highlight');
      setTimeout(() => {
        targetEl.classList.remove('evidence-pulse-highlight');
      }, 2600);
    }
  }

  // 13. VIEWPORT ENTRANCE STORYTELLING
  function initViewportStorytelling() {
    const stackSection = document.getElementById('stack');
    if (!stackSection || viewportEntered) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !viewportEntered) {
          viewportEntered = true;
          observer.disconnect();
          animateSectionEntrance();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(stackSection);
  }

  function animateSectionEntrance() {
    const headline = document.getElementById('stack-headline');
    const desc = document.getElementById('stack-desc');
    const indicator = document.getElementById('stack-layer-indicator');
    const tabs = document.getElementById('stack-tabs');
    const closing = document.getElementById('stack-closing');

    if (isReducedMotion) {
      if (headline) headline.style.opacity = '1';
      if (desc) desc.style.opacity = '1';
      if (indicator) indicator.style.opacity = '1';
      if (tabs) tabs.style.opacity = '1';
      if (closing) closing.style.opacity = '1';
      return;
    }

    // Split headline by words for sequential reveal
    if (headline && !headline.dataset.splitDone) {
      const text = headline.textContent.trim();
      const words = text.split(/\s+/);
      headline.innerHTML = words.map(w => `<span class="stack-word-span inline-block">${w}</span>`).join(' ');
      headline.dataset.splitDone = 'true';

      const wordSpans = headline.querySelectorAll('.stack-word-span');
      wordSpans.forEach((span, wIdx) => {
        span.style.opacity = '0';
        span.style.transform = 'translateY(14px)';
        span.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, wIdx * 65);
      });
    }

    if (desc) {
      desc.style.opacity = '0';
      desc.style.transform = 'translateY(12px)';
      desc.style.transition = 'opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s';
      setTimeout(() => {
        desc.style.opacity = '1';
        desc.style.transform = 'translateY(0)';
      }, 250);
    }

    if (indicator) {
      indicator.style.opacity = '0';
      indicator.style.transform = 'translateY(10px)';
      indicator.style.transition = 'opacity 0.45s ease-out 0.35s, transform 0.45s ease-out 0.35s';
      setTimeout(() => {
        indicator.style.opacity = '1';
        indicator.style.transform = 'translateY(0)';
      }, 350);
    }

    if (tabs) {
      tabs.style.opacity = '0';
      tabs.style.transform = 'translateY(10px)';
      tabs.style.transition = 'opacity 0.45s ease-out 0.45s, transform 0.45s ease-out 0.45s';
      setTimeout(() => {
        tabs.style.opacity = '1';
        tabs.style.transform = 'translateY(0)';
      }, 450);
    }

    if (closing) {
      closing.style.opacity = '0';
      closing.style.transform = 'translateY(12px)';
      closing.style.transition = 'opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s';
      setTimeout(() => {
        closing.style.opacity = '1';
        closing.style.transform = 'translateY(0)';
      }, 600);
    }
  }

  // 14. INITIALIZATION & RE-RENDER ON LANGUAGE CHANGE
  function init() {
    renderLayerIndicator(activeCategoryKey);
    renderTabs(activeCategoryKey);
    renderCards(activeCategoryKey, false);
    initViewportStorytelling();
  }

  function setLanguage(lang) {
    renderLayerIndicator(activeCategoryKey);
    renderTabs(activeCategoryKey);
    renderCards(activeCategoryKey, false);
  }

  // Expose to window for global integration
  window.AippTechStack = {
    init,
    selectTab,
    toggleCardExpand,
    onCardClick,
    navigateToProject,
    setLanguage,
    stackLayers,
    TECH_ICONS
  };

  // Backward compatibility for existing references
  window.onStackTabClick = function (key) {
    window.AippTechStack.selectTab(key);
  };

  // Auto-init on DOMContentLoaded or immediate if DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
