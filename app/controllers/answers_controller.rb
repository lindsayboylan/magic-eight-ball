class AnswersController < ApplicationController
	def index
    @answers = Answer.all
  end

	def shake
		a = Answer.all.sample
    	render json: a
	end
end
