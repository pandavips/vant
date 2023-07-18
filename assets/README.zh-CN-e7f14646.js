import{o as a,a as t,z as n}from"./vue-libs-dcfba01b.js";const l={class:"van-doc-markdown-body"},p=n(`<h1>Steps 步骤条</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Step</span>, <span class="hljs-title class_">Steps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Step</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Steps</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>active</code> 属性表示当前步骤的索引，从 0 起计。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>买家下单<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>商家接单<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>买家提货<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>交易完成<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>可以通过 <code>active-icon</code> 和 <code>active-color</code> 属性设置激活状态下的图标和颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">active-icon</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#07c160&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>买家下单<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>商家接单<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>买家提货<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>交易完成<span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="shu-xiang-bu-zou-tiao" tabindex="-1">竖向步骤条</h3><p>可以通过设置 <code>direction</code> 属性来改变步骤条的显示方向。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>【城市】物流状态1<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-12 12:40<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>【城市】物流状态2<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-11 10:00<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-step</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>快件已发货<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>2016-07-10 09:30<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-steps</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="steps-props" tabindex="-1">Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>当前步骤对应的索引值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>direction</td><td>步骤条方向，可选值为 <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td>active-icon</td><td>当前步骤对应的底部图标，可选值见 <a href="#/zh-CN/icon" target="_blank">Icon 组件</a></td><td><em>string</em></td><td><code>checked</code></td></tr><tr><td>inactive-icon</td><td>非当前步骤对应的底部图标，可选值见 <a href="#/zh-CN/icon" target="_blank">Icon 组件</a></td><td><em>string</em></td><td>-</td></tr><tr><td>finish-icon</td><td>已完成步骤对应的底部图标，优先级高于 <code>inactive-icon</code>，可选值见 <a href="#/zh-CN/icon" target="_blank">Icon 组件</a></td><td><em>string</em></td><td>-</td></tr><tr><td>active-color</td><td>当前步骤和已完成步骤的颜色</td><td><em>string</em></td><td><code>#07c160</code></td></tr><tr><td>inactive-color</td><td>未激活步骤的颜色</td><td><em>string</em></td><td><code>#969799</code></td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="step-slots" tabindex="-1">Step Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>步骤内容</td></tr><tr><td>active-icon</td><td>自定义激活状态图标</td></tr><tr><td>inactive-icon</td><td>自定义未激活状态图标</td></tr><tr><td>finish-icon</td><td>自定义已完成步骤对应的底部图标，优先级高于 <code>inactive-icon</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="steps-events" tabindex="-1">Steps Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click-step</td><td>点击步骤的标题或图标时触发</td><td><em>index: number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">StepsProps</span>, <span class="hljs-title class_">StepsDirection</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-step-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-step-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-step-process-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-step-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-step-line-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-step-finish-line-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-step-finish-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-step-icon-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-step-circle-size</td><td><em>5px</em></td><td>-</td></tr><tr><td>--van-step-circle-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-step-horizontal-title-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-steps-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr></tbody></table></div>`,14),e=[p],i={__name:"README.zh-CN",setup(d,{expose:s}){return s({frontmatter:{}}),(h,r)=>(a(),t("div",l,e))}};export{i as default};
