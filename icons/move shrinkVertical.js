
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
            children.concat([_c('path',{attrs:{"d":"M11.999 9.438c-.4 0-.777-.156-1.06-.44l-7.72-7.72A.746.746 0 013.22.218c.141-.142.33-.22.53-.22s.389.078.53.22L12 7.938l7.719-7.72a.744.744 0 011.06 0c.143.141.221.33.221.53s-.078.389-.22.53l-7.72 7.72c-.283.284-.66.44-1.061.44zM3.75 23.998a.752.752 0 01-.53-1.281l7.72-7.719a1.487 1.487 0 011.06-.439c.4 0 .777.155 1.059.438l7.721 7.72a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22L12 16.059l-7.72 7.719a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    