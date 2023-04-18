import {spawnSync, kill} from 'react-native-childprocess'
 
let python;
 
export async function run(){
    const { spawnSync } = require('child_process');
    const python = await spawnSync('python3', ['-c', `from apps import ${appName}; ${appName}.run(${inputData}); assert False`], { encoding: "utf8" });

    // Access stdout
    return(python.stdout)

    // Access stderr
    console.log(python.stderr)
}
 
export async function stop(){
    kill(python);
}