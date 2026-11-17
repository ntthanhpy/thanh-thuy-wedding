# Sửa giao diện tiếng Nhật · v2.2 · 17/11/2026

Chỉ cần thay **index.html** ở thư mục gốc của repository. Giữ nguyên thư mục assets và những file còn lại.

## Nguyên nhân

Trang đã dùng JavaScript hỗ trợ ja và CSS tiếng Nhật nhưng index.html vẫn là bản Việt–Anh. Kiểm tra giao diện thật ?lang=ja phát hiện 46 thuộc tính dịch thiếu tiếng Nhật và không có nút JA. Sự kiện và lời chào là nội dung động nên đã hiển thị tiếng Nhật.

## Nội dung bổ sung

- Nút VI | EN | JA.
- Lời nhắc mở thiệp, lời mời, thông tin hai gia đình, chú rể/cô dâu, album, lời cảm ơn.
- Lời chúc, placeholder, các nhãn lựa chọn RSVP, nút gửi.
- Hộp quà, nút copy/đóng, mô tả QR, điều khiển ảnh.
- Tiêu đề bộ đếm, ngày/giờ/phút/giây, title và metadata Nhật.

Tên người, địa danh và LDS là tên riêng, được giữ nguyên. Ngày 24 & 28/11 và xã Ô Loan giữ theo xác nhận trước đó.

## Kiểm tra bảo toàn

Khi bỏ các thuộc tính dịch mới và nút JA, file khớp từng byte với index.html trên main tại commit eab899167ab635121cd0b2181f34d1a2766c0b96. Không thay nội dung Việt/Anh gốc, các đường dẫn assets, ảnh/nhạc, số tài khoản, tên/id/value biểu mẫu hoặc bố cục. JavaScript và CSS không thay đổi. Các giá trị RSVP gửi Sheet giữ nguyên tiếng Việt.

Trước sửa: 46 thuộc tính dịch thiếu Nhật. Sau sửa: 0 thuộc tính dịch thiếu Nhật. Bản sửa đã được kiểm tra trong trình duyệt với các file JavaScript/CSS đang có trên GitHub.

## Áp dụng

Giải nén và dùng file index.html; không upload file ZIP vào website. Thay đúng file gốc, không đặt trong thư mục site hay index-fix. Theo phạm vi đã chốt trước đó, có thể áp dụng lên nhánh test trước. Sau khi phiên bản đó được triển khai, tải lại trang và kiểm tra ?lang=ja. Chỉ Ctrl+F5 không thể bổ sung những bản dịch chưa có trong HTML trên GitHub.

Bản bàn giao này chưa được tải lên GitHub hoặc triển khai. Quyền tải tệp lên GitHub đã bị từ chối trong lần thao tác trước; chưa thử lại.
