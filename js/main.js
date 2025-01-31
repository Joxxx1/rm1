// 音乐数据
const musicData = [
    {
        title: "Paradise City",
        artist: "Guns N' Roses",
        cover: "images/music1.jpg",
        genre: "硬摇滚 (Hard Rock)",
        releaseDate: "1987",
        duration: "6:46",
        album: "Appetite for Destruction"
    },
    {
        title: "无地自容",
        artist: "黑豹乐队",
        cover: "images/music2.jpg",
        genre: "中国摇滚 (Chinese Rock)",
        releaseDate: "1992",
        duration: "4:51",
        album: "黑豹"
    },
    {
        title: "Nothing Else Matters",
        artist: "Metallica",
        cover: "images/music3.jpg",
        genre: "重金属 (Heavy Metal)",
        releaseDate: "1991",
        duration: "6:28",
        album: "Metallica"
    },
    {
        title: "假行僧",
        artist: "崔健",
        cover: "images/music4.jpg",
        genre: "中国摇滚 (Chinese Rock)",
        releaseDate: "1988",
        duration: "4:42",
        album: "新长征路上的摇滚"
    },
    {
        title: "Numb",
        artist: "Linkin Park",
        cover: "images/music5.jpg",
        genre: "另类摇滚 (Alternative Rock)",
        releaseDate: "2003",
        duration: "3:07",
        album: "Meteora"
    }
];

// 乐队数据
const artistsData = [
    {
        name: "The Doors",
        genre: "迷幻摇滚 (Psychedelic Rock)",
        photo: "images/artist1.jpg",
        description: "美国迷幻摇滚传奇乐队，以其诗意的歌词和独特的音乐风格开创了摇滚音乐的新纪元",
        albums: ["The Doors", "Strange Days", "L.A. Woman"],
        awards: ["摇滚名人堂入选者", "格莱美终身成就奖", "滚石杂志500大专辑多张入选"]
    },
    {
        name: "Guns N' Roses",
        genre: "硬摇滚 (Hard Rock)",
        photo: "images/artist2.jpg",
        description: "美国硬摇滚代表乐队，以其狂野的音乐风格和高能现场表演闻名于世",
        albums: ["Appetite for Destruction", "Use Your Illusion I", "Use Your Illusion II"],
        awards: ["摇滚名人堂入选者", "MTV音乐录影带大奖"]
    },
    {
        name: "Metallica",
        genre: "重金属 (Heavy Metal)",
        photo: "images/artist3.jpg",
        description: "重金属音乐的代表性乐队，影响力横跨四十余年，开创了金属乐新纪元",
        albums: ["Master of Puppets", "Metallica", "Death Magnetic"],
        awards: ["格莱美最佳金属表演", "摇滚名人堂入选者"]
    },
    {
        name: "黑豹乐队",
        genre: "中国摇滚 (Chinese Rock)",
        photo: "images/artist4.jpg",
        description: "中国摇滚音乐的先驱者之一，以其独特的音乐风格影响了几代中国摇滚人",
        albums: ["黑豹", "黑豹 II", "摇滚中国乐势力"],
        awards: ["中国摇滚殿堂级乐队", "华语金曲奖最佳乐队"]
    },
    {
        name: "Sex Pistols",
        genre: "朋克摇滚 (Punk Rock)",
        photo: "images/artist5.jpg",
        description: "英国朋克摇滚的代表乐队，以其叛逆精神和颠覆性的音乐影响了整个朋克文化",
        albums: ["Never Mind the Bollocks", "Here's the Sex Pistols"],
        awards: ["摇滚名人堂入选者", "NME年度最具影响力乐队"]
    },
    {
        name: "Radiohead",
        genre: "另类摇滚 (Alternative Rock)",
        photo: "images/artist6.jpg",
        description: "英国另类摇滚乐队，以其实验性的音乐风格和不断创新的精神影响了一代音乐人",
        albums: ["OK Computer", "Kid A", "In Rainbows"],
        awards: ["英国音乐名人堂入选", "格莱美最佳另类音乐专辑"]
    },
    {
        name: "Nirvana",
        genre: "垃圾摇滚 (Grunge Rock)",
        photo: "images/artist7.jpg",
        description: "美国垃圾摇滚代表乐队，开创了90年代另类摇滚的新纪元",
        albums: ["Nevermind", "In Utero", "MTV Unplugged in New York"],
        awards: ["格莱美最佳另类音乐表演", "摇滚名人堂入选者"]
    },
    {
        name: "The Cure",
        genre: "哥特摇滚 (Gothic Rock)",
        photo: "images/artist8.jpg",
        description: "英国哥特摇滚先驱，以其独特的音乐风格和暗黑浪漫的歌词著称",
        albums: ["Disintegration", "Pornography", "Kiss Me, Kiss Me, Kiss Me"],
        awards: ["英国音乐名人堂入选", "NME年度最佳乐队"]
    },
    {
        name: "Nine Inch Nails",
        genre: "电子摇滚 (Electronic Rock)",
        photo: "images/artist9.jpg",
        description: "美国电子摇滚代表，将工业摇滚与电子音乐完美融合",
        albums: ["The Downward Spiral", "Pretty Hate Machine", "The Fragile"],
        awards: ["格莱美最佳金属表演", "摇滚名人堂入选者"]
    },
    {
        name: "Slipknot",
        genre: "新金属 (Nu Metal)",
        photo: "images/artist10.jpg",
        description: "美国新金属代表乐队，以其极具冲击力的音乐风格和标志性的面具形象闻名于世",
        albums: ["Slipknot", "Iowa", "Vol. 3: (The Subliminal Verses)"],
        awards: ["格莱美最佳金属表演", "Metal Hammer金属音乐大奖", "Kerrang!年度最佳重金属乐队"]
    },
    {
        name: "Killswitch Engage",
        genre: "金属核 (Metalcore)",
        photo: "images/artist11.jpg",
        description: "美国金属核先驱乐队，将重金属与硬核朋克完美结合，影响了整个金属核流派的发展",
        albums: ["Alive or Just Breathing", "The End of Heartache", "As Daylight Dies"],
        awards: ["格莱美最佳金属表演提名", "Metal Hammer金属音乐大奖"]
    },
    {
        name: "Rammstein",
        genre: "工业金属 (Industrial Metal)",
        photo: "images/artist12.jpg",
        description: "德国工业金属代表乐队，以其强劲的工业电子元素和震撼的现场表演闻名于世",
        albums: ["Sehnsucht", "Mutter", "Zeit"],
        awards: ["Echo音乐奖最佳金属乐队", "Metal Hammer金属音乐大奖", "全球唱片销量超过3千万张"]
    },
    {
        name: "Death",
        genre: "死亡金属 (Death Metal)",
        photo: "images/artist13.jpg",
        description: "美国死亡金属开创者，以其技术性的音乐风格和深刻的歌词主题影响了整个极端金属的发展",
        albums: ["Scream Bloody Gore", "Leprosy", "Human"],
        awards: [
            "Metal Hammer金属音乐大奖",
            "多张专辑入选极端金属经典名录",
            "极端金属音乐的里程碑"
        ]
    }
];

