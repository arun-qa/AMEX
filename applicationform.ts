import { Page, expect } from '@playwright/test';

export class ApplicationForm {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillFormWithJunkData() {
        await this.page.fill('input[name="firstName"]', 'JunkFirstName');
        await this.page.fill('input[name="lastName"]', 'JunkLastName');
        await this.page.fill('input[name="email"]', 'invalidemail.com');
        await this.page.fill('input[name="phone"]', '123456789');
        await this.page.fill('input[name="income"]', 'abcdef'); // Invalid income format
    }

    async submitApplication() {
        await this.page.locator('button:has-text("Sauvegarder et Continuer")').click();
    }

    async verifyErrorMessages() {
        await expect(this.page.locator('text=Veuillez saisir une adresse e-mail valide')).toBeVisible();
        await expect(this.page.locator('text=Veuillez entrer un numéro de téléphone valide')).toBeVisible();
        await expect(this.page.locator('text=Veuillez saisir un montant valide')).toBeVisible();
    }
}
