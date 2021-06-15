
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v1.88l2.184-.671a10.355 10.355 0 018.477 1.079 8.87 8.87 0 007.079.974l2.369-.677a1.867 1.867 0 011.839.476c.356.353.552.824.552 1.325v11.728c0 .833-.559 1.574-1.36 1.803l-2.987.854a10.362 10.362 0 01-8.278-1.145 8.853 8.853 0 00-7.25-.922l-2.625.808v4.988a.75.75 0 01-.75.75zm5.981-8.438c1.919 0 3.796.531 5.43 1.537a8.874 8.874 0 007.08.98l2.987-.854a.377.377 0 00.272-.361V5.137a.373.373 0 00-.48-.361l-2.368.677a10.372 10.372 0 01-8.278-1.138 8.853 8.853 0 00-7.25-.922L1.5 4.199v12.494l2.184-.672a10.352 10.352 0 013.047-.459z"}})])
          )
        }
      }
    