Feature: Đăng nhập vào trang web
In order to sử dụng các chức năng của trang web
As một người dùng
I muốn đăng nhập vào trang web

  Scenario: Đăng nhập thành công
    Given tôi đang ở trang chủ
     When tôi click vào chữ login
      And tôi điền username là "HL308"
      And tôi điền password là "308308"
      And tôi bấm nút submit Login
     Then tôi nhìn thấy dòng chữ "Chào mừng HL308"
    Given tôi đang ở trang chào mừng
     When tôi bấm nút "Tiếp tục"
     Then tôi trở về trang chủ

  Scenario: Đăng nhập không thành công
     Given tôi đang ở trang chủ
     When tôi click vào chữ login
      And tôi điền username là "HL308"
      And tôi điền password là "308309"
      And tôi bấm nút submit Login
     Then tôi nhìn thấy dòng chữ "Sai mật khẩu hoặc tên đăng nhập"

 