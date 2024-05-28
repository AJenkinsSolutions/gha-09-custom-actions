//1. go to this folder in your terminal and run  
// $ npm init -y
// *Must have node installed on system* 
//2. install deps
// npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');



function run(){
    //Used to log a message to the github actions workflopw log
    core.notice('Hello form my custom javascript action')

}

run();
