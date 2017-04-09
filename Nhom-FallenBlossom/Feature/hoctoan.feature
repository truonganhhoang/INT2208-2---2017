Feature: bé học toán
	In order to phát triển khả năng tính toán
	As 1 người dùng
	I want to làm toán cơ bản
  Scenario: học số từ 1 đến 10
    Given tôi đang truy cập chức năng học toán
	 When tôi click vào bảng các số từ 1 đến 10
	 Then bảng số phóng to ra toàn màn hình
	 And tôi thấy các số cùng hình minh họa thật rõ ràng
	 When tôi click “quay về”
	 Then màn hình học số nhỏ lại như ban đầu
  Scenario: học phép tính đơn giản
    Given tôi đang truy cập chức năng học toán
	 When tôi click vào nút “play” ở video dưới dòng bé học phép tính
	 Then video dạy các phép tính cơ bản bắt đầu chạy
	 When tôi click phóng to
	 Then Video phóng to ra toàn màn hình
	 When tôi click thu nhỏ
         Then video thu nhỏ lại như trước
	 When tôi click dừng lại hoặc hết video
	 Then video dừng lại
  Scenario: học các hình cơ bản
    Given tôi đang truy cập chức năng học toán
	 When tôi click vào bảng các hình đơn giản
	 Then bảng hình phóng to ra toàn màn hình
	 And tôi thấy các hình như vuông, tròn, chữ nhật,... thật rõ ràng
	 When tôi click “quay về”
         Then màn hình học số nhỏ lại như ban đầu
