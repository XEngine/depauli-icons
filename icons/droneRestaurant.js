
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20.05 13.141a.746.746 0 01-.729-.576 7.997 7.997 0 00-2.782-4.383c-.21.149-.398.314-.562.494a5.245 5.245 0 01-4.388 1.807 5.215 5.215 0 01-3.58-1.824 3.45 3.45 0 00-.545-.477 8 8 0 00-2.784 4.384.747.747 0 01-.905.555.75.75 0 01-.554-.903 9.533 9.533 0 012.693-4.672 3.524 3.524 0 00-.57-.046H3.75C2.509 7.5 1.5 6.491 1.5 5.25S2.509 3 3.75 3h1.488l.112.002a3.622 3.622 0 002.673-1.178 5.248 5.248 0 013.973-1.82c1.542 0 2.998.67 3.996 1.838a3.6 3.6 0 002.651 1.16l.098-.001h1.508A2.25 2.25 0 0120.25 7.5h-1.488l-.101-.001c-.191 0-.383.016-.574.047a9.538 9.538 0 012.692 4.672.75.75 0 01-.729.923zM7.869 6.661c.475.269.9.607 1.263 1.005a3.746 3.746 0 002.871 1.333 3.746 3.746 0 002.848-1.315c.374-.411.8-.75 1.272-1.018a.758.758 0 01.225-.114 5.153 5.153 0 012.432-.551h1.469A.75.75 0 1020.25 4.5h-1.488a5.108 5.108 0 01-3.894-1.665 3.77 3.77 0 00-2.874-1.33 3.74 3.74 0 00-2.846 1.311 5.144 5.144 0 01-3.929 1.683H3.751A.75.75 0 103.75 6h1.488a5.11 5.11 0 012.43.557.768.768 0 01.201.104zM2.25 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM18.75 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75v-7.5A2.252 2.252 0 018.25 12h7.5A2.252 2.252 0 0118 14.25v7.5A2.252 2.252 0 0115.75 24h-7.5zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-7.5z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 01-.75-.75v-4.5a.748.748 0 01.75-.75c.285 0 .542.159.67.414l1.5 3a.746.746 0 01-.032.729.756.756 0 01-.638.356h-.75v.75a.75.75 0 01-.75.751zM9.75 21a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    