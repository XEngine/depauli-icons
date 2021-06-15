
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21.263A2.252 2.252 0 010 19.013v-3.75a.75.75 0 01.75-.75c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25a.75.75 0 01-.75-.75v-3.75a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 5.513v3.75a.75.75 0 01-.75.75c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25a.75.75 0 01.75.75v3.75a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3.075a3.745 3.745 0 01-3-3.675c0-1.8 1.268-3.324 3-3.675V5.513a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.075c1.732.35 3 1.875 3 3.675 0 1.8-1.268 3.324-3 3.675v3.075z"}}),_c('path',{attrs:{"d":"M13.947 16.89c-.284 0-.563-.053-.829-.158L7.43 14.539a2.248 2.248 0 01-.165-4.149 2.233 2.233 0 011.826-.032l.036.016 1.269.607 3.371-3.026a.745.745 0 01.777-.139l2.092.825a.75.75 0 01.3 1.18l-2.341 2.794 1.982.668.923-.828a.748.748 0 011.25.599.747.747 0 01-.248.518l-3.055 2.742a2.252 2.252 0 01-1.5.576zm-5.733-5.211a.743.743 0 00-.316.071.74.74 0 00-.388.423.74.74 0 00.025.573c.085.182.235.32.422.388l5.706 2.2a.75.75 0 00.782-.137l.85-.763-2.219-.749a.749.749 0 01-.335-1.192l2.378-2.838-.694-.273-3.399 3.051a.748.748 0 01-.825.119l-1.716-.822-.013-.004a.744.744 0 00-.258-.047z"}})])
          )
        }
      }
    