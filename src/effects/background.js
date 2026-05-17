export function initScrollBar() {
  let ticking = false;
  const bar = document.getElementById('scrollBar');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = p + '%';
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

export function initSmoothScroll() {
  const NAV_OFFSET = 96;
  const DURATION = 900;
  const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const scrollTo = (targetY) => {
    const startY = window.pageYOffset;
    const dy = targetY - startY;
    if (Math.abs(dy) < 4) return;
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - t0) / DURATION);
      window.scrollTo(0, startY + dy * easeOutExpo(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.length < 2) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    const targetY = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    scrollTo(targetY);
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1200);
    history.replaceState(null, '', href);
  });
}

export function initCodeBackground() {
  const container = document.getElementById('codeBg');
  if (!container) return;

  const POOL = [
`<span class="tk-com">// lock-free SPSC ring — cache-line aware</span>
<span class="tk-key">template</span><span class="tk-pun">&lt;</span><span class="tk-key">typename</span> <span class="tk-type">T</span><span class="tk-pun">,</span> <span class="tk-key">std::size_t</span> <span class="tk-type">N</span><span class="tk-pun">&gt;</span>
<span class="tk-key">class</span> <span class="tk-type">RingBuffer</span> <span class="tk-pun">{</span>
  <span class="tk-key">alignas</span><span class="tk-pun">(</span><span class="tk-num">64</span><span class="tk-pun">)</span> <span class="tk-type">std::atomic&lt;size_t&gt;</span> head_<span class="tk-pun">{</span><span class="tk-num">0</span><span class="tk-pun">};</span>
  <span class="tk-key">alignas</span><span class="tk-pun">(</span><span class="tk-num">64</span><span class="tk-pun">)</span> <span class="tk-type">std::atomic&lt;size_t&gt;</span> tail_<span class="tk-pun">{</span><span class="tk-num">0</span><span class="tk-pun">};</span>
<span class="tk-pun">};</span>`,
`<span class="tk-key">constexpr</span> <span class="tk-type">auto</span> <span class="tk-fn">fast_modulo</span><span class="tk-pun">(</span><span class="tk-type">uint64_t</span> x<span class="tk-pun">,</span> <span class="tk-type">uint64_t</span> m<span class="tk-pun">)</span> <span class="tk-key">noexcept</span> <span class="tk-pun">{</span>
  <span class="tk-key">return</span> x <span class="tk-op">&amp;</span> <span class="tk-pun">(</span>m <span class="tk-op">-</span> <span class="tk-num">1</span><span class="tk-pun">);</span>
<span class="tk-pun">}</span>`,
`<span class="tk-mac">#include</span> <span class="tk-str">&lt;coroutine&gt;</span>
<span class="tk-mac">#include</span> <span class="tk-str">&lt;expected&gt;</span>

<span class="tk-key">using namespace</span> <span class="tk-mac">std::chrono_literals</span><span class="tk-pun">;</span>
<span class="tk-key">constexpr</span> <span class="tk-type">auto</span> <span class="tk-fn">kBudget</span> <span class="tk-op">=</span> <span class="tk-num">40</span><span class="tk-mac">us</span><span class="tk-pun">;</span>`,
`<span class="tk-com">// io_uring submission</span>
<span class="tk-type">io_uring_sqe</span><span class="tk-op">*</span> sqe <span class="tk-op">=</span> <span class="tk-fn">io_uring_get_sqe</span><span class="tk-pun">(</span><span class="tk-op">&amp;</span>ring<span class="tk-pun">);</span>
<span class="tk-fn">io_uring_prep_read</span><span class="tk-pun">(</span>sqe<span class="tk-pun">,</span> fd<span class="tk-pun">,</span> buf<span class="tk-pun">,</span> <span class="tk-num">4096</span><span class="tk-pun">,</span> <span class="tk-num">0</span><span class="tk-pun">);</span>
<span class="tk-fn">io_uring_submit</span><span class="tk-pun">(</span><span class="tk-op">&amp;</span>ring<span class="tk-pun">);</span>`,
`<span class="tk-key">struct</span> <span class="tk-type">Point</span> <span class="tk-pun">{</span>
  <span class="tk-type">double</span> x<span class="tk-pun">,</span> y<span class="tk-pun">,</span> z<span class="tk-pun">;</span>
  <span class="tk-key">auto</span> <span class="tk-fn">operator</span><span class="tk-op">&lt;=&gt;</span><span class="tk-pun">(</span><span class="tk-key">const</span> <span class="tk-type">Point</span><span class="tk-op">&amp;</span><span class="tk-pun">)</span> <span class="tk-key">const</span> <span class="tk-op">=</span> <span class="tk-key">default</span><span class="tk-pun">;</span>
<span class="tk-pun">};</span>`,
`<span class="tk-mac">[[</span><span class="tk-key">nodiscard</span><span class="tk-mac">]]</span> <span class="tk-type">std::expected</span><span class="tk-pun">&lt;</span><span class="tk-type">Reply</span><span class="tk-pun">,</span> <span class="tk-type">Error</span><span class="tk-pun">&gt;</span>
<span class="tk-fn">handle</span><span class="tk-pun">(</span><span class="tk-key">const</span> <span class="tk-type">Request</span><span class="tk-op">&amp;</span> req<span class="tk-pun">)</span> <span class="tk-key">noexcept</span><span class="tk-pun">;</span>`,
`<span class="tk-com">// sygic — route between two nodes</span>
<span class="tk-key">struct</span> <span class="tk-type">RouteRequest</span> <span class="tk-pun">{</span>
  <span class="tk-type">GeoCoord</span> origin<span class="tk-pun">;</span>
  <span class="tk-type">GeoCoord</span> destination<span class="tk-pun">;</span>
  <span class="tk-type">RoutingProfile</span> profile<span class="tk-pun">{</span><span class="tk-type">Profile</span><span class="tk-pun">::</span><span class="tk-mac">Truck</span><span class="tk-pun">};</span>
<span class="tk-pun">};</span>`,
`<span class="tk-type">Route</span> <span class="tk-fn">RoutingEngine</span><span class="tk-pun">::</span><span class="tk-fn">computeRoute</span><span class="tk-pun">(</span><span class="tk-key">const</span> <span class="tk-type">RouteRequest</span><span class="tk-op">&amp;</span> req<span class="tk-pun">)</span> <span class="tk-pun">{</span>
  <span class="tk-key">auto</span> graph <span class="tk-op">=</span> map_<span class="tk-pun">.</span><span class="tk-fn">graphFor</span><span class="tk-pun">(</span>req<span class="tk-pun">.</span>profile<span class="tk-pun">);</span>
  <span class="tk-key">return</span> dijkstra_<span class="tk-pun">.</span><span class="tk-fn">findShortest</span><span class="tk-pun">(</span>graph<span class="tk-pun">,</span> req<span class="tk-pun">.</span>origin<span class="tk-pun">,</span> req<span class="tk-pun">.</span>destination<span class="tk-pun">);</span>
<span class="tk-pun">}</span>`,
`<span class="tk-com">// bsh hal — read sensor over i2c</span>
<span class="tk-type">Result</span><span class="tk-pun">&lt;</span><span class="tk-type">uint16_t</span><span class="tk-pun">&gt;</span> <span class="tk-fn">readTemperature</span><span class="tk-pun">(</span><span class="tk-type">I2C_Bus</span><span class="tk-op">&amp;</span> bus<span class="tk-pun">,</span> <span class="tk-type">uint8_t</span> addr<span class="tk-pun">)</span> <span class="tk-pun">{</span>
  <span class="tk-type">uint8_t</span> raw<span class="tk-pun">[</span><span class="tk-num">2</span><span class="tk-pun">];</span>
  <span class="tk-key">if</span> <span class="tk-pun">(</span><span class="tk-op">!</span>bus<span class="tk-pun">.</span><span class="tk-fn">read</span><span class="tk-pun">(</span>addr<span class="tk-pun">,</span> raw<span class="tk-pun">,</span> <span class="tk-key">sizeof</span><span class="tk-pun">(</span>raw<span class="tk-pun">)))</span> <span class="tk-key">return</span> <span class="tk-type">Error</span><span class="tk-pun">::</span><span class="tk-mac">BusFault</span><span class="tk-pun">;</span>
  <span class="tk-key">return</span> <span class="tk-pun">(</span>raw<span class="tk-pun">[</span><span class="tk-num">0</span><span class="tk-pun">]</span> <span class="tk-op">&lt;&lt;</span> <span class="tk-num">8</span><span class="tk-pun">)</span> <span class="tk-op">|</span> raw<span class="tk-pun">[</span><span class="tk-num">1</span><span class="tk-pun">];</span>
<span class="tk-pun">}</span>`,
`<span class="tk-key">namespace</span> <span class="tk-type">sygic::sdk</span> <span class="tk-pun">{</span>
  <span class="tk-key">class</span> <span class="tk-mac">SYGIC_API</span> <span class="tk-type">Navigator</span> <span class="tk-pun">{</span>
    <span class="tk-key">virtual</span> <span class="tk-type">RouteId</span> <span class="tk-fn">startRoute</span><span class="tk-pun">(</span><span class="tk-key">const</span> <span class="tk-type">RouteRequest</span><span class="tk-op">&amp;</span><span class="tk-pun">)</span> <span class="tk-op">=</span> <span class="tk-num">0</span><span class="tk-pun">;</span>
    <span class="tk-key">virtual</span> <span class="tk-type">void</span>    <span class="tk-fn">cancel</span><span class="tk-pun">(</span><span class="tk-type">RouteId</span><span class="tk-pun">)</span> <span class="tk-key">noexcept</span> <span class="tk-op">=</span> <span class="tk-num">0</span><span class="tk-pun">;</span>
  <span class="tk-pun">};</span>
<span class="tk-pun">}</span>`,
`<span class="tk-com">// concepts — proper constraints on the call site</span>
<span class="tk-key">template</span><span class="tk-pun">&lt;</span><span class="tk-key">typename</span> <span class="tk-type">T</span><span class="tk-pun">&gt;</span>
<span class="tk-key">concept</span> <span class="tk-type">Hashable</span> <span class="tk-op">=</span> <span class="tk-key">requires</span><span class="tk-pun">(</span><span class="tk-type">T</span> v<span class="tk-pun">)</span> <span class="tk-pun">{</span>
  <span class="tk-pun">{</span> <span class="tk-type">std::hash</span><span class="tk-pun">&lt;</span><span class="tk-type">T</span><span class="tk-pun">&gt;{}(</span>v<span class="tk-pun">)</span> <span class="tk-pun">}</span> <span class="tk-op">-&gt;</span> <span class="tk-type">std::convertible_to</span><span class="tk-pun">&lt;</span><span class="tk-type">std::size_t</span><span class="tk-pun">&gt;;</span>
<span class="tk-pun">};</span>`,
`<span class="tk-com">// crtp — static dispatch, no vtable</span>
<span class="tk-key">template</span><span class="tk-pun">&lt;</span><span class="tk-key">typename</span> <span class="tk-type">D</span><span class="tk-pun">&gt;</span>
<span class="tk-key">struct</span> <span class="tk-type">Worker</span> <span class="tk-pun">{</span>
  <span class="tk-type">void</span> <span class="tk-fn">run</span><span class="tk-pun">()</span> <span class="tk-pun">{</span> <span class="tk-key">static_cast</span><span class="tk-pun">&lt;</span><span class="tk-type">D</span><span class="tk-op">*</span><span class="tk-pun">&gt;(</span><span class="tk-key">this</span><span class="tk-pun">)-&gt;</span><span class="tk-fn">step</span><span class="tk-pun">();</span> <span class="tk-pun">}</span>
<span class="tk-pun">};</span>`,
`<span class="tk-key">using</span> <span class="tk-type">Event</span> <span class="tk-op">=</span> <span class="tk-type">std::variant</span><span class="tk-pun">&lt;</span><span class="tk-type">Tick</span><span class="tk-pun">,</span> <span class="tk-type">Click</span><span class="tk-pun">,</span> <span class="tk-type">Drag</span><span class="tk-pun">&gt;;</span>
<span class="tk-type">std::visit</span><span class="tk-pun">([](</span><span class="tk-key">auto</span><span class="tk-op">&amp;&amp;</span> ev<span class="tk-pun">)</span> <span class="tk-pun">{</span> <span class="tk-fn">dispatch</span><span class="tk-pun">(</span>ev<span class="tk-pun">);</span> <span class="tk-pun">},</span> e<span class="tk-pun">);</span>`,
`<span class="tk-com">// function_wrapper — multi-signature dispatch</span>
<span class="tk-type">fw::function</span><span class="tk-pun">&lt;</span>
  <span class="tk-type">int</span><span class="tk-pun">(</span><span class="tk-type">int</span><span class="tk-pun">),</span>
  <span class="tk-type">double</span><span class="tk-pun">(</span><span class="tk-type">double</span><span class="tk-pun">,</span> <span class="tk-type">double</span><span class="tk-pun">)</span> <span class="tk-key">noexcept</span>
<span class="tk-pun">&gt;</span> sink<span class="tk-pun">;</span>
sink <span class="tk-op">=</span> overload<span class="tk-pun">;</span>`,
`<span class="tk-com">// dijkstra — single-source shortest path</span>
<span class="tk-key">void</span> <span class="tk-fn">dijkstra</span><span class="tk-pun">(</span><span class="tk-key">const</span> <span class="tk-type">Graph</span><span class="tk-op">&amp;</span> g<span class="tk-pun">,</span> <span class="tk-type">NodeId</span> s<span class="tk-pun">,</span> <span class="tk-type">std::vector</span><span class="tk-pun">&lt;</span><span class="tk-type">int</span><span class="tk-pun">&gt;&amp;</span> dist<span class="tk-pun">)</span> <span class="tk-pun">{</span>
  <span class="tk-type">std::priority_queue</span><span class="tk-pun">&lt;</span><span class="tk-type">QueueItem</span><span class="tk-pun">,</span> <span class="tk-type">std::vector</span><span class="tk-pun">&lt;</span><span class="tk-type">QueueItem</span><span class="tk-pun">&gt;,</span> <span class="tk-type">std::greater</span><span class="tk-pun">&lt;&gt;&gt;</span> pq<span class="tk-pun">;</span>
  pq<span class="tk-pun">.</span><span class="tk-fn">push</span><span class="tk-pun">({</span><span class="tk-num">0</span><span class="tk-pun">,</span> s<span class="tk-pun">});</span>
<span class="tk-pun">}</span>`,
`<span class="tk-com">// strategy pattern</span>
<span class="tk-key">class</span> <span class="tk-type">Compressor</span> <span class="tk-pun">{</span>
  <span class="tk-type">std::unique_ptr</span><span class="tk-pun">&lt;</span><span class="tk-type">IStrategy</span><span class="tk-pun">&gt;</span> strategy_<span class="tk-pun">;</span>
<span class="tk-key">public</span><span class="tk-pun">:</span>
  <span class="tk-type">void</span> <span class="tk-fn">setStrategy</span><span class="tk-pun">(</span><span class="tk-type">std::unique_ptr</span><span class="tk-pun">&lt;</span><span class="tk-type">IStrategy</span><span class="tk-pun">&gt;</span> s<span class="tk-pun">)</span> <span class="tk-key">noexcept</span><span class="tk-pun">;</span>
<span class="tk-pun">};</span>`,
`<span class="tk-com">// raii — scoped fd</span>
<span class="tk-key">class</span> <span class="tk-type">ScopedFd</span> <span class="tk-pun">{</span>
  <span class="tk-type">int</span> fd_<span class="tk-pun">{-</span><span class="tk-num">1</span><span class="tk-pun">};</span>
<span class="tk-key">public</span><span class="tk-pun">:</span>
  <span class="tk-key">explicit</span> <span class="tk-fn">ScopedFd</span><span class="tk-pun">(</span><span class="tk-type">int</span> fd<span class="tk-pun">)</span> <span class="tk-key">noexcept</span><span class="tk-pun">:</span> fd_<span class="tk-pun">{</span>fd<span class="tk-pun">}{}</span>
  <span class="tk-fn">~ScopedFd</span><span class="tk-pun">()</span> <span class="tk-pun">{</span> <span class="tk-key">if</span> <span class="tk-pun">(</span>fd_ <span class="tk-op">&gt;=</span> <span class="tk-num">0</span><span class="tk-pun">)</span> <span class="tk-pun">::</span><span class="tk-fn">close</span><span class="tk-pun">(</span>fd_<span class="tk-pun">);</span> <span class="tk-pun">}</span>
<span class="tk-pun">};</span>`,
`<span class="tk-com">// async / future</span>
<span class="tk-type">std::future</span><span class="tk-pun">&lt;</span><span class="tk-type">Report</span><span class="tk-pun">&gt;</span> fut <span class="tk-op">=</span>
  <span class="tk-type">std::async</span><span class="tk-pun">(</span><span class="tk-type">std::launch</span><span class="tk-pun">::</span>async<span class="tk-pun">,</span>
                  <span class="tk-pun">[&amp;]{</span> <span class="tk-key">return</span> <span class="tk-fn">compile</span><span class="tk-pun">(</span>source<span class="tk-pun">);</span> <span class="tk-pun">});</span>`,
`<span class="tk-com">// ranges — pipeline composition</span>
<span class="tk-key">auto</span> fast <span class="tk-op">=</span> sessions
  <span class="tk-op">|</span> <span class="tk-type">std::views</span><span class="tk-pun">::</span><span class="tk-fn">filter</span><span class="tk-pun">([](</span><span class="tk-key">const</span> <span class="tk-key">auto</span><span class="tk-op">&amp;</span> s<span class="tk-pun">){</span> <span class="tk-key">return</span> s<span class="tk-pun">.</span>rtt <span class="tk-op">&lt;</span> <span class="tk-num">10</span><span class="tk-mac">ms</span><span class="tk-pun">;</span> <span class="tk-pun">})</span>
  <span class="tk-op">|</span> <span class="tk-type">std::views</span><span class="tk-pun">::</span><span class="tk-fn">transform</span><span class="tk-pun">(&amp;</span><span class="tk-type">Session</span><span class="tk-pun">::</span>id<span class="tk-pun">);</span>`,
`<span class="tk-key">static_assert</span><span class="tk-pun">(</span><span class="tk-type">std::is_trivially_copyable_v</span><span class="tk-pun">&lt;</span><span class="tk-type">Node</span><span class="tk-pun">&gt;);</span>
<span class="tk-key">static_assert</span><span class="tk-pun">(</span><span class="tk-key">sizeof</span><span class="tk-pun">(</span><span class="tk-type">Node</span><span class="tk-pun">)</span> <span class="tk-op">==</span> <span class="tk-num">32</span><span class="tk-pun">);</span>`,
`<span class="tk-com">// the best way to reach me</span>
<span class="tk-key">constexpr</span> <span class="tk-type">std::string_view</span> kEmail <span class="tk-op">=</span>
  <span class="tk-str">"adiukraine211@gmail.com"</span><span class="tk-pun">;</span>`,
  ];

  let seed = 0x9e3779b9;
  const rand = () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const COUNT = 24;
  const root = document.getElementById('root');
  const measure = () => {
    const r = root ? root.getBoundingClientRect().height : window.innerHeight;
    return Math.max(r, window.innerHeight);
  };

  const place = () => {
    const docH = measure();
    container.style.height = docH + 'px';
    const half = Math.ceil(COUNT / 2);
    const seqL = Array.from({length: half}, (_, k) => k);
    const seqR = Array.from({length: half}, (_, k) => k);
    for (let i = seqL.length - 1; i > 0; i--) { const j = Math.floor(rand()*(i+1)); [seqL[i], seqL[j]] = [seqL[j], seqL[i]]; }
    for (let i = seqR.length - 1; i > 0; i--) { const j = Math.floor(rand()*(i+1)); [seqR[i], seqR[j]] = [seqR[j], seqR[i]]; }
    let li = 0, ri = 0;
    const rowL = 95 / half;
    const rowR = 95 / half;

    for (let i = 0; i < COUNT; i++) {
      const onLeft = rand() < 0.5;
      let top, left;
      if (onLeft || ri >= half) {
        const r = seqL[li++ % half];
        top  = ((r * rowL) + rand() * (rowL * 0.7)) + '%';
        left = (-2 + rand() * 11) + '%';
      } else {
        const r = seqR[ri++ % half];
        top  = ((r * rowR) + rand() * (rowR * 0.7)) + '%';
        left = (82 + rand() * 16) + '%';
      }
      const dx = (rand() * 60 - 30).toFixed(0) + 'px';
      const dy = (rand() * 40 - 20).toFixed(0) + 'px';
      const dur = (90 + rand() * 60).toFixed(0);
      const opVar = 0.38 + rand() * 0.22;
      const cls = rand() < 0.25 ? 'dim' : (rand() < 0.5 ? 'bright' : '');
      const el = document.createElement('div');
      el.className = 'code-snip ' + cls;
      el.style.left = left;
      el.style.top = top;
      el.style.setProperty('--dx', dx);
      el.style.setProperty('--dy', dy);
      el.style.setProperty('--op', opVar);
      el.style.animationDuration = dur + 's';
      el.style.animationDelay = (-rand() * parseFloat(dur)) + 's';
      el.innerHTML = POOL[Math.floor(rand() * POOL.length)];
      container.appendChild(el);
    }
  };

  let placed = false;
  const runOnce = () => { if (placed) return; placed = true; requestAnimationFrame(place); };
  if (document.readyState === 'complete') runOnce();
  else window.addEventListener('load', runOnce);

  const updateHeight = () => { container.style.height = measure() + 'px'; };
  if ('ResizeObserver' in window && root) new ResizeObserver(updateHeight).observe(root);
  window.addEventListener('resize', updateHeight, { passive: true });
}
