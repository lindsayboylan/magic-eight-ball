class EightBallController < ApplicationController
	def index
	  @random_number = Random.rand(20)
	end
end
