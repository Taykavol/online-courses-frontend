export const state = () => ({
  myList:['privet','good'],
    course: [
        {
          id: 0,
          name: "Introduction",
          lessons: [
            { name: "Pawn" },
            { name: "Knight" },
            { name: "Bishop" },
            { name: "Rook" },
            { name: "Queen" }
          ]
        },
        {
          id: 1,
          name: "Opening",
          lessons: [
            { name: "Petrov Defence" },
            { name: "Sicilian Defence" },
            { name: "Queen Gambit" },
            { name: "Benoni System" }
          ]
        }
      ]
  })
  
  export const mutations = {
    updateList({myList}, value) {
        console.log('gp')
        myList = value
    }
  }