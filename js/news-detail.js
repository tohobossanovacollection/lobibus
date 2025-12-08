// News Detail Page JavaScript
(function() {
  'use strict';

  // Dữ liệu chi tiết cho từng bài viết
  const newsDetailData = {
    1: {
      title: 'Giảm giá 30% các tuyến đường miền Bắc - Deal hời trong tay',
      badge: 'Khuyến mãi',
      badgeClass: 'bg-danger',
      date: '01/12/2025',
      views: 1234,
      img: 'images/routes/namdinh.png',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong>LobiBus</strong> chính thức triển khai chương trình khuyến mãi đặc biệt <strong style="color: #e74c3c;">giảm giá 30%</strong> cho tất cả các tuyến đường miền Bắc nhân dịp cuối năm 2025. Đây là cơ hội vàng để bạn trải nghiệm dịch vụ xe khách cao cấp với mức giá ưu đãi nhất!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📌 Điều kiện áp dụng khuyến mãi
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li>Thời gian áp dụng: <strong>Từ 01/12/2025 đến 31/12/2025</strong></li>
          <li>Áp dụng cho tất cả các tuyến xuất phát từ Hà Nội đi các tỉnh miền Bắc</li>
          <li>Khách hàng đặt vé online trên website hoặc ứng dụng LobiBus</li>
          <li>Mỗi khách hàng được áp dụng tối đa 5 vé/ngày</li>
          <li>Không áp dụng đồng thời với các chương trình khuyến mãi khác</li>
        </ul>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🚌 Các tuyến đường được áp dụng
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Nam Định</strong>
              <div class="text-muted small">Giá từ 105.000đ</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Lào Cai</strong>
              <div class="text-muted small">Giá từ 175.000đ</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Hải Phòng</strong>
              <div class="text-muted small">Giá từ 70.000đ</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Thái Nguyên</strong>
              <div class="text-muted small">Giá từ 56.000đ</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Ninh Bình</strong>
              <div class="text-muted small">Giá từ 63.000đ</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>Hà Nội - Thanh Hóa</strong>
              <div class="text-muted small">Giá từ 98.000đ</div>
            </div>
          </div>
        </div>
      `,
      tags: ['Khuyến mãi', 'Miền Bắc', 'Giảm giá', 'Đặt vé online']
    },
    2: {
      title: 'Khai trương tuyến mới Hà Nội - Sapa',
      badge: 'Tin công ty',
      badgeClass: 'bg-primary',
      date: '28/11/2025',
      views: 892,
      img: 'images/routes/laocai.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong>LobiBus</strong> chính thức khai trương tuyến xe mới <strong style="color: #3498db;">Hà Nội - Sapa</strong> với dịch vụ cao cấp, mang đến cho hành khách trải nghiệm tuyệt vời nhất trên hành trình khám phá vùng cao Tây Bắc.
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🚌 Thông tin tuyến xe
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li><strong>Lộ trình:</strong> Hà Nội ↔ Sapa (Lào Cai)</li>
          <li><strong>Thời gian di chuyển:</strong> Khoảng 5-6 tiếng</li>
          <li><strong>Loại xe:</strong> Xe giường nằm cao cấp 34 chỗ</li>
          <li><strong>Giá vé:</strong> Từ 250.000đ - 350.000đ</li>
          <li><strong>Tần suất:</strong> 6 chuyến/ngày</li>
        </ul>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          ✨ Tiện ích trên xe
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🛏️ Giường nằm êm ái</strong>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>📶 Wifi miễn phí</strong>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🔌 Ổ cắm sạc điện</strong>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>❄️ Điều hòa mát lạnh</strong>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🧴 Khăn lạnh, nước uống</strong>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🎬 TV giải trí</strong>
            </div>
          </div>
        </div>
      `,
      tags: ['Tin công ty', 'Sapa', 'Tuyến mới', 'Lào Cai']
    },
    3: {
      title: 'Cách đặt vé xe online nhanh chóng',
      badge: 'Hướng dẫn',
      badgeClass: 'bg-success',
      date: '25/11/2025',
      views: 2156,
      img: 'images/routes/danang.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Đặt vé xe online chưa bao giờ dễ dàng đến thế! Với <strong>LobiBus</strong>, bạn chỉ cần vài bước đơn giản là có thể đặt vé xe đi bất cứ đâu một cách nhanh chóng và tiện lợi.
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📝 Hướng dẫn đặt vé từng bước
        </h2>
        <div class="steps-guide">
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">1</div>
            <div>
              <strong>Truy cập website</strong>
              <p class="mb-0 text-muted">Truy cập website lobibus.vn hoặc mở ứng dụng LobiBus trên điện thoại</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">2</div>
            <div>
              <strong>Chọn tuyến đường</strong>
              <p class="mb-0 text-muted">Nhập điểm đi, điểm đến và ngày khởi hành mong muốn</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">3</div>
            <div>
              <strong>Chọn chuyến xe phù hợp</strong>
              <p class="mb-0 text-muted">Xem danh sách các chuyến xe và chọn chuyến phù hợp với lịch trình của bạn</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">4</div>
            <div>
              <strong>Chọn ghế và điền thông tin</strong>
              <p class="mb-0 text-muted">Chọn vị trí ghế ưa thích và điền đầy đủ thông tin hành khách</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">5</div>
            <div>
              <strong>Thanh toán</strong>
              <p class="mb-0 text-muted">Chọn phương thức thanh toán và hoàn tất giao dịch</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">6</div>
            <div>
              <strong>Nhận vé điện tử</strong>
              <p class="mb-0 text-muted">Vé điện tử sẽ được gửi qua Email và SMS ngay sau khi thanh toán thành công</p>
            </div>
          </div>
        </div>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          💳 Phương thức thanh toán hỗ trợ
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li>Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB)</li>
          <li>Ví điện tử (MoMo, ZaloPay, ShopeePay, SmartPay)</li>
          <li>Internet Banking</li>
          <li>Thanh toán tại cửa hàng tiện lợi</li>
        </ul>
      `,
      tags: ['Hướng dẫn', 'Đặt vé', 'Online', 'Thanh toán']
    },
    4: {
      title: 'Top 10 địa điểm du lịch đẹp nhất miền Trung',
      badge: 'Cẩm nang',
      badgeClass: 'bg-warning text-dark',
      date: '20/11/2025',
      views: 3421,
      img: 'images/routes/hue.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Miền Trung Việt Nam là vùng đất hội tụ nhiều danh lam thắng cảnh, di tích lịch sử và bãi biển tuyệt đẹp. Hãy cùng <strong>LobiBus</strong> khám phá <strong style="color: #e67e22;">Top 10 địa điểm du lịch</strong> không thể bỏ qua!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🏖️ Danh sách địa điểm
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>1. Đà Nẵng</strong>
              <p class="mb-0 text-muted small">Thành phố đáng sống với cầu Rồng, bãi biển Mỹ Khê</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>2. Hội An</strong>
              <p class="mb-0 text-muted small">Phố cổ lung linh với đèn lồng và ẩm thực độc đáo</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>3. Huế</strong>
              <p class="mb-0 text-muted small">Cố đô với Đại Nội, lăng tẩm các vua Nguyễn</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>4. Nha Trang</strong>
              <p class="mb-0 text-muted small">Thành phố biển với Vinpearl, đảo Hòn Mun</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>5. Quy Nhơn</strong>
              <p class="mb-0 text-muted small">Biển xanh hoang sơ, Eo Gió, Kỳ Co</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>6. Phong Nha - Kẻ Bàng</strong>
              <p class="mb-0 text-muted small">Di sản thiên nhiên thế giới với hang động kỳ vĩ</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>7. Bà Nà Hills</strong>
              <p class="mb-0 text-muted small">Cầu Vàng nổi tiếng, khí hậu mát mẻ quanh năm</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>8. Đảo Cù Lao Chàm</strong>
              <p class="mb-0 text-muted small">Thiên đường lặn biển ngắm san hô</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>9. Bãi biển Lăng Cô</strong>
              <p class="mb-0 text-muted small">Một trong những vịnh đẹp nhất thế giới</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>10. Tháp Bà Ponagar</strong>
              <p class="mb-0 text-muted small">Di tích văn hóa Chăm Pa cổ kính</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Du lịch', 'Miền Trung', 'Đà Nẵng', 'Huế', 'Hội An']
    },
    5: {
      title: 'Ưu đãi sinh viên: Giảm 20% tất cả tuyến',
      badge: 'Khuyến mãi',
      badgeClass: 'bg-danger',
      date: '15/11/2025',
      views: 1567,
      img: 'images/routes/dalat.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong>LobiBus</strong> đồng hành cùng sinh viên với chương trình ưu đãi đặc biệt: <strong style="color: #e74c3c;">Giảm 20%</strong> giá vé cho tất cả các tuyến đường trên toàn quốc!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🎓 Điều kiện áp dụng
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li>Đối tượng: Sinh viên đang theo học tại các trường Đại học, Cao đẳng, Trung cấp</li>
          <li>Yêu cầu: Xuất trình thẻ sinh viên còn hiệu lực khi lên xe</li>
          <li>Thời gian: Áp dụng từ nay đến hết năm học 2025-2026</li>
          <li>Mức giảm: 20% giá vé gốc</li>
          <li>Áp dụng: Tất cả các tuyến đường của LobiBus</li>
        </ul>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📝 Cách đặt vé sinh viên
        </h2>
        <div class="steps-guide">
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">1</div>
            <div>
              <strong>Đặt vé online</strong>
              <p class="mb-0 text-muted">Đặt vé trên website hoặc ứng dụng như bình thường</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">2</div>
            <div>
              <strong>Chọn loại vé "Sinh viên"</strong>
              <p class="mb-0 text-muted">Tick vào ô "Tôi là sinh viên" khi điền thông tin</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">3</div>
            <div>
              <strong>Mang theo thẻ sinh viên</strong>
              <p class="mb-0 text-muted">Xuất trình thẻ sinh viên cho nhân viên khi lên xe</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Khuyến mãi', 'Sinh viên', 'Giảm giá', 'Ưu đãi']
    },
    6: {
      title: 'Ra mắt xe giường nằm cao cấp 5 sao',
      badge: 'Tin công ty',
      badgeClass: 'bg-primary',
      date: '10/11/2025',
      views: 987,
      img: 'images/routes/nhatrang.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong>LobiBus</strong> tự hào giới thiệu dòng xe giường nằm <strong style="color: #3498db;">cao cấp 5 sao</strong> với tiện nghi hiện đại nhất, mang đến trải nghiệm di chuyển thoải mái như nghỉ dưỡng!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          ⭐ Tiện nghi đẳng cấp 5 sao
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🛏️ Giường nằm VIP</strong>
              <div class="text-muted small">Rộng rãi, nệm êm ái</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>📱 Màn hình cá nhân</strong>
              <div class="text-muted small">Xem phim, nghe nhạc</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🔌 Ổ cắm USB</strong>
              <div class="text-muted small">Sạc điện thoại tiện lợi</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>📶 Wifi tốc độ cao</strong>
              <div class="text-muted small">Kết nối mọi lúc mọi nơi</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🧴 Bộ amenity</strong>
              <div class="text-muted small">Khăn, nước, snack</div>
            </div>
          </div>
          <div class="col-6 col-md-4">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong>🚽 WC trên xe</strong>
              <div class="text-muted small">Sạch sẽ, tiện nghi</div>
            </div>
          </div>
        </div>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🚌 Tuyến đường áp dụng xe 5 sao
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li>Hà Nội - Sài Gòn (TP.HCM)</li>
          <li>Hà Nội - Đà Nẵng</li>
          <li>Sài Gòn - Nha Trang</li>
          <li>Sài Gòn - Đà Lạt</li>
          <li>Hà Nội - Sapa</li>
        </ul>
      `,
      tags: ['Tin công ty', 'Xe mới', '5 sao', 'Cao cấp']
    },
    7: {
      title: 'Khám phá đảo Phú Quốc cuối tuần',
      badge: 'Cẩm nang',
      badgeClass: 'bg-warning text-dark',
      date: '05/11/2025',
      views: 2341,
      img: 'images/routes/kiengiang.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Phú Quốc - hòn đảo ngọc xinh đẹp của Việt Nam là điểm đến lý tưởng cho chuyến du lịch cuối tuần. Hãy cùng <strong>LobiBus</strong> khám phá lịch trình 3 ngày 2 đêm hoàn hảo!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📅 Lịch trình gợi ý
        </h2>
        <div class="steps-guide">
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-warning text-dark" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">1</div>
            <div>
              <strong>Ngày 1: Khám phá Nam Đảo</strong>
              <p class="mb-0 text-muted">Bãi Sao - Hòn Thơm - Cáp treo An Thới - Sunset Sanato</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-warning text-dark" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">2</div>
            <div>
              <strong>Ngày 2: Tham quan Bắc Đảo</strong>
              <p class="mb-0 text-muted">VinWonders - Safari - Bãi Dài - Grand World</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-warning text-dark" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">3</div>
            <div>
              <strong>Ngày 3: Trải nghiệm văn hóa</strong>
              <p class="mb-0 text-muted">Nhà thùng nước mắm - Làng chài Hàm Ninh - Chợ đêm Phú Quốc</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Du lịch', 'Phú Quốc', 'Cuối tuần', 'Biển đảo']
    },
    8: {
      title: 'Flash sale giảm 50% vé xe Sài Gòn - Đà Lạt',
      badge: 'Khuyến mãi',
      badgeClass: 'bg-danger',
      date: '02/11/2025',
      views: 4532,
      img: 'images/routes/dalat.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong style="color: #e74c3c;">⚡ FLASH SALE ⚡</strong> Chỉ trong 24 giờ! <strong>LobiBus</strong> giảm sốc <strong style="color: #e74c3c;">50%</strong> giá vé tuyến Sài Gòn - Đà Lạt. Đừng bỏ lỡ cơ hội vàng này!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🔥 Chi tiết khuyến mãi
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li><strong>Mức giảm:</strong> 50% giá vé gốc</li>
          <li><strong>Giá sau giảm:</strong> Chỉ từ 99.000đ/vé</li>
          <li><strong>Thời gian:</strong> Trong 24 giờ từ 00:00 - 23:59</li>
          <li><strong>Số lượng:</strong> Giới hạn 500 vé</li>
          <li><strong>Áp dụng:</strong> Tất cả các chuyến trong tháng 11/2025</li>
        </ul>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🎯 Lưu ý quan trọng
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li>Vé khuyến mãi không được đổi/trả</li>
          <li>Mỗi khách hàng tối đa 4 vé</li>
          <li>Thanh toán online trong 15 phút sau khi đặt</li>
          <li>Không áp dụng cùng các khuyến mãi khác</li>
        </ul>
      `,
      tags: ['Flash sale', 'Đà Lạt', 'Giảm 50%', 'Khuyến mãi']
    },
    9: {
      title: 'Quy trình đổi trả vé dễ dàng',
      badge: 'Hướng dẫn',
      badgeClass: 'bg-success',
      date: '30/10/2025',
      views: 1876,
      img: 'images/routes/hue.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Bạn cần đổi hoặc trả vé xe? Đừng lo lắng! <strong>LobiBus</strong> hỗ trợ quy trình đổi trả vé đơn giản, nhanh chóng và minh bạch nhất.
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📋 Chính sách đổi trả vé
        </h2>
        <ul style="line-height: 2; color: #444;">
          <li><strong>Trước 24 giờ:</strong> Hoàn 90% giá vé</li>
          <li><strong>Từ 12-24 giờ:</strong> Hoàn 70% giá vé</li>
          <li><strong>Từ 4-12 giờ:</strong> Hoàn 50% giá vé</li>
          <li><strong>Dưới 4 giờ:</strong> Không hoàn vé</li>
        </ul>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📝 Các bước đổi/trả vé
        </h2>
        <div class="steps-guide">
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">1</div>
            <div>
              <strong>Truy cập trang Tra cứu vé</strong>
              <p class="mb-0 text-muted">Vào mục "Tra cứu mã đặt vé" trên website</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">2</div>
            <div>
              <strong>Nhập mã đặt vé</strong>
              <p class="mb-0 text-muted">Điền mã vé và số điện thoại đã đặt</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">3</div>
            <div>
              <strong>Chọn Đổi vé hoặc Hủy vé</strong>
              <p class="mb-0 text-muted">Làm theo hướng dẫn để hoàn tất</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">4</div>
            <div>
              <strong>Nhận hoàn tiền</strong>
              <p class="mb-0 text-muted">Tiền sẽ được hoàn về tài khoản trong 3-5 ngày làm việc</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Hướng dẫn', 'Đổi vé', 'Trả vé', 'Hoàn tiền']
    },
    10: {
      title: 'LobiBus đạt giải thưởng dịch vụ xuất sắc',
      badge: 'Tin công ty',
      badgeClass: 'bg-primary',
      date: '28/10/2025',
      views: 756,
      img: 'images/routes/danang.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          <strong>LobiBus</strong> vinh dự được trao tặng giải thưởng <strong style="color: #3498db;">"Dịch vụ vận tải hành khách xuất sắc nhất năm 2025"</strong> tại Lễ trao giải Thương hiệu Việt Nam.
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🏆 Về giải thưởng
        </h2>
        <p style="line-height: 1.8; color: #444;">
          Giải thưởng được trao bởi Hiệp hội Vận tải Việt Nam, ghi nhận những đóng góp của LobiBus trong việc nâng cao chất lượng dịch vụ vận tải hành khách đường bộ.
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          📊 Thành tựu nổi bật
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-6 col-md-3">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong style="font-size: 1.5rem; color: #27ae60;">5M+</strong>
              <div class="text-muted small">Hành khách phục vụ</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong style="font-size: 1.5rem; color: #27ae60;">200+</strong>
              <div class="text-muted small">Tuyến đường</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong style="font-size: 1.5rem; color: #27ae60;">98%</strong>
              <div class="text-muted small">Khách hài lòng</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="route-item p-3 bg-light rounded text-center">
              <strong style="font-size: 1.5rem; color: #27ae60;">50+</strong>
              <div class="text-muted small">Đối tác hãng xe</div>
            </div>
          </div>
        </div>
      `,
      tags: ['Tin công ty', 'Giải thưởng', 'Thành tựu']
    },
    11: {
      title: 'Những món ăn đặc sản miền Tây',
      badge: 'Cẩm nang',
      badgeClass: 'bg-warning text-dark',
      date: '25/10/2025',
      views: 2987,
      img: 'images/routes/cantho.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Miền Tây Nam Bộ nổi tiếng với ẩm thực phong phú, đậm chất sông nước. Hãy cùng <strong>LobiBus</strong> điểm qua những món ăn đặc sản không thể bỏ qua!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🍜 Top món ăn phải thử
        </h2>
        <div class="row g-3 mb-4">
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>1. Hủ tiếu Mỹ Tho</strong>
              <p class="mb-0 text-muted small">Sợi hủ tiếu dai, nước dùng ngọt thanh</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>2. Lẩu mắm</strong>
              <p class="mb-0 text-muted small">Đặc sản Cần Thơ với vị mắm đậm đà</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>3. Bánh canh Bến Có</strong>
              <p class="mb-0 text-muted small">Sợi bánh mềm, nước dùng sánh</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>4. Cá lóc nướng trui</strong>
              <p class="mb-0 text-muted small">Thơm nức, ăn kèm rau rừng</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>5. Nem Lai Vung</strong>
              <p class="mb-0 text-muted small">Nem chua nổi tiếng Đồng Tháp</p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="route-item p-3 bg-light rounded">
              <strong>6. Bánh pía Sóc Trăng</strong>
              <p class="mb-0 text-muted small">Nhân đậu xanh sầu riêng</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Ẩm thực', 'Miền Tây', 'Đặc sản', 'Du lịch']
    },
    12: {
      title: 'Tặng voucher 100k cho khách hàng mới',
      badge: 'Khuyến mãi',
      badgeClass: 'bg-danger',
      date: '20/10/2025',
      views: 3654,
      img: 'images/routes/nhatrang.jpg',
      content: `
        <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
          Chào mừng bạn đến với <strong>LobiBus</strong>! Đăng ký tài khoản mới ngay hôm nay để nhận <strong style="color: #e74c3c;">voucher 100.000đ</strong> cho chuyến đi đầu tiên của bạn!
        </p>

        <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
          🎁 Cách nhận voucher
        </h2>
        <div class="steps-guide">
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">1</div>
            <div>
              <strong>Đăng ký tài khoản</strong>
              <p class="mb-0 text-muted">Tạo tài khoản mới trên website hoặc ứng dụng</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">2</div>
            <div>
              <strong>Xác thực số điện thoại</strong>
              <p class="mb-0 text-muted">Nhập mã OTP được gửi về điện thoại</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">3</div>
            <div>
              <strong>Nhận voucher</strong>
              <p class="mb-0 text-muted">Voucher 100k sẽ tự động được thêm vào tài khoản</p>
            </div>
          </div>
          <div class="step-item d-flex gap-3 mb-3">
            <div class="step-number d-flex align-items-center justify-content-center rounded-circle bg-danger text-white" style="width: 36px; height: 36px; flex-shrink: 0; font-weight: 600;">4</div>
            <div>
              <strong>Sử dụng khi đặt vé</strong>
              <p class="mb-0 text-muted">Áp dụng voucher tại bước thanh toán</p>
            </div>
          </div>
        </div>
      `,
      tags: ['Khuyến mãi', 'Voucher', 'Khách hàng mới', 'Đăng ký']
    }
  };

  // Thêm nội dung mặc định cho các bài viết chưa có chi tiết
  function getDefaultContent(news) {
    return `
      <p class="lead" style="font-size: 1.1rem; color: #333; line-height: 1.8;">
        ${news.desc}
      </p>

      <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        📌 Thông tin chi tiết
      </h2>
      <p style="line-height: 1.8; color: #444;">
        Nội dung chi tiết đang được cập nhật. Vui lòng quay lại sau hoặc liên hệ hotline để biết thêm thông tin.
      </p>

      <h2 style="color: #27ae60; font-size: 1.4rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem;">
        📞 Liên hệ hỗ trợ
      </h2>
      <ul style="line-height: 2; color: #444;">
        <li><strong>Hotline:</strong> 0936 363 363 (24/7)</li>
        <li><strong>Email:</strong> support@lobibus.vn</li>
        <li><strong>Fanpage:</strong> facebook.com/lobibus</li>
      </ul>
    `;
  }

  // Lấy ID từ URL
  function getNewsIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
  }

  // Lấy dữ liệu tin tức từ localStorage
  function getNewsData() {
    const newsData = localStorage.getItem('newsData');
    return newsData ? JSON.parse(newsData) : [];
  }

  // Lấy tin liên quan (cùng category, khác id)
  function getRelatedNews(currentId, category, limit = 4) {
    const allNews = getNewsData();
    return allNews
      .filter(item => item.id !== currentId)
      .slice(0, limit);
  }

  // Render trang chi tiết
  function renderNewsDetail() {
    const newsId = getNewsIdFromUrl();
    const allNews = getNewsData();
    const newsItem = allNews.find(item => item.id === newsId);
    
    if (!newsItem) {
      // Nếu không tìm thấy, redirect về trang tin tức
      window.location.href = 'news.html';
      return;
    }

    // Lấy nội dung chi tiết
    const detailData = newsDetailData[newsId];
    
    // Cập nhật title trang
    document.title = `${newsItem.title} | LobiBus`;

    // Cập nhật breadcrumb
    const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
    if (breadcrumbActive) {
      breadcrumbActive.textContent = newsItem.title.length > 50 
        ? newsItem.title.substring(0, 50) + '...' 
        : newsItem.title;
    }

    // Cập nhật badge
    const badge = document.getElementById('article-badge');
    if (badge) {
      badge.className = `badge ${newsItem.badgeClass} mb-3`;
      badge.style.cssText = 'font-size: 0.85rem; padding: 0.5rem 1rem;';
      badge.textContent = newsItem.badge;
    }

    // Cập nhật title
    const title = document.getElementById('article-title');
    if (title) {
      title.textContent = detailData ? detailData.title : newsItem.title;
    }

    // Cập nhật date
    const date = document.getElementById('article-date');
    if (date) {
      date.textContent = newsItem.date;
    }

    // Cập nhật views
    const views = document.getElementById('article-views');
    if (views) {
      views.textContent = (newsItem.views || Math.floor(Math.random() * 3000) + 500).toLocaleString() + ' lượt xem';
    }

    // Cập nhật hình ảnh
    const img = document.getElementById('article-image');
    if (img) {
      img.src = newsItem.img;
      img.alt = newsItem.title;
    }

    // Cập nhật nội dung
    const content = document.getElementById('article-content');
    if (content) {
      content.innerHTML = detailData ? detailData.content : getDefaultContent(newsItem);
    }

    // Cập nhật tags
    const tagsContainer = document.getElementById('article-tags');
    if (tagsContainer && detailData && detailData.tags) {
      tagsContainer.innerHTML = detailData.tags.map(tag => 
        `<a href="#" class="badge bg-light text-dark me-2 text-decoration-none">${tag}</a>`
      ).join('');
    }

    // Render tin liên quan
    renderRelatedNews(newsId, newsItem.category);
  }

  // Render tin liên quan
  function renderRelatedNews(currentId, category) {
    const relatedNews = getRelatedNews(currentId, category);
    const container = document.getElementById('related-news');
    
    if (container && relatedNews.length > 0) {
      container.innerHTML = relatedNews.map((item, index) => `
        <div class="related-news-item d-flex gap-3 p-3 ${index < relatedNews.length - 1 ? 'border-bottom' : ''}">
          <img src="${item.img}" alt="Tin tức" class="rounded" style="width: 80px; height: 60px; object-fit: cover;">
          <div>
            <h6 class="mb-1" style="font-size: 0.9rem; line-height: 1.4;">
              <a href="news-detail.html?id=${item.id}" class="text-decoration-none text-dark">${item.title}</a>
            </h6>
            <small class="text-muted">${item.date}</small>
          </div>
        </div>
      `).join('');
    }
  }

  // Khởi chạy khi DOM loaded
  document.addEventListener('DOMContentLoaded', renderNewsDetail);

})();
