Feature: Chơi "Luyện trí nhớ" 
    As a người dùng
    I want to luyện tập các phép tính nâng cao
    So that Tôi chơi mini game "Luyện trí nhớ"

Scenario: Tôi chọn đúng
    Given Tôi đang ở màn hình "Luyện trí nhớ"
    And Màn hình hiển thị 9 ô số theo thứ tự từ trái sang phải & từ trên xuống dưới là 0 3 8 9 1 10 4 7 5
    And Màn hình tô màu đỏ vào các ô số là 3 7
    And Màn hình tô màu xanh vào các ô số là 8 10
    And Màn hình hiển thị yêu cầu "Tính tổng các số trong những ô màu ĐỎ"
    And Màn hình chuyển các số đã cho thành dấu "?" sau 5 giây
    And Màn hình hiển thị 4 kết quả dưới các ô đó là 8 10 4 18
    When Tôi chọn số 10
    Then Tôi được cộng thêm 5 điểm
    And Màn hình chuyển sang các ô số mới

Scenario: Tôi chọn sai
    Given Tôi đang ở màn hình "Luyện trí nhớ"
    And Màn hình hiển thị 9 ô số theo thứ tự từ trái sang phải & từ trên xuống dưới là 0 3 8 9 1 10 4 7 5
    And Màn hình tô màu đỏ vào các ô số là 3 7
    And Màn hình tô màu xanh vào các ô số là 8 10
    And Màn hình hiển thị yêu cầu "Tính tổng các số trong những ô màu ĐỎ"
    And Màn hình chuyển các số đã cho thành dấu "?" sau 5 giây
    And Màn hình hiển thị 4 kết quả dưới các ô đó là 8 10 4 18
    When Tôi chọn số 18
    Then Màn hình thông báo "Chúc em may mắn lần sau"
    And Màn hình thông báo "KẾT THÚC" ở dưới dòng chữ trên
    And Tôi không được cộng thêm điểm
    And Màn hình chuyển các ô dấu "?" về các ô số đã cho
    And Màn hình tô màu xanh vào kết quả đúng là ô số 10 
