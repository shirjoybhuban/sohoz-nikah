import { Icon } from '@chakra-ui/react';

const SNPlayIcon = (props) => {
  return (
    <Icon width="148" height="88" viewBox="0 0 148 88" {...props}>
      <g filter="url(#filter0_d_333_2)">
        <rect
          x="4"
          width="140"
          height="80"
          rx="15"
          fill="url(#paint0_linear_333_2)"
        />
      </g>
      <path
        d="M94.9696 35.8736C97.8715 37.8592 97.8715 42.1408 94.9696 44.1264L68.3236 62.3594C65.0052 64.6301 60.5 62.2539 60.5 58.233L60.5 21.767C60.5 17.7461 65.0052 15.3699 68.3236 17.6406L94.9696 35.8736Z"
        fill="#E7E7E7"
      />
      <defs>
        <filter
          id="filter0_d_333_2"
          x="0"
          y="0"
          width="148"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_333_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_333_2"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_333_2"
          x1="4"
          y1="40"
          x2="144"
          y2="40"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.375" stop-color="#F13F79" />
          <stop offset="1" stop-color="#FFC778" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default SNPlayIcon;
