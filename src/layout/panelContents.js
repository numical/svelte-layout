import Chat32 from 'carbon-icons-svelte/lib/Chat32'
import ChartLine32 from 'carbon-icons-svelte/lib/ChartLine32'
import Settings32 from 'carbon-icons-svelte/lib/Settings32';
import Chat from '../chat/components/Chat.svelte';
import ProductList from '../products/components/ProductList.svelte';
import Settings from '../settings/components/Settings.svelte';

export const chatBot = {
  component: Chat,
  helpId: 'showChat',
  icon: Chat32,
  tooltip: 'show chatbot',
};

export const productList = {
  component: ProductList,
  helpId: 'showProducts',
  icon: ChartLine32,
  tooltip: 'show products',
};

export const settings = {
  component: Settings,
  helpId: 'settings',
  icon: Settings32,
  tooltip: 'show settings',
};

export const allPanels = [chatBot, productList, settings];
