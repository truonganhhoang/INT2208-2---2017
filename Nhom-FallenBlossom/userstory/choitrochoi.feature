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
   Given tôi đang ở màn chơi 1
    And Câu hỏi hiện ra 12 + 15 = ??
	And Màn hình hiển thị 4 kết quả dưới phép tính là 11 25 23 27
	When tôi chọn đáp án 11
	Then màn hình hiển thị "Sai rồi",số câu sai tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	
	
  Scenario: chơi trò chơi
   Given tôi đang ở màn chơi 1
    And Câu hỏi hiện ra 12 + 15 = ??
	And Màn hình hiển thị 4 kết quả dưới phép tính là 11 25 23 27
	When tôi chọn đáp án 27
	Then màn hình hiển thị "Chính xác",số câu đúng tăng 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo		
