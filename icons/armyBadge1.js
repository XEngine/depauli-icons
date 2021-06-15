
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
            children.concat([_c('path',{attrs:{"d":"M9.522 10.049a1.23 1.23 0 01-1.216-1.436l.365-2.116-1.542-1.494a1.23 1.23 0 01-.311-1.262 1.23 1.23 0 01.996-.833L9.949 2.6l.944-1.914a1.236 1.236 0 011.669-.552c.236.12.424.308.544.544l.952 1.922 2.136.308a1.229 1.229 0 01.683 2.096l-1.545 1.498.364 2.111a1.23 1.23 0 01-1.792 1.293l-1.902-.994-1.904.995a1.246 1.246 0 01-.576.142zm.302-4.523c.291.289.42.695.349 1.091L9.877 8.33l1.55-.81a1.229 1.229 0 011.152.001l1.547.808-.296-1.717c-.067-.4.065-.805.355-1.086l1.25-1.212-1.727-.249a1.233 1.233 0 01-.929-.67l-.777-1.567-.771 1.563a1.242 1.242 0 01-.932.674l-1.726.249 1.251 1.212z"}}),_c('path',{attrs:{"d":"M12.004 24a2.245 2.245 0 01-1.495-.569L5.256 18.76a2.255 2.255 0 01-.752-1.683V13.31a.71.71 0 010-.113v-2.771a1.49 1.49 0 01.442-1.061 1.5 1.5 0 012.052-.06l4.506 4.001a.748.748 0 00.998 0l4.5-4a1.492 1.492 0 011.085-.376 1.495 1.495 0 011.41 1.496v6.656c0 .639-.274 1.25-.75 1.676l-5.248 4.672c-.411.367-.942.57-1.495.57zm-6-6.922c0 .215.091.419.25.562l5.251 4.67a.748.748 0 00.998 0l5.247-4.671a.756.756 0 00.249-.557v-2.155l-4.505 4.004a2.245 2.245 0 01-2.99 0l-4.5-4.001v2.148zm5.496.732a.746.746 0 00.997.001l5.502-4.89v-2.493l-4.5 4a2.245 2.245 0 01-2.991 0L6.007 10.43h-.003l.001 2.491L11.5 17.81z"}})])
          )
        }
      }
    