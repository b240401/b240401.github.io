// =====================================================================
//  星空背景 + 流星 (來自 home，並加入流星效果)
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const starBg = document.getElementById('star-bg');
    if (!starBg) return;

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

    // 偶爾劃過的流星
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
        const launchShootingStar = () => {
            const s = document.createElement('div');
            s.className = 'shooting-star';
            s.style.left = (Math.random() * 60 + 30) + '%';
            s.style.top = (Math.random() * 40) + '%';
            const dur = Math.random() * 1.2 + 1.0;
            s.style.animation = `shoot ${dur}s ease-out forwards`;
            starBg.appendChild(s);
            setTimeout(() => s.remove(), dur * 1000 + 200);
        };
        const scheduleShoot = () => {
            launchShootingStar();
            setTimeout(scheduleShoot, Math.random() * 6000 + 4000);
        };
        setTimeout(scheduleShoot, 2500);
    }
});

// =====================================================================
//  播放清單 / CD 配置 (可自行更換 imageUrl 和 spotifyUrl)
// =====================================================================
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
    },
    {
        group: "춤 (CHOOM)",
        title: "MOON",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e020fbcc1d9dc6a647af4ebdfee",
        spotifyUrl: "https://open.spotify.com/track/4ni36cZOQZldZGpHyLHFqX?si=52a22146006c45cc"
    },
    {
        group: "춤 (CHOOM)",
        title: "CHOOM",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e020fbcc1d9dc6a647af4ebdfee",
        spotifyUrl: "https://open.spotify.com/track/4cox7ONwuCwUvfZ9fsGDVu?si=b23b8402100049dd"
    },
    {
        group: "춤 (CHOOM)",
        title: "I LIKE IT",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e020fbcc1d9dc6a647af4ebdfee",
        spotifyUrl: "https://open.spotify.com/track/7vKgGaEDN3shr8HBlCbIWg?si=d6e1149cb486496d"
    },
    {
        group: "춤 (CHOOM)",
        title: "LOCKED IN",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e020fbcc1d9dc6a647af4ebdfee",
        spotifyUrl: "https://open.spotify.com/track/1vvoCAUWVRBjCarEvB6Khd?si=3bf69f2e72984201"
    }
];

