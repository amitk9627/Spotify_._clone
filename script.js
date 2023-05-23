console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = document.querySelectorAll('.songItem');

// 
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let songs = [
    {songName: "Bewafa X", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chala Gaya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Humtum", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "pal pal dil", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lakireen", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mere Ghar Ram", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Minna Minna", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mone Rise", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dil ke pass", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Wareya", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Wokh ho jana", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    document.querySelectorAll('.songItemPlay').forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

document.querySelectorAll('.songItemPlay').forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

next.addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    console.log(songIndex);
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

prev.addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex =11
    }
    else{
        songIndex -= 1;
    }
    console.log(songIndex);
     
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
    gif.style.opacity=1;
  
   
})