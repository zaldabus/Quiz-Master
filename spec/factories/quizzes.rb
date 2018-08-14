FactoryBot.define do
  factory :quiz do
    sequence(:question) {|n| "This is a unique question? #{n}"}
    answer "5"
  end
end
