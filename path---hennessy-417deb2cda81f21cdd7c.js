webpackJsonp([80131520176935],{443:function(e,s){e.exports={data:{site:{siteMetadata:{title:"Glen Cheney"}},markdownRemark:{html:'<p>This is the US site for Hennessy cognac. Odopod has been Hennessy’s digital partner since 2012 and it is one of the few sites Odopod has maintained over the years, allowing us to iterate and improve it over time.</p>\n<p>More than 70% of traffic is from mobile devices, making performance and load times even more important.</p>\n<h2>Modernizing the stack</h2>\n<p>The site is built with Django and the frontend was originally created by another vendor. Unfortunately, the frontend was built for a micro site and as more features and sections were added, it had trouble scaling. One main JS file used to import all the JavaScript for other pages using RequireJS and conditionally initialize it. Dependencies were hard to keep track of, there was a single massive JavaScript bundle sent to the client, and Compass was deeply entangled in the Ruby Sass code.</p>\n<p>In 2016, Hennessy went through a design “revamp” and we started to move away from RequireJS with a small webpack build and ES6. We still had a single bundle and many scripts with RequireJS’ <code class="language-text">define</code> pattern, but we started to manage our dependencies with npm. We also started writing our CSS with SCSS instead of Sass.</p>\n<p>During early 2017, I started work on modernizing the build system:</p>\n<ul>\n<li>Code-splitting creates a JS bundle per page, reducing the initial code the browser needed to download and parse.</li>\n<li>All dependencies are managed through npm.</li>\n<li>Everything is SCSS.</li>\n<li>Asynchronously load common and page-level CSS to avoid render-blocking.</li>\n<li>Dynamic imports (<code class="language-text">import()</code>) for code not needed immediately on page load, like modals.</li>\n<li>Utilize <code class="language-text">requestIdleCallback</code> to initialize sections of the page “below the fold” when the browser has a moment, preventing main thread unresponsiveness on page load.</li>\n</ul>\n<h2>Notable projects</h2>\n<p>I’ve worked quite a bit on Hennessy. Most of it is still there, but some of the experience pages are gone. Here are some things that are still live:</p>\n<h3><a href="https://www.hennessy.com/us/collection/master-blenders-selection-no-2/">Store Locator</a></h3>\n<p>Using Google Maps and the addresses of locations which sell Hennessy, the user can find stores closest to them and all over the US. Click “Find a Store” to explore it. <a href="https://www.hennessy.com/us/store-locator/#master-blenders-selection-no-2">permalink</a></p>\n<!-- markdownlint-disable MD033 -->\n<video muted playsinline controls loop poster="/hennessy-store-locator-poster.png">\n  <source src="/static/hennessy-store-locator-9af09827934c510736f94607ef69310b.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/hennessy-store-locator-8ffab5dc0756f975530c30d9792ef770.mp4" type="video/mp4">\n</video>\n<h3><a href="https://www.hennessy.com/us/xo-the-odyssey/">X.O The Odyssey</a></h3>\n<p>A scroll-jacked experience page for one of Hennessy’s marks. It uses CSS 3D transforms to rotate slices of an image, kind of like a Rubix Cube.</p>\n<video muted playsinline controls loop poster="/the-odyssey-poster.png">\n  <source src="/static/the-odyssey-d2eed5cee6982b9855343047711ee7dd.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/the-odyssey-9d579272faac8bca8d5415ea2c1e22a8.mp4" type="video/mp4">\n</video>\n<h3><a href="https://www.hennessy.com/us/collection/vs/?reveal">Modular Campaign</a></h3>\n<p>This section of the campaign features some parallax scrolling and temporary fixed positioning. CMS users add a header and then as many chapters and sections within those chapters as they want and an optional footer.</p>\n<video muted playsinline controls loop poster="/hennessy-modular-campaign-poster.png">\n  <source src="/static/hennessy-modular-campaign-d78c0bbaac1d3d2eb3ec139760b21843.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/hennessy-modular-campaign-47a35c1ea2e4618c20367f1fb78c47d7.mp4" type="video/mp4">\n</video>\n<h3><a href="https://www.hennessy.com/us/heritage/academy/">Hennessy Academy</a></h3>\n<p>The Hennessy Essentials quiz is a Preact app and the other quizzes reuse some of the Preact components from the Essentials quiz. As simple as it is, I really like the Preact component I made for the sticky navigation which animates the titles as the user scrolls through sections of the page.</p>\n<video muted playsinline controls loop poster="/heritage-culture-poster.png">\n  <source src="/static/heritage-culture-d4d76c0a8713adca761aad3b7de77088.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/heritage-culture-3bcb3259434f8e688842c9c25e0a6199.mp4" type="video/mp4">\n</video>\n<h3><a href="https://www.hennessy.com/us/cocktail-quiz/">Cocktail Quiz</a></h3>\n<p>The cocktail quiz touched many parts of Hennessy, including the user accounts and lead to some good refactoring of cocktail product tiles. The quiz is also built with Preact.</p>\n<video muted playsinline controls loop poster="/hennessy-cocktail-quiz-poster.png">\n  <source src="/static/hennessy-cocktail-quiz-a32fa3f801f2657280565f0da602b3c6.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/hennessy-cocktail-quiz-eb8563a299e59f7c8c939ec087fea12f.mp4" type="video/mp4">\n</video>',frontmatter:{title:"hennessy.com",imageDescription:"Screenshot of hennessy.com/us/ home page with Marshall Taylor riding a bicycle.",href:"https://www.hennessy.com/us/",tags:["build systems","maintenance","Preact","parallax scrolling"]}},hero:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACG0lEQVQoz0WSSW/pYRTG/2bFrSmo6ZrVEFPKgsTUaihBbEhaEQ1BgsSVEIkhFmIjJIaFjU03RFfqO9j2K92n7uKexZv/cH7nPM85L0EikbhcrlarVavVEolEqVTq9XqLxWKz2ex2u8vlwmk2m3U6nVwuF4vFfD7/9vaWyWSSyWSCQqHweDyDwYAMYGC8Xu/T01MsFnu5xvPzcyAQeHh4MJlMKpUKDQQCAZvNplKpBJ1O53A4qISv9/f3Pp8vEolks9lisdhsNuv1+uvrazKZ9Pv9DocD1UEyr8FgMIibGyaUIOPt7Q1APp+fTCbr9fp4PP65xm63m81mw+GwUqmkUqlCoYAco9EIyYSA9wtOut1ur9ebz+cgPz4+vr6+vr+/39/f0+n0+XzG63K5nE6nnU6ndw24+PHMYrEAY05utzuRSEAnmmw2m8PhMBgMAKAzzlarlcvlHh8fMRrk/7NNYHRwa7Vaw+Ew9KAqmpxOp8vlAv7z8xP6UQuKqtVqJpMJBoMYKvj/MHaDOcHzeDxerVbgt9vtaDQCvN/vF4tFv9+H53g8jsmhk0gkgmQCe4IGjUaDYYZCITRvNBrlcjkajWIqpVKp3W7XajUsz+l0ogcyFQqFUCj8gbEqCEAJmUyGm4Arga3CPFzgVsChx+MBo77G3d0dMGwHCLb1c0nAowy2jauG37+vgVpSqRTe8AUndOIBCcCwYRqNBvAvQt2mVYVdydoAAAAASUVORK5CYII=",aspectRatio:1.777456647398844,src:"/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-246e4.png",srcSet:"/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-74cb1.png 640w,\n/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-dadb5.png 1280w,\n/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-246e4.png 2460w",srcWebp:"/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-da1ec.webp",srcSetWebp:"/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-8cbf2.webp 640w,\n/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-39285.webp 1280w,\n/static/hennessy-108f27ba3205b0fac6b25d05f5684e5d-da1ec.webp 2460w",sizes:"(max-width: 2460px) 100vw, 2460px"}}},pathContext:{slug:"/hennessy/",heroImage:"/images/hennessy.png/",nextProject:{frontmatter:{title:"Odopod Code Library"},fields:{slug:"/odopod-code-library/"}}}}}});
//# sourceMappingURL=path---hennessy-417deb2cda81f21cdd7c.js.map