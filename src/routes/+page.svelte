<script>
    import Button from "$lib/components/Button.svelte";
    import {base} from "$app/paths";
</script>

<div class="h-screen flex items-center justify-center animate-fade">
    <div class="flex flex-col items-center">
        <img alt="headshot of Joseph" class="size-48 md:size-56 rounded-full outline-4 md:outline-8 outline-primary outline"
             src="headshot.webp">
        <h1 class="text-primary font-bold text-3xl md:text-5xl py-1 mt-1 md:py-2 md:mt-3">Hey, I'm Joe</h1>
        <h3 class="mx-10 font-semibold text-secondary text-md md:text-xl max-w-lg text-center">I study, run, and make cool things at Hamilton College.</h3>
        <nav>
            <ul class="flex gap-y-7 flex-wrap space-x-4 m-4 justify-center">
                <li>
                    <Button href="{base}/projects" text="Projects"/>
                </li>
                <li>
                    <Button href="{base}/resume724.pdf" text="Resume"/>
                </li>
                <li>
                    <Button href="{base}/leadership" text="Leadership"/>
                </li>
            </ul>
        </nav>
        <div class="flex flex-wrap justify-center gap-4 my-0.5">
            <a href="mailto:jsimeone@hamilton.edu">
                <img class="size-8 md:size-10" alt="email icon" src="email.webp"/>
            </a>
            <a href="https://www.instagram.com/simeone_joe/profilecard/?igsh=ZmIzaGtkdGUxNDl0">
                <img class="size-8 md:size-10" alt="Instagram icon" src="instagram.webp"/>
            </a>
            <a class="size-8 md:size-10" href="https://www.linkedin.com/in/josephsimeone">
                <img alt="LinkedIn icon" src="linkedin.webp"/>
            </a>
        </div>
    </div>
</div>
