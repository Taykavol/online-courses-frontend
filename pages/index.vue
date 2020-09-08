<template>
  <div class="  ">
          

    <modal
      name="registration"
      width="60%"
      height="80%"
      class="   "
    >
      <registration/>
    </modal>
    <div class=" stripe absolute"></div>
    <div class=" mx-auto section__video overflow-hidden ">
      <div class="    ">
        <!-- <nav-home/> -->
        <nav class="  flex h-16   justify-end items-center   z-10  relative">
          <div class=" mr-3">Hey,</div>
          <dropdown v-if="$store.getters.isLoggedIn" class=" z-50 relative mr-5"/>
          <div
          v-if="!$store.getters.isLoggedIn"
            @click="showRegistation"
            class="btn__login flex justify-center items-center "
          >
            Login
          </div>

          <div class=""></div>
        </nav>
        <div class="relative flex mx-auto   ">
          <!-- This is info -->
          <div
            class=" mt-16 ml-4  xl:ml-48 lg: info  flex flex-col justify-center items-center "
          >
            <!-- Title -->
            <div
              class=" info__title tracking-tighter self-start text-gray-300 "
            >
              <span class=" inline-block  text-green-500">Modern</span>
              &
              <span class=" inline-block  text-blue-500">Quality</span>
              <br />
              chess education for you!
            </div>
            <!-- Title 2 -->
            <div class="">
              <div class=" self-start text-3xl text-orange-500">
                New way to learn chess!
              </div>
              <div class=" self-start text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                accusamus delectus obcaecati cumque, incidunt autem nisi unde
                atque amet magnam in dolor error molestias illum officia
                distinctio accusantium saepe deserunt?
              </div>
            </div>
            <!-- Buttons  -->
            <div class=" flex w-full mt-8  justify-start items-center ">
              <div class=" flex items-center ">
                <div
                  class="relative flex justify-center items-center w-10 h-10 bg-orange-400 rounded-full hover:bg-orange-500 cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    class=" text-orange-700  h-6 w-6 svg-inline--fa fa-play fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    ></path>
                  </svg>
                </div>

                <div class=" text-gray-300 text-xl ml-3">
                  Tutorial for student
                </div>
              </div>
              <div class=" flex items-center ml-6 xl:ml-4 ">
                <div
                  class="relative flex justify-center items-center w-10 h-10 bg-orange-400 rounded-full hover:bg-orange-500 cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="play"
                    class=" text-orange-700  h-6 w-6 svg-inline--fa fa-play fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    ></path>
                  </svg>
                </div>

                <div class=" text-gray-300 text-xl ml-3">
                  Tutorial for teacher
                </div>
              </div>
            </div>
          </div>
          <!-- This is tablet -->
          <div class="  tablet  ">
            <div class="-mt-4 relative svgVideo  ">
              <!-- Chessboard -->
              <div
                ref="chessboard"
                class="board chess-board-svg  absolute"
              ></div>
              <!-- Notation -->
              <div class=" absolute  ">
                <div v-if="isVisible" class="message  relative  ">
                  <div class=" absolute svg--message  w-full">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 698.8 597.7"
                      class=" text-red-500 opacity-75"
                      style="enable-background:new 0 0 698.8 597.7;"
                      xml:space="preserve"
                    >
                      <style type="text/css">
                        .st0 {
                          fill: #000000;
                        }
                      </style>
                      <path
                        fill="currentColor"
                        d="M397.6,429.6c2.6-2.3,5.8-3.7,9.6-3.7c0.4,0,0.8,0.1,1.2,0.1c1.3-0.4,2.6-0.7,4.1-0.7c1.9-0.8,3.8-1.3,5.9-1.3
                              h-172c1.1,0,2.1,0.1,3.1,0.3c0.1,0,0.3,0,0.4,0c2.1,0,3.9,0.4,5.6,1.2c0,0,0,0,0,0c0.8,0.1,1.5,0.3,2.2,0.5c0.1,0,0.3,0.1,0.4,0.1
                              c0.6,0.2,1.1,0.4,1.6,0.7c0.2,0.1,0.3,0.2,0.5,0.3c0.5,0.3,1,0.6,1.4,0.9c0.1,0.1,0.3,0.2,0.4,0.3c0.4,0.3,0.7,0.6,1.1,1
                              c6.2,4.3,10.8,11.9,10.5,23.4c-0.1,2.7-0.5,5.3-1.1,7.7c0.1,3.9-0.6,8.1-2.1,12.4c-6.3,17.7-10.8,36.5-17,54.3
                              c-7.5,21.2-16.3,41.1-23,62.9c-0.1,0.4-0.2,0.7-0.4,1c-0.5,2.3-1,4.5-1.4,6.8c13.1-11.3,26.7-22.4,40.6-32.5
                              c4.2-5,8.5-9.9,12.8-14.7c4.8-6.2,10-11.8,15.4-16.8c7.9-10.5,16.2-20.5,25.1-29c0.7-1,1.5-2,2.2-3.1c0.6-1,1.3-1.9,2.1-2.7
                              c18.6-29,38.9-54,64.4-64.7C393,432.1,395.2,430.6,397.6,429.6z"
                      />
                      <path
                        fill="currentColor"
                        d="M653.3,447.1H45.5C20.4,447.1,0,426.7,0,401.6V45.5C0,20.4,20.4,0,45.5,0l607.8,0c25.1,0,45.5,20.4,45.5,45.5
                              v356.1C698.8,426.7,678.4,447.1,653.3,447.1z"
                      />
                    </svg>
                  </div>
                  <div
                    class="currentMove absolute text-5xl font-bold text-blue-900"
                  >
                    {{ currentMove }}
                  </div>
                </div>
              </div>

              <!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 698.8 597.7"
                style="enable-background:new 0 0 698.8 597.7;"
                xml:space="preserve"
               >
                <style type="text/css">
                  .st0 {
                    fill: #2a4365;
                  }
                  .st1 {
                    fill: url(#SVGID_1_);
                  }
                  .st2 {
                    fill: url(#SVGID_2_);
                  }
                  .st3 {
                    fill: url(#SVGID_3_);
                  }
                  .st4 {
                    fill: url(#SVGID_4_);
                  }
                  .st5 {
                    fill: url(#SVGID_5_);
                  }
                  .st6 {
                    fill: url(#SVGID_6_);
                  }
                  .st7 {
                    fill: none;
                    stroke: #6c62ff;
                    stroke-width: 0.74;
                    stroke-miterlimit: 10;
                  }
                  .st8 {
                    fill: url(#SVGID_7_);
                  }
                  .st9 {
                    fill: url(#SVGID_8_);
                  }
                  .st10 {
                    fill: #3f3d56;
                  }
                  .st11 {
                    fill: #ffffff;
                  }
                </style>
                <path
                  class="st0"
                  d="M671.3,518H27.6C12.4,518,0,505.8,0,491.8V101.6C0,85.3,12.4,73,27.6,73h643.6c15.2,0,27.5,12.3,27.5,27.4
                  v390.3C698.8,505.8,686.5,518,671.3,518z"
                />
                <path
                  class="st0"
                  d="M42,81.4h614.6c14.2,0,25.7,11.9,25.7,26.8v372.5c0,14.9-11.4,26.8-25.7,26.8H42c-14.2,0-25.7-11.9-25.7-26.8
                  V108.2C16.3,93.5,27.8,81.4,42,81.4z"
                />
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="346.5246"
                  y1="450.4305"
                  x2="358.2065"
                  y2="-282.2438"
                  gradientTransform="matrix(1 0 0 -1 0 408)"
                >
                  <stop offset="0" style="stop-color:#FFFFFF" />
                  <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
                </linearGradient>
                <path
                  class="st1"
                  d="M44.6,81.4h614.6c14.2,0,25.7,11.9,25.7,26.8v372.5c0,14.9-11.4,26.8-25.7,26.8H44.6
                  c-14.2,0-25.7-11.9-25.7-26.8V108.2C18.9,93.5,30.3,81.4,44.6,81.4z"
                />
                <linearGradient
                  id="SVGID_2_"
                  gradientUnits="userSpaceOnUse"
                  x1="156.229"
                  y1="332.9416"
                  x2="141.5088"
                  y2="35.9634"
                  gradientTransform="matrix(1 0 0 -1 0 408)"
                >
                  <stop offset="0" style="stop-color:#FFFFFF" />
                  <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
                </linearGradient>
                <rect
                  x="59.1"
                  y="115.8"
                  class="st2"
                  width="182.8"
                  height="151"
                />
                <linearGradient
                  id="SVGID_3_"
                  gradientUnits="userSpaceOnUse"
                  x1="227.0906"
                  y1="240.7322"
                  x2="233.9227"
                  y2="240.7322"
                  gradientTransform="matrix(1 0 0 -1 -53.17 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st3"
                  d="M180.6,163.6c0.1,0.9,0.1,1.8-0.1,2.7c-0.4,1.5-1,3.1-1.9,4.2c-1,1.3-2.4,2-4,2c-0.2,0-0.4,0-0.6-0.3
                  c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-2.4-0.2-6,1.2-7.9C176.5,162.2,179.9,160.7,180.6,163.6z"
                />
                <linearGradient
                  id="SVGID_4_"
                  gradientUnits="userSpaceOnUse"
                  x1="174.1713"
                  y1="239.1144"
                  x2="183.3538"
                  y2="239.1144"
                  gradientTransform="matrix(1 0 0 -1 -53.17 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st4"
                  d="M122.8,163.5c-1.1,0.8-1.8,2-1.8,3.4c0,1.4,0.4,2.8,1.2,3.9c0.7,0.9,1.6,1.7,2.6,2.3c1.2,0.9,2.6,1.5,4,1.7
                  c0.4,0,0.9-0.1,1.1-0.4c0.1-0.3,0.2-0.6,0.2-0.9C130.3,169.7,128.5,160.6,122.8,163.5z"
                />
                <linearGradient
                  id="SVGID_5_"
                  gradientUnits="userSpaceOnUse"
                  x1="178.9305"
                  y1="238.308"
                  x2="177.8322"
                  y2="233.3143"
                  gradientTransform="matrix(1 0 0 -1 -53.17 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st5"
                  d="M128,169.9c-1,0.1-1.8-0.3-2.4-1.1c-0.9-1.4-1.2-3.1-2.4-2.3c-1.2,0.8-0.5,3.4,0.6,5s4.5,2.7,5,1.7
                  C129.2,172,128,169.9,128,169.9z"
                />
                <linearGradient
                  id="SVGID_6_"
                  gradientUnits="userSpaceOnUse"
                  x1="1321.4191"
                  y1="239.9236"
                  x2="1320.3336"
                  y2="234.9303"
                  gradientTransform="matrix(-1 0 0 -1 1497.5599 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st6"
                  d="M174,168.2c1,0.1,1.8-0.3,2.3-1.1c1-1.4,1.2-3.1,2.4-2.3s0.5,3.4-0.6,5c-1.1,1.5-4.4,2.7-5,1.7
                  C172.6,170.4,174,168.2,174,168.2z"
                />
                <path
                  class="st7"
                  d="M178.7,507.6h2.2C179.6,510.1,178.7,507.6,178.7,507.6z"
                />
                <path
                  class="st0"
                  d="M81.2,266.7c0,0-2.3-40.2,29.7-57.2s108-2.4,104.1,57.2H81.2z"
                />
                <linearGradient
                  id="SVGID_7_"
                  gradientUnits="userSpaceOnUse"
                  x1="201.5592"
                  y1="209.6237"
                  x2="206.2718"
                  y2="187.8975"
                  gradientTransform="matrix(1 0 0 -1 -53.17 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st8"
                  d="M137.3,181.4v11.8c0,5.6-3.8,10.3-9,11.2l-7.9,1.4c0,0,11.4,26.1,35.4,19.2c24-6.9,25.1-13.9,25.1-13.9l-5.7-2
                  c-4.9-1.8-8.2-6.6-8.2-11.9l-0.1-15.8L137.3,181.4L137.3,181.4z"
                />
                <linearGradient
                  id="SVGID_8_"
                  gradientUnits="userSpaceOnUse"
                  x1="191.0933"
                  y1="275.1155"
                  x2="215.2933"
                  y2="230.3296"
                  gradientTransform="matrix(1 0 0 -1 -53.17 408)"
                >
                  <stop offset="0" style="stop-color:#ECC4D7" />
                  <stop offset="0.42" style="stop-color:#EFD4D1" />
                  <stop offset="1" style="stop-color:#F2EAC9" />
                </linearGradient>
                <path
                  class="st9"
                  d="M126.4,155.9c0,0-0.9,17,8.9,30.9c10.6,15,25.2,17.8,35,0c2.8-5.1,8-32.4,6-41.8
                  C174.2,135.6,139.3,108.7,126.4,155.9z"
                />
                <path
                  class="st10"
                  d="M121.9,142.5c0.7-0.5,1.3-1,1.9-1.8c0.5-1,0.7-2.2,0.7-3.3c0.5-7.6,7.1-13.5,13.8-16.3
                  c12.2-5.2,27.3-2.9,37,6.4c3.5,3.3,6.6,7.6,11.2,9c1,0.1,1.8,0.5,2.6,1.1c1.5,1.5,0.4,4.2-1.2,5.6c-0.4,0.3-0.7,0.6-0.9,1.1
                  c-0.5,1.3,1.1,2.3,2.4,2.8c-1.2,1.7-2.7,3.1-4.3,4.1c0.9,0.1,1.1,1.4,0.7,2.2c-0.5,0.8-1.2,1.3-1.9,1.7c-2.2,1.5-3.2,4.2-4.6,6.6
                  c-1.5,2.4-3.5,4.6-6.1,4.4c1.6-6.2,0.9-12.8-1.9-18.6c-11.9,3.3-24.4-0.6-36.3-4.1c-0.9-0.4-1.8-0.4-2.8,0c-1.6,0.9-1.1,3.3-0.4,5
                  c-1.5,0-2.2,1.9-2.6,3.4c-0.5,2.3-0.7,4.6-0.7,7c0,1.4,1,6.1,0.4,7c-1.2,1.9-3-1.1-4-2.7C121.5,158.6,115.9,147.5,121.9,142.5z"
                />
                <ellipse
                  class="st11"
                  cx="656.8"
                  cy="101.2"
                  rx="11.8"
                  ry="12.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section__courses w-full xl:w-5/6 xl:mx-auto ">
      <div class=" text-4xl font-serif font-bold text-center text-gray-800 ">
        Most popular:
      </div>
      <div class=" ">
        <swiper-course
          :courses="[
            course,
            course1,
            course2,
            course3,
            course3,
            course3,
            course3
          ]"
        >
        </swiper-course>
      </div>
      <div class=" text-4xl font-serif font-bold text-center text-gray-800 ">
        New:
      </div>
      <div class=" ">
        <swiper-course
          :courses="[
            course,
            course1,
            course2,
            course3,
            course3,
            course3,
            course3
          ]"
        >
        </swiper-course>
      </div>
    </div>
  </div>
</template>

<script>
import Registration from "~/components/home/Registration"
import NavHome from "~/components/home/NavHome"
import Dropdown from "~/components/home/Dropdown"
import { Chessboard } from "cm-chessboard";
import SwiperCourse from "~/components/home/SwiperCourse";
import Chess from "chess.js";
// import dsf from ''
export default {
  components: {
    SwiperCourse,Registration,Dropdown,NavHome
  },
  mounted() {
    const chess = new Chess();
    const chessboard = new Chessboard(this.$refs.chessboard, {
      position: "start",
      sprite: { url: "/images/chessboard-sprite.svg" },
      style: {
        cssClass: "blue",
        showCoordinates: false, // show ranks and files
        showBorder: true // display a border around the board
      }
    });
    const makeMove = () => {
      const moves = chess.moves();
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      if (randomMove) this.isVisible = true;
      chess.move(randomMove);
      this.currentMove = randomMove;
      setTimeout(() => {
        chessboard.setPosition(chess.fen());
        this.isVisible = false;
      }, 3000);
    };
    makeMove();
    setInterval(() => {
      makeMove();
    }, 10000);
  },
  computed: {
    isCourseChange() {
      return this.course.length + this.size;
    },
   
  },
  methods: {
    showRegistation() {
      this.$modal.show("registration");
    },
        
  },
  data() {
    return {
      size: 3,
      windowWidth: "",
      currentMove: "e4",
      pageNumber: 0,
      isVisible: false,
      // email:,
      course: {
        id: "0",
        url:
          "https://images.unsplash.com/photo-1529699310859-b163e33e4556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80",
        level: "1600+",
        part: "Opening",
        title: "How to play better sdggd dfg d sd dsf sa s",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj df",
        time: "7:56h",
        score: 0.75,
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course1: {
        id: "1",
        url:
          "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: 2.5,
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course2: {
        id: "2",
        url:
          "https://images.unsplash.com/photo-1594628027306-fdb84a281569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course3: {
        id: "3",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course4: {
        id: "4",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course5: {
        id: "5",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course6: {
        id: "6",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course7: {
        id: "7",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course8: {
        id: "8",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course9: {
        id: "9",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      },
      course10: {
        id: "10",
        url:
          "https://images.unsplash.com/photo-1594823103019-f57ce42aed1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        level: "1600+",
        part: "Openings",
        title: "How to play better",
        desc:
          "sdgfdfgjdsfksdfgbksdfbrtgweporgyuwo eghiouhfdjkhsdbgsdjgbsdjfjsdfgsdfj",
        time: "7:56h",
        score: "5",
        reviews: "4353",
        sale: true,
        instractors: [
          {
            name: "Vadim Moiseenko",
            img:
              "https://images.unsplash.com/photo-1591334770544-a83728c5768b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
        ]
      }
    };
  }
};
</script>
<style>
@import url("~/assets/css/cm-chessboard");
</style>
<style scoped></style>
<style lang="scss" scoped>
.stripe {
  z-index: 0;
  top: 8rem;
  height: 24rem;
  width: 70%;
  background: radial-gradient(
      37.86% 77.79% at 50% 100%,
      rgba(113, 128, 150, 0.25) 0%,
      rgba(113, 128, 150, 0) 100%
    ),
    linear-gradient(180deg, #1a202c 0%, #2d3748 100%),
    linear-gradient(180deg, #0d0f14 0%, rgba(27, 32, 43, 0) 100%), #2f3747;

  @media (max-width: 1083px) {
    width: 100%;
  }
}
.section {
  &__video {
    height: 33rem;
    @media screen and (max-width: 1450px) {
      width: 100%;
      margin: 0;
    }
    //          background: rgb(213,247,255);
    // background: radial-gradient(circle, rgba(213,247,255,1) 0%, rgba(255,255,255,1) 100%);
  }
}
.logo {
  top: 5rem;
  left: 4rem;
}
.cloud {
  height: 15rem;
  left: 0rem;
  top: 0;
}
.span {
  &--students {
    // border-style: groove;
    // border: 5px  outset red;
    border-bottom: 5px solid;
  }
}
.info {
  height: 24rem;
  @media (max-width: 1083px) {
    width: 100%;
  }
  &__title {
    font-family: Montserrat;
    font-size: 3rem;
    font-weight: bold;
    line-height: 3rem;
  }
}
.tablet {
  display: block;
  @media (max-width: 1083px) {
    position: static;
    display: none;
    visibility: hidden;
  }
}
.btn {
  &__login {
    cursor: pointer;
    // text-3xl font-serif
    // font-size: 2rem;
    font-family: sans-serif;
    margin-right: 0rem;
    border: 2px solid #2b6cb0;
    height: 2.5rem;
    border-radius: 5px;
    @apply text-blue-700 px-3 font-serif text-3xl;
    &:hover {
      @apply text-blue-100 bg-blue-700;
    }
  }
  &--student {
    cursor: pointer;
    bottom: 3rem;
    left: 4rem;
    padding: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    border: 2px dashed;
    border-radius: 20%;

    @apply text-gray-600 font-serif;
    transition: all 1s;
    transform: skewX(-20deg);
    &:hover {
      transform: skewX(-20deg) scale(1.1);
      @apply shadow-2xl;
    }
  }
}
.page {
  height: 30rem;
}
.chess-board-svg {
  // z-index: 50;
  height: 20rem;
  width: 20rem;
  top: 8rem;
  right: 4rem;
  // border: 4px solid black;
  // color: black;
  // opacity: 0.3;
}
.svgVideo {
  width: 40rem;
  height: 40rem;
}
.currentMove {
  top: 2.7rem;
  left: 8.5rem;
}
.message {
  height: 10rem;
  width: 10rem;
}

.svg--message {
  left: 6rem;
  top: 2rem;
}
</style>
