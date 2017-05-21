Feature: Chơi "Đúng hay sai"
    As a người dùng
    I want to luyện tập các phép tính cơ bản
    So that Tôi chơi mini game "Đúng hay sai"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "Đúng hay sai"
    And Màn hình hiển thị phép tính 5-4=5
    When Tôi chọn dấu "x" màu đỏ
    Then Màn hình thông báo "Chuẩn rồi"
    And Tôi được cộng thêm 1 điểm
    And Màn hình chuyển sang phép tính mới
    
Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "Đúng hay sai"
    And Màn hình hiển thị phép tính 5-4=5
    When Tôi chọn dấu tích màu xanh
    Then Màn hình thông báo "Sai mất rồi!" 
    And Tôi không được cộng thêm điểm
    And Màn hình chuyển sang phép tính mới