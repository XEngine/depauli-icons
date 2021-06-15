
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
            children.concat([_c('path',{attrs:{"d":"M12 23.744c-.424 0-.836-.117-1.191-.339l-7.516-4.692A3.927 3.927 0 011.5 15.712V9.765c0-.051.006-.101.017-.153a3.604 3.604 0 01.635-2.061c.012-.017.024-.034.038-.05a6.197 6.197 0 015.382-2.225.75.75 0 11-.145 1.493 4.697 4.697 0 00-4.058 1.66 2.114 2.114 0 00.697 2.999l7.537 4.706a.753.753 0 00.794 0l7.516-4.692a2.101 2.101 0 001.039-1.458 2.093 2.093 0 00-.321-1.553 4.702 4.702 0 00-4.059-1.661c-.024.002-.048.004-.073.004a.75.75 0 01-.07-1.497 6.195 6.195 0 015.381 2.224c.014.016.028.036.042.055.423.613.642 1.332.634 2.08a.72.72 0 01.012.129v5.947a3.921 3.921 0 01-1.777 2.993l-7.528 4.699c-.357.223-.769.34-1.193.34zm-9-8.072a2.43 2.43 0 001.098 1.775l7.505 4.685a.753.753 0 00.794 0l7.516-4.692a2.418 2.418 0 001.083-1.768v-3.148l-.07.05a3.134 3.134 0 01-.24.152l-7.495 4.679a2.243 2.243 0 01-1.191.339c-.424 0-.835-.117-1.191-.339l-7.516-4.693A3.416 3.416 0 013 12.521v3.151z"}}),_c('path',{attrs:{"d":"M12 12.765a.75.75 0 01-.75-.75V6.666A3.015 3.015 0 019 3.765c0-1.53 2.114-3.26 2.538-3.591a.75.75 0 01.924 0C12.886.505 15 2.235 15 3.765c0 1.37-.947 2.564-2.25 2.902v5.348a.75.75 0 01-.75.75zm0-11.02c-.87.782-1.5 1.621-1.5 2.02 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.399-.63-1.238-1.5-2.02z"}})])
          )
        }
      }
    