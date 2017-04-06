Feature: Đăng kí làm thành viên trang web
In order to sử dụng các chức năng của trang web
As một người dùng
I muốn đăng kí thành viên

  Scenario: Đăng kí thành công
    Given tôi đang ở trang chủ
     When tôi click vào chữ signup
      And tôi điền username là "HL308"
      And tôi điền email là "hl308@gmail.com"
      And tôi điền password là "308308"
      And tôi điền confirm password là "308308"
      And tôi bấm nút submit signup
     Then tôi nhìn thấy dòng chữ "Đăng kí thành công"
    Given tôi đang ở trang thông báo đăng kí thành công
     When tôi bấm nút "Tiếp tục"
     Then tôi trở về trang chủ

  Scenario: Đăng kí không thành công
    Given tôi đang ở trang chủ
     When tôi click vào chữ signup
      And tôi điền username là "HL308"
      And tôi điền email là "hl308@gmail.com"
      And tôi điền password là "308308"
      And tôi điền confirm password là "308309"
      And tôi bấm nút submit signup
     Then tôi nhìn thấy dòng chữ "Đăng kí thất bại, vui lòng thử lại"