import{o as t,a,z as n}from"./vue-libs-dcfba01b.js";const o={class:"van-doc-markdown-body"},s=n(`<h1>4.0 Release Note</h1><div class="van-doc-card"><h3 id="introduction" tabindex="-1">Introduction</h3><p>After a year of iterations, Vant 4.0 has been officially released, which is the fourth major version of Vant since it was open-sourced in 2017.</p><p>In this iteration, Vant supports the dark mode, adds five new components, improves the utility function API, and refactors components such as Picker, while continuing to make improvements in lightweighting and usability.</p></div><div class="van-doc-card"><h3 id="dark-mode-support" tabindex="-1">Dark mode support</h3><p><strong>Vant 4.0 supports switching all components to dark mode.</strong></p><p>Simply set the <code>theme</code> attribute of the <a href="https://vant-ui.github.io/vant/#/en-US/config-provider" target="_blank">ConfigProvider component</a> to <code>dark</code> to switch to dark mode, which will switch all Vant components on the page to a dark style.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-config-provider</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- child components --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-config-provider</span>&gt;</span>
</code></pre><p><img src="https://user-images.githubusercontent.com/7237365/205472724-6c9ee0df-df10-4f9b-84b6-081576bdcea9.png" alt=""></p><p>At the same time, the Vant 4.0 document also supports switching to dark mode:</p><p><img src="https://user-images.githubusercontent.com/7237365/205472729-fefc9053-1866-4812-8b97-ee0ba5d47230.png" alt=""></p></div><div class="van-doc-card"><h3 id="several-new-components" tabindex="-1">Several new components</h3><p><strong>Vant 4.0 contains the following new components:</strong></p><ul><li><a href="https://vant-ui.github.io/vant/#/en-US/back-top" target="_blank">BackTop</a>: Used to back to the top of the page.</li><li><a href="https://vant-ui.github.io/vant/#/en-US/time-picker" target="_blank">TimePicker</a>: Used for time selection, including hours, minutes, and seconds.</li><li><a href="https://vant-ui.github.io/vant/#/en-US/time-picker" target="_blank">DatePicker</a>: Used for date selection, including year, month, and day.</li><li><a href="https://vant-ui.github.io/vant/#/en-US/picker-group" target="_blank">PickerGroup</a>: Used to combine multiple Picker components, allow users to select multiple value.</li><li><a href="https://vant-ui.github.io/vant/#/en-US/skeleton" target="_blank">SkeletonItems</a>: Customize the skeleton through subcomponents such as SkeletonTitle, SkeletonImage, and SkeletonAvatar.</li></ul><p>Among them, TimePicker and DatePicker are split from the old DatetimePicker component, and the DatetimePicker component is removed. You can use PickerGroup to get the interactive effect of selecting the date and time at the same time.</p><p><img src="https://user-images.githubusercontent.com/7237365/205474243-14e0a87c-dcfa-4229-9a16-f6ebf910b621.png" alt=""></p></div><div class="van-doc-card"><h3 id="keep-it-lightweight" tabindex="-1">Keep it lightweight</h3><p><strong>Vant 4.0 has a 30% reduction in installation size, keeping bundle size lightweight.</strong></p><p>As the npm ecosystem grows, node_modules are eating up our disk space. To alleviate the node_modules black hole and speed up installation, we have optimized Vant&#39;s npm dependencies and build outputs.</p><p>Compared with Vant 3.6.2, the installation size of Vant 4.0.0 has been reduced from 7MB to 5MB. In contrast, the installation size of mainstream component libraries in the community is generally between 15MB and 80MB. You can check the installation size of npm packages through <a href="https://packagephobia.com/result?p=vant" target="_blank">packagephobia</a>.</p><p><img src="https://user-images.githubusercontent.com/7237365/205470714-e1828299-4df2-40f4-b7cc-f65971fe4567.png" alt=""></p><p>In terms of bundle size, this update still increases the size without increasing the price, and the size after Minified + Gzipped remains below 70KB:</p><p><img src="https://user-images.githubusercontent.com/7237365/205474583-f2d8226f-e089-42d7-8326-3c874dcf1784.png" alt=""></p></div><div class="van-doc-card"><h3 id="unify-the-primary-color" tabindex="-1">Unify the primary color</h3><p><strong>Vant 4.0 unifies the primary color of all components.</strong></p><p>In the previous version, Vant components had two primary colors, some components used blue <code>#1989fa</code> as their primary color, and others used red <code>#ee0a24</code>.</p><p>To keep the color specification consistent, we have unified the primary color in Vant 4, and all components use blue as the primary color.</p><p><img src="https://user-images.githubusercontent.com/7237365/205472726-a0552833-f99d-447a-acce-051ec7ebdbe1.png" alt=""></p><p>Now that the primary color is unified, theme customization becomes easier. For example, you can override the <code>--van-primary-color</code> CSS variable to set the primary color of all components to green:</p><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--van-primary-color</span>: <span class="hljs-number">#07c160</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="import-method-adjustment-as-needed" tabindex="-1">Import method adjustment as needed</h3><p><strong>Vant 4.0 no longer uses babel-plugin-import for on-demand import.</strong></p><p>In the early days, most component libraries used <code>babel-plugin-import</code> to achieve on-demand import, which means that component libraries will strongly rely on Babel compilation. Starting from Vant 4.0, <code>babel-plugin-import</code> is no longer supported, which has the following main advantages:</p><ul><li>Instead of relying heavily on Babel compilation, projects can use modern compilation tools such as SWC and esbuild to improve compilation efficiency.</li></ul><p><img src="https://user-images.githubusercontent.com/7237365/205478241-dba3c4ed-152c-4892-9e74-1a0d978be314.png" alt=""></p><ul><li>No longer subject to the import restrictions of <code>babel-plugin-import</code>, you can import content other than Vant components, such as the new <code>showToast</code> method in Vant 4, or the <code>buttonProps</code> object:</li></ul><pre><code class="language-ts"><span class="hljs-keyword">import</span> { showToast, buttonProps } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p>In terms of bundle size, removing <code>babel-plugin-import</code> will not affect on the JS size of the project, because Vant supports tree shaking by default to remove unnecessary JS code by default, and CSS code can be imported on demand via <a href="https://github.com/antfu/unplugin-vue-components" target="_blank">unplugin-vue-components</a>. For detailed usage, please refer to <a href="https://vant-ui.github.io/vant/#/en-US/quickstart" target="_blank">&quot;Quick Start&quot;</a>.</p></div><div class="van-doc-card"><h3 id="style-variable-type-hints" tabindex="-1">Style variable type hints</h3><p><strong>Vant 4.0 provides type hints for style variables.</strong></p><p>Vant provides more than 700 style variables, which you can modify through CSS code or <code>ConfigProvider</code> component. In Vant 4.0, we have added the <code>ConfigProviderThemeVars</code> type to provide type hints for style variables.</p><p>So when writing TypeScript code, you can use type hints to complete theme variable names:</p><p><img src="https://user-images.githubusercontent.com/7237365/205478960-c284e272-a394-4098-ad0f-eda72e74f9f7.png" alt=""></p></div><div class="van-doc-card"><h3 id="picker-component-refactoring" tabindex="-1">Picker component refactoring</h3><p><strong>Vant 4.0 refactored the Picker component, as well as the Picker-based Area and DatetimePicker components.</strong></p><p>In the previous version, the API design of the <code>Picker</code> component was not sensible enough, causing people to often encounter problems when using it, such as:</p><ul><li>The columns data format of Picker is unreasonable, which is easy to cause misunderstanding.</li><li>The data flow of Picker is not clear, exposing too many instance methods to operate on the data.</li><li>The logic of DatetimePicker is too complex, and bugs often occur in borderline scenarios.</li></ul><p>To solve the above problems, we refactored the <code>Picker</code> component in Vant 4.0, and also refactored the <code>Area</code> and <code>DatetimePicker</code> components derived from <code>Picker</code>.</p><p>If these three components are used in your project, please read the <a href="https://vant-ui.github.io/vant/#/en-US/migrate-from-v3" target="_blank">&quot;Upgrade Guide&quot;</a> to upgrade.</p></div><div class="van-doc-card"><h3 id="component-utils-adjustment" tabindex="-1">Component Utils Adjustment</h3><p><strong>Vant 4.0 adjusts the usage of component utility functions to be more intuitive.</strong></p><p>Vant 3 provides some component utils, such as calling the <code>Dialog()</code> function, which can quickly invoke the global Dialog component, and <code>Dialog.Component</code> is the component object corresponding to <code>Dialog</code>.</p><pre><code class="language-ts"><span class="hljs-comment">// function call</span>
<span class="hljs-title class_">Dialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });

<span class="hljs-comment">// component registration</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;van-dialog&#39;</span>, <span class="hljs-title class_">Dialog</span>.<span class="hljs-property">Component</span>);
</code></pre><p>The above API design leads to usage differences between Dialog and other components, and is easily abused; it also prevents <code>unplugin-vue-components</code> from automatically importing Dialog and other components.</p><p>To be more intuitive, we have adjusted the calling method of component utils in Vant 4. The affected functions include <code>Dialog()</code>, <code>Toast()</code>, <code>Notify()</code> and <code>ImagePreview()</code>. Taking Dialog as an example, we rename the <code>Dialog()</code> function to <code>showDialog()</code>, and let <code>Dialog</code> directly point to the component object.</p><pre><code class="language-ts"><span class="hljs-comment">// function call</span>
<span class="hljs-title function_">showDialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });

<span class="hljs-comment">// component registration</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-string">&#39;van-dialog&#39;</span>, <span class="hljs-title class_">Dialog</span>);
</code></pre><p>To facilitate the migration of existing code to Vant 4.0, we provide a compatibility solution. You can use the <code>Dialog()</code> function exported from <code>@vant/compat</code> to be compatible with the original code.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/compat&#39;</span>;

<span class="hljs-title class_">Dialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Hello World!&#39;</span> });
</code></pre><p>The <code>Dialog()</code> exported in <code>@vant/compat</code> has exactly the same API and behavior as <code>Dialog()</code> in Vant 3, so when upgrading, you only need to change its reference path, and the rest of the code can remain constant. After upgrading the project to Vant 4.0, it is recommended to gradually replace it with the new <code>showDialog()</code> and other methods in iterations, and remove the <code>@vant/compat</code> package.</p></div><div class="van-doc-card"><h3 id="event-naming-adjustment" tabindex="-1">Event naming adjustment</h3><p><strong>Vant 4.0 changes the event name to camel case.</strong></p><p>Starting from Vant 4, all events are named in camelCase format recommended by Vue.</p><pre><code class="language-js"><span class="hljs-comment">// Vant 3</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;click-input&#39;</span>);

<span class="hljs-comment">// Vant 4</span>
<span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;clickInput&#39;</span>);
</code></pre><p>This change <strong>does not affect the original template code</strong>, Vue will automatically format the event name in the template, so you don&#39;t need to make any changes.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- The following code works as usual without any changes --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> @<span class="hljs-attr">click-input</span>=<span class="hljs-string">&quot;onClick&quot;</span> /&gt;</span>
</code></pre><p>If you are using the Vant component in JSX, you will need to change the event name to camel case, the original dash format will no longer take effect, and the new monitoring method is more in line with JSX&#39;s own specifications:</p><pre><code class="language-jsx"><span class="hljs-comment">// Vant 3</span>
&lt;<span class="hljs-title class_">Field</span> onClick-input={onClick} /&gt;

<span class="hljs-comment">// Vant 4</span>
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">onClickInput</span>=<span class="hljs-string">{onClick}</span> /&gt;</span></span>
</code></pre></div><div class="van-doc-card"><h3 id="remove-less-variables" tabindex="-1">Remove Less variables</h3><p><strong>Vant 4.0 no longer supports theme customization via Less variables.</strong></p><p>Currently Vant already supports theme customization based on CSS variables, which is more flexible than Less customization. Therefore, Vant 4 will no longer provide Less-based theme customization. This means that Vant&#39;s npm package will no longer contain <code>.less</code> style source files, only the compiled <code>.css</code> style files will be provided.</p><p>If your project is using an old version of Less theme customization, please use <a href="#/en-US/config-provider" target="_blank">ConfigProvider global configuration</a> to replace it.</p></div><div class="van-doc-card"><h3 id="vant-cli-5.0" tabindex="-1">Vant Cli 5.0</h3><p><strong>This update also releases Vant Cli 5.0.</strong></p><p><a href="https://github.com/youzan/vant/tree/main/packages/vant-cli" target="_blank">Vant Cli</a> is the underlying component library construction tool of Vant. The content of this update includes:</p><ul><li>Upgrade Vite to version 3.0, and upgrade related Vite plugins.</li><li>The <code>stylelint</code> and <code>@vant/stylelint-config</code> dependencies are no longer installed by default, you can install them yourself if needed:</li></ul><pre><code class="language-bash">npm add stylelint@13 @vant/stylelint-config
</code></pre><ul><li>The <code>gh-pages</code> dependency is no longer installed by default, please update package.json as follows:</li></ul><pre><code class="language-diff"><span class="hljs-deletion">- &quot;release:site&quot;: &quot;pnpm build:site &amp;&amp; gh-pages -d site-dist&quot;,</span>
<span class="hljs-addition">+ &quot;release:site&quot;: &quot;pnpm build:site &amp;&amp; npx gh-pages -d site-dist&quot;,</span>
</code></pre></div><div class="van-doc-card"><h3 id="version-information" tabindex="-1">Version Information</h3><p><strong>Currently both <a href="https://vant-ui.github.io/vant/" target="_blank">Vant official website</a> and npm latest tag point to Vant 4.0.</strong></p><p>We have prepared a complete upgrade guide for Vant 4.0, please read <a href="https://vant-ui.github.io/vant/#/en-US/migrate-from-v3" target="_blank">Upgrade from v3 to v4</a> to upgrade.</p><p>At the same time, Vant 3.x will also enter the maintenance status, and the maintenance status of each version of Vant is as follows:</p><table><thead><tr><th>Name</th><th>Framework</th><th>Release Date</th><th>Maintenance Status</th></tr></thead><tbody><tr><td>Vant 4</td><td>Vue 3</td><td><code>2022.12</code></td><td>Continuously adding new features</td></tr><tr><td>Vant 3</td><td>Vue 3</td><td><code>2020.12</code></td><td>No more new features, bugs will be fixed</td></tr><tr><td>Vant 2</td><td>Vue 2</td><td><code>2019.06</code></td><td>No more new features, critical bugs will be fixed</td></tr><tr><td>Vant 1</td><td>Vue 2</td><td><code>2018.03</code></td><td>End of maintenance, no PRs accepted</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="finally" tabindex="-1">Finally</h3><p>Thanks to all the friends who contributed to the development of Vant 4.0, thanks to all developers who use Vant, and hope that everyone will keep walking on the road of open source.</p><p><img src="https://user-images.githubusercontent.com/7237365/205481230-fdd89482-86ad-40c8-b81f-4af0789f8488.png" alt=""></p></div>`,15),i=[s],h={__name:"release-note-v4.en-US",setup(c,{expose:e}){return e({frontmatter:{}}),(r,p)=>(t(),a("div",o,i))}};export{h as default};
