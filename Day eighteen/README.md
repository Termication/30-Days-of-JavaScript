# First Task

<h2><a href="https://leetcode.com/problems/debounce">Debounce</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given a function&nbsp;<code>fn</code> and a time in milliseconds&nbsp;<code>t</code>, return&nbsp;a&nbsp;<strong>debounced</strong>&nbsp;version of that function.</p>

<p>A&nbsp;<strong>debounced</strong>&nbsp;function is a function whose execution is delayed by&nbsp;<code>t</code>&nbsp;milliseconds and whose&nbsp;execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.</p>

<p>For example, let&#39;s say&nbsp;<code>t = 50ms</code>, and the function was called at&nbsp;<code>30ms</code>,&nbsp;<code>60ms</code>, and <code>100ms</code>.</p>

<p>The first 2 function calls would be cancelled, and the 3rd function call would be executed at&nbsp;<code>150ms</code>.</p>

<p>If instead&nbsp;<code>t = 35ms</code>, The 1st call would be cancelled, the 2nd would be executed at&nbsp;<code>95ms</code>, and the 3rd would be executed at&nbsp;<code>135ms</code>.</p>

<p><img alt="Debounce Schematic" src="https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png" style="width: 800px; height: 242px;" /></p>

<p>The above diagram&nbsp;shows how debounce will transform&nbsp;events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.</p>

<p>Please solve it without using lodash&#39;s&nbsp;<code>_.debounce()</code> function.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
t = 50
calls = [
&nbsp; {&quot;t&quot;: 50, inputs: [1]},
&nbsp; {&quot;t&quot;: 75, inputs: [2]}
]
<strong>Output:</strong> [{&quot;t&quot;: 125, inputs: [2]}]
<strong>Explanation:</strong>
let start = Date.now();
function log(...inputs) { 
&nbsp; console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() =&gt; dlog(1), 50);
setTimeout(() =&gt; dlog(2), 75);

The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
t = 20
calls = [
&nbsp; {&quot;t&quot;: 50, inputs: [1]},
&nbsp; {&quot;t&quot;: 100, inputs: [2]}
]
<strong>Output:</strong> [{&quot;t&quot;: 70, inputs: [1]}, {&quot;t&quot;: 120, inputs: [2]}]
<strong>Explanation:</strong>
The 1st call is delayed until 70ms. The inputs were (1).
The 2nd call is delayed until 120ms. The inputs were (2).
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> 
t = 150
calls = [
&nbsp; {&quot;t&quot;: 50, inputs: [1, 2]},
&nbsp; {&quot;t&quot;: 300, inputs: [3, 4]},
&nbsp; {&quot;t&quot;: 300, inputs: [5, 6]}
]
<strong>Output:</strong> [{&quot;t&quot;: 200, inputs: [1,2]}, {&quot;t&quot;: 450, inputs: [5, 6]}]
<strong>Explanation:</strong>
The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
The 2nd call is cancelled by the 3rd call
The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= t &lt;= 1000</code></li>
	<li><code>1 &lt;= calls.length &lt;= 10</code></li>
	<li><code>0 &lt;= calls[i].t &lt;= 1000</code></li>
	<li><code>0 &lt;= calls[i].inputs.length &lt;= 10</code></li>
</ul>

# Second Task

<h2><a href="https://leetcode.com/problems/execute-asynchronous-functions-in-parallel">Execute Asynchronous Functions in Parallel</a></h2> <img src='https://img.shields.io/badge/Difficulty-Medium-orange' alt='Difficulty: Medium' /><hr><p>Given an array of&nbsp;asynchronous functions&nbsp;<code>functions</code>, return a new promise <code>promise</code>. Each function in the array accepts no arguments&nbsp;and returns a promise. All the promises should be executed in parallel.</p>

<p><code>promise</code> resolves:</p>

<ul>
	<li>When all the promises returned from&nbsp;<code>functions</code>&nbsp;were resolved successfully in parallel.&nbsp;The resolved&nbsp;value of&nbsp;<code>promise</code> should be an array of all the resolved values of promises in the same order as they were in the&nbsp;<code>functions</code>. The <code>promise</code> should resolve when all the asynchronous functions in the array have completed execution in parallel.</li>
</ul>

<p><code>promise</code> rejects:</p>

<ul>
	<li>When any&nbsp;of the promises&nbsp;returned from&nbsp;<code>functions</code>&nbsp;were rejected.&nbsp;<code>promise</code> should also&nbsp;reject&nbsp;with the reason of the first rejection.</li>
</ul>

<p>Please solve it without using the built-in&nbsp;<code>Promise.all</code>&nbsp;function.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> functions = [
&nbsp; () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(5), 200))
]
<strong>Output:</strong> {&quot;t&quot;: 200, &quot;resolved&quot;: [5]}
<strong>Explanation:</strong> 
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> functions = [
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(1), 200)), 
    () =&gt; new Promise((resolve, reject) =&gt; setTimeout(() =&gt; reject(&quot;Error&quot;), 100))
]
<strong>Output:</strong> {&quot;t&quot;: 100, &quot;rejected&quot;: &quot;Error&quot;}
<strong>Explanation:</strong> Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> functions = [
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(4), 50)), 
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(10), 150)), 
    () =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(16), 100))
]
<strong>Output:</strong> {&quot;t&quot;: 150, &quot;resolved&quot;: [4, 10, 16]}
<strong>Explanation:</strong> All the promises resolved with a value. The returned promise resolved when the last promise resolved.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>functions</code>&nbsp;is an array of functions that returns promises</li>
	<li><code>1 &lt;= functions.length &lt;= 10</code></li>
</ul>