Feature: Thi thử online
In order to cải thiện kiến thức vật lý
As một học sinh đã đăng nhập
I muốn làm bài thi thử online môn vật lý

  Scenario:Chọn bài thi
    Given tôi đang ở trang chủ
     When tôi click vào đề số 1
     Then tôi nhìn thấy thông báo đề số 1, thời gian 90'
    Given tôi đang ở trang thông báo tên đề và thời gian làm bài
     When tôi bấm nút "Bắt đầu làm bài"
     Then tôi nhìn thấy các câu hỏi, đồng hồ bắt đầu đếm ngược

  Scenario: Làm bài thi
     Given một câu hỏi
     When tôi click vào đáp án A
     Then tôi nhận nhìn thấy dòng chữ đáp án sai
     When tôi click vào đáp án B
     Then tôi nhận nhìn thấy dòng chữ đáp án đúng
  Scenario: Nộp bài thi
     Given tôi đã làm xong bài thi
      When tôi bấm nút nộp bài
      Then tôi nhìn thấy điểm số, thời gian làm bài
      When tôi bấm nút xem đáp án
      Then tôi nhìn thấy đáp án chính xác của bài thi
