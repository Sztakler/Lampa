<template>
    <transition name="slide">
        <div v-if="show" class="modal-overlay" @click="close">
            <div class="modal-content" @click.stop>
                <button class="modal-close" @click="close">×</button>
                <header>
                    <h2>Saved cities</h2>
                    {{ show }}
                </header>
                <ul>
                    <li>Wrocław</li>
                    <li>Kraków</li>
                    <li>Warszawa</li>
                    <li>Katowice</li>
                </ul>

                <button>Add new</button>
            </div>
        </div>
    </transition>
</template>

<script setup>
const { show } = defineProps(["show"]);
const emit = defineEmits(["close"]);

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
