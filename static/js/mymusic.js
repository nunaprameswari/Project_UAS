const songs = [
    {
        id: '1',
        songName: `Anpanman <br>
        <div class="subtitle">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/anpanman1.jpg",
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