Feature: Bé học toán
	In order to phát triển khả năng tính toán
	As 1 người dùng
	I want to làm toán cơ bản
  Scenario: Học số từ 1 đến 10
     Given tôi đang ở màn hình học toán
	 When tôi click vào ảnh các số từ 1 đến 10
	 Then bảng số phóng to ra toàn màn hình
	 And tôi thấy các số cùng hình minh họa 
	 When tôi click “x”
	 Then màn ảnh số nhỏ lại như ban đầu
  Scenario: Học phép tính cộng
    Given tôi đang ở màn hình học toán
	 When tôi click vào nút “Phép tính cộng” ở video dưới dòng Các phép tính cơ bản
	 Then video dạy phép cộng hiện ra
	 When tôi click giữa màn hình và click nút phóng to
	 Then Video phóng to ra toàn màn hình
	 When tôi click thu nhỏ
         Then video thu nhỏ lại như trước
	 When tôi click dừng lại hoặc hết video
	 Then video dừng lại

