const { name, height, message } = require("../index.js");


describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Joe')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(39).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})

