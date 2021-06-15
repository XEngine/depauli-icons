
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24A4.505 4.505 0 010 19.5c0-1.644.885-3.136 2.322-3.932L6.494.723a.755.755 0 01.722-.547c.069 0 .138.009.204.028 1.347.379 2.468 1.262 3.155 2.486s.857 2.641.478 3.989L8.714 15H18v-1.57c-1.322-.245-2.25-1.124-2.25-2.18 0-.57.265-1.096.744-1.5-.479-.404-.744-.93-.744-1.5s.265-1.096.744-1.5c-.479-.404-.744-.93-.744-1.5s.265-1.096.744-1.5c-.479-.404-.744-.93-.744-1.5 0-1.262 1.318-2.25 3-2.25a.75.75 0 010 1.5c-.845 0-1.5.403-1.5.75s.655.75 1.5.75c1.682 0 3 .988 3 2.25 0 .57-.265 1.096-.744 1.5.479.404.744.93.744 1.5s-.265 1.096-.744 1.5c.479.404.744.93.744 1.5 0 1.056-.928 1.935-2.25 2.18V15c2.481 0 4.5 2.019 4.5 4.5S21.981 24 19.5 24h-15zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h15c1.654 0 3-1.346 3-3s-1.346-3-3-3h-15zm-.468-1.474c.158-.017.314-.026.468-.026h2.656l2.453-8.727c.482-1.716-.341-3.547-1.895-4.349L4.032 15.026zM18.75 10.5c-.845 0-1.5.403-1.5.75s.655.75 1.5.75 1.5-.403 1.5-.75-.655-.75-1.5-.75zm0-3c-.845 0-1.5.403-1.5.75s.655.75 1.5.75 1.5-.403 1.5-.75-.655-.75-1.5-.75zm0-3c-.845 0-1.5.403-1.5.75s.655.75 1.5.75 1.5-.403 1.5-.75-.655-.75-1.5-.75z"}}),_c('path',{attrs:{"d":"M5.25 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.717.717 0 010 .262c-.06.513-.47.922-.983.982a.796.796 0 01-.13.011zM18.75 20.625a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}})])
          )
        }
      }
    