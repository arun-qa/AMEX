import { Page } from '@playwright/test';

export class AllCards {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnGoldCardDetails() {
        await this.page.locator('text=En Savoir Plus').first().click();
    }
}
