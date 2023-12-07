const music = new Audio('./static/songs/Spine.mp3');

const songs = [
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 2,
        songName: 'Danger <br> <div class="subtitle"> Wake Up</div>',
        poster: "img/danger.jpg"
    },
    {
        id: 3,
        songName: 'Dynamite <br> <div class="subtitle"> Be</div>',
        poster: "img/Dynamite.jpg"
    },
    {
        id: 4,
        songName: 'IDOL <br> <div class="subtitle"> Love Yourself: Answer </div>',
        poster: "img/idol.jpg"
    },
    {
        id: 5,
        songName: 'Louder than bombs <br> <div class="subtitle"> Map of the Soul: 7 </div>',
        poster: "img/louder than bombs.jpg"
    },
    {
        id: 6,
        songName: 'MIC Drop <br> <div class="subtitle"> Love Yourself: Her </div>',
        poster: "img/mic drop.jpg"
    },
    {
        id: 7,
        songName: 'RUN <br> <div class="subtitle"> Youth</div>',
        poster: "img/run.jpg"
    },
    {
        id: 8,
        songName: 'Spring Day <br> <div class="subtitle"> You Never Walk Alone</div>',
        poster: "img/spring day.jpg"
    },
    {
        id: 9,
        songName: '00:00 (Zero O`Clock) <br> <div class="subtitle"> Map of the Soul: </div>',
        poster: "img/zero.jpg"
    },
    {
        id: 10,
        songName: 'FIRE <br> <div class="subtitle"> The Most Beatiful Moment In Life: Young Forever </div>',
        poster: "img/fire.jpg"
    }
]

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});