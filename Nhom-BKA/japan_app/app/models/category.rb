class Category < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many :words, dependent: :destroy
  has_many :lessons, dependent: :destroy

  mount_uploader :photo, PhotoUploader
  validates :name, presence: true, length: {maximum: 100},
    uniqueness: {case_sensitive: false}
  validates :description, presence: true, length: {maximum: 255}

  def activity_info
    "#{self.name},#{category_path self}"
  end

  class << self
    def search name
      name ? where("name LIKE ?", "%#{name}%") : all
    end
  end
end
