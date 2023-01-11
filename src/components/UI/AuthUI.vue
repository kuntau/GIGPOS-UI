<template>
  <div>
    <div class="relative flex min-h-fit flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div
        class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:w-1/2 sm:max-w-lg sm:rounded-lg sm:px-10"
      >
        <div class="mx-auto max-w-md">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
