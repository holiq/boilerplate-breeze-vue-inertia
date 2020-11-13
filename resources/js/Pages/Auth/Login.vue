<template>
    <AuthCard>
        <template v-slot:logo>
            <AplicationLogo class="w-20 h-20 fill-current text-gray-500" />
        </template>        
        <AuthSessionStatus class="mb-4" :status="status" />
        <AuthValidationErrors class="mb-4" :errors="errors" />
        <form @submit.prevent="login">
            <div class="mb-4">
                <Label for="email" value="Email"/>
                <Input type="email" id="email" v-model="form.email" class="mt-1 block w-full"  autofocus />
            </div>
            <div class="mb-4">
                <Label for="password" value="Password"/>
                <Input type="password" id="password" v-model="form.password" class="mt-1 block w-full"  autocomplete="current-password" />
            </div>
            <div class="block mt-4">
                <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" name="remember" v-model="form.remember">
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>
            <div class="flex items-center justify-end mt-4">
                <inertia-link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Forgot your password?
                </inertia-link>
                <Button class="ml-4">
                    Login
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
        canResetPassword: Boolean,
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
                password: '',
                remember: false,
            },
        };
    },
    methods: {
        login() {
            Inertia.post('/login', this.form, {
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
        title: 'Login',
    },
};

</script>
