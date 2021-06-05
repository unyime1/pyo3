window.BENCHMARK_DATA = {
  "lastUpdate": 1622882424521,
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
      }
    ]
  }
}