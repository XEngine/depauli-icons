
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
            children.concat([_c('path',{attrs:{"d":"M10.031 23.965c-1.878 0-5.284-.766-6.993-5.894a.745.745 0 01.076-.635c.014-.022 1.424-2.275 3.018-4.521a.75.75 0 011.223.868 104.069 104.069 0 00-2.778 4.145c.652 1.78 2.182 4.561 5.38 4.561.242 0 .454-.017.625-.039l.675-4.722a.747.747 0 011.352-.33c.018.025 1.973 2.695 3.906 2.854.059.005.118.007.176.007.553 0 1.052-.231 1.528-.706 1.742-1.742.063-4.818-1.594-7.304-.988-1.482-2.249-2.022-3.456-2.446l-.444-.153C10.894 9.028 9 8.384 9 5.084V3.763a.872.872 0 00-.75-.776.872.872 0 00-.75.776v2.071c0 1.231-1.132 1.875-2.25 1.875S3 7.065 3 5.834V2.263a.872.872 0 00-.75-.776.872.872 0 00-.75.776v4.321c0 1.812.157 3 2.25 3H9a.75.75 0 010 1.5H3.75C0 11.084 0 8.044 0 6.584v-4.35l.002-.053A2.372 2.372 0 012.199-.015l.051-.001a2.37 2.37 0 012.25 2.25v3.6c0 .311.592.375.75.375S6 6.145 6 5.834v-2.1l.002-.053a2.372 2.372 0 012.197-2.196l.051-.001a2.371 2.371 0 012.25 2.25v1.35c0 2.122.874 2.518 2.468 3.065a8.274 8.274 0 00.532-3.055v-1.36l.002-.058a2.37 2.37 0 012.248-2.192A2.37 2.37 0 0118 3.734v2.1c0 .311.592.375.75.375s.75-.064.75-.375v-3.6l.002-.058A2.37 2.37 0 0121.75-.016 2.37 2.37 0 0124 2.234v4.35c0 1.64-1.309 4.158-3.676 4.42a.75.75 0 11-.165-1.49c1.537-.171 2.341-1.998 2.341-2.93V2.263a.872.872 0 00-.75-.776.872.872 0 00-.75.776v3.571c0 1.231-1.132 1.875-2.25 1.875-.54 0-1.053-.145-1.447-.407-.518-.346-.803-.867-.803-1.468V3.763a.872.872 0 00-.75-.776.872.872 0 00-.75.776v1.321a9.73 9.73 0 01-.622 3.572c1.173.475 2.459 1.207 3.496 2.762 1.16 1.74 4.241 6.362 1.406 9.196-.76.76-1.63 1.146-2.586 1.146-.1 0-.202-.004-.304-.013-1.548-.128-2.959-1.245-3.882-2.175l-.517 3.617a.751.751 0 01-.536.615c-.004.002-.565.161-1.424.161z"}}),_c('path',{attrs:{"d":"M14.625 14.834a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}})])
          )
        }
      }
    