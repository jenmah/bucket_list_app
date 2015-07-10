class BucketlistsController < ApplicationController

	before_action :authenticate_user!

	def index
		@bucketlists = Bucketlist.all
		@items = Item.all
		render json: @bucketlists
	end

	def create
	end

	def update
	end

	def destroy
	end

end