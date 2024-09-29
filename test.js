const port = process.env.PORT || 3000
console.log("Port : " + port)
console.log("MODE_ENV : " + process.env.NODE_ENV)
console.log(process.env.NODE_ENV === "production")

if (typeof(PhusionPassenger) !== 'undefined') {
    console.log('passenger');
    console.log(PhusionPassenger)
} else {
    console.log(3000);
}
