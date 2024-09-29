<script>
    export let imageSource;
    export let imageAlt;
    export let date;
    export let title;
    export let description;
    export let link;
</script>

<div class="max-w-md mx-auto bg-quaternary rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div>
        <div>
            <img class="h-72 w-full object-cover" src={imageSource} alt={imageAlt}>
        </div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-secondary font-semibold">{date}</div>
            {#if link === ""}
                <h1 class="block mt-1 text-xl leading-tight font-medium text-primary">{title}</h1>
            {:else}
                <a href={link} class="block mt-1 text-xl leading-tight font-medium text-primary hover:underline">{title}</a>
            {/if}
            <p class="mt-2 max-h-64 overflow-scroll">{description}</p>
        </div>
    </div>
</div>