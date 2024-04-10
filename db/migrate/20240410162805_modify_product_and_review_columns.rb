class ModifyProductAndReviewColumns < ActiveRecord::Migration[7.1]
  def change
    change_column_null :products, :name, false
    change_column :products, :name, :string, limit: 255

    change_column_null :reviews, :text, false
    change_column_null :reviews, :star, false
    change_column :reviews, :star, :float, default: 0
  end
end
