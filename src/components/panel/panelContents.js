import Chat32 from 'carbon-icons-svelte/lib/Chat32'
import ChartLine32 from 'carbon-icons-svelte/lib/ChartLine32'
import ProductList from '../product/ProductList.svelte';
import Chat from '../chat/Chat.svelte';


export const chat = {
  icon: ChartLine32,
  tooltip: 'show products',
  component: Chat,
};

export const info = {
  icon: Chat32,
  tooltip: 'show chatbot',
  component: ProductList,
};
