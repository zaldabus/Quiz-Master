class ChangeQuestionColumnToText < ActiveRecord::Migration[5.2]
  def change
  	change_column :quizzes, :question, :text, null: false
  end
end
