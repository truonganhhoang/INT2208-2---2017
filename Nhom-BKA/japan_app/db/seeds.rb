User.create!(name:  "Admin",
             email: "nguyentrunghieu3103@gmail.com",
             password:              "123456",
             password_confirmation: "123456",
             is_admin: true,
             phone: "0986140014",
             address: "Gia Khanh, Gia Loc, Hai Duong")

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@gmail.com"
  password = "123456"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password,
               phone: "0986140014",
               address: "Gia Khanh, Gia Loc, Hai Duong")
end
