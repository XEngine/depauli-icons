
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
            children.concat([_c('path',{attrs:{"d":"M10.703 24a5.227 5.227 0 01-4.301-2.25H2.5a.75.75 0 010-1.5h3.172a5.256 5.256 0 015.031-6.75 5.256 5.256 0 015.038 6.726 2.26 2.26 0 001.92-2.06l.004-.041 2.033-14.232a2.235 2.235 0 00-.655-1.735 2.234 2.234 0 00-1.59-.658h-3.52a.75.75 0 010-1.5h3.52a3.73 3.73 0 012.652 1.098 3.726 3.726 0 011.088 2.929l-.005.051-2.034 14.238c-.149 1.915-1.791 3.434-3.736 3.434h-.413A5.23 5.23 0 0110.703 24zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75S12.771 15 10.703 15z"}}),_c('path',{attrs:{"d":"M10.703 21c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25S11.944 21 10.703 21zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    