<template>
    <div class="container">
        <div class="left">
            <h4>{{ calculateDateString(index) }}</h4>
            <h6>Sunny</h6>
        </div>
        <div class="right">
            <img src="@/assets/svg/sunny.svg" alt="Sunny icon" />
            <h3>30 °C</h3>
        </div>
    </div>
</template>

<script setup>
const { index } = defineProps(["index"]);

function calculateDateString(index) {
    if (index === 1) return "Today";

    let date = new Date();
    date.setDate(date.getDate() + index - 1);
    let dateString = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    return dateString;
}
</script>

<style scoped>
img {
    height: 64px;
    width: auto;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
}

.left {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.right {
    display: flex;
    gap: 8px;
    align-items: center;
}
</style>
