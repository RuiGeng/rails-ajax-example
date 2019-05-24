class TutorialsController < ApplicationController
	def index
		@tutorials = Tutorial.all
	end

	def filter_title
		@tutorials = Tutorial.where(["title = ?", params[:title]])
		render :json => @tutorials
	end

end
