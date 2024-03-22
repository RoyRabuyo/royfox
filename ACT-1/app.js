import { myImage } from "./images.js"
import { myInfo } from "./info.js"

let myDataObject = {
    title : "Husky",
    definition : "Husky is a general term for a dog used in the polar regions, primarily and specifically for work as sled dogs. It refers to a traditional northern type, notable for its cold-weather tolerance and overall hardiness.[1][2] Modern racing huskies that maintain arctic breed traits (also known as Alaskan huskies) represent an ever-changing crossbreed of the fastest dogs",
    MyImg : "images.jpg",
    buttonName : "Play With Us"
}

const {title, definition, MyImg, buttonName} = myDataObject

let container = document.getElementById('container')

container.append(myImage(MyImg))
container.append(myInfo(title, definition, buttonName))
