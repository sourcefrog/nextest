(function() {var type_impls = {
"proptest":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Map%3CS,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#39-46\">source</a><a href=\"#impl-Clone-for-Map%3CS,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;S, F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#40-45\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","proptest::arbitrary::Mapped"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Strategy-for-Map%3CS,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#48-58\">source</a><a href=\"#impl-Strategy-for-Map%3CS,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>, O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(S::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; O&gt; <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a> for <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;S, F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Tree\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Tree\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"proptest/strategy/trait.Strategy.html#associatedtype.Tree\" class=\"associatedtype\">Tree</a> = <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;&lt;S as <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>&gt;::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Tree\" title=\"type proptest::strategy::Strategy::Tree\">Tree</a>, F&gt;</h4></section></summary><div class='docblock'>The value tree generated by this <code>Strategy</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" class=\"associatedtype\">Value</a> = O</h4></section></summary><div class='docblock'>The type of value used by functions under test generated by this Strategy. <a href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_tree\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#52-57\">source</a><a href=\"#method.new_tree\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#tymethod.new_tree\" class=\"fn\">new_tree</a>(&amp;self, runner: &amp;mut <a class=\"struct\" href=\"proptest/test_runner/struct.TestRunner.html\" title=\"struct proptest::test_runner::TestRunner\">TestRunner</a>) -&gt; <a class=\"type\" href=\"proptest/strategy/type.NewTree.html\" title=\"type proptest::strategy::NewTree\">NewTree</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Generate a new value tree from the given runner. <a href=\"proptest/strategy/trait.Strategy.html#tymethod.new_tree\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#74-85\">source</a><a href=\"#method.prop_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_map\" class=\"fn\">prop_map</a>&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; O&gt;(self, fun: F) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Returns a strategy which produces values transformed by the function\n<code>fun</code>. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_map_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#96-102\">source</a><a href=\"#method.prop_map_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_map_into\" class=\"fn\">prop_map_into</a>&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt;(self) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.MapInto.html\" title=\"struct proptest::strategy::MapInto\">MapInto</a>&lt;Self, O&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;O&gt;,</span></h4></section></summary><div class='docblock'>Returns a strategy which produces values of type <code>O</code> by transforming\n<code>Self</code> with <code>Into&lt;O&gt;</code>. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_map_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_perturb\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#137-148\">source</a><a href=\"#method.prop_perturb\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_perturb\" class=\"fn\">prop_perturb</a>&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>, <a class=\"struct\" href=\"proptest/test_runner/struct.TestRng.html\" title=\"struct proptest::test_runner::TestRng\">TestRng</a>) -&gt; O&gt;(\n    self,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Perturb.html\" title=\"struct proptest::strategy::Perturb\">Perturb</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Returns a strategy which produces values transformed by the function\n<code>fun</code>, which is additionally given a random number generator. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_perturb\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_flat_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#238-249\">source</a><a href=\"#method.prop_flat_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_flat_map\" class=\"fn\">prop_flat_map</a>&lt;S: <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; S&gt;(\n    self,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Flatten.html\" title=\"struct proptest::strategy::Flatten\">Flatten</a>&lt;<a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;Self, F&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Maps values produced by this strategy into new strategies and picks\nvalues from those strategies. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_flat_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_ind_flat_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#264-275\">source</a><a href=\"#method.prop_ind_flat_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_ind_flat_map\" class=\"fn\">prop_ind_flat_map</a>&lt;S: <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; S&gt;(\n    self,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.IndFlatten.html\" title=\"struct proptest::strategy::IndFlatten\">IndFlatten</a>&lt;<a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;Self, F&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Maps values produced by this strategy into new strategies and picks\nvalues from those strategies while considering the new strategies to be\nindependent. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_ind_flat_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_ind_flat_map2\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#282-293\">source</a><a href=\"#method.prop_ind_flat_map2\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_ind_flat_map2\" class=\"fn\">prop_ind_flat_map2</a>&lt;S: <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; S&gt;(\n    self,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.IndFlattenMap.html\" title=\"struct proptest::strategy::IndFlattenMap\">IndFlattenMap</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Similar to <code>prop_ind_flat_map()</code>, but produces 2-tuples with the input\ngenerated from <code>self</code> in slot 0 and the derived strategy in slot 1. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_ind_flat_map2\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#315-324\">source</a><a href=\"#method.prop_filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_filter\" class=\"fn\">prop_filter</a>&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"proptest/test_runner/struct.Reason.html\" title=\"struct proptest::test_runner::Reason\">Reason</a>&gt;, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt;(\n    self,\n    whence: R,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Filter.html\" title=\"struct proptest::strategy::Filter\">Filter</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Returns a strategy which only produces values accepted by <code>fun</code>. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_filter\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_filter_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#349-358\">source</a><a href=\"#method.prop_filter_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_filter_map\" class=\"fn\">prop_filter_map</a>&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;O&gt;, O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt;(\n    self,\n    whence: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"proptest/test_runner/struct.Reason.html\" title=\"struct proptest::test_runner::Reason\">Reason</a>&gt;,\n    fun: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.FilterMap.html\" title=\"struct proptest::strategy::FilterMap\">FilterMap</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Returns a strategy which only produces transformed values where <code>fun</code>\nreturns <code>Some(value)</code> and rejects those where <code>fun</code> returns <code>None</code>. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_filter_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_union\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#374-379\">source</a><a href=\"#method.prop_union\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_union\" class=\"fn\">prop_union</a>(self, other: Self) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Union.html\" title=\"struct proptest::strategy::Union\">Union</a>&lt;Self&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Returns a strategy which picks uniformly from <code>self</code> and <code>other</code>. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_union\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prop_recursive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#448-462\">source</a><a href=\"#method.prop_recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.prop_recursive\" class=\"fn\">prop_recursive</a>&lt;R: <a class=\"trait\" href=\"proptest/strategy/trait.Strategy.html\" title=\"trait proptest::strategy::Strategy\">Strategy</a>&lt;Value = Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>&gt; + 'static, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"proptest/strategy/struct.BoxedStrategy.html\" title=\"struct proptest::strategy::BoxedStrategy\">BoxedStrategy</a>&lt;Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>&gt;) -&gt; R&gt;(\n    self,\n    depth: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    desired_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    expected_branch_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    recurse: F\n) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.Recursive.html\" title=\"struct proptest::strategy::Recursive\">Recursive</a>&lt;Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'static,</span></h4></section></summary><div class='docblock'>Generate a recursive structure with <code>self</code> items as leaves. <a href=\"proptest/strategy/trait.Strategy.html#method.prop_recursive\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.boxed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#516-521\">source</a><a href=\"#method.boxed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.boxed\" class=\"fn\">boxed</a>(self) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.BoxedStrategy.html\" title=\"struct proptest::strategy::BoxedStrategy\">BoxedStrategy</a>&lt;Self::<a class=\"associatedtype\" href=\"proptest/strategy/trait.Strategy.html#associatedtype.Value\" title=\"type proptest::strategy::Strategy::Value\">Value</a>&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'static,</span></h4></section></summary><div class='docblock'>Erases the type of this <code>Strategy</code> so it can be passed around as a\nsimple trait object. <a href=\"proptest/strategy/trait.Strategy.html#method.boxed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.no_shrink\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/traits.rs.html#547-552\">source</a><a href=\"#method.no_shrink\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.Strategy.html#method.no_shrink\" class=\"fn\">no_shrink</a>(self) -&gt; <a class=\"struct\" href=\"proptest/strategy/struct.NoShrink.html\" title=\"struct proptest::strategy::NoShrink\">NoShrink</a>&lt;Self&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Wraps this strategy to prevent values from being subject to shrinking. <a href=\"proptest/strategy/trait.Strategy.html#method.no_shrink\">Read more</a></div></details></div></details>","Strategy","proptest::arbitrary::Mapped"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValueTree-for-Map%3CS,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#60-76\">source</a><a href=\"#impl-ValueTree-for-Map%3CS,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"proptest/strategy/trait.ValueTree.html\" title=\"trait proptest::strategy::ValueTree\">ValueTree</a>, O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(S::<a class=\"associatedtype\" href=\"proptest/strategy/trait.ValueTree.html#associatedtype.Value\" title=\"type proptest::strategy::ValueTree::Value\">Value</a>) -&gt; O&gt; <a class=\"trait\" href=\"proptest/strategy/trait.ValueTree.html\" title=\"trait proptest::strategy::ValueTree\">ValueTree</a> for <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;S, F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Value\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Value\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"proptest/strategy/trait.ValueTree.html#associatedtype.Value\" class=\"associatedtype\">Value</a> = O</h4></section></summary><div class='docblock'>The type of the value produced by this <code>ValueTree</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.current\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#65-67\">source</a><a href=\"#method.current\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.ValueTree.html#tymethod.current\" class=\"fn\">current</a>(&amp;self) -&gt; O</h4></section></summary><div class='docblock'>Returns the current value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.simplify\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#69-71\">source</a><a href=\"#method.simplify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.ValueTree.html#tymethod.simplify\" class=\"fn\">simplify</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Attempts to simplify the current value. Notionally, this sets the\n“high” value to the current value, and the current value to a “halfway\npoint” between high and low, rounding towards low. <a href=\"proptest/strategy/trait.ValueTree.html#tymethod.simplify\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.complicate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#73-75\">source</a><a href=\"#method.complicate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"proptest/strategy/trait.ValueTree.html#tymethod.complicate\" class=\"fn\">complicate</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Attempts to partially undo the last simplification. Notionally, this\nsets the “low” value to one plus the current value, and the current\nvalue to a “halfway point” between high and the new low, rounding\ntowards low. <a href=\"proptest/strategy/trait.ValueTree.html#tymethod.complicate\">Read more</a></div></details></div></details>","ValueTree","proptest::arbitrary::Mapped"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Map%3CS,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#30-37\">source</a><a href=\"#impl-Debug-for-Map%3CS,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"proptest/strategy/struct.Map.html\" title=\"struct proptest::strategy::Map\">Map</a>&lt;S, F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/proptest/strategy/map.rs.html#31-36\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","proptest::arbitrary::Mapped"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()