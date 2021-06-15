
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
            children.concat([_c('path',{attrs:{"d":"M2.25 13.5A2.252 2.252 0 010 11.25v-9l.002-.049A2.26 2.26 0 012.25 0h13.5c1.212 0 2.218.984 2.248 2.195L18 2.25v6a.75.75 0 01-1.5 0V3.514L9.359 7.408a.752.752 0 01-.718 0L1.5 3.513v7.737c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM9 5.896l7.392-4.032a.752.752 0 00-.642-.364H2.25a.75.75 0 00-.642.364L9 5.896z"}}),_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75v-9l.002-.04A2.26 2.26 0 018.25 10.5h13.5a2.26 2.26 0 012.248 2.201l.002.049v9A2.252 2.252 0 0121.75 24H8.25zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-7.439l-2.531 2.025a.756.756 0 01-.469.164h-9a.749.749 0 01-.469-.165L7.5 14.31v7.44zM19.237 15l3.194-2.555A.754.754 0 0021.75 12H8.25a.752.752 0 00-.68.445L19.237 15z"}})])
          )
        }
      }
    