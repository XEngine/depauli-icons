
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
            children.concat([_c('path',{attrs:{"d":"M12.723 22.497c-1.385 0-2.737-.271-4.019-.804a.747.747 0 01-.404-.98.748.748 0 01.98-.405 8.924 8.924 0 003.445.689 8.935 8.935 0 006.204-2.489 8.91 8.91 0 002.762-6.283 8.911 8.911 0 00-2.482-6.399 8.892 8.892 0 00-6.483-2.765 8.921 8.921 0 00-6.199 2.485 8.937 8.937 0 00-2.746 5.833c-.14 2 .375 3.948 1.462 5.589v-2.72a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-.238a.364.364 0 01-.096 0H1.493a.75.75 0 010-1.5h2.636a10.467 10.467 0 01-1.822-6.964l.007-.076.019-.197.006-.045A10.54 10.54 0 015.497 4.42a10.465 10.465 0 017.264-2.913c1.385 0 2.738.269 4.019.8a.74.74 0 01.26.18 10.382 10.382 0 013.253 2.301c3.991 4.171 3.844 10.812-.327 14.803a10.43 10.43 0 01-7.241 2.905h-.002z"}})])
          )
        }
      }
    