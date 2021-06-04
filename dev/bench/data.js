window.BENCHMARK_DATA = {
  "lastUpdate": 1622831683364,
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
      }
    ]
  }
}