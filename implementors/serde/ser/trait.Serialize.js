(function() {var implementors = {};
implementors["rair_io"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rair_io/struct.RIODesc.html\" title=\"struct rair_io::RIODesc\">RIODesc</a>","synthetic":false,"types":["rair_io::desc::RIODesc"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rair_io/struct.RIO.html\" title=\"struct rair_io::RIO\">RIO</a>","synthetic":false,"types":["rair_io::io::RIO"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rair_io/struct.RIOMap.html\" title=\"struct rair_io::RIOMap\">RIOMap</a>","synthetic":false,"types":["rair_io::mapsquery::RIOMap"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rair_io/struct.IoMode.html\" title=\"struct rair_io::IoMode\">IoMode</a>","synthetic":false,"types":["rair_io::utils::IoMode"]}];
implementors["rcore"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rcore/struct.Core.html\" title=\"struct rcore::Core\">Core</a>","synthetic":false,"types":["rcore::core::Core"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"rcore/enum.AddrMode.html\" title=\"enum rcore::AddrMode\">AddrMode</a>","synthetic":false,"types":["rcore::helper::AddrMode"]}];
implementors["rio"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rio/struct.RIODesc.html\" title=\"struct rio::RIODesc\">RIODesc</a>","synthetic":false,"types":["rio::desc::RIODesc"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rio/struct.RIO.html\" title=\"struct rio::RIO\">RIO</a>","synthetic":false,"types":["rio::io::RIO"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rio/struct.RIOMap.html\" title=\"struct rio::RIOMap\">RIOMap</a>","synthetic":false,"types":["rio::mapsquery::RIOMap"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rio/struct.IoMode.html\" title=\"struct rio::IoMode\">IoMode</a>","synthetic":false,"types":["rio::utils::IoMode"]}];
implementors["rtrees"] = [{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>, V:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rtrees/ist/struct.IST.html\" title=\"struct rtrees::ist::IST\">IST</a>&lt;K, V&gt;","synthetic":false,"types":["rtrees::ist::tree::IST"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>, A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>, V:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.104/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rtrees/rbtree/struct.RBTree.html\" title=\"struct rtrees::rbtree::RBTree\">RBTree</a>&lt;K, A, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"rtrees/rbtree/struct.RBTree.html\" title=\"struct rtrees::rbtree::RBTree\">RBTree</a>&lt;K, A, V&gt;: <a class=\"trait\" href=\"rtrees/rbtree/trait.Augment.html\" title=\"trait rtrees::rbtree::Augment\">Augment</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["rtrees::rbtree::rbtree_wrapper::RBTree"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()