<template>
  <div class=" flex flex-col ">
    <!-- <div class="  font-bold">
          From course
        <a href="" class="text-blue-600">"{{puzzle.description}}"</a>
        <div class=" w-full text-center ">{{puzzle.author}}</div>
        
        </div> -->
    <div class=" flex ">
      <div ref="chessboard" class=" z-50  chessboard relative ">
      </div>
      <div class=" flex">
          <div class="w-1/3">
              <img class=" " src="/images/courselist/graphic-designer.svg" alt="">
          </div>
          <div class="  w-2/3 mt-2 relative ">
              <!-- <div style="clip-path: polygon(100% 50%, 0 0, 0 100%);" class=" bg-gray-300 w-10 h-10">
                  
              </div> -->
              <div class=" message  ">
                  dsf
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chessboard,
  MOVE_INPUT_MODE,
  INPUT_EVENT_TYPE,
  COLOR
} from "cm-chessboard";
import Chess from "chess.js";

export default {
  props: {
    puzzles: {
      type: Array,
      default:[{}]
    }
  },
  data() {
    return {
      chess: null,
      chessboard: null,
      temp: 0,
      puzzle:this.puzzles[0]
    };
  },
  mounted() {
    this.chess = new Chess(this.fen);
    this.chessboard = new Chessboard(this.$refs.chessboard, {
      moveInputMode: MOVE_INPUT_MODE.dragPiece,
      position: this.puzzle.fen,
      sprite: { url: "/images/chessboard-sprite.svg" },
      responsive: true,
      style: {
        cssClass: "blue",
        // aspectRatio: 0.9,
        showCoordinates: true, // show ranks and files
        showBorder: true // display a border around the board
      }
    });

    let inputHandler = event => {
      if (event.type == INPUT_EVENT_TYPE.moveDone) {
        const move = { from: event.squareFrom, to: event.squareTo };
        const result = this.chess.move(move);
        console.log(result);
        if (result) {
          event.chessboard.disableMoveInput();
          setTimeout(() => {
            event.chessboard.setPosition(this.chess.fen());
            console.log(this.puzzle.solution[this.temp], result.san);
            if (result.san == this.puzzle.solution[this.temp]) {
              console.log("Good move");
              this.chess.move(this.puzzle.solution[this.temp + 1]);
              event.chessboard.setPosition(this.chess.fen());
              this.temp = this.temp + 2;
              if (this.temp > this.puzzle.solution.length) {
                event.chessboard.disableMoveInput();
                console.log("You solve it");
                return;
              }
            } else {
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
    this.chessboard.enableMoveInput(inputHandler);
  }
};
</script>
<style>
@import url("~/assets/css/cm-chessboard");
</style>
<style lang="scss" scoped>

// $height: 43rem;
// .chessboard {
//   width: calc(#{$height});
//   height: $height;
//   @media (max-width: 1000px) {
//     height: 15rem;
//     width: 15rem;
//   }
// }
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
.message {
  background: #e8e7e6;
  height: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  // padding: 1rem 1rem;
  &::before {
    content: "";
    background: #e8e7e6;
    height: 1rem;
    width: 1rem;
    left: 0rem;
    top: 1rem;
    position: absolute;
    clip-path: polygon(0 50%, 100% 100%, 100% 0);
  }
}

</style>
