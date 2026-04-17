// 星空背景產生腳本 (來自 home)
document.addEventListener('DOMContentLoaded', () => {
    const starBg = document.getElementById('star-bg');
    if (starBg) {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 2 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = (Math.random() * 100) + '%';
            star.style.top = (Math.random() * 100) + '%';
            star.style.animationDuration = (Math.random() * 3 + 1.5) + 's';
            star.style.animationDelay = (Math.random() * 5) + 's';
            star.style.opacity = Math.random();
            starBg.appendChild(star);
        }
    }
});

// 此處為您的播放清單 / CD 配置，您可以自行更換 imageUrl 和 spotifyUrl
const cdConfig = [
    {
        group: "DRIP",
        title: "CLIK CLAK",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/0Rq9lIn9fl4wiW9Tg72ifr?si=9c6d021e0e2b4c61"
    },
    {
        group: "DRIP",
        title: "DRIP",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/198zDKzyktXRG1PGpidY9h?si=41e45c1b1211404a"
    },
    {
        group: "DRIP",
        title: "Love, Maybe",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/5Mysty4YeFTdu2Xm7O2yHM?si=ca7e3e22048444c9"
    },
    {
        group: "DRIP",
        title: "Really Like You",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/3entdIWiOuQfcXIkJEABsV?si=202dd8e63c0c4223"
    },
    {
        group: "DRIP",
        title: "BILLIONAIRE",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/0QICKhP44TRnb4EurQ3tN9?si=47875691ed7a468e"
    },
    {
        group: "DRIP",
        title: "Love In My Heart",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/7uGZIgNGAM4y7cyLj9SPlw?si=68efcbe450d342e3"
    },
    {
        group: "DRIP",
        title: "Woke Up In Tokyo (RUKA & ASA)",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/2prYdDrdqzyZgk2PyXps1F?si=1dac1d61d8434b53"
    },
    {
        group: "DRIP",
        title: "FOREVER",
        imageUrl: "https://i.scdn.co/image/ab67616d00004851119800c5fc88785ee3ed1524",
        spotifyUrl: "https://open.spotify.com/track/6b6KXDbDn0s0Jepxm8a3nr?si=c7f9084b66be46c7"
    },
    {
        group: "WE GO UP",
        title: "WE GO UP",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e028fbb6ffdf0fad1623c8e95f8",
        spotifyUrl: "https://open.spotify.com/track/49DTiFx70EuJLV7hDsCo6z?si=246d87723d9c48a5"
    },
    {
        group: "WE GO UP",
        title: "PSYCHO",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e028fbb6ffdf0fad1623c8e95f8",
        spotifyUrl: "https://open.spotify.com/track/7jp2VW62Yt2bDOaRas3hR6?si=eff7602d56ad4cbd"
    },
    {
        group: "WE GO UP",
        title: "SUPA DUPA LUV",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e028fbb6ffdf0fad1623c8e95f8",
        spotifyUrl: "https://open.spotify.com/track/5S0QxfYABBoLI4sMk2aCa2?si=c3ef4afae4cb4819"
    },
    {
        group: "WE GO UP",
        title: "WILD",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e028fbb6ffdf0fad1623c8e95f8",
        spotifyUrl: "https://open.spotify.com/track/4s31m7ZtBWsK3BfndIGP4E?si=4954d6fc73324da5"
    },
    {
        group: "BABYMON7ER",
        title: "MONSTERS (Intro)",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/2TDIYXFSaesHBw3ZtWpFev?si=a28d7301f61841c1"
    },
    {
        group: "BABYMON7ER",
        title: "SHEESH",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/1njlnn8ZKHI77Pe9szIONR?si=7a1ea4b468a64c35"
    },
    {
        group: "BABYMON7ER",
        title: "LIKE THAT",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/7GDgpad2BQVuDUzaxHFakc?si=1794837df0284576"
    },
    {
        group: "BABYMON7ER",
        title: "Stuck In The Middle (7 ver.)",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/3RbulqgQKpX4OvvESysMI1?si=0a45800818b14a06"
    },
    {
        group: "BABYMON7ER",
        title: "BATTER UP (7 ver.)",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/2MQmaHNnCCuisRHu551ZQq?si=992970f06b5c450b"
    },
    {
        group: "BABYMON7ER",
        title: "DREAM",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/580sy6eZ6j0LrjvayPKD0k?si=ecebce2f63b34b28"
    },
    {
        group: "BABYMON7ER",
        title: "Stuck In The Middle (Remix)",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e024f6afc385052250c766a5683",
        spotifyUrl: "https://open.spotify.com/track/2fJgQ2gjt5boaD9sMqwMTw?si=e3ca5d5b2ace467b"
    },
    {
        group: "單曲",
        title: "HOT SAUCE",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02d7b5a82f0fd5d67ddea78193",
        spotifyUrl: "https://open.spotify.com/track/3AjfuVk6olyesS7cVfofBE?si=8603fa2d6f904adc"
    },
    {
        group: "單曲",
        title: "Ghost",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02b7bd2fe6ad11b7e66117b84b",
        spotifyUrl: "https://open.spotify.com/track/37qlRGMmN1tStZS0elymXg?si=80a6c7c5c6da4ae1"
    },
    {
        group: "單曲",
        title: "BATTER UP -JP Ver.",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02fbbc19bdfa0c01f3bfcd4428",
        spotifyUrl: "https://open.spotify.com/track/37Md0gjwNkqK7hwJEnTeNH?si=bf55a3f4c8a24572"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const slider = document.getElementById('slider');
    
    // 渲染輪盤的函式
    function renderCarousel(filterGroup = '全部 (All)') {
        // 清空現有輪盤
        carousel.innerHTML = '';
        
        // 根據選擇的群組篩選 CD 陣列
        const filteredConfig = filterGroup === '全部 (All)' 
            ? cdConfig 
            : cdConfig.filter(cd => cd.group === filterGroup);
            
        const totalItems = filteredConfig.length;
        if (totalItems === 0) return; // 防呆，沒有資料時不執行後續
        
        // 計算每張 CD 的旋轉角度，讓它們平均分佈在 360 度上
        const theta = 360 / totalItems;
        
        // 計算為了讓每張 CD 不重疊，半徑(translateZ)需要多大
        // 如果數量太少(1~2張)，給定一個最小半徑避免全部擠在一起
        const radius = totalItems <= 2 ? 150 : Math.round((200 / 2) / Math.tan(Math.PI / totalItems)) + 80;

        // 動態生成立體正方形 CD
        filteredConfig.forEach((config, index) => {
            const angle = theta * index;
            
            const cdItem = document.createElement('div');
            cdItem.className = 'cd-item';
            // 賦予初始位置
            cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

            // 建立各個面來組成 3D 立體感，並加入 title 元素
            const facesStr = `
                <div class="cd-title">${config.title}</div>
                <div class="cd-face cd-front" style="background-image: url('${config.imageUrl}')"></div>
                <div class="cd-face cd-back"></div>
                <div class="cd-face cd-top"></div>
                <div class="cd-face cd-bottom"></div>
                <div class="cd-face cd-left"></div>
                <div class="cd-face cd-right"></div>
            `;
            cdItem.innerHTML = facesStr;

            // 點擊事件
            cdItem.addEventListener('click', () => {
                window.open(config.spotifyUrl, '_blank');
            });

            // 取消 hover 時覆蓋 transform(因為 css 的 hover 寫法如果直寫 transform 會覆蓋掉位置)
            // 改使用 JS 控制其懸浮放大才不會弄亂圓形陣列的 Z 軸距離
            cdItem.addEventListener('mouseenter', () => {
                cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius + 30}px) translateY(-10px) scale(1.05)`;
            });
            cdItem.addEventListener('mouseleave', () => {
                cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            });

            carousel.appendChild(cdItem);
        });
        
        // 切換分類時，重置輪盤角度與拉桿位置
        slider.value = 0;
        // 初始化時旋轉並推遠輪盤，讓面向使用者的 CD 永遠保持在視角固定距離
        // 加入 scale 來放大整個輪盤，讓 CD 視覺上更大
        carousel.style.transform = `translateZ(${-radius}px) scale(1.35) rotateX(-15deg) rotateY(0deg)`;
        // 將 radius 存到 carousel 上，以便 slider 使用
        carousel.dataset.radius = radius;
    }

    // 初始渲染全部 CD
    renderCarousel('全部 (All)');

    // 取得所有分類列表選項並綁定點擊事件
    const categoryItems = document.querySelectorAll('.category-sidebar li');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有的 active class
            categoryItems.forEach(li => li.classList.remove('active'));
            // 為當前點擊的選項加上 active class
            this.classList.add('active');
            
            // 根據選取的分類重新渲染輪盤 (抓取 li 的文字內容)
            renderCarousel(this.textContent.trim());
        });
    });

    // 監聽滑桿來選轉整個輪盤
    slider.addEventListener('input', (e) => {
        // 取反 e.target.value 可以讓拖曳方向與視覺更符合直覺
        const rotateValue = -e.target.value; 
        const currentRadius = carousel.dataset.radius || 200;
        
        // 修改 container 的旋轉角度，保留原本讓其變成橢圓型的 rotateX，並推遠保持 Z 軸固定
        carousel.style.transform = `translateZ(${-currentRadius}px) scale(1.35) rotateX(-15deg) rotateY(${rotateValue}deg)`;
    });
});