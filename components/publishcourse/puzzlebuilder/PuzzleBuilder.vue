<template>
  <div class=" flex bg-gray-300 relative w-full z-20   ">
      <!-- Board -->
      <div :class="[chessboard?chessboard.getOrientation()=='w'?'flex-col':' flex-col-reverse':'','flex items-center justify-center']  ">
          <!-- <div v-show="step!=1" class=" h-12"></div> -->
                <div v-show="step==3" class=" font-serif text-xl font-semibold">Check your solution in action!</div>

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
        <div v-show="step==-5" @click="step=1" class=" btn--create text-2xl bg-gray-800 text-white p-2 px-4 cursor-pointer  ">Create puzzle</div>
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
                <div @click="step=1"  class="items-center justify-center px-8 py-4 leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Edit puzzle</div>
                <div @click="deletePuzzle(puzzle.id)" class="mt-4 inline-flex items-center justify-center px-8 py-4  leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-600 border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500 hover:text-gray-100 cursor-pointer">Delete puzzle</div>
            </div>

            <div v-show="step==1" class=" h-full p-3 flex flex-col justify-center items-center ">
                    <!-- <div class=" ">{{finalFen}}</div> -->
                    <div class=" flex mb-6">
                        <div class="">
                            <svg class="w-6 h-6 text-yellow-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                        </div>
                        <div class=" flex">
                            <div class=" ">
                                 Set position and click  
                            </div>
                            <div class=" bg-blue-800 text-gray-100 p-1 rounded text-xs ml-1 self-center"> Next step</div> 
                        </div>
                    </div>
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
                        <!-- <div class=" flex flex-col justify-center items-center ">
                            <div class="">Orientation</div>
                            <div class="flex ">
                                <div @click="flipBoard" :class=" [chessboard?chessboard.getOrientation()=='w'?'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none':'','inline-block px-2  select-none']" >{{chessboard?chessboard.getOrientation()=="w"?'White':"Black":''}}</div>
                            </div>
                        </div> -->
                        <div class="flex flex-col justify-center items-center ">
                            <div class="">Turn</div>
                            <div class="flex ">
                                <div @click="toggleTurn();flipBoard()" :class=" [turn=='w'?'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-white border-gray-300 text-gray-700 cursor-pointer select-none':'items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none','inline-block px-2  select-none']" >{{turn=="w"?'White':"Black"}}</div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <!-- <div v-show="step==2" class="mt-auto">
            </div> -->
            <div  v-show="step==2||step==3" class="mt-auto select-none flex flex-col justify-center items-center ">
                <div v-show="step==2" class="mb-16 flex flex-col justify-center items-center mx-6">
                    <div class=" mb-2 ">
                        
                        <div v-if="moveCommentTextAreaVisible" class=" ml-1 text-xl">
                            <span style="background-color:#183153; color:#ffd43b" class=" px-3 inline-block  rounded-lg mr-1 font-bold ">1</span> Input message (optional) if area will be empty it's going to be "Find the best move" by default , <br>
                            <span style="background-color:#183153; color:#ffd43b" class=" px-3 inline-block  rounded-lg mr-1 font-bold ">2</span> Then make your move.
                        </div>
                        <div v-else class="ml-1 flex items-center">
                            <div style="background-color:#183153; color:#ffd43b" class=" p-1 rounded mr-2">
                                <svg class="svg-inline--fa fa-chess-knight fa-w-12 w-6 h-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-knight"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                                <!-- <svg  class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg> -->
                            </div>
                            <div class=" mr-1">
                                Make move
                            </div>
                             <span class=" mr-1 text-xl mb-1 font-semibold">or</span> click
                            <div class=" bg-blue-800 text-gray-100 p-1 rounded text-xs ml-1 self-center"> Next step</div>
                        </div>
                    </div>
                    <textarea  v-if="moveCommentTextAreaVisible" class=" outline-none block w-56 rounded-lg h-24 resize-none  p-2   border-gray-400 bg-white" placeholder="Default: Find the best move!" v-show="step==2" type="text" v-model="moveComment" name="" id="">
                    </textarea>
                    <div v-if="moveCommentTextAreaVisible" style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class=" bg-white w-12 h-12 -mt-px"></div>
                </div>
                <div class=""></div>
                <div v-show="step==2" class=" font-serif text-xl font-semibold">Your solution</div>
                <div  class=" flex flex-col items-center ">
                    <div  v-show="step==3&&!isRight" class="block w-56 rounded-lg h-24  p-2   border-gray-400 bg-white ">{{moveComment?moveComment:'Find the best move.'}}</div>
                    <div  v-show="step==3&&!isRight" style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class=" bg-white w-12 h-12 -mt-px -mb-10"></div>
                    <div  v-show="step==3&&isRight" class="block w-56 rounded-lg h-24  p-2   border-gray-400 bg-white ">Nice job! Now is time to save puzzle!</div>
                    <div  v-show="step==3&&isRight" style="clip-path: polygon(100% 0, 0 0, 50% 100%);" class=" bg-white w-12 h-12 -mt-px -mb-10"></div>
                    <img  v-show="step==3" src="/images/courselist/graphic-designer.svg" class=" w-40 h-40" alt="">
                </div>
                <div v-show="step==2" class=" w-24 z-20 whitespace-pre text-2xl ">{{pgnGood}} </div>
            </div>
            <div v-if="step==1" class=" mt-auto self-stretch ">
            <div class="  flex justify-center mb-2">
                Step 
                <div style="background-color:#183153; color:#ffd43b" class=" px-3  rounded-lg mx-1 font-bold ">
                    {{step}}/<span class=" text-red-500">3</span> 
                </div> 
            </div>
            <div @click="stepOneToTwo" class=" mb-1 mx-5 items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center">Next step</div>
            </div>
            <div v-if="step==2" class=" mt-auto self-stretch   ">
                <div class=" flex justify-center mb-2">
                    Step 
                <div style="background-color:#183153; color:#ffd43b" class=" px-3  rounded-lg mx-1 font-bold ">
                    {{step}}/<span class=" text-red-500">3</span> 
                </div> 
                </div>
                <div v-if="step==2" class=" flex w-full justify-center mb-1">
                    <div   @click="goTwoToOne" class=" w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-900 text-white border-gray-300  cursor-pointer select-none text-center ">Edit the board (step 1) </div>
                    <div @click="moveCommentTextAreaVisible?'':stepTwoToThree()" :class="{'bg-gray-400':moveCommentTextAreaVisible, 'bg-gray-800 text-white':!moveCommentTextAreaVisible}" class=" ml-1 w-full px-4 py-2  rounded-md text-center cursor-pointer">Next step</div>
                </div>
            </div>
            <div v-if="step==3" class=" flex flex-col">
                <!-- <input type="select"> -->
                <div class="">Difficulty of puzzle</div>
                <select class=" outline-none block" v-model="difficulty" >
                    <option  value="">None</option>
                    <option value="EASY">Easy</option>
                    <option value="INTERMIDEATE">Intermideate</option>
                    <option value="HARD">Hard</option>
                </select>
            </div>
            <div v-if="step==3" class=" mt-auto self-stretch flex mb-1">
                <!-- <div class=" text-center">Step {{step}} from 3</div> -->
                <div   @click="goThreeToTwo" class=" w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-red-900 text-white border-gray-300  cursor-pointer select-none text-center ">Go on {{step-1}} step </div>
                <div @click="savePuzzle" :class="!isRight?' w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline text-gray-600 bg-gray-500  border-gray-500 cursor-not-allowed select-none text-center ':'w-full items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-900 text-white border-gray-300  cursor-pointer select-none text-center'">Save puzzle</div>
            </div>
        </div>
  </div>
