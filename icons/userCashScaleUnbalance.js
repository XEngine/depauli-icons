
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
            children.concat([_c('path',{attrs:{"d":"M17.25 12.75a.75.75 0 01-.75-.75h-.75a.75.75 0 010-1.5h2.031a.589.589 0 00.545-.825.586.586 0 00-.324-.317l-2.064-.825a2.085 2.085 0 01-1.313-1.94c0-.559.217-1.084.612-1.479a2.079 2.079 0 011.263-.603V4.5a.75.75 0 011.5 0h.75a.75.75 0 010 1.5h-2.033a.587.587 0 00-.418.174.59.59 0 00.198.967l2.062.824a2.08 2.08 0 011.146 1.119c.22.514.227 1.082.019 1.601a2.08 2.08 0 01-1.725 1.304V12a.75.75 0 01-.749.75z"}}),_c('path',{attrs:{"d":"M17.25 15c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 4.528 24 8.25 20.972 15 17.25 15zm0-12C14.355 3 12 5.355 12 8.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 3 17.25 3zM4.5 8.25c-1.861 0-3.375-1.514-3.375-3.375S2.639 1.5 4.5 1.5s3.375 1.514 3.375 3.375S6.361 8.25 4.5 8.25zM4.5 3c-1.034 0-1.875.841-1.875 1.875S3.466 6.75 4.5 6.75s1.875-.841 1.875-1.875S5.534 3 4.5 3z"}}),_c('path',{attrs:{"d":"M6.375 18a.742.742 0 01-.592-.29.745.745 0 01-.152-.554l.375-3a.75.75 0 01.744-.656h.75V12c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h.75c.377 0 .697.282.744.657l.375 3a.746.746 0 01-.743.843.751.751 0 01-.745-.657L1.588 15H.75a.75.75 0 01-.75-.75V12c0-2.481 2.019-4.5 4.5-4.5S9 9.519 9 12v2.25a.75.75 0 01-.75.75h-.838l-.293 2.343a.75.75 0 01-.744.657zM9 24a.754.754 0 01-.676-.425.754.754 0 01.09-.793l2.016-2.52L.92 22.48a.747.747 0 01-.9-.56.75.75 0 01.56-.901l22.5-5.25a.747.747 0 01.9.559.75.75 0 01-.56.901l-10.344 2.414 2.51 3.137A.753.753 0 0115 24H9zm4.439-1.5L12 20.701 10.56 22.5h2.879z"}})])
          )
        }
      }
    