import{o as s,a as n,z as t}from"./vue-libs-dcfba01b.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>FloatingPanel 浮动面板</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>浮动在页面底部的面板，可以上下拖动来浏览内容，常用于提供额外的功能或信息。请升级 <code>vant</code> 到 &gt;= 4.5.0 版本来使用该组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingPanel</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>FloatingPanel 的默认高度为 <code>100px</code>，用户可以拖动来展开面板，使高度达到 <code>60%</code> 的屏幕高度。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 26&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;String.fromCharCode(i + 64)&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-mao-dian" tabindex="-1">自定义锚点</h3><p>你可以通过 <code>anchors</code> 属性来设置 FloatingPanel 的锚点位置，并通过 <code>v-model:height</code> 来控制当前面板的显示高度。</p><p>比如，使面板的高度在 <code>100px</code>、40% 屏幕高度和 70% 屏幕高度三个位置停靠：</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">v-model:height</span>=<span class="hljs-string">&quot;height&quot;</span> <span class="hljs-attr">:anchors</span>=<span class="hljs-string">&quot;anchors&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>面板显示高度 {{ height.toFixed(0) }} px<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> anchors = [
      <span class="hljs-number">100</span>,
      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.4</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),
      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.7</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),
    ];
    <span class="hljs-keyword">const</span> height = <span class="hljs-title function_">ref</span>(anchors[<span class="hljs-number">0</span>]);

    <span class="hljs-keyword">return</span> { anchors, height };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="jin-tou-bu-tuo-zhuai" tabindex="-1">仅头部拖拽</h3><p>默认情况下，FloatingPanel 的头部区域和内容区域都可以被拖拽，你可以通过 <code>content-draggable</code> 属性来禁用内容区域的拖拽。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">:content-draggable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>内容不可拖拽<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:height</td><td>当前面板的显示高度</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>anchors</td><td>设置自定义锚点, 单位 <code>px</code></td><td><em>number[]</em></td><td><code>[100, window.innerWidth * 0.6]</code></td></tr><tr><td>duration</td><td>动画时长，单位秒，设置为 0 可以禁用动画</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>content-draggable</td><td>允许拖拽内容容器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a></td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>height-change</td><td>面板显示高度改变且结束拖动后触发</td><td><em>{ height: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>自定义面板内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FloatingPanelProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-floating-panel-border-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-floating-panel-header-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-floating-panel-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-floating-panel-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-width</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-height</td><td><em>3px</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr></tbody></table></div>`,14),d=[e],i={__name:"README.zh-CN",setup(p,{expose:a}){return a({frontmatter:{}}),(h,o)=>(s(),n("div",l,d))}};export{i as default};
