<template>
    <article>
        <header>
            <ArrowButton :reversed="true">
                <NuxtLink to="/">Back</NuxtLink>
            </ArrowButton>
        </header>

        <ul>
            <li v-for="i in 24">
                <HourWeather
                    :time="i"
                    :value="Math.floor(Math.random() * 100) + '%'"
                ></HourWeather>
            </li>
        </ul>

        <nav id="options">
            <TextButton
                @click="selectedOption = 0"
                :active="selectedOption === 0"
                :font-weight="400"
                >Precipitation probability</TextButton
            >
            <TextButton
                @click="selectedOption = 1"
                :active="selectedOption === 1"
                :font-weight="400"
                >Precipitation rate</TextButton
            >
            <TextButton
                @click="selectedOption = 2"
                :active="selectedOption === 2"
                :font-weight="400"
                >Temperature</TextButton
            >
            <TextButton
                @click="selectedOption = 3"
                :active="selectedOption === 3"
                :font-weight="400"
                >Wind</TextButton
            >
            <TextButton
                @click="selectedOption = 4"
                :active="selectedOption === 4"
                :font-weight="400"
                >UV</TextButton
            >
            <TextButton
                @click="selectedOption = 5"
                :active="selectedOption === 5"
                :font-weight="400"
                >Air quality</TextButton
            >
        </nav>
    </article>
</template>

<script setup>
function calculateProgressbarLength() {
    return Math.random() * 200 + "px";
}

const selectedOption = ref(2);

onMounted(() => {
    const navElement = document.querySelector("#options");
    navElement.addEventListener("wheel", (event) => {
        event.preventDefault();
        console.log("nav");
        navElement.scrollLeft += event.deltaY;
    });
});
</script>

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
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

ul::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

li {
    all: unset;
}

li > img {
    height: 32px;
}

nav {
    display: flex;
    gap: 24px;
    padding: 8px;
    overflow-x: scroll; /* Wymuszone przewijanie w poziomie */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

nav::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}
</style>
