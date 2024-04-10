class ReviewsController < ApplicationController
  def index
  end
  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.new(review_params)

    if @review.save
      render json: @review, status: :created
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 

  def review_params 
    params.require(:review).permit(:text, :star)
  end
end
