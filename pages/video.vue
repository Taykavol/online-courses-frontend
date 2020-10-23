<template>
  <div class=" flex justify-center">
    <div class="player mt-20">
      <div class=" text-4xl  font-bold text-center ">{{currentLesson.name}}</div>
      <vue-plyr
        ref="plyr"
        :emit="['ended']"
        @ended="goNext(currentLesson)"
        :key="currentLesson.video.vimeoId"
        class=""
      >
        <div
        
          data-plyr-provider="vimeo"
          :data-plyr-embed-id="currentLesson.video.vimeoId"
        ></div>
      </vue-plyr>

    </div>
    <div id="navigation" class="navigation flex flex-col  overflow-y-auto mt-32 ">
      <div class="">
        <div v-for="(item, parentIndex) in curriculum" :key="item.id">
          <div
            :id="'input' + parentIndex"
            :ref="'input' + parentIndex"
            @click="toggleVisible(parentIndex, 'input' + parentIndex)"
            class=" bg-gray-200 text-2xl hover:bg-gray-300 cursor-pointer select-none border-b-2 border-t-2 flex items-center"
          >
            <div
              class="  flex justify-center items-center font-bold text-yellow-500 mr-6 ml-2 "
            >
              {{ parentIndex + 1 }}
            </div>
            <div class="font-serif">{{ item.name }}</div>
          </div>
          <transition name="fade">
            <div v-if="visible[parentIndex]" class=" ml-8 text-xl ">
              <div
                @click="onClick(lesson)"
                v-for="(lesson, index) in item.lessons"
                :key="lesson.id"
                class="  bg-gray-100 cursor-pointer p-1 hover:bg-indigo-100 "
              >
                <div class=" relative z-50 flex ">
                  <!-- {{parentIndex+1}}.{{index+1}}   -->
                  <label  class="flex justify-start items-center ">
                    <div
                      class="bg-white  border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500"
                    >
                      <input @click.stop v-model="isWatching[lesson.order]"  type="checkbox" class="opacity-0 absolute" />
                      <svg
                        class="fill-current hidden w-6 h-6 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                  </label>
                    <div class="select-none ml-2 ">  {{ lesson.name }}</div>
                  
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePlyr from "vue-plyr";
import VueScrollTo from "vue-scrollto";
export default {
  data() {
    return {
      settings: { speed: false },
      visible: [],
      isWatching:[],
      currentLesson: null,
      selectedComponent: "Video-Player",
      curriculum:[
        {
          id:Math.random(),
          name: "Introduction",
          lessons: [
            {id:Math.random(), name: "Pawn", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[
              {id:Math.random(), fen:"rnbqkbnr/ppppppp1/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq", solution:["e4","e5","Nf3"]},
              {id:Math.random(), fen:"rnbqkbnr/ppppppp1/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq", solution:["e4","e5","Nc3"]},
              {id:Math.random(), fen:"rnbqkbnr/ppppppp1/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq", solution:["e4","e5","d3"]},
              ] },
            {id:Math.random(), name: "Knight", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:76979871},puzzles:[] },
            {id:Math.random(), name: "Bishop", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] },
            {id:Math.random(), name: "Rook", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] },
            {id:Math.random(), name: "Queen", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] }
          ]
        },
        {
          id:Math.random(),
          name: "Opening",
          lessons: [
            {id:Math.random(), name: "Petrov Defence", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] },
            {id:Math.random(), name: "Sicilian Defence", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] },
            {id:Math.random(), name: "Queen Gambit", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] },
            {id:Math.random(), name: "Benoni System", description: "Hey", video:{id:Math.random(),duration:0,vimeoId:435280746},puzzles:[] }
          ]
        }
      ],
    };
  },
  created() {
    this.initializeWatching()
    this.initializeVisible();
    this.currentLesson = {
      name: this.curriculum[0].lessons[0].name,
      order: this.curriculum[0].lessons[0].order,
      video: { vimeoId: this.curriculum[0].lessons[0].video.vimeoId }
    };
    // console.log(this.currentLesson==this.curriculum[0].lessons[0])
  },
  mounted() {
    
    setTimeout(() => {
    // this.$refs.plyr.player.fullscreen.enter()
      // this.lesson = 6
      this.$refs.plyr.player.play();
    }, 1000);
  },
  methods: {
    onClick(lesson) {
      this.$set(this.currentLesson,"name", lesson.name)
      this.$set(this.currentLesson,"order", lesson.order)
      this.$set(this.currentLesson.video, "vimeoId", lesson.video.vimeoId);
      setTimeout(() => {
        try {
          this.$refs.plyr.player.play();
        } catch (error) {}
      }, 300);
    },
    goNext(lesson) {
      this.isWatching[lesson.order] = true
      const nextOrder = +lesson.order + 1;
      console.log(nextOrder);
      let less;
      let i = 0;
      while (!less && i < this.curriculum.length) {
        less = this.curriculum[i].lessons.find(lesson => {
          return lesson.order == nextOrder;
        });
        i++;
      }
      if (less) {
        this.$set(this.currentLesson,"name", less.name)
        this.$set(this.currentLesson,"order", less.order)
        this.$set(this.currentLesson.video, "vimeoId", less.video.vimeoId);
        setTimeout(() => {
        try {
          this.$refs.plyr.player.play();
        } catch (error) {}
      }, 300);
      } else {
        // this.$refs.plyr.player.stop();
      }
      
      // console.log(less, this.currentLesson.video.vimeoId);
    },
    initializeVisible() {
      for (let i = 0; i < this.curriculum.length; i++) {
        this.visible[i] = false;
      }
    },
    initializeWatching() {
      let temp=0;
      for (let i = 0; i< this.curriculum.length; i++) {
        for (let j = 0; j< this.curriculum[i].lessons; j++) {
          this.isWatching[temp] = undefined
          temp++
        }
        temp++;
      }
    },
    toggleVisible(index, ref) {
      // this.$refs[ref][0].scrollTop=50
      const elem = document.getElementById(`input${index}`);
      // this.$scrollTo(elem,{container:'navigation'})

      this.$set(this.visible, index, !this.visible[index]);
      const vueScroll = VueScrollTo.scrollTo(elem, {
        container: "#navigation"
      });

      // this.$nextTick(()=>{

      //   elem.scrollIntoView()
      // })
      //  this.visible[index]=!this.visible[index]
      //  console.log(index)
    }
  },
  components: { VuePlyr }
};
</script>

<style lang="scss" scoped>
input:checked + svg {
  	display: block;
  }
.span {
  &--module-access {
    background: #183153;
    border-radius: 20%;
    height: 3.5rem;
    width: 3.5rem;
  }
}
.navigation {
  width: 45%;
  height: 70vh;
}
.player {
  width: 55%;
  margin-left: 5rem;
  margin-right: 2rem;

  border-radius: 10px;
  overflow: hidden;
}
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
