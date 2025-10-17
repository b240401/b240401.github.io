let restaurants = [];
let filteredRestaurants = [];
let isSpinning = false;
let currentSelectedRestaurant = null;
let selectedAreas = [];
let selectedPrices = [];
let onlyOpenNow = true; // 預設只顯示營業中
let includeOpeningSoon = true; // 預設包含即將營業
let theWheel; // Winwheel.js 轉盤物件
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788'];

async function loadData() {
    try {
        const response = await fetch('restaurants.json');
        restaurants = await response.json();
        updateFilterOptions();
        updateFilterTags(); // 初始化時更新標籤顯示
        applyFilters();
    } catch (error) {
        console.error('載入資料失敗:', error);
        alert('無法載入餐廳資料');
    }
}

// 判斷餐廳是否正在營業
function isRestaurantOpen(restaurant) {
    const businessHours = restaurant.businessHours;
    
    // null 或 "null" 字串視為營業中
    if (!businessHours || businessHours === "null") {
        return true;
    }
    
    // 24小時營業
    if (businessHours === "24hr") {
        return true;
    }
    
    // 如果不是陣列，視為營業中
    if (!Array.isArray(businessHours)) {
        return true;
    }
    
    // 取得當前時間
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    // 檢查是否在任一營業時段內
    for (const period of businessHours) {
        const [startHour, startMinute] = period.start.split(':').map(Number);
        const [endHour, endMinute] = period.end.split(':').map(Number);
        
        let startTimeInMinutes = startHour * 60 + startMinute;
        let endTimeInMinutes = endHour * 60 + endMinute;
        
        // 處理跨午夜的情況 (例如 16:30-1:00)
        if (endTimeInMinutes < startTimeInMinutes) {
            // 如果當前時間在結束時間之前（凌晨時段）
            if (currentTimeInMinutes <= endTimeInMinutes) {
                return true;
            }
            // 如果當前時間在開始時間之後（晚上時段）
            if (currentTimeInMinutes >= startTimeInMinutes) {
                return true;
            }
        } else {
            // 正常情況（不跨午夜）
            if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
                return true;
            }
        }
    }
    
    return false;
}

// 判斷餐廳是否即將營業（15分鐘內）
function isRestaurantOpeningSoon(restaurant) {
    const businessHours = restaurant.businessHours;
    
    // null 或 "null" 字串視為營業中（已經在營業不算即將營業）
    if (!businessHours || businessHours === "null") {
        return false;
    }
    
    // 24小時營業（已經在營業不算即將營業）
    if (businessHours === "24hr") {
        return false;
    }
    
    // 如果不是陣列，視為營業中
    if (!Array.isArray(businessHours)) {
        return false;
    }
    
    // 取得當前時間
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    // 檢查是否在任一營業時段的15分鐘前
    for (const period of businessHours) {
        const [startHour, startMinute] = period.start.split(':').map(Number);
        let startTimeInMinutes = startHour * 60 + startMinute;
        
        // 檢查是否在開始營業前15分鐘內
        const timeDifference = startTimeInMinutes - currentTimeInMinutes;
        
        // 正常情況（不跨午夜）
        if (timeDifference > 0 && timeDifference <= 15) {
            return true;
        }
        
        // 處理跨午夜的情況（例如現在是23:50，開始營業時間是00:05）
        if (timeDifference < 0) {
            const timeDifferenceNextDay = (24 * 60 + startTimeInMinutes) - currentTimeInMinutes;
            if (timeDifferenceNextDay > 0 && timeDifferenceNextDay <= 15) {
                return true;
            }
        }
    }
    
    return false;
}

function updateFilterOptions() {
    const areas = [...new Set(restaurants.map(r => r.area).filter(a => a))];
    const areaCheckboxes = document.getElementById('areaCheckboxes');
    areaCheckboxes.innerHTML = areas.map(area => `
        <div class="checkbox-item">
            <input type="checkbox" id="area_${area}" value="${area}" onchange="updateFilterPreview()">
            <label for="area_${area}">${area}</label>
        </div>
    `).join('');
    
    // 為價位 checkbox 添加事件監聽
    document.querySelectorAll('#priceCheckboxes input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', updateFilterPreview);
    });
}

