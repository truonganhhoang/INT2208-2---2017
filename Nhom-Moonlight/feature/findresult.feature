Feature: Chơi "Chọn kết quả đúng" 
    As a người dùng
    I want to luyện tập các phép tính cơ bản
    So that Tôi chơi mini game "Chọn kết quả đúng"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "Chọn kết quả đúng"
    And Màn hình hiển thị phép tính 7+12=?
    And Màn hình hiển thị 4 kết quả dưới phép tính là 19 22 23 14
    When Tôi chọn kết quả là 19
    Then Màn hình thông báo "Đúng rồi!"
    And Tôi được cộng thêm 1 điểm
    And Màn hình chuyển sang phép tính mới
    
Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "Chọn kết quả đúng"
    And Màn hình hiển thị phép tính 7+12=?
    And Màn hình hiển thị 4 kết quả dưới phép tính là 19 22 23 14
    When Tôi chọn kết quả là 22
    Then Màn hình thông báo "Sai mất rồi!"
    And Tôi không được cộng thêm điểm
    And Màn hình chuyển sang phép tính mới