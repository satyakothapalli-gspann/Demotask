
import{test as base,expect} from '@playwright/test'
import { loginPage } from '../Pages/page1'
import { RegisterPage } from '../Pages/page2'

 
export const test=base.extend({
    loginPage:async({page},use)=>{
        await use(new loginPage(page))    
    },
    Register:async({page},use)=>{
        await use (new RegisterPage(page))
    }
})

export{expect}
