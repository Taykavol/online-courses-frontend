<template>
  <div class="row">
    <Course-Builder :course='course'></Course-Builder>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import RawDisplayer from "~/components/RawDisplayer";
import CourseBuilder from "~/components/CourseBuilder";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    RawDisplayer,
    CourseBuilder
  },
  computed: {
    myList: {
        get() {
            return this.$store.state.myList
        },
        set(value) {
            this.$store.commit('updateList', value)
        }
    }
},
  data() {
    return {
      course: [
        {
          name: "Introduction",
          lessons: [
            { name: "Pawn" , description:"Hey"},
            { name: "Knight",description:"Hey" },
            { name: "Bishop",description:"Hey" },
            { name: "Rook",description:"Hey" },
            { name: "Queen",description:"Hey" }
          ]
        },
        {
          name: "Opening",
          lessons: [
            { name: "Petrov Defence",description:"Hey" },
            { name: "Sicilian Defence",description:"Hey" },
            { name: "Queen Gambit",description:"Hey" },
            { name: "Benoni System",description:"Hey" }
          ]
        }
      ],
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
