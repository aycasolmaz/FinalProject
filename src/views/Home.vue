<template>
    <main id="Home-page">
        <section class="page-description">
            <h1 aria-label="Hi! I'm a developer">
                Hi! My name is Ayca Bige Solmaz and welcome to my personal website! I'm a&nbsp;<span class="typewriter"></span>
            </h1>
            <h2>I have coded this website to not only show my technical skills but also use this platform to showcase my
                creativity. I hope you enjoy!</h2>
            <p>I'm a senior at Boston University studying Computer Science. I'm from Istanbul, Turkey from this
                beautiful area called Kadikoy. It's on the Asian side and it directly faces the European side. I grew up
                around water and my favorite relaxation method is to take a ferry and come back in the Bosphorus. Click
                the boxes below if you want to learn more about me and what I do!</p>
        </section>

        <div class="navigation">
            <a class="projects" href="/about">
                <div class="box-content">
                    <h3>Software Development Projects</h3>
                    <p>I have experience in HTML, CSS, JavaScript, and Vue.js. I also have experience in Python, Java,
                        and C++. Click to learn more about my projects and education!</p>
                    <img src="../../images/html.png" width="300px" height="200px">
                </div>
            </a>
            <a class="music" href="/music">
                <div class="box-content">
                    <h3>Music</h3>
                    <p>I love making music and my dream is to be a product manager or a software developer at Spotify!
                        Here's a song I made with my friends called 'For a moment (Bi' An Icin)</p>
                    <img src="../../images/friends.JPG" width="300px" height="200px">
                </div>
            </a>
            <a class="sailing" href="/sailing">
                <div class="box-content">
                    <h3>Sailing</h3>
                    <p>My favorite hobby is to sail and I used to sail in the Turkish National Team. I started sailing
                        when I was very young because both of my parents are sailors as well. During summers, I grew up
                        in this tiny village of 30 people and joined a sailing club when I was 7. I started to teach
                        sailing during high school there as well. Here's snippets of me when I was young sailing!</p>
                </div>
            </a>
            <a class="food" href="/food">
                <div class="box-content">
                    <h3>Food</h3>
                    <p>I love to cook and I'm a foodie! I love to try new foods and I'm always looking for new recipes.
                        I'm also a vegetarian and I love to cook vegetarian food. Here's a picture of me cooking!</p>
                    <img width="200" height="150" src="../../images/cooking.jpg" alt="Me cooking at 12 years old.">
                </div>
            </a>
            <a class="art" href="/art">
                <div class="box-content">
                    <h3>Art</h3>
                    <p>I love to draw and paint. I'm not very good at it but I love to do it. I also love to do
                        calligraphy and I'm always looking for new ways to improve my skills. Here's a picture of me
                        drawing!</p>
                    <img width="200" height="150" src="../../images/drawing.jpg" alt="Me drawing at 12 years old.">
                </div>
            </a>
            <a class="next-steps" href="/next-steps">
                <div class="box-content">
                    <h3>Travel List</h3>
                    <p>Here's a list of countries I want to visit. If you have any suggestions, please add new tasks!
                    </p>
                </div>
            </a>
            <a class="turkey" href="/turkey">
                <div class="box-content">
                    <h3>Representing Turkey</h3>
                    <p>Expand your knowledge on Turkish culture and learn about where I'm from :)</p>
                </div>
            </a>
        </div>

    </main>

</template>


<style scoped>
body {
  background: #182028;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

h1 {
  text-align: left;
  font-weight: 700;
  margin: 1rem 0 1rem 2rem;
}

/* Typewriter effect 1 */
@keyframes typing {
  0.0000%, 27.3488% { content: ""; }
  1.1395%, 26.2093% { content: "d"; }
  2.2791%, 25.0698% { content: "de"; }
  3.4186%, 23.9302% { content: "dev"; }
  4.5581%, 22.7907% { content: "deve"; }
  5.6977%, 21.6512% { content: "devel"; }
  6.8372%, 20.5116% { content: "develo"; }
  7.9767%, 19.3721% { content: "develop"; }
  9.1163%, 18.2326% { content: "develope"; }
  10.2558%, 17.0930% { content: "developer"; }

  30.7674%, 51.2791% { content: ""; }
  31.9070%, 50.1395% { content: "s"; }
  33.0465%, 49.0000% { content: "sa"; }
  34.1860%, 47.8605% { content: "sai"; }
  35.3256%, 46.7209% { content: "sail"; }
  36.4651%, 45.5814% { content: "sailo"; }
  37.6047%, 44.4419% { content: "sailor"; }

  54.6977%, 75.2093% { content: ""; }
  55.8372%, 74.0698% { content: "a"; }
  56.9767%, 72.9302% { content: "ar"; }
  58.1163%, 71.7907% { content: "art"; }
  59.2558%, 70.6512% { content: "arti"; }
  60.3953%, 69.5116% { content: "artis"; }
  61.5349%, 68.3721% { content: "artist"; }

  78.6279%, 96.8605% { content: ""; }
  79.7674%, 95.7209% { content: "s"; }
  80.9070%, 94.5814% { content: "st"; }
  82.0465%, 93.4419% { content: "stu"; }
  83.1860%, 92.3023% { content: "stud"; }
  84.3256%, 91.1628% { content: "student"; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typewriter {
  --caret: currentcolor;
}

.typewriter::before {
  content: "";
  animation: typing 13.5s infinite;
}

.typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

.typewriter.thick::after {
  border-right: 1ch solid var(--caret);
}

.typewriter.nocaret::after {
  border-right: 0;
}


@media (prefers-reduced-motion) {
  .typewriter::after {
    animation: none;
  }
  
  @keyframes sequencePopup {
    0%, 100% { content: "developer"; }
    25% { content: "writer"; }
    50% { content: "reader"; }
    75% { content: "human"; }
  }

  .typewriter::before {
    content: "developer";
    animation: sequencePopup 12s linear infinite;
  }
}

/**/


#Home-page {
    background-color: whitesmoke;
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1000px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#Home-page h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-align: center;
    color: darkslategray;
}

#Home-page h2 {
    font-size: 2rem;
    font-weight: 700;
    font-weight: 100;
    margin: 0;
    text-align: center;
}

.page-description {
    text-align: center;
    margin: 25 auto;
    max-width: 1000px;
    padding: 0 20px;
}

.typing {
    color: #f5f5f5;
    background-color: #000;
    padding: 0 5px;
    border-radius: 5px;
}

.navigation a {
    float: inline-end;
    display: flex;
    flex-direction: column;
    width: 400px;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;
    color: #000;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.navigation a:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
</style>