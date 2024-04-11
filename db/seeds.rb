product_1 = Product.create(name: "The Minimalist Entrepreneur")

Review.create(product: product_1, text: "book was full of fluff", star: 4)
Review.create(product: product_1, text: "book was fluff", star: 3.5)
Review.create(product: product_1, text: "book was amazing", star: 4.5)

# Create 5 reviews for the product
# 5.times do |i|
#   Review.create(product: product_1, text: "Review #{i + 1}", star: rand(1..5))
# end
