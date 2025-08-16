<script lang='ts'>
  import { goto } from "$app/navigation";
import clsx from "clsx";
export let activeTab:string;
</script>

<div class='w-fit h-[40px] p-[5px] shadow-[1px_1px_20px_1px_rgba(0,0,0,0.1)] rounded-[50px] items-center flex justify-center'>
    <button
    on:click={()=>{
        activeTab = 'Development'
        goto('?tab=Development',{noScroll:true})
        }}
    class={clsx('cursor-pointer hover:bg-[#f6f8f7] gap-2 text-[black] w-fit p-[10px] h-[32px] rounded-l-[35px] flex items-center justify-center px-[20px]',activeTab === 'Development'?'bg-[#f6f8f7]':"")}>
    Development
    </button>
    <button
    on:click={()=>{
        activeTab = 'Design'
         goto('?tab=Design',{noScroll:true})
    }}
    class={clsx('cursor-pointer hover:bg-[#f6f8f7] gap-2 text-[black] w-fit p-[10px] h-[32px] rounded-r-[35px] flex items-center justify-center px-[20px]',activeTab === 'Design'?'bg-[#f6f8f7]':"")}>
    Design
    </button>
</div>