
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
            children.concat([_c('path',{attrs:{"d":"M12 15.75a.752.752 0 01-.53-1.281l3.75-3.75a.744.744 0 01.53-.22c.2 0 .389.078.53.22.142.141.22.33.22.53s-.078.389-.22.53l-3.75 3.75a.74.74 0 01-.53.221zM18 14.25a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.74.74 0 01-.53.221zM9 14.25a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.74.74 0 01-.53.221zM.75 24a.75.75 0 010-1.5h1.392C1.74 21.093.347 20.133.332 20.123a.75.75 0 01.835-1.247c.05.034 1.09.736 1.833 1.917a6.989 6.989 0 011.834-1.917.747.747 0 011.039.208.75.75 0 01-.208 1.04c-.014.009-1.406.97-1.808 2.376h7.284c-.402-1.407-1.795-2.367-1.81-2.377a.75.75 0 01.835-1.247 6.965 6.965 0 011.833 1.916 6.855 6.855 0 011.834-1.916.749.749 0 11.832 1.248c-.014.009-1.406.97-1.808 2.376h7.284c-.402-1.408-1.794-2.366-1.81-2.377a.751.751 0 01.834-1.247 6.832 6.832 0 011.833 1.915 6.83 6.83 0 011.834-1.915.749.749 0 11.832 1.248c-.014.009-1.406.97-1.808 2.376h1.392a.75.75 0 01.002 1.5H.75zM12.754 9a2.995 2.995 0 01-2.01-.769 2.974 2.974 0 01-.989-2.072 2.983 2.983 0 01.764-2.165A2.981 2.981 0 0112.749 3c.326 0 .65.053.956.155A4.512 4.512 0 0118 0c2.481 0 4.5 2.019 4.5 4.5S20.481 9 18 9h-5.246zm-.084-4.498a1.49 1.49 0 00-1.036.495 1.485 1.485 0 00-.382 1.082c.021.4.197.768.495 1.036.275.248.631.385 1.003.385H18c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.996 2.996 0 00-2.997 2.862.751.751 0 01-1.251.522 1.495 1.495 0 00-1-.385l-.082.003z"}})])
          )
        }
      }
    