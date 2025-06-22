`<script>
    export let type = 'button';
    export let variant = 'primary';
    export let size = 'medium';
    export let disabled = false;
    export let loading = false;
    export let leftIcon = null;
    export let rightIcon = null;
    export let href = null;
    export let target = null;
    export let rel = null;
    export let fullWidth = false;
    export let rounded = 'default';
    
    // Event forwarding
    export let onClick = null;
    
    // Computed classes
    $: baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    $: variantClasses = {
      primary: 'bg-black text-white shadow-md hover:bg-gray-800 focus:ring-gray-500 active:bg-gray-900',
      secondary: 'bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 focus:ring-gray-400 active:bg-gray-400',
      outline: 'border-2 border-black text-black bg-transparent shadow-sm hover:bg-black hover:text-white focus:ring-gray-500',
      ghost: 'text-black hover:bg-gray-100 focus:ring-gray-400',
      danger: 'bg-red-600 text-white shadow-md hover:bg-red-700 focus:ring-red-500 active:bg-red-800'
    };
    
    $: sizeClasses = {
      small: 'px-3 py-1.5 text-sm gap-1.5',
      medium: 'px-4 py-2 text-base gap-2',
      large: 'px-6 py-3 text-lg gap-2.5'
    };
    
    $: roundedClasses = {
      none: 'rounded-none',
      default: 'rounded-md',
      full: 'rounded-full'
    };
    
    $: widthClasses = fullWidth ? 'w-full' : '';
    
    $: buttonClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      roundedClasses[rounded],
      widthClasses
    ].join(' ');
    
    function handleClick(event) {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      if (onClick) {
        onClick(event);
      }
    }
  </script>
  
  {#if href}
    <a
      {href}
      {target}
      {rel}
      class={buttonClasses}
      class:pointer-events-none={disabled || loading}
      on:click={handleClick}
      role="button"
      tabindex={disabled ? -1 : 0}
    >
      {#if loading}
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      {:else}
        {#if leftIcon}
          <span class="flex-shrink-0">
            {@html leftIcon}
          </span>
        {/if}
        
        <slot />
        
        {#if rightIcon}
          <span class="flex-shrink-0">
            {@html rightIcon}
          </span>
        {/if}
      {/if}
    </a>
  {:else}
    <button
      {type}
      {disabled}
      class={buttonClasses}
      on:click={handleClick}
      on:focus
      on:blur
      on:mouseenter
      on:mouseleave
      on:keydown
      on:keyup
    >
      {#if loading}
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      {:else}
        {#if leftIcon}
          <span class="flex-shrink-0">
            {@html leftIcon}
          </span>
        {/if}
        
        <slot />
        
        {#if rightIcon}
          <span class="flex-shrink-0">
            {@html rightIcon}
          </span>
        {/if}
      {/if}
    </button>
  {/if}
  
  <style>
    /* Additional custom styles if needed */
    :global(.button-icon) {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
  </style>`