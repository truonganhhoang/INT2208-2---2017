Feature: Chơi "So sánh phép tính" 
    As a người dùng
    I want to luyện tập các phép so sánh
    So that Tôi chơi mini game "So sánh phép tính"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "So sánh phép tính"
    And Màn hình hiển thị phép so sánh 9x1 ? 8x2
    When Tôi chọn dấu "<"
    Then Màn hình thông báo "Đúng rồi!"
    And Tôi được cộng thêm 1 điểm
    And Màn hình chuyển sang phép tính mới
    
Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "So sánh phép tính"
    And Màn hình hiển thị phép so sánh 9x1 ? 8x2
    When Tôi chọn dấu "="
    Then Màn hình thông báo "Bạn chọn "=""
    And Tôi không được cộng thêm điểm
    And Màn hình thay dấu "?" thành dấu "<"
    And Màn hình hiển thị kết quả "(9)" dưới phép tính "9x1"
    And Màn hình hiển thị kết quả "(16)" dưới phép tính "8x2"
    And Màn hình dừng trò chơi
