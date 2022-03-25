## Shell
### Replace
~~~shell
jq --slurp 'add' 1.json 2.json
~~~

### Merge
~~~shell
jq -s '.[0] * .[1]' $CONFIG_DIR/package.json package.json
jq -s 'reduce .[] as $item ({}; . * $item)' json/*.json
jq -rs 'reduce .[] as $item ({}; . * $item)' 1.json 2.json
~~~
