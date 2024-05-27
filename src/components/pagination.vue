<template>
  <div class="pagination col-group">
    <a href="#" class="page-btn prev-btn" @click.prevent="$emit('prev-page')">
      <i class="xi-angle-left"></i>
    </a>
    <a v-for="pageNumber in pageNumbers" :key="pageNumber" :href="#" class="page-btn" :class="{ active: currentPage === pageNumber }" @click.prevent="$emit('change-page', pageNumber)">
      {{ pageNumber }}
    </a>
    <a href="#" class="page-btn next-btn" @click.prevent="$emit('next-page')">
      <i class="xi-angle-right"></i>
    </a>
  </div>
</template>