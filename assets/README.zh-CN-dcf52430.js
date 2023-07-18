import{o as a,a as t,z as n}from"./vue-libs-dcfba01b.js";const d={class:"van-doc-markdown-body"},l=n(`<h1>Loading 加载</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>加载图标，用于表示加载中的过渡状态。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Loading</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Loading</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="jia-zai-lei-xing" tabindex="-1">加载类型</h3><p>通过 <code>type</code> 属性可以设置加载图标的类型，默认为 <code>circular</code>，可选值为 <code>spinner</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>color</code> 属性设置加载图标的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3><p>通过 <code>size</code> 属性设置加载图标的大小，默认单位为 <code>px</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jia-zai-wen-an" tabindex="-1">加载文案</h3><p>可以使用默认插槽在图标的右侧插入加载文案。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>加载中...<span class="hljs-tag">&lt;/<span class="hljs-name">van-loading</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi-pai-lie" tabindex="-1">垂直排列</h3><p>设置 <code>vertical</code> 属性后，图标和文案会垂直排列。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24px&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>加载中...<span class="hljs-tag">&lt;/<span class="hljs-name">van-loading</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-wen-an-yan-se" tabindex="-1">自定义文案颜色</h3><p>通过 <code>color</code> 或者 <code>text-color</code> 属性设置加载文案的颜色。</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 可修改文案和加载图标的颜色 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#0094ff&quot;</span> /&gt;</span>

<span class="hljs-comment">&lt;!-- 只修改文案颜色 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">text-color</span>=<span class="hljs-string">&quot;#0094ff&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 插槽可以自定义加载图标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-loading</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;star-o&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  加载中...
<span class="hljs-tag">&lt;/<span class="hljs-name">van-loading</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>颜色</td><td><em>string</em></td><td><code>#c9c9c9</code></td></tr><tr><td>type</td><td>类型，可选值为 <code>spinner</code></td><td><em>string</em></td><td><code>circular</code></td></tr><tr><td>size</td><td>加载图标大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>30px</code></td></tr><tr><td>text-size</td><td>文字大小，默认单位为 <code>px</code></td><td><em>number | string</em></td><td><code>14px</code></td></tr><tr><td>text-color</td><td>文字颜色</td><td><em>string</em></td><td><code>#c9c9c9</code></td></tr><tr><td>vertical</td><td>是否垂直排列图标和文字内容</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>加载文案</td></tr><tr><td>icon</td><td>自定义加载图标</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">LoadingType</span>, <span class="hljs-title class_">LoadingProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-loading-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-loading-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-loading-spinner-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-loading-spinner-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-loading-spinner-duration</td><td><em>0.8s</em></td><td>-</td></tr></tbody></table></div>`,17),e=[l],h={__name:"README.zh-CN",setup(p,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),t("div",d,e))}};export{h as default};
