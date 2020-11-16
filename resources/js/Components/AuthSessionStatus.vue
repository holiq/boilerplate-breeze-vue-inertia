<template>
    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>
</template>
<script>
export default {
    props: ['status'],
}
</script>