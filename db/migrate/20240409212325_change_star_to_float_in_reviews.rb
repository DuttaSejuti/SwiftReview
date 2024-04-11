class ChangeStarToFloatInReviews < ActiveRecord::Migration[7.1]
  def change
    change_column :reviews, :star, :float
  end
end
