Feature: Chơi trò chơi
In order to thư giãn và kiểm tra kiến thức đã học được
	As 1 người dùng
	I want to chơi trò chơi
  Scenario: chọn độ khó
   Given tôi đang truy cập chức năng trò chơi, các mức độ dễ, trung bình, khó hiện ra
	When tôi chọn “Dễ”
	Then màn hình lựa chọn các màn chơi mức độ dễ hiện ra
	And tôi chọn màn chơi và chơi
  Scenario: chơi trò chơi
   Given tôi đang ở màn chơi 1, câu hỏi hiện ra 12 + 15 = ??
	When tôi chọn đáp án 11
	Then tôi nhận kết quả sai
	And màn hình hiển thị Sai rồi, câu sai tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	
  Scenario: chơi trò chơi
    Given tôi đang ở màn chơi 1, câu hỏi hiện ra 12 + 15 = ??
	When tôi chọn đáp án 25
	Then tôi nhận kết quả sai
	And màn hình hiển thị Sai rồi, câu sai tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	
  Scenario: chơi trò chơi
    Given tôi đang ở màn chơi 1, câu hỏi hiện ra 12 + 15 = ??
	When tôi chọn đáp án 23
	Then tôi nhận kết quả sai
	And màn hình hiển thị Sai rồi, câu sai tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	
  Scenario: chơi trò chơi
     Given tôi đang ở màn chơi 1, câu hỏi hiện ra 12 + 15 = ??
	When tôi chọn đáp án 27
	Then tôi nhận kết quả đúng
	And màn hình hiển thị Chính xác, câu đúng tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo		
