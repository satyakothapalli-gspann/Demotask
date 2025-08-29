export class loginPage{
    constructor(page){
this.page=page
this.email=page.locator("#email")
this.signIn=page.locator("#enterimg")
    }

async parctice(){
    await this.page.goto("https://demo.automationtesting.in/")

}
async practiseemail(email){
    await this.email.fill(email)
}