<template>
    <div v-if="status" class="font-medium text-sm text-green-600">
        {{ status }}
    </div>
</template>
<script>
    export default {
        props: ['status'],
    }
</script>