<template>
    <AuthCard>
        <template v-slot:logo>
            <inertia-link :href="route('index')">
                <AplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </inertia-link>
        </template>
        <div class="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>
        <div v-if="status === 'verification-link-sent'">
            <div class="mb-4 font-medium text-sm text-green-600">
                A new verification link has been sent to the email address you provided during registration.
            </div>
        </div>
        <div class="mt-4 flex items-center justify-between">
            <form class="inline" @submit.prevent="submit">
                <Button>click here to request another</Button>
            </form>
            <form class="inline" @submit.prevent="logout">
                <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900">
                Logout
                </button>
            </form>
        </div>
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
            status: String,
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
        methods: {
            logout() {
                axios.post(route('logout')).then(response => {
                    window.location.href = "/";
                });
            },
            submit() {
                Inertia.post(route('verification.send'), this.form, {
                    preserveScroll: true,
                    onProgress: (form) => {
                        document.querySelector('Button').classList.add('cursor-not-allowed', 'opacity-25');
                    },
                    onFinish: (form) => {
                        document.querySelector('Button').classList.remove('cursor-not-allowed', 'opacity-25');
                    },
                });
            }
        },
        metaInfo: {
            title: 'Email Verification',
        },
    };
</script>