// =====================================================================
//  3D 輪盤：拖曳旋轉 + 慣性 + 自動旋轉 + 焦點高亮
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const ALL = '全部 (All)';
    const AUTO_SPEED = 0.16;   // 自動旋轉速度 (度/影格)
    const DRAG_K = 0.35;       // 拖曳靈敏度

    const carousel  = document.getElementById('carousel');
    const scene     = document.getElementById('scene');
    const slider    = document.getElementById('slider');
    const spinBtn   = document.getElementById('spin-btn');
    const npTitle   = document.getElementById('np-title');
    const npLink    = document.getElementById('np-link');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- 狀態 ----
    let items = [];            // [{ el, angle, config }]
    let rotation = 0;          // 套用在輪盤上的 rotateY
    let applied  = NaN;        // 上一影格已套用的角度 (避免重複寫入)
    let velocity = 0;          // 慣性速度
    let dragging = false;
    let moved = false;
    let lastX = 0, downX = 0;
    let downCard = null;
    let autoRotate = !prefersReduced;
    let sliderHeld = false;
    let lastFrontIdx = -1;

    const wrap = (r) => ((r + 180) % 360 + 360) % 360 - 180;
    const normDeg = (d) => { d %= 360; if (d > 180) d -= 360; if (d < -180) d += 360; return d; };

    // ---- 在側欄填入各分類的曲目數 ----
    function fillCounts() {
        document.querySelectorAll('.category-sidebar li').forEach(li => {
            const g = li.dataset.group;
            const n = g === ALL ? cdConfig.length : cdConfig.filter(c => c.group === g).length;
            const badge = li.querySelector('.cat-count');
            if (badge) badge.textContent = n;
        });
    }

    // ---- 建立輪盤 ----
    function renderCarousel(filterGroup = ALL) {
        carousel.innerHTML = '';
        items = [];
        lastFrontIdx = -1;

        const list = filterGroup === ALL ? cdConfig : cdConfig.filter(c => c.group === filterGroup);
        const total = list.length;
        if (total === 0) { setNowPlaying(null); return; }

        const theta = 360 / total;
        // 半徑：數量太少時給最小值，避免擠在一起 (沿用原本公式)
        const radius = total <= 2 ? 150 : Math.round((200 / 2) / Math.tan(Math.PI / total)) + 80;

        list.forEach((config, index) => {
            const angle = theta * index;
            const cdItem = document.createElement('div');
            cdItem.className = 'cd-item';
            cdItem.dataset.url = config.spotifyUrl;
            cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            cdItem.innerHTML = `
                <div class="cd-title">${config.title}</div>
                <div class="cd-face cd-front" style="background-image: url('${config.imageUrl}')"></div>
                <div class="cd-face cd-back"></div>
                <div class="cd-face cd-top"></div>
                <div class="cd-face cd-bottom"></div>
                <div class="cd-face cd-left"></div>
                <div class="cd-face cd-right"></div>
            `;

            // 滑鼠懸浮時，使用 JS 控制浮起放大，避免覆蓋圓形陣列的 Z 軸位置
            cdItem.addEventListener('mouseenter', () => {
                cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius + 30}px) translateY(-10px) scale(1.06)`;
            });
            cdItem.addEventListener('mouseleave', () => {
                cdItem.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
            });

            carousel.appendChild(cdItem);
            items.push({ el: cdItem, angle, config });
        });

        // 重置角度與滑桿
        rotation = 0;
        velocity = 0;
        applied = NaN;
        slider.value = 0;
        carousel.dataset.radius = radius;

        // 切換動畫
        carousel.classList.remove('switching');
        void carousel.offsetWidth; // 強制 reflow 以重播動畫
        carousel.classList.add('switching');

        applyTransform();
        updateVisuals();
    }

    // ---- 套用輪盤旋轉 ----
    function applyTransform() {
        const radius = carousel.dataset.radius || 200;
        carousel.style.transform = `translateZ(${-radius}px) scale(1.35) rotateX(-15deg) rotateY(${rotation}deg)`;
    }

    // ---- 依面向角度做深度淡化 / 焦點高亮 ----
    function updateVisuals() {
        if (!items.length) return;
        let minA = Infinity, frontIdx = 0;
        const angs = items.map((it, i) => {
            const a = Math.abs(normDeg(rotation + it.angle));
            if (a < minA) { minA = a; frontIdx = i; }
            return a;
        });

        items.forEach((it, i) => {
            const a = angs[i];
            const factor = (Math.cos(a * Math.PI / 180) + 1) / 2; // 正面=1, 背面=0
            it.el.style.opacity = (0.30 + 0.70 * factor).toFixed(3);
            if (i === frontIdx) {
                it.el.classList.add('is-front');
                it.el.style.filter = 'brightness(1.12) drop-shadow(0 14px 30px rgba(30, 215, 96, 0.45))';
            } else {
                it.el.classList.remove('is-front');
                it.el.style.filter = `brightness(${(0.58 + 0.45 * factor).toFixed(3)})`;
            }
        });

        if (frontIdx !== lastFrontIdx) {
            setNowPlaying(items[frontIdx].config);
            lastFrontIdx = frontIdx;
        }
    }

    // ---- 更新「現正聚焦」資訊 ----
    function setNowPlaying(config) {
        if (!config) {
            npTitle.textContent = '—';
            npLink.style.visibility = 'hidden';
            return;
        }
        npLink.style.visibility = 'visible';
        npTitle.textContent = config.title;
        npLink.href = config.spotifyUrl;
        npTitle.classList.remove('flip');
        void npTitle.offsetWidth;
        npTitle.classList.add('flip');
    }

    // ---- 自動旋轉按鈕 ----
    function updateSpinBtn() {
        spinBtn.textContent = autoRotate ? '❚❚' : '▶';
        spinBtn.setAttribute('aria-pressed', autoRotate ? 'true' : 'false');
        spinBtn.title = autoRotate ? '暫停自動旋轉' : '開始自動旋轉';
    }

    // ---- 主動畫迴圈 ----
    function tick() {
        if (!dragging) {
            if (Math.abs(velocity) > 0.06) {
                rotation += velocity;
                velocity *= 0.94;              // 慣性摩擦
            } else {
                velocity = 0;
                if (autoRotate) rotation += AUTO_SPEED;
            }
        }
        rotation = wrap(rotation);

        if (rotation !== applied) {
            applyTransform();
            updateVisuals();
            if (!sliderHeld) slider.value = Math.round(rotation);
            applied = rotation;
        }
        requestAnimationFrame(tick);
    }

    // ---- 拖曳旋轉 (滑鼠 + 觸控) ----
    scene.addEventListener('pointerdown', (e) => {
        if (e.target.closest('input[type=range]')) return;
        dragging = true;
        moved = false;
        lastX = downX = e.clientX;
        downCard = e.target.closest('.cd-item');
        velocity = 0;
    });
    window.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        if (Math.abs(e.clientX - downX) > 6) moved = true;
        rotation += dx * DRAG_K;
        velocity = dx * DRAG_K;
    });
    window.addEventListener('pointerup', (e) => {
        if (!dragging) return;
        dragging = false;
        // 視為點擊 (未明顯拖曳) → 開啟 Spotify
        if (!moved && downCard && downCard.dataset.url) {
            window.open(downCard.dataset.url, '_blank');
        }
        downCard = null;
    });

    // ---- 滑桿控制 (使用時暫停自動旋轉) ----
    slider.addEventListener('pointerdown', () => { sliderHeld = true; });
    window.addEventListener('pointerup', () => { sliderHeld = false; });
    slider.addEventListener('input', (e) => {
        if (autoRotate) { autoRotate = false; updateSpinBtn(); }
        velocity = 0;
        rotation = parseFloat(e.target.value);
    });

    // ---- 自動旋轉開關 ----
    spinBtn.addEventListener('click', () => {
        autoRotate = !autoRotate;
        if (autoRotate) velocity = 0;
        updateSpinBtn();
    });

    // ---- 分類切換 ----
    const categoryItems = document.querySelectorAll('.category-sidebar li');
    categoryItems.forEach(item => {
        item.addEventListener('click', function () {
            categoryItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            renderCarousel(this.dataset.group);
        });
    });

    // ---- 初始化 ----
    fillCounts();
    updateSpinBtn();
    renderCarousel(ALL);
    requestAnimationFrame(tick);
});