// 新闻数据
const newsData = [
    {
        title: "2024全球摇滚音乐节即将开启",
        date: "2024-03-15",
        image: "images/news1.jpg",
        content: "汇集全球顶级摇滚乐队的年度盛事，将于下月在多个城市同步举办。",
        category: "活动",
        author: "摇滚周刊"
    },
    {
        title: "Metallica宣布亚洲巡演",
        date: "2024-03-10",
        image: "images/news2.jpg",
        content: "重金属巨头Metallica确认2024年亚洲巡演日程，中国大陆三站确定。",
        category: "巡演",
        author: "金属音乐报"
    },
    {
        title: "中国摇滚四十年特别纪念展",
        date: "2024-03-05",
        image: "images/news3.jpg",
        content: "纪念中国摇滚发展四十周年，特展将展出珍贵历史影像与文物。",
        category: "展览",
        author: "摇滚中国"
    },
    {
        title: "新生代摇滚乐队集结",
        date: "2024-03-01",
        image: "images/news4.jpg",
        content: "全国高校摇滚乐队大赛启动，发掘新生代摇滚力量。",
        category: "比赛",
        author: "青年音乐"
    }
];

// 添加摇滚名人堂数据
const legendsData = [
    {
        name: "Jim Morrison",
        years: "1943-1971",
        image: "images/legend1.jpg",
        description: "The Doors乐队主唱，诗人，'摇滚蜥蜴王'，其神秘主义风格影响了几代音乐人。",
        achievements: [
            "摇滚名人堂入选者",
            "滚石杂志500大专辑入选",
            "格莱美终身成就奖"
        ]
    },
    {
        name: "Freddie Mercury",
        years: "1946-1991",
        image: "images/legend2.jpg",
        description: "Queen乐队主唱，拥有四个八度的音域，被誉为'摇滚史上最伟大的歌手'。",
        achievements: [
            "英国音乐名人堂入选",
            "格莱美终身成就奖",
            "全球唱片销量超过3亿张"
        ]
    },
    {
        name: "崔健",
        years: "1961-至今",
        image: "images/legend3.jpg",
        description: "中国摇滚教父，开创中国摇滚先河，以音乐反映社会现实的先驱者。",
        achievements: [
            "中国摇滚第一人",
            "亚洲音乐终身成就奖",
            "《一无所有》等经典作品传唱至今"
        ]
    }
];

