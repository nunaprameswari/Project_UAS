const songs = [
    {
        id: '1',
        songName: `Anpanman <br>
        <div class="subtitle">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/anpanman1.jpg",
    },
    {
        id: '2',
        songName: `뱁새 (Baepsae) <br>
        <div class="subtitle">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/baepsae1.jpg",
    },
    {
        id: '3',
        songName: `Black Swan <br>
        <div class="subtitle">Map Of The Soul 7 (2020)`,
        poster: "./static/img/black_swan1.jpg",
    },
    {
        id: '4',
        songName: `Danger -Japanese Ver.- <br>
        <div class="subtitle">Danger [Japanese]</div>`,
        poster: "./static/img/danger1.png",
    },
    {
        id: '5',
        songName: `Ddaeng <br>
        <div class="subtitle">DD Ceremony</div>`,
        poster: "./static/img/ddaeng1.jpg",
    },
]




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_sonng')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});