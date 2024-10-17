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
const { updateWeatherData, loadCityFromStorage } = weatherStore;

useFetch(async () => {
    await weatherStore.updateWeatherData();
});

watch(cityName, async (_) => {
    await weatherStore.updateWeatherData();
    saveState(cityName.value);
});

onBeforeMount(() => {
    weatherStore.loadCityFromStorage();
});

onMounted(() => {
    weatherStore.loadCityFromStorage();
    // const persistedCityName = loadState("cityName");
    // if (persistedCityName) {
    // cityName.value = persistedCityName;
    // }
});
</script>

<style scoped>
nav {
    height: 32px;
    width: 390px;
    padding: 16px;
    border-radius: 16px;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input {
    all: unset;
}
</style>
