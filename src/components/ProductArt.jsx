import { useId } from "react";

// Ilustrações SVG locais: sem imagens remotas, fontes externas ou bibliotecas de ícones.
export default function ProductArt({
  kind = "headphones",
  color = "#40614d",
  className = "",
}) {
  const id = useId().replace(/:/g, "");
  const body = `body-${id}`;
  const gloss = `gloss-${id}`;
  return (
    <svg
      className={className}
      viewBox="0 0 360 270"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity=".76" />
        </linearGradient>
        <linearGradient id={gloss} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity=".32" />
          <stop offset=".5" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#13251d" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <ellipse cx="183" cy="236" rx="90" ry="11" fill="#233f32" opacity=".09" />
      {kind === "headphones" && (
        <g transform="rotate(-13 180 140)">
          <path
            d="M100 159v-39a80 80 0 0 1 160 0v39"
            fill="none"
            stroke={color}
            strokeWidth="23"
          />
          <path
            d="M100 143v-24a80 80 0 0 1 160 0v24"
            fill="none"
            stroke="#fff"
            strokeOpacity=".22"
            strokeWidth="7"
          />
          <path d="M110 126v37m140-37v37" stroke="#c2c7bb" strokeWidth="13" />
          <rect
            x="84"
            y="143"
            width="51"
            height="82"
            rx="24"
            fill={`url(#${body})`}
          />
          <rect
            x="225"
            y="143"
            width="51"
            height="82"
            rx="24"
            fill={`url(#${body})`}
          />
          <rect x="118" y="146" width="22" height="74" rx="11" fill="#203a2d" />
          <rect x="220" y="146" width="22" height="74" rx="11" fill="#203a2d" />
          <rect
            x="89"
            y="149"
            width="41"
            height="70"
            rx="20"
            fill={`url(#${gloss})`}
          />
          <rect
            x="246"
            y="154"
            width="6"
            height="22"
            rx="3"
            fill="#fff"
            opacity=".16"
          />
          <circle cx="255" cy="205" r="3" fill="#d7edac" />
        </g>
      )}
      {kind === "lamp" && (
        <g>
          <ellipse cx="185" cy="222" rx="60" ry="12" fill={color} />
          <path
            d="M185 218V129c0-33 10-53 35-62"
            fill="none"
            stroke={color}
            strokeWidth="12"
          />
          <path
            d="M188 213V129c0-28 10-50 33-59"
            fill="none"
            stroke="#fff"
            strokeOpacity=".18"
            strokeWidth="3"
          />
          <path
            d="M180 116c-6-35 12-65 44-65s50 27 45 65Z"
            fill={`url(#${body})`}
          />
          <path
            d="M184 110c-3-27 13-51 32-54"
            fill="none"
            stroke="#fff"
            strokeOpacity=".22"
            strokeWidth="5"
          />
          <ellipse cx="224" cy="116" rx="45" ry="9" fill="#f9eed6" />
          <ellipse cx="224" cy="116" rx="17" ry="5" fill="#f6d88e" />
          <ellipse cx="185" cy="218" rx="56" ry="8" fill={`url(#${gloss})`} />
        </g>
      )}
      {(kind === "book" || kind === "notebook") && (
        <g transform="rotate(-12 180 140)">
          <path d="m111 57 131 1 10 153-130 10Z" fill="#c7c0ab" />
          <path d="m116 53 131 2 6 151-131 10Z" fill="#f9f7ee" />
          <path d="m106 47 135 3 7 151-134 10Z" fill={`url(#${body})`} />
          <path
            d="m115 48 8 161"
            stroke="#fff"
            strokeOpacity=".22"
            strokeWidth="2"
          />
          {kind === "book" ? (
            <>
              <text
                x="137"
                y="95"
                fill="#fff9ec"
                fontFamily="Georgia, serif"
                fontSize="20"
              >
                novas
              </text>
              <text
                x="138"
                y="119"
                fill="#fff9ec"
                fontFamily="Georgia, serif"
                fontSize="20"
              >
                ideias.
              </text>
              <circle cx="187" cy="158" r="20" fill="#fff9ec" opacity=".25" />
              <path
                d="m173 158 14-14 14 14-14 14Z"
                fill="#fff9ec"
                opacity=".7"
              />
            </>
          ) : (
            <>
              <path
                d="m225 50 7 152"
                stroke="#3a352a"
                strokeWidth="5"
                opacity=".55"
              />
              <rect
                x="142"
                y="82"
                width="59"
                height="39"
                rx="2"
                fill="#f5efdf"
                opacity=".8"
                transform="rotate(1 142 82)"
              />
              <path d="M153 95h37m-36 10h27" stroke={color} strokeWidth="2" />
            </>
          )}
        </g>
      )}
      {kind === "speaker" && (
        <g transform="rotate(-8 180 145)">
          <path
            d="M128 106V91c0-40 104-40 104 0v15"
            fill="none"
            stroke={color}
            strokeWidth="7"
          />
          <rect
            x="98"
            y="91"
            width="164"
            height="132"
            rx="29"
            fill={`url(#${body})`}
          />
          <rect
            x="105"
            y="99"
            width="150"
            height="115"
            rx="23"
            fill={`url(#${gloss})`}
          />
          {Array.from({ length: 12 }, (_, index) => (
            <path
              key={index}
              d={`M${119 + index * 11} 117v74`}
              stroke="#203125"
              strokeWidth="2"
              strokeDasharray="2 5"
              opacity=".36"
            />
          ))}
          <circle cx="180" cy="106" r="3" fill="#e7eccf" />
          <rect
            x="154"
            y="194"
            width="51"
            height="15"
            rx="7"
            fill="#243a2e"
            opacity=".45"
          />
          <path d="M168 201h24" stroke="#e7eccf" strokeWidth="2" />
        </g>
      )}
      {kind === "bottle" && (
        <g transform="rotate(10 180 140)">
          <rect x="160" y="36" width="42" height="30" rx="7" fill="#354b44" />
          <path
            d="M163 60v17c-17 12-28 21-28 40v94c0 18 93 18 93 0v-94c0-19-11-28-28-40V60Z"
            fill={`url(#${body})`}
          />
          <path
            d="M163 60v17c-17 12-28 21-28 40v94c0 18 93 18 93 0v-94c0-19-11-28-28-40V60Z"
            fill={`url(#${gloss})`}
          />
          <path
            d="M147 117v79"
            stroke="#fff"
            strokeWidth="5"
            strokeOpacity=".23"
            strokeLinecap="round"
          />
          <path
            d="M167 52h29"
            stroke="#fff"
            strokeOpacity=".2"
            strokeWidth="2"
          />
          <text
            x="164"
            y="158"
            fill="#fff"
            opacity=".8"
            fontFamily="Georgia, serif"
            fontSize="15"
          >
            fluxo
          </text>
        </g>
      )}
    </svg>
  );
}
