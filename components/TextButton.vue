<template>
    <button>
        <h4>
            <slot></slot>
        </h4>
    </button>
</template>

<script setup></script>

<style scoped>
    button {
        all: unset;
    }

    button:hover {
        text-decoration: underline;
    }
</style>