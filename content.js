// Nội dung sổ tay: sửa chữ ở đây, không cần động vào index.html
window.CONFIG = {
  title: "Sổ tay Chuyển đổi số",
  ward: "Phường Ô Chợ Dừa",
  fanpageName: "Phường Ô Chợ Dừa - TP Hà Nội",
  fanpageUrl: "https://www.facebook.com/profile.php?id=61577989194421", // dán link Fanpage vào đây để hiện nút bấm + mã QR
  fanpagePoliceWardName: "Công an phường Ô Chợ Dừa TP Hà Nội",
  policeWardUrl: "https://www.facebook.com/profile.php?id=61581559125603",
  hotlinePolice: "02438516954",
  fanpageMedicalWardName: "Trạm y tế phường Ô Chợ Dừa",
  medicalWardUrl: "https://www.facebook.com/TramYtephuongOChoDua",
  hotlineMedical: "02435132956"
};

// icon: phone chat doc bag qr coin lock shield warn stop camera mega home check star book video pin people bell globe
// color: blue mint sun coral violet
window.PAGES = [
  { type: "cover",
    voice: "Kính chào bà con phường Ô Chợ Dừa. Đây là cuốn sổ tay chuyển đổi số, được Ủy ban nhân dân phường gửi đến từng gia đình. Mời bà con bấm nút Bắt đầu để cùng lật từng trang, học những điều đơn giản mà hữu ích." },

  { sec: "Cách dùng sổ tay", icon: "book", color: "blue", title: "Cách dùng sổ tay",
    items: ["Bấm nút “Nghe đọc” để nghe hướng dẫn", "Bấm mũi tên hoặc vuốt ngón tay để lật trang", "Có 4 phần, bà con đọc phần nào cần trước cũng được"],
    voice: "Để nghe hướng dẫn, bà con bấm vào nút Nghe đọc ở dưới màn hình. Muốn sang trang, bà con bấm mũi tên hoặc vuốt ngón tay sang bên. Cuốn sổ tay gồm bốn phần, bà con có thể đọc phần nào cần trước cũng được." },

  { sec: "Phần 1 · Ý nghĩa", icon: "star", color: "blue", title: "Chuyển đổi số là gì?",
    lead: "Chuyển đổi số là thay đổi từ cách làm truyền thống sang sử dụng công nghệ để mọi công việc nhanh hơn, hướng đến hỗ trợ con người để cuộc sống tốt hơn.",
    note: "Mang lại lợi ích phát triển kinh tế và nâng cao chất lượng cuộc sống.",
    voice: "Chuyển đổi số là thay đổi từ cách làm truyền thống sang sử dụng công nghệ, để mọi công việc nhanh hơn, hướng đến hỗ trợ con người để cuộc sống tốt hơn. Chuyển đổi số đem lại lợi ích phát triển kinh tế và nâng cao chất lượng cuộc sống." },

  { sec: "Phần 1 · Ý nghĩa", icon: "home", color: "blue", title: "Đích đến cuối cùng",
    lead: "Đích đến của chuyển đổi số không phải là máy móc, mà là con người.",
    items: ["Bà con đỡ đi lại, đỡ giấy tờ", "Tiết kiệm thời gian và tiền bạc", "Chính quyền phục vụ nhanh hơn, rõ ràng hơn", "Mỗi gia đình thêm cơ hội làm ăn, học tập"],
    voice: "Mục tiêu cuối cùng của chuyển đổi số không phải là máy móc, mà là con người. Là để bà con đỡ phải đi lại, đỡ giấy tờ, tiết kiệm thời gian và tiền bạc. Là để chính quyền phục vụ nhanh hơn, rõ ràng hơn, và để mỗi gia đình có thêm cơ hội làm ăn, học tập." },

  { sec: "Phần 1 · Ý nghĩa", icon: "check", color: "blue", title: "Người dân được gì?",
    items: ["Làm thủ tục hành chính trên điện thoại", "Thanh toán bằng mã QR, không lo tiền lẻ", "Gọi video cho con cháu ở xa", "Bán hàng, kiếm thêm thu nhập", "Nhận thông tin chính thống của phường"],
    numbered: true,
    voice: "Khi biết dùng công nghệ, bà con có thể làm thủ tục hành chính trên điện thoại, thanh toán bằng mã QR, gọi video cho con cháu ở xa, bán hàng để tăng thêm thu nhập, và nhận thông tin chính thống của phường nhanh chóng hơn." },

  { sec: "Phần 1 · Ý nghĩa", icon: "mega", color: "blue", title: "iHanoi – Tiếng nói của công dân",
    lead: "Ứng dụng giúp người dân phản ánh các vấn đề dân sinh, thủ tục hành chính bằng hình ảnh minh chứng, gửi trực tiếp đến cơ quan chức năng.",
    items: ["Phản ánh vấn đề dân sinh quanh nhà", "Gửi kèm hình ảnh minh chứng", "Hỏi đáp thủ tục hành chính 24/7"],
    voice: "iHanoi là tiếng nói của công dân. Ứng dụng giúp bà con phản ánh các vấn đề dân sinh, thủ tục hành chính bằng hình ảnh minh chứng, gửi trực tiếp đến cơ quan chức năng. Bà con còn có thể hỏi đáp thủ tục hành chính vào bất cứ lúc nào." },

  { sec: "Phần 1 · Ý nghĩa", icon: "phone", color: "blue", title: "Cài đặt iHanoi: 3 bước",
    items: ["Tải ứng dụng trên App Store hoặc CH Play, tìm “iHanoi”", "Đăng ký bằng số điện thoại và làm theo hướng dẫn", "Dùng trợ lý ảo hỏi đáp thủ tục hành chính 24/7, hoặc đọc thông tin chính thống đã được xác thực từ các cơ quan, đơn vị hành chính"],
    numbered: true,
    voice: "Cài đặt iHanoi rất đơn giản. Bước một, tải ứng dụng trên App Store hoặc CH Play, tìm từ khóa iHanoi. Bước hai, đăng ký bằng số điện thoại và làm theo hướng dẫn. Bước ba, dùng trợ lý ảo để hỏi đáp thủ tục hành chính hai mươi bốn giờ mỗi ngày, hoặc đọc các thông tin chính thống đã được xác thực." },

  { sec: "Phần 2 · Thao tác số", icon: "chat", color: "mint", title: "Zalo: nhắn tin, gọi video",
    items: ["Tải Zalo từ cửa hàng ứng dụng", "Đăng nhập bằng số điện thoại của mình", "Chọn tên người thân → gõ tin nhắn", "Bấm biểu tượng máy quay để gọi video"],
    numbered: true,
    voice: "Zalo là ứng dụng nhắn tin và gọi video miễn phí rất tiện. Bà con tải Zalo từ cửa hàng ứng dụng, đăng nhập bằng số điện thoại của mình. Muốn trò chuyện, chọn tên người thân rồi gõ tin nhắn, hoặc bấm vào biểu tượng chiếc máy quay để gọi video." },

  { sec: "Phần 2 · Thao tác số", icon: "camera", color: "mint", title: "Zalo: gửi ảnh, file, vào nhóm",
    items: ["Gửi ảnh: bấm biểu tượng bức ảnh, chọn hình", "Gửi tài liệu: bấm dấu cộng → chọn tệp", "Vào nhóm khu dân cư: bấm link hoặc quét mã QR do cán bộ tổ dân phố cung cấp"],
    note: "Chỉ vào nhóm do cán bộ tổ dân phố cung cấp.",
    voice: "Để gửi ảnh, bà con bấm vào biểu tượng bức ảnh rồi chọn hình. Để gửi tài liệu, bấm dấu cộng rồi chọn tệp. Bà con cũng nên vào nhóm Zalo của tổ dân phố để nhận thông báo kịp thời từ phường. Chỉ vào nhóm do cán bộ tổ dân phố cung cấp." },

  { sec: "Phần 2 · Thao tác số", icon: "doc", color: "mint", title: "Word: mở, gõ chữ, lưu",
    items: ["Mở Word → chọn “Tài liệu trống”", "Gõ chữ như viết lên trang giấy (nhớ bật bộ gõ tiếng Việt)", "Bấm Ctrl + S để lưu, đặt tên dễ nhớ"],
    numbered: true,
    voice: "Word là phần mềm soạn thảo văn bản trên máy tính. Bà con mở Word, chọn tài liệu trống rồi gõ chữ như viết lên trang giấy, nhớ bật bộ gõ tiếng Việt. Khi xong, bấm đồng thời hai phím Control và S để lưu, và đặt cho tệp một cái tên dễ nhớ." },

  { sec: "Phần 2 · Thao tác số", icon: "doc", color: "mint", title: "Word: soạn đơn, lưu PDF",
    items: ["Gõ tiêu đề → bấm căn giữa, chữ B để in đậm", "Soạn nội dung đơn ngắn gọn, rõ ràng", "Tệp → Lưu thành → chọn PDF"],
    note: "Tệp PDF gửi qua Zalo hay thư điện tử đều giữ nguyên hình thức.",
    voice: "Khi soạn một lá đơn, bà con gõ tiêu đề rồi bấm căn giữa, bấm chữ B để in đậm. Soạn xong, vào mục Tệp, chọn Lưu thành, rồi chọn định dạng PDF. Tệp PDF gửi qua Zalo hay thư điện tử đều giữ nguyên hình thức, người nhận mở ra là đọc được ngay." },

  { sec: "Phần 3 · Kinh tế gia đình", icon: "bag", color: "sun", title: "Bán hàng qua Zalo, Facebook",
    lead: "Rau sạch, bánh, đồ thủ công… đều có thể bán trên mạng.",
    items: ["Tạo trang hoặc nhóm bán hàng", "Đăng ảnh đẹp, ghi rõ giá và số điện thoại", "Trả lời khách nhanh, lịch sự"],
    voice: "Gia đình có sản phẩm như rau sạch, bánh, đồ thủ công, bà con có thể bán qua Zalo hoặc Facebook. Chỉ cần đăng ảnh đẹp, ghi rõ giá và số điện thoại, rồi trả lời khách nhanh và lịch sự. Khách quen sẽ giới thiệu thêm cho nhiều người khác." },

  { sec: "Phần 3 · Kinh tế gia đình", icon: "camera", color: "sun", title: "Chụp ảnh sản phẩm, viết mô tả",
    items: ["Chụp nơi có ánh sáng tự nhiên, nền gọn gàng", "Lau sạch ống kính điện thoại", "Mô tả rõ: tên, giá, nguồn gốc, cách đặt hàng"],
    note: "Trung thực về sản phẩm là cách giữ uy tín lâu dài.",
    voice: "Ảnh đẹp giúp bán hàng tốt hơn. Bà con chụp ở nơi có ánh sáng tự nhiên, nền gọn gàng, nhớ lau sạch ống kính. Phần mô tả nên ghi rõ tên sản phẩm, giá bán, nguồn gốc và cách đặt hàng. Trung thực về sản phẩm là cách giữ uy tín lâu dài." },

  { sec: "Phần 3 · Kinh tế gia đình", icon: "qr", color: "sun", title: "Nhận tiền bằng mã QR",
    lead: "Bà con nên liên hệ ngân hàng để:",
    items: ["Đăng ký mở tài khoản hộ kinh doanh", "Tạo mã QR nhận tiền", "Đăng ký loa phát thanh báo chuyển khoản"],
    note: "Thuận tiện khi bán hàng, và thuận lợi cho việc kê khai thuế sau này. Luôn tự kiểm tra tài khoản đã nhận tiền trước khi giao hàng.",
    voice: "Bà con kinh doanh nên liên hệ ngân hàng để đăng ký mở tài khoản hộ kinh doanh, tạo mã QR nhận tiền và đăng ký loa phát thanh báo chuyển khoản. Việc này vừa thuận tiện khi bán hàng, vừa thuận lợi cho việc kê khai thuế sau này. Nhớ tự kiểm tra tài khoản đã nhận tiền chưa trước khi giao hàng." },

  { sec: "Phần 3 · Kinh tế gia đình", icon: "coin", color: "sun", title: "Ghi sổ thu chi mỗi ngày",
    items: ["Mỗi ngày ghi: Thu – Chi – Còn lại", "Dùng ứng dụng Ghi chú trên điện thoại hoặc bảng tính", "Cuối tháng cộng lại để biết lãi bao nhiêu"],
    voice: "Làm kinh tế gia đình, bà con nên ghi lại khoản thu và khoản chi mỗi ngày. Có thể dùng ngay ứng dụng ghi chú trên điện thoại. Cuối tháng cộng lại, bà con sẽ biết mình lãi bao nhiêu, và quyết định có nên nhập thêm hàng hay không." },

  { sec: "Phần 4 · An toàn mạng", icon: "lock", color: "coral", title: "Mật khẩu và xác thực 2 lớp",
    items: ["Mật khẩu dài từ 10 ký tự, có chữ hoa, chữ thường, số", "Không dùng ngày sinh, dãy số dễ đoán", "Mỗi tài khoản một mật khẩu", "Bật xác thực 2 lớp cho Zalo, Facebook, ngân hàng"],
    voice: "Mật khẩu giống như chìa khóa nhà. Bà con nên đặt mật khẩu dài, có cả chữ và số, đừng dùng ngày sinh hay dãy số dễ đoán, và không dùng chung một mật khẩu cho mọi tài khoản. Hãy bật xác thực hai lớp cho Zalo, Facebook và ngân hàng để an toàn hơn." },

  { sec: "Phần 4 · An toàn mạng", icon: "warn", color: "coral", title: "5 dấu hiệu lừa đảo",
    items: ["Báo trúng thưởng, nhận quà bất ngờ", "Nhận tiền chuyển nhầm từ một tài khoản lạ", "Hứa lãi cao, việc nhẹ lương cao", "Tự xưng công an, ngân hàng, hối thúc làm ngay", "Gửi đường link lạ, bắt cài ứng dụng", "Người quen nhắn vay tiền gấp"],
    numbered: true, note: "Thấy gấp và lạ: hãy dừng lại!",
    voice: "Kẻ lừa đảo thường dùng năm chiêu. Một, báo trúng thưởng. Hai, hứa lãi cao, việc nhẹ lương cao. Ba, giả danh công an, ngân hàng và hối thúc làm ngay. Bốn, gửi đường link lạ hoặc bắt cài ứng dụng. Năm, giả làm người quen vay tiền gấp. Cứ thấy gấp và lạ, hãy dừng lại, kiểm tra thông tin xác minh trước. Báo cho ngân hàng hoặc cảnh sát khu vực nơi sinh sống." },

  { sec: "Phần 4 · An toàn mạng", icon: "stop", color: "coral", title: "3 KHÔNG cần nhớ",
    items: ["KHÔNG đọc mã OTP, mật khẩu cho bất kỳ ai", "KHÔNG bấm link lạ, không cài ứng dụng lạ từ nguồn không chính thống", "KHÔNG chuyển tiền khi chưa gọi điện xác minh trực tiếp"],
    voice: "Bà con nhớ ba điều không. Không cho ai biết mã OTP và mật khẩu, kể cả người xưng là nhân viên ngân hàng. Không bấm vào đường link lạ, không cài ứng dụng theo yêu cầu của người lạ. Không chuyển tiền khi chưa gọi điện trực tiếp cho người thân để xác minh." },

  { sec: "Phần 4 · An toàn mạng", icon: "shield", color: "coral", title: "Lỡ bị lừa thì làm gì?",
    items: ["Ngừng liên lạc, không chuyển thêm tiền", "Gọi ngân hàng để khóa hoặc chặn giao dịch", "Lưu lại tin nhắn, chụp ảnh màn hình hoặc lưu số tài khoản của đối tượng", "Báo công an phường Ô Chợ Dừa theo số hotline: 0243.8516.954"],
    numbered: true, note: "Báo càng sớm, càng giảm thiểu rủi ro pháp lý giúp mọi người xung quanh nắm được thông tin.",
    voice: "Nếu chẳng may bị lừa, bà con bình tĩnh làm theo bốn bước. Dừng ngay, không chuyển thêm tiền. Gọi ngân hàng để khóa hoặc chặn giao dịch. Giữ lại tin nhắn, số tài khoản của đối tượng. Rồi báo công an phường hoặc gọi số một một ba. Báo càng sớm, càng có cơ hội lấy lại." },

  { type: "contact",
    voice: "Để cập nhật thông tin của phường và được hỗ trợ, mời bà con theo dõi Fanpage Phường Ô Chợ Dừa, Thành phố Hà Nội. Khi nghi ngờ lừa đảo, hãy gọi ngay số một một ba. Xin cảm ơn bà con đã đồng hành cùng chuyển đổi số của phường." },
];
