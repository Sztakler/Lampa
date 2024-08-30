<template>
    <nav>
        <TextButton><NuxtLink to="/">Today</NuxtLink></TextButton>
        <TextButton><NuxtLink to="/tomorrow">Tomorrow</NuxtLink></TextButton>
        <TextButton>
            <NuxtLink to="/weekly">Weekly</NuxtLink>
        </TextButton>
    </nav>

    <header>
        <h2>{{ calculateDateString(dayIndex) }}, Wrocław</h2>
        <div class="weather-icon">
            <img src="@/assets/svg/sunny.svg" alt="Sunny icon" />
            <h2>Sunny</h2>
        </div>
        <div class="weather-info">
            <div class="temperature">30°C</div>
            <h6>Feels like 26 °C</h6>
        </div>
        <ArrowButton>
            <NuxtLink to="/hourly">See hourly forecast</NuxtLink>
        </ArrowButton>
    </header>

    <div class="container">
        <article>
            <div class="next-days">
                <div class="day-forecast">
                    <h5>Sun, Aug 25</h5>
                    <img src="@/assets/svg/cloudy.svg" alt="Cloudy icon" />
                    <h6>28 °C</h6>
                </div>
                <VerticalDivider />
                <div class="day-forecast">
                    <h5>Mon, Aug 26</h5>
                    <img
                        src="@/assets/svg/rain&thunderstorm.svg"
                        alt="Rain and thunderstorm icon"
                    />
                    <h6>23 °C</h6>
                </div>
                <VerticalDivider />
                <div class="day-forecast">
                    <h5>Tue, Aug 27</h5>
                    <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                    <h6>25 °C</h6>
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
                    <h6>59 %</h6>
                </div>
                <VerticalDivider />
                <div class="day-forecast">
                    <h5>Pressure</h5>
                    <img
                        src="@/assets/svg/rain&thunderstorm.svg"
                        alt="Rain and thunderstorm icon"
                    />
                    <h6>1013 hPa</h6>
                </div>
                <VerticalDivider />
                <div class="day-forecast">
                    <h5>Wind</h5>
                    <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                    <h6>SE 9 km/h</h6>
                </div>
                <VerticalDivider />
                <div class="day-forecast">
                    <h5>Visibility</h5>
                    <img src="@/assets/svg/rain.svg" alt="Rain icon" />
                    <h6>16 km</h6>
                </div>
            </div>
            <ArrowButton>
                <NuxtLink to="/details">See more details</NuxtLink>
            </ArrowButton>
        </article>
    </div>
</template>

<script setup>
const { dayIndex } = defineProps(["dayIndex"]);

function calculateDateString(dayIndex) {
    let date = new Date();
    date.setDate(date.getDate() + dayIndex);
    let dateString = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
    });

    return dateString;
}
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
}
</style>
