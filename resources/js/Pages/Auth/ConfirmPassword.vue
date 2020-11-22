<template>
    <AuthCard>
        <template v-slot:logo>
            <inertia-link :href="route('index')">
                <AplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </inertia-link>
        </template>
        <div class="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>
        <AuthValidationErrors class="mb-4" :errors="errors" />
        <form @submit.prevent="login">
            <div class="mb-4">
                <Label for="password" value="Password"/>
                <Input type="password" id="password" v-model="form.password" class="mt-1 block w-full" autofocus autocomplete="current-password" />
            </div>
            <div class="flex items-center justify-end">
                <Button>
                    Confirm
                </Button>
            </div>
        </form>
    </AuthCard>
</template>
<script>
    import { Inertia } from '@inertiajs/inertia'
    
    import AuthCard from '@/Components/AuthCard'
    import AplicationLogo from '@/Components/AplicationLogo'
    import AuthValidationErrors from '@/Components/AuthValidationErrors'
    import AuthSessionStatus from '@/Components/AuthSessionStatus'
    import Label from '@/Components/Label'
    import Input from '@/Components/Input'
    import Button from '@/Components/Button'
        
    export default {
        props: {
            errors: Object,
        },
        components: {
            AuthCard,
            AplicationLogo,
            AuthValidationErrors,
            AuthSessionStatus,
            Label,
            Input,
            Button,
        },
        data() {
            return {
                form: {
                    password: '',
                },
            };
        },
        methods: {
            login() {
                Inertia.post('/confirm-password', this.form, {
                    preserveScroll: true,
                    onProgress: (form) => {
                        document.querySelector('Button').classList.add('cursor-not-allowed', 'opacity-25');
                    },
                    onFinish: (form) => {
                        document.querySelector('Button').classList.remove('cursor-not-allowed', 'opacity-25');
                    },
                });
            },
        },
        metaInfo: {
            title: 'Confirm Password',
        },
    };
</script>