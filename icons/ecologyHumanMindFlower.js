
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
            children.concat([_c('path',{attrs:{"d":"M15.464 24.005a.75.75 0 01-.75-.75v-3.75a.747.747 0 01.75-.75c.041 0 .082.003.123.01l1.006.168a2.23 2.23 0 001.678-.388 2.236 2.236 0 00.943-1.831v-2.459c0-.345.234-.645.569-.728l.935-.233a.752.752 0 00.441-1.144L19.34 9.42a.745.745 0 01-.126-.416v-.75c0-1.698-.754-3.321-2.124-4.571-1.548-1.411-3.661-2.189-5.952-2.189-.306 0-.616.014-.923.042-4.528.407-7.88 4.422-7.473 8.949a8.252 8.252 0 004.096 6.405.75.75 0 01.376.65v5.714a.75.75 0 01-1.5 0v-5.292a9.782 9.782 0 01-4.466-7.342C.766 5.27 4.728.525 10.079.044c.351-.032.708-.049 1.059-.049 2.666 0 5.139.917 6.963 2.581 1.685 1.537 2.613 3.554 2.613 5.679v.523l1.693 2.54a2.252 2.252 0 01-1.326 3.431l-.367.091v1.873a3.723 3.723 0 01-1.571 3.052 3.718 3.718 0 01-2.171.699c-.208 0-.418-.018-.625-.052l-.132-.022v2.864a.753.753 0 01-.751.751z"}}),_c('path',{attrs:{"d":"M9.637 15.08a2.774 2.774 0 01-2.694-2.839 2.78 2.78 0 01.228-1.109 2.748 2.748 0 01-1.449-2.509C5.679 7.135 6.88 5.871 8.399 5.824c.112 0 .22.007.326.02a2.77 2.77 0 012.596-2.089 2.793 2.793 0 012.64 2.088c.099-.012.199-.018.3-.019 1.532.046 2.739 1.314 2.703 2.827a2.744 2.744 0 01-1.445 2.477c.154.359.233.745.231 1.138.043 1.496-1.155 2.764-2.67 2.813a2.729 2.729 0 01-1.73-.636 2.687 2.687 0 01-1.695.636h-.006l-.012.001zM8.425 7.324a1.259 1.259 0 00-1.204 1.297c-.018.731.494 1.297 1.192 1.335a.749.749 0 01.467 1.301c-.28.257-.439.622-.437 1.001a1.273 1.273 0 001.223 1.322c.42-.008.813-.262 1.009-.665a.754.754 0 01.674-.422c.285 0 .55.166.675.423.196.402.595.657 1.043.663.664-.022 1.204-.604 1.184-1.297.002-.4-.157-.769-.437-1.026a.75.75 0 01.463-1.301 1.258 1.258 0 001.188-1.294v-.044a1.263 1.263 0 00-1.223-1.294 1.083 1.083 0 00-.567.178.753.753 0 01-.82 0 .747.747 0 01-.329-.752 1.264 1.264 0 00-1.204-1.495c-.659.021-1.198.603-1.177 1.297.002.067.008.133.019.197a.75.75 0 01-.742.876.746.746 0 01-.41-.122 1.093 1.093 0 00-.587-.178z"}}),_c('path',{attrs:{"d":"M11.34 10.542a1.12 1.12 0 01-.869-.41l-.007-.008a.778.778 0 01-.062-.091 1.122 1.122 0 01.139-1.405.835.835 0 01.096-.092 1.127 1.127 0 01.829-.238 1.12 1.12 0 01.753.419 1.119 1.119 0 01-.084 1.488.75.75 0 01-.096.091c-.197.16-.446.246-.699.246z"}})])
          )
        }
      }
    