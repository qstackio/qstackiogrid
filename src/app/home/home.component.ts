import { Component } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;
    videoItems = [
        {
            name: 'Video one',
            src: 'http://static.videogular.com/assets/videos/videogular.mp4',
            type: 'video/mp4'
        },
        {
            name: 'Video two',
            src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4'
        },
        {
            name: 'Video three',
            src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
            type: 'video/mp4'
        }
    ];

    activeIndex = 0;
    currentVideo = this.videoItems[this.activeIndex];
    data;

    constructor(private accountService: AccountService) { }

    ngOnInit(): void { }

    videoPlayerInit(data) {
        this.data = data;

        this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
        this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    }

    nextVideo() {
        this.activeIndex++;

        if (this.activeIndex === this.videoItems.length) {
            this.activeIndex = 0;
        }

        this.currentVideo = this.videoItems[this.activeIndex];
    }

    initVdo() {
        //this.data.play();
    }

    startPlaylistVdo(item, index: number) {
        this.activeIndex = index;
        this.currentVideo = item;
    }
   
}