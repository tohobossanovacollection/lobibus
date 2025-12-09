// Bảng tra cứu thông tin tuyến xe (lấy từ LichTrinh.html)
// Key: chuẩn hóa "từ|đến" (lowercase, bỏ dấu)
const ROUTE_DATA = {
  // Hà Nội
  'hanoi|danang': { distance: '765 km', duration: '14 giờ' },
  'hanoi|haiphong': { distance: '120 km', duration: '2 giờ 30 phút' },
  'hanoi|hue': { distance: '670 km', duration: '12 giờ' },
  'hanoi|laocai': { distance: '300 km', duration: '6 giờ' },
  'hanoi|namdinh': { distance: '90 km', duration: '2 giờ' },
  'hanoi|thaibinh': { distance: '150 km', duration: '3 giờ' },
  'hanoi|bacninh': { distance: '150 km', duration: '3 giờ' },
  'hanoi|thaiNguyen': { distance: '100 km', duration: '2 giờ' },
  'hanoi|nghean': { distance: '250 km', duration: '5 giờ' },
  'hanoi|haiduong': { distance: '60 km', duration: '1 giờ 30 phút' },
  'hanoi|hungyen': { distance: '40 km', duration: '1 giờ' },
  'hanoi|thanhhoa': { distance: '150 km', duration: '3 giờ' },
  'hanoi|kiengiang': { distance: '1200 km', duration: '24 giờ' },
  'hanoi|longan': { distance: '1000 km', duration: '20 giờ' },
  'hanoi|ninhbinh': { distance: '90 km', duration: '2 giờ' },
  
  // TP.HCM
  'tphcm|dalat': { distance: '308 km', duration: '7 giờ' },
  'thanhphohochiminh|dalat': { distance: '308 km', duration: '7 giờ' },
  'tphcm|nhatrang': { distance: '430 km', duration: '9 giờ' },
  'thanhphohochiminh|nhatrang': { distance: '430 km', duration: '9 giờ' },
  'tphcm|phanthiet': { distance: '200 km', duration: '4 giờ' },
  'thanhphohochiminh|phanthiet': { distance: '200 km', duration: '4 giờ' },
  'tphcm|vungtau': { distance: '120 km', duration: '2 giờ 30 phút' },
  'thanhphohochiminh|vungtau': { distance: '120 km', duration: '2 giờ 30 phút' },
  'tphcm|bienhoa': { distance: '30 km', duration: '1 giờ' },
  'thanhphohochiminh|bienhoa': { distance: '30 km', duration: '1 giờ' },
  'tphcm|dongnai': { distance: '40 km', duration: '1 giờ' },
  'thanhphohochiminh|dongnai': { distance: '40 km', duration: '1 giờ' },
  'tphcm|tayninh': { distance: '90 km', duration: '2 giờ' },
  'thanhphohochiminh|tayninh': { distance: '90 km', duration: '2 giờ' },
  'tphcm|cantho': { distance: '170 km', duration: '3 giờ 30 phút' },
  'thanhphohochiminh|cantho': { distance: '170 km', duration: '3 giờ 30 phút' },
  'tphcm|baria': { distance: '150 km', duration: '3 giờ' },
  'thanhphohochiminh|baria': { distance: '150 km', duration: '3 giờ' },
  'tphcm|soctrang': { distance: '300 km', duration: '6 giờ' },
  'thanhphohochiminh|soctrang': { distance: '300 km', duration: '6 giờ' },
  'tphcm|haugiang': { distance: '350 km', duration: '8 giờ' },
  'thanhphohochiminh|haugiang': { distance: '350 km', duration: '8 giờ' },
  'tphcm|travinh': { distance: '250 km', duration: '5 giờ' },
  'thanhphohochiminh|travinh': { distance: '250 km', duration: '5 giờ' },
  'tphcm|binhduong': { distance: '50 km', duration: '1 giờ 15 phút' },
  'thanhphohochiminh|binhduong': { distance: '50 km', duration: '1 giờ 15 phút' },
  
  // Đà Nẵng
  'danang|quangngai': { distance: '130 km', duration: '3 giờ' },
  'danang|hoian': { distance: '30 km', duration: '1 giờ' },
  'danang|tamky': { distance: '70 km', duration: '1 giờ 30 phút' },
  'danang|daklak': { distance: '350 km', duration: '8 giờ' },
  'danang|phuyen': { distance: '300 km', duration: '6 giờ' },
  'danang|kontum': { distance: '400 km', duration: '9 giờ' },
  'danang|binhdinh': { distance: '250 km', duration: '5 giờ' },
  'danang|gialai': { distance: '500 km', duration: '11 giờ' },
  'danang|soctrang': { distance: '300 km', duration: '6 giờ' },
  'danang|haugiang': { distance: '350 km', duration: '8 giờ' },
  'danang|bentre': { distance: '200 km', duration: '4 giờ' },
  'danang|phanrang': { distance: '600 km', duration: '13 giờ' },
  
  // Cần Thơ
  'cantho|camau': { distance: '180 km', duration: '4 giờ' },
  
  // Huế
  'hue|quangtri': { distance: '100 km', duration: '2 giờ' },
  
  // Lào Cai
  'laocai|yenbai': { distance: '150 km', duration: '3 giờ' },
  
  // Cao Bằng
  'caobang|backan': { distance: '120 km', duration: '2 giờ 30 phút' },
  
  // Quảng Ninh
  'quangninh|haiduong': { distance: '80 km', duration: '1 giờ 45 phút' },
  
  // Thanh Hóa
  'thanhhoa|nghean': { distance: '140 km', duration: '3 giờ' },
  
  // Hải Phòng
  'haiphong|thaibinh': { distance: '70 km', duration: '1 giờ 30 phút' },
  
  // Bắc Ninh
  'bacninh|bacgiang': { distance: '50 km', duration: '1 giờ' },
  
  // Lạng Sơn
  'langson|caobang': { distance: '180 km', duration: '4 giờ' }
};

// Hàm chuẩn hóa tên địa điểm
function normalizeLocationName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/tp\.?\s*hcm|tp\.?\s*ho\s*chi\s*minh|thanh\s*pho\s*ho\s*chi\s*minh/gi, 'tphcm')
    .replace(/\s+/g, '')
    .trim();
}

// Hàm tra cứu thông tin tuyến
function getRouteInfo(from, to) {
  const fromNorm = normalizeLocationName(from);
  const toNorm = normalizeLocationName(to);
  const key = `${fromNorm}|${toNorm}`;
  
  const data = ROUTE_DATA[key];
  if (data) {
    return {
      distance: data.distance,
      duration: data.duration,
      found: true
    };
  }
  
  // Fallback khi không tìm thấy
  return {
    distance: '350 km',
    duration: '8 giờ',
    found: false
  };
}

// Export cho sử dụng trong các file khác
if (typeof window !== 'undefined') {
  window.getRouteInfo = getRouteInfo;
  window.normalizeLocationName = normalizeLocationName;
}
