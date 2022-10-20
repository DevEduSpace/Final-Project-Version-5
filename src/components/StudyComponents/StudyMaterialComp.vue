<!-- Study Page - Study Materials -->
<script>
export default {
  data() {
    return {
      name: "StudyMaterial",
    };
  },
};
</script>
<template>
  <div class="flex-container">
    <!-- Main Container -->
    <div>
      <button id="materialheading">Videos</button>
    </div> <!-- Main Video Container -->
    <div id="videosandquizdiv">
      <div>
        <p id="studyheading">Watch me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.youtube.com/watch?v=9whgkjxoCME&ab_channel=MakeAppswithDanny
" method="get">
          <button id="quizandvideoname">
            Information Systems Management 254
          </button>
          <img src="/src/assets/playbutton.jpg" width="60" height="60" />
        </form>
      </div>
      <div>
        <p id="studyheading">Watch me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.youtube.com/watch?v=9whgkjxoCME&list=RDLV9whgkjxoCME&start_radio=1&rv=9whgkjxoCME&t=0&ab_channel=MakeAppswithDanny
" method="get" target="_blank">
          <button id="quizandvideoname">
            Information Systems Management 354
          </button>
          <img src="/src/assets/playbutton.jpg" width="60" height="60" />
        </form>
      </div>
      <div>
        <p id="studyheading">Watch me to get a Stoint!</p>
        <form id="videoandquizcards"
          action="https://www.youtube.com/watch?v=JGC7aAC-3y8&list=RDLV9whgkjxoCME&index=2&ab_channel=MakeAppswithDanny"
          method="get" target="_blank">
          <button id="quizandvideoname">
            Information Systems Management 344
          </button>
          <img src="/src/assets/playbutton.jpg" width="60" height="60" />
        </form>
      </div>
    </div>
    <div>
      <button id="materialheading">Quizzes</button>
    </div>
    <div id="videosandquizdiv">
      <!-- Main Quiz Container -->
      <div>
        <p id="studyheading">Do me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.pewresearch.org/science/quiz/science-knowledge-quiz/"
          method="get" target="_blank">
          <button id="quizandvideoname">Actuarial Science 112</button>
          <img src="/src/assets/folder.png" width="60" height="60" />
        </form>
      </div>
      <div>
        <p id="studyheading">Do me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.britannica.com/quiz/browse/Science<" method="get"
          target="_blank">
          <button id="quizandvideoname">Data Science 141</button>
          <img src="/src/assets/folder.png" width="60" height="60" />
        </form>
      </div>
      <div>
        <p id="studyheading">Do me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.proprofs.com/quiz-school/topic/science" method="get"
          target="_blank">
          <button id="quizandvideoname">Computer Science 113</button>
          <img src="/src/assets/folder.png" width="60" height="60" />
        </form>
      </div>
      <div>
        <p id="studyheading">Do me to get a Stoint!</p>
        <form id="videoandquizcards" action="https://www.edudose.com/gk/general-science-online-quiz-test/" method="get"
          target="_blank">
          <button id="quizandvideoname">Computer Science 144</button>
          <img src="/src/assets/folder.png" width="60" height="60" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#materialheading {
  background-color: rgb(96, 34, 59);
  color: white;
  text-align: center;
  margin: 5px 5px 5px 5px;
  border: 1px solid black;
  font-size: 26px;
  width: 1300px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  border-radius: 15px;
  opacity: 85%;
  margin: 5px 5px 5px 5px;
  padding: 5px;
  align-items: center;
}

#videoandquizcards {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 5px 5px 5px 5px;
  border-radius: 10px;
  height: 150px;

  padding: 10px;
  align-items: center;
}

#videosandquizdiv {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#quizandvideoname {
  border: transparent;
  background-color: white;
  padding: 20px;
}

#quizandvideoname:hover {
  text-decoration: underline;
  border: transparent;
  background-color: transparent;
}

#studyheading {
  border: 1px solid darkgray;
  background-color: darkgray;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  margin: 5px 5px 5px 5px;
}
</style>