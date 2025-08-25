export class RegisterPage{
    constructor(page){
        this.page=page
        this.firstName=page.locator("[placeholder='First Name']")
        this.lastName=page.locator("[placeholder='Last Name']")
        this.address=page.locator("[ng-model='Adress']")
        this.emailAddress=page.locator("[ng-model='EmailAdress']")
        this.phone=page.locator("[ng-model='Phone']")
        this.gender=page.locator("[value='FeMale']")
        this.hobbies1=page.locator("#checkbox1")
        this.hobbies2=page.locator("#checkbox2")
        this.language=page.locator("#msdd")
        const language1=page.locator("msdd")
        this.skills=page.locator("#Skills")
        this.selectLanguage=page.getByText("Arabic")
        this.skillsText=page.locator("//label[text()='Skills']")
        this.countrySelectDropDown= page.locator(".select2-selection__arrow")
        this.selectCountryLoc= page.getByRole('treeitem', { name: 'India' })
        this.selectCountry= page.locator("#countries")
        this.yearBox=page.locator("#yearbox")
        this.monthBox=page.locator("[placeholder='Month']")
        this.date=page.locator("#daybox")
        this.password=page.locator("#firstpassword")
        this.confirmpassword=page.locator("#secondpassword")
        this.chooseFilebutton=page.locator("#imagesrc")
        this.submitButton=page.locator("#submitbtn")
        



    }
    async firstDetails(FirstName,LastName,address,emailAddress,phoneNumber){
        await this.firstName.fill(FirstName)
        await this.lastName.fill(LastName)
        await this.address.fill(address)
        await this.emailAddress.fill(emailAddress)
        await this.phone.fill(phoneNumber)
    }
    async middleDetails(){

        await this.gender.click()
        await this.hobbies1.check()
        await this.hobbies2.check()
        await this.language.click()
        await this.selectLanguage.click()
        await this.skillsText.click()
        await this.skills.selectOption({value:"Adobe InDesign"})
        await this.countrySelectDropDown.click()
        await this.selectCountryLoc.click
    }
   async lastDetails(password){
        await this.yearBox.selectOption("2001")
        await this.monthBox.selectOption("March")
        await this.date.selectOption("10")
        await this.password.fill(password)
        await this.confirmpassword.fill(password)
   }
       
  async uploadFile(path){
        await this.chooseFilebutton.setInputFiles(path)

  }  
  async clickOnSubmitButton(){
        await this.submitButton.click()
  }
    
}