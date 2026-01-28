<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <div>
          <span class="text-sm text-gray-500 mr-4">Logged in as: {{ user?.email }}</span>
          <button @click="logout" class="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        </div>
      </div>
      <router-view /> <!-- Shows nested dashboard pages -->
    </div>
  </div>
</template>

<script setup>
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

const router = useRouter()
const user = ref(null)

onMounted(() => {
  onAuthStateChanged(auth, u => {
    if (!u) {
      router.push('/login')
    } else {
      user.value = u
    }
  })
})

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>