//modulo nativo de node, que me gestiona las direcciones de las carpetas
const path = require ('path');

module.exports = {
    entry: './index.js',
    output: {
        path:path.resolve(__dirname),
        filename:'output2.js'
    }
}