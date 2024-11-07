<template>
    <transition name="slide">
        <div v-if="show" class="modal-overlay" @click="close">
            <div class="modal-content" @click.stop>
                <div style="border: 1px black solid">
                    <Navigation />
                </div>
                <button class="modal-close" @click="close">×</button>
                <header>
                    <h2>Saved cities</h2>
                    {{ cityName }}
                    {{ weatherData.general.cityName }}
                </header>
                <ul>
                    <li v-for="(city, index) in savedCities" :key="index">
                        <button @click="changeCity(city)">{{ city }}</button>
                    </li>
                </ul>

                <button @click="addCity(cityName)">Add new</button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";
import { loadState, saveState } from "../stores/helpers";

const weatherStore = useWeatherStore();
const { updateWeatherData, fetchGeocodingData } = weatherStore;
const { cityName, weatherData } = storeToRefs(weatherStore);
const savedCities = ref(["Wrocław", "Katowice", "Kraków", "Warszawa"]);

const { show } = defineProps(["show"]);
const emit = defineEmits(["close"]);

function changeCity(city) {
    cityName.value = city;
    saveState(city);
    updateWeatherData();
    close();
}

async function addCity(city) {
    let geocodingData = await fetchGeocodingData(city);

    if (!savedCities.value.includes(geocodingData.name))
        savedCities.value = [...savedCities.value, geocodingData.name];
}

const close = () => {
    emit("close");
};
</script>

<style scoped>
.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0vh);
    transition: transform 0.5s ease;
}

.modal-content {
    position: relative;
    background: white;
    padding: 1.5rem;
    max-width: 500px;
    width: 90%;
    border-radius: 5px;
}

.slide-enter-active {
    transform: translateY(-100vh); /* Docelowa pozycja */
}

.slide-leave-active {
    transform: translateY(0vh); /* Powrót do początkowej pozycji */
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100vh); /* Początkowa pozycja przy wejściu */
}
</style>
