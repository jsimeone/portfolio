<script>
    import Header from "$lib/components/Header.svelte";
    import Project from "$lib/components/Project.svelte";
</script>

<Header title="Projects"/>
<div class="px-10 py-5 animate-fade">
<!--    <p class="text-secondary font-semibold pb-3 mx-1">Everything I make solves an issue for someone in my life. I have-->
<!--        the most passion for solutions that impact real people.</p>-->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
        <Project link="https://fanstandapp.com" imageSource="fanstand.png" imageAlt="Fanstand logo" date="2023-Present"
                 title="Fanstand"
                 description="Fanstand is a platform that enables schools to reward attendance at campus events. I started Fanstand and its parent company 201 Interactive in November of 2023 and have since brought on teammates to help expand and build our next product. Fanstand is currently deployed at Hamilton College with over 400 active users representing over 20% of the college's population. New features are released every few weeks!"/>
        <Project link="" imageSource="tuneSwap.png" imageAlt="Tune Swap logo" date="2024" title="Tune Swap"
                 description="Some of my friends have Apple Music. I still send them Spotify links that they ignore and/or complain about. My solution is a simple app that converts the share link in your clipboard to one compatible with the opposite platform. This is only available to friends right now, but will be released on the App Store soon!"/>
        <Project link="" imageSource="signout.png" imageAlt="Sign Out app logo" date="2021"
                 title="School Sign-Out System"
                 description="During the COVID-19 pandemic, my high school instituted a policy that students should 'Sign Out' remotely from their last class. This would allow advisors to keep track of their students without unnecessary contact. The initial solution frustrated students by making them fill out a long and repetitive form each day. I built an app that allowed students to enter their data once, and click a single button each day to complete the same task."/>
        <Project link="https://apps.garmin.com/apps/9d9a52c2-c18a-4099-a264-0345dd0f5048" imageSource="garmin.png"
                 imageAlt="watch face displayed on watch" date="2020" title="Pride Watch Face"
                 description="This was my first 'real' project. I was unable to find a pride face for my new running watch, so I made my own. I developed a simple face available on the Garmin Connect store that gained over 1500 downloads. This project taught me invaluable skills like how to support a hardware ecosystem with many screen sizes and a strict power limit."/>
        <Project link="" imageSource="comingSoon.png" imageAlt="coming soon text" date="In Development"
                 title="Athlete Data Aggregator"
                 description="Whether you're a coach or a captain, you know that keeping track of your athletes is a constant struggle. From understanding everyone's fitness trends to something as simple as how they feel after the last workout, tracking down each athlete is exhausting. My solution will integrate popular run trackers like Strava with a custom interface that prompts users for information about their condition. Data will be available to leaders through a web dashboard."/>
    </div>
</div>
