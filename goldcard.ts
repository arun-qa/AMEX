import { Page } from '@playwright/test';

export class GoldCard {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnApplyNow() {
        await this.page.locator('text=Demandez Votre Carte').click();
    }
}
