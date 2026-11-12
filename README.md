# Sổ tay Chuyển đổi số – Phường Ô Chợ Dừa

Thư mục này là 1 website tĩnh (không cần máy chủ riêng).

- `index.html` – giao diện sách lật
- `content.js` – TOÀN BỘ chữ trong sách + lời đọc (sửa ở đây). Có `fanpageUrl`: dán link Fanpage để hiện nút + mã QR.
- `audio/` – bỏ file `trang-01.mp3` … `trang-20.mp3` vào đây (xem kich-ban-voice-over.md). Trang nào chưa có file thì nút hiện "Chưa có audio".
- `assets/logo.png` – logo phường

## Đưa lên mạng để gắn QR
Kéo thả cả thư mục lên Netlify Drop (app.netlify.com/drop) hoặc Cloudflare Pages / GitHub Pages → được 1 đường link → tạo mã QR từ link đó.
Mở bằng cách bấm đúp `index.html` trên máy cũng chạy được (nhưng audio có thể bị chặn, nên kiểm tra trên link thật).
