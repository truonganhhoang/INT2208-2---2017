Feature: Chơi "Chọn các số hạng" 
    As a người dùng
    I want to luyện tập các phép tính nâng cao
    So that Tôi chơi mini game "Chọn các số hạng"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "Chọn các số hạng"
    And Màn hình hiển thị 9 ô số theo thứ tự từ trái sang phải & từ trên xuống dưới là 0 3 8 9 1 10 4 7 5
    And Màn hình hiển thị yêu cầu "3 ô = 8"
    When Tôi chọn 3 số là 0 3 5
    Then Màn hình hiển thị "Tốt lắm!"
    And Tôi được cộng thêm 3 điểm
    And Màn hình chuyển sang các ô số mới

Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "Chọn các số hạng"
    And Màn hình hiển thị 9 ô số theo thứ tự từ trái sang phải & từ trên xuống dưới là 0 3 8 9 1 10 4 7 5
    And Màn hình hiển thị yêu cầu "3 ô = 8"
    When Tôi chọn 3 số là 8 0 1
    Then Màn hình thông báo "KẾT THÚC"
    And Tôi không được cộng thêm điểm    
