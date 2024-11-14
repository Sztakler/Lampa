<template>
    <nav>
        <div class="autocomplete">
            <div class="left-container">
                <button class="modal-close" @click="close">
                    <img
                        class="monochromatic"
                        width="16px"
                        src="@/assets/svg/arrow_forward.svg"
                    />
                </button>
                <h5><input v-model="city" placeholder="Enter city name" /></h5>
            </div>

            <button class="add-button" @click="addCity">
                <img
                    class="monochromatic"
                    width="16px"
                    src="@/assets/svg/plus.svg"
                />
            </button>
        </div>
        <div v-if="showLocations" class="locations-list">
            <div class="horizontal-divider"></div>
            <ul>
                <li
                    v-for="(location, index) in locations"
                    :key="index"
                    @click="selectLocation(location)"
                >
                    {{ location.display_name }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";
import { saveToLocalStorage } from "../stores/helpers";

const weatherStore = useWeatherStore();
const { updateWeatherData, fetchGeocodingData, getCityLocation } = weatherStore;

const { location } = storeToRefs(weatherStore);
const city = ref(location.value.name);
const showLocations = ref(false);
const cityChangedByAutocompletion = ref(false);

const locations = ref([]);

const emit = defineEmits(["addCity", "close"]);
function addCity() {
    emit("addCity");
}

function close() {
    emit("close");
}

function selectLocation(l) {
    const cityLocation = getCityLocation(l);
    location.value = cityLocation;
    city.value = location.value.name;
    cityChangedByAutocompletion.value = true;
    saveToLocalStorage("location", cityLocation);
    updateWeatherData();
    showLocations.value = false;
}

watch(city, async (_) => {
    if (city.value !== "" && !cityChangedByAutocompletion.value) {
        locations.value = await fetchGeocodingData(city);
        showLocations.value = true;
    }
    cityChangedByAutocompletion.value = false;
});
</script>

<style scoped>
nav {
    width: 100%;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    border: var(--black) solid 1px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}

input {
    all: unset;
    height: 100%;
    display: flex;
    align-items: center;
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

img {
    height: 100%;
    display: flex;
    align-items: center;
}

img:hover {
    opacity: 60%;
}

.locations-list {
    width: 100%;
}

ul {
    all: unset;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

li {
    all: unset;
}

li:hover {
    opacity: 50%;
    cursor: pointer;
}

.autocomplete {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.autocomplete > .left-container {
    display: flex;
    gap: 24px;
}

.modal-close > img {
    rotate: 180deg;
}

.horizontal-divider {
    content: "";
    background-color: var(--black);
    width: 100%;
    height: 1px;
}
</style>
