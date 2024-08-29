<template>
    <article>
        <nav>
            <TextButton>Today</TextButton>
            <TextButton>Tomorrow</TextButton>
            <TextButton>Weekly</TextButton>
        </nav>
        
    </article>
</template>

<script setup></script>

<style scoped>
    article {
        color: var(--black);
        background-color: var(--white);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 8px;
    }

    nav {
        display: flex;
        gap: 24px;
        width: 100%;
        height: content-fit;
    }
</style>
