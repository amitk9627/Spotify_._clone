console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

// songItems is a array
let songItems = document.querySelectorAll('.songItem');

// prev/next 
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
// click able seekbar 
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//  change the all icon when one song is selected
const makeAllPlays = ()=>{
    document.querySelectorAll('.songItemPlay').forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// select the item  in the form of array querySelectorAll 
document.querySelectorAll('.songItemPlay').forEach((element)=>{

    // clickable icon one by one
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();   // line no 64
        songIndex = parseInt(e.target.id);
        // change the icon of play
        e.target.classList.remove('fa-play-circle');  
        e.target.classList.add('fa-pause-circle');
        // play the song which is selected
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        gif.style.opacity = 1;
        // change the icon of masterplay
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// click the next/prev icon song get changes
next.addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 1
    }
    else{
        songIndex += 1;
    }
    // console.log(songIndex);

    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    gif.style.opacity=1;
})

// click the next/prev icon song get changes
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