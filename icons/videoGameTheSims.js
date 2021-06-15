
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
            children.concat([_c('path',{attrs:{"d":"M11.248 24.002c-.371 0-.73-.111-1.039-.322a1.841 1.841 0 01-.485-.483L2.579 13.053a1.843 1.843 0 01-.006-2.095L9.729.799c.339-.498.91-.799 1.523-.799a1.84 1.84 0 011.528.808l7.143 10.14c.437.641.438 1.461.006 2.095l-7.156 10.159c-.273.4-.692.674-1.178.766a1.782 1.782 0 01-.347.034zm.003-3.123l2.709-8.128H8.542l2.709 8.128zm-1.812-.692L6.96 12.751H4.2l5.239 7.436zm3.624 0l5.238-7.436h-2.76l-2.478 7.436zm5.239-8.936l-5.239-7.437 2.479 7.437h2.76zm-4.342 0l-2.709-8.128-2.709 8.128h5.418zm-7 0l2.479-7.436-5.238 7.436H6.96zM21.001 5.251a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zM2.251 23.251a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    