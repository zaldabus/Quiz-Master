require 'rails_helper'

RSpec.describe Quiz, type: :model do
  context "validations" do
  	subject { create(:quiz) }
    it { is_expected.to validate_presence_of(:question) }
    it { is_expected.to validate_uniqueness_of(:question) }
    it { is_expected.to validate_presence_of(:answer) }
  end
end
