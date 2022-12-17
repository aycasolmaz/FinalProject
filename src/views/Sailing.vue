<template>
    <main>
        <head>
            <title>circa 2007-present sailing</title>
        </head>
        
        <body>
            <h1>Sailing Memories</h1>
            <!-- Add the masonry grid element -->
            <div class="masonry-grid">
                <!-- Add the images to the grid -->
                <img src="../../images/rsvision.JPG" alt="My first race with a team!">
                <img src="../../images/sailing.jpg" alt="Me happy while sailing!">
                <img src="../../images/zehra.JPG" alt="My first student!">
                <video controls width="350px">
                    <source src="../../images/funny-sailing.MP4" type="video/mp4">
                </video>
                <video controls width="350px" height="">
                    <source src="../../images/sailingvid.MP4" type="video/mp4">
                </video>
            </div>
        </body>
    </main>

</template>
<style scoped>
/* Add styles for the masonry grid */
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 10px;
}

/* Add styles for the images in the grid */
.masonry-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.masonry-grid video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>