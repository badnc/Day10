function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Tony Rock",
      title: "Rock Man",
      release_year: 1889,
      formats: {
        1: "RD",
        2: "9T",
        3: "PP"
      },
    }
  };
  return myMusic;
}
console.log(myFunction()[2]);
myFunction()[2];
module.exports = myFunction;
