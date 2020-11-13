<template>
    <AuthCard>
        <template v-slot:logo>
            <AplicationLogo class="w-20 h-20 fill-current text-gray-500" />
        </template>
        <div class="mb-4 text-sm text-gray-600">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</div>
        <AuthSessionStatus class="mb-4" :status="status" />
        <AuthValidationErrors class="mb-4" :errors="errors" />
        <form @submit.prevent="login">
            <div class="mb-4">
                <Label for="email" value="Email"/>
                <Input type="email" id="email" v-model="form.email" class="mt-1 block w-full"  autofocus />
            </div>
            <div class="flex items-center justify-end mt-4">
                <Button>
                    Email Password Reset Link
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
    data() {
        return {
            form: {
                email: '',
            },
        };
    },
    methods: {
        login() {
            Inertia.post('/forgot-password', this.form, {
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
        title: 'Forgot Password',
    },
};

</script>
