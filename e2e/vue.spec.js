import { test, expect } from '@playwright/test'

test('deberia realizar una suma completa en la calculadora', async ({ page }) => {
  await page.goto('/')

  await page.locator('#btn-5').click()
  await page.locator('#btn-add').click()
  await page.locator('#btn-3').click()
  await page.locator('#btn-equals').click()

  await expect(page.locator('.calculator__result')).toHaveText('8')
})

test('deberia mostrar Error al dividir entre cero', async ({ page }) => {
  await page.goto('/')

  await page.locator('#btn-5').click()
  await page.locator('#btn-divide').click()
  await page.locator('#btn-0').click()
  await page.locator('#btn-equals').click()

  await expect(page.locator('.calculator__result')).toHaveText('Error')
})

test('deberia convertir una cantidad entre divisas', async ({ page }) => {
  await page.goto('/')

  await page.locator('#amount-from').fill('100')
  await page.locator('#amount-from').dispatchEvent('input')

  await expect(page.locator('.currency-converter__result-value')).not.toContainText('0.00')
})