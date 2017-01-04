class Answer < ActiveRecord::Base
	validates :text, presence: true
end
