<template>
    <transition name="slide">
        <div v-if="show" class="modal-overlay" @click="close">
            <div class="modal-content" @click.stop>
                <div class="close-button-container">
                    <button class="modal-close" @click="close">
                        <img
                            class="monochromatic"
                            width="16px"
                            src="@/assets/svg/xmark.svg"
                        />
                    </button>
                </div>
                <div class="header">
                    <div class="navigation-container">
                        <Navigation />
                        <button class="add-button" @click="addCity(cityName)">
                            <img
                                class="monochromatic"
                                width="16px"
                                src="@/assets/svg/plus.svg"
                            />
                        </button>
                    </div>
                </div>
                <div class="cities-list">
                    <header>
                        <h2>Saved cities</h2>
                    </header>
                    <ul>
                        <li v-for="(city, index) in savedCities" :key="index">
                            <button
                                class="change-city-button"
                                @click="changeCity(city)"
                            >
                                {{ city }}
                            </button>
                            <button @click="deleteCity(city)">
                                <img
                                    class="monochromatic"
                                    width="12px"
                                    src="@/assets/svg/trash.svg"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";
import {
    saveState,
    saveToLocalStorage,
    loadFromLocalStorage,
} from "../stores/helpers";

const weatherStore = useWeatherStore();
const { updateWeatherData, fetchGeocodingData } = weatherStore;
const { cityName } = storeToRefs(weatherStore);

const savedCities = ref([]);

onMounted(() => {
    savedCities.value = loadFromLocalStorage("cities") || [];
});

const { show } = defineProps(["show"]);
const emit = defineEmits(["close"]);

function changeCity(city) {
    cityName.value = city;
    saveState(city);
    updateWeatherData();
    close();
}

async function deleteCity(city) {
    savedCities.value = savedCities.value.filter((c) => {
        return c !== city;
    });
    saveToLocalStorage("cities", savedCities.value);
}

async function addCity(city) {
    let geocodingData = await fetchGeocodingData(city);

    if (!savedCities.value.includes(geocodingData.name)) {
        savedCities.value = [...savedCities.value, geocodingData.name];
        saveToLocalStorage("cities", savedCities.value);
    }
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
    background-color: var(--white);
    display: flex;
    align-items: flex-start;
    transform: translateY(0vh);
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
}

.modal-content {
    position: relative;
    background-color: var(--white);
    padding: 1.5rem;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 32px;
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

.header {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.navigation-container {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
}

.close-button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.cities-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

ul {
    all: unset;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

ul > li {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

button {
    all: unset;
    cursor: pointer;
    white-space: nowrap;
}

button:hover {
    color: var(--black-75);
}

.add-button {
    font-weight: 600;
}

.change-city-button {
    width: 100%;
}

img:hover {
    opacity: 60%;
}
</style>
