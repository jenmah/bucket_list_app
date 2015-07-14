class ItemsController < ApplicationController

	def index
	end

	def create
	end

	def update
		item = Item.find(params[:id])
		
		if item.update(item_params)
			render json: { head: :no_content }
		end
	end

	def destroy
		item = Item.find(params[:id])

		if item.destroy
			render json: { status: 204, item: item }
		end
	end

	private

	def item_params
		params.require(:item).permit(:number, :description, :location, :completed)
	end

end
