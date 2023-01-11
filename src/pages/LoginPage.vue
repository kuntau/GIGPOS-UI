<script setup lang="ts">
import InputElm from '../components/UI/InputElm.vue'
import AuthUI from '../components/UI/AuthUI.vue'

const email = ''
const password = ''
const remember = false

defineProps<{
  page: string
}>()
</script>

<template>
  <AuthUI class="login">
    <h2 class="text-2xl leading-7">Login</h2>
    <div class="divide-y divide-gray-300/50">
      <form method="POST" action="/login">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <ul class="space-y-4">
            <li class="flex items-center">
              <p class="mr-4 w-full">
                Email
                <InputElm type="text" name="email" v-model="email" placeholder="Your email" />
              </p>
            </li>
            <li class="flex items-center">
              <p class="mr-4 w-full">
                Password
                <InputElm type="password" name="password" v-model="password" placeholder="Your password" />
              </p>
            </li>
            <li class="flex items-center">
              <input type="checkbox" name="remember" v-model="remember" />
              <p class="ml-4 text-sm">Remember me</p>
            </li>
          </ul>
          <p>
            <button type="submit" class="text-right text-white px-3 py-1 rounded bg-green-500">Login</button>
          </p>
        </div>
      </form>
      <div class="pt-8 text-base font-semibold leading-7">
        <p class="text-gray-900">Forget password or new user?</p>
        <p>
          <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Reset password</a>
          <a href="https://tailwindcss.com/docs" class="ml-4 text-sky-500 hover:text-sky-600">Register</a>
        </p>
      </div>
    </div>
  </AuthUI>
</template>
