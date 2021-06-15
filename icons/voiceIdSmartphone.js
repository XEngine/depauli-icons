
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h7.5a.75.75 0 010 1.5h-7.5A2.252 2.252 0 001.5 3.75v14.245h12V14.25a.75.75 0 011.5 0v6A3.754 3.754 0 0111.25 24h-7.5zM1.5 20.25a2.252 2.252 0 002.25 2.25h7.5a2.252 2.252 0 002.25-2.25v-.755h-12v.755zM17.25 13.5a.75.75 0 01-.75-.75V2.25a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M14.25 11.25a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM20.25 11.25a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM11.25 9.75A.75.75 0 0110.5 9V6A.75.75 0 0112 6v3a.75.75 0 01-.75.75zM23.25 9.75A.75.75 0 0122.5 9V6A.75.75 0 0124 6v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    