</template>

<script>
import { Chessboard,MOVE_INPUT_MODE,INPUT_EVENT_TYPE,COLOR } from "~/assets/cm-chessboard";
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
        isRight:false,
        moveComments:[],
        moveComment:'',
        moveCommentTextAreaVisible:true,
        difficulty:""
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
        showBorder: true, // display a border around the board
        // aspectRatio:null
      }
    });
console.log('How are you:',this.chessboard.getPosition())
    if(this.puzzle.id==-1) {
        console.log('Good games!:',this.chessboard.getPosition())
        this.step=1
        this.fen = this.chessboard.getPosition()
        return
    } 
    this.fen = this.puzzle.fen.split(' ')[0]
    this.turn = this.puzzle.fen.split(' ')[1]
    this.chessboard.setOrientation(this.turn)
    this.solution = this.puzzle.solution
    this.moveComments = this.puzzle.moveComments
    this.difficulty = this.puzzle.difficulty
    // this.chess.load(this.fen)
    await this.chessboard.setPosition(this.fen)
    // this.chessboard.disableMoveInput()
},
methods:{
    async stepOneToTwo() {
        this.moveCommentTextAreaVisible = true
        this.step=2
        if(this.wasChange) {
            console.log('loaded position', this.finalFen)
            const isLoaded = this.chess.load(this.finalFen)
            this.moveComments=[]
            this.solution=[]
            this.pgn=''
        } else {
            for(let i=0; i<this.solution.length;i++) {
                this.chess.undo()
            }
            this.chess.load(this.finalFen)
            await this.chessboard.setPosition(this.chess.fen())
        }
        this.chessboard.disableMoveInput()
        let temp=0
        this.moveComment = this.moveComments[temp]
        console.log(this.moveComment)
        const inputHandler = (event)=>{
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveStart:
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                return true
                case INPUT_EVENT_TYPE.moveDone:
                    let move = {from: event.squareFrom, to: event.squareTo}
                    console.log('Move trying',move)
                    // if(this.solution[temp].from==move.from)
                    let result = this.chess.move(move)
                    if(!result) {
                        result = this.chess.move(`${event.squareFrom}-${event.squareTo}`, { sloppy: true })
                        if(result) 
                        {
                            this.chess.undo()
                            const promotion = prompt('What piece would you like to see?')
                            console.log('promotion', promotion)
                            console.log('FenBeforeMove',this.chess.fen())
                            this.chess.move(`${event.squareFrom}-${event.squareTo}=${promotion}`, { sloppy: true })
                            console.log('FenAfterMove',this.chess.fen())

                        }
                    }

                    console.log('Result', result)
                    if(result) {
                        event.chessboard.disableMoveInput()
                        this.$nextTick(()=>{
                            event.chessboard.setPosition(this.chess.fen())
                            if(this.solution[temp]==undefined) {
                                this.solution = this.chess.history()
                                this.moveComments[temp] = this.moveComment
                                this.moveComment=''
                                temp++
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()
                            } 
                            else if(this.solution[temp]!=result.san) {
                                this.solution = this.chess.history()
                                this.moveComments[temp] = this.moveComment
                                this.moveComment=''
                                temp++
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()

                            }  else {
                                temp++
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()

                            }
                            event.chessboard.enableMoveInput(inputHandler)
                        })
                    } else {
                        
                        console.log(result)
                        console.warn('invalid move')
                        return false
                    }
                // return true, if input is accepted/valid, `false` takes the move back
                return true
                case INPUT_EVENT_TYPE.moveCanceled:
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
        this.moveComment=this.moveComments[temp]
        const inputHandler =  (event)=>{
            if(event.type==INPUT_EVENT_TYPE.moveDone) {
                const move = {from: event.squareFrom, to: event.squareTo}
                let result = this.chess2.move(move)
                // Checking for promotional move
                if(!result) {
                        console.log('Promotional move 1')
                    console.log('Before',result,this.chess2.fen())

                    result = this.chess2.move(`${event.squareFrom}-${event.squareTo}`, { sloppy: true })
                    console.log('Resualt',result,this.chess2.fen())
                    if(result) {
                        console.log('Promotional move')
                        this.chess2.undo()
                        const promotion = prompt('What piece you want promote to?')
                        result = this.chess2.move(`${event.squareFrom}-${event.squareTo}=${promotion}`, { sloppy: true })
                    }
                }
                if(result) {
                    event.chessboard.disableMoveInput()
                    this.$nextTick(()=>{
                        event.chessboard.setPosition(this.chess2.fen())
                        if(result.san==this.solution[temp]){
                        this.chess2.move(this.solution[temp+1])
                         event.chessboard.setPosition(this.chess2.fen())
                        temp=temp+2
                        this.moveComment=this.moveComments[temp]
                        if(temp>this.solution.length) {
                            this.isRight=true
                        }
                      } else {
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
        this.moveCommentTextAreaVisible = true
        this.chessboard.disableMoveInput()
        let temp=0
        this.moveComment = this.moveComments[temp]

        const inputHandler = (event)=>{
            switch (event.type) {
                case INPUT_EVENT_TYPE.moveStart:
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                return true
                case INPUT_EVENT_TYPE.moveDone:
                    const move = {from: event.squareFrom, to: event.squareTo}
                    // if(this.solution[temp].from==move.from)
                    let result = this.chess.move(move)
                    if(!result) {
                        result = this.chess.move(`${event.squareFrom}-${event.squareTo}`, { sloppy: true })
                        if(result) 
                        {
                            this.chess.undo()
                            const promotion = prompt('What piece would you like to see?')
                            console.log('promotion', promotion)
                            console.log('FenBeforeMove',this.chess.fen())
                            this.chess.move(`${event.squareFrom}-${event.squareTo}=${promotion}`, { sloppy: true })
                            console.log('FenAfterMove',this.chess.fen())

                        }
                    }
                    if(result) {
                        event.chessboard.disableMoveInput()
                        this.$nextTick(()=>{
                            event.chessboard.setPosition(this.chess.fen())
                            if(this.solution[temp]==undefined) {
                                this.solution = this.chess.history()
                                this.moveComments[temp]=this.moveComment
                                temp++
                                this.moveComment = ''
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()
                            } 
                            else if(this.solution[temp]!=result.san) {
                                this.solution = this.chess.history()
                                this.moveComments[temp]=this.moveComment
                                this.moveComments = this.moveComments.splice(0,temp)
                                temp++
                                this.moveComment = ''
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()

                            }  else {
                                this.moveComments[temp]=this.moveComment
                                temp++
                                this.moveComment = this.moveComments[temp]
                                if(temp%2) this.moveCommentTextAreaVisible = false
                                else this.moveCommentTextAreaVisible = true
                                this.pgn = this.chess.pgn()

                            }
                            event.chessboard.enableMoveInput(inputHandler)
                        })
                    } else {
                        console.warn('invalid move')
                        return false
                    }
                // return true, if input is accepted/valid, `false` takes the move back
                return true
                case INPUT_EVENT_TYPE.moveCanceled:
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
                                // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
                                return true
                            case INPUT_EVENT_TYPE.moveDone:
                                this.$nextTick(()=>{
                                    this.fen = this.chessboard.getPosition()
                                    this.wasChange = true
                                })
                                // return true, if input is accepted/valid, `false` takes the move back
                                return true
                            case INPUT_EVENT_TYPE.moveCanceled:
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
                    const square = SQUARE_COORDINATES[event.target.getAttribute("data-index")]
                    const pieceOnSquare = this.chessboard.getPiece(square)
                    
                    const isTheSame = pieceOnSquare == this.piece
                    if(isTheSame) {
                    //     if(!pieceOnSquare) {
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
            }
        }
    },
    async savePuzzle() {
        if(!this.isRight) return
        
        if(this.puzzle.id!=-1) {
            // Here is update
            this.step=0
            for(let i=0; i<this.solution.length;i++)
            this.chess2.undo()
            await this.chessboard.setPosition(this.chess2.fen())
            return this.updatePuzzle(this.puzzle.id, 
        {
            fen:this.finalFen,
            solution:this.solution,
            moveComments:this.moveComments,
            difficulty:this.difficulty
        })
        } 
        const puzzle = {
            id:Math.random(),
            fen:this.finalFen,
            solution:this.solution,
            moveComments:this.moveComments,
            difficulty:this.difficulty
        }
        this.addPuzzle(puzzle)
        for(let i=0; i<this.solution.length;i++)
            this.chess2.undo()
            await this.chessboard.setPosition(this.chess2.fen())
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