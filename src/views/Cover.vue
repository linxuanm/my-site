<template>
    <main>
        <PageHeader />
        <FlipCover />
    </main>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import FlipCover from '@/components/FlipCover.vue'
import $ from 'jquery';

export default {
    name: 'Cover',
    data: () => ({
        title: 'Linxuan Ma',
        debounce: false
    }),
    components: {
        PageHeader,
        FlipCover
    },
    mounted() {
        $(window).focus(() => {
            if (!this.debounce) {
                this.debounce = true;
                document.title = "Yay u r back";
                setTimeout(() => {
                    document.title = this.title;
                    this.debounce = false;
                }, 1500);
            }
        });

        $(window).blur(function() {
            document.title = "NOOO dont leave QAQ";
        });
    }
}
</script>

<style scoped>

</style>