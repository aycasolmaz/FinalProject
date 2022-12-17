<template>
    <main>
        <section class="page-description">
            <h1>Music Projects, Playlists & Videos</h1>
            <p>My favorite hobby is listening, composing, sampling, and just playing around with music. On this page,
                you will encounter my songs, me and friends singing, and my favorite songs at the moment!</p>
        </section>
        <section class="my-songs">
            <h2>My Songs</h2>
            <div class="first-project">
                <h1>Bi An Icin (For A Moment)</h1>
                <p>This is my first song project with my friends. I discovered my passion for music production :)</p>
                <audio controls>
                    <source src="../../images/song.mp3" type="audio/mpeg">
                </audio>
            </div>
            <div class="second-project">
                <h1>new blue rollerblades</h1>
                <p>You know when you just want to cruise and look around, this song is it!</p>
                <audio controls>
                    <source src="../../images/new-blue-rollerblades.mp3" type="audio/mpeg">
                </audio>
            </div>
        </section>
        <section class="current-playlist">
            <h2>Current Playlist</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Link</th>
                </tr>
                <tr>
                    <td>Yo No Soy Celoso</td>
                    <td>Bad Bunny</td>
                    <td><a href="https://open.spotify.com/track/5kVZxyMY1gfdCLiChsfjn1?si=7976582702ae4c7f">Link to
                            song</a></td>
                </tr>
                <tr>
                    <td>CUFF IT</td>
                    <td>Beyonce</td>
                    <td><a href="https://open.spotify.com/track/1xzi1Jcr7mEi9K2RfzLOqS?si=4be3a99aa7854590">Link to
                            song</a></td>
                </tr>
            </table>
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
    color: #7c795d;
    font-family: 'Trocchi', serif;
    font-size: 45px;
    font-weight: normal;
    line-height: 48px;
    margin: 0;
    color: darkslategray;

}

.page-description p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
    font-family: 'Trocchi', serif;

}

.page-description a {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding: 20px auto;
    text-decoration: none;
    color: #000;
    font-family: 'Trocchi', serif;

}

.page-description a:hover {
    color: #000;
    text-decoration: underline;
}

.my-songs {
    margin: 0 auto;
    width: 80%;
    text-align: center;
}

.my-songs h2 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Trocchi', serif;
    margin-bottom: 1rem;
}

.first-project {
    margin: 0 auto;
    width: 80%;
    text-align: center;
    font-weight: 100;
}

.first-project h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-weight: 100;
    font-family: 'Trocchi', serif;
    color: darkolivegreen;

}

.first-project p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    font-family: 'Trocchi', serif;

}

.singing {
    margin: 0 auto;
    width: 80%;
    text-align: center;
}

.singing h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.first-project {
    margin: 0 auto;
    width: 80%;
    text-align: center;
}

.first-project h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.first-project p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.second-project h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-weight: 100;
    font-family: 'Trocchi', serif;
    color: darkolivegreen;
}

.current-playlist {
    margin: 0 auto;
    width: 80%;
    text-align: center;
}

/* Center tables for demo */
table {
    margin: 0 auto;
}

/* Default Table Style */
table {
    color: #333;
    background: white;
    border: 1px solid grey;
    font-size: 12pt;
    border-collapse: collapse;
}

table thead th,
table tfoot th {
    color: #777;
    background: rgba(0, 0, 0, .1);
}

table caption {
    padding: .5em;
}

table th,
table td {
    padding: .5em;
    border: 1px solid lightgrey;
}

/* Zebra Table Style */
[data-table-theme*=zebra] tbody tr:nth-of-type(odd) {
    background: rgba(0, 0, 0, .05);
}

[data-table-theme*=zebra][data-table-theme*=dark] tbody tr:nth-of-type(odd) {
    background: rgba(255, 255, 255, .05);
}

/* Dark Style */
[data-table-theme*=dark] {
    color: #ddd;
    background: #333;
    font-size: 12pt;
    border-collapse: collapse;
}

[data-table-theme*=dark] thead th,
[data-table-theme*=dark] tfoot th {
    color: #aaa;
    background: rgba(0255, 255, 255, .15);
}

[data-table-theme*=dark] caption {
    padding: .5em;
}

[data-table-theme*=dark] th,
[data-table-theme*=dark] td {
    padding: .5em;
    border: 1px solid grey;
}
</style>