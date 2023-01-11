<script setup lang="ts">
import InputElm from '../components/UI/InputElm.vue'
import AuthUI from '../components/UI/AuthUI.vue'

defineProps<{
  page: string
}>()
</script>

<template>
  <AuthUI class="login">
    <h2 class="text-2xl leading-7">Register</h2>
    <div class="divide-y divide-gray-300/50">
      <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
        <ul class="space-y-4">
          <li class="flex items-center">
            <p class="mr-4 w-full">
              Name
              <InputElm type="text" placeholder="Your name" />
            </p>
          </li>
          <li class="flex items-center">
            <p class="mr-4 w-full">
              Email
              <InputElm type="text" placeholder="Your email" />
            </p>
          </li>
          <li class="flex items-center">
            <p class="mr-4 w-full">
              Password
              <InputElm type="password" placeholder="Your password" />
            </p>
          </li>
          <li class="flex items-center">
            <p class="mr-4 w-full">
              Confirm Password
              <InputElm type="password" placeholder="Confirm your password" />
            </p>
          </li>
        </ul>
        <p>
          <button type="submit" class="text-right text-white px-3 py-1 rounded bg-green-500">Register</button>
        </p>
      </div>
      <div class="pt-8 text-base font-semibold leading-7">
        <p class="text-gray-900">Login or forgot your password?</p>
        <p>
          <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600">Login</a>
          <a href="https://tailwindcss.com/docs" class="ml-4 text-sky-500 hover:text-sky-600">Reset password</a>
        </p>
      </div>
    </div>
  </AuthUI>
</template>
