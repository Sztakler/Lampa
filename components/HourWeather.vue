<template>
    <div class="container">
        <div class="hour">{{ calculateTimeString(time) }}</div>
        <img src="@/assets/svg/sunny.svg" alt="Sunny icon" />
        <div class="progress-bar">
            <div class="bar">
                <div class="circle"></div>
                <div
                    class="line"
                    :style="{ width: calculateProgressbarLength(value) }"
                ></div>
            </div>
            {{ value }}
        </div>
    </div>
</template>

<script setup>
const { time, value } = defineProps(["time", "value"]);

function calculateProgressbarLength(value) {
    let maxLength = 150;
    let number = value.match(/\d+/g).join("");
    return (number / 100) * maxLength + "px";
}

function calculateTimeString(i) {
    let currentTime = new Date().getHours();
    let hour = (currentTime + i - 1) % 24;

    if (hour < 10) hour = "0" + hour;

    return hour + ":00";
}
</script>

<style scoped>
img {
    height: 32px;
    width: auto;
}

.container {
    display: flex;
    align-items: center;
    gap: 24px;
}

.progress-bar {
    display: flex;
    align-items: center;
    gap: 8px;
}

.progress-bar > .bar {
    display: flex;
    align-items: center;
}

.circle {
    height: 10px;
    width: 10px;
    content: "";
    border: 1px solid var(--black);
    border-radius: 999px;
}

.line {
    height: 1px;
    background-color: var(--black);
}
</style>
