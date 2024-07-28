let slideIndex = 1;
    showSlides(slideIndex); 

    
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    window.scrollTo(0, 0);  
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

const image = document.getElementById('cover'),
            title = document.getElementById('music-title'),
            artist = document.getElementById('music-artist'),
            currentTimeEl = document.getElementById('current-time'),
            durationEl = document.getElementById('duration'),
            progress = document.getElementById('progress'),
            playerProgress = document.getElementById('player-progress'),
            prevBtn = document.getElementById('prev'),
            nextBtn = document.getElementById('next'),
            playBtn = document.getElementById('play'),
            background = document.getElementById('b-img');

        const music = new Audio();

        const songs = [
            {
                path: 'music/Гоп-ца-ца[vesilni-pisni.com].mp3',
                displayName: 'Гоп-ца-ца',
                cover: 'img/oi-hto-pye.jpg',
            },
            {
                path: 'music/Порох старої гітари[vesilni-pisni.com].mp3',
                displayName: 'Порох старої гітар',
                cover: 'img/2.jpg',
            },
            {
                path: 'music/Танці до упаду[vesilni-pisni.com].mp3',
                displayName: 'Танці до упаду',
                cover: 'img/3.jpg',
            },
            {
                path: 'music/Ой, хто п’є, тому наливайте[vesilni-pisni.com].mp3',
                displayName: 'Ой, хто п’є, тому наливайте',
                cover: 'img/4.jpg',
            },
            {
                path: 'music/Іра, Ірина, Іруся[vesilni-pisni.com].mp3',
                displayName: 'Іра, Ірина, Іруся',
                cover: 'img/6.jpg',
            },
            {
                path: 'music/Баба молода[vesilni-pisni.com].mp3',
                displayName: 'Баба молода',
                cover: 'img/5.jpg',
            },
            {
                path: 'music/А Під Пиво Рибка[vesilni-pisni.com] (1).mp3',
                displayName: 'А Під Пиво Рибка',
                cover: 'img/7.jpeg',
            },
            {
                path: 'music/А на нашій вулиці[vesilni-pisni.com].mp3',
                displayName: 'А на нашій вулиці',
                cover: 'img/maxresdefault242-768x432.jpeg',
            },
            
            {
                path: 'music/Самогоночка[vesilni-pisni.com].mp3',
                displayName: 'Самогоночка',
                cover: 'img/9.jpg',
            },
            {
                path: 'music/Перелаз,мій перелаз[vesilni-pisni.com].mp3',
                displayName: 'Перелаз,мій перелаз',
                cover: 'img/8.jpeg',
            },
            {
                path: 'music/Річка річечка[vesilni-pisni.com].mp3',
                displayName: 'Річка річечка',
                cover: 'img/10.jpeg',
            },
            {
                path: 'music/Полька Нині, Нині, Нині…[vesilni-pisni.com].mp3',
                displayName: 'Полька Нині, Нині, Нині…',
                cover: 'img/11.jpeg',
            },
            {
                path: 'music/Сиджу я край віконечка[vesilni-pisni.com].mp3',
                displayName: 'Сиджу я край віконечка',
                cover: 'img/image-15555-768x482.jpeg',
            },
            {
                path: 'music/А я люблю сало[vesilni-pisni.com].mp3',
                displayName: 'А я люблю сало',
                cover: 'img/12.jpeg',
            },
            {
                path: 'music/А Кума хоче Кума[vesilni-pisni.com].mp3',
                displayName: 'А Кума хоче Кума',
                cover: 'img/13.jpeg',
            },
            {
                path: 'music/Оксана[vesilni-pisni.com].mp3',
                displayName: 'Оксанао',
                cover: 'img/14.jpeg',
            },
            {
                path: 'music/Ой, Марічка чичері[vesilni-pisni.com].mp3',
                displayName: 'Ой, Марічка чичері',
                cover: 'img/15.jpeg',
            },
            {
                path: 'music/Зелене листя білі каштани[vesilni-pisni.com].mp3',
                displayName: 'Зелене листя білі каштани',
                cover: 'img/16.jpeg',
            },
            {
                path: 'music/Кохана теща[vesilni-pisni.com].mp3',
                displayName: 'Кохана тещо',
                cover: 'img/17.jpeg',
            },
            {
                path: 'music/Червона ружа[vesilni-pisni.com].mp3',
                displayName: 'Червона ружа',
                cover: 'img/18.webp',
            },
            {
                path: 'music/Є у мене тесть[vesilni-pisni.com] (1).mp3',
                displayName: 'Є у мене тесть',
                cover: 'img/19.jpeg',
            },
            {
                path: 'music/Зозуленька[vesilni-pisni.com].mp3',
                displayName: 'Зозуленька',
                cover: 'img/20.jpeg',
            },
            {
                path: 'music/Кухарка[vesilni-pisni.com].mp3',
                displayName: 'Кухарка',
                cover: 'img/21.jpeg',
            },
            {
                path: 'music/Пиво йому не поможе весільна пісня[vesilni-pisni.com].mp3',
                displayName: 'Пиво йому не поможе',
                cover: 'img/22.jpeg',
            },
            {
                path: 'music/Дякую тобі мамо[vesilni-pisni.com].mp3',
                displayName: 'Дякую тобі мамо',
                cover: 'img/23.jpeg',
            },
            {
                path: 'music/Ой Смереко – весільна пісня[vesilni-pisni.com].mp3',
                displayName: 'Ой Смереко',
                cover: 'img/24.jpeg',
            },
            
            
            
            // Додайте ще 37 пісень...
        ];

        let currentSongIndex = null;
        let isPlaying = false;

        function togglePlay() {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        }

        function playMusic() {
            isPlaying = true;
            // Change play button icon
            playBtn.classList.replace('fa-play', 'fa-pause');
            // Set button hover title
            playBtn.setAttribute('title', 'Pause');
            music.play();
        }

        function pauseMusic() {
            isPlaying = false;
            // Change pause button icon
            playBtn.classList.replace('fa-pause', 'fa-play');
            // Set button hover title
            playBtn.setAttribute('title', 'Play');
            music.pause();
        }

        function loadMusic(song) {
            music.src = song.path;
            title.textContent = song.displayName;
            artist.textContent = song.artist;
            image.src = song.cover;
            background.src = song.cover;
        }

        function changeMusic(direction) {
            currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
            loadMusic(songs[currentSongIndex]);
            playMusic();
        }

        function updateProgressBar() {
            const { duration, currentTime } = music;
            const progressPercent = (currentTime / duration) * 100;
            progress.style.width = `${progressPercent}%`;

            const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
            durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
            currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
        }

        function setProgressBar(e) {
            const width = playerProgress.clientWidth;
            const clickX = e.offsetX;
            music.currentTime = (clickX / width) * music.duration;
        }

        function handlePlayButtonClick(e) {
            const songIndex = e.target.getAttribute('data-song-index');
            if (currentSongIndex !== null && currentSongIndex != songIndex) {
                pauseMusic();
            }
            currentSongIndex = songIndex;
            loadMusic(songs[currentSongIndex]);
            playMusic();
            document.getElementById("music-container").style.display = "block";
        }

        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', handlePlayButtonClick);
        });

        prevBtn.addEventListener('click', () => changeMusic(-1));
        nextBtn.addEventListener('click', () => changeMusic(1));
        music.addEventListener('ended', () => changeMusic(1));
        music.addEventListener('timeupdate', updateProgressBar);
        playerProgress.addEventListener('click', setProgressBar);