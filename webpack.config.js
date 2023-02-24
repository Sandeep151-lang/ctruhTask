const path = require('path');
module.exports={
    output:{
        path:path.join(_dirname,'/dist'),
        filename:'index.bundle.js',
    },
    devServer:{
        port:3000,
        watchContentBase:true,
    },
    module:{
        rules:[{
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        },
    ]
    }
}