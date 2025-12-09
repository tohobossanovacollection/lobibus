// Booking Page Functionality
(function() {
  const roundTripRadio = document.getElementById('roundTrip');
  const returnDateCol = document.getElementById('returnDateCol');
  const bookingForm = document.getElementById('bookingForm');
  const departDateInput = document.getElementById('departDate');

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  departDateInput.min = today;

  // Show/hide return date field based on trip type
  function updateReturnDateVisibility() {
    if (roundTripRadio.checked) {
      returnDateCol.style.display = 'flex';
      document.getElementById('returnDate').required = true;
    } else {
      returnDateCol.style.display = 'none';
      document.getElementById('returnDate').required = false;
    }
  }

  // Listen for trip type changes
  document.querySelectorAll('input[name="tripType"]').forEach(radio => {
    radio.addEventListener('change', updateReturnDateVisibility);
  });

  // Handle form submission: redirect to ChiTietTuyen with query params
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departDate = document.getElementById('departDate').value;
    const seats = document.getElementById('seats').value;
    
    if (!from || !to || !departDate || !seats) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    
    // Lấy text hiển thị (có dấu) thay vì value
    const fromEl = document.getElementById('from');
    const toEl = document.getElementById('to');
    const fromText = fromEl.options[fromEl.selectedIndex].text;
    const toText = toEl.options[toEl.selectedIndex].text;
    
    // Tra cứu distance và duration thực tế từ bảng dữ liệu
    const routeInfo = window.getRouteInfo ? window.getRouteInfo(fromText, toText) : { found: false };
    
    // Nếu không tìm thấy tuyến trong hệ thống, hiển thị thông báo đẹp
    if (!routeInfo.found) {
      showNoRouteMessage(fromText, toText);
      return;
    }
    
    // ChiTietTuyen sẽ tự động tạo đa dạng loại xe cho tuyến
    const params = new URLSearchParams({
      route: `${fromText} → ${toText}`,
      from: fromText,
      to: toText,
      departDate,
      seats,
      tripType,
      distance: routeInfo.distance,
      duration: routeInfo.duration
    });

    if (tripType === 'roundtrip') {
      const returnDate = document.getElementById('returnDate').value;
      if (!returnDate) {
        alert('Vui lòng chọn ngày trở về');
        return;
      }
      params.append('returnDate', returnDate);
    }

    window.location.href = `ChiTietTuyen.html?${params.toString()}`;
  });

  // Set return date minimum to be at least 1 day after departure
  departDateInput.addEventListener('change', function() {
    const returnDateInput = document.getElementById('returnDate');
    const nextDay = new Date(this.value);
    nextDay.setDate(nextDay.getDate() + 1);
    returnDateInput.min = nextDay.toISOString().split('T')[0];
  });

  // Initialize
  updateReturnDateVisibility();

  // Hàm hiển thị thông báo không có tuyến
  function showNoRouteMessage(fromText, toText) {
    // Xóa thông báo cũ nếu có
    const oldMsg = document.getElementById('noRouteMessage');
    if (oldMsg) oldMsg.remove();

    // Tạo thông báo mới
    const messageDiv = document.createElement('div');
    messageDiv.id = 'noRouteMessage';
    messageDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      z-index: 9999;
      max-width: 90%;
      width: 480px;
      text-align: center;
    `;
    messageDiv.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">😔</div>
      <h3 style="color: #2c3e50; margin-bottom: 1rem; font-weight: 700;">Rất tiếc!</h3>
      <p style="color: #5a6c7d; font-size: 1.05rem; margin-bottom: 1.5rem; line-height: 1.6;">
        Hiện tại chưa có chuyến xe từ <strong style="color: #27ae60;">${fromText}</strong> 
        đến <strong style="color: #27ae60;">${toText}</strong>.
      </p>
      <button onclick="document.getElementById('noRouteMessage').remove(); document.getElementById('noRouteOverlay').remove();" 
        style="background: #27ae60; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">
        Đã hiểu
      </button>
    `;

    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.id = 'noRouteOverlay';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 9998;
    `;
    overlay.onclick = () => {
      messageDiv.remove();
      overlay.remove();
    };

    document.body.appendChild(overlay);
    document.body.appendChild(messageDiv);
  }
})();
