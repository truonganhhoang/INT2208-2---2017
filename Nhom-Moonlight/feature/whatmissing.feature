Feature: Chơi "Tìm dấu phép tính"
    As a người dùng
    I want to luyện tập các phép tính cơ bản
    So that Tôi chơi mini game "Tìm dấu phép tính"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "Tìm dấu phép tính"
    And Màn hình hiển thị 10_3=7
    When Tôi chọn dấu "-"
    Then Màn hình thông báo "Đúng rồi!"
    And Tôi được cộng thêm 1 điểm
    And Màn hình chuyển sang phép tính mới

Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "Tìm dấu phép tính"
    And Màn hình hiển thị 10_3=7
    When Tôi chọn dấu "+"
    Then Màn hình thông báo "Sai mất rồi!"
    And Tôi không được cộng thêm điểm
    And Màn hình chuyển sang phép tính mới