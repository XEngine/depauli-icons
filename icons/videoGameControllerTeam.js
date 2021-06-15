
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
            children.concat([_c('path',{attrs:{"d":"M5.25 18a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0V15h.75a.75.75 0 010 1.5H6v.75a.75.75 0 01-.75.75zM17.25 18a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262A1.126 1.126 0 0117.25 18zM19.5 15.75a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993z"}}),_c('path',{attrs:{"d":"M3.786 24.003A3.794 3.794 0 010 20.211v-5.96a3.754 3.754 0 013.75-3.75h16.5a3.754 3.754 0 013.75 3.75v5.959a3.77 3.77 0 01-1.424 2.963 3.742 3.742 0 01-2.359.83 3.766 3.766 0 01-2.967-1.424l-1.636-2.045a.745.745 0 00-.585-.282H8.972a.748.748 0 00-.586.281l-1.637 2.048a3.77 3.77 0 01-2.96 1.424h-.003zM3.75 12a2.252 2.252 0 00-2.25 2.25v5.961a2.27 2.27 0 00.67 1.619 2.276 2.276 0 001.617.673c.701 0 1.353-.313 1.79-.86l1.637-2.048a2.24 2.24 0 011.757-.845h6.058a2.24 2.24 0 011.757.845l1.636 2.045a2.276 2.276 0 001.795.862c.52 0 1.012-.174 1.422-.502.547-.438.861-1.09.86-1.79v-5.96a2.252 2.252 0 00-2.25-2.25H3.75zM23.25 9.75a.749.749 0 01-.662-.397 3.476 3.476 0 00-2.069-1.701 3.511 3.511 0 00-1.024-.154c-.567 0-1.135.143-1.642.414a3.49 3.49 0 00-1.441 1.44.781.781 0 01-.184.227.637.637 0 01-.137.089.813.813 0 01-.196.066 1.237 1.237 0 01-.144.016.751.751 0 01-.173-.022c-.016-.002-.016-.003-.031-.007a.765.765 0 01-.188-.084l-.021-.014a.672.672 0 01-.103-.082l-.037-.038a.746.746 0 01-.109-.152 3.474 3.474 0 00-2.068-1.7 3.511 3.511 0 00-1.024-.154c-.567 0-1.135.143-1.642.414a3.488 3.488 0 00-1.443 1.442l-.021.035a.651.651 0 01-.112.142.585.585 0 01-.145.113l-.025.016a.745.745 0 01-.308.087.308.308 0 01-.098.001.683.683 0 01-.127-.019c-.016-.002-.019-.003-.035-.008a.692.692 0 01-.205-.097.739.739 0 01-.103-.082l-.037-.038a.732.732 0 01-.097-.132l-.008-.014a3.49 3.49 0 00-2.072-1.705 3.511 3.511 0 00-1.024-.154c-.567 0-1.135.143-1.642.414a3.487 3.487 0 00-1.441 1.441.747.747 0 01-1.014.309.75.75 0 01-.309-1.015 4.983 4.983 0 012.723-2.353 3.382 3.382 0 01-1.687-2.919C1.125 1.514 2.639 0 4.5 0s3.375 1.514 3.375 3.375a3.38 3.38 0 01-1.686 2.919 4.92 4.92 0 012.06 1.402 4.928 4.928 0 012.063-1.401 3.384 3.384 0 01-1.687-2.92A3.379 3.379 0 0112 0a3.379 3.379 0 013.375 3.375 3.38 3.38 0 01-1.686 2.919 4.928 4.928 0 012.06 1.402 4.938 4.938 0 012.063-1.402 3.382 3.382 0 01-1.687-2.919C16.125 1.514 17.639 0 19.5 0s3.375 1.514 3.375 3.375a3.38 3.38 0 01-1.686 2.919 4.962 4.962 0 012.723 2.354.751.751 0 01-.662 1.102zM19.5 1.5c-1.034 0-1.875.841-1.875 1.875S18.466 5.25 19.5 5.25s1.875-.841 1.875-1.875S20.534 1.5 19.5 1.5zm-7.5 0c-1.034 0-1.875.841-1.875 1.875S10.966 5.25 12 5.25s1.875-.841 1.875-1.875S13.034 1.5 12 1.5zm-7.5 0c-1.034 0-1.875.841-1.875 1.875S3.466 5.25 4.5 5.25s1.875-.841 1.875-1.875S5.534 1.5 4.5 1.5z"}})])
          )
        }
      }
    