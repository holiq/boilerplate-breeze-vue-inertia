<template>
    <div v-if="hasErrors">
        <div class="font-medium text-red-600">
            Whoops! Something went wrong.
        </div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            <li v-for="(value, key, index) in errors">{{ value[0] }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['errors'],
        computed: {
            hasErrors() {
                return Object.values(this.errors).length !== 0;
            }
        }
    }        
</script>

