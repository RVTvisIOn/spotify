console.log("welcome to spotify");
//initialize var
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Salam-e-Ishq",filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Salam",filePath:"songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Ishq",filePath:"songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "dhgdfhzh",filePath:"songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "jzgjnfgjn",filePath:"songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "lyulcjhg",filePath:"songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "jxfjjhxz",filePath:"songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "tzsyt",filePath:"songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "TYhhzhdf",filePath:"songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "nvcnzj",filePath:"songs/10.mp3",coverPath: "covers/10.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex-1].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<1) {
    songIndex = 10;
    }
    else{
    songIndex -= 1;
    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    makeAllPlays();
    songItemPlay[songIndex-1].classList.remove('fa-play-circle');
    songItemPlay[songIndex-1].classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9) {
    songIndex = 1;
    }
    else{
    songIndex += 1;
    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    makeAllPlays();
    songItemPlay[songIndex-1].classList.remove('fa-play-circle');
    songItemPlay[songIndex-1].classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songItemPlay[songIndex-1].classList.remove('fa-play-circle');
        songItemPlay[songIndex-1].classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songItemPlay[songIndex-1].classList.remove('fa-pause-circle');
        songItemPlay[songIndex-1].classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})