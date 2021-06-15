
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.38L3.684.459a10.346 10.346 0 018.477 1.079 8.87 8.87 0 007.079.974l2.369-.677a1.867 1.867 0 011.839.476c.356.353.552.824.552 1.325v15.808c0 .833-.559 1.574-1.359 1.803l-2.988.853a10.375 10.375 0 01-8.278-1.138 8.853 8.853 0 00-7.25-.922l-2.625.807v2.403a.75.75 0 01-.75.75zm5.981-5.853c1.919 0 3.796.531 5.43 1.537a8.871 8.871 0 007.08.974l2.987-.853a.377.377 0 00.272-.361V3.637a.373.373 0 00-.48-.361l-2.368.677a10.375 10.375 0 01-8.278-1.138 8.853 8.853 0 00-7.25-.922L1.5 2.699v16.579l2.184-.672a10.352 10.352 0 013.047-.459z"}}),_c('circle',{attrs:{"cx":"12","cy":"16.125","r":"1.125"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    