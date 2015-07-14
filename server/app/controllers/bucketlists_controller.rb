class BucketlistsController < ApplicationController

	before_action :authenticate_user!

	def index
		bucketlist = current_user.bucketlist.items.order('number ASC')
		
		render json: bucketlist
	end

	def create
	end

	def update
	end

	def destroy
	end

end