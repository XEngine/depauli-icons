
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
            children.concat([_c('path',{attrs:{"d":"M12 15.75A3.754 3.754 0 018.25 12 3.754 3.754 0 0112 8.25 3.754 3.754 0 0115.75 12 3.754 3.754 0 0112 15.75zm0-6A2.252 2.252 0 009.75 12 2.252 2.252 0 0012 14.25 2.252 2.252 0 0014.25 12 2.252 2.252 0 0012 9.75z"}}),_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-3.034a8.206 8.206 0 01-7.466-7.466H.75a.75.75 0 010-1.5h3.034a8.208 8.208 0 017.466-7.466V.75a.75.75 0 011.5 0v3.034a8.208 8.208 0 017.466 7.466h3.034a.75.75 0 010 1.5h-3.034a8.206 8.206 0 01-7.466 7.466v3.034A.75.75 0 0112 24zm0-18.75c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75S15.722 5.25 12 5.25z"}})])
          )
        }
      }
    