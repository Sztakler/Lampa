<template>
    <article>
        <header>
            <ArrowButton :reversed="true">
                <NuxtLink to="/">Back</NuxtLink>
            </ArrowButton>
        </header>

        <ul>
            <li v-for="i in 7">
                <DayWeather :index="i"></DayWeather>
            </li>
        </ul>
    </article>
</template>

<script lang="ts" setup></script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    width: 100%;
    height: 100%;
}

ul {
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
}

li {
    all: unset;
}

li > img {
    height: 32px;
}
</style>
