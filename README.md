# Negotia – AI Powered Price Negotiation Platform

## Overview

Negotia is a full-stack web application that introduces automated price negotiation into online marketplaces.
Instead of fixed pricing, buyers can negotiate with an AI-powered bot that represents the seller and decides counter offers based on seller-defined pricing strategies.

The goal is to simulate real-world bargaining while maintaining fair limits set by the seller.

---

## Concept

The platform works with two types of users: **Buyers** and **Sellers**.

### Seller Workflow

* Sellers create an account and access the seller dashboard
* Upload products to the marketplace
* Set pricing parameters such as:

  * Base price
  * Minimum acceptable price
  * Negotiation strategy
* Monitor products and update stock

### Buyer Workflow

* Buyers browse products available on the platform
* If satisfied with the listed price → purchase directly
* Otherwise → negotiate with the AI bot
* The AI bot generates counter offers until:

  * A deal is accepted, or
  * The negotiation reaches the seller's minimum price

---

## Key Features

* User authentication and role-based access (Buyer / Seller)
* Seller dashboard for product management
* Product browsing marketplace
* AI-driven price negotiation system
* Negotiation history tracking
* Order creation and stock updates
* Pricing strategy control for sellers

---

## Tech Stack

### Frontend

* React.js
* CSS / Responsive UI

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT-based user authentication

---

## System Architecture

Main system flow:

1. User registers or logs in
2. Role selection (Buyer or Seller)
3. Sellers upload products and define pricing strategy
4. Buyers browse available products
5. Buyer either:

   * Purchases directly, or
   * Starts negotiation with the AI bot
6. AI negotiation engine generates counter offers
7. If agreement is reached → order is created and stock is updated

---

## Core Modules

### Authentication Module

Handles:

* User registration
* Login
* Role-based access control

### Product Management

Allows sellers to:

* Upload products
* Set pricing limits
* Manage inventory

### Negotiation Engine

Responsible for:

* Evaluating buyer offers
* Generating counter offers
* Ensuring seller limits are respected

### Order System

Handles:

* Purchase confirmation
* Inventory updates
* Order storage

---

## Current User Flow Chart

<img width="4396" height="2833" alt="User Flow Digram" src="https://github.com/user-attachments/assets/9982c85e-8eda-48bb-9da0-4641aaff30cf" />


---
