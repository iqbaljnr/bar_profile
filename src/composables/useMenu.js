import { ref, onMounted } from 'vue';
import MenuService from '../services/menu.service';

export function useMenu() {
  const classicsList = ref([]);
  const snacksList = ref([]);
  const echoesList = ref([]);
  const isLoading = ref(true);

  const fetchMenu = () => {
    isLoading.value = true;
    try {
      setTimeout(() => {
        classicsList.value = MenuService.getClassics();
        snacksList.value = MenuService.getSnacks();
        echoesList.value = MenuService.getEchoes();
        isLoading.value = false;
      }, 500);
    } catch (error) {
      console.error('Failed to load menu', error);
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchMenu();
  });

  return {
    classicsList,
    snacksList,
    echoesList,
    isLoading,
    fetchMenu
  };
}
