
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
            children.concat([_c('path',{attrs:{"d":"M11.5 21.75a.75.75 0 01-.75-.75v-8.308c-2.55-.368-4.5-2.584-4.5-5.192a5.256 5.256 0 015.25-5.25 5.256 5.256 0 015.25 5.25c0 2.607-1.95 4.824-4.5 5.192V21a.75.75 0 01-.75.75zm0-18c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}}),_c('path',{attrs:{"d":"M11.125 7.5a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.061.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    