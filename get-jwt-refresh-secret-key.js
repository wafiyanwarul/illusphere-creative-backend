const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex'); // Generates a 64-byte hex string
console.log(secret);