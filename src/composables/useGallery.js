import { ref, onMounted } from 'vue';
import GalleryService from '../services/gallery.service';

export function useGallery() {
  const galleryList = ref([]);
  const isLoading = ref(true);

  const fetchGallery = () => {
    isLoading.value = true;
    try {
      setTimeout(() => {
        galleryList.value = GalleryService.getImages();
        isLoading.value = false;
      }, 500);
    } catch (error) {
      console.error('Failed to load gallery', error);
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchGallery();
  });

  return {
    galleryList,
    isLoading,
    fetchGallery
  };
}
