<template>
  <div class=" flex flex-col ">
    <div class=" flex   ">
      <div ref="chessboard" class=" w-3/5  z-50  chessboard relative ">
      </div>
      <div class=" w-2/5  flex bg-white border-r border-t border-b">
          <div class="flex">
            <div class=" flex-none">
                <img class=" w-24  mt-6  ml-2  " :src="`${env}${author.avatar}`" alt="">
            </div>
            <div class=" w-2/3  mt-6 relative    ">
                <div v-for="item in arrayMessages" class="relative  ">
                  <div :class="[item.bg]"  class=" message  mb-2 rounded flex items-center justify-center  ">
                      <div v-html="item.html" class="p-2">
                        
                      </div>
                  </div>
                </div>
            </div>

          </div>
      </div>
    </div>
    <div class="  mt-5  flex items-center justify-center">
      <div @click="setPuzzle(item, index);activePuzzleStatus=index" v-for="(item, index) in puzzles" :key="index" :class="{'bg--active-puzzle':activePuzzleStatus==index,'bg--awesome':activePuzzleStatus!=index}" class="   h-16 w-16 flex items-center justify-center  text-3xl mx-1 cursor-pointer">
        <div v-if="!progressOfPuzzles[index]" style="color:#ffd43b"  class="">
          {{index+1}}
        </div>
        <svg v-else class="w-12 h-12 text-green-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      </div>
        <div @click="watchNextVideo()" style="color:#ffd43b" class="bg--awesome ml-auto h-16 flex justify-center items-center px-2 text-xl ">Next lesson</div>
    </div>
  </div>
</template>

<script>
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR
} from "~/assets/cm-chessboard";
import Chess from "chess.js";

