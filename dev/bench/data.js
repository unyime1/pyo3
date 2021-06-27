window.BENCHMARK_DATA = {
  "lastUpdate": 1624812309196,
  "repoUrl": "https://github.com/PyO3/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9ce569d29fdb73ca2b48af6d6c93889c7a43bf1",
          "message": "Merge pull request #1639 from messense/bench\n\nAdd automated continuous benchmarking",
          "timestamp": "2021-06-04T14:34:01+01:00",
          "tree_id": "3f99c52f863a9d4c968b11d43426c16fae5cd388",
          "url": "https://github.com/PyO3/pyo3/commit/c9ce569d29fdb73ca2b48af6d6c93889c7a43bf1"
        },
        "date": 1622814252340,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78575,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 225894,
            "range": "± 14689",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2373429,
            "range": "± 20862",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2801614,
            "range": "± 91891",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7034521,
            "range": "± 180645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11429267,
            "range": "± 73365",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5763765,
            "range": "± 281272",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1779291,
            "range": "± 48245",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 800692,
            "range": "± 23745",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4518,
            "range": "± 24857",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1747304,
            "range": "± 36147",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9714936,
            "range": "± 175763",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9633397,
            "range": "± 85671",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4353522,
            "range": "± 50683",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1138108,
            "range": "± 3629",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 600755,
            "range": "± 768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15366b9b483d64807f2e8f7988266a1a48655065",
          "message": "Merge pull request #1651 from davidhewitt/tuple-get-set\n\npyclass: allow `#[pyo3(get, set, name = \"foo\")]`",
          "timestamp": "2021-06-04T19:26:51+01:00",
          "tree_id": "fb83de96b67e334a1dced6fbfd2042e1f625b341",
          "url": "https://github.com/PyO3/pyo3/commit/15366b9b483d64807f2e8f7988266a1a48655065"
        },
        "date": 1622831664927,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79179,
            "range": "± 3941",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237604,
            "range": "± 13798",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2445092,
            "range": "± 22418",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2805914,
            "range": "± 14337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7221368,
            "range": "± 335574",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11401843,
            "range": "± 88549",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5672151,
            "range": "± 160795",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1789150,
            "range": "± 46292",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 810828,
            "range": "± 23517",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4642,
            "range": "± 23599",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1778355,
            "range": "± 58424",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7275540,
            "range": "± 110662",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9808923,
            "range": "± 49782",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4411359,
            "range": "± 71777",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1139731,
            "range": "± 3595",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 600984,
            "range": "± 899",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81934c568416c7811adee7842d210f3d0e266d67",
          "message": "Merge pull request #1652 from messense/pytest-bench\n\nRun pytest pyo3-benchmarks on CI",
          "timestamp": "2021-06-05T07:21:02+01:00",
          "tree_id": "2644963a566155a11e204c7bf836614219654bc6",
          "url": "https://github.com/PyO3/pyo3/commit/81934c568416c7811adee7842d210f3d0e266d67"
        },
        "date": 1622874564643,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 100083,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 297696,
            "range": "± 14263",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3054406,
            "range": "± 104753",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3578794,
            "range": "± 134745",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11791246,
            "range": "± 1856091",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14993101,
            "range": "± 856181",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 10104904,
            "range": "± 1561022",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2344451,
            "range": "± 114958",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1110799,
            "range": "± 57227",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5527,
            "range": "± 23287",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4867,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2330598,
            "range": "± 89139",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11468413,
            "range": "± 628637",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12284645,
            "range": "± 426152",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6603090,
            "range": "± 548319",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1463562,
            "range": "± 72697",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 746122,
            "range": "± 19743",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3292ccf5e44fa6980e6531c4a3178ed2a2c9122d",
          "message": "Merge pull request #1653 from PyO3/pytuple_fast\n\nPyTuple: use fast macros on !abi3",
          "timestamp": "2021-06-05T08:10:42+01:00",
          "tree_id": "73ebdab1506c66871160d4aaa401db4fa715a0dd",
          "url": "https://github.com/PyO3/pyo3/commit/3292ccf5e44fa6980e6531c4a3178ed2a2c9122d"
        },
        "date": 1622877770588,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97911,
            "range": "± 6502",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 278397,
            "range": "± 6466",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2833543,
            "range": "± 22750",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3341838,
            "range": "± 50189",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8136792,
            "range": "± 421192",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13832223,
            "range": "± 221539",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6336250,
            "range": "± 251964",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2051235,
            "range": "± 56790",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 931643,
            "range": "± 30217",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4935,
            "range": "± 22800",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3961,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2036521,
            "range": "± 52877",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8611317,
            "range": "± 214721",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11556784,
            "range": "± 190923",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5324583,
            "range": "± 106951",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 941729,
            "range": "± 23930",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 496132,
            "range": "± 12004",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49f4440b46e479cbdc78daf26dea844043bcfc9",
          "message": "Merge pull request #1654 from messense/pathlib\n\nAdd support for extracting PathBuf from pathlib.Path",
          "timestamp": "2021-06-05T15:49:30+08:00",
          "tree_id": "e2c481e19f9fa455e0db4289474f19e7032c89b0",
          "url": "https://github.com/PyO3/pyo3/commit/f49f4440b46e479cbdc78daf26dea844043bcfc9"
        },
        "date": 1622880245416,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78978,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224159,
            "range": "± 15044",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2350474,
            "range": "± 14314",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2776454,
            "range": "± 12278",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6758561,
            "range": "± 151005",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11379982,
            "range": "± 57409",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5355474,
            "range": "± 162388",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1777492,
            "range": "± 38448",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 791788,
            "range": "± 23919",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4390,
            "range": "± 26989",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3502,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1845924,
            "range": "± 45821",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7037817,
            "range": "± 82313",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9630431,
            "range": "± 63964",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4273865,
            "range": "± 65886",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 808975,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 401816,
            "range": "± 1128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3d3be600b8ac12a352d55d0091cf9253405005e",
          "message": "Merge pull request #1655 from davidhewitt/bench-tuple-new\n\nbench_tuple: add benchmark for `PyTuple::new`",
          "timestamp": "2021-06-05T09:27:40+01:00",
          "tree_id": "9540b00d11dfcbb930cc96780dae4d7226856eaa",
          "url": "https://github.com/PyO3/pyo3/commit/b3d3be600b8ac12a352d55d0091cf9253405005e"
        },
        "date": 1622882406978,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77647,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 229379,
            "range": "± 14718",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2383061,
            "range": "± 15911",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3129736,
            "range": "± 8620",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7313234,
            "range": "± 181663",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11587012,
            "range": "± 74581",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5833254,
            "range": "± 251480",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1793230,
            "range": "± 69729",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 798230,
            "range": "± 24186",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4466,
            "range": "± 25972",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3502,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1728333,
            "range": "± 43509",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7130158,
            "range": "± 67042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9705180,
            "range": "± 41042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4321164,
            "range": "± 39014",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 788205,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1491561,
            "range": "± 54170",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 451831,
            "range": "± 3819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97d6f15b32c3090498911b8bff2edcef496bf228",
          "message": "Merge pull request #1626 from alonblade/cross-sysconfig\n\nbuild.rs: if found more than one candidate, filter on arch",
          "timestamp": "2021-06-05T09:29:00+01:00",
          "tree_id": "50ed56c788d832ec3b1e3e752b53c2a3fb79a8d5",
          "url": "https://github.com/PyO3/pyo3/commit/97d6f15b32c3090498911b8bff2edcef496bf228"
        },
        "date": 1622882447619,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79000,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 230369,
            "range": "± 13148",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2430818,
            "range": "± 12468",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2865974,
            "range": "± 31843",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8020636,
            "range": "± 469475",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11966360,
            "range": "± 199481",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6364268,
            "range": "± 616612",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1805425,
            "range": "± 62844",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 805106,
            "range": "± 25571",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4628,
            "range": "± 23026",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3504,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1777482,
            "range": "± 67775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7249559,
            "range": "± 94438",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9771569,
            "range": "± 45701",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4444887,
            "range": "± 66315",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 798096,
            "range": "± 10550",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1669685,
            "range": "± 87894",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 397057,
            "range": "± 1094",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5810eaffa95b5e2ae4986c2be461291737b0421",
          "message": "Merge pull request #1619 from birkenfeld/fastcall\n\nImplement METH_FASTCALL for pyfunctions.",
          "timestamp": "2021-06-05T12:32:16+01:00",
          "tree_id": "d75fc0f08b3b7bf3f8abb4754ebdd92551d55ba6",
          "url": "https://github.com/PyO3/pyo3/commit/a5810eaffa95b5e2ae4986c2be461291737b0421"
        },
        "date": 1622893471296,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94399,
            "range": "± 5671",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 266379,
            "range": "± 6450",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2813394,
            "range": "± 140124",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3367059,
            "range": "± 166870",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7970525,
            "range": "± 414155",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13453213,
            "range": "± 362645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6317643,
            "range": "± 371932",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2015570,
            "range": "± 142074",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 913548,
            "range": "± 48464",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4871,
            "range": "± 22115",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3981,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2012458,
            "range": "± 120936",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7773420,
            "range": "± 341270",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10700190,
            "range": "± 456912",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4849460,
            "range": "± 264492",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 893582,
            "range": "± 104210",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1586289,
            "range": "± 92860",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 452666,
            "range": "± 18279",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fbf61717e82100036ac365bd6937f4ed9201c9",
          "message": "Merge pull request #1658 from davidhewitt/pyo3-text-signature\n\ntext_signature: move to `#[pyo3(text_signature = \"...\")]`",
          "timestamp": "2021-06-05T17:31:32+01:00",
          "tree_id": "07fc4331eb0e8899106ebb1706f536fd776a8566",
          "url": "https://github.com/PyO3/pyo3/commit/51fbf61717e82100036ac365bd6937f4ed9201c9"
        },
        "date": 1622912307683,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97992,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 279904,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2874741,
            "range": "± 30020",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3311596,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9236436,
            "range": "± 563495",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14071193,
            "range": "± 119319",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7188779,
            "range": "± 405348",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2184390,
            "range": "± 11572",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 973645,
            "range": "± 20280",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5070,
            "range": "± 20876",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4148,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2099761,
            "range": "± 11896",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9728875,
            "range": "± 92676",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12245486,
            "range": "± 52558",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5411473,
            "range": "± 79988",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 966358,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1913198,
            "range": "± 26631",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 483042,
            "range": "± 1688",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0aa2cdee6f76ec24b9d972f615480135d9a3bb",
          "message": "Merge pull request #1659 from davidhewitt/pyo3-pass-module\n\npyfunction: document `#[pyo3(pass_module)]`",
          "timestamp": "2021-06-05T18:44:48+01:00",
          "tree_id": "45449bbfa4e07e497bf6fa25c328a26adc78ff72",
          "url": "https://github.com/PyO3/pyo3/commit/bd0aa2cdee6f76ec24b9d972f615480135d9a3bb"
        },
        "date": 1622915615698,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92349,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 289643,
            "range": "± 9719",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2808957,
            "range": "± 25136",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3280068,
            "range": "± 32106",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9007766,
            "range": "± 476027",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14065632,
            "range": "± 160824",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6774513,
            "range": "± 363348",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2204636,
            "range": "± 5907",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 973523,
            "range": "± 24502",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5052,
            "range": "± 23838",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4120,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2066754,
            "range": "± 19867",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8411158,
            "range": "± 211898",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11232207,
            "range": "± 166724",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5208281,
            "range": "± 117023",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 920051,
            "range": "± 16231",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1885232,
            "range": "± 28003",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 473175,
            "range": "± 5627",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c6d46c86be72ee756fe8a32b62ec87ffad745a5",
          "message": "Merge pull request #1663 from davidhewitt/ci-3.10-dev\n\nci: use latest Python 3.10 beta",
          "timestamp": "2021-06-05T19:42:05+01:00",
          "tree_id": "8424abcfdeca1ff089aa9083dd8333274857dc52",
          "url": "https://github.com/PyO3/pyo3/commit/4c6d46c86be72ee756fe8a32b62ec87ffad745a5"
        },
        "date": 1622919052027,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82226,
            "range": "± 4392",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237907,
            "range": "± 21052",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2422617,
            "range": "± 92527",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2960451,
            "range": "± 125239",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7442213,
            "range": "± 317595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11735439,
            "range": "± 435215",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5883252,
            "range": "± 262678",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 109,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1906880,
            "range": "± 116167",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 840599,
            "range": "± 39677",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4548,
            "range": "± 21853",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3563,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1782819,
            "range": "± 95883",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7550786,
            "range": "± 326585",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9885445,
            "range": "± 418172",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4424052,
            "range": "± 217825",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 852526,
            "range": "± 38172",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1552374,
            "range": "± 79871",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 423473,
            "range": "± 18600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2c173dbee2cd726f7d12125f9fcb116588c6e7",
          "message": "Merge pull request #1660 from PyO3/method_defs",
          "timestamp": "2021-06-06T07:47:21+02:00",
          "tree_id": "7e3f094a7dc43caec9191b6ba98aa0e0a35dd57f",
          "url": "https://github.com/PyO3/pyo3/commit/4d2c173dbee2cd726f7d12125f9fcb116588c6e7"
        },
        "date": 1622958926145,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96121,
            "range": "± 6606",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270721,
            "range": "± 13260",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2701813,
            "range": "± 124045",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3148514,
            "range": "± 153533",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9834257,
            "range": "± 527276",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12807372,
            "range": "± 722197",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8078224,
            "range": "± 426137",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1967403,
            "range": "± 95039",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 910823,
            "range": "± 42978",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5420,
            "range": "± 24664",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4412,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2041149,
            "range": "± 104385",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10002438,
            "range": "± 439427",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11036495,
            "range": "± 502018",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5943843,
            "range": "± 321028",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 873445,
            "range": "± 37293",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1679278,
            "range": "± 94727",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 498921,
            "range": "± 36239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c57afeb33228efd68a7de4d18caf562f54fe9622",
          "message": "Merge pull request #1661 from PyO3/optimize_forwarding\n\nOptimize f(*args, **kwds) function argument \"parsing\"",
          "timestamp": "2021-06-06T08:27:33+02:00",
          "tree_id": "9fadf1330c2eddccf638c7688d08e9a3cb725b9f",
          "url": "https://github.com/PyO3/pyo3/commit/c57afeb33228efd68a7de4d18caf562f54fe9622"
        },
        "date": 1622962345255,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91439,
            "range": "± 6978",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270561,
            "range": "± 25281",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2729240,
            "range": "± 181676",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3174860,
            "range": "± 164908",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9932586,
            "range": "± 625631",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13138765,
            "range": "± 788935",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8383774,
            "range": "± 631976",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2149413,
            "range": "± 151738",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 915515,
            "range": "± 70356",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5311,
            "range": "± 24674",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4400,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1987454,
            "range": "± 102107",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9679169,
            "range": "± 552102",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10676399,
            "range": "± 553241",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5755517,
            "range": "± 295820",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 852601,
            "range": "± 39909",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1668235,
            "range": "± 96301",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 491266,
            "range": "± 27792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b681143cc88e553c68fa51ecb36ed4a0f309a8e",
          "message": "Merge pull request #1664 from PyO3/pylist_opt\n\nPyList: remove get_parked_item, use macros for speed on !abi3",
          "timestamp": "2021-06-06T08:31:18+01:00",
          "tree_id": "3870ced28ecf7272d5825ef95c612b549b432577",
          "url": "https://github.com/PyO3/pyo3/commit/6b681143cc88e553c68fa51ecb36ed4a0f309a8e"
        },
        "date": 1622965128173,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78040,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226276,
            "range": "± 12429",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2429268,
            "range": "± 18762",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2749199,
            "range": "± 24986",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7640175,
            "range": "± 430368",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11690890,
            "range": "± 102421",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6027747,
            "range": "± 329471",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1401150,
            "range": "± 57340",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 635535,
            "range": "± 19682",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4354,
            "range": "± 20625",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1769762,
            "range": "± 52678",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7373380,
            "range": "± 107461",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9795141,
            "range": "± 52595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4616326,
            "range": "± 73836",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806486,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1647818,
            "range": "± 65507",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 402140,
            "range": "± 1057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9a3da3e40d83fe09205656d3dd28080caf9ecad",
          "message": "Merge pull request #1668 from PyO3/pylist_fix",
          "timestamp": "2021-06-06T10:52:23+02:00",
          "tree_id": "0ac9a6e84eac6b15792b8a3f7088d5dc29981f33",
          "url": "https://github.com/PyO3/pyo3/commit/f9a3da3e40d83fe09205656d3dd28080caf9ecad"
        },
        "date": 1622970008989,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79121,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 242376,
            "range": "± 14951",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2381423,
            "range": "± 20499",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2705775,
            "range": "± 9993",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7039686,
            "range": "± 120400",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11379047,
            "range": "± 42262",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5538717,
            "range": "± 97295",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1324546,
            "range": "± 43488",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 608181,
            "range": "± 23772",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4497,
            "range": "± 20333",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1779712,
            "range": "± 67795",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7204746,
            "range": "± 71733",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9696881,
            "range": "± 59073",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4568969,
            "range": "± 61602",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806630,
            "range": "± 6603",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1698890,
            "range": "± 69786",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 402167,
            "range": "± 901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd258803e7a4acced1bf7fa4be6e862cc0a7b36",
          "message": "Merge pull request #1666 from davidhewitt/bench-new-containers\n\nbenches: add benchmarks for container creation",
          "timestamp": "2021-06-06T17:58:58+08:00",
          "tree_id": "ef0c8c3c15676bf86f5d34b704903c371ec08c82",
          "url": "https://github.com/PyO3/pyo3/commit/abd258803e7a4acced1bf7fa4be6e862cc0a7b36"
        },
        "date": 1622974074935,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 105088,
            "range": "± 6172",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 310358,
            "range": "± 20415",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2932974,
            "range": "± 10668",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5863957,
            "range": "± 153548",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3453294,
            "range": "± 22141",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9071595,
            "range": "± 247269",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13949427,
            "range": "± 99751",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7160861,
            "range": "± 277440",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1598243,
            "range": "± 42425",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1771658,
            "range": "± 17721",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 839973,
            "range": "± 23019",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5325,
            "range": "± 21048",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4321,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2179548,
            "range": "± 9704",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9207123,
            "range": "± 85266",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12063959,
            "range": "± 40334",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5689344,
            "range": "± 64556",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1008099,
            "range": "± 3605",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1777493,
            "range": "± 6964",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 539134,
            "range": "± 26446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a29097175903dedf65da28d7a44f2d033c3121be",
          "message": "Merge pull request #1650 from davidhewitt/pymodule-name\n\npymodule: accept `#[pyo3(name = \"...\")]` option",
          "timestamp": "2021-06-06T11:11:10+01:00",
          "tree_id": "2001810815903dada3323da68c4b03ed68180176",
          "url": "https://github.com/PyO3/pyo3/commit/a29097175903dedf65da28d7a44f2d033c3121be"
        },
        "date": 1622974815845,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 87919,
            "range": "± 4152",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 260780,
            "range": "± 12874",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2691965,
            "range": "± 143522",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5205353,
            "range": "± 284348",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3015461,
            "range": "± 106019",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9836873,
            "range": "± 487337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12068100,
            "range": "± 391422",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7782242,
            "range": "± 344872",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1547525,
            "range": "± 97777",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1706607,
            "range": "± 77089",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 720486,
            "range": "± 41769",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5465,
            "range": "± 24917",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4327,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1991276,
            "range": "± 82089",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9634007,
            "range": "± 471710",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10775251,
            "range": "± 440771",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5805858,
            "range": "± 316365",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 873317,
            "range": "± 38817",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1606192,
            "range": "± 68116",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 484725,
            "range": "± 15787",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355",
          "message": "Merge pull request #1669 from PyO3/pymethod_cleanup\n\nReorganize method wrapper generation",
          "timestamp": "2021-06-07T23:19:23+01:00",
          "tree_id": "84c094321f446d555f75a7f7bfc1a8fb77b8556c",
          "url": "https://github.com/PyO3/pyo3/commit/c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355"
        },
        "date": 1623104987112,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95046,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 287528,
            "range": "± 3896",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2869039,
            "range": "± 135462",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5570102,
            "range": "± 158238",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3417777,
            "range": "± 22534",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8171398,
            "range": "± 160604",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12798714,
            "range": "± 738559",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6472116,
            "range": "± 368217",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 107,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1480822,
            "range": "± 95205",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1689134,
            "range": "± 122489",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 760396,
            "range": "± 38890",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4674,
            "range": "± 23166",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3953,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2012762,
            "range": "± 70024",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8741497,
            "range": "± 176515",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10743100,
            "range": "± 678195",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5043818,
            "range": "± 119122",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 895144,
            "range": "± 48669",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1688047,
            "range": "± 97815",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 447758,
            "range": "± 28581",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc",
          "message": "Merge pull request #1665 from PyO3/kwds_varargs\n\nArgument parsing: use VARARGS for *any* function taking **kwds",
          "timestamp": "2021-06-07T23:23:05+01:00",
          "tree_id": "26321f31fbb34b78ae355d3a932459d2ce02031b",
          "url": "https://github.com/PyO3/pyo3/commit/b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc"
        },
        "date": 1623105865935,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95107,
            "range": "± 5646",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274465,
            "range": "± 3844",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2844336,
            "range": "± 41921",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5695572,
            "range": "± 115070",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3290105,
            "range": "± 12817",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8877681,
            "range": "± 453979",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13278058,
            "range": "± 140157",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6937449,
            "range": "± 204681",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1540481,
            "range": "± 39861",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1740751,
            "range": "± 7461",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 809938,
            "range": "± 20898",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5080,
            "range": "± 21145",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4147,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2082912,
            "range": "± 11887",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8837412,
            "range": "± 104135",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11613365,
            "range": "± 48169",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5449343,
            "range": "± 94779",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 964967,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1911059,
            "range": "± 20401",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 483953,
            "range": "± 1151",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05e4bdf69cde2bc49865fbafe756a8507dd45f1d",
          "message": "Merge pull request #1670 from mejrs/num-dependency\n\nAdd docs + slight refactor for num-complex and num-bigint dependencies",
          "timestamp": "2021-06-11T19:10:58+01:00",
          "tree_id": "722cf936bc22260d1a07ee643b7a71620cf6ed48",
          "url": "https://github.com/PyO3/pyo3/commit/05e4bdf69cde2bc49865fbafe756a8507dd45f1d"
        },
        "date": 1623436354176,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80049,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 230553,
            "range": "± 14255",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2498966,
            "range": "± 29268",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4924538,
            "range": "± 116868",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2794413,
            "range": "± 11999",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9761127,
            "range": "± 847450",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13361783,
            "range": "± 147503",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7361669,
            "range": "± 523573",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1355379,
            "range": "± 30161",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1534708,
            "range": "± 39419",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 652793,
            "range": "± 17853",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4587,
            "range": "± 24279",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1821659,
            "range": "± 79974",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8056580,
            "range": "± 146631",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10325072,
            "range": "± 101127",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5027449,
            "range": "± 139410",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 817730,
            "range": "± 10305",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1693032,
            "range": "± 54069",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 456854,
            "range": "± 1337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "159a93d7b73cf646efc54b2fec0dd7788d263541",
          "message": "Merge pull request #1673 from messense/detect-python-implementation\n\nDetect Python implementation from `SOABI` on Unix",
          "timestamp": "2021-06-12T05:34:33+08:00",
          "tree_id": "6e802774d11be47b54af9fe780a4ffc82a9f5e57",
          "url": "https://github.com/PyO3/pyo3/commit/159a93d7b73cf646efc54b2fec0dd7788d263541"
        },
        "date": 1623447784403,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93367,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 269481,
            "range": "± 4531",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2837998,
            "range": "± 25544",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5651719,
            "range": "± 155400",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3226553,
            "range": "± 35530",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8991711,
            "range": "± 468210",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15042182,
            "range": "± 203254",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7439501,
            "range": "± 386243",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1511979,
            "range": "± 52402",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1698261,
            "range": "± 24705",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 754555,
            "range": "± 35538",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4931,
            "range": "± 22423",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4013,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2050558,
            "range": "± 27910",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8706946,
            "range": "± 125331",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11839281,
            "range": "± 334438",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5437373,
            "range": "± 130443",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 949620,
            "range": "± 11302",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1867035,
            "range": "± 27311",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 538590,
            "range": "± 9754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a298db2c0617257c245bb9be0dfd1a743a26df58",
          "message": "Merge pull request #1674 from mejrs/make-clippy-happy\n\nallow useless conversion (on some platforms)",
          "timestamp": "2021-06-12T05:35:36+08:00",
          "tree_id": "1df10f27d7e8e5ef048af44f43ef8ea3545f33bd",
          "url": "https://github.com/PyO3/pyo3/commit/a298db2c0617257c245bb9be0dfd1a743a26df58"
        },
        "date": 1623448581110,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93833,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 285290,
            "range": "± 11138",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2994019,
            "range": "± 122849",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5822430,
            "range": "± 266249",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3416221,
            "range": "± 72208",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10198131,
            "range": "± 787638",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13278982,
            "range": "± 596148",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8296762,
            "range": "± 398101",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1626088,
            "range": "± 137702",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1748918,
            "range": "± 105705",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 763027,
            "range": "± 62806",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5233,
            "range": "± 20705",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4649,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2086244,
            "range": "± 79478",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9969082,
            "range": "± 400096",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11314896,
            "range": "± 403878",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6021200,
            "range": "± 223835",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 988453,
            "range": "± 27646",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1674817,
            "range": "± 64910",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 525752,
            "range": "± 22009",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9693604da76593c88ee6d2ad6334b1f13cfdcd2e",
          "message": "Merge pull request #1676 from aviramha/patch-1\n\nAdd ormsgpack as an example in the README",
          "timestamp": "2021-06-13T15:17:15+08:00",
          "tree_id": "f84262a99aafb9436276ab9b57d94d8258bda222",
          "url": "https://github.com/PyO3/pyo3/commit/9693604da76593c88ee6d2ad6334b1f13cfdcd2e"
        },
        "date": 1623569277584,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94127,
            "range": "± 2048",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274523,
            "range": "± 2736",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2907900,
            "range": "± 11005",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5695786,
            "range": "± 128727",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3312370,
            "range": "± 13216",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9926205,
            "range": "± 392461",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15439786,
            "range": "± 109595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7656395,
            "range": "± 256715",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1620517,
            "range": "± 37784",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1734859,
            "range": "± 56829",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 748627,
            "range": "± 24625",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5242,
            "range": "± 21650",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4150,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2186591,
            "range": "± 17134",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9203317,
            "range": "± 68372",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11824602,
            "range": "± 78171",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5500066,
            "range": "± 106438",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 990939,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1938458,
            "range": "± 7492",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 544057,
            "range": "± 359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a0391fb1bb9c8013096a7403bf49dfa3c59e5f",
          "message": "Merge pull request #1685 from mejrs/fix_ui_tests\n\nupdate error message for rust 1.53",
          "timestamp": "2021-06-20T00:28:39+08:00",
          "tree_id": "abdf654bea2bf74f2fe8a303fab111284daaa219",
          "url": "https://github.com/PyO3/pyo3/commit/64a0391fb1bb9c8013096a7403bf49dfa3c59e5f"
        },
        "date": 1624120671903,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 72160,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 208699,
            "range": "± 10562",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2085232,
            "range": "± 13278",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4359280,
            "range": "± 113612",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2415352,
            "range": "± 11796",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6554603,
            "range": "± 116804",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11721527,
            "range": "± 122052",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6533109,
            "range": "± 360220",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1217791,
            "range": "± 49189",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1368951,
            "range": "± 64761",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 594057,
            "range": "± 17852",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4051,
            "range": "± 20648",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3049,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1596540,
            "range": "± 59394",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7166085,
            "range": "± 61594",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10125025,
            "range": "± 79528",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4248320,
            "range": "± 191354",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 677346,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1377360,
            "range": "± 25669",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 387371,
            "range": "± 974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cba18f176db5ecb355908c7532eaca76c3cc41a",
          "message": "Merge pull request #1657 from davidhewitt/pycell-init\n\npyclass: refactor `tp_new` / `tp_dealloc` / remove `PyCellInner`",
          "timestamp": "2021-06-23T08:22:23+01:00",
          "tree_id": "2b6bfb3e53b36240c509e849129f5a2e79315cca",
          "url": "https://github.com/PyO3/pyo3/commit/2cba18f176db5ecb355908c7532eaca76c3cc41a"
        },
        "date": 1624433651942,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91620,
            "range": "± 4874",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 291043,
            "range": "± 25383",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2914290,
            "range": "± 249886",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5568992,
            "range": "± 365061",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3248758,
            "range": "± 114568",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9928128,
            "range": "± 758160",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13442739,
            "range": "± 621119",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7568650,
            "range": "± 539169",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1572246,
            "range": "± 100414",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1681232,
            "range": "± 91120",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 753595,
            "range": "± 37606",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5888,
            "range": "± 21266",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4579,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2096073,
            "range": "± 75836",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9462717,
            "range": "± 545994",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11146337,
            "range": "± 439964",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5518039,
            "range": "± 264931",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 981848,
            "range": "± 41758",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1664990,
            "range": "± 118238",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 477900,
            "range": "± 54228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc66afa159875c41d2659f65595e294ea343cd8d",
          "message": "Merge pull request #1689 from messense/bench-badge\n\nAdd a badge and link to benchmark tracking page",
          "timestamp": "2021-06-23T16:44:11+08:00",
          "tree_id": "d9e3222f50d04a68f4dadce076b1e1cb5f9e7686",
          "url": "https://github.com/PyO3/pyo3/commit/dc66afa159875c41d2659f65595e294ea343cd8d"
        },
        "date": 1624438452056,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96887,
            "range": "± 7166",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 283102,
            "range": "± 20249",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2789568,
            "range": "± 50605",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5636070,
            "range": "± 146397",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3269106,
            "range": "± 62426",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9708372,
            "range": "± 627692",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15612617,
            "range": "± 265690",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6880461,
            "range": "± 274425",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1564924,
            "range": "± 84812",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1885495,
            "range": "± 49200",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 841925,
            "range": "± 42879",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5562,
            "range": "± 27521",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3929,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2038049,
            "range": "± 39997",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8929416,
            "range": "± 204924",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11795274,
            "range": "± 177062",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5210224,
            "range": "± 128685",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 851197,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1772678,
            "range": "± 90966",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 551702,
            "range": "± 18778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41201924+aviramha@users.noreply.github.com",
            "name": "Aviram Hassan",
            "username": "aviramha"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13cd092c4e87171462f422de804f25dd630ea436",
          "message": "Update class.md - add example of `new` returning a `PyResult` (#1688)\n\n* Update class.md - add example of `new` returning a `PyResult`\r\n\r\n* Update class.md",
          "timestamp": "2021-06-23T17:40:01+08:00",
          "tree_id": "1e5539ded72723a593a410a2b51c34e9102f1480",
          "url": "https://github.com/PyO3/pyo3/commit/13cd092c4e87171462f422de804f25dd630ea436"
        },
        "date": 1624441733317,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94201,
            "range": "± 6989",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 266427,
            "range": "± 18505",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2652224,
            "range": "± 60869",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5247491,
            "range": "± 295687",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3193941,
            "range": "± 122070",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7962379,
            "range": "± 560706",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14485780,
            "range": "± 787089",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5810070,
            "range": "± 547065",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1442040,
            "range": "± 99271",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1686811,
            "range": "± 61495",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 745437,
            "range": "± 41616",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4894,
            "range": "± 23360",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3922,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1981329,
            "range": "± 42506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8435362,
            "range": "± 494938",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11263632,
            "range": "± 676645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4948236,
            "range": "± 169567",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 857827,
            "range": "± 23402",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1641650,
            "range": "± 136024",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 544199,
            "range": "± 27374",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14808292fed8bb3f3c10155062f1eaba2a49ee41",
          "message": "Merge pull request #1692 from GabrielMajeri/make-tracefunc-optional\n\nMake the `Py_tracefunc` parameters optional",
          "timestamp": "2021-06-24T07:29:47+01:00",
          "tree_id": "a37583ddc3b51a7adf5bc4abe12b5714dc4bbc02",
          "url": "https://github.com/PyO3/pyo3/commit/14808292fed8bb3f3c10155062f1eaba2a49ee41"
        },
        "date": 1624517151757,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78296,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223224,
            "range": "± 13440",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2352257,
            "range": "± 15375",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4864355,
            "range": "± 112429",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2740622,
            "range": "± 11768",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7279658,
            "range": "± 128389",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13105489,
            "range": "± 89443",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6030200,
            "range": "± 206883",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1320099,
            "range": "± 41741",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1522844,
            "range": "± 55937",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 672237,
            "range": "± 41925",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4521,
            "range": "± 26237",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1776424,
            "range": "± 36941",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7493459,
            "range": "± 94775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9935139,
            "range": "± 40753",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4451509,
            "range": "± 48607",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 749086,
            "range": "± 92969",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1676926,
            "range": "± 85749",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 474199,
            "range": "± 4522",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f",
          "message": "Merge pull request #1690 from davidhewitt/safety-docs\n\ndocs: implement final missing safety docs",
          "timestamp": "2021-06-24T07:51:28+01:00",
          "tree_id": "37ee98645fcdb85033ff9eacc691817e52c459df",
          "url": "https://github.com/PyO3/pyo3/commit/36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f"
        },
        "date": 1624518371254,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 86924,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 265103,
            "range": "± 30195",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2755449,
            "range": "± 192397",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5402353,
            "range": "± 353829",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3013308,
            "range": "± 207808",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10077254,
            "range": "± 846042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12505329,
            "range": "± 751104",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8143899,
            "range": "± 461239",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1537747,
            "range": "± 123327",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1718666,
            "range": "± 131321",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 767681,
            "range": "± 54972",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4354,
            "range": "± 21601",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3677,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2060689,
            "range": "± 164361",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8858562,
            "range": "± 570479",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10154637,
            "range": "± 476113",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5296255,
            "range": "± 392627",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 762994,
            "range": "± 50943",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1440533,
            "range": "± 153800",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 453018,
            "range": "± 39638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02353ce3421e2b16be790b262252d11f404a907",
          "message": "Merge pull request #1679 from messense/error-cause\n\nAdd support for setting and retrieving exception cause",
          "timestamp": "2021-06-24T07:58:34+01:00",
          "tree_id": "5a49884aaf7d910cf329ef78dd7134394a8f0eda",
          "url": "https://github.com/PyO3/pyo3/commit/a02353ce3421e2b16be790b262252d11f404a907"
        },
        "date": 1624519274636,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82363,
            "range": "± 4866",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226543,
            "range": "± 13707",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2337029,
            "range": "± 14953",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4796102,
            "range": "± 131603",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2728230,
            "range": "± 8257",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7273262,
            "range": "± 53231",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12710122,
            "range": "± 35831",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5635353,
            "range": "± 76644",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1307128,
            "range": "± 41673",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1525730,
            "range": "± 56571",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 632665,
            "range": "± 30236",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4490,
            "range": "± 26334",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1841985,
            "range": "± 34248",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7360111,
            "range": "± 154850",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9893028,
            "range": "± 86079",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4334134,
            "range": "± 34042",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 804888,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1512797,
            "range": "± 60181",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 423033,
            "range": "± 1467",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59372212+mejrs@users.noreply.github.com",
            "name": "mejrs",
            "username": "mejrs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455cc95c54f70a6db1e1490583e578de76a821fe",
          "message": "implement ffi/cpython/pystate (#1687)\n\n* dont reexport cpython items twice\r\n\r\n* add ffi module level doc\r\n\r\n* reorder to header file order\r\n\r\n* cargo fmt\r\n\r\n* implement cpython/pystate\r\n\r\n* fix import errors\r\n\r\n* make PyInterpreterState opaque\r\n\r\n* update changelog\r\n\r\n* fix formatting",
          "timestamp": "2021-06-24T20:05:15+08:00",
          "tree_id": "7ebb04f2e789117d0e45438079c859b991c0cb96",
          "url": "https://github.com/PyO3/pyo3/commit/455cc95c54f70a6db1e1490583e578de76a821fe"
        },
        "date": 1624536800148,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78217,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 219561,
            "range": "± 15175",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2306259,
            "range": "± 16441",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4710521,
            "range": "± 136813",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2725368,
            "range": "± 8179",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6796644,
            "range": "± 78315",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12639771,
            "range": "± 47676",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5206135,
            "range": "± 53324",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1297462,
            "range": "± 48019",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1514680,
            "range": "± 42854",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 630563,
            "range": "± 30680",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4611,
            "range": "± 26847",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1760087,
            "range": "± 45406",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7272373,
            "range": "± 43736",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9818147,
            "range": "± 37248",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4276266,
            "range": "± 29040",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805611,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1659359,
            "range": "± 101434",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 420333,
            "range": "± 519",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf283d36cfe523acc1e3e3c80f89b527d5c8991",
          "message": "Merge pull request #832 from gilescope/macro\n\nNeed to be able to create structs via macro_rules",
          "timestamp": "2021-06-24T22:14:56+08:00",
          "tree_id": "f8b70d9f7d60d59b69ff99f2bc4dec45f7c2a66f",
          "url": "https://github.com/PyO3/pyo3/commit/3bf283d36cfe523acc1e3e3c80f89b527d5c8991"
        },
        "date": 1624544740855,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92647,
            "range": "± 2545",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262152,
            "range": "± 14861",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2668973,
            "range": "± 78035",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5548045,
            "range": "± 258652",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3158015,
            "range": "± 142051",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8614141,
            "range": "± 382401",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15097224,
            "range": "± 683499",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6655521,
            "range": "± 400644",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 107,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1485681,
            "range": "± 54802",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1707807,
            "range": "± 106351",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 731446,
            "range": "± 29523",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4796,
            "range": "± 23620",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3853,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2079300,
            "range": "± 93413",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8545303,
            "range": "± 278957",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11438858,
            "range": "± 358233",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5047938,
            "range": "± 170870",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 935859,
            "range": "± 38657",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1631935,
            "range": "± 70530",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 477324,
            "range": "± 15684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6009cc82cba1693da90c15f33a15e36efc982250",
          "message": "Merge pull request #1695 from messense/wrap-function-prelude\n\nAdd `wrap_pyfunction` macro to prelude",
          "timestamp": "2021-06-24T20:23:30+01:00",
          "tree_id": "5a1d9336d07c8a03c426d4d4aaa9559030822509",
          "url": "https://github.com/PyO3/pyo3/commit/6009cc82cba1693da90c15f33a15e36efc982250"
        },
        "date": 1624563157152,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 85409,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253863,
            "range": "± 19697",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2601710,
            "range": "± 87586",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5151206,
            "range": "± 181221",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2837544,
            "range": "± 89022",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8633886,
            "range": "± 611457",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12041327,
            "range": "± 705490",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6835627,
            "range": "± 348781",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 101,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1450698,
            "range": "± 65875",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1610354,
            "range": "± 140983",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 696869,
            "range": "± 42539",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4808,
            "range": "± 22692",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4184,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1947153,
            "range": "± 103337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8901667,
            "range": "± 332094",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10542215,
            "range": "± 392648",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5182647,
            "range": "± 191323",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 874945,
            "range": "± 44596",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1597007,
            "range": "± 96897",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 446494,
            "range": "± 20555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b9a991d38c5912829dec45b31779ea42b19d2d",
          "message": "Merge pull request #1694 from mejrs/pyo3version\n\nautomagically update pyo3 version in toml examples",
          "timestamp": "2021-06-24T20:24:57+01:00",
          "tree_id": "b9db86f4724cd6496e95809bfdc133d7ff933663",
          "url": "https://github.com/PyO3/pyo3/commit/e8b9a991d38c5912829dec45b31779ea42b19d2d"
        },
        "date": 1624563879486,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80632,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226819,
            "range": "± 14949",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2469238,
            "range": "± 34392",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4933162,
            "range": "± 119975",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3421504,
            "range": "± 161252",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8476241,
            "range": "± 592798",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13272257,
            "range": "± 230990",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7335399,
            "range": "± 659624",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1349825,
            "range": "± 57799",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1531030,
            "range": "± 237022",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 648840,
            "range": "± 20267",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4580,
            "range": "± 22530",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3509,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1834329,
            "range": "± 59165",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7812177,
            "range": "± 105429",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10183826,
            "range": "± 92571",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4716342,
            "range": "± 86061",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805696,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1520862,
            "range": "± 60299",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421618,
            "range": "± 957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16bc16568489e3d0769862755f3eaa2ab521066",
          "message": "Merge pull request #1697 from scalexm/lifetime\n\nUse explicit lifetimes in proc-macro expansion",
          "timestamp": "2021-06-25T10:53:22+08:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/PyO3/pyo3/commit/e16bc16568489e3d0769862755f3eaa2ab521066"
        },
        "date": 1624590159868,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 84441,
            "range": "± 3864",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253238,
            "range": "± 18622",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2600295,
            "range": "± 105228",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5056185,
            "range": "± 451983",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3251904,
            "range": "± 246506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10980416,
            "range": "± 1132991",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12056462,
            "range": "± 816583",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7282006,
            "range": "± 604802",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1482845,
            "range": "± 88945",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1516901,
            "range": "± 103901",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 717106,
            "range": "± 49110",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5042,
            "range": "± 21407",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4076,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1974448,
            "range": "± 130575",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9361523,
            "range": "± 590017",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10949355,
            "range": "± 613851",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5292195,
            "range": "± 290770",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1809822,
            "range": "± 329116",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1701273,
            "range": "± 129125",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 449369,
            "range": "± 19612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/PyO3/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624734951449,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80286,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 239186,
            "range": "± 13603",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2401694,
            "range": "± 17265",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4889866,
            "range": "± 432913",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2804349,
            "range": "± 14629",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8428441,
            "range": "± 779471",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13042352,
            "range": "± 125245",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5822016,
            "range": "± 186536",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1307507,
            "range": "± 42759",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1538291,
            "range": "± 51136",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 611445,
            "range": "± 20557",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4487,
            "range": "± 23192",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3456,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1785682,
            "range": "± 77855",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7441070,
            "range": "± 131299",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10183556,
            "range": "± 68305",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4605333,
            "range": "± 120691",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805882,
            "range": "± 3409",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1514538,
            "range": "± 64324",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421171,
            "range": "± 690",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f1a1d6f0edef93c7fa0590d8d3e2c566342912",
          "message": "Merge pull request #1700 from messense/cross-compile\n\nAdd cross compilation test in CI",
          "timestamp": "2021-06-27T09:18:27+01:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/PyO3/pyo3/commit/11f1a1d6f0edef93c7fa0590d8d3e2c566342912"
        },
        "date": 1624782363306,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81118,
            "range": "± 1609",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 229779,
            "range": "± 14443",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2494555,
            "range": "± 56493",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5018765,
            "range": "± 112967",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2828791,
            "range": "± 13646",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9926946,
            "range": "± 686738",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13458127,
            "range": "± 201926",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7505127,
            "range": "± 447571",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1325476,
            "range": "± 34376",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1519150,
            "range": "± 79447",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 625583,
            "range": "± 20990",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4605,
            "range": "± 23630",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1830552,
            "range": "± 72234",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10211655,
            "range": "± 148080",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10301170,
            "range": "± 56760",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4674668,
            "range": "± 133192",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806714,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1509674,
            "range": "± 39319",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421457,
            "range": "± 524",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9249527b63d2e318f30eabe07327e707cee51b5e",
          "message": "Merge pull request #1699 from ohadravid/size_hints\n\nAdded `size_hint` impls for `{PyDict,PyList,PySet,PyTuple}Iterator`s",
          "timestamp": "2021-06-27T17:27:26+01:00",
          "tree_id": "fbbc4397c5c7b3ec495739b89b1cd5a87bdcc0f2",
          "url": "https://github.com/PyO3/pyo3/commit/9249527b63d2e318f30eabe07327e707cee51b5e"
        },
        "date": 1624811714820,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79178,
            "range": "± 7172",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 231718,
            "range": "± 24393",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2462760,
            "range": "± 174034",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4837529,
            "range": "± 366075",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2764336,
            "range": "± 174654",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9167565,
            "range": "± 620319",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11208562,
            "range": "± 645509",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7430082,
            "range": "± 521907",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 96,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1344356,
            "range": "± 134906",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1543637,
            "range": "± 148532",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 653316,
            "range": "± 60241",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4671,
            "range": "± 21999",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3851,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1845306,
            "range": "± 145353",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9146310,
            "range": "± 838072",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9827104,
            "range": "± 590375",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5312050,
            "range": "± 262244",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 810034,
            "range": "± 45261",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1531470,
            "range": "± 142440",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 424449,
            "range": "± 26842",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81934c568416c7811adee7842d210f3d0e266d67",
          "message": "Merge pull request #1652 from messense/pytest-bench\n\nRun pytest pyo3-benchmarks on CI",
          "timestamp": "2021-06-05T07:21:02+01:00",
          "tree_id": "2644963a566155a11e204c7bf836614219654bc6",
          "url": "https://github.com/PyO3/pyo3/commit/81934c568416c7811adee7842d210f3d0e266d67"
        },
        "date": 1622874153748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1258933.7276361934,
            "unit": "iter/sec",
            "range": "stddev: 0.000003225143087800692",
            "extra": "mean: 794.322987817338 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2272155.2603255613,
            "unit": "iter/sec",
            "range": "stddev: 7.045510452491666e-7",
            "extra": "mean: 440.1107694799788 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 991422.1491071462,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945194609547605",
            "extra": "mean: 1.0086520670337846 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1679874.1547820542,
            "unit": "iter/sec",
            "range": "stddev: 0.000003207227111322763",
            "extra": "mean: 595.2826865949888 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8797522.749861442,
            "unit": "iter/sec",
            "range": "stddev: 1.52958798607516e-7",
            "extra": "mean: 113.66836192787869 nsec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7277793.719307418,
            "unit": "iter/sec",
            "range": "stddev: 2.3282077642460128e-7",
            "extra": "mean: 137.40427917692986 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 919449.3788503222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001945081250894498",
            "extra": "mean: 1.087607456160771 usec\nrounds: 38760"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3139420.1634719465,
            "unit": "iter/sec",
            "range": "stddev: 0.000001651106978987027",
            "extra": "mean: 318.5301577775353 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3292ccf5e44fa6980e6531c4a3178ed2a2c9122d",
          "message": "Merge pull request #1653 from PyO3/pytuple_fast\n\nPyTuple: use fast macros on !abi3",
          "timestamp": "2021-06-05T08:10:42+01:00",
          "tree_id": "73ebdab1506c66871160d4aaa401db4fa715a0dd",
          "url": "https://github.com/PyO3/pyo3/commit/3292ccf5e44fa6980e6531c4a3178ed2a2c9122d"
        },
        "date": 1622877427344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1364516.7213912841,
            "unit": "iter/sec",
            "range": "stddev: 2.0381284597566228e-7",
            "extra": "mean: 732.8602019478245 nsec\nrounds: 117634"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2118773.0463285455,
            "unit": "iter/sec",
            "range": "stddev: 4.841018785750465e-8",
            "extra": "mean: 471.971267396598 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1203137.5228905878,
            "unit": "iter/sec",
            "range": "stddev: 2.43648519979363e-7",
            "extra": "mean: 831.1601799247842 nsec\nrounds: 129854"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1596079.946549438,
            "unit": "iter/sec",
            "range": "stddev: 5.6990266357423805e-8",
            "extra": "mean: 626.5350317578924 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 7771254.115997332,
            "unit": "iter/sec",
            "range": "stddev: 1.194921433531564e-8",
            "extra": "mean: 128.67935922234332 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6832597.407648445,
            "unit": "iter/sec",
            "range": "stddev: 1.8082357762521983e-8",
            "extra": "mean: 146.3572255671771 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1568223.5264077927,
            "unit": "iter/sec",
            "range": "stddev: 2.016723325298318e-7",
            "extra": "mean: 637.6641997525837 nsec\nrounds: 129854"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3034829.1385529335,
            "unit": "iter/sec",
            "range": "stddev: 3.1827610413624254e-8",
            "extra": "mean: 329.5078419063584 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49f4440b46e479cbdc78daf26dea844043bcfc9",
          "message": "Merge pull request #1654 from messense/pathlib\n\nAdd support for extracting PathBuf from pathlib.Path",
          "timestamp": "2021-06-05T15:49:30+08:00",
          "tree_id": "e2c481e19f9fa455e0db4289474f19e7032c89b0",
          "url": "https://github.com/PyO3/pyo3/commit/f49f4440b46e479cbdc78daf26dea844043bcfc9"
        },
        "date": 1622879865813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1354744.9771175578,
            "unit": "iter/sec",
            "range": "stddev: 1.0510182216477157e-7",
            "extra": "mean: 738.1463056815785 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2591697.5771573335,
            "unit": "iter/sec",
            "range": "stddev: 1.6805460713614043e-8",
            "extra": "mean: 385.847488076234 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1210709.7916000274,
            "unit": "iter/sec",
            "range": "stddev: 1.1223285230718124e-7",
            "extra": "mean: 825.9617679959774 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1915903.0856977606,
            "unit": "iter/sec",
            "range": "stddev: 2.665817331269742e-7",
            "extra": "mean: 521.947068965002 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9197032.63215519,
            "unit": "iter/sec",
            "range": "stddev: 2.1718638110038786e-9",
            "extra": "mean: 108.7307221792456 nsec\nrounds: 44248"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8517220.29471164,
            "unit": "iter/sec",
            "range": "stddev: 1.709460617240748e-8",
            "extra": "mean: 117.40919753128563 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1550398.720512912,
            "unit": "iter/sec",
            "range": "stddev: 9.74690418213532e-8",
            "extra": "mean: 644.9953723318181 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3706185.796902697,
            "unit": "iter/sec",
            "range": "stddev: 1.2055955339082257e-8",
            "extra": "mean: 269.8191765875907 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3d3be600b8ac12a352d55d0091cf9253405005e",
          "message": "Merge pull request #1655 from davidhewitt/bench-tuple-new\n\nbench_tuple: add benchmark for `PyTuple::new`",
          "timestamp": "2021-06-05T09:27:40+01:00",
          "tree_id": "9540b00d11dfcbb930cc96780dae4d7226856eaa",
          "url": "https://github.com/PyO3/pyo3/commit/b3d3be600b8ac12a352d55d0091cf9253405005e"
        },
        "date": 1622881993145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1626491.5312648271,
            "unit": "iter/sec",
            "range": "stddev: 1.227511617640193e-7",
            "extra": "mean: 614.8202931141969 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2576907.4299076917,
            "unit": "iter/sec",
            "range": "stddev: 1.727406721779368e-8",
            "extra": "mean: 388.0620577959349 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1432121.2761865587,
            "unit": "iter/sec",
            "range": "stddev: 8.795442683910723e-8",
            "extra": "mean: 698.2648862411934 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1914004.5800727576,
            "unit": "iter/sec",
            "range": "stddev: 3.91792330464035e-8",
            "extra": "mean: 522.4647894844827 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9564236.097371455,
            "unit": "iter/sec",
            "range": "stddev: 2.3022964459866606e-9",
            "extra": "mean: 104.55618094525208 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8751317.927104896,
            "unit": "iter/sec",
            "range": "stddev: 4.3531299557671175e-9",
            "extra": "mean: 114.2685031362711 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1915129.8935490192,
            "unit": "iter/sec",
            "range": "stddev: 9.685471537929625e-8",
            "extra": "mean: 522.1577937707671 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3677056.8393204464,
            "unit": "iter/sec",
            "range": "stddev: 2.4165910371665237e-8",
            "extra": "mean: 271.9566337150055 nsec\nrounds: 188644"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97d6f15b32c3090498911b8bff2edcef496bf228",
          "message": "Merge pull request #1626 from alonblade/cross-sysconfig\n\nbuild.rs: if found more than one candidate, filter on arch",
          "timestamp": "2021-06-05T09:29:00+01:00",
          "tree_id": "50ed56c788d832ec3b1e3e752b53c2a3fb79a8d5",
          "url": "https://github.com/PyO3/pyo3/commit/97d6f15b32c3090498911b8bff2edcef496bf228"
        },
        "date": 1622882083030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1125435.091888476,
            "unit": "iter/sec",
            "range": "stddev: 0.000002816901077339002",
            "extra": "mean: 888.5452454854626 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2123057.2564931884,
            "unit": "iter/sec",
            "range": "stddev: 5.818372980092973e-7",
            "extra": "mean: 471.0188559170627 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1011614.4686867943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030514755495905675",
            "extra": "mean: 988.518878440053 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1555301.9673807872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011902836807197488",
            "extra": "mean: 642.9619591389697 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8528357.64566276,
            "unit": "iter/sec",
            "range": "stddev: 7.274869508220332e-8",
            "extra": "mean: 117.25587053780538 nsec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6861574.740467445,
            "unit": "iter/sec",
            "range": "stddev: 6.1647707640711e-7",
            "extra": "mean: 145.73913974898292 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1380709.2303080724,
            "unit": "iter/sec",
            "range": "stddev: 0.000002673854266665979",
            "extra": "mean: 724.2654557881632 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2989411.5079884036,
            "unit": "iter/sec",
            "range": "stddev: 8.029662173706035e-7",
            "extra": "mean: 334.51399960419207 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5810eaffa95b5e2ae4986c2be461291737b0421",
          "message": "Merge pull request #1619 from birkenfeld/fastcall\n\nImplement METH_FASTCALL for pyfunctions.",
          "timestamp": "2021-06-05T12:32:16+01:00",
          "tree_id": "d75fc0f08b3b7bf3f8abb4754ebdd92551d55ba6",
          "url": "https://github.com/PyO3/pyo3/commit/a5810eaffa95b5e2ae4986c2be461291737b0421"
        },
        "date": 1622893037934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1212436.8375718137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016062093147515506",
            "extra": "mean: 824.785233350986 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2079077.747976448,
            "unit": "iter/sec",
            "range": "stddev: 6.762069155258542e-7",
            "extra": "mean: 480.98249378752155 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1092370.7166956284,
            "unit": "iter/sec",
            "range": "stddev: 0.000001592214691839815",
            "extra": "mean: 915.4401383304693 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1598512.163939861,
            "unit": "iter/sec",
            "range": "stddev: 4.833192374155281e-7",
            "extra": "mean: 625.5817269075842 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8573309.320022672,
            "unit": "iter/sec",
            "range": "stddev: 6.115810003673317e-8",
            "extra": "mean: 116.64107320428944 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7265608.135492272,
            "unit": "iter/sec",
            "range": "stddev: 1.1942511727390256e-7",
            "extra": "mean: 137.6347280711139 nsec\nrounds: 81308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1611404.2063812052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012891080667141336",
            "extra": "mean: 620.5767591023855 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2965705.7622632207,
            "unit": "iter/sec",
            "range": "stddev: 5.647614215882646e-7",
            "extra": "mean: 337.18786695744177 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fbf61717e82100036ac365bd6937f4ed9201c9",
          "message": "Merge pull request #1658 from davidhewitt/pyo3-text-signature\n\ntext_signature: move to `#[pyo3(text_signature = \"...\")]`",
          "timestamp": "2021-06-05T17:31:32+01:00",
          "tree_id": "07fc4331eb0e8899106ebb1706f536fd776a8566",
          "url": "https://github.com/PyO3/pyo3/commit/51fbf61717e82100036ac365bd6937f4ed9201c9"
        },
        "date": 1622911822941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1168040.215851012,
            "unit": "iter/sec",
            "range": "stddev: 0.000004949262087554341",
            "extra": "mean: 856.1349056559831 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2001012.9608377994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011870833162757176",
            "extra": "mean: 499.74688798627267 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1106759.5454975232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020620511888574524",
            "extra": "mean: 903.5386268572626 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1496663.047958536,
            "unit": "iter/sec",
            "range": "stddev: 0.000001990800216603968",
            "extra": "mean: 668.1530631523183 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 7907631.681810399,
            "unit": "iter/sec",
            "range": "stddev: 2.8798950695422257e-7",
            "extra": "mean: 126.46011350022414 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6469620.711853644,
            "unit": "iter/sec",
            "range": "stddev: 4.83911524002865e-7",
            "extra": "mean: 154.56856661899846 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1602317.3748044944,
            "unit": "iter/sec",
            "range": "stddev: 0.000004707259278942468",
            "extra": "mean: 624.0960846611391 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2859612.677728114,
            "unit": "iter/sec",
            "range": "stddev: 8.660558609147766e-7",
            "extra": "mean: 349.6977082900281 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0aa2cdee6f76ec24b9d972f615480135d9a3bb",
          "message": "Merge pull request #1659 from davidhewitt/pyo3-pass-module\n\npyfunction: document `#[pyo3(pass_module)]`",
          "timestamp": "2021-06-05T18:44:48+01:00",
          "tree_id": "45449bbfa4e07e497bf6fa25c328a26adc78ff72",
          "url": "https://github.com/PyO3/pyo3/commit/bd0aa2cdee6f76ec24b9d972f615480135d9a3bb"
        },
        "date": 1622915176465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1252443.5711134293,
            "unit": "iter/sec",
            "range": "stddev: 2.1777586410193598e-7",
            "extra": "mean: 798.4391656951016 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2116791.2202616017,
            "unit": "iter/sec",
            "range": "stddev: 6.26230944234808e-8",
            "extra": "mean: 472.4131460997291 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1150450.777944198,
            "unit": "iter/sec",
            "range": "stddev: 2.4372942592614567e-7",
            "extra": "mean: 869.2244980588854 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1600669.791147863,
            "unit": "iter/sec",
            "range": "stddev: 7.78564167453671e-8",
            "extra": "mean: 624.7384723136634 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8214074.767115638,
            "unit": "iter/sec",
            "range": "stddev: 1.4163617449162422e-8",
            "extra": "mean: 121.74225683993289 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6955183.259692826,
            "unit": "iter/sec",
            "range": "stddev: 1.4243849003814717e-8",
            "extra": "mean: 143.77766374575808 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1686475.9332050548,
            "unit": "iter/sec",
            "range": "stddev: 2.0709112615664164e-7",
            "extra": "mean: 592.9524283809701 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3059880.6958585666,
            "unit": "iter/sec",
            "range": "stddev: 3.916679759177782e-8",
            "extra": "mean: 326.81012738616323 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c6d46c86be72ee756fe8a32b62ec87ffad745a5",
          "message": "Merge pull request #1663 from davidhewitt/ci-3.10-dev\n\nci: use latest Python 3.10 beta",
          "timestamp": "2021-06-05T19:42:05+01:00",
          "tree_id": "8424abcfdeca1ff089aa9083dd8333274857dc52",
          "url": "https://github.com/PyO3/pyo3/commit/4c6d46c86be72ee756fe8a32b62ec87ffad745a5"
        },
        "date": 1622918700487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1453333.7393801413,
            "unit": "iter/sec",
            "range": "stddev: 1.1254590151100189e-7",
            "extra": "mean: 688.0732022546372 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2584246.82469586,
            "unit": "iter/sec",
            "range": "stddev: 1.7542478706199574e-8",
            "extra": "mean: 386.95994145876364 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1328684.9490360657,
            "unit": "iter/sec",
            "range": "stddev: 9.489453361879529e-8",
            "extra": "mean: 752.623863712372 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1904934.622849662,
            "unit": "iter/sec",
            "range": "stddev: 2.5586382920444986e-8",
            "extra": "mean: 524.9523988920405 nsec\nrounds: 178540"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10051585.17072535,
            "unit": "iter/sec",
            "range": "stddev: 2.66893181383287e-9",
            "extra": "mean: 99.48679566607743 nsec\nrounds: 46512"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8760041.214476377,
            "unit": "iter/sec",
            "range": "stddev: 3.4545348380325887e-9",
            "extra": "mean: 114.15471406088515 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1945641.0889775562,
            "unit": "iter/sec",
            "range": "stddev: 9.261700685402156e-8",
            "extra": "mean: 513.969408677273 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3696800.8839855003,
            "unit": "iter/sec",
            "range": "stddev: 1.2277381782216046e-8",
            "extra": "mean: 270.50415518292897 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2c173dbee2cd726f7d12125f9fcb116588c6e7",
          "message": "Merge pull request #1660 from PyO3/method_defs",
          "timestamp": "2021-06-06T07:47:21+02:00",
          "tree_id": "7e3f094a7dc43caec9191b6ba98aa0e0a35dd57f",
          "url": "https://github.com/PyO3/pyo3/commit/4d2c173dbee2cd726f7d12125f9fcb116588c6e7"
        },
        "date": 1622958511161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1439161.299956149,
            "unit": "iter/sec",
            "range": "stddev: 1.086743849481157e-7",
            "extra": "mean: 694.8491458396428 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2539695.282359841,
            "unit": "iter/sec",
            "range": "stddev: 2.1651688571852808e-8",
            "extra": "mean: 393.7480243968366 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1314551.1046663749,
            "unit": "iter/sec",
            "range": "stddev: 1.319524149709927e-7",
            "extra": "mean: 760.7159557739628 nsec\nrounds: 123442"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1925724.6808673644,
            "unit": "iter/sec",
            "range": "stddev: 2.6508142804529086e-8",
            "extra": "mean: 519.2850306876988 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10227310.017386904,
            "unit": "iter/sec",
            "range": "stddev: 7.677608815424029e-9",
            "extra": "mean: 97.77742126718195 nsec\nrounds: 49503"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8764102.11045838,
            "unit": "iter/sec",
            "range": "stddev: 4.269365643362543e-9",
            "extra": "mean: 114.10181983235974 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2000677.1000259463,
            "unit": "iter/sec",
            "range": "stddev: 1.0502084236018868e-7",
            "extra": "mean: 499.830782282174 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3672758.8897962617,
            "unit": "iter/sec",
            "range": "stddev: 1.391164948880755e-8",
            "extra": "mean: 272.27488381496073 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c57afeb33228efd68a7de4d18caf562f54fe9622",
          "message": "Merge pull request #1661 from PyO3/optimize_forwarding\n\nOptimize f(*args, **kwds) function argument \"parsing\"",
          "timestamp": "2021-06-06T08:27:33+02:00",
          "tree_id": "9fadf1330c2eddccf638c7688d08e9a3cb725b9f",
          "url": "https://github.com/PyO3/pyo3/commit/c57afeb33228efd68a7de4d18caf562f54fe9622"
        },
        "date": 1622961918771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2775038.506965529,
            "unit": "iter/sec",
            "range": "stddev: 7.577216631718821e-8",
            "extra": "mean: 360.35535993101865 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2570088.3378688567,
            "unit": "iter/sec",
            "range": "stddev: 1.2066472414836177e-7",
            "extra": "mean: 389.0916842292296 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1345708.360160749,
            "unit": "iter/sec",
            "range": "stddev: 1.1231287176417973e-7",
            "extra": "mean: 743.103059774814 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1923904.0650137607,
            "unit": "iter/sec",
            "range": "stddev: 2.078642896409954e-8",
            "extra": "mean: 519.7764369780134 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10099133.980602393,
            "unit": "iter/sec",
            "range": "stddev: 4.1383228514728225e-8",
            "extra": "mean: 99.01839127205099 nsec\nrounds: 46083"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8517553.906042429,
            "unit": "iter/sec",
            "range": "stddev: 5.675623484206631e-9",
            "extra": "mean: 117.4045989060575 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1987445.684089552,
            "unit": "iter/sec",
            "range": "stddev: 7.045305897290591e-8",
            "extra": "mean: 503.1584047833235 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3652663.7866590274,
            "unit": "iter/sec",
            "range": "stddev: 1.3715517428974107e-8",
            "extra": "mean: 273.7728020995538 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b681143cc88e553c68fa51ecb36ed4a0f309a8e",
          "message": "Merge pull request #1664 from PyO3/pylist_opt\n\nPyList: remove get_parked_item, use macros for speed on !abi3",
          "timestamp": "2021-06-06T08:31:18+01:00",
          "tree_id": "3870ced28ecf7272d5825ef95c612b549b432577",
          "url": "https://github.com/PyO3/pyo3/commit/6b681143cc88e553c68fa51ecb36ed4a0f309a8e"
        },
        "date": 1622964738752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2840281.1155768917,
            "unit": "iter/sec",
            "range": "stddev: 7.803773919741461e-8",
            "extra": "mean: 352.07782585875805 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2593215.553799721,
            "unit": "iter/sec",
            "range": "stddev: 1.8008053466919655e-8",
            "extra": "mean: 385.62162660739216 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1384225.83245945,
            "unit": "iter/sec",
            "range": "stddev: 1.1088233038105772e-7",
            "extra": "mean: 722.4254717333447 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1933242.0488724322,
            "unit": "iter/sec",
            "range": "stddev: 2.7431166071184966e-8",
            "extra": "mean: 517.2658025847825 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10127647.933584487,
            "unit": "iter/sec",
            "range": "stddev: 5.063365364307096e-9",
            "extra": "mean: 98.73960929110747 nsec\nrounds: 46083"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8777399.878134275,
            "unit": "iter/sec",
            "range": "stddev: 4.141023958516314e-9",
            "extra": "mean: 113.92895548612638 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2012364.2765127518,
            "unit": "iter/sec",
            "range": "stddev: 8.732277151339213e-8",
            "extra": "mean: 496.92792287731874 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3600983.5762542915,
            "unit": "iter/sec",
            "range": "stddev: 1.581750427307706e-8",
            "extra": "mean: 277.7019052778814 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9a3da3e40d83fe09205656d3dd28080caf9ecad",
          "message": "Merge pull request #1668 from PyO3/pylist_fix",
          "timestamp": "2021-06-06T10:52:23+02:00",
          "tree_id": "0ac9a6e84eac6b15792b8a3f7088d5dc29981f33",
          "url": "https://github.com/PyO3/pyo3/commit/f9a3da3e40d83fe09205656d3dd28080caf9ecad"
        },
        "date": 1622969616391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2425902.3630603254,
            "unit": "iter/sec",
            "range": "stddev: 3.608481642238128e-7",
            "extra": "mean: 412.21774430298154 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2254969.854642379,
            "unit": "iter/sec",
            "range": "stddev: 1.1156665216736232e-7",
            "extra": "mean: 443.4649083852736 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1231066.45540948,
            "unit": "iter/sec",
            "range": "stddev: 4.7212265357706836e-7",
            "extra": "mean: 812.3038326695189 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1719355.2066918255,
            "unit": "iter/sec",
            "range": "stddev: 1.3269142955998484e-7",
            "extra": "mean: 581.6133839634399 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8863198.493392423,
            "unit": "iter/sec",
            "range": "stddev: 2.7582976619431173e-8",
            "extra": "mean: 112.82608651324155 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7716040.921927541,
            "unit": "iter/sec",
            "range": "stddev: 2.0202052881265186e-8",
            "extra": "mean: 129.60014210886638 nsec\nrounds: 68961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1793960.429140705,
            "unit": "iter/sec",
            "range": "stddev: 3.742065373473193e-7",
            "extra": "mean: 557.4258962216873 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3239573.267323015,
            "unit": "iter/sec",
            "range": "stddev: 7.184106264447794e-8",
            "extra": "mean: 308.682631162222 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd258803e7a4acced1bf7fa4be6e862cc0a7b36",
          "message": "Merge pull request #1666 from davidhewitt/bench-new-containers\n\nbenches: add benchmarks for container creation",
          "timestamp": "2021-06-06T17:58:58+08:00",
          "tree_id": "ef0c8c3c15676bf86f5d34b704903c371ec08c82",
          "url": "https://github.com/PyO3/pyo3/commit/abd258803e7a4acced1bf7fa4be6e862cc0a7b36"
        },
        "date": 1622973615706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 4732306.0337725915,
            "unit": "iter/sec",
            "range": "stddev: 3.967981658955261e-7",
            "extra": "mean: 211.31346807738538 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2265462.7477574246,
            "unit": "iter/sec",
            "range": "stddev: 6.744538941730903e-7",
            "extra": "mean: 441.4109218924219 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1156137.7744451594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015785834167146906",
            "extra": "mean: 864.9488167445344 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1729264.7906201356,
            "unit": "iter/sec",
            "range": "stddev: 5.724952037391797e-7",
            "extra": "mean: 578.2804376886742 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9568956.412267346,
            "unit": "iter/sec",
            "range": "stddev: 1.1305168343980627e-7",
            "extra": "mean: 104.50460394175913 nsec\nrounds: 47392"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8097608.804239259,
            "unit": "iter/sec",
            "range": "stddev: 9.119592483514207e-8",
            "extra": "mean: 123.49324648486532 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2100823.939209364,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110984438153934",
            "extra": "mean: 476.00371517869587 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3603371.9820202114,
            "unit": "iter/sec",
            "range": "stddev: 2.4512083673925285e-7",
            "extra": "mean: 277.5178374559729 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a29097175903dedf65da28d7a44f2d033c3121be",
          "message": "Merge pull request #1650 from davidhewitt/pymodule-name\n\npymodule: accept `#[pyo3(name = \"...\")]` option",
          "timestamp": "2021-06-06T11:11:10+01:00",
          "tree_id": "2001810815903dada3323da68c4b03ed68180176",
          "url": "https://github.com/PyO3/pyo3/commit/a29097175903dedf65da28d7a44f2d033c3121be"
        },
        "date": 1622974407354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2429803.335995315,
            "unit": "iter/sec",
            "range": "stddev: 3.196033513281325e-7",
            "extra": "mean: 411.555941662403 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2168195.965158545,
            "unit": "iter/sec",
            "range": "stddev: 9.11476258471727e-8",
            "extra": "mean: 461.2129235864461 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1116641.2130543452,
            "unit": "iter/sec",
            "range": "stddev: 3.5252104552837345e-7",
            "extra": "mean: 895.5428013127897 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1651556.768374847,
            "unit": "iter/sec",
            "range": "stddev: 1.1145441066840032e-7",
            "extra": "mean: 605.48932930868 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8864350.29104332,
            "unit": "iter/sec",
            "range": "stddev: 1.3198889115942868e-8",
            "extra": "mean: 112.81142635013744 nsec\nrounds: 44053"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7490345.742038414,
            "unit": "iter/sec",
            "range": "stddev: 1.8138665381383414e-8",
            "extra": "mean: 133.5051858004127 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1489095.3075313154,
            "unit": "iter/sec",
            "range": "stddev: 2.6002539518233004e-7",
            "extra": "mean: 671.5486879465371 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3120597.1329622557,
            "unit": "iter/sec",
            "range": "stddev: 6.393735026014497e-8",
            "extra": "mean: 320.4514896963776 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355",
          "message": "Merge pull request #1669 from PyO3/pymethod_cleanup\n\nReorganize method wrapper generation",
          "timestamp": "2021-06-07T23:19:23+01:00",
          "tree_id": "84c094321f446d555f75a7f7bfc1a8fb77b8556c",
          "url": "https://github.com/PyO3/pyo3/commit/c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355"
        },
        "date": 1623104453470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2614639.7985695414,
            "unit": "iter/sec",
            "range": "stddev: 3.138454529633771e-7",
            "extra": "mean: 382.46185977399097 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2343945.127936035,
            "unit": "iter/sec",
            "range": "stddev: 9.367116061518501e-8",
            "extra": "mean: 426.6311476676208 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1251044.9501443913,
            "unit": "iter/sec",
            "range": "stddev: 4.718701387104794e-7",
            "extra": "mean: 799.3317905040769 nsec\nrounds: 119048"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1740734.2313929177,
            "unit": "iter/sec",
            "range": "stddev: 1.352877836412293e-7",
            "extra": "mean: 574.470233287338 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8602328.83586035,
            "unit": "iter/sec",
            "range": "stddev: 2.489834139596264e-8",
            "extra": "mean: 116.24759051654063 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7821403.528687116,
            "unit": "iter/sec",
            "range": "stddev: 5.60337046725917e-8",
            "extra": "mean: 127.85429064392459 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1856513.3974286066,
            "unit": "iter/sec",
            "range": "stddev: 7.495150904597545e-7",
            "extra": "mean: 538.6441064120872 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3299192.5838676216,
            "unit": "iter/sec",
            "range": "stddev: 2.9909921660684965e-7",
            "extra": "mean: 303.10446407081423 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc",
          "message": "Merge pull request #1665 from PyO3/kwds_varargs\n\nArgument parsing: use VARARGS for *any* function taking **kwds",
          "timestamp": "2021-06-07T23:23:05+01:00",
          "tree_id": "26321f31fbb34b78ae355d3a932459d2ce02031b",
          "url": "https://github.com/PyO3/pyo3/commit/b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc"
        },
        "date": 1623105309905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8421112.423042558,
            "unit": "iter/sec",
            "range": "stddev: 2.3429176818135506e-8",
            "extra": "mean: 118.74915685291356 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10152321.11378347,
            "unit": "iter/sec",
            "range": "stddev: 2.2007700914913342e-8",
            "extra": "mean: 98.49964247509021 nsec\nrounds: 101000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3515917.02352538,
            "unit": "iter/sec",
            "range": "stddev: 9.04564128484657e-8",
            "extra": "mean: 284.4208191800334 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2236816.281782544,
            "unit": "iter/sec",
            "range": "stddev: 1.2794571570321644e-7",
            "extra": "mean: 447.06398471091245 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3009810.9683423685,
            "unit": "iter/sec",
            "range": "stddev: 8.090404879360727e-8",
            "extra": "mean: 332.24677912287757 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2058594.3622558194,
            "unit": "iter/sec",
            "range": "stddev: 1.3350661562701716e-7",
            "extra": "mean: 485.76835647418136 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1863680.8343723617,
            "unit": "iter/sec",
            "range": "stddev: 9.882155470818518e-8",
            "extra": "mean: 536.5725619734278 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1602350.8935566337,
            "unit": "iter/sec",
            "range": "stddev: 1.538091997049149e-7",
            "extra": "mean: 624.0830295169206 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1869414.6535777568,
            "unit": "iter/sec",
            "range": "stddev: 1.067944823120306e-7",
            "extra": "mean: 534.926800796308 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1585973.893930681,
            "unit": "iter/sec",
            "range": "stddev: 1.4643708994502318e-7",
            "extra": "mean: 630.5274026436093 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2431916.692807664,
            "unit": "iter/sec",
            "range": "stddev: 1.115971934692109e-7",
            "extra": "mean: 411.1982959604741 nsec\nrounds: 61725"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4800947.842005563,
            "unit": "iter/sec",
            "range": "stddev: 5.908436665558958e-8",
            "extra": "mean: 208.29220247939224 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05e4bdf69cde2bc49865fbafe756a8507dd45f1d",
          "message": "Merge pull request #1670 from mejrs/num-dependency\n\nAdd docs + slight refactor for num-complex and num-bigint dependencies",
          "timestamp": "2021-06-11T19:10:58+01:00",
          "tree_id": "722cf936bc22260d1a07ee643b7a71620cf6ed48",
          "url": "https://github.com/PyO3/pyo3/commit/05e4bdf69cde2bc49865fbafe756a8507dd45f1d"
        },
        "date": 1623435712960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7494958.940577287,
            "unit": "iter/sec",
            "range": "stddev: 3.6623480337997285e-8",
            "extra": "mean: 133.42301244451957 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8662818.955673074,
            "unit": "iter/sec",
            "range": "stddev: 1.5264800890861394e-8",
            "extra": "mean: 115.43586505923143 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3158544.3496762733,
            "unit": "iter/sec",
            "range": "stddev: 6.877329805514339e-8",
            "extra": "mean: 316.60153833240656 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1946607.5201505108,
            "unit": "iter/sec",
            "range": "stddev: 1.094777856294704e-7",
            "extra": "mean: 513.7142385654198 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2952846.3157232823,
            "unit": "iter/sec",
            "range": "stddev: 9.56034159645646e-8",
            "extra": "mean: 338.6562973748487 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1921998.5353652893,
            "unit": "iter/sec",
            "range": "stddev: 1.2480819268201706e-7",
            "extra": "mean: 520.2917596448626 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1699082.5144545655,
            "unit": "iter/sec",
            "range": "stddev: 8.668626225548239e-8",
            "extra": "mean: 588.552934594435 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1447296.3196360013,
            "unit": "iter/sec",
            "range": "stddev: 8.461304260975546e-8",
            "extra": "mean: 690.9435106223506 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1646230.5974409878,
            "unit": "iter/sec",
            "range": "stddev: 7.520456190082764e-8",
            "extra": "mean: 607.4483134708008 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1485472.6230673683,
            "unit": "iter/sec",
            "range": "stddev: 1.3805654479587752e-7",
            "extra": "mean: 673.1864219314455 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2126067.4189626304,
            "unit": "iter/sec",
            "range": "stddev: 8.672659657572244e-8",
            "extra": "mean: 470.3519705350129 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4380121.927962478,
            "unit": "iter/sec",
            "range": "stddev: 4.3815468550707036e-8",
            "extra": "mean: 228.3041468815091 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "159a93d7b73cf646efc54b2fec0dd7788d263541",
          "message": "Merge pull request #1673 from messense/detect-python-implementation\n\nDetect Python implementation from `SOABI` on Unix",
          "timestamp": "2021-06-12T05:34:33+08:00",
          "tree_id": "6e802774d11be47b54af9fe780a4ffc82a9f5e57",
          "url": "https://github.com/PyO3/pyo3/commit/159a93d7b73cf646efc54b2fec0dd7788d263541"
        },
        "date": 1623447345196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8769235.06233573,
            "unit": "iter/sec",
            "range": "stddev: 3.071835393547919e-9",
            "extra": "mean: 114.03503189176614 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10144488.047792792,
            "unit": "iter/sec",
            "range": "stddev: 2.8501471072508196e-9",
            "extra": "mean: 98.57569896958908 nsec\nrounds: 98030"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3653217.370958091,
            "unit": "iter/sec",
            "range": "stddev: 1.1549512970998572e-8",
            "extra": "mean: 273.73131638784776 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2223630.01473586,
            "unit": "iter/sec",
            "range": "stddev: 1.9545796832688053e-8",
            "extra": "mean: 449.7151025001287 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3285277.172676767,
            "unit": "iter/sec",
            "range": "stddev: 1.4610050705526345e-8",
            "extra": "mean: 304.3883202053309 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2132666.248590825,
            "unit": "iter/sec",
            "range": "stddev: 2.9269904365997546e-8",
            "extra": "mean: 468.8966220859153 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1949147.98246268,
            "unit": "iter/sec",
            "range": "stddev: 2.140265865166851e-8",
            "extra": "mean: 513.0446784942415 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1719143.991334053,
            "unit": "iter/sec",
            "range": "stddev: 2.4081582904441663e-8",
            "extra": "mean: 581.6848414334204 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1969638.8808142394,
            "unit": "iter/sec",
            "range": "stddev: 1.414363057403774e-8",
            "extra": "mean: 507.7072806296171 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1703678.208782337,
            "unit": "iter/sec",
            "range": "stddev: 2.890752266716421e-8",
            "extra": "mean: 586.9653053292501 nsec\nrounds: 151493"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2610734.856319595,
            "unit": "iter/sec",
            "range": "stddev: 1.2599641995253102e-8",
            "extra": "mean: 383.03391766498555 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5331024.843888633,
            "unit": "iter/sec",
            "range": "stddev: 4.09071878958719e-9",
            "extra": "mean: 187.58119297576997 nsec\nrounds: 50001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a298db2c0617257c245bb9be0dfd1a743a26df58",
          "message": "Merge pull request #1674 from mejrs/make-clippy-happy\n\nallow useless conversion (on some platforms)",
          "timestamp": "2021-06-12T05:35:36+08:00",
          "tree_id": "1df10f27d7e8e5ef048af44f43ef8ea3545f33bd",
          "url": "https://github.com/PyO3/pyo3/commit/a298db2c0617257c245bb9be0dfd1a743a26df58"
        },
        "date": 1623448136048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8443575.525429038,
            "unit": "iter/sec",
            "range": "stddev: 2.312201431908671e-8",
            "extra": "mean: 118.43323921103374 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9288018.872100748,
            "unit": "iter/sec",
            "range": "stddev: 3.993402175937698e-8",
            "extra": "mean: 107.6655865766565 nsec\nrounds: 90082"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3571643.38422005,
            "unit": "iter/sec",
            "range": "stddev: 7.579829864237082e-8",
            "extra": "mean: 279.9831596902248 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2259711.32541437,
            "unit": "iter/sec",
            "range": "stddev: 1.152018251193062e-7",
            "extra": "mean: 442.5344019624075 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3168331.173448379,
            "unit": "iter/sec",
            "range": "stddev: 7.900142198711523e-8",
            "extra": "mean: 315.62357129184454 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1999163.9376028453,
            "unit": "iter/sec",
            "range": "stddev: 4.755470693995073e-7",
            "extra": "mean: 500.209103010905 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1905552.6041689236,
            "unit": "iter/sec",
            "range": "stddev: 1.059892177441136e-7",
            "extra": "mean: 524.7821539077013 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1669367.3677589188,
            "unit": "iter/sec",
            "range": "stddev: 1.4990041663539918e-7",
            "extra": "mean: 599.0293205156954 nsec\nrounds: 135117"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1875879.2973335055,
            "unit": "iter/sec",
            "range": "stddev: 1.0558501369844792e-7",
            "extra": "mean: 533.083339328763 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1693880.171502712,
            "unit": "iter/sec",
            "range": "stddev: 1.0950832367514635e-7",
            "extra": "mean: 590.3605324766202 nsec\nrounds: 75177"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2407747.6411262574,
            "unit": "iter/sec",
            "range": "stddev: 1.2816360060529627e-7",
            "extra": "mean: 415.325918264506 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4548795.001002169,
            "unit": "iter/sec",
            "range": "stddev: 6.965126200967545e-8",
            "extra": "mean: 219.83844068123076 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9693604da76593c88ee6d2ad6334b1f13cfdcd2e",
          "message": "Merge pull request #1676 from aviramha/patch-1\n\nAdd ormsgpack as an example in the README",
          "timestamp": "2021-06-13T15:17:15+08:00",
          "tree_id": "f84262a99aafb9436276ab9b57d94d8258bda222",
          "url": "https://github.com/PyO3/pyo3/commit/9693604da76593c88ee6d2ad6334b1f13cfdcd2e"
        },
        "date": 1623568742273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7796953.9885142045,
            "unit": "iter/sec",
            "range": "stddev: 2.7662424365666244e-8",
            "extra": "mean: 128.2552136992144 nsec\nrounds: 70917"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8957453.368043061,
            "unit": "iter/sec",
            "range": "stddev: 1.636557637521654e-8",
            "extra": "mean: 111.638873116279 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3293237.2109107054,
            "unit": "iter/sec",
            "range": "stddev: 6.823701982438574e-8",
            "extra": "mean: 303.6525873954093 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2045901.8513199466,
            "unit": "iter/sec",
            "range": "stddev: 1.230935764493062e-7",
            "extra": "mean: 488.7820006394361 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2892008.1493724664,
            "unit": "iter/sec",
            "range": "stddev: 7.732147510231045e-8",
            "extra": "mean: 345.78049173789805 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1952873.1037954972,
            "unit": "iter/sec",
            "range": "stddev: 1.2393540058331617e-7",
            "extra": "mean: 512.0660415963357 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1770228.4986780202,
            "unit": "iter/sec",
            "range": "stddev: 8.757478865533376e-8",
            "extra": "mean: 564.8988256300406 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1364910.0911939715,
            "unit": "iter/sec",
            "range": "stddev: 2.785903176397383e-7",
            "extra": "mean: 732.6489901801796 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1803126.0767440416,
            "unit": "iter/sec",
            "range": "stddev: 1.1305731233860233e-7",
            "extra": "mean: 554.5923897933295 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1556769.290113049,
            "unit": "iter/sec",
            "range": "stddev: 1.0367093606804075e-7",
            "extra": "mean: 642.3559395415389 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2304218.9405100886,
            "unit": "iter/sec",
            "range": "stddev: 9.966353429329697e-8",
            "extra": "mean: 433.9865376590491 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4519944.600283368,
            "unit": "iter/sec",
            "range": "stddev: 4.72918057386218e-8",
            "extra": "mean: 221.24164971785325 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a0391fb1bb9c8013096a7403bf49dfa3c59e5f",
          "message": "Merge pull request #1685 from mejrs/fix_ui_tests\n\nupdate error message for rust 1.53",
          "timestamp": "2021-06-20T00:28:39+08:00",
          "tree_id": "abdf654bea2bf74f2fe8a303fab111284daaa219",
          "url": "https://github.com/PyO3/pyo3/commit/64a0391fb1bb9c8013096a7403bf49dfa3c59e5f"
        },
        "date": 1624120224430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7648538.25678324,
            "unit": "iter/sec",
            "range": "stddev: 1.9378919283732838e-8",
            "extra": "mean: 130.74393647870562 nsec\nrounds: 67568"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8584867.440501085,
            "unit": "iter/sec",
            "range": "stddev: 1.6842733788555558e-8",
            "extra": "mean: 116.48403506880744 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3241945.8362607537,
            "unit": "iter/sec",
            "range": "stddev: 7.447324539803702e-8",
            "extra": "mean: 308.45672645533006 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2006333.6882600163,
            "unit": "iter/sec",
            "range": "stddev: 1.2582058059551142e-7",
            "extra": "mean: 498.4215765561028 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2800094.9146673274,
            "unit": "iter/sec",
            "range": "stddev: 6.407625090125812e-8",
            "extra": "mean: 357.1307510905207 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1828614.6058222668,
            "unit": "iter/sec",
            "range": "stddev: 1.0475919641235969e-7",
            "extra": "mean: 546.8620871863283 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1720245.818381158,
            "unit": "iter/sec",
            "range": "stddev: 8.579094553526484e-8",
            "extra": "mean: 581.3122690458594 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1509499.614504319,
            "unit": "iter/sec",
            "range": "stddev: 8.453689515532295e-8",
            "extra": "mean: 662.4711860747665 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1677206.4912359752,
            "unit": "iter/sec",
            "range": "stddev: 1.0333645534631198e-7",
            "extra": "mean: 596.2295073534495 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1494412.5086019512,
            "unit": "iter/sec",
            "range": "stddev: 1.1798418279949132e-7",
            "extra": "mean: 669.1592811518732 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2175573.9261440514,
            "unit": "iter/sec",
            "range": "stddev: 9.631847320468106e-8",
            "extra": "mean: 459.64882552706723 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4258806.688066373,
            "unit": "iter/sec",
            "range": "stddev: 4.032087779703014e-8",
            "extra": "mean: 234.80755837152424 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cba18f176db5ecb355908c7532eaca76c3cc41a",
          "message": "Merge pull request #1657 from davidhewitt/pycell-init\n\npyclass: refactor `tp_new` / `tp_dealloc` / remove `PyCellInner`",
          "timestamp": "2021-06-23T08:22:23+01:00",
          "tree_id": "2b6bfb3e53b36240c509e849129f5a2e79315cca",
          "url": "https://github.com/PyO3/pyo3/commit/2cba18f176db5ecb355908c7532eaca76c3cc41a"
        },
        "date": 1624433052460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8585975.10837199,
            "unit": "iter/sec",
            "range": "stddev: 2.044272935504336e-8",
            "extra": "mean: 116.46900758248609 nsec\nrounds: 44840"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9692725.483852701,
            "unit": "iter/sec",
            "range": "stddev: 2.1330561439002542e-8",
            "extra": "mean: 103.17015597579956 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3288952.8215458067,
            "unit": "iter/sec",
            "range": "stddev: 7.258367630362294e-8",
            "extra": "mean: 304.04814366682825 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2025434.7716527565,
            "unit": "iter/sec",
            "range": "stddev: 1.2368951908814976e-7",
            "extra": "mean: 493.72115754851495 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2901611.3990384587,
            "unit": "iter/sec",
            "range": "stddev: 7.898597326436739e-8",
            "extra": "mean: 344.6360874965353 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1873250.2611394944,
            "unit": "iter/sec",
            "range": "stddev: 1.3483730190690998e-7",
            "extra": "mean: 533.8315017194692 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1810655.3379726366,
            "unit": "iter/sec",
            "range": "stddev: 1.515965138474261e-7",
            "extra": "mean: 552.2862242351813 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1519619.0385288864,
            "unit": "iter/sec",
            "range": "stddev: 1.3079258362149883e-7",
            "extra": "mean: 658.0596680125658 nsec\nrounds: 74069"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1819314.2589103957,
            "unit": "iter/sec",
            "range": "stddev: 1.0765589741277958e-7",
            "extra": "mean: 549.657649909916 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1521797.2196876383,
            "unit": "iter/sec",
            "range": "stddev: 1.4763057450800676e-7",
            "extra": "mean: 657.1177730273084 nsec\nrounds: 153823"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2520017.6494789445,
            "unit": "iter/sec",
            "range": "stddev: 8.957593821166359e-8",
            "extra": "mean: 396.82261757440733 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5128242.228293725,
            "unit": "iter/sec",
            "range": "stddev: 4.3201880254871843e-8",
            "extra": "mean: 194.99858927927835 nsec\nrounds: 58821"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6343231.882413679,
            "unit": "iter/sec",
            "range": "stddev: 4.047618331775764e-8",
            "extra": "mean: 157.64834370508638 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8077908.473266456,
            "unit": "iter/sec",
            "range": "stddev: 2.4951444737343007e-8",
            "extra": "mean: 123.79442071047323 nsec\nrounds: 68023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc66afa159875c41d2659f65595e294ea343cd8d",
          "message": "Merge pull request #1689 from messense/bench-badge\n\nAdd a badge and link to benchmark tracking page",
          "timestamp": "2021-06-23T16:44:11+08:00",
          "tree_id": "d9e3222f50d04a68f4dadce076b1e1cb5f9e7686",
          "url": "https://github.com/PyO3/pyo3/commit/dc66afa159875c41d2659f65595e294ea343cd8d"
        },
        "date": 1624438011920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6274788.027237393,
            "unit": "iter/sec",
            "range": "stddev: 2.4429062323281284e-7",
            "extra": "mean: 159.3679333325243 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7991060.22684136,
            "unit": "iter/sec",
            "range": "stddev: 2.2209035545497662e-7",
            "extra": "mean: 125.13984022308081 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2706060.744148623,
            "unit": "iter/sec",
            "range": "stddev: 5.693640660104062e-7",
            "extra": "mean: 369.54085460268607 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1601121.4909020234,
            "unit": "iter/sec",
            "range": "stddev: 0.000001131925845150776",
            "extra": "mean: 624.5622244671953 nsec\nrounds: 52632"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2451024.6582979606,
            "unit": "iter/sec",
            "range": "stddev: 4.2338700747222466e-7",
            "extra": "mean: 407.9926314141159 nsec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1638564.5292063258,
            "unit": "iter/sec",
            "range": "stddev: 6.80484948741222e-7",
            "extra": "mean: 610.2902767486712 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1494177.3224117253,
            "unit": "iter/sec",
            "range": "stddev: 8.30309627063933e-7",
            "extra": "mean: 669.2646080225878 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1240911.5756403045,
            "unit": "iter/sec",
            "range": "stddev: 5.764312348081227e-7",
            "extra": "mean: 805.8591922506507 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1508081.3037436372,
            "unit": "iter/sec",
            "range": "stddev: 7.558225162683632e-7",
            "extra": "mean: 663.0942227832339 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1114738.6182970505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013517398753080526",
            "extra": "mean: 897.0712807345521 nsec\nrounds: 63292"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1960236.0599131528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010165589289089231",
            "extra": "mean: 510.1426407001841 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3813878.400427005,
            "unit": "iter/sec",
            "range": "stddev: 5.349436708543837e-7",
            "extra": "mean: 262.20028406994703 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4867044.307243269,
            "unit": "iter/sec",
            "range": "stddev: 3.028584576022492e-7",
            "extra": "mean: 205.463508625048 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6428506.384376055,
            "unit": "iter/sec",
            "range": "stddev: 7.971295473812854e-8",
            "extra": "mean: 155.5571294803981 nsec\nrounds: 64936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41201924+aviramha@users.noreply.github.com",
            "name": "Aviram Hassan",
            "username": "aviramha"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13cd092c4e87171462f422de804f25dd630ea436",
          "message": "Update class.md - add example of `new` returning a `PyResult` (#1688)\n\n* Update class.md - add example of `new` returning a `PyResult`\r\n\r\n* Update class.md",
          "timestamp": "2021-06-23T17:40:01+08:00",
          "tree_id": "1e5539ded72723a593a410a2b51c34e9102f1480",
          "url": "https://github.com/PyO3/pyo3/commit/13cd092c4e87171462f422de804f25dd630ea436"
        },
        "date": 1624441318490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8488639.162976567,
            "unit": "iter/sec",
            "range": "stddev: 5.559393739732783e-8",
            "extra": "mean: 117.80451269049397 nsec\nrounds: 43104"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10045339.716794418,
            "unit": "iter/sec",
            "range": "stddev: 8.346794180962959e-8",
            "extra": "mean: 99.54864924362509 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3351752.5028130487,
            "unit": "iter/sec",
            "range": "stddev: 3.3066932531253713e-7",
            "extra": "mean: 298.3513845848008 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2108506.6992948637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010568810938200451",
            "extra": "mean: 474.26930174477695 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3147905.4162493395,
            "unit": "iter/sec",
            "range": "stddev: 2.1985754828377267e-7",
            "extra": "mean: 317.6715522770013 nsec\nrounds: 166639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1897983.3757824518,
            "unit": "iter/sec",
            "range": "stddev: 4.0132406784243894e-7",
            "extra": "mean: 526.8750046808904 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1890595.9024400392,
            "unit": "iter/sec",
            "range": "stddev: 4.952385010118045e-7",
            "extra": "mean: 528.9337603604599 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1551184.6415653774,
            "unit": "iter/sec",
            "range": "stddev: 2.9178628979418374e-7",
            "extra": "mean: 644.6685798736984 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1848363.544350012,
            "unit": "iter/sec",
            "range": "stddev: 3.525031853364213e-7",
            "extra": "mean: 541.0191101514354 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1656472.320601037,
            "unit": "iter/sec",
            "range": "stddev: 7.543967589993223e-7",
            "extra": "mean: 603.6925504658782 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2428611.7870185487,
            "unit": "iter/sec",
            "range": "stddev: 3.055902791456838e-7",
            "extra": "mean: 411.7578632141163 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4910416.796675972,
            "unit": "iter/sec",
            "range": "stddev: 0.00000100321922819788",
            "extra": "mean: 203.64870059033944 nsec\nrounds: 55556"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6612566.508838303,
            "unit": "iter/sec",
            "range": "stddev: 6.182645269930389e-8",
            "extra": "mean: 151.22721240901174 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8117225.418513678,
            "unit": "iter/sec",
            "range": "stddev: 5.5826584196743506e-8",
            "extra": "mean: 123.1948046827961 nsec\nrounds: 92593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14808292fed8bb3f3c10155062f1eaba2a49ee41",
          "message": "Merge pull request #1692 from GabrielMajeri/make-tracefunc-optional\n\nMake the `Py_tracefunc` parameters optional",
          "timestamp": "2021-06-24T07:29:47+01:00",
          "tree_id": "a37583ddc3b51a7adf5bc4abe12b5714dc4bbc02",
          "url": "https://github.com/PyO3/pyo3/commit/14808292fed8bb3f3c10155062f1eaba2a49ee41"
        },
        "date": 1624516731252,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8747365.13529183,
            "unit": "iter/sec",
            "range": "stddev: 3.3451408243115113e-9",
            "extra": "mean: 114.32013921144403 nsec\nrounds: 83327"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10163801.31364412,
            "unit": "iter/sec",
            "range": "stddev: 3.5217316674997417e-9",
            "extra": "mean: 98.38838532363383 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3619556.9876116733,
            "unit": "iter/sec",
            "range": "stddev: 1.3754928272381376e-8",
            "extra": "mean: 276.2769044448642 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2122094.946968521,
            "unit": "iter/sec",
            "range": "stddev: 2.5428635214698035e-8",
            "extra": "mean: 471.23244953226856 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3218459.747694051,
            "unit": "iter/sec",
            "range": "stddev: 4.2369000299840833e-7",
            "extra": "mean: 310.7076298583198 nsec\nrounds: 53476"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1842336.3112159944,
            "unit": "iter/sec",
            "range": "stddev: 2.6386408220385185e-8",
            "extra": "mean: 542.7890629478569 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1978952.0748855672,
            "unit": "iter/sec",
            "range": "stddev: 1.4941565030565147e-8",
            "extra": "mean: 505.31794715548205 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1708050.981692474,
            "unit": "iter/sec",
            "range": "stddev: 1.919595709797245e-8",
            "extra": "mean: 585.4626183400292 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1930755.495293355,
            "unit": "iter/sec",
            "range": "stddev: 2.9069559730005158e-8",
            "extra": "mean: 517.9319714165196 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1726199.666315152,
            "unit": "iter/sec",
            "range": "stddev: 2.6121567496908412e-8",
            "extra": "mean: 579.3072606341386 nsec\nrounds: 156226"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2557385.5948345354,
            "unit": "iter/sec",
            "range": "stddev: 1.85502263292307e-8",
            "extra": "mean: 391.02433439014874 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5302942.391844972,
            "unit": "iter/sec",
            "range": "stddev: 4.97605013667586e-9",
            "extra": "mean: 188.57455467321302 nsec\nrounds: 49020"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6372101.692889809,
            "unit": "iter/sec",
            "range": "stddev: 7.983240431269154e-9",
            "extra": "mean: 156.93409305062275 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8404954.043877503,
            "unit": "iter/sec",
            "range": "stddev: 4.377893352317866e-9",
            "extra": "mean: 118.97745005852663 nsec\nrounds: 82645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f",
          "message": "Merge pull request #1690 from davidhewitt/safety-docs\n\ndocs: implement final missing safety docs",
          "timestamp": "2021-06-24T07:51:28+01:00",
          "tree_id": "37ee98645fcdb85033ff9eacc691817e52c459df",
          "url": "https://github.com/PyO3/pyo3/commit/36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f"
        },
        "date": 1624517929071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 3136907.7237386545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012163086572207095",
            "extra": "mean: 318.7852777537785 nsec\nrounds: 46297"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 5426035.636326649,
            "unit": "iter/sec",
            "range": "stddev: 4.549776469043778e-7",
            "extra": "mean: 184.2966148812535 nsec\nrounds: 61729"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2902136.6954808915,
            "unit": "iter/sec",
            "range": "stddev: 9.303634780315227e-7",
            "extra": "mean: 344.5737072127464 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1705703.2636413744,
            "unit": "iter/sec",
            "range": "stddev: 5.58763419125677e-7",
            "extra": "mean: 586.2684449961489 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2543542.746187593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017938636786887424",
            "extra": "mean: 393.1524254895676 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1212945.4272020229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019718724110979366",
            "extra": "mean: 824.4393998059502 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1573173.4924326977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015399437893566904",
            "extra": "mean: 635.6577992257006 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1234000.8579274227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012455983951910017",
            "extra": "mean: 810.3722080708907 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1461759.2395445763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027874412608694903",
            "extra": "mean: 684.1071860176008 nsec\nrounds: 35089"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1055386.7756585267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025319800688104955",
            "extra": "mean: 947.5199264040147 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2069573.74881661,
            "unit": "iter/sec",
            "range": "stddev: 0.00000171299607480449",
            "extra": "mean: 483.19128543822706 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2270072.6179009015,
            "unit": "iter/sec",
            "range": "stddev: 0.000001099197896082703",
            "extra": "mean: 440.5145421843647 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3938775.53608749,
            "unit": "iter/sec",
            "range": "stddev: 3.4811917359492454e-7",
            "extra": "mean: 253.88600869430786 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6722019.695586961,
            "unit": "iter/sec",
            "range": "stddev: 3.09811670754944e-7",
            "extra": "mean: 148.76481255424733 nsec\nrounds: 71434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02353ce3421e2b16be790b262252d11f404a907",
          "message": "Merge pull request #1679 from messense/error-cause\n\nAdd support for setting and retrieving exception cause",
          "timestamp": "2021-06-24T07:58:34+01:00",
          "tree_id": "5a49884aaf7d910cf329ef78dd7134394a8f0eda",
          "url": "https://github.com/PyO3/pyo3/commit/a02353ce3421e2b16be790b262252d11f404a907"
        },
        "date": 1624518934694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6993009.4632984195,
            "unit": "iter/sec",
            "range": "stddev: 8.574635948987544e-9",
            "extra": "mean: 142.99994948497886 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8469528.128725115,
            "unit": "iter/sec",
            "range": "stddev: 3.9270399195655095e-9",
            "extra": "mean: 118.07033223118253 nsec\nrounds: 81961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3022636.303631664,
            "unit": "iter/sec",
            "range": "stddev: 2.081030877670667e-8",
            "extra": "mean: 330.83702422196075 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1819720.9841513035,
            "unit": "iter/sec",
            "range": "stddev: 2.8264181619562864e-8",
            "extra": "mean: 549.5347961082681 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2696352.1808932666,
            "unit": "iter/sec",
            "range": "stddev: 1.802753310094569e-8",
            "extra": "mean: 370.8714340379025 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1524571.1610405664,
            "unit": "iter/sec",
            "range": "stddev: 3.201746517908513e-8",
            "extra": "mean: 655.922154081391 nsec\nrounds: 136968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1638493.5315984902,
            "unit": "iter/sec",
            "range": "stddev: 1.899016368207613e-8",
            "extra": "mean: 610.3167212536412 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1288280.9797210216,
            "unit": "iter/sec",
            "range": "stddev: 4.678430779576905e-8",
            "extra": "mean: 776.2281798313666 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1638368.47464349,
            "unit": "iter/sec",
            "range": "stddev: 1.988059362610328e-8",
            "extra": "mean: 610.3633068367366 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1420741.628319992,
            "unit": "iter/sec",
            "range": "stddev: 2.0573731184392825e-8",
            "extra": "mean: 703.8577458891142 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2128924.489791611,
            "unit": "iter/sec",
            "range": "stddev: 2.613173994662768e-8",
            "extra": "mean: 469.72074622494523 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4204509.4108191645,
            "unit": "iter/sec",
            "range": "stddev: 1.2646121612636023e-8",
            "extra": "mean: 237.8398767351 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5330856.218304446,
            "unit": "iter/sec",
            "range": "stddev: 8.86750184575805e-9",
            "extra": "mean: 187.58712654190327 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7004768.376139157,
            "unit": "iter/sec",
            "range": "stddev: 5.3977908557244274e-9",
            "extra": "mean: 142.75989530318722 nsec\nrounds: 68961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59372212+mejrs@users.noreply.github.com",
            "name": "mejrs",
            "username": "mejrs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455cc95c54f70a6db1e1490583e578de76a821fe",
          "message": "implement ffi/cpython/pystate (#1687)\n\n* dont reexport cpython items twice\r\n\r\n* add ffi module level doc\r\n\r\n* reorder to header file order\r\n\r\n* cargo fmt\r\n\r\n* implement cpython/pystate\r\n\r\n* fix import errors\r\n\r\n* make PyInterpreterState opaque\r\n\r\n* update changelog\r\n\r\n* fix formatting",
          "timestamp": "2021-06-24T20:05:15+08:00",
          "tree_id": "7ebb04f2e789117d0e45438079c859b991c0cb96",
          "url": "https://github.com/PyO3/pyo3/commit/455cc95c54f70a6db1e1490583e578de76a821fe"
        },
        "date": 1624536386468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8466364.02623036,
            "unit": "iter/sec",
            "range": "stddev: 6.126049505042053e-9",
            "extra": "mean: 118.11445821381976 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10223801.89410912,
            "unit": "iter/sec",
            "range": "stddev: 7.55025304903985e-9",
            "extra": "mean: 97.81097192191804 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3647636.4726857543,
            "unit": "iter/sec",
            "range": "stddev: 1.2356823381291331e-8",
            "extra": "mean: 274.1501263877705 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2249265.2371345297,
            "unit": "iter/sec",
            "range": "stddev: 2.44043460750747e-8",
            "extra": "mean: 444.58963019998265 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3293350.8071047044,
            "unit": "iter/sec",
            "range": "stddev: 1.8319716483279522e-8",
            "extra": "mean: 303.6421136321178 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2085043.1599765483,
            "unit": "iter/sec",
            "range": "stddev: 2.200982304682132e-8",
            "extra": "mean: 479.6063789920761 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1952509.6987430851,
            "unit": "iter/sec",
            "range": "stddev: 2.5645001732220026e-8",
            "extra": "mean: 512.1613483630641 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1677135.849617288,
            "unit": "iter/sec",
            "range": "stddev: 1.6712274706352553e-8",
            "extra": "mean: 596.2546207741125 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1949731.51434374,
            "unit": "iter/sec",
            "range": "stddev: 1.6464705652871444e-8",
            "extra": "mean: 512.8911302113094 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1715768.3382947065,
            "unit": "iter/sec",
            "range": "stddev: 8.244669239621835e-8",
            "extra": "mean: 582.8292652808068 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2606103.5369843184,
            "unit": "iter/sec",
            "range": "stddev: 2.6358715486484638e-8",
            "extra": "mean: 383.71460911249085 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5339177.891590649,
            "unit": "iter/sec",
            "range": "stddev: 5.535632361798614e-9",
            "extra": "mean: 187.29475217058823 nsec\nrounds: 49752"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6452269.655809043,
            "unit": "iter/sec",
            "range": "stddev: 7.745176995561012e-9",
            "extra": "mean: 154.98422312522078 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8227842.521479351,
            "unit": "iter/sec",
            "range": "stddev: 6.6529388376905975e-9",
            "extra": "mean: 121.5385439608278 nsec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf283d36cfe523acc1e3e3c80f89b527d5c8991",
          "message": "Merge pull request #832 from gilescope/macro\n\nNeed to be able to create structs via macro_rules",
          "timestamp": "2021-06-24T22:14:56+08:00",
          "tree_id": "f8b70d9f7d60d59b69ff99f2bc4dec45f7c2a66f",
          "url": "https://github.com/PyO3/pyo3/commit/3bf283d36cfe523acc1e3e3c80f89b527d5c8991"
        },
        "date": 1624544205090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7125001.515039475,
            "unit": "iter/sec",
            "range": "stddev: 2.766139678784118e-8",
            "extra": "mean: 140.3508473490904 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8732340.170253897,
            "unit": "iter/sec",
            "range": "stddev: 1.3851316866632887e-8",
            "extra": "mean: 114.51683975918823 nsec\nrounds: 89278"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3078258.247776763,
            "unit": "iter/sec",
            "range": "stddev: 3.5631711747657285e-7",
            "extra": "mean: 324.85903374813944 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1970795.6404421595,
            "unit": "iter/sec",
            "range": "stddev: 8.257452737336033e-8",
            "extra": "mean: 507.40928155062215 nsec\nrounds: 172385"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2796701.9137730137,
            "unit": "iter/sec",
            "range": "stddev: 6.673892018346004e-8",
            "extra": "mean: 357.5640274980972 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1771369.6353685295,
            "unit": "iter/sec",
            "range": "stddev: 8.416626140340166e-8",
            "extra": "mean: 564.5349113099892 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1667770.6947159632,
            "unit": "iter/sec",
            "range": "stddev: 5.90850575707025e-8",
            "extra": "mean: 599.6028130057072 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1355860.1571647343,
            "unit": "iter/sec",
            "range": "stddev: 1.0669031829698475e-7",
            "extra": "mean: 737.539188474377 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1655437.802894636,
            "unit": "iter/sec",
            "range": "stddev: 5.7703997928277e-8",
            "extra": "mean: 604.0698105671365 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1470477.2022284628,
            "unit": "iter/sec",
            "range": "stddev: 9.141000930466505e-8",
            "extra": "mean: 680.0513455663532 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2170517.616754072,
            "unit": "iter/sec",
            "range": "stddev: 6.573114280779947e-8",
            "extra": "mean: 460.71959622983917 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4311042.782768239,
            "unit": "iter/sec",
            "range": "stddev: 3.513513082626408e-8",
            "extra": "mean: 231.9624393421069 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5015411.865824737,
            "unit": "iter/sec",
            "range": "stddev: 2.775305677669435e-8",
            "extra": "mean: 199.3854197327003 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7086786.928271357,
            "unit": "iter/sec",
            "range": "stddev: 1.2017080553130486e-8",
            "extra": "mean: 141.10767123692722 nsec\nrounds: 65786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6009cc82cba1693da90c15f33a15e36efc982250",
          "message": "Merge pull request #1695 from messense/wrap-function-prelude\n\nAdd `wrap_pyfunction` macro to prelude",
          "timestamp": "2021-06-24T20:23:30+01:00",
          "tree_id": "5a1d9336d07c8a03c426d4d4aaa9559030822509",
          "url": "https://github.com/PyO3/pyo3/commit/6009cc82cba1693da90c15f33a15e36efc982250"
        },
        "date": 1624562690929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8759972.06020853,
            "unit": "iter/sec",
            "range": "stddev: 4.557163043355186e-9",
            "extra": "mean: 114.15561523791004 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10235043.237593701,
            "unit": "iter/sec",
            "range": "stddev: 3.740120865396203e-9",
            "extra": "mean: 97.70354426320455 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3657587.6343621854,
            "unit": "iter/sec",
            "range": "stddev: 1.3088303728201881e-8",
            "extra": "mean: 273.4042489110244 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2329208.297942978,
            "unit": "iter/sec",
            "range": "stddev: 2.320398318408019e-8",
            "extra": "mean: 429.3304299506723 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3307981.3553356547,
            "unit": "iter/sec",
            "range": "stddev: 1.618248385944719e-8",
            "extra": "mean: 302.29916453085275 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2145216.9774088925,
            "unit": "iter/sec",
            "range": "stddev: 3.424622602053356e-8",
            "extra": "mean: 466.15331247661663 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1980822.2624242618,
            "unit": "iter/sec",
            "range": "stddev: 1.8980607276189012e-8",
            "extra": "mean: 504.8408526954696 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1683411.1564258547,
            "unit": "iter/sec",
            "range": "stddev: 1.959249231654881e-8",
            "extra": "mean: 594.0319429290784 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1968675.823526887,
            "unit": "iter/sec",
            "range": "stddev: 1.909592918640595e-8",
            "extra": "mean: 507.9556461504554 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1722443.1354147573,
            "unit": "iter/sec",
            "range": "stddev: 2.861472998618918e-8",
            "extra": "mean: 580.5706902245681 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2557098.239988248,
            "unit": "iter/sec",
            "range": "stddev: 2.0492703048390666e-8",
            "extra": "mean: 391.0682758921334 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5357642.658960547,
            "unit": "iter/sec",
            "range": "stddev: 5.484198919671529e-9",
            "extra": "mean: 186.64925297462685 nsec\nrounds: 49262"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6634692.359698617,
            "unit": "iter/sec",
            "range": "stddev: 5.070033565669263e-9",
            "extra": "mean: 150.72288898792465 nsec\nrounds: 62894"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8394476.516615134,
            "unit": "iter/sec",
            "range": "stddev: 4.10243238363891e-9",
            "extra": "mean: 119.12595121569859 nsec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b9a991d38c5912829dec45b31779ea42b19d2d",
          "message": "Merge pull request #1694 from mejrs/pyo3version\n\nautomagically update pyo3 version in toml examples",
          "timestamp": "2021-06-24T20:24:57+01:00",
          "tree_id": "b9db86f4724cd6496e95809bfdc133d7ff933663",
          "url": "https://github.com/PyO3/pyo3/commit/e8b9a991d38c5912829dec45b31779ea42b19d2d"
        },
        "date": 1624563486967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8392245.214603044,
            "unit": "iter/sec",
            "range": "stddev: 7.71383584224568e-9",
            "extra": "mean: 119.15762402404049 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10157565.939557651,
            "unit": "iter/sec",
            "range": "stddev: 4.972391158754317e-9",
            "extra": "mean: 98.4487825085288 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3636338.29588091,
            "unit": "iter/sec",
            "range": "stddev: 1.537968276523108e-8",
            "extra": "mean: 275.00191638815687 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2325184.9913762645,
            "unit": "iter/sec",
            "range": "stddev: 2.5445152473961983e-8",
            "extra": "mean: 430.07330759067867 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3283476.738659426,
            "unit": "iter/sec",
            "range": "stddev: 1.7475490446594806e-8",
            "extra": "mean: 304.5552259366025 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2103874.9720706553,
            "unit": "iter/sec",
            "range": "stddev: 3.026461406219821e-8",
            "extra": "mean: 475.3134160892257 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1899264.820231965,
            "unit": "iter/sec",
            "range": "stddev: 2.2334637487358414e-8",
            "extra": "mean: 526.5195192095263 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1655573.6454794856,
            "unit": "iter/sec",
            "range": "stddev: 2.9048969178659496e-8",
            "extra": "mean: 604.0202456292669 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1952959.5527021266,
            "unit": "iter/sec",
            "range": "stddev: 1.83999326686357e-8",
            "extra": "mean: 512.0433746909085 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1712747.8026442651,
            "unit": "iter/sec",
            "range": "stddev: 2.7053980077622786e-8",
            "extra": "mean: 583.8571203865944 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2544322.7980689453,
            "unit": "iter/sec",
            "range": "stddev: 2.295377029932499e-8",
            "extra": "mean: 393.03189074911813 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5350583.457236271,
            "unit": "iter/sec",
            "range": "stddev: 5.036862417385784e-9",
            "extra": "mean: 186.89550550748288 nsec\nrounds: 49752"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6293001.821914365,
            "unit": "iter/sec",
            "range": "stddev: 8.441508077760884e-9",
            "extra": "mean: 158.90667574842382 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8397819.784315765,
            "unit": "iter/sec",
            "range": "stddev: 4.883376966423555e-9",
            "extra": "mean: 119.07852581779319 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16bc16568489e3d0769862755f3eaa2ab521066",
          "message": "Merge pull request #1697 from scalexm/lifetime\n\nUse explicit lifetimes in proc-macro expansion",
          "timestamp": "2021-06-25T10:53:22+08:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/PyO3/pyo3/commit/e16bc16568489e3d0769862755f3eaa2ab521066"
        },
        "date": 1624589670722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8334289.347731616,
            "unit": "iter/sec",
            "range": "stddev: 6.492021678591762e-9",
            "extra": "mean: 119.98623497160627 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10200960.235832313,
            "unit": "iter/sec",
            "range": "stddev: 3.7615335263659596e-9",
            "extra": "mean: 98.02998706801795 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3608105.406745747,
            "unit": "iter/sec",
            "range": "stddev: 1.4843971525639225e-8",
            "extra": "mean: 277.1537655561139 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2330792.85353423,
            "unit": "iter/sec",
            "range": "stddev: 2.2641321292014794e-8",
            "extra": "mean: 429.03855590825333 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3255567.244325382,
            "unit": "iter/sec",
            "range": "stddev: 1.7386208957688658e-8",
            "extra": "mean: 307.16613264307904 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2076244.8360653264,
            "unit": "iter/sec",
            "range": "stddev: 2.7255906015622834e-8",
            "extra": "mean: 481.6387656348672 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1960174.3212144359,
            "unit": "iter/sec",
            "range": "stddev: 1.9839944039237395e-8",
            "extra": "mean: 510.15870842596615 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1669150.2409420928,
            "unit": "iter/sec",
            "range": "stddev: 2.929430817448102e-8",
            "extra": "mean: 599.1072435971374 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1906632.4891822406,
            "unit": "iter/sec",
            "range": "stddev: 2.9512665974105733e-8",
            "extra": "mean: 524.4849260006168 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1755732.5462157025,
            "unit": "iter/sec",
            "range": "stddev: 2.1306341940400124e-8",
            "extra": "mean: 569.5628312839783 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2533180.540188445,
            "unit": "iter/sec",
            "range": "stddev: 2.3334369264216302e-8",
            "extra": "mean: 394.7606513373098 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5294089.25185863,
            "unit": "iter/sec",
            "range": "stddev: 4.728645439226968e-9",
            "extra": "mean: 188.8899020069455 nsec\nrounds: 48779"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6422907.839563077,
            "unit": "iter/sec",
            "range": "stddev: 8.115748408407631e-9",
            "extra": "mean: 155.6927212687557 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8391282.83404105,
            "unit": "iter/sec",
            "range": "stddev: 4.021683473986469e-9",
            "extra": "mean: 119.17128998954666 nsec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/PyO3/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624734513866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7475065.233429208,
            "unit": "iter/sec",
            "range": "stddev: 1.8117945813751906e-7",
            "extra": "mean: 133.77809674854421 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9454068.950769829,
            "unit": "iter/sec",
            "range": "stddev: 1.5104670182315923e-7",
            "extra": "mean: 105.77456174772037 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3064346.61648168,
            "unit": "iter/sec",
            "range": "stddev: 3.5953571169724365e-7",
            "extra": "mean: 326.3338405066611 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1623266.829652748,
            "unit": "iter/sec",
            "range": "stddev: 5.180801295457139e-7",
            "extra": "mean: 616.0416647052027 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2681756.8521427717,
            "unit": "iter/sec",
            "range": "stddev: 7.203829039932315e-7",
            "extra": "mean: 372.8898834362937 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1189807.632373735,
            "unit": "iter/sec",
            "range": "stddev: 0.000003065605914713701",
            "extra": "mean: 840.4719996668218 nsec\nrounds: 44053"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1652391.7592056375,
            "unit": "iter/sec",
            "range": "stddev: 5.292437821123038e-7",
            "extra": "mean: 605.1833618929047 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1388283.235465358,
            "unit": "iter/sec",
            "range": "stddev: 5.033241478976762e-7",
            "extra": "mean: 720.3141077078457 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1700325.7937406125,
            "unit": "iter/sec",
            "range": "stddev: 3.62099687032276e-7",
            "extra": "mean: 588.1225843196072 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1596149.4231554684,
            "unit": "iter/sec",
            "range": "stddev: 6.26369411721238e-7",
            "extra": "mean: 626.5077601713665 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2306112.7572780116,
            "unit": "iter/sec",
            "range": "stddev: 3.124040166620862e-7",
            "extra": "mean: 433.6301409563377 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4407053.8835406285,
            "unit": "iter/sec",
            "range": "stddev: 1.0031135407967405e-7",
            "extra": "mean: 226.90895696436806 nsec\nrounds: 46729"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5019036.38863606,
            "unit": "iter/sec",
            "range": "stddev: 1.1288035411515477e-7",
            "extra": "mean: 199.24143253158954 nsec\nrounds: 59524"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7252225.210801289,
            "unit": "iter/sec",
            "range": "stddev: 1.9043772815163747e-7",
            "extra": "mean: 137.88871290301313 nsec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f1a1d6f0edef93c7fa0590d8d3e2c566342912",
          "message": "Merge pull request #1700 from messense/cross-compile\n\nAdd cross compilation test in CI",
          "timestamp": "2021-06-27T09:18:27+01:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/PyO3/pyo3/commit/11f1a1d6f0edef93c7fa0590d8d3e2c566342912"
        },
        "date": 1624781995998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6366359.427942575,
            "unit": "iter/sec",
            "range": "stddev: 2.2945465615871739e-7",
            "extra": "mean: 157.07564288797278 nsec\nrounds: 41842"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8373049.085346055,
            "unit": "iter/sec",
            "range": "stddev: 9.725419405429583e-8",
            "extra": "mean: 119.43080588769686 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 1821077.3885707196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015856031271864336",
            "extra": "mean: 549.1254826819053 nsec\nrounds: 54645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1745263.1345085273,
            "unit": "iter/sec",
            "range": "stddev: 4.7159651599759414e-7",
            "extra": "mean: 572.9795010433702 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2545886.3500105566,
            "unit": "iter/sec",
            "range": "stddev: 4.564521007223584e-7",
            "extra": "mean: 392.79051085522866 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1538880.818547189,
            "unit": "iter/sec",
            "range": "stddev: 7.236396256406955e-7",
            "extra": "mean: 649.8229024286062 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1500401.9955610523,
            "unit": "iter/sec",
            "range": "stddev: 9.159093414777975e-7",
            "extra": "mean: 666.4880498415325 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1282634.8040353612,
            "unit": "iter/sec",
            "range": "stddev: 0.000001690956092739514",
            "extra": "mean: 779.6451467361348 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1510303.8683831198,
            "unit": "iter/sec",
            "range": "stddev: 0.000001158266975702367",
            "extra": "mean: 662.1184126812518 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1333596.4293431963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012255335374274598",
            "extra": "mean: 749.8520376906044 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2033544.3906345381,
            "unit": "iter/sec",
            "range": "stddev: 4.783149680514232e-7",
            "extra": "mean: 491.7522354589967 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4213471.126789137,
            "unit": "iter/sec",
            "range": "stddev: 1.59458513206062e-7",
            "extra": "mean: 237.33401034647017 nsec\nrounds: 44844"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5175721.920387485,
            "unit": "iter/sec",
            "range": "stddev: 2.1447010108077834e-7",
            "extra": "mean: 193.20976191957044 nsec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6542563.711577692,
            "unit": "iter/sec",
            "range": "stddev: 7.339110633387915e-8",
            "extra": "mean: 152.84528268794648 nsec\nrounds: 25576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9249527b63d2e318f30eabe07327e707cee51b5e",
          "message": "Merge pull request #1699 from ohadravid/size_hints\n\nAdded `size_hint` impls for `{PyDict,PyList,PySet,PyTuple}Iterator`s",
          "timestamp": "2021-06-27T17:27:26+01:00",
          "tree_id": "fbbc4397c5c7b3ec495739b89b1cd5a87bdcc0f2",
          "url": "https://github.com/PyO3/pyo3/commit/9249527b63d2e318f30eabe07327e707cee51b5e"
        },
        "date": 1624811337400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7526748.464613759,
            "unit": "iter/sec",
            "range": "stddev: 3.445135988805196e-7",
            "extra": "mean: 132.85949499999995 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9232939.18057018,
            "unit": "iter/sec",
            "range": "stddev: 2.49951450718757e-7",
            "extra": "mean: 108.30787254658847 nsec\nrounds: 99001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3220937.492968421,
            "unit": "iter/sec",
            "range": "stddev: 4.94757869289028e-7",
            "extra": "mean: 310.46861424082095 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2016064.2734400134,
            "unit": "iter/sec",
            "range": "stddev: 0.000001133928064459699",
            "extra": "mean: 496.01593221726085 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2803273.1839924636,
            "unit": "iter/sec",
            "range": "stddev: 7.689859680856196e-7",
            "extra": "mean: 356.72584666703716 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1520287.7798327203,
            "unit": "iter/sec",
            "range": "stddev: 6.000044923410165e-7",
            "extra": "mean: 657.7702019745157 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1716021.5897105793,
            "unit": "iter/sec",
            "range": "stddev: 8.524718086266841e-7",
            "extra": "mean: 582.7432510150719 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1238971.8387403535,
            "unit": "iter/sec",
            "range": "stddev: 0.000003375383812984738",
            "extra": "mean: 807.1208470861246 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1730792.1515037129,
            "unit": "iter/sec",
            "range": "stddev: 5.824319307872939e-7",
            "extra": "mean: 577.7701263154144 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1093223.3898399484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015601990137589238",
            "extra": "mean: 914.7261294389183 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2212968.650798438,
            "unit": "iter/sec",
            "range": "stddev: 9.590177025670933e-7",
            "extra": "mean: 451.881683746625 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2701998.682501924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012155352061538759",
            "extra": "mean: 370.0964054776913 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6061542.16196109,
            "unit": "iter/sec",
            "range": "stddev: 2.1356985753719093e-7",
            "extra": "mean: 164.97451857631748 nsec\nrounds: 60238"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7607026.127718172,
            "unit": "iter/sec",
            "range": "stddev: 1.1061321653333132e-7",
            "extra": "mean: 131.45741623731425 nsec\nrounds: 78734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "021505401275cfe4065ff87c8e713f93c0f2f9d7",
          "message": "Merge pull request #1702 from ohadravid/to-python-set-non-default-hashbuilder\n\nMake `ToPyObject` impl for `HashSet` accept non-default hashers.",
          "timestamp": "2021-06-27T17:29:00+01:00",
          "tree_id": "b6308da7f890f2dda74e1a25cfd86fadc8c224fd",
          "url": "https://github.com/PyO3/pyo3/commit/021505401275cfe4065ff87c8e713f93c0f2f9d7"
        },
        "date": 1624812289641,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7944090.958666782,
            "unit": "iter/sec",
            "range": "stddev: 2.301718560253789e-8",
            "extra": "mean: 125.87972685643615 nsec\nrounds: 68023"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8294977.659024144,
            "unit": "iter/sec",
            "range": "stddev: 4.0105722878879466e-8",
            "extra": "mean: 120.55487562550975 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3273876.681545514,
            "unit": "iter/sec",
            "range": "stddev: 8.088331985466114e-8",
            "extra": "mean: 305.44827959980626 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2123563.0464204783,
            "unit": "iter/sec",
            "range": "stddev: 1.0820230755266617e-7",
            "extra": "mean: 470.9066687167989 nsec\nrounds: 45451"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2970727.0415689913,
            "unit": "iter/sec",
            "range": "stddev: 8.718191461246002e-8",
            "extra": "mean: 336.61793426575946 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1910162.071195804,
            "unit": "iter/sec",
            "range": "stddev: 1.4375610842670415e-7",
            "extra": "mean: 523.515787000494 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1808204.8282341452,
            "unit": "iter/sec",
            "range": "stddev: 1.1305077908436552e-7",
            "extra": "mean: 553.0346918586796 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1509081.8153550988,
            "unit": "iter/sec",
            "range": "stddev: 1.218747542190034e-7",
            "extra": "mean: 662.6545955460614 nsec\nrounds: 84027"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1724193.4017265865,
            "unit": "iter/sec",
            "range": "stddev: 1.29083952045134e-7",
            "extra": "mean: 579.9813402593604 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1566541.8259040345,
            "unit": "iter/sec",
            "range": "stddev: 1.5760181425184068e-7",
            "extra": "mean: 638.3487395386353 nsec\nrounds: 144907"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2281766.568140298,
            "unit": "iter/sec",
            "range": "stddev: 1.1174699250742419e-7",
            "extra": "mean: 438.25692512235645 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4631259.536944326,
            "unit": "iter/sec",
            "range": "stddev: 7.375957184551763e-8",
            "extra": "mean: 215.92398180730393 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5379833.297416029,
            "unit": "iter/sec",
            "range": "stddev: 2.7468638046613073e-8",
            "extra": "mean: 185.87936553353256 nsec\nrounds: 58821"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7597850.511110937,
            "unit": "iter/sec",
            "range": "stddev: 2.444494415707696e-8",
            "extra": "mean: 131.61617203942117 nsec\nrounds: 68961"
          }
        ]
      }
    ]
  }
}