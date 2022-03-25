## Display Table
~~~scss
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ol {
  display: table;
  width: 100%;
  padding: 0;
  margin: 0;
  table-layout: fixed;
}

li {
  display: table-cell;
  width: 33.33%;
  padding: 1rem;
  margin: 0;
  text-align: center;
  vertical-align: top;
  word-wrap: break-word;
}

@media (max-width: 756px) {
  ol {
    display: block;
  }

  li {
    display: block;
    width: 100%;
  }
}
~~~

~~~html
<ol>
  <li>
    Heat the oven to 220&deg;C (or gas mark 7). Tip the flour into a large
    bowl along with the salt and baking powder, then mix it all up. Add
    the butter in, then rub the butter in with your fingers until the mix
    looks like fine crumbs. When that is done, stir in the sugar.
  </li>
  <li>
    Put the milk into a jug and heat in the microwave for about 20-30
    seconds. It should be warm but not hot. Add the vanilla and lemon
    juice to the milk and then put that to one side and but a baking tray
    in the oven to warm.
  </li>
  <li>
    Make a well in the dry mix, then add the liquid and combine it quickly
    with a cutlery knife – it will seem pretty wet at first. Spread some
    flour onto the work surface and tip the dough out. Dredge the dough
    and your hands with a little more flour, then fold the dough over 2-3
    times until it's smoother. Now pat it into a round shape about 4cm
    deep.
  </li>
</ol>
~~~

## Три колонки
~~~scss
.container-table {
  @media (min-width: 384px) {
    margin-right: -1em;
    margin-left: -1em;
  }

  &__row {
    margin-top: 1rem;
    border-spacing: 1em 0;

    @media (min-width: 384px) {
      display: table;
      width: 100%;
    }
  }

  &__cell {
    padding: 1em;
    margin-top: 1rem;

    @media (min-width: 384px) {
      display: table-cell;
      min-width: calc(100 / 3);
    }
  }
}
~~~

~~~html
<div class="container-table">
  <div class="container-table__row">
    <div class="container-table__cell">1</div>
    <div class="container-table__cell">2 Очень много текста, чтобы блок стал больше</div>
    <div class="container-table__cell">3</div>
  </div>
</div>
~~~

