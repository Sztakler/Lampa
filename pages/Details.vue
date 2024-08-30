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
                        <li><h6>Temperature: 30 °C</h6></li>
                        <li><h6>Feels like: 32 °C</h6></li>
                        <li><h6>Humidity: 55 %</h6></li>
                        <li><h6>Pressure: 1023 hPa</h6></li>
                    </ul>
                </div>
                <img src="@/assets/svg/sunny.svg" alt="Sunny icon" />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Precipitation</h4>
                    <ul>
                        <li><h6>Probability: 5 %</h6></li>
                        <li><h6>Rate: 4.7 mm/h (moderate rain)</h6></li>
                    </ul>
                </div>
                <img src="@/assets/svg/rain.svg" alt="Rain icon" />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Wind</h4>
                    <ul>
                        <li><h6>Speed: 4.7 km/h (light breeze)</h6></li>
                        <li><h6>Direction: South-East</h6></li>
                    </ul>
                </div>
                <img src="@/assets/svg/wind.svg" alt="Wind icon" />
            </div>

            <div class="weather">
                <div class="details">
                    <h4>Sunset and Sunrise</h4>
                    <div class="horizontal-list">
                        <div class="captioned-icon">
                            <img src="@/assets/svg/sunny.svg" alt="Day icon" />
                            <h6>05:59</h6>
                        </div>
                        <div class="captioned-icon">
                            <img
                                src="@/assets/svg/clear-night.svg"
                                alt="Night icon"
                            />
                            <h6>19:45</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
