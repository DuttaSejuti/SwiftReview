class ProductsController < ApplicationController
  def index
  end

  def show
    @product = Product.includes(:reviews).find(params[:id])
    @reviews = @product.reviews
  end
end
