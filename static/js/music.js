const music = new Audio('./static/songs/Spine.mp3');

const songs = [
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker <br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
    },
    {
        id: 1,
        songName: 'Spine Breaker<br> <div class="subtitle"> Skool Luv Affair Special Addition</div>',
        poster: "img/spine.jpg"
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