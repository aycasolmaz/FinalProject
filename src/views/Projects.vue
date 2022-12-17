<template>
    <main>
        <section class="page-description">
            <h1>Software Development Projects</h1>
            <p>When I first joined Computer Science mid-freshman year, I didn't know where to start from because it was such a broad major. The thing I enjoy most about CS is that it helps me bring out my creativity through different mediums. I was able to do it through game development, app development, and web development. Even though I am a beginner in these topics, I strive to learn everyday. On this page, you will walk through my journey with me!</p>
            <a href="../../images/Solmaz_Resume.docx">Download Resume</a>
        </section>
        <section class="web-dev">
            <h2>Web Dev</h2>
            <div class="first-web-project">
                <h3>Eyeball</h3>
                <p>EyeBall aims to obtain and broadcast game footage for amateur players and basketball clubs. From live games recorded on a commercial off-the-shelf panoramic camera, EyeBall uses computer vision to track the "action" on the court and livestream HQ broadcast quality footage of the game. We strive to provide more power to the players by providing them with the means to use their game and practice footage to build an online profile, connect with scouts and recruiters, generate highlight reels and skill clips, and improve the feedback process. International amateur basketball players don’t have an efficient way to showcase their skills to scouts and recruiters, and especially have trouble connecting with American programs.</p>
                <video controls width="130px" height="120px">
                    <source src="../../images/eyeball.mov" type="video/mp4">
                </video>
            </div>
        </section>
        <section class="app-dev">
            <h2>App Dev</h2>
            <div class="first-app-project">
                <h3>Fit @ Home</h3>
                <p>Fit @ Home provides a ubiquitous amount of workout videos whatever you want, and whenever you want it! With 12 different workout styles, Fit @ Home fulfills an individual's daily fitness and health requirements.</p>
                <video controls width="330px" height="220px">
                    <source src="../../images/bostonhacks.mp4" type="video/mp4">
                </video>
            </div>
        </section>
        <section class="game-dev">
            <h2>Game Dev</h2>
            <div class="first-project">
                <h3>Spaceshooter</h3>
                <p>Interactive spaceshooter game with multiple features and design frames.</p>
                <video controls width="330px" height="220px">
                    <source src="../../images/spaceshooter.mp4" type="video/mp4">
                </video>
            </div>
        </section>
    </main>
</template>
<style>
    .page-description {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
    .page-description h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkslategray;

    }
    .page-description p {
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .first-web-project h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }
    .page-description a {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding: 20px auto;
        text-decoration: none;
        color: #000;
    }
    .page-description a:hover {
        color: #000;
        text-decoration: underline;
    }
    .web-dev {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
    .web-dev h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;

    }
    .first-web-project {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }

    .first-app-project h3 {
        font-size: 1.5rrem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }

    .first-web-project h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }

    .first-project h3 {
        font-size: 1.5rrem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }

    .second-project h3 {
        font-size: 1.5rrem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }

    .first-web-project p {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .first-web-project video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .app-dev {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
    .app-dev h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;

    }
    .first-app-project {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
    .first-app-project p {
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    .game-dev {
        margin: 0 auto;
        width: 80%;
        text-align: center;
    }
    .game-dev h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: darkolivegreen;
    }

</style>
