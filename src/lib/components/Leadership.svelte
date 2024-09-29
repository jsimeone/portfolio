<script>
    export let date;
    export let title;
    export let description;
</script>

<div class="max-w-md mx-auto bg-quaternary rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div>
        <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-secondary font-semibold">{date}</div>
            <h1 class="block mt-1 text-xl leading-tight font-medium text-primary">{title}</h1>
            <p class="mt-2 max-h-64 overflow-scroll">{description}</p>
        </div>
    </div>
</div>