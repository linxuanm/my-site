<template>
    <div id='header-bar'>
        <ul>
            <li
                v-for='link in links'
                :key='link.text'
                :to='link.url'
                class='light-font nav-item bold-weight light-text'>
                <span class='underline'>{{link.text }}</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'PageHeader',
    data: () => ({
        links: [
            {
                text: 'About Me',
                url: '/'
            },
            {
                text: 'Portfolio',
                url: '/portfolio'
            },
            {
                text: 'Playground',
                url: '/playground'
            },
        ]
    })
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0 2.5% 0 0;
    padding: 0;
    right: 0;
    position: absolute;
}

#header-bar {
    padding: 1rem 0 1rem 0;
    margin-bottom: 1.3rem;
}

.nav-item {
    display: inline;
    padding: 0 1rem 0 1rem;
    font-size: .7rem;
    transition-duration: 0.25s;
    cursor: pointer;
}

.nav-item:hover {
    color: #333;
}
</style>