function updateFilterPreview() {
    // 即時更新（可選）
}

function applyFiltersFromModal() {
    // 收集選中的地區
    selectedAreas = Array.from(document.querySelectorAll('#areaCheckboxes input:checked')).map(cb => cb.value);
    
    // 收集選中的價位
    selectedPrices = Array.from(document.querySelectorAll('#priceCheckboxes input:checked')).map(cb => cb.value);
    
    // 收集營業中選項
    onlyOpenNow = document.getElementById('openNowCheckbox').checked;
    
    // 收集即將營業選項
    includeOpeningSoon = document.getElementById('openingSoonCheckbox').checked;
    
    applyFilters();
    updateFilterTags();
}

function updateFilterTags() {
    const tagsContainer = document.getElementById('filterTags');
    const tags = [];
    
    selectedAreas.forEach(area => {
        tags.push(`<span class="filter-tag">${area} <span class="remove" onclick="removeAreaFilter('${area}')">×</span></span>`);
    });
    
    selectedPrices.forEach(price => {
        tags.push(`<span class="filter-tag">${price} <span class="remove" onclick="removePriceFilter('${price}')">×</span></span>`);
    });
    
    if (onlyOpenNow) {
        tags.push(`<span class="filter-tag">營業中 <span class="remove" onclick="removeOpenNowFilter()">×</span></span>`);
    }
    
    if (includeOpeningSoon) {
        tags.push(`<span class="filter-tag">即將營業 <span class="remove" onclick="removeOpeningSoonFilter()">×</span></span>`);
    }
    
    if (tags.length === 0) {
        tagsContainer.innerHTML = '<span class="text-muted small">尚未選擇任何條件</span>';
    } else {
        tagsContainer.innerHTML = tags.join('');
    }
}

function removeAreaFilter(area) {
    selectedAreas = selectedAreas.filter(a => a !== area);
    document.getElementById(`area_${area}`).checked = false;
    applyFilters();
    updateFilterTags();
}

function removePriceFilter(price) {
    selectedPrices = selectedPrices.filter(p => p !== price);
    document.getElementById(`price_${price}`).checked = false;
    applyFilters();
    updateFilterTags();
}

function removeOpenNowFilter() {
    onlyOpenNow = false;
    document.getElementById('openNowCheckbox').checked = false;
    applyFilters();
    updateFilterTags();
}

function removeOpeningSoonFilter() {
    includeOpeningSoon = false;
    document.getElementById('openingSoonCheckbox').checked = false;
    applyFilters();
    updateFilterTags();
}

