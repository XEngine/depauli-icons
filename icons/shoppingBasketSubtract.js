
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
            children.concat([_c('path',{attrs:{"d":"M17.246 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.968 24 17.246 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.141 12 17.246 12z"}}),_c('path',{attrs:{"d":"M14.246 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM4.31 18a2.191 2.191 0 01-2.116-1.727L.06 7.287c-.15-.561-.068-1.159.231-1.675A2.22 2.22 0 012.146 4.5h1.289L7.716.22a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L5.557 4.5h11.379l-3.219-3.218a.752.752 0 01.53-1.281c.2 0 .388.078.53.219l4.28 4.28h1.263a2.244 2.244 0 012.181 2.314c-.006.166-.03.332-.073.492l-.296 1.239a.748.748 0 01-.903.556.751.751 0 01-.556-.904l.3-1.256A.734.734 0 0020.294 6H2.172a.729.729 0 00-.584.365.732.732 0 00-.074.557l2.143 9.019a.697.697 0 00.667.559h3.547a.75.75 0 010 1.5H4.31z"}})])
          )
        }
      }
    