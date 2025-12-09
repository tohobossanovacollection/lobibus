// Hàm chuẩn hóa tên địa điểm để so sánh
function normalizeName(name) {
    if (!name) return '';
    
    return name.trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/đ/g, 'd')
        .replace(/tp\.hcm/gi, 'tphcm')
        .replace(/tp\s*hcm/gi, 'tphcm')
        .replace(/tp\s*ho\s*chi\s*minh/gi, 'tphcm')
        .replace(/thanh\s*pho\s*ho\s*chi\s*minh/gi, 'tphcm')
        .replace(/\s+/g, '');
}

// Hàm lọc chuyến đi
function filterTrips() {
    const fromInput = document.getElementById('from').value.trim();
    const toInput = document.getElementById('to').value.trim();
    
    const fromValue = normalizeName(fromInput);
    const toValue = normalizeName(toInput);
    
    const tripItems = document.querySelectorAll('.trip-item');
    const tripSection = document.querySelector('.trip-section .card');
    let foundCount = 0;
    
    // ẨN TẤT CẢ CHUYẾN ĐI TRƯỚC
    tripItems.forEach(item => {
        item.style.display = 'none';
        item.style.visibility = 'hidden';
        item.classList.add('hidden');
    });
    
    // CHỈ HIỆN CHUYẾN ĐI KHỚP
    tripItems.forEach(item => {
        const routeText = item.querySelector('.trip-route').textContent;
        const parts = routeText.split('→');
        
        if (parts.length === 2) {
            const fromRoute = normalizeName(parts[0]);
            const toRoute = normalizeName(parts[1]);
            
            if (!fromValue && !toValue) {
                item.style.display = 'block';
                item.style.visibility = 'visible';
                item.classList.remove('hidden');
                foundCount++;
                return;
            }
            
            // Kiểm tra điều kiện khớp
            const matchesFrom = !fromValue || fromRoute.includes(fromValue) || fromValue.includes(fromRoute);
            const matchesTo = !toValue || toRoute.includes(toValue) || toValue.includes(toRoute);
            
            if (matchesFrom && matchesTo) {
                item.style.display = 'block';
                item.style.visibility = 'visible';
                item.classList.remove('hidden');
                foundCount++;
                console.log('✓ Hiển thị:', routeText);
            } else {
                console.log('✗ Ẩn:', routeText);
            }
        }
    });
    
    // Hiển thị thông báo nếu không tìm thấy
    if (foundCount === 0 && (fromValue || toValue)) {
        // Xóa thông báo cũ nếu có
        const oldMessage = tripSection.querySelector('.empty-message');
        if (oldMessage) {
            oldMessage.remove();
        }
        
        // Tạo thông báo mới
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.style.cssText = 'text-align: center; padding: 40px 20px;';
        emptyMessage.innerHTML = `
            <div style="font-size: 3rem;">😔</div>
            <h4>Không tìm thấy chuyến xe phù hợp</h4>
            <p>Không có chuyến xe nào từ <strong>${fromInput || '(tất cả)'}</strong> đến <strong>${toInput || '(tất cả)'}</strong>. Vui lòng chọn địa điểm khác.</p>
        `;
        tripSection.appendChild(emptyMessage);
    } else {
        // Xóa thông báo nếu có kết quả
        const oldMessage = tripSection.querySelector('.empty-message');
        if (oldMessage) {
            oldMessage.remove();
        }
    }
    
    // Hiển thị kết quả
    console.log('================');
    console.log('Tìm kiếm:', fromInput || '(tất cả)', '→', toInput || '(tất cả)');
    console.log('Tìm thấy:', foundCount, 'chuyến đi');
    console.log('================');
}

// Xử lý khi click vào nút "Đặt vé"
function handleBookTicket(event) {
    const button = event.target;
    const tripItem = button.closest('.trip-item');
    
    if (tripItem) {
        const route = tripItem.querySelector('.trip-route').textContent.trim();
        const distance = tripItem.querySelector('.trip-distance').textContent.trim();
        const duration = tripItem.querySelector('.trip-duration').textContent.trim();
        
        // Chuyển sang trang chi tiết - ChiTietTuyen sẽ tự động tạo đa dạng loại xe
        const params = new URLSearchParams({
            route: route,
            distance: distance,
            duration: duration
        });
        
        window.location.href = `ChiTietTuyen.html?${params.toString()}`;
    }
}

