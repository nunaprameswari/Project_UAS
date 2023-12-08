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
        songName: `2 Cool 4 Skool [1st Single]`,
        poster: "./static/img/11.jpg",
    },
    {
        id: '12',
        songName: `O!RUL8,2? (2013)`,
        poster: "./static/img/12.png",
    },
    {
        id: '13',
        songName: `Skool Luv Affair (2014)`,
        poster: "./static/img/13.jpg",
    },
    {
        id: '14',
        songName: `Dark & Wild (2014)`,
        poster: "./static/img/14.jpg",
    },
    {
        id: '15',
        songName: `WAKE UP`,
        poster: "./static/img/15.jpg",
    },
    {
        id: '16',
        songName: `Danger [Japanese]`,
        poster: "./static/img/16.jpg",
    },
    {
        id: '17',
        songName: `In The Mood For Love pt.1 (2015)`,
        poster: "./static/img/17.jpg",
    },
    {
        id: '18',
        songName: `In The Mood For Love pt.2 (2016)`,
        poster: "./static/img/18.jpg",
    },
    {
        id: '19',
        songName: `WINGS (2016)`,
        poster: "./static/img/19.jpg",
    },
    {
        id: '20',
        songName: `Wings, You Never Walk Alone (2017)`,
        poster: "./static/img/20.jpg",
    },
    {
        id: '21',
        songName: `Wings, You Never Walk Alone (2017)`,
        poster: "./static/img/21.jpg",
    },
    {
        id: '22',
        songName: `Face Yourself (2018)`,
        poster: "./static/img/22.jpg",
    },
    {
        id: '23',
        songName: `Love Yourself 轉 Tear (2018)`,
        poster: "./static/img/23.jpg",
    },
    {
        id: '24',
        songName: `Love Yourself 结 Answer (2018)`,
        poster: "./static/img/24.jpg",
    },
    {
        id: '25',
        songName: `Map Of The Soul:PERSONA (2020)`,
        poster: "./static/img/25.jpg",
    },
    {
        id: '26',
        songName: `Map Of The Soul 7 (2020)`,
        poster: "./static/img/26.jpg",
    },
    {
        id: '27',
        songName: `Dynamite (2020)`,
        poster: "./static/img/27.jpg",
    },
    {
        id: '28',
        songName: `BE (2020)`,
        poster: "./static/img/28.png",
    },
    {
        id: '29',
        songName: `BTS, The Best (2021)`,
        poster: "./static/img/29.png",
    },
    {
        id: '30',
        songName: `BUTTER (2021)`,
        poster: "./static/img/30.png",
    },
    {
        id: '31',
        songName: `PROOF (2022)`,
        poster: "./static/img/31.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=> {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
    } else {
        music.paused();
        wave.classList.remove('active1');
    }
})



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