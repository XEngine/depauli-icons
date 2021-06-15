
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
            children.concat([_c('path',{attrs:{"d":"M16.326 23.135a7.667 7.667 0 01-7.637-6.924H1.438c-.569 0-1.034-.24-1.275-.66-.241-.418-.216-.939.069-1.428L7.453 1.684a1.338 1.338 0 012.468 0l3.808 6.559a7.611 7.611 0 012.596-.454c4.231 0 7.673 3.442 7.673 7.673.001 4.23-3.441 7.673-7.672 7.673zm-6.127-6.924a6.175 6.175 0 006.127 5.424c3.404 0 6.173-2.769 6.173-6.173s-2.769-6.173-6.173-6.173a6.1 6.1 0 00-1.827.278l2.646 4.557c.284.489.31 1.01.069 1.428-.241.419-.706.66-1.275.66h-5.74zm5.553-1.5l-2.627-4.524a6.223 6.223 0 00-2.925 4.524h5.552zm-7.062 0a7.731 7.731 0 013.681-5.821L8.687 2.545 1.625 14.711H8.69z"}})])
          )
        }
      }
    