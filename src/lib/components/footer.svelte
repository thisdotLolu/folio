<script>

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>
<div class='w-full flex items-center flex-col overflow-y-hidden max-w-[1300px] mx-auto'>
    <div class='z-[10] flex items-center justify-between text-white w-full mb-[40px] px-[20px]'>
     <button 
            on:click={scrollToTop}
            class='hover:underline text-white cursor-pointer bg-transparent border-none p-0 font-inherit'
        >
            Back to Top
        </button>
    <p>Designed and Developed With Sveltekit by me</p>

    <p> &copy; Copyright {new Date().getFullYear()}</p>
    </div>
    <p class='text-[44rem] text-white mb-[-420px] mt-[-300px] '>Lolu</p>
</div>