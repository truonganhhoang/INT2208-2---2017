Feature: Chơi trò chơi
In order to thư giãn và kiểm tra kiến thức đã học được
	As 1 người dùng
	I want to chơi trò chơi
  Scenario: chọn độ khó
   Given tôi đang truy cập chức năng trò chơi, các mức độ dễ, trung bình, khó hiện ra
	When tôi chọn “Dễ”
	Then màn hình lựa chọn các màn chơi mức độ dễ hiện ra
	And tôi chọn màn chơi và chơi
        When tôi chọn “Trung bình”
	Then màn hình lựa chọn các màn chơi mức độ trung bình hiện ra
        And tôi chọn màn chơi và chơi
        When tôi chọn “Khó”
	Then màn hình lựa chọn các màn chơi mức độ khó hiện ra
        And tôi chọn màn chơi và chơi
  Scenario: chơi trò chơi
   Given tôi đã chọn mức độ chơi và màn chơi, câu hỏi cho tôi hiện ra
	When tôi chọn đáp án A
	Then tôi nhận kết quả đúng
	And điểm của tôi tăng lên 1
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	
  Scenario: chơi trò chơi
   Given tôi đã chọn mức độ chơi và màn chơi, câu hỏi cho tôi hiện ra
	When tôi chọn đáp án B
	Then tôi nhận kết quả sai
	And màn hình hiển thị đáp án đúng, điểm của tôi không tăng
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo		
  Scenario: chơi trò chơi
   Given tôi đã chọn mức độ chơi và màn chơi, câu hỏi cho tôi hiện ra cùng các đáp án bên dưới để tôi lựa chọn.
	When tôi chọn <Câu trả lời>
	Then tôi nhận <kết quả>
	When tôi chọn <câu tiếp>
	Then tôi nhìn thấy câu hỏi tiếp theo	