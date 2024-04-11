# SwiftReview

SwiftReview is a single-page application designed for managing product reviews. It provides a user-friendly interface for users to view products and submit reviews with text and star ratings. I am using RoR for the backend and React for the frontend.

* Ruby version: 3.3 💣
* Rails version: 7.1.3.2
* Database creation: rails db:create 🚀
* Database initialization: rails db:seed 🌱
* How to run the server: rails s 🏃

## Features

- View product details including name, associated reviews.
- Read existing reviews for each product. Currently, the root page is directed to the dummy single product that is created after running seed file.
- Submit new reviews with text and star ratings.
- Review submitted from another tab is shown on the product detail page without refreshing.

## Technologies Used

- Frontend: React
- Backend: Ruby on Rails
- Database: Postgresql

## Installation

To run SwiftReview locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone [repository_url]
   ```

2. Navigate to the project directory.
   ```bash
   cd SwiftReview
   ```

3. Install frontend dependencies.
   ```bash
   npm install
   ```

4. Install backend dependencies (assuming Ruby and Rails are already installed).
   ```bash
   bundle install
   ```

5. Set up the database and run migrations.
   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

6. Start the Rails server.
   ```bash
   rails server
   ```

7. Start the React development server.
   ```bash
   npm start
   ```

8. Open your web browser and navigate to `http://localhost:3000` to access SwiftReview.

## Usage

1. Read the Product's name with associated reviews (text, star).
2. To submit a new review:
   - Enter your review text in the provided text area.
   - Click on the star icons to select your rating.
   - Click the "Submit" button to submit your review.
3. Your review will be added to the product's details page.

## Future Improvements

1. Enable users to give half star rating in the reviews
2. Improve the polling technique (websocket/action-cable)
3. Write tests for BE and FE
4. Deploy the application for public showcasing
