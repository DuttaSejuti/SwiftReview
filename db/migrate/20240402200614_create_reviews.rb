class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.references :product, null: false, foreign_key: true
      t.text :text
      t.integer :star

      t.timestamps
    end
  end
end
