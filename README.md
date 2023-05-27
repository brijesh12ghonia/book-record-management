# Book Record Management

This is a book record management API Backend for the management of book records.

# API Documentation Link

https://documenter.getpostman.com/view/27656442/2s93m7WMGS

# Routes and Endpoints

## /users
POST: Create a new user ✅<br>
GET: Get all list of users ✅<br>

## /users/{id}
GET: Get a user by ID ✅<br>
PUT: Update a user by ID ✅<br>
DELETE: Delete a user by ID (check if he/she still has an issued book or is there any fine to be paid) ✅<br>

## /users/subscription-details/{id}
GET: Get a user subscription details<br>
1. Date of subscription<br>
2. Valid till<br>
3. Fine (If any)<br>

## /books
GET: Get all books ✅<br>
POST: Add a new book<br>

## /books/{id}
GET: Get a book by ID ✅<br>
POST: update a book by ID<br>

## /books/issued
GET: Get all books issued ✅<br>

## /books/issued/withFine
GET: GET all books issued with fine<br>

# Subscription Types
Basic (3 months)<br>
Standard (6 months)<br>
Premium (12 months)<br>
