
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
            children.concat([_c('path',{attrs:{"d":"M15.959 23.26a5.24 5.24 0 01-1.524-.227 5.181 5.181 0 01-2.439-1.579 5.234 5.234 0 01-3.946 1.797 5.233 5.233 0 01-3.976-1.824 5.214 5.214 0 01-.394-6.296 5.264 5.264 0 01-1.161-.523 5.205 5.205 0 01-2.372-3.233A5.206 5.206 0 01.755 7.41a5.21 5.21 0 014.489-2.522c.523 0 1.036.077 1.53.229a5.224 5.224 0 011.513-3.199A5.209 5.209 0 0111.998.377a5.258 5.258 0 015.225 4.735 5.352 5.352 0 011.575-.235 5.233 5.233 0 015.2 5.254 5.245 5.245 0 01-3.68 5.002 5.24 5.24 0 01-4.359 8.127zm-3.961-3.872c.277 0 .531.152.661.396a3.712 3.712 0 002.21 1.813c.356.108.722.163 1.089.163a3.74 3.74 0 002.423-6.575.753.753 0 01-.219-.821.755.755 0 01.688-.499 3.724 3.724 0 003.648-3.739 3.732 3.732 0 00-3.705-3.75 3.816 3.816 0 00-1.969.55.748.748 0 01-1.13-.768c.032-.184.05-.369.055-.55 0-2.053-1.682-3.731-3.75-3.731a3.754 3.754 0 00-3.75 3.75c.005.166.024.353.055.53a.754.754 0 01-1.129.772 3.727 3.727 0 00-1.932-.541 3.72 3.72 0 00-3.205 1.8 3.718 3.718 0 00-.435 2.829c.238.97.839 1.79 1.693 2.308a3.75 3.75 0 001.848.541.755.755 0 01.688.498.753.753 0 01-.218.821 3.738 3.738 0 00-.402 5.265 3.73 3.73 0 002.837 1.301 3.73 3.73 0 003.287-1.967.752.752 0 01.662-.396z"}}),_c('path',{attrs:{"d":"M11.998 17.252c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    