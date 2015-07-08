class HomeController < ApplicationController

	def index
		if current_user
			redirect_to bucketlists_path
		end
	end

end