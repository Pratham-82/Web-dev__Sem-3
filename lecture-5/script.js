const os = require('os');

console.log(os.platform()); // Output: The operating system platform (e.g., 'win32', 'darwin', 'linux')
console.log(os.arch()); // Output: The operating system architecture (e.g., 'x64', 'arm')
console.log(os.cpus().length); // Output: An array of objects containing information about each CPU/core installed
console.log(os.freemem()); // Output: The total amount of system memory in bytes