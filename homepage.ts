import { Page } from '@playwright/test';

export class Homepage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
    }

    async clickOnCartesAmex() {
        await this.page.locator('a:has-text("Cartes American Express")').click();
    }
}
