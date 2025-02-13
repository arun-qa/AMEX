import { test } from '@playwright/test';
import { Homepage } from '../pages/homepage';
import { AllCards } from '../pages/allcards';
import { GoldCard } from '../pages/goldcard';
import { ApplicationForm } from '../pages/applicationform';

test('FR Credit Card Application Flow - UI Validation', async ({ page }) => {
    const homepage = new Homepage(page);
    const allCards = new AllCards(page);
    const goldCard = new GoldCard(page);
    const applicationForm = new ApplicationForm(page);

    // Step 1: Navigate to Homepage
    await homepage.navigateToHomePage();

    // Step 2: Click on "Cartes American Express"
    await homepage.clickOnCartesAmex();

    // Step 3: Click on "En Savoir Plus" under Gold Card
    await allCards.clickOnGoldCardDetails();

    // Step 4: Click on "Demandez Votre Carte"
    await goldCard.clickOnApplyNow();

    // Step 5: Fill form with Junk Data
    await applicationForm.fillFormWithJunkData();

    // Step 6: Submit Application
    await applicationForm.submitApplication();

    // Step 7: Validate UI Errors
    await applicationForm.verifyErrorMessages();
});