function clearFilters() {
    selectedAreas = [];
    selectedPrices = [];
    onlyOpenNow = true; // 重置為預設值（營業中）
    includeOpeningSoon = true; // 重置為預設值（即將營業）
    
    // 清除所有地區 checkbox
    document.querySelectorAll('#areaCheckboxes input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // 清除所有價位 checkbox
    document.querySelectorAll('#priceCheckboxes input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // 重新勾選營業狀態
    document.getElementById('openNowCheckbox').checked = true;
    document.getElementById('openingSoonCheckbox').checked = true;
    
    applyFilters();
    updateFilterTags();
}

function applyFilters() {
    filteredRestaurants = restaurants.filter(r => {
        const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(r.area);
        const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(r.price);
        
        // 營業狀態匹配：如果選擇了營業中或即將營業，需要至少符合其中一個
        let openMatch = true;
        if (onlyOpenNow || includeOpeningSoon) {
            openMatch = false;
            if (onlyOpenNow && isRestaurantOpen(r)) {
                openMatch = true;
            }
            if (includeOpeningSoon && isRestaurantOpeningSoon(r)) {
                openMatch = true;
            }
        }
        
        return areaMatch && priceMatch && openMatch && r.area && r.price;
    });
    
    document.getElementById('matchCount').textContent = `符合條件的餐廳：${filteredRestaurants.length} 家`;
    
    updateCandidateList();
    drawWheel();
    resetResult();
}

function updateCandidateList() {
    const list = document.getElementById('candidateList');
    if (filteredRestaurants.length === 0) {
        list.innerHTML = '<div class="text-center p-3 text-muted">沒有符合條件的餐廳</div>';
        return;
    }
    list.innerHTML = '<h6 class="mb-3 text-primary"><i class="bi bi-list-ul"></i> 候選餐廳</h6>' + 
        filteredRestaurants.map(r => `
            <div class="candidate-item">
                <div>
                    <span>${r.name}</span>
                    <span class="text-muted small d-block d-sm-inline ms-0 ms-sm-2">${r.area} | ${r.price}</span>
                </div>
                <button class="btn-delete-item" onclick="deleteRestaurantFromList(${r.id})" title="從列表移除">
                    <i class="bi bi-x-circle"></i>
                </button>
            </div>
        `).join('');
}

function drawWheel() {
    const canvas = document.getElementById('wheelCanvas');
    
    if (filteredRestaurants.length === 0) {
        // 沒有餐廳時顯示提示訊息
        if (theWheel) {
            theWheel = null;
        }
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#999';
        ctx.font = '20px Microsoft JhengHei';
        ctx.textAlign = 'center';
        ctx.fillText('請選擇篩選條件', canvas.width / 2, canvas.height / 2);
        return;
    }

    // 準備 Winwheel 的扇形資料
    const segments = filteredRestaurants.map((restaurant, index) => ({
        'fillStyle': colors[index % colors.length],
        'text': restaurant.name,
        'textFillStyle': 'white',
        'textFontSize': Math.max(12, Math.min(16, 200 / filteredRestaurants.length)), // 根據餐廳數量調整字體大小
        'textFontWeight': 'bold',
        'textFontFamily': 'Microsoft JhengHei'
    }));

    // 初始化或更新 Winwheel
    theWheel = new Winwheel({
        'canvasId': 'wheelCanvas',
        'outerRadius': 190,
        'innerRadius': 30,
        'textMargin': 0,
        'textAlignment': 'outer',
        'numSegments': filteredRestaurants.length,
        'segments': segments,
        'animation': {
            'type': 'spinToStop',
            'duration': 4,
            'spins': 5,
            'stopAngle': null, // 讓 Winwheel 隨機選擇停止角度
            'callbackFinished': function(indicatedSegment) {
                // 轉動完成回調函數
                console.log('轉盤停止，指向：', indicatedSegment);
                
                const selectedRestaurant = filteredRestaurants.find(restaurant => 
                    restaurant.name === indicatedSegment.text
                ) || filteredRestaurants[0];
                
                console.log('選中的餐廳：', selectedRestaurant);
                showResult(selectedRestaurant);
                
                // 重置按鈕狀態
                isSpinning = false;
                const spinBtn = document.getElementById('spinButton');
                spinBtn.disabled = false;
                spinBtn.innerHTML = '<i class="bi bi-arrow-repeat"></i> 開始轉動';
            },
            'easing': 'Power3.easeOut'
        },
        'pins': {
            'number': filteredRestaurants.length,
            'fillStyle': 'white',
            'outerRadius': 4
        },
        'pointerAngle': 0
    });
}

function spinWheel() {
    if (isSpinning || filteredRestaurants.length === 0 || !theWheel) {
        return;
    }
    
    isSpinning = true;
    const spinBtn = document.getElementById('spinButton');
    spinBtn.disabled = true;
    spinBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> 轉動中...';
    
    // 重設轉盤動畫，確保每次都是完整的轉動
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();
    
    // 重新設置動畫屬性，確保每次都有足夠的轉動
    theWheel.animation.spins = Math.floor(Math.random() * 3) + 5; // 5-7圈隨機
    theWheel.animation.stopAngle = null; // 重設停止角度
    
    // 短暫延遲後開始轉動，確保重設完成
    setTimeout(() => {
        theWheel.startAnimation();
    }, 100);
}



function showResult(restaurant) {
    currentSelectedRestaurant = restaurant;
    document.getElementById('initialMessage').style.display = 'none';
    document.getElementById('resultSection').classList.add('show');
    document.getElementById('resultName').textContent = restaurant.name;
    document.getElementById('resultId').textContent = restaurant.id;
    document.getElementById('resultArea').textContent = restaurant.area;
    document.getElementById('resultPrice').textContent = restaurant.price;
    const mapContainer = document.getElementById('mapContainer');
    if (restaurant.mapUrl) {
        mapContainer.innerHTML = `<iframe src="${restaurant.mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else {
        mapContainer.innerHTML = '<div class="no-map"> 此餐廳暫無地圖資訊<br><small>請至管理頁面新增</small></div>';
    }
    
    // 在手機上自動滾動到結果區域
    setTimeout(() => {
        const resultSection = document.getElementById('resultSection');
        if (resultSection && window.innerWidth <= 768) { // 手機螢幕寬度判斷
            resultSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
    }, 500); // 延遲500ms確保動畫完成
}

function resetResult() {
    document.getElementById('resultSection').classList.remove('show');
    document.getElementById('initialMessage').style.display = 'block';
}

function resetWheel() {
    // 滾動到轉盤區域
    const wheelContainer = document.querySelector('.wheel-container');
    if (wheelContainer) {
        wheelContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
        });
    }
    
    // 短暫延遲後開始轉動，確保滾動動畫有時間執行
    setTimeout(() => {
        spinWheel();
    }, 300);
}

// 刪除候選列表中的餐廳（暫時從篩選結果移除）
function deleteRestaurantFromList(restaurantId) {
    if (confirm('確定要從候選列表中移除這家餐廳嗎？')) {
        restaurants = restaurants.filter(r => r.id !== restaurantId);
        applyFilters();
    }
}

// 刪除當前顯示的餐廳結果
function deleteCurrentRestaurant() {
    if (!currentSelectedRestaurant) return;
    
    if (confirm(`確定要刪除「${currentSelectedRestaurant.name}」嗎？\n此操作會從餐廳資料中永久移除。`)) {
        restaurants = restaurants.filter(r => r.id !== currentSelectedRestaurant.id);
        currentSelectedRestaurant = null;
        applyFilters();
        alert('餐廳已刪除！');
    }
}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupAddToHomeButton();
});

// 設置加入主畫面按鈕
function setupAddToHomeButton() {
    const addButtonContainer = document.getElementById('addButtonContainer');
    const addButton = document.getElementById('addButton');
    const tooltip = document.getElementById('addButtonTooltip');
    
    if (!addButtonContainer || !addButton || !tooltip) return;
    
    // 檢測設備和瀏覽器類型
    const deviceInfo = detectDeviceAndBrowser();
    
    // 根據設備顯示相應的說明
    updateTooltipContent(tooltip, deviceInfo);
    
    // 如果支援PWA安裝，顯示按鈕
    if (deviceInfo.canInstall) {
        addButtonContainer.style.display = 'flex';
        
        // 綁定點擊事件
        addButton.addEventListener('click', () => handleAddToHome(deviceInfo));
        
        // 滑鼠懸停顯示提示
        let tooltipTimeout;
        addButton.addEventListener('mouseenter', () => {
            clearTimeout(tooltipTimeout);
            tooltip.classList.add('show');
        });
        
        addButton.addEventListener('mouseleave', () => {
            tooltipTimeout = setTimeout(() => {
                tooltip.classList.remove('show');
            }, 300);
        });
        
        // 觸控設備的點擊提示
        if (deviceInfo.isMobile) {
            addButton.addEventListener('touchstart', () => {
                tooltip.classList.toggle('show');
                setTimeout(() => {
                    tooltip.classList.remove('show');
                }, 3000);
            });
        }
    }
}

// 檢測設備和瀏覽器
function detectDeviceAndBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    const standalone = window.navigator.standalone;
    const isIOS = /ipad|iphone|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    const isChrome = /chrome/.test(userAgent);
    const isFirefox = /firefox/.test(userAgent);
    const isEdge = /edge/.test(userAgent);
    const isMobile = /mobi|android|iphone|ipad|ipod/.test(userAgent);
    
    // 檢查是否已經安裝為PWA
    const isInstalled = standalone === true || window.matchMedia('(display-mode: standalone)').matches;
    
    let canInstall = false;
    let installMethod = '';
    
    if (!isInstalled) {
        if (isIOS && isSafari) {
            canInstall = true;
            installMethod = 'ios-safari';
        } else if (isAndroid && (isChrome || isFirefox)) {
            canInstall = true;
            installMethod = 'android';
        } else if (!isMobile && (isChrome || isEdge)) {
            canInstall = true;
            installMethod = 'desktop';
        }
    }
    
    return {
        isIOS,
        isAndroid,
        isSafari,
        isChrome,
        isFirefox,
        isEdge,
        isMobile,
        isInstalled,
        canInstall,
        installMethod
    };
}

// 更新工具提示內容
function updateTooltipContent(tooltip, deviceInfo) {
    const instructions = tooltip.querySelectorAll('.tooltip-text span');
    
    // 隱藏所有說明
    instructions.forEach(span => span.classList.remove('active'));
    
    // 根據設備類型顯示相應說明
    if (deviceInfo.installMethod === 'ios-safari') {
        tooltip.querySelector('.ios-instruction').classList.add('active');
    } else if (deviceInfo.installMethod === 'android') {
        tooltip.querySelector('.android-instruction').classList.add('active');
    } else if (deviceInfo.installMethod === 'desktop') {
        tooltip.querySelector('.desktop-instruction').classList.add('active');
    }
}

// 處理加入主畫面操作
function handleAddToHome(deviceInfo) {
    if (deviceInfo.installMethod === 'ios-safari') {
        // iOS Safari - 顯示詳細說明
        showIOSInstallInstructions();
    } else if (deviceInfo.installMethod === 'android' || deviceInfo.installMethod === 'desktop') {
        // Android 或桌面版 - 嘗試使用 PWA API
        if ('serviceWorker' in navigator && 'BeforeInstallPromptEvent' in window) {
            // 如果有快取的安裝事件，使用它
            if (window.deferredPrompt) {
                window.deferredPrompt.prompt();
                window.deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('用戶接受了安裝提示');
                        // 隱藏按鈕
                        document.getElementById('addButtonContainer').style.display = 'none';
                    }
                    window.deferredPrompt = null;
                });
            } else {
                // 顯示手動安裝說明
                showManualInstallInstructions(deviceInfo);
            }
        } else {
            showManualInstallInstructions(deviceInfo);
        }
    }
}

// 顯示 iOS 安裝說明
function showIOSInstallInstructions() {
    const modal = document.createElement('div');
    modal.className = 'install-modal';
    modal.innerHTML = `
        <div class="install-modal-content">
            <div class="install-modal-header">
                <h3>📱 加入主畫面</h3>
                <button class="install-modal-close">&times;</button>
            </div>
            <div class="install-modal-body">
                <div class="install-step">
                    <div class="step-number">1</div>
                    <div class="step-text">點擊 Safari 底部的分享按鈕 📤</div>
                </div>
                <div class="install-step">
                    <div class="step-number">2</div>
                    <div class="step-text">向下滾動並選擇「加入主畫面」📱</div>
                </div>
                <div class="install-step">
                    <div class="step-number">3</div>
                    <div class="step-text">點擊「新增」完成安裝 ✅</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 關閉模態框
    modal.querySelector('.install-modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// 顯示手動安裝說明
function showManualInstallInstructions(deviceInfo) {
    let instructions = '';
    
    if (deviceInfo.isAndroid) {
        instructions = '請點擊瀏覽器選單（三個點），選擇「安裝應用程式」或「加入主畫面」';
    } else {
        instructions = '請在網址列旁尋找安裝圖示，或查看瀏覽器選單中的安裝選項';
    }
    
    alert(`📱 ${instructions}`);
}

// 監聽 PWA 安裝事件
window.addEventListener('beforeinstallprompt', (e) => {
    // 阻止預設的安裝提示
    e.preventDefault();
    // 快取事件供後續使用
    window.deferredPrompt = e;
});

// 監聽應用程式安裝完成事件
window.addEventListener('appinstalled', () => {
    console.log('PWA 安裝成功');
    // 隱藏安裝按鈕
    const addButtonContainer = document.getElementById('addButtonContainer');
    if (addButtonContainer) {
        addButtonContainer.style.display = 'none';
    }
});

// 檢測是否為 Safari 瀏覽器（舊版相容）
function checkSafariBrowser() {
    // 這個函數保留是為了向後相容，但功能已經整合到 setupAddToHomeButton 中
    setupAddToHomeButton();
}