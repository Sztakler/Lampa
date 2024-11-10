<template>
    <nav>
        <h5><input v-model.lazy="cityName" placeholder="Enter city name" /></h5>
    </nav>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";
import { loadState, saveState } from "../stores/helpers";

const weatherStore = useWeatherStore();
const { cityName } = storeToRefs(weatherStore);

watch(cityName, async (_) => {
    await weatherStore.updateWeatherData();
    saveState(cityName.value);
});
</script>

<style scoped>
nav {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    border: var(--black) solid 1px;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input {
    all: unset;
}
</style>
