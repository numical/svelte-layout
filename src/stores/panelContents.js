import Chat from '../components/chat/Chat.svelte';
import ChatOutline from "svelte-material-icons/ChatOutline.svelte";
import Info from '../components/info/Info.svelte';
import InformationOutline from "svelte-material-icons/InformationOutline.svelte";

export const chat = {
    icon: InformationOutline,
    tooltip: "show information",
    component: Chat
};

export const info = {
    icon: ChatOutline,
    tooltip: "show instructions",
    component: Info
}