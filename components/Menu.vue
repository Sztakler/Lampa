<template>
    <transition name="slide">
        <div v-if="show" class="modal-overlay" @click="close">
            <div class="modal-content" @click.stop>
                <div class="navigation-container">
                    <Navigation @addCity="addCity(cityName)" @close="close" />
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
                                {{ city.name }}
                            </button>
                            <button @click="deleteCity(city)">
                                <img
                                    class="monochromatic"
                                    width="12px"
                                    src="@/assets/svg/minus.svg"
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
const { cityName, location } = storeToRefs(weatherStore);

const savedCities = ref([]);

onMounted(() => {
    savedCities.value = loadFromLocalStorage("cities") || [];
});

const { show } = defineProps(["show"]);
const emit = defineEmits(["close"]);

function changeCity(city) {
    cityName.value = city.name;
    location.value = city;
    saveToLocalStorage("cityName", city.name);
    saveToLocalStorage("location", city);
    updateWeatherData();
    close();
}

async function deleteCity(city) {
    savedCities.value = savedCities.value.filter((c) => {
        return c !== city;
    });
    saveToLocalStorage("cities", savedCities.value);
}

async function addCity() {
    const newLocation = location.value;
    let isDuplicate = savedCities.value.some((city) => {
        console.log(city);
        return (
            city.longitude === newLocation.longitude &&
            city.latitude === newLocation.latitude &&
            city.name === newLocation.name
        );
    });

    if (!isDuplicate) {
        savedCities.value = [newLocation, ...savedCities.value];
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
    align-items: flex-start;
    gap: 8px;
    position: absolute;
    width: 100%;
    padding: 16px;
    z-index: 100;
    left: 0;
    width: calc(100% - 2 * 16px);
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
    padding-top: calc(72px + 24px);
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
