window.BENCHMARK_DATA = {
  "lastUpdate": 1622965145898,
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
      }
    ]
  }
}