
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
            children.concat([_c('path',{attrs:{"d":"M12 21c-6.617 0-12-4.037-12-9s5.383-9 12-9 12 4.037 12 9-5.383 9-12 9zm0-16.5C6.21 4.5 1.5 7.865 1.5 12s4.71 7.5 10.5 7.5 10.5-3.365 10.5-7.5S17.79 4.5 12 4.5z"}}),_c('path',{attrs:{"d":"M12 13.5c-3.365 0-6-1.647-6-3.75S8.635 6 12 6s6 1.647 6 3.75-2.635 3.75-6 3.75zm0-6c-2.397 0-4.5 1.051-4.5 2.25S9.603 12 12 12s4.5-1.051 4.5-2.25S14.397 7.5 12 7.5zM12 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 0112 18z"}}),_c('circle',{attrs:{"cx":"7.5","cy":"15","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"15","r":"1.125"}})])
          )
        }
      }
    