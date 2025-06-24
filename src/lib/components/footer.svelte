<script>

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>
<div class='w-full flex items-center flex-col overflow-y-hidden md:overflow-x-auto overflow-x-hidden md:max-w-[1300px] max-w-[94vw] mx-auto'>
    <div class='z-[10] flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-[20px] justify-between text-white w-full mb-[40px] md:px-[20px] md:text-[1rem] text-[.8rem]'>
     <button 
            on:click={scrollToTop}
            class='hover:underline text-white cursor-pointer bg-transparent border-none p-0 font-inherit'
        >
            Back to Top
        </button>
    <p>Designed and Developed With Sveltekit by me</p>

    <p> &copy; Copyright {new Date().getFullYear()}</p>
    </div>
    <p class='md:text-[44rem] text-[13rem] text-white md:mb-[-420px] mb-[-120px] md:mt-[-300px] mt-[-100px]'>Lolu</p>
</div>