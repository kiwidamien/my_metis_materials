## Simplify path

Given a string that represents a path on a UNIX-style file system, write a function `get_simple_path` that simplifies it to the format `/<directory1>/<directory2>/..../<directoryN>`. Your function should resolve single periods (stay in the same directory) as well as double periods (moving up a directory). Double slashes (`//`) also leave you in the same directory.

If the path takes you above the top level `/`, return an error (see example 2). 

Examples:
* If `path=/Users/data/datascience/./set1/../set2` then `get_simple_path(path)` should return `/Users/data/datascience/set2`. 
* If `path=/Users/../../..` return an error (`/Users/..` is just `/`, but `/Users/../..` is `/..` which is illegal)
* If `path=/Users/data//./../documents` should return `/Users/documents`

