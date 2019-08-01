// @ts-nocheck
load('benchmark.js');
load('tests/modules/sliced_strings.setup.js')

new BenchmarkSuite('SlicedStrings Memory Overhead', 100, [
    new Benchmark("Clear with split.join", () => {
      Test(test_arr, (str) => {
        return str.split('').join('');
      })
    })
]);

