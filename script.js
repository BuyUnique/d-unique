class Slide {
    constructor({ container, switchers, arrowLeft, arrowRight, images }) {
        this.container = document.querySelector(container);
        this.switchers = document.querySelectorAll(switchers);
        this.arrowLeft = document.querySelector(arrowLeft);
        this.arrowRight = document.querySelector(arrowRight);
        this.images = images;

        this.counter = 0;

        this.init();
        this.arrowLeft.addEventListener('click', this.previousImage);
        this.arrowRight.addEventListener('click', this.nextImage);
    };

    init = () => {
        this.switchers.forEach((switcher, index) => {
            switcher.addEventListener('click', () => {
                const mediaElement = this.container.querySelector('#media');
                mediaElement.remove();
                this.counter = index;
        
                if (/\.(jpg|jpeg|png|gif)$/i.test(this.images[this.counter])) {
                    const imgElement = document.createElement('img');
                    imgElement.src = `images/${this.images[this.counter]}`;
                    imgElement.alt = 'Image';
                    imgElement.setAttribute('id', 'media');
                    this.container.appendChild(imgElement);
                } else if (/\.(mp4|webm|ogg)$/i.test(this.images[this.counter])) {
                    const videoElement = document.createElement('video');
                    videoElement.controls = true;
        
                    const sourceElement = document.createElement('source');
                    sourceElement.src = `images/${this.images[this.counter]}`;
                    sourceElement.type = 'video/mp4';
        
                    videoElement.appendChild(sourceElement);
                    videoElement.setAttribute('id', 'media');
                    this.container.appendChild(videoElement);
                };

                this.switchers.forEach((switcher, index) => {
                    switcher.style.border = index === this.counter ? '2px solid white' : 'unset';
                });
            });
        });
    };

    nextImage = () => {
        const mediaElement = this.container.querySelector('#media');
        mediaElement.remove();
        this.switchers[this.counter].style.border = 'unset';
    
        this.counter++;
    
        if (this.counter === this.images.length) {
            this.counter = 0;
        };

        if (/\.(jpg|jpeg|png|gif)$/i.test(this.images[this.counter])) {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${this.images[this.counter]}`;
            imgElement.alt = 'Image';
            imgElement.setAttribute('id', 'media');
            this.container.appendChild(imgElement);
        } else if (/\.(mp4|webm|ogg)$/i.test(this.images[this.counter])) {
            const videoElement = document.createElement('video');
            videoElement.controls = true;

            const sourceElement = document.createElement('source');
            sourceElement.src = `images/${this.images[this.counter]}`;
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement);
            videoElement.setAttribute('id', 'media');
            this.container.appendChild(videoElement);
        };
    
        this.switchers[this.counter].style.border = '2px solid white';
    };

    previousImage = () => {
        const mediaElement = this.container.querySelector('#media');
        mediaElement.remove();
        this.switchers[this.counter].style.border = 'unset';
    
        this.counter--;
    
        if (this.counter === -1) {
            this.counter = this.images.length - 1;
        };

        if (/\.(jpg|jpeg|png|gif)$/i.test(this.images[this.counter])) {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${this.images[this.counter]}`;
            imgElement.alt = 'Image';
            imgElement.setAttribute('id', 'media');
            this.container.appendChild(imgElement);
        } else if (/\.(mp4|webm|ogg)$/i.test(this.images[this.counter])) {
            const videoElement = document.createElement('video');
            videoElement.controls = true;

            const sourceElement = document.createElement('source');
            sourceElement.src = `images/${this.images[this.counter]}`;
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement);
            videoElement.setAttribute('id', 'media');
            this.container.appendChild(videoElement);
        };
    
        this.switchers[this.counter].style.border = '2px solid white';
    };
};

const slide1 = new Slide({
    container: '#container1',
    switchers: '#switcher1',
    arrowLeft: '#arrow-left1',
    arrowRight: '#arrow-right1',
    images: [
        'red-round-ball.jpg',
        'white-round-ball.jpg',
        'lv_0_20231119185252.mp4',
    ],
});

const slide2 = new Slide({
    container: '#container2',
    switchers: '#switcher2',
    arrowLeft: '#arrow-left2',
    arrowRight: '#arrow-right2',
    images: [
        'house.jpg',
        'house1.jpg',
        'house3.jpg'
    ],
});

const slide3 = new Slide({
    container: '#container3',
    switchers: '#switcher3',
    arrowLeft: '#arrow-left3',
    arrowRight: '#arrow-right3',
    images: [
        'Retro-house.jpg',
        'Retro-house1.jpg',
        'Retro-house2.jpg',
        'Retro-house3.jpg',
    ],
});

