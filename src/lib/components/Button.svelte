<script>
    export let text;
    export let href;
</script>

<a class="bg-primary
    hover:bg-primary-hover transition-colors
    duration-500
    rounded-lg
    p-2 md:p-2.5
    text-sm md:text-base
    text-white font-semibold" href={href}>{text}</a>