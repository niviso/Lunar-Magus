import {Howl, Howler} from 'howler';

export class SoundHelper{
    constructor(){
        this.loadedSounds = [];
    }

    load(name,url){
        this.loadedSounds[name] = new Howl({
            src: [url]
          });
    }

    play(name){
        this.loadedSounds[name].play();
    }
    pause(name){
        this.loadedSounds[name].pause();
    }
}

export var soundHelper = new SoundHelper();
