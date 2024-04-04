class ProductsController < ApplicationController
  def index
  end

  def show
    @product = Product.includes(:reviews).first
    @reviews = @product.reviews
  end
end
