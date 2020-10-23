<template>
  <div class=" flex bg-gray-300 relative w-full z-20   ">
      <!-- Board -->
      <div :class="[chessboard?chessboard.getOrientation()=='w'?'flex-col':' flex-col-reverse':'','flex items-center justify-center']  ">
          <!-- <div v-show="step!=1" class=" h-12"></div> -->
        <div v-show="step==1" class=" flex h-12 mb-2">
            <div class=" h-12 w-12" @click="piece=''" :class="[piece==''?' bg-blue-400':'','rounded-full p-1']">
                <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg>
            </div>
            <div @click="piece='bk'" :class="[piece=='bk'?' bg-blue-400':'','rounded-full p-1']" >
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 22.5,11.63 L 22.5,6"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;"
                        id="path6570" />
                        <path
                        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
                        style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />
                        <path
                        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
                        style="fill:#000000; stroke:#000000;" />
                        <path
                        d="M 20,8 L 25,8"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                        <path
                        d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
                        style="fill:none; stroke:#ffffff;" />
                        <path
                        d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
                        style="fill:none; stroke:#ffffff;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='bq'" :class="[piece=='bq'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <g style="fill:#000000; stroke:none;">
                        <circle cx="6"    cy="12" r="2.75" />
                        <circle cx="14"   cy="9"  r="2.75" />
                        <circle cx="22.5" cy="8"  r="2.75" />
                        <circle cx="31"   cy="9"  r="2.75" />
                        <circle cx="39"   cy="12" r="2.75" />
                        </g>
                        <path
                        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
                        style="stroke-linecap:butt; stroke:#000000;" />
                        <path
                        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 11,38.5 A 35,35 1 0 0 34,38.5"
                        style="fill:none; stroke:#000000; stroke-linecap:butt;" />
                        <path
                        d="M 11,29 A 35,35 1 0 1 34,29"
                        style="fill:none; stroke:#ffffff;" />
                        <path
                        d="M 12.5,31.5 L 32.5,31.5"
                        style="fill:none; stroke:#ffffff;" />
                        <path
                        d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
                        style="fill:none; stroke:#ffffff;" />
                        <path
                        d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
                        style="fill:none; stroke:#ffffff;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='br'" :class="[piece=='br'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
                        style="stroke-linecap:butt;stroke-linejoin:miter;" />
                        <path
                        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 12,35.5 L 33,35.5 L 33,35.5"
                        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
                        <path
                        d="M 13,31.5 L 32,31.5"
                        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
                        <path
                        d="M 14,29.5 L 31,29.5"
                        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
                        <path
                        d="M 14,16.5 L 31,16.5"
                        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
                        <path
                        d="M 11,14 L 34,14"
                        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='bb'" :class="[piece=='bb'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;"> 
                        <path
                            d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
                        <path
                            d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
                        <path
                            d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
                        </g>
                        <path
                        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
                        style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='bn'" :class="[piece=='bn'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                        style="fill:#000000; stroke:#000000;" />
                        <path
                        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                        style="fill:#000000; stroke:#000000;" />
                        <path
                        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                        style="fill:#ffffff; stroke:#ffffff;" />
                        <path
                        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                        style="fill:#ffffff; stroke:#ffffff;" />
                        <path
                        d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
                        style="fill:#ffffff; stroke:none;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='bp'" :class="[piece=='bp'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <path
                        d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
                        style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
                </svg>
            </div>
            <div class=" h-12 w-12" @click="piece='trash'" :class="[piece=='trash'?' bg-blue-400':'','rounded-full p-1']">
                <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div v-show="step==-5" @click="step=1" class="  btn--create items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300  cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Create puzzle</div>
        <div @mouseover="sentMessage" @mousedown="sentMessage"  ref="chessboard" :class="step==-5?'   chessboard opacity-0 ml-4':'chessboard opacity-100 ml-4 relative '"></div>
        <div v-show="step==1" class=" flex ">
            <div class=" h-12 w-12" @click="piece=''" :class="[piece==''?' bg-blue-400':'','rounded-full p-1']">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
            </div>
            <div @click="piece='wk'" :class="[piece=='wk'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 22.5,11.63 L 22.5,6"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                        <path
                        d="M 20,8 L 25,8"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                        <path
                        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
                        style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />
                        <path
                        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
                        style="fill:#ffffff; stroke:#000000;" />
                        <path
                        d="M 11.5,30 C 17,27 27,27 32.5,30"
                        style="fill:none; stroke:#000000;" />
                        <path
                        d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
                        style="fill:none; stroke:#000000;" />
                        <path
                        d="M 11.5,37 C 17,34 27,34 32.5,37"
                        style="fill:none; stroke:#000000;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='wq'" :class="[piece=='wq'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                        transform="translate(-1,-1)" />
                        <path
                        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                        transform="translate(15.5,-5.5)" />
                        <path
                        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                        transform="translate(32,-1)" />
                        <path
                        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                        transform="translate(7,-4.5)" />
                        <path
                        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
                        transform="translate(24,-4)" />
                        <path
                        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 11.5,30 C 15,29 30,29 33.5,30"
                        style="fill:none;" />
                        <path
                        d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
                        style="fill:none;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='wr'" :class="[piece=='wr'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
                        style="stroke-linecap:butt;" />
                        <path
                        d="M 34,14 L 31,17 L 14,17 L 11,14" />
                        <path
                        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
                        style="stroke-linecap:butt; stroke-linejoin:miter;" />
                        <path
                        d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
                        <path
                        d="M 11,14 L 34,14"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                    </g>
                </svg>

            </div>
            <div @click="piece='wb'" :class="[piece=='wb'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;"> 
                        <path
                            d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
                        <path
                            d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
                        <path
                            d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
                        </g>
                        <path
                        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
                        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
                    </g>
                </svg>

            </div>
            <div @click="piece='wn'" :class="[piece=='wn'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
                        <path
                        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                        style="fill:#ffffff; stroke:#000000;" />
                        <path
                        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                        style="fill:#ffffff; stroke:#000000;" />
                        <path
                        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                        style="fill:#000000; stroke:#000000;" />
                        <path
                        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                        style="fill:#000000; stroke:#000000;" />
                    </g>
                </svg>
            </div>
            <div @click="piece='wp'" :class="[piece=='wp'?' bg-blue-400':'','rounded-full p-1']">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
                    <path
                        d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
                        style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
                </svg>
            </div>
            <div class=" h-12 w-12" @click="piece='trash'" :class="[piece=='trash'?' bg-blue-400':'','rounded-full p-1']">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </div>
        </div>
      </div>
      <!-- Additional info -->
        <div class=" flex flex-col justify-center  items-center w-full">
            <div v-if="step==0" class=" flex flex-col mx-2 text-xl">
                <div @click="step++"  class="items-center justify-center px-8 py-4 leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Edit puzzle</div>
                <div @click="deletePuzzle(puzzle.id)" class="mt-4 inline-flex items-center justify-center px-8 py-4  leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-600 border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500 hover:text-gray-100 cursor-pointer">Delete puzzle</div>
            </div>

            <div v-show="step==1" class=" h-full p-3 flex flex-col justify-center items-center ">
                    <!-- <div class=" ">{{finalFen}}</div> -->
                    <div class="">
                        <div class=" text-center">Position</div>
                        <div class="flex">
                            <div @click="setStart" class="mr-2 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none hover:bg-blue-900 hover:text-white  ">Start</div>
                            <div @click="setEmpty" class="mr-2 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none hover:bg-blue-900 hover:text-white">Empty</div>
                        </div>
                    </div>

                    <div class="">
                        <div class=" font-serif text-center">Castling</div>
                        <div class=" grid grid-cols-2 max-w-xs ">
                            <label class="inline-flex items-center ">
                                <input v-model="castleAllows[0]" type="checkbox" class=" h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">White 0-0</span>
                            </label>

                            <label class="inline-flex items-center ">
                                <input v-model="castleAllows[1]" type="checkbox" class=" h-5 w-5 text-red-600" checked><span class="ml-2 text-gray-700">White 0-0-0</span>
                            </label>

                            <label class="inline-flex items-center ">
                                <input v-model="castleAllows[2]" type="checkbox" class=" h-5 w-5 text-orange-600" checked><span class="ml-2 text-gray-700">Black 0-0</span>
                            </label>

                            <label class="inline-flex items-center ">
                                <input v-model="castleAllows[3]" type="checkbox" class=" h-5 w-5 text-yellow-600" checked><span class="ml-2 text-gray-700">Black 0-0-0</span>
                            </label>
                        </div>
                    </div>
                    <div class=" w-full flex justify-around">
                        <div class=" flex flex-col justify-center items-center ">
                            <div class="">Orientation</div>
                            <div class="flex ">
                                <div @click="flipBoard" :class=" [chessboard?chessboard.getOrientation()=='w'?'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none':'','inline-block px-2  select-none']" >{{chessboard?chessboard.getOrientation()=="w"?'White':"Black":''}}</div>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-center ">
                            <div class="">Move</div>
                            <div class="flex ">
                                <div @click="toggleTurn" :class=" [turn=='w'?'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none','inline-block px-2  select-none']" >{{turn=="w"?'White':"Black"}}</div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <!-- <div v-if="step==2"  @click="goTwoToOne" class=" items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300  cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center ">Go on {{step-1}} step </div>
            <div v-if="step==3"  @click="goThreeToTwo" class=" mt-auto self-stretch ">Go on {{step-1}} step</div> -->
            <div  v-show="step==2||step==3" class="mt-auto select-none flex flex-col justify-center items-center ">
                <div v-show="step==2" class=" font-serif text-xl font-semibold">Your solution</div>
                <div v-show="step==3" class=" font-serif text-xl font-semibold">Check your solution in action!</div>
                <div  class=" w-24 z-20 whitespace-pre text-2xl ">{{pgnGood}} </div>
            </div>
            <div v-if="step==1" class=" mt-auto self-stretch ">
            <div class=" text-center">Step {{step}} from 3</div>
            <div @click="stepOneToTwo" class="items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Next step</div>
            </div>
            <div v-if="step==2" class=" mt-auto self-stretch   ">
                <div class=" text-center">Step {{step}} from 3</div>
                <div v-if="step==2" class=" flex w-full justify-center">
                    <div   @click="goTwoToOne" class=" w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-900 text-white border-gray-300  cursor-pointer select-none text-center ">Go on {{step-1}} step </div>
                    <div @click="stepTwoToThree" class=" w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Next step</div>
                </div>
            </div>
            <div v-if="step==3" class=" mt-auto self-stretch flex ">
                <!-- <div class=" text-center">Step {{step}} from 3</div> -->
                <div   @click="goThreeToTwo" class=" w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-900 text-white border-gray-300  cursor-pointer select-none text-center ">Go on {{step-1}} step </div>
                <div @click="savePuzzle" :class="!isRight?' w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline text-gray-600 bg-gray-500  border-gray-500 cursor-not-allowed select-none text-center ':'w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center'">Save puzzle</div>
            </div>
        </div>
   <!-- <div class="">

       <svg>
           <g  fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(5.000000, 5.000000)" stroke="#000000" stroke-width="1.5">
            <path d="M15,4.96764706 L15,0" id="Shape"></path>
            <path d="M12.8571429,1.76470588 L17.1428571,1.76470588" id="Shape"></path>
            <path d="M17.5714286,7.5 C17.5714286,7.5 16.7142857,5.29411765 15,5.29411765 C13.2857143,5.29411765 12.4285714,7.5 12.4285714,7.5 C11.1428571,10.1470588 15,16.7647059 15,16.7647059 C15,16.7647059 18.8571429,10.1470588 17.5714286,7.5 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            <path d="M5.57142857,27.3529412 C10.2857143,30.4411765 18.8571429,30.4411765 23.5714286,27.3529412 L23.5714286,21.1764706 C23.5714286,21.1764706 31.2857143,17.2058824 28.7142857,11.9117647 C25.2857143,6.17647059 17.1428571,8.82352941 15,15.4411765 L15,18.5294118 L15,15.4411765 C12,8.82352941 3.85714286,6.17647059 1.28571429,11.9117647 C-1.28571429,17.2058824 5.57142857,20.7352941 5.57142857,20.7352941 L5.57142857,27.3529412 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            <path d="M5.57142857,21.1764706 C10.2857143,18.5294118 18.8571429,18.5294118 23.5714286,21.1764706" id="Shape"></path>
            <path d="M5.57142857,24.2647059 C10.2857143,21.6176471 18.8571429,21.6176471 23.5714286,24.2647059" id="Shape"></path>
            <path d="M5.57142857,27.3529412 C10.2857143,24.7058824 18.8571429,24.7058824 23.5714286,27.3529412" id="Shape"></path>
            </g>
            <g fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(44.000000, 5.000000)" stroke="#000000" stroke-width="1.5">
            <path d="M3.45945946,6.2 C3.45945946,7.17833299 2.68503308,7.97142857 1.72972973,7.97142857 C0.774426379,7.97142857 0,7.17833299 0,6.2 C0,5.22166701 0.774426379,4.42857143 1.72972973,4.42857143 C2.68503308,4.42857143 3.45945946,5.22166701 3.45945946,6.2 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M17.7297297,2.21428571 C17.7297297,3.1926187 16.9553034,3.98571429 16,3.98571429 C15.0446966,3.98571429 14.2702703,3.1926187 14.2702703,2.21428571 C14.2702703,1.23595273 15.0446966,0.442857143 16,0.442857143 C16.9553034,0.442857143 17.7297297,1.23595273 17.7297297,2.21428571 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M32,6.2 C32,7.17833299 31.2255736,7.97142857 30.2702703,7.97142857 C29.3149669,7.97142857 28.5405405,7.17833299 28.5405405,6.2 C28.5405405,5.22166701 29.3149669,4.42857143 30.2702703,4.42857143 C31.2255736,4.42857143 32,5.22166701 32,6.2 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M10.3783784,3.1 C10.3783784,4.07833299 9.603952,4.87142857 8.64864865,4.87142857 C7.6933453,4.87142857 6.91891892,4.07833299 6.91891892,3.1 C6.91891892,2.12166701 7.6933453,1.32857143 8.64864865,1.32857143 C9.603952,1.32857143 10.3783784,2.12166701 10.3783784,3.1 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M25.0810811,3.54285714 C25.0810811,4.52119013 24.3066547,5.31428571 23.3513514,5.31428571 C22.396048,5.31428571 21.6216216,4.52119013 21.6216216,3.54285714 C21.6216216,2.56452416 22.396048,1.77142857 23.3513514,1.77142857 C24.3066547,1.77142857 25.0810811,2.56452416 25.0810811,3.54285714 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M4.32432432,18.6 C11.6756757,17.2714286 22.4864865,17.2714286 27.6756757,18.6 L29.4054054,7.97142857 L23.3513514,17.7142857 L23.3513514,5.31428571 L18.5945946,17.2714286 L16,3.98571429 L13.4054054,17.2714286 L8.64864865,4.87142857 L8.64864865,17.7142857 L2.59459459,7.97142857 L4.32432432,18.6 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M4.32432432,18.6 C4.32432432,20.3714286 5.62162162,20.3714286 6.48648649,22.1428571 C7.35135135,23.4714286 7.35135135,23.0285714 6.91891892,25.2428571 C5.62162162,26.1285714 5.62162162,27.4571429 5.62162162,27.4571429 C4.32432432,28.7857143 6.05405405,29.6714286 6.05405405,29.6714286 C11.6756757,30.5571429 20.3243243,30.5571429 25.9459459,29.6714286 C25.9459459,29.6714286 27.2432432,28.7857143 25.9459459,27.4571429 C25.9459459,27.4571429 26.3783784,26.1285714 25.0810811,25.2428571 C24.6486486,23.0285714 24.6486486,23.4714286 25.5135135,22.1428571 C26.3783784,20.3714286 27.6756757,20.3714286 27.6756757,18.6 C20.3243243,17.2714286 11.6756757,17.2714286 4.32432432,18.6 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M6.48648649,22.1428571 C9.51351351,21.2571429 22.4864865,21.2571429 25.5135135,22.1428571" id="Shape"></path>
            <path d="M6.91891892,25.2428571 C12.1081081,24.3571429 19.8918919,24.3571429 25.0810811,25.2428571" id="Shape"></path>
            </g>
            <g  fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(86.000000, 5.000000)" stroke="#000000" stroke-width="1.5">
            <g id="Group" fill="#FFFFFF" fill-rule="nonzero">
                <path d="M2.54545455,27.3529412 C5.42181818,26.4970588 11.1236364,27.7323529 14,25.5882353 C16.8763636,27.7323529 22.5781818,26.4970588 25.4545455,27.3529412 C25.4545455,27.3529412 26.8545455,27.8294118 28,29.1176471 C27.4230303,29.9735294 26.6,29.9911765 25.4545455,29.5588235 C22.5781818,28.7029412 16.8763636,29.9647059 14,28.6764706 C11.1236364,29.9647059 5.42181818,28.7029412 2.54545455,29.5588235 C1.39660606,29.9911765 0.574424242,29.9735294 0,29.1176471 C1.14884848,27.4058824 2.54545455,27.3529412 2.54545455,27.3529412 Z" id="Shape"></path>
                <path d="M7.63636364,23.8235294 C9.75757576,26.0294118 18.2424242,26.0294118 20.3636364,23.8235294 C20.7878788,22.5 20.3636364,22.0588235 20.3636364,22.0588235 C20.3636364,19.8529412 18.2424242,18.5294118 18.2424242,18.5294118 C22.9090909,17.2058824 23.3333333,8.38235294 14,4.85294118 C4.66666667,8.38235294 5.09090909,17.2058824 9.75757576,18.5294118 C9.75757576,18.5294118 7.63636364,19.8529412 7.63636364,22.0588235 C7.63636364,22.0588235 7.21212121,22.5 7.63636364,23.8235294 Z" id="Shape"></path>
                <path d="M16.1212121,2.64705882 C16.1212121,3.86533401 15.1715131,4.85294118 14,4.85294118 C12.8284869,4.85294118 11.8787879,3.86533401 11.8787879,2.64705882 C11.8787879,1.42878364 12.8284869,0.441176471 14,0.441176471 C15.1715131,0.441176471 16.1212121,1.42878364 16.1212121,2.64705882 Z" id="Shape"></path>
            </g>
            <path d="M9.75757576,18.5294118 L18.2424242,18.5294118 M7.63636364,22.0588235 L20.3636364,22.0588235 M14,9.26470588 L14,13.6764706 M11.8787879,11.4705882 L16.1212121,11.4705882" id="Shape"></path>
            </g>
            <g  fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(126.000000, 6.000000)" stroke="#000000">
            <path d="M13.5757576,2.625 C22.4848485,3.5 27.5757576,9.625 27.1515152,28 L7.63636364,28 C7.63636364,20.125 16.1212121,22.3125 14.4242424,9.625" id="Shape" stroke-width="1.5" fill="#FFFFFF"></path>
            <path d="M15.2727273,9.625 C15.5951515,12.17125 10.5636364,16.07375 8.48484848,17.5 C5.93939394,19.25 6.09212121,21.2975 4.24242424,21 C3.35830303,20.1775 5.43878788,18.34 4.24242424,18.375 C3.39393939,18.375 4.40363636,19.45125 3.39393939,20.125 C2.54545455,20.125 -0.00254545455,21 0,16.625 C0,14.875 5.09090909,6.125 5.09090909,6.125 C5.09090909,6.125 6.69454545,4.4625 6.78787879,3.0625 C6.16848485,2.19275 6.36363636,1.3125 6.36363636,0.4375 C7.21212121,-0.4375 8.90909091,2.625 8.90909091,2.625 L10.6060606,2.625 C10.6060606,2.625 11.2678788,0.882 12.7272727,0 C13.5757576,0 13.5757576,2.625 13.5757576,2.625" id="Shape" stroke-width="1.5" fill="#FFFFFF"></path>
            <path d="M2.96969697,16.1875 C2.96969697,16.4291246 2.77975717,16.625 2.54545455,16.625 C2.31115192,16.625 2.12121212,16.4291246 2.12121212,16.1875 C2.12121212,15.9458754 2.31115192,15.75 2.54545455,15.75 C2.77975717,15.75 2.96969697,15.9458754 2.96969697,16.1875 Z" id="Shape" stroke-width="1.5" fill="#000000"></path>
            <path d="M7.6363543,7.4375 C7.6363543,8.16235779 7.44641868,8.74997112 7.21212121,8.74997112 C6.97782375,8.74997112 6.78788812,8.16235779 6.78788812,7.4375 C6.78788812,6.71264221 6.97782375,6.12502888 7.21212121,6.12502888 C7.44641868,6.12502888 7.6363543,6.71264221 7.6363543,7.4375 Z" id="Shape" stroke-width="1.499967" fill="#000000" transform="translate(7.212121, 7.437500) rotate(30.000728) translate(-7.212121, -7.437500) "></path>
            </g>
            <g  fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(169.000000, 8.000000)" stroke="#000000" stroke-width="1.5">
            <polygon id="Shape" fill="#FFFFFF" points="0 26 22 26 22 23.4 0 23.4"></polygon>
            <polygon id="Shape" fill="#FFFFFF" points="2.44444444 23.4 2.44444444 19.9333333 19.5555556 19.9333333 19.5555556 23.4"></polygon>
            <polyline id="Shape" fill="#FFFFFF" points="1.62962963 4.33333333 1.62962963 0 4.88888889 0 4.88888889 1.73333333 8.96296296 1.73333333 8.96296296 0 13.037037 0 13.037037 1.73333333 17.1111111 1.73333333 17.1111111 0 20.3703704 0 20.3703704 4.33333333"></polyline>
            <polyline id="Shape" fill="#FFFFFF" points="20.3703704 4.33333333 17.9259259 6.93333333 4.07407407 6.93333333 1.62962963 4.33333333"></polyline>
            <polyline id="Shape" fill="#FFFFFF" points="17.9259259 6.93333333 17.9259259 17.7666667 4.07407407 17.7666667 4.07407407 6.93333333"></polyline>
            <polyline id="Shape" fill="#FFFFFF" points="17.9259259 17.7666667 19.1481481 19.9333333 2.85185185 19.9333333 4.07407407 17.7666667"></polyline>
            <path d="M1.62962963,4.33333333 L20.3703704,4.33333333" id="Shape"></path>
            </g>
            <g  transform="translate(210.000000, 9.000000)" fill="#FFFFFF" fill-rule="nonzero" stroke="#000000" stroke-linecap="round" stroke-width="1.5">
                <path d="M10,0 C8.15833333,0 6.66666667,1.50129032 6.66666667,3.35483871 C6.66666667,4.10129032 6.90833333,4.78903226 7.31666667,5.35096774 C5.69166667,6.29032258 4.58333333,8.04322581 4.58333333,10.0645161 C4.58333333,11.7670968 5.36666667,13.2851613 6.59166667,14.2832258 C4.09166667,15.1722581 0.416666667,18.9380645 0.416666667,25.5806452 L19.5833333,25.5806452 C19.5833333,18.9380645 15.9083333,15.1722581 13.4083333,14.2832258 C14.6333333,13.2851613 15.4166667,11.7670968 15.4166667,10.0645161 C15.4166667,8.04322581 14.3083333,6.29032258 12.6833333,5.35096774 C13.0916667,4.78903226 13.3333333,4.10129032 13.3333333,3.35483871 C13.3333333,1.50129032 11.8416667,0 10,0 Z" id="Shape"></path>
            </g>
       </svg>
   </div> -->
    
  </div>
</template>

<script>
import { Chessboard,MOVE_INPUT_MODE,INPUT_EVENT_TYPE,COLOR } from "cm-chessboard";
import chess from "chess.js"
export default {
data() {
    return{
        piece:"",
        chessboard:null,
        chess:null,
        chess2:null,
        fen:"",
        turn:"w",
        castleAllows:[true,true,true,true],
        step:0,
        solution:[],
        wasChange:false,
        pgn:'',
        isRight:false
    }
},
props:{
    puzzle:{
        type:Object
    },
    addPuzzle:{
        type:Function
    },
    updatePuzzle:{
        type:Function
    },
    deletePuzzle:{
        type:Function
    }
},
computed:{
    finalFen() {
        const castle = `${this.castleAllows[0]?'K':''}`+`${this.castleAllows[1]?'Q':''}`+`${this.castleAllows[2]?'k':''}`+`${this.castleAllows[3]?'q':''}`
        return this.fen+" "+this.turn+" "+`${castle==''?'-':castle}`+' -'+' 0'+' 1'
    },
    pgnGood() {
        let str=''
        if(this.turn=="w")
        for(let i=0;i<this.solution.length;i++) {
            str+=`${i%2==0?`${i==0?' ':'\n '}`+(i/2+1)+'.':' '}${this.solution[i]}`
        } else {
            if(this.solution[0])
            str = ` 1..${this.solution[0]}\n`
            for(let i=1;i<this.solution.length;i++) {
            str+=`${i%2==1?`${i==1?' ':'\n '}`+((i+1)/2+1)+'.':' '}${this.solution[i]}`
        }
        }
        return str
    }
},
async mounted() {
this.chess = new chess()
this.chess2 = new chess()
this.chessboard = new Chessboard(this.$refs.chessboard, {
      moveInputMode:MOVE_INPUT_MODE.dragPiece,
      position: "empty",
      sprite: { url: "/images/chessboard-sprite.svg" },
      responsive: true,
      style: {
        cssClass: "blue",
        showCoordinates: true, // show ranks and files
        showBorder: true // display a border around the board
      }
    });
    if(this.puzzle.id==-1) {
        console.log('here')
        this.step=-5
        this.fen = this.chessboard.getPosition()
        return
    } 
    this.fen = this.puzzle.fen.split(' ')[0]
    this.turn = this.puzzle.fen.split(' ')[1]
    this.chessboard.setOrientation(this.turn)
    console.log(this.puzzle.fen.split(' '))
    this.solution = this.puzzle.solution
    // this.chess.load(this.fen)
    await this.chessboard.setPosition(this.fen)
    // this.chessboard.disableMoveInput()
},
methods:{
    async stepOneToTwo() {
        console.log('we are on step 2',this.chess.fen())
        console.log('sdf,',this.chess.fen())
        this.step++
        if(this.wasChange) {
            const isLoaded = this.chess.load(this.finalFen)
            this.solution=[]
            this.pgn=''
            console.log(isLoaded)
        } else {
            for(let i=0; i<this.solution.length;i++) {
                this.chess.undo()
            }
            this.chess.load(this.finalFen)
            await this.chessboard.setPosition(this.chess.fen())
            console.log(this.wasChange,this.solution,this.chess.fen())
        }
        this.chessboard.disableMoveInput()
        let temp=0
        const inputHandler = (event)=>{
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveStart:
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                return true
                case INPUT_EVENT_TYPE.moveDone:
                    console.log(event)
                    const move = {from: event.squareFrom, to: event.squareTo}
                    // if(this.solution[temp].from==move.from)
                    const result = this.chess.move(move)
                    if(result) {
                        event.chessboard.disableMoveInput()
                        this.$nextTick(()=>{
                            event.chessboard.setPosition(this.chess.fen())
                            if(this.solution[temp]==undefined) {
                                console.log('Cintinur history')
                                this.solution = this.chess.history()
                                temp++
                                this.pgn = this.chess.pgn()
                            } 
                            else if(this.solution[temp]!=result.san) {
                                console.log(this.solution , result)
                                console.log('You rewrite the whole solution')
                                this.solution = this.chess.history()
                                temp++
                                this.pgn = this.chess.pgn()

                            }  else {
                                console.log('Follow history')
                                temp++
                                this.pgn = this.chess.pgn()

                            }
                            event.chessboard.enableMoveInput(inputHandler)
                            console.log(this.solution)
                        })
                    } else {
                        console.warn('invalid move')
                        return false
                    }
                // return true, if input is accepted/valid, `false` takes the move back
                return true
                case INPUT_EVENT_TYPE.moveCanceled:
                console.log(`moveCanceled`)
            }
            return true
        }
        this.chessboard.enableMoveInput(inputHandler) 
    },
    async stepTwoToThree() {
        this.isRight=false
        this.step++
        this.chess2.load(this.finalFen)
        await this.chessboard.setPosition(this.chess2.fen())
        this.chessboard.disableMoveInput()
        let temp = 0
        const inputHandler =  (event)=>{
            if(event.type==INPUT_EVENT_TYPE.moveDone) {
                const move = {from: event.squareFrom, to: event.squareTo}
                const result = this.chess2.move(move)
                if(result) {
                    event.chessboard.disableMoveInput()
                    this.$nextTick(()=>{
                        event.chessboard.setPosition(this.chess2.fen())
                        if(result.san==this.solution[temp]){
                        this.chess2.move(this.solution[temp+1])
                         event.chessboard.setPosition(this.chess2.fen())
                        temp=temp+2
                        if(temp>this.solution.length) {
                            this.isRight=true
                          console.log('You solve it')
                        }
                      } else {
                          console.log('Example is failinf')
                        //   alert('Wrong move')
                          this.chess2.undo()
                          event.chessboard.setPosition(this.chess2.fen())
                        // this.afterFailing()
                      }
                    event.chessboard.enableMoveInput(inputHandler)
                    })

                } else {
                    return false
                }
                // if(result) {
                //     event.chessboard.disableMoveInput()
                //     this.$nextTick(()=>{
                //         event.chessboard.setPosition()
                //     })
                // }
            }
            return true
        }
        this.chessboard.enableMoveInput(inputHandler)
    },
    async goTwoToOne() {
        this.wasChange = false
        this.step--
        await this.chessboard.setPosition(this.finalFen)
    },
    async goThreeToTwo() {
        this.step--
        for(let i=0; i<this.solution.length;i++) {
                this.chess.undo()
            }
        await this.chessboard.setPosition(this.chess.fen())
        this.chessboard.disableMoveInput()
        let temp=0
        const inputHandler = (event)=>{
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveStart:
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                return true
                case INPUT_EVENT_TYPE.moveDone:
                    console.log(event)
                    const move = {from: event.squareFrom, to: event.squareTo}
                    // if(this.solution[temp].from==move.from)
                    const result = this.chess.move(move)
                    if(result) {
                        event.chessboard.disableMoveInput()
                        this.$nextTick(()=>{
                            event.chessboard.setPosition(this.chess.fen())
                            if(this.solution[temp]==undefined) {
                                console.log('Cintinur history')
                                this.solution = this.chess.history()
                                temp++
                                this.pgn = this.chess.pgn()
                            } 
                            else if(this.solution[temp]!=result.san) {
                                console.log(this.solution , result)
                                console.log('You rewrite the whole solution')
                                this.solution = this.chess.history()
                                temp++
                                this.pgn = this.chess.pgn()

                            }  else {
                                console.log('Follow history')
                                temp++
                                this.pgn = this.chess.pgn()

                            }
                            event.chessboard.enableMoveInput(inputHandler)
                            console.log(this.solution)
                        })
                    } else {
                        console.warn('invalid move')
                        return false
                    }
                // return true, if input is accepted/valid, `false` takes the move back
                return true
                case INPUT_EVENT_TYPE.moveCanceled:
                console.log(`moveCanceled`)
            }
            return true
        }
        this.chessboard.enableMoveInput(inputHandler) 
    },
    toggleTurn() {
        this.wasChange = true
        if(this.turn=="w") return this.turn="b"
        this.turn="w"
    },
    async setStart() {
        this.wasChange = true
        await this.chessboard.setPosition('start');
        this.fen = this.chessboard.getPosition()
    },
    async setEmpty() {
        this.wasChange = true
        await this.chessboard.setPosition('empty');
        this.fen = this.chessboard.getPosition()
    },
    flipBoard() {
        if(this.chessboard.getOrientation()==COLOR.white) return this.chessboard.setOrientation(COLOR.black)
        this.chessboard.setOrientation(COLOR.white)
    },
    async sentMessage(event){
        if(this.step==1)
        if(this.piece=="") {
            const inputHandler = (event) => {
                        switch (event.type) {
                            case INPUT_EVENT_TYPE.moveStart:
                                console.log(`moveStart: ${event.square}`)
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                                return true
                            case INPUT_EVENT_TYPE.moveDone:
                                console.log(`moveDone: ${event.squareFrom}-${event.squareTo}`)
                                this.$nextTick(()=>{
                                    this.fen = this.chessboard.getPosition()
                                    this.wasChange = true
                                })
                                // return true, if input is accepted/valid, `false` takes the move back
                                return true
                            case INPUT_EVENT_TYPE.moveCanceled:
                                console.log(`moveCanceled`)
                        }
                    }
           this.chessboard.enableMoveInput(inputHandler) 
        } else {
             try {
                this.chessboard.disableMoveInput()
                if(event.which=="1") {
                    const SQUARE_COORDINATES = [
                    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
                    "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
                    "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
                    "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
                    "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
                    "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
                    "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
                    "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"
                ]
                    console.log(event.target.getAttribute("data-index"))
                    const square = SQUARE_COORDINATES[event.target.getAttribute("data-index")]
                    const pieceOnSquare = this.chessboard.getPiece(square)
                    
                    // console.log(this.chessboard.getPiece(square))
                    const isTheSame = pieceOnSquare == this.piece
                    if(isTheSame) {
                    //     if(!pieceOnSquare) {
                    //         console.log('sdfg')
                    //     return;
                    // } 
                    await this.chessboard.setPiece(square,null)
                    this.fen = this.chessboard.getPosition()
                    this.wasChange = true
                    } else {
                        if(this.piece=="trash") {
                            await this.chessboard.setPiece(square,null)
                            this.fen = this.chessboard.getPosition()
                            this.wasChange = true
                            return
                        } 
                        await this.chessboard.setPiece(square,this.piece)
                        this.fen = this.chessboard.getPosition()
                        this.wasChange = true
                    }
                }
            } catch {
                console.log("some error")
            }
        }
    },
    savePuzzle() {
        if(!this.isRight) return
        const puzzle = {
            id:Math.random(),
            fen:this.finalFen,
            solution:this.solution
        }
        if(this.puzzle.id!=-1) {
            this.step=0
            return this.updatePuzzle(this.puzzle.id, 
        {
            fen:this.finalFen,
            solution:this.solution
        })
        } 
        this.addPuzzle(puzzle)
        this.step=0
    }
}
}
</script>

<style lang="scss" scoped>
.chessboard {
    width: 25rem;
    height: 25rem;
    @media (min-width: 1200px) {
        width: 30rem;
        height: 30rem;
    }
}
.btn {
    &--create{
        position: absolute;
        top:50%;
        left: 50%;
        transform:translate(-50%,-50%);
        z-index: 50;
        
    }
}

</style>