// Xử lý sự kiện khi submit form
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    
    // Thêm ảnh minh họa phía trên cho mỗi chuyến đi (nếu chưa có)
    (function ensureTripThumbnails() {
        const items = document.querySelectorAll('.trip-item');
        items.forEach(item => {
                // Helper: build slug from route text "A → B" => "b" (chỉ lấy điểm đến, normalized)
                const getRouteSlug = () => {
                    const routeEl = item.querySelector('.trip-route');
                    const routeText = routeEl ? routeEl.textContent.trim() : '';
                    if (!routeText) return '';
                    const parts = routeText.split('→');
                    if (parts.length < 2) return normalizeName(routeText);
                    const to = normalizeName(parts[1]);
                    return to;
                };

            // Ảnh minh họa (nếu chưa có)
            if (!item.querySelector('.trip-thumb')) {
                const routeEl = item.querySelector('.trip-route');
                const routeText = routeEl ? routeEl.textContent.trim() : 'Chuyến xe';
                const thumb = document.createElement('div');
                thumb.className = 'trip-thumb';
                const img = document.createElement('img');
                    img.src = 'images/Screenshot (5).png';
                    img.alt = `Ảnh minh họa - ${routeText}`;
                thumb.appendChild(img);
                item.insertBefore(thumb, item.firstChild);
                }

                // Cập nhật ảnh theo tuyến với fallback
                const imgEl = item.querySelector('.trip-thumb img');
                if (imgEl) {
                    const slug = getRouteSlug();
                    const fallback = 'images/Screenshot (5).png';
                    const candidates = slug ? [
                        `images/routes/${slug}.jpg`,
                        `images/routes/${slug}.png`,
                        `images/routes/${slug}.webp`
                    ] : [];
                    let idx = 0;
                    const tryNext = () => {
                        if (idx < candidates.length) {
                            imgEl.onerror = tryNext;
                            imgEl.src = candidates[idx++];
                        } else {
                            imgEl.onerror = null;
                            imgEl.src = fallback;
                        }
                    };
                    tryNext();
            }

            // Tạo lớp phủ nội dung trên ảnh
            if (!item.querySelector('.trip-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'trip-overlay';

                const route = item.querySelector('.trip-route');
                const type = item.querySelector('.trip-type');
                const distance = item.querySelector('.trip-distance');
                const duration = item.querySelector('.trip-duration');
                const oldAction = item.querySelector('.trip-action');

                // Di chuyển phần tiêu đề tuyến vào overlay và áp dụng style
                if (route) {
                    route.classList.add('trip-title');
                    overlay.appendChild(route);
                } else {
                    const fallback = document.createElement('div');
                    fallback.className = 'trip-title';
                    fallback.textContent = 'Tuyến xe';
                    overlay.appendChild(fallback);
                }

                // Gom các thông tin meta vào một hàng; giữ nguyên các phần tử gốc để logic khác vẫn hoạt động
                const meta = document.createElement('div');
                meta.className = 'trip-meta';

                const addWithDot = (el) => {
                    if (!el) return;
                    if (meta.childNodes.length) {
                        const dot = document.createElement('span');
                        dot.className = 'dot';
                        dot.textContent = '•';
                        meta.appendChild(dot);
                    }
                    meta.appendChild(el);
                };

                addWithDot(type);
                addWithDot(distance);
                addWithDot(duration);

                overlay.appendChild(meta);

                // Nút CTA mũi tên (ẩn, chỉ hiện khi hover)
                const cta = document.createElement('button');
                cta.type = 'button';
                cta.className = 'trip-cta';
                cta.setAttribute('aria-label', 'Xem chi tiết');
                cta.textContent = '➔';
                overlay.appendChild(cta);

                // Thêm overlay vào item
                item.appendChild(overlay);

                // Xóa/ẩn khu vực nút cũ để tránh trùng lặp
                if (oldAction) oldAction.remove();

                // Gắn sự kiện đặt vé cho CTA mũi tên
                cta.addEventListener('click', handleBookTicket);
            }
        });
    })();
    
    // Chỉ lọc khi submit form (bấm nút Tìm kiếm)
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted - Bắt đầu tìm kiếm...');
            filterTrips();
        });
    }
    
    // Hiển thị tất cả chuyến đi khi tải trang
    const tripItems = document.querySelectorAll('.trip-item');
    tripItems.forEach(item => { item.style.display = 'block'; });
    console.log('Đã tải', tripItems.length, 'chuyến đi');
    
    // Gắn sự kiện cho tất cả nút "Đặt vé"
    const bookButtons = document.querySelectorAll('.trip-action .btn, .trip-cta');
    bookButtons.forEach(button => {
        button.addEventListener('click', handleBookTicket);
    });
    console.log('Đã gắn sự kiện cho', bookButtons.length, 'nút đặt vé');
});