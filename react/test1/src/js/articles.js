import * as serverApi from './db';
import { async } from 'q';

async function all(){
    let res = await  serverApi.all();
    return parse(res)
}

async function one(id){
    let res = await  serverApi.get(id);
    return parse(res)
}

async function remove(id){
    let res = await  serverApi.remove(id);
    return parse(res)
}

export {all, one, remove};

function parse(text) {
    let info = JSON.parse(text);
    return info.data
}