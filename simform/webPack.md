# **<p align="center">   WebPack </p>**

<br />

## Installation

- `npm i -D webpack webpack-cli`

- **-D** install as **for** Dev Dependency
---
<br />
 

 <br />

## Run WebPack

- without webpack config file :  `webpack  --mode production`

-  with webpack config file : `webpack`
---
<br />
 

## webpack.config.js

<br />

```
module.exports = {
    mode : 'development'
    entry : path.resolve(__dirname , 'src/index.js'), // From where the webpack get files for bundle
    
    // Where the Bundle files are Locating
    output : { 
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',
    }
}

```

- Dynamicly Type of entry-exit

```
    entry : {
      bundle : path.resolve(__dirname , 'src/index.js'),  
    }  
    output : { 
        path: path.resolve(__dirname , 'dist'),
        filename: '[name].js',
    }
```

---
<br />
 

 <br />
 
## Loaders

<br />

- used for build specific type of file in Webpack

```
module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }

```

---
<br />
 

 <br />
 
## Server

<br />

- Server Dependency using Webpack

- Dependency ->  `webpack-dev-server`

- command to run -> `webpack serve`
```
   devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    }

```