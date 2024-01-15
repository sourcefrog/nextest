(function() {var type_impls = {
"object":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CoffFile%3C'data,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#36-54\">source</a><a href=\"#impl-CoffFile%3C'data,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, R: <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"object/read/coff/trait.CoffHeader.html\" title=\"trait object::read::coff::CoffHeader\">CoffHeader</a>&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffFile.html\" title=\"struct object::read::coff::CoffFile\">CoffFile</a>&lt;'data, R, Coff&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.parse\" class=\"method\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#38-53\">source</a><h4 class=\"code-header\">pub fn <a href=\"object/read/coff/struct.CoffFile.html#tymethod.parse\" class=\"fn\">parse</a>(data: R) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;Self&gt;</h4></section></summary><div class=\"docblock\"><p>Parse the raw COFF file data.</p>\n</div></details></div></details>",0,"object::read::coff::file::CoffBigFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CoffFile%3C'data,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#28\">source</a><a href=\"#impl-Debug-for-CoffFile%3C'data,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;, Coff: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"object/read/coff/trait.CoffHeader.html\" title=\"trait object::read::coff::CoffHeader\">CoffHeader</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"object/read/coff/struct.CoffFile.html\" title=\"struct object::read::coff::CoffFile\">CoffFile</a>&lt;'data, R, Coff&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#28\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","object::read::coff::file::CoffBigFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Object%3C'data,+'file%3E-for-CoffFile%3C'data,+R,+Coff%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#61-216\">source</a><a href=\"#impl-Object%3C'data,+'file%3E-for-CoffFile%3C'data,+R,+Coff%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'data, 'file, R, Coff&gt; <a class=\"trait\" href=\"object/read/trait.Object.html\" title=\"trait object::read::Object\">Object</a>&lt;'data, 'file&gt; for <a class=\"struct\" href=\"object/read/coff/struct.CoffFile.html\" title=\"struct object::read::coff::CoffFile\">CoffFile</a>&lt;'data, R, Coff&gt;<span class=\"where fmt-newline\">where\n    R: 'file + <a class=\"trait\" href=\"object/read/trait.ReadRef.html\" title=\"trait object::read::ReadRef\">ReadRef</a>&lt;'data&gt;,\n    Coff: <a class=\"trait\" href=\"object/read/coff/trait.CoffHeader.html\" title=\"trait object::read::coff::CoffHeader\">CoffHeader</a>,\n    'data: 'file,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Segment\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Segment\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.Segment\" class=\"associatedtype\">Segment</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSegment.html\" title=\"struct object::read::coff::CoffSegment\">CoffSegment</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>A segment in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SegmentIterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SegmentIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.SegmentIterator\" class=\"associatedtype\">SegmentIterator</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSegmentIterator.html\" title=\"struct object::read::coff::CoffSegmentIterator\">CoffSegmentIterator</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>An iterator over the segments in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Section\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Section\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.Section\" class=\"associatedtype\">Section</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSection.html\" title=\"struct object::read::coff::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>A section in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SectionIterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SectionIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.SectionIterator\" class=\"associatedtype\">SectionIterator</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSectionIterator.html\" title=\"struct object::read::coff::CoffSectionIterator\">CoffSectionIterator</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>An iterator over the sections in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Comdat\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Comdat\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.Comdat\" class=\"associatedtype\">Comdat</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffComdat.html\" title=\"struct object::read::coff::CoffComdat\">CoffComdat</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>A COMDAT section group in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ComdatIterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ComdatIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.ComdatIterator\" class=\"associatedtype\">ComdatIterator</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffComdatIterator.html\" title=\"struct object::read::coff::CoffComdatIterator\">CoffComdatIterator</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>An iterator over the COMDAT section groups in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Symbol\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Symbol\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.Symbol\" class=\"associatedtype\">Symbol</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSymbol.html\" title=\"struct object::read::coff::CoffSymbol\">CoffSymbol</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>A symbol in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SymbolIterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SymbolIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.SymbolIterator\" class=\"associatedtype\">SymbolIterator</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolIterator.html\" title=\"struct object::read::coff::CoffSymbolIterator\">CoffSymbolIterator</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>An iterator over symbols in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SymbolTable\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SymbolTable\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.SymbolTable\" class=\"associatedtype\">SymbolTable</a> = <a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolTable.html\" title=\"struct object::read::coff::CoffSymbolTable\">CoffSymbolTable</a>&lt;'data, 'file, R, Coff&gt;</h4></section></summary><div class='docblock'>A symbol table in the object file.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.DynamicRelocationIterator\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.DynamicRelocationIterator\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"object/read/trait.Object.html#associatedtype.DynamicRelocationIterator\" class=\"associatedtype\">DynamicRelocationIterator</a> = <a class=\"struct\" href=\"object/read/struct.NoDynamicRelocationIterator.html\" title=\"struct object::read::NoDynamicRelocationIterator\">NoDynamicRelocationIterator</a></h4></section></summary><div class='docblock'>An iterator over dynamic relocations in the file. <a href=\"object/read/trait.Object.html#associatedtype.DynamicRelocationIterator\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.architecture\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#78-86\">source</a><a href=\"#method.architecture\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.architecture\" class=\"fn\">architecture</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/enum.Architecture.html\" title=\"enum object::Architecture\">Architecture</a></h4></section></summary><div class='docblock'>Get the architecture type of the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#89-91\">source</a><a href=\"#method.is_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.is_little_endian\" class=\"fn\">is_little_endian</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return true if the file is little endian, false if it is big endian.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_64\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#94-97\">source</a><a href=\"#method.is_64\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.is_64\" class=\"fn\">is_64</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return true if the file can contain 64-bit addresses.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#99-101\">source</a><a href=\"#method.kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.kind\" class=\"fn\">kind</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/read/enum.ObjectKind.html\" title=\"enum object::read::ObjectKind\">ObjectKind</a></h4></section></summary><div class='docblock'>Return the kind of this object.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.segments\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#103-108\">source</a><a href=\"#method.segments\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.segments\" class=\"fn\">segments</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffSegmentIterator.html\" title=\"struct object::read::coff::CoffSegmentIterator\">CoffSegmentIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffSegmentIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get an iterator over the segments in the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.section_by_name_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#110-116\">source</a><a href=\"#method.section_by_name_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.section_by_name_bytes\" class=\"fn\">section_by_name_bytes</a>(\n    &amp;'file self,\n    section_name: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/coff/struct.CoffSection.html\" title=\"struct object::read::coff::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;&gt;</h4></section></summary><div class='docblock'>Like <a href=\"object/read/trait.Object.html#method.section_by_name\"><code>Self::section_by_name</code></a>, but allows names that are not UTF-8.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.section_by_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#118-128\">source</a><a href=\"#method.section_by_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.section_by_index\" class=\"fn\">section_by_index</a>(\n    &amp;'file self,\n    index: <a class=\"struct\" href=\"object/read/struct.SectionIndex.html\" title=\"struct object::read::SectionIndex\">SectionIndex</a>\n) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/coff/struct.CoffSection.html\" title=\"struct object::read::coff::CoffSection\">CoffSection</a>&lt;'data, 'file, R, Coff&gt;&gt;</h4></section></summary><div class='docblock'>Get the section at the given index. <a href=\"object/read/trait.Object.html#tymethod.section_by_index\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sections\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#130-135\">source</a><a href=\"#method.sections\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.sections\" class=\"fn\">sections</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffSectionIterator.html\" title=\"struct object::read::coff::CoffSectionIterator\">CoffSectionIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffSectionIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get an iterator over the sections in the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.comdats\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#137-142\">source</a><a href=\"#method.comdats\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.comdats\" class=\"fn\">comdats</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffComdatIterator.html\" title=\"struct object::read::coff::CoffComdatIterator\">CoffComdatIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffComdatIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get an iterator over the COMDAT section groups in the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbol_by_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#144-154\">source</a><a href=\"#method.symbol_by_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.symbol_by_index\" class=\"fn\">symbol_by_index</a>(\n    &amp;'file self,\n    index: <a class=\"struct\" href=\"object/read/struct.SymbolIndex.html\" title=\"struct object::read::SymbolIndex\">SymbolIndex</a>\n) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"object/read/coff/struct.CoffSymbol.html\" title=\"struct object::read::coff::CoffSymbol\">CoffSymbol</a>&lt;'data, 'file, R, Coff&gt;&gt;</h4></section></summary><div class='docblock'>Get the debugging symbol at the given index. <a href=\"object/read/trait.Object.html#tymethod.symbol_by_index\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbols\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#156-161\">source</a><a href=\"#method.symbols\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.symbols\" class=\"fn\">symbols</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolIterator.html\" title=\"struct object::read::coff::CoffSymbolIterator\">CoffSymbolIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffSymbolIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get an iterator over the debugging symbols in the file. <a href=\"object/read/trait.Object.html#tymethod.symbols\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbol_table\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#164-166\">source</a><a href=\"#method.symbol_table\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.symbol_table\" class=\"fn\">symbol_table</a>(&amp;'file self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolTable.html\" title=\"struct object::read::coff::CoffSymbolTable\">CoffSymbolTable</a>&lt;'data, 'file, R, Coff&gt;&gt;</h4></section></summary><div class='docblock'>Get the symbol table, if any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dynamic_symbols\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#168-174\">source</a><a href=\"#method.dynamic_symbols\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.dynamic_symbols\" class=\"fn\">dynamic_symbols</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolIterator.html\" title=\"struct object::read::coff::CoffSymbolIterator\">CoffSymbolIterator</a>&lt;'data, 'file, R, Coff&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"CoffSymbolIterator&lt;&#39;data, &#39;file, R, Coff&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Get an iterator over the dynamic linking symbols in the file. <a href=\"object/read/trait.Object.html#tymethod.dynamic_symbols\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dynamic_symbol_table\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#177-179\">source</a><a href=\"#method.dynamic_symbol_table\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.dynamic_symbol_table\" class=\"fn\">dynamic_symbol_table</a>(\n    &amp;'file self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/coff/struct.CoffSymbolTable.html\" title=\"struct object::read::coff::CoffSymbolTable\">CoffSymbolTable</a>&lt;'data, 'file, R, Coff&gt;&gt;</h4></section></summary><div class='docblock'>Get the dynamic linking symbol table, if any. <a href=\"object/read/trait.Object.html#tymethod.dynamic_symbol_table\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dynamic_relocations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#182-184\">source</a><a href=\"#method.dynamic_relocations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.dynamic_relocations\" class=\"fn\">dynamic_relocations</a>(&amp;'file self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/struct.NoDynamicRelocationIterator.html\" title=\"struct object::read::NoDynamicRelocationIterator\">NoDynamicRelocationIterator</a>&gt;</h4></section></summary><div class='docblock'>Get the dynamic relocations for this file. <a href=\"object/read/trait.Object.html#tymethod.dynamic_relocations\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.imports\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#187-190\">source</a><a href=\"#method.imports\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.imports\" class=\"fn\">imports</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"object/read/struct.Import.html\" title=\"struct object::read::Import\">Import</a>&lt;'data&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Get the imported symbols.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exports\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#193-196\">source</a><a href=\"#method.exports\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.exports\" class=\"fn\">exports</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"object/read/struct.Export.html\" title=\"struct object::read::Export\">Export</a>&lt;'data&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Get the exported symbols that expose both a name and an address. <a href=\"object/read/trait.Object.html#tymethod.exports\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_debug_symbols\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#198-200\">source</a><a href=\"#method.has_debug_symbols\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.has_debug_symbols\" class=\"fn\">has_debug_symbols</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return true if the file contains debug information sections, false if not.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.relative_address_base\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#202-204\">source</a><a href=\"#method.relative_address_base\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.relative_address_base\" class=\"fn\">relative_address_base</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Get the base address used for relative virtual addresses. <a href=\"object/read/trait.Object.html#tymethod.relative_address_base\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.entry\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#207-209\">source</a><a href=\"#method.entry\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.entry\" class=\"fn\">entry</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class='docblock'>Get the virtual address of the entry point of the binary</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flags\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/coff/file.rs.html#211-215\">source</a><a href=\"#method.flags\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#tymethod.flags\" class=\"fn\">flags</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/enum.FileFlags.html\" title=\"enum object::FileFlags\">FileFlags</a></h4></section></summary><div class='docblock'>File flags that are specific to each file format.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.endianness\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#56-62\">source</a><a href=\"#method.endianness\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.endianness\" class=\"fn\">endianness</a>(&amp;self) -&gt; <a class=\"enum\" href=\"object/endian/enum.Endianness.html\" title=\"enum object::endian::Endianness\">Endianness</a></h4></section></summary><div class='docblock'>Get the endianness of the file.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.section_by_name\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#90-92\">source</a><a href=\"#method.section_by_name\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.section_by_name\" class=\"fn\">section_by_name</a>(&amp;'file self, section_name: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::<a class=\"associatedtype\" href=\"object/read/trait.Object.html#associatedtype.Section\" title=\"type object::read::Object::Section\">Section</a>&gt;</h4></section></summary><div class='docblock'>Get the section named <code>section_name</code>, if such a section exists. <a href=\"object/read/trait.Object.html#method.section_by_name\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.symbol_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#153-166\">source</a><a href=\"#method.symbol_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.symbol_map\" class=\"fn\">symbol_map</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/struct.SymbolMap.html\" title=\"struct object::read::SymbolMap\">SymbolMap</a>&lt;<a class=\"struct\" href=\"object/read/struct.SymbolMapName.html\" title=\"struct object::read::SymbolMapName\">SymbolMapName</a>&lt;'data&gt;&gt;</h4></section></summary><div class='docblock'>Construct a map from addresses to symbol names. <a href=\"object/read/trait.Object.html#method.symbol_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.object_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#171-173\">source</a><a href=\"#method.object_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.object_map\" class=\"fn\">object_map</a>(&amp;'file self) -&gt; <a class=\"struct\" href=\"object/read/struct.ObjectMap.html\" title=\"struct object::read::ObjectMap\">ObjectMap</a>&lt;'data&gt;</h4></section></summary><div class='docblock'>Construct a map from addresses to symbol names and object file names. <a href=\"object/read/trait.Object.html#method.object_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mach_uuid\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#189-191\">source</a><a href=\"#method.mach_uuid\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.mach_uuid\" class=\"fn\">mach_uuid</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">16</a>]&gt;&gt;</h4></section></summary><div class='docblock'>The UUID from a Mach-O <code>LC_UUID</code> load command.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.build_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#195-197\">source</a><a href=\"#method.build_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.build_id\" class=\"fn\">build_id</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;&gt;</h4></section></summary><div class='docblock'>The build ID from an ELF <code>NT_GNU_BUILD_ID</code> note.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gnu_debuglink\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#201-203\">source</a><a href=\"#method.gnu_debuglink\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.gnu_debuglink\" class=\"fn\">gnu_debuglink</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>], <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>)&gt;&gt;</h4></section></summary><div class='docblock'>The filename and CRC from a <code>.gnu_debuglink</code> section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gnu_debugaltlink\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#207-209\">source</a><a href=\"#method.gnu_debugaltlink\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.gnu_debugaltlink\" class=\"fn\">gnu_debugaltlink</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(&amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>], &amp;'data [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>])&gt;&gt;</h4></section></summary><div class='docblock'>The filename and build ID from a <code>.gnu_debugaltlink</code> section.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pdb_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/object/read/traits.rs.html#213-215\">source</a><a href=\"#method.pdb_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"object/read/trait.Object.html#method.pdb_info\" class=\"fn\">pdb_info</a>(&amp;self) -&gt; <a class=\"type\" href=\"object/read/type.Result.html\" title=\"type object::read::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"object/read/struct.CodeView.html\" title=\"struct object::read::CodeView\">CodeView</a>&lt;'_&gt;&gt;&gt;</h4></section></summary><div class='docblock'>The filename and GUID from the PE CodeView section</div></details></div></details>","Object<'data, 'file>","object::read::coff::file::CoffBigFile"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()