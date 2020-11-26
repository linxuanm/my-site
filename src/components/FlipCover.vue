<template>
    <div>
        <div id='flip-cover'>
            <div id='slide-cover' class='center-block gap'>
                <strong class='light-font dark-text fade-text' id='title-text'>Linxuan Ma</strong>
                <p class='light-text lesser thin-font'><span v-html='subtext'></span></p>
            </div>
            <div class='center-block gap'>
                <img src='../assets/images/profile.png' alt="profile" id='profile-image'>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'FlipCover',
    data: () => ({
        subtext: '<br>',
        callback: null
    }),
    mounted() {
        var toPrint = 'Professional dumbass.';
        var blinkFunc = () => {
            this.subtext = this.subtext.slice(-1) === '|' ?
                this.subtext.slice(0, -1) :
                this.subtext + '|';
        };
        
        $('.fade-text').fadeTo(0, 0);

        setTimeout(() => {
            $('.fade-text').animate({
                opacity: 100
            }, 7500);
        }, 500);

        setTimeout(() => {
            this.callback = setInterval(() => {
                if (this.subtext === '<br>') this.subtext = '';

                this.subtext = this.subtext.slice(0, -1) + toPrint[0] + '|';
                toPrint = toPrint.substring(1);

                if (toPrint.length === 0) {
                    clearInterval(this.callback);
                    this.callback = setInterval(blinkFunc, 500);
                }
            }, 120);
        }, 2000);
        
    }
}
</script>

<style scoped>
strong {
    font-size: 4.75rem;
    font-weight: 300;
}

#flip-cover {
    text-align: center;
    height: 90%;
    padding: 7.5rem 0;
}

#profile-image {
    width: 10rem;
    border-radius: 50%;
}

.lesser {
    text-align: left;
    font-size: 1.25rem;
    font-weight: 100;
}
</style>
