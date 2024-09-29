<script>
    export let title;
    import {base} from "$app/paths";
</script>

<header>
    <a href="{base}/" class="flex items-center gap-1 pt-4 ps-4">
        <span class="material-symbols-outlined text-tertiary font-semibold text-xl">arrow_back_ios_new</span>
        <h1 class="text-primary text-3xl font-bold">{title}</h1>
    </a>
</header>