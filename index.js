// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
       return Object.assign({}, driver, {[key]: value})
    //    return { ...driver, ...{ [key]: value } }
    }

// updateDriverWithKeyAndValue({name: 'Sam'}, 'address', '11 Broadway')

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 
    Object.assign(driver, {[key]: value})
    console.log(driver)
    return driver
    // driver['key'] = value
}
destructivelyUpdateDriverWithKeyAndValue({name: 'Sam'}, 'address', '11 Broadway')

function deleteFromDriverByKey(driver, key) {
   const obj = { ...driver }
    
    // const obj = Object.assign({}, driver)
    delete obj[key]
    // // console.log(obj)
    return obj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
 

    return driver
}