# Chatbot

A simple chatbot application built with Next.js, TypeScript, and Tailwind CSS
that fetches data from a JSON file to display stock prices for selected
companies. The bot allows users to select a stock exchange and see the top
companies' stock prices.

## About

This chatbot provides an easy interface for users to:

- Select a stock exchange and view the top companies listed.
- Get the current stock price of any selected company.
- Navigate back to the main menu or reselect a stock exchange to explore more
  companies.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (>=21.x recommended)
- **npm** (>=10.x recommended)

### Installation

1. Clone the repository

```bash
git clone git@github.com:cbalasa/chatbot.git
```

2. Install dependencies

```bash
npm install
```

3. Start the application

```bash
npm run dev
```

### How to use

- Open the application in your browser.
- Choose a stock exchange to view the top companies.
- Select a company to see its current stock price.
- Use the options to go back or explore another stock exchange.

### Known issues in Dev

- While using Chrome can cause hydration errors and you need to refresh the
  page. I recommend to use Safari.
- Strict mode forces components to render twice, therefor the initial messages
  will appear twice in development mode.
