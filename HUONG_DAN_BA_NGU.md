# Thiệp cưới Việt – Anh – Nhật · v2.1 · 17/11/2026

Bản đề xuất để chủ thiệp duyệt, dựa trên nhánh `main` tại commit `bcfc4892acc243592af4e3ff13ffdff87407b737`. Chưa cập nhật GitHub hoặc triển khai website.

## Xem thiệp

- Chọn **VI**, **EN** hoặc **JA** ở góc trái, kể cả trước khi mở thiệp. Nội dung đổi ngay, không tải lại trang.
- Link dùng `?lang=vi`, `?lang=en`, `?lang=ja`. Ví dụ `?lang=ja&khach=Kiim`.
- Ưu tiên ngôn ngữ trong URL, sau đó lựa chọn đã lưu, cuối cùng là tiếng Việt. Mã tiếng Nhật là `ja`, không phải `jp`.
- Lựa chọn được ghi nhớ nếu trình duyệt cho phép localStorage. Nếu chặn lưu trữ, URL và các nút vẫn hoạt động.
- Đổi ngôn ngữ giữ nguyên tên, lời chúc, lựa chọn RSVP, tên khách và các tham số khác. Lời chúc do khách viết không được dịch tự động.
- Giá trị RSVP gửi đến Google Sheet vẫn là `""`, `Mình sẽ đến dự`, `Rất tiếc, mình không thể đến`, `Mình chưa chắc chắn`. Chỉ nhãn hiển thị được dịch.

## Nội dung và lịch sự kiện

`EVENTS` trong `assets/js/main.js` là dữ liệu sự kiện hiện tại. Giữ nguyên lịch Việt–Anh trên GitHub, sửa tên xã thành Ô Loan theo xác nhận của chủ thiệp và thêm đối tượng `ja`. Mọi giờ trong bản tiếng Nhật đều ghi rõ giờ Việt Nam (UTC+7).

| Sự kiện | Ngày giờ Việt Nam | Tương ứng giờ Nhật |
| --- | --- | --- |
| Lễ Thành hôn | Thứ Bảy 28/11/2026, 09:00 | 28/11/2026, 11:00 JST |
| Đãi tiệc sau Lễ Thành hôn | Thứ Bảy 28/11/2026, 10:30 | 28/11/2026, 12:30 JST |

`EVENTS.at` và giờ hiển thị đã khớp. Bộ đếm dùng cùng timestamp, chuyển sang sự kiện thứ hai tại 09:00 và về 00:00:00:00 sau 10:30. Không áp dụng lại giờ 23–24/11 trong hướng dẫn cũ.

Chủ thiệp đã xác nhận ngày 17/11/2026: giữ cả hai ngày 24 & 28/11 ở đầu thiệp và metadata; thống nhất tên xã Ô Loan trong Việt, Anh và Nhật. Hai sự kiện chi tiết vẫn là ngày 28 theo GitHub; không tự thêm sự kiện ngày 24. Đường dẫn tìm bản đồ nhà trai được tạo từ địa chỉ Ô Loan đã sửa. Bản Anh địa chỉ nhà hàng vẫn giữ nguồn cũ và chưa bổ sung thành phần Trường Xuân.

## Chỉnh nội dung

- `index.html`: nội dung Việt và thuộc tính `data-en`, `data-ja`; biến thể `-html`, `-aria`, `-placeholder`, `-alt`, `-content` cho đúng loại nội dung.
- `assets/js/i18n.js`: chọn ngôn ngữ, ghi nhớ, cập nhật nhãn, metadata, alt ảnh và điều khiển. Không sửa `.value` biểu mẫu khi đổi ngôn ngữ.
- `assets/js/main.js`: sự kiện, lời chào, bộ đếm, lời chúc và thông báo. Nội dung động dùng `tr(vi, en, ja)` hoặc thuộc tính dữ liệu ba ngôn ngữ.
- `assets/css/style.css`: font hệ thống hỗ trợ tiếng Nhật và cách xuống dòng. Không bắt buộc tải thêm font Nhật qua mạng.
- Tên riêng giữ bằng chữ Latin có dấu để tránh suy đoán cách đọc tên người và địa danh.

## Duyệt và triển khai

Xem báo cáo, bảng dịch và test case trong gói bàn giao. Chỉ sau khi chủ thiệp phê duyệt mới cập nhật repository hoặc triển khai. Workflow GitHub Pages tự chạy khi push vào `main`, nên push vào `main` cũng là phát hành.

Gửi lời chúc dùng `no-cors`; trình duyệt không đọc được xác nhận ghi thành công từ Google Sheet. Kiểm thử đã chặn mọi yêu cầu gửi; cần xác nhận thủ công một bản ghi trong Sheet sau khi được chủ thiệp cho phép.
