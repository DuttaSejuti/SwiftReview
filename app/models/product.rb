class Product < ApplicationRecord
  has_many :reviews

  validates :name, presence: true, length: { minimum:3, maximum:255 }
end
