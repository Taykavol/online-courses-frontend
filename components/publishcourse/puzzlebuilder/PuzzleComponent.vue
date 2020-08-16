<template>
  <div class=" flex w-full h-full  ">
            <!-- <puzzle class="  z-auto " :puzzle="puzzle" v-for="(puzzle,index) in puzzles" :key="index"/> -->
    <nav-puzzle-builder class="ignore-elements-lesson" :puzzles="puzzles" :isActiveProp="isActive" :key="isActive" :setPuzzle="setPuzzle" ></nav-puzzle-builder>
    <puzzle-builder :puzzle="puzzleForBuild" :updatePuzzle="updatePuzzle" :addPuzzle="addPuzzle" :deletePuzzle="deletePuzzle" :key="puzzleForBuild.id"    ></puzzle-builder>
  </div>
</template>

<script>
// import Puzzle from "~/components/dashboard/Puzzle.vue"
import PuzzleBuilder from "~/components/publishcourse/puzzlebuilder/PuzzleBuilder.vue"
import NavPuzzleBuilder from "~/components/publishcourse/puzzlebuilder/NavPuzzleBuilder.vue"

export default {

components:{
    // Puzzle,
    PuzzleBuilder,
    NavPuzzleBuilder
},
props:{
  puzzles:{
    type:Array
  },
  saveFunction:{
    type:Function
  }
},
data(){
    return{
        // puzzles:[{
        //       id:0,
        //       fen:"rnbqkbnr/ppppppp1/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
        //       solution:["e4","e5","Nf3"]
        //     },
        //     {
        //       id:1,
        //       fen:"rnbqkbnr/pppppp2/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
        //       solution:["e4","e5","Nf3"]
        //     }],
            puzzleBuild:{id:-1},
            isActive:null
    }
},
mounted(){
console.log('puzzles:',this.puzzles)
},
computed:{
 puzzleForBuild() {
   if(!this.puzzleBuild) {
     console.log('not exists')
     return {id:-1,fen:"good"}
   }
   console.log('exist')
   return this.puzzleBuild
 }
},
methods:{
  setPuzzle(index) {
    if(index==-1) {
      if(this.puzzleBuild)
      this.puzzleBuild={id:-1}
      this.$set(this.puzzleBuild,'id',-1)
      return this.puzzleBuild
    } 
    this.puzzleBuild= this.puzzles[index]
  },
  addPuzzle(puzzle) {
    this.puzzles.push(puzzle)
    this.saveFunction()
  },
  updatePuzzle(id,payload) {
    const index = this.puzzles.findIndex(puzzle => puzzle.id ==id)
    this.$set(this.puzzles[index],'fen', payload.fen)
    this.$set(this.puzzles[index],'solution',payload.solution)
    this.saveFunction()
  },
  deletePuzzle(id) {
    const index = this.puzzles.findIndex(puzzle=>puzzle.id==id)
    const confirmDelete  = confirm('Are you sure want to delete?')
    if(!confirmDelete) return 
    this.puzzles.splice(index,1)
    this.setPuzzle(index-1)
    this.isActive=`puzzle${index-1}`
    this.saveFunction()
  }
}
}
</script>

<style >
@import url("~/assets/css/cm-chessboard");
.page {
    z-index: -20;
}
</style>