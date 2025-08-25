import { register } from 'module'
import {test,expect} from './Fixture.js'


test('signUp',async({loginPage,Register})=>{
    
    await loginPage.login()
    await loginPage.enterEmailId("test@test.com")
    await loginPage.clicksignInButton()
    await Register.FirstDetails("satya","devi","Bhimavaram","test@test.com","1234567890")
    await Register.MiddleDetails()
    await Register.lastDetails("satya")
    await Register.uploadFile("Files/file.txt")
    await Register.clickOnSubmitButton()
    await expect(Register.selectCountry).toHaveJSProperty('validationMessage', 'Please select an item in the list.')
    await Register.clickOnSubmitButton()
    await expect(Register.selectCountry).toHaveJSProperty('validationMessage', 'Please select an item in the list.')
})
test('hbhh',async({Register})=>{
    await Register.lastDetails("satya")
    await Register.uploadFile("Files/file.txt")
    await Register.clickOnSubmitButton()
})