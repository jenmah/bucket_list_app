class BucketlistsController < ApplicationController

	before_action :authenticate_user!

	def index
		# @bucketlists = Bucketlist.all
		# @items = Item.all
		# render :json =>  @bucketlists, :include => :items
		# @bucketlists = Item.all
		# @items = Item.all
		# render :json =>  @bucketlists

		render json: current_user.bucketlist.items
	end

	def create
	end

	def update
	end

	def destroy
	end

end