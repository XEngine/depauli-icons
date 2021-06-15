
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
            children.concat([_c('path',{attrs:{"d":"M16.75 10.499c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S19 7.99 19 6.749s-1.009-2.25-2.25-2.25zM7.877 11.321a.751.751 0 01-.653-1.119l3.8-6.741c.004-.01.024-.057.042-.105a1.381 1.381 0 00-.046-1.063 1.38 1.38 0 00-.784-.72 1.372 1.372 0 00-1.064.046 1.38 1.38 0 00-.72.784L6.149 9.947a.746.746 0 01-.718.531.744.744 0 01-.662-.397.743.743 0 01-.055-.571L7.03 1.927A2.905 2.905 0 019.758-.012c.338 0 .672.059.993.177a2.874 2.874 0 011.629 1.497 2.869 2.869 0 01-.03 2.501L8.531 10.94a.752.752 0 01-.654.381z"}}),_c('path',{attrs:{"d":"M12.25 23.999a.747.747 0 01-.712-.988l.711-2.134v-5.656a1.447 1.447 0 00-.22.179l-2.377 2.38A3.725 3.725 0 017 18.876a3.723 3.723 0 01-2.651-1.096l-1.94-1.939a2.235 2.235 0 01-.659-1.591c0-.601.234-1.166.659-1.591C2.834 12.233 3.399 12 4 12c.602 0 1.167.234 1.591.658L7 14.067l2.031-2.031a5.256 5.256 0 013.701-1.538H17.5a3.754 3.754 0 013.75 3.75v6.628l.711 2.134a.746.746 0 01-.712.988.748.748 0 01-.711-.513l-.75-2.25a.74.74 0 01-.039-.237v-6.75a2.252 2.252 0 00-2.25-2.25h-4.758c-.994 0-1.956.4-2.649 1.097L7.53 15.657a.744.744 0 01-1.06 0l-1.939-1.94a.747.747 0 00-1.062 0 .747.747 0 000 1.062l1.94 1.939c.425.425.99.659 1.591.659.602 0 1.167-.234 1.591-.657l2.379-2.379A2.856 2.856 0 0113 13.5a.75.75 0 01.75.75V21c0 .08-.013.16-.038.237l-.75 2.251a.75.75 0 01-.712.511z"}}),_c('path',{attrs:{"d":"M16.75 23.999a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    