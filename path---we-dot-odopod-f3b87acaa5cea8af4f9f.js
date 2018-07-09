webpackJsonp([0xa5fb4258b5b7],{448:function(e,o){e.exports={data:{site:{siteMetadata:{title:"Glen Cheney"}},markdownRemark:{html:'<p>A company directory app built with React + Redux for Odopod showing employee information and a seating map.</p>\n<h2>Where does Tim sit?</h2>\n<p>The directory helped Odopod employees find where their coworkers sit with the seating map and gave profile pages to each person. Odopeeps could add their contact information like AIM screen names (in a time before Slack 😱), Twitter, and Instagram.</p>\n<p>The we.odopod directory was one of the first projects I worked on in 2012 at Odopod. At that time, we built it on top of Twitter Bootstrap, it used <a href="https://github.com/defunkt/jquery-pjax">jQuery Pjax</a> for partial page loads, and used Django for a backend and CMS. I built the original seating map with custom zooming (CSS transforms), panning, and hotspots.</p>\n<h2>A single resource</h2>\n<p>Fast-forward to 2017. A couple of Odopod designers have some idle time, so they begin to work on a redesign for we.odopod which would include more features and consolidate information from multiple other places into this single resource.</p>\n<p>The final feature set for we.odopod was a directory listing of all the employees (and their pets), a detail page for each person, the seating map, a career path section of the site which described different roles at Odopod, and a resources section which was mostly migrated HR content.</p>\n<p>This was also a great opportunity for a couple of the Odopod developers to get some experience with React because it was an internal project and a single page application.</p>\n<h2>New hotness</h2>\n<p>We started development of the new site using <a href="https://github.com/facebook/create-react-app">Create React App</a>. CRA gave us a great foundation to start development. We also wanted to make the app backend agnostic in case we decided to change that too. The new we.odopod app consumes RESTful APIs from the Django backend for authentication, employee information, resource pages, and more.</p>\n<p>The app’s navigation is handled by <a href="https://www.npmjs.com/package/react-router"><code class="language-text">react-router</code></a>, <a href="https://www.npmjs.com/package/react-loadable"><code class="language-text">react-loadable</code></a> dynamically loads components only when they’re needed, and <a href="https://www.npmjs.com/package/leaflet">Leaflet.js</a> powers the map. We use the <a href="https://www.npmjs.com/package/@odopod/odo-sassplate"><code class="language-text">@odopod/odo-sassplate</code></a> library for base and common styles. <a href="/shuffle/">My Shuffle library</a> is used on the home page to filter, sort, and search people.</p>\n<p>Being new to React, I didn’t immediately push us to use Redux (or any other state manager). After we completed the project, however, I had some idle time and decided to use it learning and implementing Redux into our app.</p>\n<!-- markdownlint-disable MD033 -->\n<video muted playsinline controls loop poster="/we-dot-odopod-poster.png">\n  <source src="/static/we-dot-odopod-abb465b767610c79621b653d0058b061.webm" type="video/webm; codecs=vp9,vorbis">\n  <source src="/static/we-dot-odopod-bf48ad5e565e948af9daced844937c5d.mp4" type="video/mp4">\n</video>',frontmatter:{title:"we.odopod",imageDescription:"Screenshot of the profile page for an employee.",href:"https://we.odopod.com/",tags:["React","Redux"]}},hero:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACRklEQVQoz4VQS2gTQRhePAmCPXlSKbQKPRnaWyVtRPCFB0EQS5OstLXEplGU4kFQVBRMLz1LiV4VPFTqwVARfGBqDm1jkzaNNs3WpNlkd5J9z8zuzO46uYrgf5r5/vlew5mX+63ISTgegiP9cHQARfpxJGBHAw4fcK6dcMJ9JHKcRHpdvpfwPSB6jE72eWPd7tgR//pRzpg4b05fsm5fsWLnYOIiTFxA8bNo+owRC1lTp9DUsD097N05TW4G7cSgmhgiMyF3JujeDTq3BjizBUwgY021VFVrNNr1ugkAbLf2ytugVvUQwrohbBYYXq8IjYoAarXmbyH/PcMQDjrUgLiykW/ulBstXZQU3cLQpoi4mLjZlZXnqZe5XF6SgdiUxSaoN9vblVruRwETjwPVnaogfEkv1YVdE2LTQhDZVueAs8uZ2Xh8Lp4wEMYIr2Uzyx/fs5WiMoDohsWtr67puuH6vuN6vu8TQnUTIuwYJtytidqLG2ThGYvM6KViSZJaTBrbDnvAVDjGWFx8x0cjT+7f4/no/Py8qhpiA2i6iW1CG8Vvr+Y+LaU1zWC6CNtM2DShDNqSrHDM7cHDR/v3cW8ezxzqOjAyGmaIDBQJqKxidetXudbaKGzVRflnoaC0FUXVmxL7NXFPlDiP0qfJ2cNdB1NxfrCneyIWY2THIZRSllwzmL9NqctyltdXdVVhV4OBCFnI7jinU6m3waGN8cni1fCHZJL1971O//9Oh6yV8vLCazeTpZ+/OptF/19kj43r/gX+AcW/Emxpi9gRAAAAAElFTkSuQmCC",aspectRatio:1.7786532951289398,src:"/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-2f353.png",srcSet:"/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-2d0e4.png 640w,\n/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-9a89a.png 1280w,\n/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-2f353.png 2483w",srcWebp:"/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-88eae.webp",srcSetWebp:"/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-39403.webp 640w,\n/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-0dba3.webp 1280w,\n/static/we-dot-odopod-f7376672537396bc79968bf6ae7aad8f-88eae.webp 2483w",sizes:"(max-width: 2483px) 100vw, 2483px"}}},pathContext:{slug:"/we-dot-odopod/",heroImage:"/images/we-dot-odopod.png/",nextProject:{frontmatter:{title:"Audemars Piguet"},fields:{slug:"/audemars-piguet/"}}}}}});
//# sourceMappingURL=path---we-dot-odopod-f3b87acaa5cea8af4f9f.js.map