const title = 'Plans for the Next Iteration of Vue.js'

const content = `<p>Last week at<a href="https://vuejs.london/summary" rel="nofollow">Vue.js London</a>I gave a brief sneak peek of what’s coming in the next major version of Vue. This post provides an in-depth overview of the plan.</p>
<p><img class=" wscnph" src="https://wpimg.wallstcn.com/b8a1d7be-0b73-41b8-be8c-7c01c93cab66.png" data-wscntype="image" data-wscnh="742" data-wscnw="692" /></p>
<h3>Why a new majorversion?</h3>
<p>Vue 2.0 was released<a href="https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8" rel="nofollow">exactly two years ago</a>(how time flies!). During this period, the core has remained backwards compatible with five minor releases. We’ve accumulated a number of ideas that would bring improvements, but they were held off because they would result in breaking changes. At the same time, the JavaScript ecosystem and the language itself has been evolving rapidly. There are greatly improved tools that could enhance our workflow, and many new language features that could unlock simpler, more complete, and more efficient solutions to the problems Vue is trying to solve. What’s more exciting is that we are seeing ES2015 support becoming a baseline for all major evergreen browsers. Vue 3.0 aims to leverage these new language features to make Vue core smaller, faster, and more powerful.</p>
<p>Vue 3.0 is currently in prototyping phase, and we have already implemented a runtime close to feature-parity with 2.x.<strong>Many of the items listed below are either already implemented, or confirmed to be feasible. Ones that are not yet implemented or still in exploration phase are marked with a *.</strong></p>
<h3>The Details</h3>

<blockquote>TL;DR: smaller, faster, tree-shakable features, fragments &amp; portals, custom renderer API.</blockquote>
<h4>Compiler Improvements*</h4>
<blockquote>TL;DR: tree-shaking friendly output, more AOT optimizations, parser with better error info and source map support.</blockquote>
<h4>IE11 Support*</h4>
<blockquote>TL;DR: it will be supported, but in a separate build with the same reactivity limitations of Vue 2.x.</blockquote>
<p>The new codebase currently targets evergreen browsers only and assumes baseline native ES2015 support. But alas, we know a lot of our users still need to support IE11 for the foreseeable future. Most of the ES2015 features used can be transpiled / polyfilled for IE11, with the exception for Proxies. Our plan is to implement an alternative observer with the same API, but using the good old ES5<code>Object.defineProperty</code>API. A separate build of Vue 3.x will be distributed using this observer implementation. However, this build will be subject to the same change detection caveats of Vue 2.x and thus not fully compatible with the “modern” build of 3.x. We are aware that this imposes some inconvenience for library authors as they will need to be aware of compatibility for two different builds, but we will make sure to provide clear guidelines on this when we reach that stage.</p>
<h3>How Do We GetThere</h3>
<p>First of all, although we are announcing it today, we do not have a definitive timeline yet. What we do know at the moment is the steps we will be taking to get there:</p>
<h4>1. Internal Feedback for the Runtime Prototype</h4>
<p>This is the phase we are in right now. Currently, we already have a working runtime prototype that includes the new observer, Virtual DOM and component implementation. We have invited a group of authors of influential community projects to provide feedback for the internal changes, and would like to make sure they are comfortable with the changes before moving forward. We want to ensure that important libraries in the ecosystem will be ready at the same time when we release 3.0, so that users relying on those projects can upgrade easily.</p>
<h4>2. Public Feedback viaRFCs</h4>
<p>Once we gain a certain level of confidence in the new design, for each breaking change we will be opening a dedicated RFC issue which includes:</p>
<p>We will anticipate public feedback from the wider community to help us consolidate these ideas.</p>
<h4>3. Introduce Compatible Features in 2.x &amp;2.x-next</h4>
<p>We are not forgetting about 2.x! In fact, we plan to use 2.x to progressively accustom users to the new changes. We will be gradually introducing confirmed API changes into 2.x via opt-in adaptors, and 2.x-next will allow users to try out the new Proxy-based observer.</p>
<p>The last minor release in 2.x will become LTS and continue to receive bug and security fixes for 18 months when 3.0 is released.</p>
<h4>4. AlphaPhase</h4>
<p>Next, we will finish up the compiler and server-side rendering parts of 3.0 and start making alpha releases. These will mostly be for stability testing purposes in small greenfield apps.</p>
<h4>5. BetaPhase</h4>
<p>During beta phase, our main goal is updating support libraries and tools like Vue Router, Vuex, Vue CLI, Vue DevTools and make sure they work smoothly with the new core. We will also be working with major library authors from the community to help them get ready for 3.0.</p>
<h4>6. RCPhase</h4>
<p>Once we consider the API and codebase stable, we will enter RC phase with API freeze. During this phase we will also work on a “compat build”: a build of 3.0 that includes compatibility layers for 2.x API. This build will also ship with a flag you can turn on to emit deprecation warnings for 2.x API usage in your app. The compat build can be used as a guide to upgrade your app to 3.0.</p>
<h4>7. IE11build</h4>
<p>The last task before the final release will be the IE11 compatibility build as mentioned above.</p>
<h4>8. FinalRelease</h4>
<p>In all honesty, we don’t know when this will happen yet, but likely in 2019. Again, we care more about shipping something that is solid and stable rather than hitting specific dates. There is a lot of work to be done, but we are excited for what’s coming next!</p>`

const data = {
  title,
  content
}

export default data
