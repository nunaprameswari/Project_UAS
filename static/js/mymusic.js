const music = new Audio('songs/5.mp3');

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
    {
        id: '6',
        songName: `보조개 (Dimple) <br>
        <div class="subtitle">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/dimple1.jpg",
    },
    {
        id: '7',
        songName: `Fire <br>
        <div class="subtitle">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/fire1.jpg",
    },
    {
        id: '8',
        songName: `I NEED U <br>
        <div class="subtitle">In The Mood For Love pt.1 (2015)</div>`,
        poster: "./static/img/i_need_u1.jpg",
    },
    {
        id: '9',
        songName: `I'm Fine <br>
        <div class="subtitle">Love Yourself 结 Answer (2018)</div>`,
        poster: "./static/img/iam_fine.jpg",
    },
    {
        id: '10',
        songName: `Life Goes On <br>
        <div class="subtitle">BE (2020)</div>`,
        poster: "./static/img/life_goes_on1.jpg",
    },
    {
        id: '11',
        songName: `My Universe <br>
        <div class="subtitle">Music of the Spheres</div>`,
        poster: "./static/img/my_univers1.jpeg",
    },
    {
        id: '12',
        songName: `Save Me <br>
        <div class="subtitle">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/save_me1.jpg",
    },
    {
        id: '13',
        songName: `So What <br>
        <div class="subtitle">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/so_what1.jpg",
    },
    {
        id: '14',
        songName: `UGH! <br>
        <div class="subtitle">Map Of The Soul 7 (2020)</div>`,
        poster: "./static/img/ugh1.jpg",
    },
    {
        id: '15',
        songName: `2 Blood Sweat and Tears
        <div class="subtitle">WINGS (2016)</div>`,
        poster: "./static/img/Blood_Sweat_Tears1.jpg",
    },
    {
        id: '16',
        songName: `Boy With Luv (Feat. Halsey)
        <div class="subtitle">Map Of The Soul : PERSONA (2020)</div>`,
        poster: "./static/img/Boy_With_Luv1.jpg",
    },
    {
        id: '17',
        songName: `Butter
        <div class="subtitle">BUTTER (2021)</div>`,
        poster: "./static/img/Butter1.jpg",
    },
    {
        id: '18',
        songName: `DNA
        <div class="subtitle">Loove Yourself 承 Her (2017)</div>`,
        poster: "./static/img/DNA1.jpg",
    },
    {
        id: '19',
        songName: `쩔어 (Dope)
        <div class="subtitle">In The Mood For Love pt.1 (2015)</div>`,
        poster: "./static/img/DOPE1.jpg",
    },
    {
        id: '20',
        songName: `Dynamite
        <div class="subtitle">Dynamite (2020)</div>`,
        poster: "./static/img/Dynamite1.jpeg",
    },
    {
        id: '21',
        songName: `Fake Love
        <div class="subtitle">Love Yourself 轉 Tear (2018)</div>`,
        poster: "./static/img/FAKE_LOVE1.jpg",
    },
    {
        id: '22',
        songName: `고민보다 Go (Go Go)
        <div class="subtitle">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/Go_Go1.jpg",
    },
    {
        id: '23',
        songName: `Idol
        <div class="subtitle">Love Yourself 结 Answer (2018)</div>`,
        poster: "./static/img/Idol1.jpg",
    },
    {
        id: '24',
        songName: `MIC Drop
        <div class="subtitle">Love Yourself 承 Her (2017)</div>`,
        poster: "./static/img/mic_drop1.jpg",
    },
    {
        id: '25',
        songName: `ON
        <div class="subtitle">Map Of The Soul 7 (2020)</div>`,
        poster: "./static/img/ON1.jpeg",
    },
    {
        id: '26',
        songName: `Permission to Dance
        <div class="subtitle">BUTTER (2021)</div>`,
        poster: "./static/img/Permission_to_dance1.jpeg",
    },
    {
        id: '27',
        songName: `RUN
        <div class="subtitle">In The Mood For Love pt.2 (2016)</div>`,
        poster: "./static/img/run1.jpg",
    },
    {
        id: '28',
        songName: `Yet To Come (The Most Beatiful Moment)
        <div class="subtitle">PROOF (2022)</div>`,
        poster: "./static/img/Yet_To_Come1.png",
    },
    {
        id: '25',
        songName: `ON
        <div class="subtitle">Map Of The Soul 7 (2020)</div>`,
        poster: "./static/img/ON1.jpeg",
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
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