<template>
    <nav>
        <TextButton><NuxtLink to="/">Today</NuxtLink></TextButton>
        <TextButton><NuxtLink to="/tomorrow">Tomorrow</NuxtLink></TextButton>
        <TextButton>
            <NuxtLink to="/weekly">Weekly</NuxtLink>
        </TextButton>
    </nav>

    <div v-if="weatherData" class="weather">
        <header>
            <h2>{{ calculateDateString(dayIndex) }}, {{ cityName }}</h2>

            <div class="weather-icon">
                <img src="@/assets/svg/sunny.svg" alt="Sunny icon" />
                <h2>
                    {{ weatherCodes[weatherData.current.weatherCode] }}
                </h2>
            </div>
            <div class="weather-info">
                <div class="temperature">
                    {{ Math.round(weatherData?.current.temperature2m) }}°C
                </div>
                <h6>
                    Feels like
                    {{
                        Math.round(weatherData?.current.apparentTemperature) ||
                        "N/A"
                    }}
                    °C
                </h6>
            </div>
            <ArrowButton>
                <NuxtLink to="/hourly">See hourly forecast</NuxtLink>
            </ArrowButton>
        </header>

        <div class="container">
            <article>
                <div class="next-days">
                    <div class="day-forecast">
                        <h5>
                            {{
                                calculateDateString(dayIndex + 1, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        </h5>
                        <img src="@/assets/svg/cloudy.svg" alt="Cloudy icon" />
                        <h6>
                            {{
                                Math.round(
                                    weatherData.daily.temperature2mMax[1],
                                )
                            }}
                            °C
                        </h6>
                    </div>
                    <VerticalDivider />
                    <div class="day-forecast">
                        <h5>
                            {{
                                calculateDateString(dayIndex + 2, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        </h5>
                        <img
                            src="@/assets/svg/rain&thunderstorm.svg"
                            alt="Rain and thunderstorm icon"
                        />
                        <h6>
                            {{
                                Math.round(
                                    weatherData.daily.temperature2mMax[2],
                                )
                            }}
                            °C
                        </h6>
                    </div>
                    <VerticalDivider />
                    <div class="day-forecast">
                        <h5>
                            {{
                                calculateDateString(dayIndex + 3, {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        </h5>
                        <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                        <h6>
                            {{
                                Math.round(
                                    weatherData.daily.temperature2mMax[3],
                                )
                            }}
                            °C
                        </h6>
                    </div>
                </div>
                <ArrowButton>
                    <NuxtLink to="/weekly">Check weather this week</NuxtLink>
                </ArrowButton>
            </article>

            <article>
                <div class="next-days">
                    <div class="day-forecast">
                        <h5>Humidity</h5>
                        <img src="@/assets/svg/cloudy.svg" alt="Cloudy icon" />
                        <h6>
                            {{ weatherData.current.relativeHumidity2m }}
                            %
                        </h6>
                    </div>
                    <VerticalDivider />
                    <div class="day-forecast">
                        <h5>Pressure</h5>
                        <img
                            src="@/assets/svg/rain&thunderstorm.svg"
                            alt="Rain and thunderstorm icon"
                        />
                        <h6>
                            {{
                                Math.round(weatherData.current.surfacePressure)
                            }}
                            hPa
                        </h6>
                    </div>
                    <VerticalDivider />
                    <div class="day-forecast">
                        <h5>Wind</h5>
                        <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                        <h6>
                            {{
                                Math.round(
                                    weatherData.current.windDirection10m,
                                )
                            }}°
                            {{ Math.round(weatherData.current.windSpeed10m) }}
                            km/h
                        </h6>
                    </div>
                    <VerticalDivider />
                    <div class="day-forecast">
                        <h5>Visibility</h5>
                        <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                        <h6>
                            {{
                                weatherData.hourly.visibility[
                                    new Date().getHours()
                                ] / 1000
                            }}
                            km
                        </h6>
                    </div>
                </div>
                <ArrowButton>
                    <NuxtLink to="/details">See more details</NuxtLink>
                </ArrowButton>
            </article>
        </div>
    </div>
    <div v-else class="loading">
        <h3 v-if="cityName">Loading...</h3>
        <h3 v-else>No city provided</h3>
    </div>
</template>

<script setup>
const { dayIndex } = defineProps(["dayIndex"]);

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Freezing light drizzle",
    57: "Freezing dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Freezing light rain",
    67: "Freezing heavy rain",
    71: "Light snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight showers",
    81: "Moderate showers",
    82: "Violent showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
};

function calculateDateString(dayIndex, options) {
    let date = new Date();
    date.setDate(date.getDate() + dayIndex);
    let dateString = date.toLocaleDateString(
        "en-US",
        (options = {
            month: "long",
            day: "numeric",
        }),
    );

    return dateString;
}

import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { name, doubleCount, count, cityName, weatherData } =
    storeToRefs(weatherStore);
const { increment, updateWeatherData } = weatherStore;
console.log(name, cityName);

useFetch(async () => {
    await updateWeatherData();
});

watch(cityName, async (newValue) => {
    await weatherStore.updateWeatherData();
});

useAsyncData(async () => {
    weatherStore.updateWeatherData();
});
</script>

<style scoped>
nav {
    display: flex;
    gap: 24px;
    width: 100%;
    height: content-fit;
    justify-content: center;
}

article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

h2 {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
}

.weather {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
}

.temperature {
    font-size: 96px;
    line-height: 100%;
    font-weight: 700;
}

.weather-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.next-days {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
}

.day-forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

.loading {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
