
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
            children.concat([_c('path',{attrs:{"d":"M2.75 23.999A2.754 2.754 0 010 21.249v-4a.75.75 0 01.75-.75h4.202L7.654 3.533A4.44 4.44 0 0114.432.726a4.412 4.412 0 011.915 2.807L19.049 16.5h4.202a.75.75 0 01.75.75v4a2.754 2.754 0 01-2.75 2.75H2.75zm18.5-1.5c.689 0 1.25-.561 1.25-1.25v-3.25h-4.647l2.812 4.5h.585zm-2.353 0l-2.453-3.925-2.944 3.925h5.397zm-8.397 0l-2.944-3.925-2.453 3.925H10.5zm-9-1.25c0 .689.561 1.25 1.25 1.25h.584l2.812-4.5H1.5v3.25zm10.5.75l3-4H9l3 4zm5.516-5.5l-2.638-12.66A2.924 2.924 0 0013.61 1.98a2.926 2.926 0 00-2.211-.417 2.94 2.94 0 00-2.277 2.276l-2.638 12.66h11.032z"}})])
          )
        }
      }
    