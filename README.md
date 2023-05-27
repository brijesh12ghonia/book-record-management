# Book Record Management

This is a book record management API Backend for the management of book records.

# API Documentation Link

https://documenter.getpostman.com/view/27656442/2s93m7WMGS

# Routes and Endpoints

## /users
POST: Create a new user ✅
GET: Get all list of users ✅

## /users/{id}
GET: Get a user by ID ✅
PUT: Update a user by ID ✅
DELETE: Delete a user by ID (check if he/she still has an issued book or is there any fine to be paid) ✅

## /users/subscription-details/{id}
GET: Get a user subscription details
1. Date of subscription
2. Valid till
3. Fine (If any)

## /books
GET: Get all books ✅
POST: Add a new book

## /books/{id}
GET: Get a book by ID ✅
POST: update a book by ID

## /books/issued
GET: Get all books issued

## /books/issued/withFine
GET: GET all books issued with fine

# Subscription Types
Basic (3 months)
Standard (6 months)
Premium (12 months)
