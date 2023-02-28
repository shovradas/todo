import { getFullName } from "./user.service"

describe('module:user', ()=> {
    describe('func:getFullName', ()=> {
        it('should return first name only', async () => {
            const firstName = 'John'
            const result = await getFullName(firstName, '')
            expect(result).toStrictEqual(firstName)
        })

        it('should return last name only', async () => {
            const lastName = 'Doe'
            const result = await getFullName('', lastName)
            expect(result).toStrictEqual(lastName)
        })

        it('should return full name', async () => {
            const firstName = 'John'
            const lastName = 'Doe'
            const fullName = `${firstName} ${lastName}`
            const result = await getFullName(firstName, lastName)
            expect(result).toStrictEqual(fullName)
        })
    })
})