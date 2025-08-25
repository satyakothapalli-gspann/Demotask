export class loginPage{
    constructor(page){
this.page=page
this.email=page.locator("#email")
this.signIn=page.locator("#enterimg")
    }

async login(){
    await this.page.goto("https://demo.automationtesting.in/")

}
async enterEmailId(email){
    await this.email.fill(email)
}
async clicksignInButton(){
    await this.signIn.click()
}
async click(){
    await this.signIn.click()
}
}
