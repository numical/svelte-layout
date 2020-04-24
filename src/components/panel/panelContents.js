import Chat from '../chat/Chat.svelte';
import ChatOutline from 'svelte-material-icons/ChatOutline.svelte';
import ProductList from '../product/ProductList.svelte';
import CurrencyGbp from 'svelte-material-icons/CurrencyGbp.svelte';

export const chat = {
  icon: CurrencyGbp,
  tooltip: 'show products',
  component: Chat,
};

export const info = {
  icon: ChatOutline,
  tooltip: 'show chatbot',
  component: ProductList,
};
