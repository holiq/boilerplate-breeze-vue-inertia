<template>
    <AuthCard>
        <template v-slot:logo>
            <AplicationLogo class="w-20 h-20 fill-current text-gray-500" />
        </template>        
        <AuthSessionStatus class="mb-4" :status="status" />
        <AuthValidationErrors class="mb-4" :errors="errors" />
        <form @submit.prevent="login">
            <div class="mb-4">
                <Label for="name" value="Name"/>
                <Input type="text" id="name" v-model="form.name" class="mt-1 block w-full"  autofocus />
            </div>
            <div class="mb-4">
                <Label for="email" value="Email"/>
                <Input type="email" id="email" v-model="form.email" class="mt-1 block w-full"  />
            </div>
            <div class="mb-4">
                <Label for="password" value="Password"/>
                <Input type="password" id="password" v-model="form.password" class="mt-1 block w-full"  autocomplete="current-password" />
            </div>
            <div class="block mt-4">
                <Label for="password_confirmation" value="Confirm Password"/>
                <Input type="password" id="password_confirmation" v-model="form.password_confirmation" class="mt-1 block w-full"  />
            </div>
            <div class="flex items-center justify-end mt-4">
                <inertia-link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Already Registered?
                </inertia-link>
                <Button class="ml-4">
                    Register
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
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        };
    },
    methods: {
        login() {
            Inertia.post('/register', this.form, {
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
        title: 'Register',
    },
};
</script>
