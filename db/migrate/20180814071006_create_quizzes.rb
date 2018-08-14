class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
    	t.string :question, null: false
    	t.string :answer, null: false
      t.timestamps
    end

    add_index :quizzes, :question, unique: true
  end
end
