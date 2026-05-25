// =====================================================================
//  星空背景 (行動版：數量略減以兼顧效能/電量)
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const starBg = document.getElementById('star-bg');
    if (!starBg) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = reduced ? 40 : 90;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
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
        frag.appendChild(star);
    }
    starBg.appendChild(frag);
});

// =====================================================================
//  播放清單 (可自行更換 imageUrl 和 spotifyUrl)
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
//  黑膠封面流：建立唱片、3D 視差、聚焦偵測、環境光暈與資訊同步
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    const ALL = '全部 (All)';
    const FALLBACK = './images/icon.png';

    const flow     = document.getElementById('flow');
    const chips    = document.querySelectorAll('.filter-bar .chip');
    const siGroup  = document.getElementById('si-group');
    const siTitle  = document.getElementById('si-title');
    const playFab  = document.getElementById('play-fab');
    const ambA     = document.querySelector('.amb-a');
    const ambB     = document.querySelector('.amb-b');

    // Spotify 縮圖統一升級為 300px，避免 64px 模糊
    const hiRes = (u) => u.replace(/(ab67616d0000)(?:4851|b273)/g, '$11e02');
    const esc = (s) => String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    let discs = [];        // [{ el, vinyl, img, config }]
    let activeIdx = -1;
    let ambFront = ambA;   // 目前顯示中的環境層
    let ticking = false;

    // 各分類數量
    chips.forEach(chip => {
        const g = chip.dataset.group;
        const n = g === ALL ? cdConfig.length : cdConfig.filter(c => c.group === g).length;
        const badge = chip.querySelector('.chip-count');
        if (badge) badge.textContent = n;
    });

    // 建立封面流
    function build(group = ALL) {
        const list = group === ALL ? cdConfig : cdConfig.filter(c => c.group === group);
        if (!list.length) {
            flow.innerHTML = '<p class="flow-empty">此分類暫無歌曲</p>';
            discs = [];
            return;
        }

        flow.innerHTML = list.map((c) => {
            const img = esc(hiRes(c.imageUrl));
            const title = esc(c.title);
            const url = esc(c.spotifyUrl);
            return `
                <article class="disc">
                    <a class="disc-inner" href="${url}" target="_blank" rel="noopener" aria-label="在 Spotify 收聽 ${title}">
                        <span class="vinyl"><span class="vinyl-disc"><span class="vinyl-label" style="background-image:url('${img}')"></span></span></span>
                        <span class="cover">
                            <img src="${img}" alt="${title}" loading="lazy" decoding="async"
                                 onerror="this.onerror=null;this.src='${FALLBACK}';this.classList.add('is-fallback');">
                        </span>
                    </a>
                </article>`;
        }).join('');

        // 快取節點
        discs = Array.from(flow.querySelectorAll('.disc')).map((el, i) => ({
            el,
            inner: el.querySelector('.disc-inner'),
            vinyl: el.querySelector('.vinyl'),
            config: list[i]
        }));

        flow.scrollLeft = 0;
        activeIdx = -1;
        requestAnimationFrame(update);
    }

    // 將目前聚焦的唱片資訊同步到畫面
    function setActive(i) {
        if (i === activeIdx || !discs[i]) return;
        if (discs[activeIdx]) discs[activeIdx].el.classList.remove('is-active');
        discs[i].el.classList.add('is-active');
        activeIdx = i;

        const c = discs[i].config;
        siGroup.textContent = c.group;
        siTitle.textContent = c.title;
        playFab.href = c.spotifyUrl;
        playFab.setAttribute('aria-label', '在 Spotify 收聽 ' + c.title);
        siTitle.classList.remove('flip');
        void siTitle.offsetWidth;
        siTitle.classList.add('flip');

        // 環境光暈交叉淡入到目前封面
        const back = ambFront === ambA ? ambB : ambA;
        back.style.backgroundImage = `url('${hiRes(c.imageUrl)}')`;
        back.classList.add('show');
        ambFront.classList.remove('show');
        ambFront = back;
    }

    // 視差更新：依與中心的距離調整縮放/傾斜/透明度
    function update() {
        if (!discs.length) return;
        const fr = flow.getBoundingClientRect();
        const cx = fr.left + fr.width / 2;
        let best = Infinity, bi = 0;

        discs.forEach((d, i) => {
            const r = d.el.getBoundingClientRect();
            if (!r.width) return;
            const t = (r.left + r.width / 2 - cx) / r.width; // 與中心的距離(以卡寬為單位)
            const at = Math.abs(t);
            const clamp = Math.min(at, 1);
            d.inner.style.transform = `rotateY(${(-t * 20).toFixed(2)}deg) scale(${(1 - clamp * 0.26).toFixed(3)})`;
            d.inner.style.opacity = (1 - clamp * 0.5).toFixed(3);
            d.inner.style.zIndex = String(100 - Math.round(Math.min(at, 9) * 10));
            d.vinyl.style.transform = `translateX(${(Math.max(0, 1 - at) * 30).toFixed(1)}%)`;
            if (at < best) { best = at; bi = i; }
        });

        setActive(bi);
    }

    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { update(); ticking = false; });
    }

    flow.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => requestAnimationFrame(update));

    // 分類切換
    chips.forEach(chip => {
        chip.addEventListener('click', function () {
            if (this.classList.contains('active')) return;
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            build(this.dataset.group);
            this.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });

    // 初始化
    build(ALL);
});
