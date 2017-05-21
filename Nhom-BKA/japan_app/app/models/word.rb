class Word < ApplicationRecord
  belongs_to :category

  has_many :answers, dependent: :destroy
  has_many :results, dependent: :destroy

  accepts_nested_attributes_for :answers, allow_destroy: true,
    reject_if: proc { |attributes| attributes["content"].blank?}

  validates :content, presence: true, length: {maximum: 255}
  before_validation :must_have_a_correct_answer, :must_have_mIN_answer,
    :dont_have_duplicate_answer

  scope :all_word, -> user_id{}
  scope :learned, -> user_id{WHERE "id IN
    (SELECT word_id FROM answers WHERE is_correct = '1' AND id IN
      (SELECT answer_id FROM results WHERE lesson_id IN
        (SELECT id FROM lessons WHERE user_id = #{user_id})))"}
  scope :not_learn, -> user_id{WHERE "id not IN
    (SELECT word_id FROM answers WHERE is_correct = '1' AND id IN
      (SELECT answer_id FROM results WHERE lesson_id IN
        (SELECT id FROM lessons WHERE user_id = #{user_id})))"}

  private
  def must_have_a_correct_answer
    unless self.answers.select{|answer| answer.is_correct}.size >= Settings.correct_answers_min
      errors.add "", "Please choose a correct answer"
    end
  end

  def must_have_min_answer
    min = Settings.default_answer_limit
    unless self.answers.size >= min
      errors.add "", "You must choose #{min} answer(s)"
    end
  end

  def dont_have_duplicate_answer
    duplicate_answer = self.answers.uniq{|answer| answer.content.squish}
    contents = duplicate_answer.first.content
    errors.add "", "Answer is duplicated: #{contents}" unless duplicate_answer.size != 0
  end
end
