# AMEX
📖 Table of Contents
Project Overview
Assumptions
Setup Instructions
Test Execution


📌 Project Overview
This Playwright UI testing framework automates the French (FR) American Express Credit Card Application Process to validate UI elements and basic user form validations.

The test navigates through the entire credit card application process, ensuring:
✅ Links & buttons function correctly.
✅ Forms are filled accurately.
✅ UI validations trigger correctly for incorrect data input.

📌 Assumptions
Since the website is dynamic, we made the following reasonable assumptions:

The button text and URLs remain stable (minor changes will be updated in page_locator.json).
The Gold Card link always exists in the "Cartes American Express" section.
The user form accepts junk test data and displays validation errors correctly.
The test covers only basic UI validations (not backend verifications).
Users always start from the Homepage and do not use bookmarked links.
The browser language is set to French (FR) by default.

📌 Setup Instructions
1️⃣ Install Dependencies
Clone the repository:
git clone https://github.com/your-repo/playwright-amex-fr.git
cd playwright-amex-fr
Initialize a new project:
npm init -y
Install Playwright:
npm install @playwright/test
npx playwright install

📌 Test Execution
Run All Tests
npx playwright test

Run a Specific Test
npx playwright test tests/fr_credit_card_application.spec.ts

Run Tests in Headed Mode
(Useful for debugging)

npx playwright test --headed
Run Tests in UI Mode

(Interactive mode)
npx playwright test --ui