export default {
  props: {
    author:{
      type:Object
    },
    puzzles: {
      type: Array,
      default:[{}]
    },
    solvePuzzle:{
      type:Function
    },
    progressOfPuzzles:{
      type:Array
    },
    watchNextVideo:{
      type:Function
    }
  },
  data() {
    return {
      chess: null,
      chessboard: null,
      temp: 0,
      puzzle:null,
      currentNumberMove:0,
      arrayMessages:[],
      activePuzzleStatus:null,
      env:process.env.s3Url
    };
  },
  // computed: {
  //   heightChessboard() {
  //     console.log('Height',this.$refs.chessboard)
  //     return this.$refs.chessboard
  //   }
  // },
  mounted() {
    // console.log('Puzzles',this.puzzles) 
    // console.log('',this.progressOfPuzzles)
    // console.log(this.puzzle.fen.split(' ')[1])
   console.log(this.author)
    this.chess = new Chess(this.fen);
    this.chessboard = new Chessboard(this.$refs.chessboard, {
      moveInputMode: MOVE_INPUT_MODE.dragPiece,
      position: 'empty',
      sprite: { url: "/images/chessboard-sprite.svg" },
      responsive: true,
      animationDuration: 100,
      style: {
        cssClass: "blue",
        // aspectRatio: 0.9,
        showCoordinates: true, // show ranks and files
        showBorder: true // display a border around the board
      }
    });
    const indexOfFirstPuzzle = this.progressOfPuzzles.findIndex(item=>!item)
    if(indexOfFirstPuzzle==-1) {
      
      this.puzzle = this.puzzles[0]
      this.activePuzzleStatus = 0
    }
    else {
      this.puzzle = this.puzzles[indexOfFirstPuzzle]
      this.activePuzzleStatus=indexOfFirstPuzzle
    }

    this.setPuzzle(this.puzzle)
    
  },
  methods:{
    setPuzzle(puzzle, index) {
      this.temp=0
      this.arrayMessages =[]
      this.puzzle = puzzle
      const whoMove = this.puzzle.fen.split(' ')[1]
          let text
          if(whoMove=='w')
            text=`<div class='flex items-center justify-center'>
            <div class=' w-4 h-4 bg-white rounded mr-2'>

            </div>
            <div class=" text-xl font-medium">
              White to move
            </div>
            </div>`
            else if(whoMove=='b') 
            text=`<div class='flex items-center justify-center'>
            <div class=' w-4 h-4 bg-black rounded mr-2'>

            </div>
            <div class=" text-xl font-medium">
              Black to move
            </div>
            </div>`
          let comment = this.puzzle.moveComments[0]
          if(!comment) comment="Find the best move!"
          if(this.puzzle)
        this.arrayMessages.push({html:`${text}<div class=" text-left mx-2">${comment}</div>`, bg:'bg--message'})
        if(this.arrayMessages.length>6)
          this.arrayMessages.splice(0,1)
        let inputHandler = event => {
        if (event.type == INPUT_EVENT_TYPE.moveDone) {
          const move = { from: event.squareFrom, to: event.squareTo };
          const result = this.chess.move(move);
          if (result) {
            event.chessboard.disableMoveInput();
            setTimeout(() => {
              event.chessboard.setPosition(this.chess.fen());
              console.log(this.puzzle.solution[this.temp])
              if (result.san == this.puzzle.solution[this.temp]) {
                console.log("Good move");
                this.arrayMessages.push({bg:' bg-green-500 text-white',html:"<div class='flex justify-center items-center'><svg class='w-6 h-6 text-yellow-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg><div class=' inline-block  '>Good move!</div></div>"})
                this.chess.move(this.puzzle.solution[this.temp + 1]);
                event.chessboard.setPosition(this.chess.fen());
                this.temp = this.temp + 2;
                // text=`<div class='flex items-center justify-center'>
                // <div class=' w-4 h-4 bg-black rounded mr-2'>

                // </div>
                // <div class=" text-xl font-medium">
                //   Black to move
                // </div>
                // </div>`
                
                if (this.temp > this.puzzle.solution.length) {
                  // Solved
                  event.chessboard.disableMoveInput();
                  this.arrayMessages.push({bg:' bg-green-800 text-white',html:"<div class='flex justify-center items-center'><img class='w-10 h-10 inline-block' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMCAyNGMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCAxMC0xMCAxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHoiIGZpbGw9IiNmYWZhZmEiIGRhdGEtb3JpZ2luYWw9IiNmYWZhZmEiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmNDQzMzYiPjxwYXRoIGQ9Im0xMCAyNGMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCAxMC0xMCAxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHptMC0xOC41Yy00LjY4NyAwLTguNSAzLjgxMy04LjUgOC41czMuODEzIDguNSA4LjUgOC41IDguNS0zLjgxMyA4LjUtOC41LTMuODEzLTguNS04LjUtOC41eiIgZmlsbD0iI2Y0NDMzNiIgZGF0YS1vcmlnaW5hbD0iI2Y0NDMzNiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMCAyMC41Yy0zLjU4NCAwLTYuNS0yLjkxNi02LjUtNi41czIuOTE2LTYuNSA2LjUtNi41IDYuNSAyLjkxNiA2LjUgNi41LTIuOTE2IDYuNS02LjUgNi41em0wLTExLjVjLTIuNzU3IDAtNSAyLjI0My01IDVzMi4yNDMgNSA1IDUgNS0yLjI0MyA1LTUtMi4yNDMtNS01LTV6IiBmaWxsPSIjZjQ0MzM2IiBkYXRhLW9yaWdpbmFsPSIjZjQ0MzM2IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEwIDE3Yy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zIDMgMS4zNDYgMyAzLTEuMzQ2IDMtMyAzem0wLTQuNWMtLjgyNyAwLTEuNS42NzMtMS41IDEuNXMuNjczIDEuNSAxLjUgMS41IDEuNS0uNjczIDEuNS0xLjUtLjY3My0xLjUtMS41LTEuNXoiIGZpbGw9IiNmNDQzMzYiIGRhdGEtb3JpZ2luYWw9IiNmNDQzMzYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAgNGMtNS41MTQgMC0xMCA0LjQ4Ni0xMCAxMCAwIDUuNTE0IDQuNDg2IDEwIDEwIDEwdi0xLjVjLTQuNjg3IDAtOC41LTMuODEzLTguNS04LjVzMy44MTMtOC41IDguNS04LjV6IiBmaWxsPSIjZjQ0MzM2IiBkYXRhLW9yaWdpbmFsPSIjZDQzYTJmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAgNy41Yy0zLjU4NCAwLTYuNSAyLjkxNi02LjUgNi41czIuOTE2IDYuNSA2LjUgNi41di0xLjVjLTIuNzU3IDAtNS0yLjI0My01LTVzMi4yNDMtNSA1LTV6IiBmaWxsPSIjZjQ0MzM2IiBkYXRhLW9yaWdpbmFsPSIjZDQzYTJmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAgMTIuNWMtLjgyNyAwLTEuNS42NzMtMS41IDEuNXMuNjczIDEuNSAxLjUgMS41eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iI2RhZGFkYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEwIDExYy0xLjY1NCAwLTMgMS4zNDYtMyAzczEuMzQ2IDMgMyAzdi0xLjVjLS44MjcgMC0xLjUtLjY3My0xLjUtMS41cy42NzMtMS41IDEuNS0xLjV6IiBmaWxsPSIjZjQ0MzM2IiBkYXRhLW9yaWdpbmFsPSIjZDQzYTJmIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAgOWMtMi43NTcgMC01IDIuMjQzLTUgNXMyLjI0MyA1IDUgNXYtMmMtMS42NTQgMC0zLTEuMzQ2LTMtM3MxLjM0Ni0zIDMtM3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiNkYWRhZGEiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMCA1LjVjLTQuNjg3IDAtOC41IDMuODEzLTguNSA4LjVzMy44MTMgOC41IDguNSA4LjV2LTJjLTMuNTg0IDAtNi41LTIuOTE2LTYuNS02LjVzMi45MTYtNi41IDYuNS02LjV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZGFkYWRhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAgMTQuNzVjLS4xOTIgMC0uMzg0LS4wNzMtLjUzLS4yMi0uMjkzLS4yOTMtLjI5My0uNzY4IDAtMS4wNjFsNy41LTcuNWMuMjkzLS4yOTMuNzY4LS4yOTMgMS4wNjEgMHMuMjkzLjc2OCAwIDEuMDYxbC03LjUgNy41Yy0uMTQ3LjE0Ny0uMzM5LjIyLS41MzEuMjJ6IiBmaWxsPSIjNjA3ZDhiIiBkYXRhLW9yaWdpbmFsPSIjNjA3ZDhiIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAuMjUgN2gtMi41Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtMi41YzAtLjE5OS4wNzktLjM5LjIyLS41M2wzLTNjLjIxNS0uMjE1LjUzOC0uMjc4LjgxNy0uMTYzLjI4LjExNi40NjMuMzkuNDYzLjY5M3YxLjc1aDEuNzVjLjMwMyAwIC41NzcuMTgzLjY5My40NjNzLjA1Mi42MDMtLjE2My44MTdsLTMgM2MtLjE0LjE0MS0uMzMxLjIyLS41My4yMnoiIGZpbGw9IiMyMTk2ZjMiIGRhdGEtb3JpZ2luYWw9IiMyMTk2ZjMiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNyA1Ljk0MWMtLjAxLjAwOS0uMDIuMDE5LS4wMy4wMjlsLTcuNSA3LjVjLS4yOTMuMjkzLS4yOTMuNzY4IDAgMS4wNjFsNy43NS03Ljc1Yy0uMTM2LS4xMzYtLjIyLS4zMjQtLjIyLS41MzF6IiBmaWxsPSIjNTQ2ZDc5IiBkYXRhLW9yaWdpbmFsPSIjNTQ2ZDc5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAuNzUgMGMtLjE5NSAwLS4zODcuMDc2LS41MzEuMjJsLTMgM2MtLjE0LjE0LS4yMTkuMzMxLS4yMTkuNTN2Mi4xOTEuMzA5YzAgLjIwNy4wODQuMzk1LjIyLjUzbDQuMjgtNC4yOHYtMS43NWMwLS4zMDMtLjE4My0uNTc3LS40NjMtLjY5My0uMDkzLS4wMzgtLjE5LS4wNTctLjI4Ny0uMDU3eiIgZmlsbD0iIzFkODNkNCIgZGF0YS1vcmlnaW5hbD0iIzFkODNkNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=' /><div class=' inline-block  '>Amazine, you solve it!</div></div>"})
                  if(this.arrayMessages.length>6)
                    this.arrayMessages.splice(0,1)
                  
                  const indexOfFirstPuzzle = this.progressOfPuzzles.findIndex(item=>!item)
                  // console.log('equals?',data.course.totalPuzzles,indexOfFirstPuzzle)
                    if(!this.progressOfPuzzles[index])
                      this.solvePuzzle(this.puzzle.order)
                  if(indexOfFirstPuzzle==-1) {
                    // setTimeout(()=>{
                    //   this.watchNextVideo()
                    // }, 1000)
                  }
                  else {
                    setTimeout(()=>{
                      if(this.puzzle!=this.puzzles[indexOfFirstPuzzle]) {
                        this.puzzle = this.puzzles[indexOfFirstPuzzle]
                        this.activePuzzleStatus=indexOfFirstPuzzle
                      }
                      else  {
                        this.puzzle = this.puzzles[indexOfFirstPuzzle+1]
                        this.activePuzzleStatus=indexOfFirstPuzzle+1
                      }
                      this.setPuzzle(this.puzzle)
                    },3000) 
                  }
                  console.log("You solve it");
                  return;
                } else {
                  setTimeout(()=>{
                    comment = this.puzzle.moveComments[this.temp]
                    if(!comment) comment="Find the best move!"
                    this.arrayMessages.push({html:`<div class=" text-left mx-2">${comment}</div>`, bg:'bg--message'})
                  }, 1000)
                }
              } else {
                this.arrayMessages.push({bg:' bg-red-300 text-white',html:"<div class='flex justify-center items-center'><img class='w-10 h-10 inline-block' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDc0IDc0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJOdW1iZXJzIj48dGV4dCBmaWxsPSIjZjAwIiBmb250LWZhbWlseT0iQXJpYWxNVCwgQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxLjk5NSAtMjY2LjU0NCkiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjY8dHNwYW4geD0iLTUuMDA1IiB5PSIxMjQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSIyNDgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjI2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSIzNzIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjM2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSI0OTYiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjQ2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSI2MjAiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjU2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSI3NDQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjY2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSI4NjgiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjc2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSI5OTIiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjg2PC90c3Bhbj48dHNwYW4geD0iLTUuMDA1IiB5PSIxMTE2IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij45NjwvdHNwYW4+PHRzcGFuIHg9Ii0xMC4wMTEiIHk9IjEyNDAiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjEwNjwvdHNwYW4+PHRzcGFuIGxldHRlci1zcGFjaW5nPSItLjA3NGVtIiB4PSItOS4zNDMiIHk9IjEzNjQiIHN2Z2pzOmRhdGE9InsmcXVvdDtsZWFkaW5nJnF1b3Q7OiZxdW90OzEuMyZxdW90O30iPjE8L3RzcGFuPjx0c3BhbiB4PSItLjY2OCIgeT0iMTM2NCIgc3ZnanM6ZGF0YT0ieyZxdW90O2xlYWRpbmcmcXVvdDs6JnF1b3Q7MS4zJnF1b3Q7fSI+MTY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIxNDg4IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xMjY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIxNjEyIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xMzY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIxNzM2IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xNDY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIxODYwIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xNTY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIxOTg0IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xNjY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyMTA4IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xNzY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyMjMyIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xODY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyMzU2IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4xOTY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyNDgwIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yMDY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyNjA0IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yMTY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyNzI4IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yMjY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyODUyIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yMzY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIyOTc2IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yNDY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIzMTAwIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yNTY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIzMjI0IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yNjY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIzMzQ4IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yNzY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIzNDcyIiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yODY8L3RzcGFuPjx0c3BhbiB4PSItMTAuMDExIiB5PSIzNTk2IiBzdmdqczpkYXRhPSJ7JnF1b3Q7bGVhZGluZyZxdW90OzomcXVvdDsxLjMmcXVvdDt9Ij4yOTY8L3RzcGFuPjwvdGV4dD48L2c+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iY29sb3Jfc3R5ZWwiIGRhdGEtbmFtZT0iY29sb3Igc3R5ZWwiPjxjaXJjbGUgY3g9IjM3IiBjeT0iMzciIGZpbGw9IiNlZWVmZWUiIHI9IjM0IiBkYXRhLW9yaWdpbmFsPSIjZWVlZmVlIiBzdHlsZT0iIj48L2NpcmNsZT48cGF0aCBkPSJtNDMuMyAzLjU5MmEzNCAzNCAwIDAgMSAtMTYuNiA2NS44MTYgMzQgMzQgMCAxIDAgMTYuNi02NS44MTZ6IiBmaWxsPSIjZGJkOGRkIiBkYXRhLW9yaWdpbmFsPSIjZGJkOGRkIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzLjA4MSAzNyAxMC43OTQgMTAuNzk0LTYuMDgxIDYuMDgxLTEwLjc5NC0xMC43OTQtMTAuNzk0IDEwLjc5NC02LjA4MS02LjA4MSAxMC43OTQtMTAuNzk0LTEwLjc5NC0xMC43OTQgNi4wODEtNi4wODEgMTAuNzk0IDEwLjc5NCAxMC43OTQtMTAuNzk0IDYuMDgxIDYuMDgxeiIgZmlsbD0iI2VmNTI2MSIgZGF0YS1vcmlnaW5hbD0iI2VmNTI2MSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im00Ny43OTQgNTQuMzc1YS41LjUgMCAwIDEgLS4zNTQtLjE0NmwtMTAuNDQtMTAuNDQxLTEwLjQ0IDEwLjQ0MWEuNS41IDAgMCAxIC0uNzA3IDBsLTYuMDgxLTYuMDgxYS41LjUgMCAwIDEgMC0uNzA3bDEwLjQ0LTEwLjQ0MS0xMC40NDEtMTAuNDRhLjUuNSAwIDAgMSAwLS43MDdsNi4wODEtNi4wODFhLjUuNSAwIDAgMSAuNzA3IDBsMTAuNDQxIDEwLjQ0IDEwLjQ0LTEwLjQ0YS41LjUgMCAwIDEgLjcwNyAwbDYuMDgxIDYuMDgxYS41LjUgMCAwIDEgMCAuNzA3bC0xMC40NCAxMC40NCAxMC40NCAxMC40NGEuNS41IDAgMCAxIDAgLjcwN2wtNi4wODEgNi4wODFhLjUuNSAwIDAgMSAtLjM1My4xNDd6bS0xMC43OTQtMTEuNzk0YS41LjUgMCAwIDEgLjM1NC4xNDZsMTAuNDQgMTAuNDQgNS4zNzQtNS4zNzQtMTAuNDQtMTAuNDRhLjUuNSAwIDAgMSAwLS43MDdsMTAuNDQtMTAuNDQtNS4zNzQtNS4zNzQtMTAuNDQgMTAuNDRhLjUuNSAwIDAgMSAtLjcwNyAwbC0xMC40NC0xMC40NC01LjM3NCA1LjM3NCAxMC40NCAxMC40NGEuNS41IDAgMCAxIDAgLjcwN2wtMTAuNDQgMTAuNDQgNS4zNzQgNS4zNzQgMTAuNDQtMTAuNDRhLjUuNSAwIDAgMSAuMzUzLS4xNDZ6IiBmaWxsPSIjMzIzYzZiIiBkYXRhLW9yaWdpbmFsPSIjMzIzYzZiIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3IDcxLjVhMzQuNSAzNC41IDAgMSAxIDM0LjUtMzQuNSAzNC41MzkgMzQuNTM5IDAgMCAxIC0zNC41IDM0LjV6bTAtNjhhMzMuNSAzMy41IDAgMSAwIDMzLjUgMzMuNSAzMy41MzggMzMuNTM4IDAgMCAwIC0zMy41LTMzLjV6IiBmaWxsPSIjMzIzYzZiIiBkYXRhLW9yaWdpbmFsPSIjMzIzYzZiIiBzdHlsZT0iIj48L3BhdGg+PGcgZmlsbD0iI2RiZDhkZCI+PHBhdGggZD0ibTI2LjI2NSAxMC4yMjVjLS4wMTUtLjAzMy0uMDMxLS4wNjYtLjA0OS0uMWExLjU4OCAxLjU4OCAwIDAgMCAtMS45OTUtLjY1NiA2LjczMyA2LjczMyAwIDAgMCAtMS4yODkuNjQzIDEuMjYyIDEuMjYyIDAgMCAwIC0uNDIyIDEuODY0IDEuNTkzIDEuNTkzIDAgMCAwIDIuMDUzLjQ1NSA0LjYyNCA0LjYyNCAwIDAgMSAxLjAwOS0uNSAxLjI3MiAxLjI3MiAwIDAgMCAuNjkzLTEuNzA2eiIgZmlsbD0iI2RiZDhkZCIgZGF0YS1vcmlnaW5hbD0iI2RiZDhkZCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yMC44IDEzLjgzNGExLjM4MyAxLjM4MyAwIDAgMCAtLjI2NS0uNDMzIDEuNTkgMS41OSAwIDAgMCAtMi4wODgtLjIzNiAyNy4yNiAyNy4yNiAwIDAgMCAtMTAuMDQ3IDE0LjY5NiAxLjQxOCAxLjQxOCAwIDAgMCAxLjE2IDEuNjM5IDEuNDMzIDEuNDMzIDAgMCAwIDEuNzQ4LTEgMjUuMTA1IDI1LjEwNSAwIDAgMSA5LjA0NC0xMy4xOTQgMS4yNTUgMS4yNTUgMCAwIDAgLjQ0OC0xLjQ3MnoiIGZpbGw9IiNkYmQ4ZGQiIGRhdGEtb3JpZ2luYWw9IiNkYmQ4ZGQiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4=' /><div class=' inline-block ml-1  '>Missing, try again!</div></div>"})
                if(this.arrayMessages.length>6)
                    this.arrayMessages.splice(0,1)
                setTimeout(() => {
                  this.chess.undo();
                  event.chessboard.setPosition(this.chess.fen());
                }, 1000);
              }
              event.chessboard.enableMoveInput(inputHandler, this.orientation);
            });
          } else {
            console.log("invalid move");
          }
          return result;
        } else return true;
      };
      this.chess.load(this.puzzle.fen)
      this.chessboard.setPosition(this.puzzle.fen)
      this.chessboard.enableMoveInput(inputHandler);
    }
  }
};
</script>
<style>
@import url("~/assets/css/cm-chessboard");
</style>
<style lang="scss" scoped>

// $height: 43rem;
.chessboard {
  // min-width: 20rem;
  max-width: 45rem;
  // width: calc(#{$height});
  // height: $height;
  // @media (max-width: 1000px) {
  //   height: 15rem;
  //   width: 15rem;
  // }
}
.place1 {
  top: -1.7rem;
  left: 50%;
  transform: translateX(-50%);
}
.place2 {
  bottom:-1.7rem;
  left: 50%;
  transform: translateX(-50%);
  
}
.bg--message {
  background: #e8e7e6;
}
.message {
  margin-left: 1rem;
  margin-right: .5rem;
  // padding: 1rem 1rem;
  &::before {
    content: "";
    background: inherit;
    height: 1rem;
    width: 1rem;
    left: .1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    position: absolute;
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
  }
}
.bg--awesome {
  background-color:#183153;
  &:hover {
    background-color:#4b4b4b;
  }
}
.bg--active-puzzle {
  background-color:#4b1d2a;
}

</style>
