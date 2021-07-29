const o = new Object()
o.firstName = "Chris"
o.lastName = "VanWert"
o.isTeaching = true
o.greet = function() {
    console.log('hi!')
}

const o2 = {}
o.firstName = "Chris"
o['lastName'] = "VanWert"
const key = "isTeaching"
o[key] = true
o['greet'] = function() {
    console.log('hi!')
}

const o3 = {
    firstName: "Chris",
    lastName: "VanWert",
    isTeaching: true,
    greet: function() {
        console.log('hi!')
    }
    