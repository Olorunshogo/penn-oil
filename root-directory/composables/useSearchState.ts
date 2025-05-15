
// composables/useNavbarState.ts
import { ref } from 'vue'

const isSearchOpen = ref(false)

export function useSearchState() {
  function toggleSearch() {
    isSearchOpen.value = !isSearchOpen.value
  }

  function openSearch() {
    isSearchOpen.value = true
  }

  function closeSearch() {
    isSearchOpen.value = false
  }

  return {
    isSearchOpen,
    toggleSearch,
    openSearch,
    closeSearch
  }
}