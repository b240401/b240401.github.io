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

// 此處對應您的播放清單
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
    const scene = document.getElementById('scene');
    
    let currentRotateX = 0;
    
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const categoryItems = document.querySelectorAll('#categoryList li');

    // === 選單開關邏輯 ===
    function toggleMenu() {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        overlay.classList.toggle('visible');
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    let currentRadius = 0; // 用來儲存當前的半徑，方便拖曳時使用

    // === 渲染輪盤的函式 ===
    function renderCarousel(filterGroup = '全部 (All)') {
        // 清空現有輪盤
        carousel.innerHTML = '';
        
        // 根據選擇的群組篩選
        const filteredConfig = filterGroup === '全部 (All)' 
            ? cdConfig 
            : cdConfig.filter(cd => cd.group === filterGroup);
            
        const totalItems = filteredConfig.length;
        if (totalItems === 0) return;
        
        // 計算每張 CD 旋轉角度，平均分佈在 360 度上
        const theta = 360 / totalItems;
        
        // 解除 radius 上限限制，讓越多 CD 時半徑越大，避免擠在一起
        currentRadius = totalItems <= 2 ? 100 : Math.round((140 / 2) / Math.tan(Math.PI / totalItems)) + 60;
        
        filteredConfig.forEach((config, index) => {
            const angle = theta * index;
            
            const cdItem = document.createElement('div');
            cdItem.className = 'cd-item';
            // 賦予初始位置，將原本繞 Y 軸變成圈，改為繞 X 軸變成直向轉輪
            cdItem.style.transform = `rotateX(${angle}deg) translateZ(${currentRadius}px)`;

            // 建立各個面來組成 3D 立體感 (厚度從原10px變8px, Z平移從10變8)
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
            // 加入變數防手滑誤觸點擊
            let clickTimeout;
            cdItem.addEventListener('pointerdown', () => {
                clickTimeout = setTimeout(() => { clickTimeout = null; }, 200); // 200ms 內算點擊
            });
            cdItem.addEventListener('pointerup', () => {
                if (clickTimeout) {
                    clearTimeout(clickTimeout);
                    window.open(config.spotifyUrl, '_blank');
                }
            });

            carousel.appendChild(cdItem);
        });
        
        // 切換分類時重置角度
        currentRotateX = 0;
        // 把整個輪組容器往深處推 (Z 軸退回 -currentRadius)，確保正面那張 CD 大小與距離永遠一致且不因半徑放大而破版
        carousel.style.transform = `translateZ(${-currentRadius}px) scale(1.35) rotateY(0deg) rotateX(0deg)`;
    }

    // 初始渲染
    renderCarousel('全部 (All)');

    // === 選單列表綁定事件 ===
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有的 active
            categoryItems.forEach(li => li.classList.remove('active'));
            // 為當前點擊加 active
            this.classList.add('active');
            
            // 重新渲染輪盤
            renderCarousel(this.textContent.trim());

            // 手機版：點擊分類後自動收起選單
            toggleMenu();
        });
    });

    // === 滑動控制邏輯 (取代下方拉桿) ===
    let isDragging = false;
    let startY = 0;
    
    // 電腦滑鼠與手機觸控共用 pointer 事件
    scene.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startY = e.clientY;
        // 中止預設行為避免選取文字
        e.preventDefault();
    });

    scene.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        const currentY = e.clientY;
        const deltaY = currentY - startY; // 計算移動量
        
        // 增減當前角度 (乘上係數控制轉速0.5)
        currentRotateX += deltaY * -0.5; 
        
        // 將轉動與目前大圓的 Z 軸後推屬性保持一致，才不會因轉動而放大
        carousel.style.transform = `translateZ(${-currentRadius}px) scale(1.35) rotateY(0deg) rotateX(${currentRotateX}deg)`;
        
        // 更新 startY 供下次計算
        startY = currentY;
    });

    scene.addEventListener('pointerup', () => {
        isDragging = false;
    });

    scene.addEventListener('pointerleave', () => {
        isDragging = false;
    });

});