// 测试广告数据
const testAds = [
    {
        title: "音乐设备广告",
        description: "专业音响设备，优惠促销中",
        image: "images/ad-music-gear.jpg",
        size: "横幅广告 960x90"
    },
    {
        title: "乐器广告",
        description: "电吉他特价销售",
        image: "images/ad-guitar.jpg",
        size: "矩形广告 300x250"
    },
    {
        title: "演出票务",
        description: "摇滚音乐节门票预售",
        image: "images/ad-ticket.jpg",
        size: "竖幅广告 160x600"
    }
];

// 修改音乐卡片展示函数，添加更多信息
function loadMusic() {
    const musicGrid = document.querySelector('.music-grid');
    musicData.forEach((music, index) => {
        const musicCard = document.createElement('div');
        musicCard.className = 'music-card';
        musicCard.innerHTML = `
            <div class="music-cover">
                <img src="${music.cover}" alt="${music.title}">
                <div class="play-button" data-index="${index}">▶</div>
            </div>
            <div class="music-info">
                <h3>${music.title}</h3>
                <p class="artist">${music.artist}</p>
                <p class="genre">${music.genre}</p>
                <p class="duration">${music.duration}</p>
            </div>
        `;
        musicGrid.appendChild(musicCard);
    });

    // 为所有播放按钮添加点击事件
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            player.loadTrack(index);
            player.play();
        });
    });
}

// 修改艺人卡片展示函数，添加更多信息
function loadArtists() {
    const artistsGrid = document.querySelector('.artists-grid');
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `
            <div class="artist-photo">
                <img src="${artist.photo}" alt="${artist.name}">
            </div>
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <p class="genre">${artist.genre.split('(')[0]} <span>(${artist.genre.split('(')[1]}</span></p>
                <p class="description">${artist.description}</p>
                <div class="awards">
                    <h4>主要成就</h4>
                    <ul>
                        ${artist.awards.map(award => `<li>${award}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        artistsGrid.appendChild(artistCard);
    });
}

// 修改新闻卡片展示函数，添加更多信息
function loadNews() {
    const newsGrid = document.querySelector('.news-grid');
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}"
                    loading="lazy"
                    onload="this.style.opacity='1'"
                >
                <span class="category">${news.category}</span>
            </div>
            <div class="news-content">
                <h3>${news.title}</h3>
                <div class="meta-info">
                    <span class="date">${news.date}</span>
                    <span class="author">${news.author}</span>
                </div>
                <p class="excerpt">${news.content}</p>
                <a href="#" class="read-more">阅读更多</a>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// 添加加载名人堂函数
