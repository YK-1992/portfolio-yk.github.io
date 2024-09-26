import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ImgAnimate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="img-exp-block"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >

<svg 
version="1.0" 
xmlns="http://www.w3.org/2000/svg"
width="340px"
height="340px" 
viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
<path 
 fill="0.1"
 strokeWidth='23'

d="M2262 5091 c-92 -32 -189 -111 -230 -187 -8 -16 -24 -23 -61 -27 -63
-8 -105 -29 -159 -80 -130 -126 -99 -336 62 -427 l52 -30 14 -112 c22 -183 28
-164 -70 -202 -337 -131 -567 -319 -637 -519 -24 -70 -24 -204 0 -274 70 -200
300 -388 637 -519 74 -28 85 -36 84 -56 -1 -13 -9 -79 -17 -148 -11 -87 -20
-127 -31 -135 -9 -5 -34 -21 -56 -35 -78 -47 -127 -150 -117 -246 13 -130 127
-244 243 -244 39 0 45 -4 79 -50 140 -190 393 -226 678 -96 120 54 305 176
393 258 l31 29 69 -57 c163 -135 363 -246 511 -285 98 -26 227 -28 304 -6 77
23 168 86 219 152 39 50 46 55 82 55 115 0 226 109 244 241 14 102 -59 230
-155 274 -39 17 -41 20 -41 63 0 24 -7 90 -16 144 -9 55 -12 104 -7 108 4 4
46 22 93 40 613 238 815 651 487 997 -111 117 -264 213 -477 299 -122 49 -113
28 -90 219 l14 110 50 25 c126 64 177 225 114 357 -37 80 -147 153 -229 153
-20 0 -33 9 -49 34 -35 58 -135 142 -197 168 -50 20 -75 23 -183 23 -111 0
-135 -3 -210 -28 -143 -48 -316 -148 -457 -263 -36 -30 -69 -54 -73 -54 -4 0
-36 23 -71 52 -164 132 -359 239 -506 278 -101 26 -246 27 -321 1z m293 -137
c114 -28 301 -134 465 -265 l33 -27 -110 -120 c-61 -66 -148 -167 -193 -225
l-82 -105 -91 -11 c-107 -14 -360 -64 -430 -85 -55 -17 -51 -22 -66 81 -19
129 -17 139 32 161 173 77 214 307 80 444 l-37 38 20 27 c74 99 205 129 379
87z m1467 0 c46 -16 101 -56 123 -90 16 -24 15 -26 -30 -76 -122 -136 -83
-343 80 -424 62 -30 61 -27 44 -151 -16 -120 -12 -114 -67 -97 -68 20 -322 71
-429 85 l-93 12 -88 111 c-49 61 -134 161 -190 222 -56 62 -102 114 -102 117
0 11 190 149 265 192 196 112 358 145 487 99z m-759 -496 c53 -57 118 -130
145 -163 l50 -60 -299 0 c-263 0 -296 2 -285 15 100 124 273 310 287 310 4 0
50 -46 102 -102z m282 -374 c26 -5 44 -26 117 -137 104 -160 168 -270 255
-443 l66 -130 -69 -140 c-74 -149 -223 -404 -298 -508 -43 -60 -50 -65 -94
-73 -60 -10 -672 -10 -732 0 -45 8 -46 9 -131 140 -102 155 -202 330 -272 475
l-51 104 68 136 c90 180 248 445 337 565 13 17 201 25 484 21 160 -2 304 -7
320 -10z m-998 -47 c-64 -99 -158 -258 -213 -362 -36 -69 -67 -125 -69 -125
-11 0 -135 373 -135 407 0 5 26 17 58 26 52 14 270 60 332 70 14 2 29 5 34 6
4 0 1 -9 -7 -22z m1323 3 c36 -6 123 -25 193 -42 l128 -30 -7 -32 c-8 -38
-100 -320 -117 -361 l-13 -29 -64 119 c-35 66 -92 167 -128 225 -36 58 -74
120 -85 138 l-20 33 24 -5 c13 -3 53 -10 89 -16z m-1846 -222 c23 -86 91 -276
147 -414 11 -28 8 -41 -39 -160 -42 -107 -69 -189 -138 -412 -5 -17 -23 -12
-147 43 -386 171 -557 385 -477 598 42 112 177 240 352 332 87 46 243 114 263
115 6 0 23 -46 39 -102z m2399 67 c255 -102 439 -241 509 -383 108 -218 -59
-448 -450 -622 -59 -27 -120 -52 -134 -55 -23 -6 -26 -3 -33 31 -10 57 -98
316 -143 423 l-40 95 33 77 c40 93 116 310 140 402 10 37 21 67 25 67 4 0 46
-16 93 -35z m-1995 -985 c30 -52 73 -121 94 -153 22 -32 38 -61 35 -63 -6 -6
-282 49 -367 73 -33 9 -60 22 -60 29 0 28 73 258 128 402 2 7 29 -33 59 -90
30 -57 80 -146 111 -198z m1722 26 c22 -72 40 -136 40 -142 0 -6 -39 -22 -87
-34 -94 -24 -336 -71 -340 -66 -2 2 34 63 79 137 46 74 112 190 147 257 l65
123 28 -72 c16 -39 47 -131 68 -203z m89 -379 c6 -43 11 -97 11 -120 0 -40 -2
-43 -45 -60 -63 -26 -131 -105 -151 -175 -27 -93 -1 -195 70 -265 l36 -36 -26
-31 c-37 -44 -100 -77 -170 -89 -158 -29 -378 59 -624 249 l-80 63 97 101 c54
56 142 156 195 222 l97 121 93 12 c104 13 359 64 428 85 25 8 48 11 51 7 4 -3
12 -41 18 -84z m-2041 63 c92 -23 322 -65 409 -75 l62 -7 90 -112 c49 -62 135
-161 190 -222 55 -60 101 -111 101 -114 -1 -10 -145 -117 -233 -172 -152 -95
-284 -141 -408 -141 -89 -1 -161 28 -218 87 l-34 35 42 46 c54 59 73 105 74
180 1 111 -65 210 -169 257 -50 21 -47 3 -23 176 8 60 15 82 26 82 8 0 49 -9
91 -20z m1252 -109 c0 -7 -138 -165 -214 -246 l-76 -80 -91 95 c-50 52 -116
127 -148 165 l-58 70 293 0 c162 0 294 -2 294 -4z" />
<motion.path 
fill="none"
strokeWidth='46'
d="M1324 4406 c-413 -150 -721 -403 -864 -709 -84 -181 -114 -322 -113
-542 0 -154 16 -280 53 -427 11 -42 20 -82 20 -90 0 -7 -64 -99 -143 -205 -78
-105 -157 -217 -176 -247 -108 -179 -112 -314 -14 -442 25 -34 140 -128 165
-136 6 -2 0 -21 -16 -45 -37 -55 -58 -128 -50 -172 8 -46 47 -114 80 -140 l26
-20 -16 -48 c-34 -99 -8 -183 70 -233 27 -16 54 -30 61 -30 7 0 13 -1 13 -3 0
-1 -7 -34 -15 -72 -97 -458 277 -583 909 -304 l108 48 19 -22 c60 -73 137
-262 174 -424 8 -37 17 -78 20 -91 13 -53 -4 -52 1043 -52 660 0 979 3 1000
11 18 6 35 22 42 39 10 25 8 38 -23 107 -122 269 -210 551 -248 788 -17 106
-17 400 0 493 11 63 11 76 -2 96 -21 32 -63 41 -93 21 -29 -19 -40 -60 -55
-205 -31 -313 48 -724 215 -1120 20 -46 36 -86 36 -87 0 -2 -404 -2 -897 -1
l-896 3 -14 60 c-32 145 -101 310 -171 414 l-30 44 110 73 c61 41 133 93 162
116 119 97 289 277 325 345 25 49 -22 112 -74 99 -15 -4 -51 -40 -95 -96 -39
-49 -101 -116 -138 -150 -157 -145 -463 -342 -635 -409 -345 -135 -595 -144
-652 -25 -23 48 -19 148 10 248 14 47 25 97 25 110 0 32 -27 53 -85 66 -100
22 -113 47 -70 138 37 79 34 92 -35 152 -32 28 -62 60 -65 70 -8 27 17 77 71
140 38 44 45 59 42 88 -3 32 -10 39 -93 89 -159 96 -209 166 -185 260 18 75
62 147 194 324 155 208 216 297 216 316 0 9 -11 56 -25 107 -116 434 -67 804
148 1088 144 192 396 363 680 464 99 34 120 51 120 94 0 35 -31 70 -62 70 -9
-1 -57 -16 -107 -34z"
initial={{ pathLength: 0 }}
animate={{ pathLength: isInView ? 1 : 0 }}
transition={{ duration: 3, ease: "easeInOut" }}
/>
</g>
</svg> 

    </motion.div>
  );
};

export default ImgAnimate;