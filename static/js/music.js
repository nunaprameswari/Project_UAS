const music = new Audio('./static/songs/Spine.mp3');

const songs = [
    {
        id: '1',
        songName: `Spine Breaker <br>
        <div class="subtitle">Skool Luv Affair Special Addition</div>`,
        poster: "./static/img/spine.jpg",
    },
    {
        id: '2',
        songName: `Danger <br>
        <div class="subtitle">Wake Up</div>`,
        poster: "./static/img/danger.jpg",
    },
    {
        id: '3',
        songName: `Dynamite <br>
        <div class="subtitle">Be</div>`,
        poster: "./static/img/Dynamite.png",
    },
    {
        id: '4',
        songName: `IDOL <br>
        <div class="subtitle">Love Yourself: Answer</div>`,
        poster: "./static/img/idol.jpg",
    },
    {
        id: '5',
        songName: `Louder than bombs <br>
        <div class="subtitle">Map of the Soul: 7</div>`,
        poster: "./static/img/louder than bombs.jpg",
    },
    {
        id: '6',
        songName: `MIC Drop <br>
        <div class="subtitle">Love Yourself: Her</div>`,
        poster: "./static/img/mic drop.jpg",
    },
    {
        id: '7',
        songName: `RUN <br>
        <div class="subtitle">Youth</div>`,
        poster: "./static/img/run.jpg",
    },
    {
        id: '8',
        songName: `Spring Day <br>
        <div class="subtitle">You Never Walk Alone</div>`,
        poster: "./static/img/spring day.jpg",
    },
    {
        id: '9',
        songName: `00:00 (Zero O'Clock) <br>
        <div class="subtitle">Map of the Soul: 7</div>`,
        poster: "./static/img/zero.jpg",
    },
    {
        id: '10',
        songName: `FIRE <br>
        <div class="subtitle">The Most Beatiful Moment In Life: Young Forever</div>`,
        poster: "./static/img/fire.jpg",
    },
    {
        id: '11',
        songName: `Spine Breaker <br> <div class="subtitle">Skool Luv Affair Special Addition</div>`,
        poster: "./static/img/spring day.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let bxplay = document.getElementsByClassName('bx-play')[0];

bxplay.addEventListener('click', () => {
    console.log('hi');
    music.play();
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
    console.log('hi');
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});