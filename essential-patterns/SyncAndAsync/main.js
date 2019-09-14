"use strict";

// an unpredictable function or inconsistently asynchronous function
// cannot have function behaving either synchronouslu or asynchronouly on the go.

async function unpredictableFunction(arg) {
    if (arg == true) {
        // will be invoked synchronously
        return "Synchronous"
    } else {
        // will return undefined
        // Note: to make it synchronous use busy-waiting style
        setTimeout(function () {
            console.log("inside timeout callback")
            return "Asynchronous" // will never be returned
        }, 500)
    }
}