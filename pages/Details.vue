<template>
    <article>
        <header>
            <ArrowButton :reversed="true">
                <NuxtLink to="/">Back</NuxtLink>
            </ArrowButton>
        </header>

        <div class="container">
            <div class="weather">
                <div class="details">
                    <h4>Current weather</h4>
                    <ul>
                        <li>
                            <h6>
                                Temperature:
                                {{
                                    Math.round(
                                        weatherData.current.temperature2m,
                                    )
                                }}
                                °C
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Feels like:
                                {{
                                    Math.round(
                                        weatherData.current.apparentTemperature,
                                    )
                                }}
                                °C
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Humidity:
                                {{
                                    Math.round(
                                        weatherData.current.relativeHumidity2m,
                                    )
                                }}
                                %
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Pressure:
                                {{
                                    Math.round(
                                        weatherData.current.surfacePressure,
                                    )
                                }}
                                hPa
                            </h6>
                        </li>
                    </ul>
                </div>
                <img
                    class="monochromatic"
                    :src="weatherStore.getIconPath(0, 'current')"
                    :alt="weatherStore.getWeatherDescription(0, 'current')"
                />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Precipitation</h4>
                    <ul>
                        <li>
                            <h6>
                                Probability:
                                {{
                                    Math.round(
                                        weatherData.daily
                                            .precipitationProbabilityMax[0],
                                    )
                                }}
                                %
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Rate:
                                {{
                                    Math.round(
                                        weatherData.current.precipitation,
                                    )
                                }}
                                mm/h ({{
                                    getPrecipitationDescription(
                                        weatherData.current.precipitation,
                                    )
                                }})
                            </h6>
                        </li>
                    </ul>
                </div>
                <img
                    class="monochromatic"
                    src="/weather-icons/raindrop.svg"
                    alt="Raindrop icon"
                />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Wind</h4>
                    <ul>
                        <li>
                            <h6>
                                Speed:
                                {{
                                    Math.round(weatherData.current.windSpeed10m)
                                }}
                                km/h ({{
                                    getWindDescription(
                                        weatherData.current.windSpeed10m,
                                    )
                                }})
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Gust:
                                {{
                                    Math.round(weatherData.current.windGusts10m)
                                }}
                                km/h ({{
                                    getWindDescription(
                                        weatherData.current.windGusts10m,
                                    )
                                }})
                            </h6>
                        </li>
                        <li>
                            <h6>
                                Direction:
                                {{
                                    getWindDirection(
                                        weatherData.current.windDirection10m,
                                    )
                                }}
                            </h6>
                        </li>
                    </ul>
                </div>
                <img
                    class="monochromatic"
                    src="/weather-icons/wind.svg"
                    alt="Wind icon"
                />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Sunset and Sunrise</h4>
                    <div class="horizontal-list">
                        <div class="captioned-icon">
                            <img
                                class="monochromatic"
                                src="/weather-icons/sunrise.svg"
                                alt="Wind icon"
                            />
                            <h6>Unavailable</h6>
                        </div>
                        <div class="captioned-icon">
                            <img
                                class="monochromatic"
                                src="/weather-icons/sunset.svg"
                                alt="Wind icon"
                            />
                            <h6>Unavailable</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherData, weatherIcons } = storeToRefs(weatherStore);

function getPrecipitationDescription() {
    return "No description available";
}

function getWindDescription() {
    return "No description available";
}

function getWindDirection() {
    return "No description available";
}
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
}

li {
    all: unset;
}

img {
    height: 92px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
}

.weather {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

.horizontal-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 100%;
}

.captioned-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
