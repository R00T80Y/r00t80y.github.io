~~~js
/*
  * Система сортировки с рангами(Для фильтра)
 */
export function compareRang(regionA, regionB) {
  function getRang(region) {
    let rang = 0;

    if (region.name.length > 5) {
      rang += 1;
    }

    if (region.name.length > 10) {
      rang += 1;
    }

    if (region.name.length > 15) {
      rang += 1;
    }

    if (region.slug.length > 20) {
      rang += 1;
    }

    return rang;
  }

  const rangA = getRang(regionA);
  const rangB = getRang(regionB);

  return rangB - rangA;
}
~~~

~~~js
JSON.stringify(regions.list.slice().sort(compareRang).slice(0, 3))
~~~
