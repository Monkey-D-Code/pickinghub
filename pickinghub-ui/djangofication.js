const path = require('path');
const fs = require('fs');



const build_static_dir = path.join(path.join(__dirname , 'build'), 'static');
const css_path = path.join(build_static_dir , 'css');
const js_path = path.join(build_static_dir, 'js');

const server_static = path.join(path.join(__dirname , '../'),'static');
const react_app_name = __dirname.split(path.sep).pop();
const react_app_static = path.join(server_static , react_app_name);


// reading js path
fs.readdir(js_path ,(error,files)=>{
    if(error){
        console.log(`Unable to scan directory : ${error}`)
    }else{
        files.forEach(file => {
            // check for the file main.###.chunk.js
            const regex_2 = /^main\.[a-z 0-9]+\.chunk\.js$/ ;
            const regex_1 = /^[0-9 a-z]\.[0-9 a-z]+\.chunk\.js$/;
            if(regex_2.test(file)){
                
                // rename the file to examination-ui-1.js
                fs.rename(path.join(js_path,file) , path.join(js_path ,`${react_app_name}-2.js`),(error)=>{
                    if(error){
                        console.error(`${error} : Error occured renaming file`)
                    }else{
                        console.log(`${file} has been renamed to ${react_app_name}-2.js`);
                        // copy file to react app static file
                        fs.copyFile(path.join(js_path,`${react_app_name}-2.js`) , path.join(react_app_static , `${react_app_name}-2.js`), (err) => {
                            if (err) throw err;
                            console.log(`${react_app_name}-2.js is moved from ${js_path} to ${react_app_name}`);
                        });
                    }
                })
            }
            if(regex_1.test(file)){
                 // rename the file to examination-react.ui.js
                 fs.rename(path.join(js_path,file) , path.join(js_path ,`${react_app_name}-1.js`),(error)=>{
                    if(error){
                        console.error(`${error} : Error occured renaming file`)
                    }else{
                        console.log(`${file} has been renamed to ${react_app_name}-2.js`);
                        // copy file to react app static file
                        fs.copyFile(path.join(js_path,`${react_app_name}-1.js`) , path.join(react_app_static , `${react_app_name}-1.js`), (err) => {
                            if (err) throw err;
                            console.log(`${react_app_name}-1.js is moved from ${js_path} to ${react_app_name}`);
                        });
                    }
                })
            }
        });
    }


})

// reading css path
fs.readdir(css_path ,(error,files)=>{
    if(error){
        console.log(`Unable to scan directory : ${error}`)
    }else{
        files.forEach(file => {
            // check for the file main.###.chunk.css
            const regex = /^main\.[a-z 0-9]+\.chunk\.css$/ ;
            if(regex.test(file)){
                
                // rename the file to examination_-react.ui.css
                fs.rename(path.join(css_path,file) , path.join(css_path ,`${react_app_name}.css`),(error)=>{
                    if(error){
                        console.error(`${error} : Error occured renaming file`)
                    }else{
                        console.log(`${file} has been renamed to ${react_app_name}.css`);
                        // move the file to server static app folder
                        fs.copyFile(path.join(css_path,`${react_app_name}.css`) , path.join(react_app_static , `${react_app_name}.css`), (err) => {
                            if (err) throw err;
                            console.log(`${react_app_name}.css is moved from ${css_path} to ${react_app_static}`);
                        });
                    }
                })
            }
        });
    }


})