function loadLegends() {
    const legendsGrid = document.querySelector('.legends-grid');
    legendsData.forEach(legend => {
        const legendCard = document.createElement('div');
        legendCard.className = 'legend-card';
        legendCard.innerHTML = `
            <div class="legend-image">
                <img src="${legend.image}" alt="${legend.name}">
            </div>
            <div class="legend-info">
                <h4>${legend.name}</h4>
                <p class="years">${legend.years}</p>
                <p class="description">${legend.description}</p>
                <div class="legend-achievements">
                    <h5>主要成就</h5>
                    <ul class="achievement-list">
                        ${legend.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        legendsGrid.appendChild(legendCard);
    });
}

// 创建一个全局播放器实例
let player;

// 修改页面加载事件
document.addEventListener('DOMContentLoaded', () => {
    // 先初始化播放器
    player = new MusicPlayer();
    
    // 再加载其他内容
    loadMusic();
    loadArtists();
    loadNews();
    // 添加名人堂加载
    loadLegends();

    // 添加访问统计功能
    updateVisitCount();

    // 加载测试广告
    loadTestAds();
});

// 处理联系表单提交
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('消息已发送！');
});

// 在现有代码后添加播放器功能
class MusicPlayer {
    constructor() {
        this.currentTrack = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        this.initializePlayer();
    }

    initializePlayer() {
        // 获取DOM元素
        this.playBtn = document.querySelector('.play-btn');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.progressBar = document.querySelector('.progress-bar');
        this.progress = document.querySelector('.progress');
        this.currentTimeSpan = document.querySelector('.current-time');
        this.durationSpan = document.querySelector('.duration');
        this.volumeSlider = document.querySelector('.volume-slider');
        this.vinylDisk = document.querySelector('.vinyl-disk');
        this.albumCover = document.querySelector('.album-cover');

        // 设置初始曲目
        this.loadTrack(this.currentTrack);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.prevTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        this.progressBar.addEventListener('click', (e) => this.setProgress(e));
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e));
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextTrack());
        this.audio.addEventListener('loadedmetadata', () => {
            this.durationSpan.textContent = this.formatTime(this.audio.duration);
        });
    }

    loadTrack(index) {
        this.currentTrack = index;
        const track = musicData[index];
        
        this.audio.src = `music/${track.title.toLowerCase().replace(/ /g, '_')}.mp3`;
        document.querySelector('.current-song').textContent = track.title;
        document.querySelector('.current-artist').textContent = track.artist;
        this.albumCover.src = track.cover;
        
        this.resetPlayer();
    }

    resetPlayer() {
        this.progress.style.width = '0%';
        this.currentTimeSpan.textContent = '0:00';
        this.audio.load();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.isPlaying = true;
        this.playBtn.textContent = '⏸';
        this.vinylDisk.classList.add('playing');
        this.audio.play();
    }

    pause() {
        this.isPlaying = false;
        this.playBtn.textContent = '▶';
        this.vinylDisk.classList.remove('playing');
        this.audio.pause();
    }

    prevTrack() {
        this.currentTrack--;
        if (this.currentTrack < 0) {
            this.currentTrack = musicData.length - 1;
        }
        this.loadTrack(this.currentTrack);
        if (this.isPlaying) this.play();
    }

    nextTrack() {
        this.currentTrack++;
        if (this.currentTrack >= musicData.length) {
            this.currentTrack = 0;
        }
        this.loadTrack(this.currentTrack);
        if (this.isPlaying) this.play();
    }

    setProgress(e) {
        const width = this.progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;
        this.audio.currentTime = (clickX / width) * duration;
    }

    updateProgress() {
        const duration = this.audio.duration;
        const currentTime = this.audio.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        this.progress.style.width = `${progressPercent}%`;
        
        this.currentTimeSpan.textContent = this.formatTime(currentTime);
        if (!isNaN(duration)) {
            this.durationSpan.textContent = this.formatTime(duration);
        }
    }

    setVolume(e) {
        const volume = e.target.value / 100;
        this.audio.volume = volume;
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// 添加访问统计功能
function updateVisitCount() {
    // 从本地存储获取总访问量
    let totalVisits = localStorage.getItem('totalVisits') || 0;
    totalVisits = parseInt(totalVisits) + 1;
    
    // 更新本地存储
    localStorage.setItem('totalVisits', totalVisits);
    
    // 如果页脚已存在，就更新它
    let statsElement = document.querySelector('.visit-stats');
    if (!statsElement) {
        // 创建统计信息元素
        statsElement = document.createElement('div');
        statsElement.className = 'visit-stats';
        document.querySelector('footer').appendChild(statsElement);
    }
    
    // 更新显示
    statsElement.innerHTML = `访问量：${totalVisits}`;
}

// 加载测试广告
function loadTestAds() {
    document.querySelectorAll('.ad-container').forEach((container, index) => {
        const ad = testAds[index % testAds.length];
        container.innerHTML = `
            <div class="ad-label">广告示例 - ${ad.size}</div>
            <div class="test-ad">
                <img src="${ad.image}" alt="${ad.title}">
                <p>${ad.title}</p>
                <p class="ad-description">${ad.description}</p>
            </div>
        `;
    });
} 