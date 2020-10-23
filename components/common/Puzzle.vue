<template>
  <div class=" flex flex-col ">
    <!-- <div class="  font-bold">
          From course
        <a href="" class="text-blue-600">"{{puzzle.description}}"</a>
        <div class=" w-full text-center ">{{puzzle.author}}</div>
        
        </div> -->
    <div class=" flex flex-col">
      <div ref="chessboard" class=" z-50  chessboard relative ">
        <div class=" absolute place1 w-64  text-center text-lg  ">
          <div class="">Moiseenko - Elianov</div>
        </div>
        <div class=" absolute place2 w-64  text-center italic  font-light">
          <div class="">Pardubutse, 2020</div>
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
    puzzle: {
      type: Object
    }
    //  description:{
    //      type:String
    //  },
    //  fen:{
    //      type:String
    //  },
    //  solution:{
    //      type:String
    //  }
  },
  data() {
    return {
      chess: null,
      chessboard: null,
      temp: 0
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
        showCoordinates: false, // show ranks and files
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

$height: 20rem;
.chessboard {
  width: calc(#{$height});
  height: $height;
  @media (max-width: 1000px) {
    height: 15rem;
    width: 15rem;
  }
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

// Bug
// @import url("~/assets/css/cm-chessboard");
</style>