const slide4 = new Slide({
    container: '#container4',
    switchers: '#switcher4',
    arrowLeft: '#arrow-left4',
    arrowRight: '#arrow-right4',
    images: [
        'retro-fire.jpg',
        'retro-fire1.jpg',
        'retro-fire2.jpg',
        'retro-fire3.jpg',
        'retro-fire4.jpg',
    ],
});

const slide5 = new Slide({
    container: '#container5',
    switchers: '#switcher5',
    arrowLeft: '#arrow-left5',
    arrowRight: '#arrow-right5',
    images: [
        'big-gnom.jpg',
        'big-gnom1.jpg',
    ]
});

const slide6 = new Slide({
    container: '#container6',
    switchers: '#switcher6',
    arrowLeft: '#arrow-left6',
    arrowRight: '#arrow-right6',
    images: [
        'mini-gnom.jpg',
        'mini-gnom1.jpg',
    ],
});

const slide7 = new Slide({
    container: '#container7',
    switchers: '#switcher7',
    arrowLeft: '#arrow-left7',
    arrowRight: '#arrow-right7',
    images: [
        'fix-house.jpg',
        'fix-house1.jpg',
        'fix-house2.jpg',
        'fix-house3.jpg',
        'fix-house4.jpg',
    ],
});

const slide8 = new Slide({
    container: '#container8',
    switchers: '#switcher8',
    arrowLeft: '#arrow-left8',
    arrowRight: '#arrow-right8',
    images: [
        'lantern-white.jpg',
        'lantern2.jpg'
    ],
});

const slide9 = new Slide({
    container: '#container9',
    switchers: '#switcher9',
    arrowLeft: '#arrow-left9',
    arrowRight: '#arrow-right9',
    images: [
        'train.jpg',
        'train1.jpg',
        'train2.jpg',
        'train3.jpg',
        'train4.jpg',
    ],
});

const slide10 = new Slide({
    container: '#container10',
    switchers: '#switcher10',
    arrowLeft: '#arrow-left10',
    arrowRight: '#arrow-right10',
    images: [
        'lights-tree.jpg',
        'lights-tree1.jpg',
        'lights-tree2.jpg',
    ],
});

const slide11 = new Slide({
    container: '#container11',
    switchers: '#switcher11',
    arrowLeft: '#arrow-left11',
    arrowRight: '#arrow-right11',
    images: [
        'lights-house.jpg',
        'lights-house1.jpg',
        'lights-house2.jpg',
    ],
});
const slide12 = new Slide({
    container: '#container12',
    switchers: '#switcher12',
    arrowLeft: '#arrow-left12',
    arrowRight: '#arrow-right12',
    images: [
        'decor.jpg',
        'Decor1.jpg',
        'Decor2.jpg',
    ],
});
const slide13 = new Slide({
    container: '#container13',
    switchers: '#switcher13',
    arrowLeft: '#arrow-left13',
    arrowRight: '#arrow-right13',
    images: [
        'snowman.jpg',
        'snowman1.jpg',
        'snowman2.jpg',
    ],
});
const slide14 = new Slide({
    container: '#container14',
    switchers: '#switcher14',
    arrowLeft: '#arrow-left14',
    arrowRight: '#arrow-right14',
    images: [
        'bottle.jpg',
        'bottle1.jpg',
        'bottle2.jpg',
    ],
});
const slide15 = new Slide({
    container: '#container15',
    switchers: '#switcher15',
    arrowLeft: '#arrow-left15',
    arrowRight: '#arrow-right15',
    images: [
        'red-lamp.jpg',
        'red-lamp2.jpg',
        'red-lamp1.jpg'
    ],
});

const slide16 = new Slide({
    container: '#container16',
    switchers: '#switcher16',
    arrowLeft: '#arrow-left16',
    arrowRight: '#arrow-right16',
    images: [
        '4houses.jpg',
        '4houses1.jpg',
        '4houses2.jpg'
    ],
});


const slide17 = new Slide({
    container: '#container17',
    switchers: '#switcher17',
    arrowLeft: '#arrow-left17',
    arrowRight: '#arrow-right17',
    images: [
        'box-santa-bottle.jpg',
        'snowman2.jpg',
        'bottle1.jpg',
        'fix-house2.jpg',
    ],
});

const slide18 = new Slide({
    container: '#container18',
    switchers: '#switcher18',
    arrowLeft: '#arrow-left18',
    arrowRight: '#arrow-right18',
    images: [
        'box-3000.jpg',
    ]
});

const slide19 = new Slide({
    container: '#container19',
    switchers: '#switcher19',
    arrowLeft: '#arrow-left19',
    arrowRight: '#arrow-right19',
    images: [
        'box3300.jpg',
    ]
});

