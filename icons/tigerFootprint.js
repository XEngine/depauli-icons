
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
            children.concat([_c('path',{attrs:{"d":"M7.378 15.752a4.273 4.273 0 01-3.001-1.244C1.952 13.715.821 11.74.821 8.302a6.65 6.65 0 01.513-2.497A3.214 3.214 0 01.295 4.307a3.24 3.24 0 01.173-2.492A3.275 3.275 0 013.393.005c.506 0 .995.116 1.453.344a3.239 3.239 0 011.485 1.503 6.9 6.9 0 01.82-.084.734.734 0 01.704.006c.23.014.46.041.689.08a3.25 3.25 0 011.49-1.51 3.235 3.235 0 011.449-.341 3.25 3.25 0 012.928 1.811 3.263 3.263 0 01-.875 3.994c.334.788.509 1.622.52 2.484 0 3.445-1.129 5.419-3.55 6.212a4.289 4.289 0 01-3.015 1.248h-.113zm-.63-12.44c-2.517.33-4.393 2.414-4.427 4.999 0 2.864.775 4.261 2.675 4.818a.751.751 0 01.345.216 2.764 2.764 0 002.041.907h.102c.796 0 1.527-.323 2.058-.91a.754.754 0 01.345-.216c1.896-.556 2.669-1.953 2.669-4.822-.033-2.483-1.894-4.599-4.308-4.981v1.182h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-1.5 0v-.75h-.75a.75.75 0 010-1.5h.75V3.312zm3.273-1.025a6.672 6.672 0 012.754 2.184 1.773 1.773 0 00.292-1.989 1.76 1.76 0 00-2.366-.794c-.277.137-.51.344-.68.599zm-6.629-.783c-.19 0-.379.031-.562.093-.447.15-.809.465-1.019.887-.211.421-.244.9-.094 1.347.079.237.206.451.373.632A6.599 6.599 0 014.85 2.28a1.752 1.752 0 00-.673-.59 1.753 1.753 0 00-.785-.186z"}}),_c('path',{attrs:{"d":"M4.873 9.751a.717.717 0 01-.131-.012 1.126 1.126 0 01-.987-1.03.582.582 0 01-.007-.073l.001-.029a.5.5 0 01.005-.049 1.126 1.126 0 01.988-1.042.717.717 0 01.262 0 1.127 1.127 0 01.989 1.042.565.565 0 01.005.071v.003a.558.558 0 01-.006.076 1.129 1.129 0 01-.987 1.032.84.84 0 01-.132.011zM10.123 9.751a.717.717 0 01-.131-.012 1.127 1.127 0 01-.982-.976.742.742 0 01-.012-.134v-.003a.77.77 0 01.012-.135c.063-.509.472-.916.982-.976a.717.717 0 01.262 0c.515.061.926.474.983.99.003.017.004.035.005.052a.565.565 0 01.005.071v.003a.558.558 0 01-.006.076 1.129 1.129 0 01-.987 1.031.64.64 0 01-.131.013zM6.748 12.004a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM14.821 24.019a2.14 2.14 0 01-2.125-2.303c.016-1.336.967-1.897 1.536-2.232.127-.075.335-.197.398-.263.37-1.108.936-2.75 2.968-2.75 2.034 0 2.598 1.643 2.967 2.75.063.066.271.188.398.263.571.336 1.522.896 1.539 2.234a2.134 2.134 0 01-2.126 2.303c-.056 0-.112-.002-.168-.007-.726-.008-1.224-.259-1.625-.46-.346-.174-.596-.3-.984-.3-.389 0-.639.126-.985.301-.401.202-.898.454-1.624.46-.057.002-.113.004-.169.004zm2.777-6.049c-.886 0-1.13.481-1.554 1.753-.179.54-.642.812-1.049 1.052-.54.318-.799.492-.799.976a.6.6 0 01-.004.074.633.633 0 00.689.69.403.403 0 01.091-.004c.379-.004.625-.128.964-.299.408-.206.915-.462 1.662-.462.744 0 1.25.255 1.658.46.347.175.596.301.985.301a.6.6 0 01.074.004.638.638 0 00.689-.693.849.849 0 01-.003-.072c0-.483-.259-.657-.799-.975-.408-.241-.871-.513-1.051-1.052-.423-1.272-.666-1.753-1.553-1.753zM15.373 15.754a.712.712 0 01-.156-.018 1.116 1.116 0 01-.958-.99l-.004-.037a.49.49 0 01-.006-.077v-.003c0-.018.003-.054.006-.072a1.127 1.127 0 01.989-1.042.798.798 0 01.262 0c.513.06.923.47.983.983a.702.702 0 010 .261 1.124 1.124 0 01-1.116.995zM12.373 18.754a.712.712 0 01-.156-.018 1.117 1.117 0 01-.957-.978c-.003-.017-.004-.034-.006-.052a.567.567 0 01-.006-.071v-.007c0-.025.002-.048.005-.072a1.124 1.124 0 01.989-1.042.796.796 0 01.261 0c.513.06.923.47.983.983a.702.702 0 010 .261c-.066.57-.541.996-1.113.996zM22.873 18.754a.712.712 0 01-.156-.018 1.117 1.117 0 01-.957-.973.759.759 0 01-.012-.134v-.003c0-.044.004-.09.012-.134.063-.51.472-.917.982-.977a.798.798 0 01.262 0c.513.06.923.47.983.983a.702.702 0 010 .261 1.12 1.12 0 01-1.114.995zM19.873 15.754a.712.712 0 01-.156-.018 1.117 1.117 0 01-.957-.973.759.759 0 01-.012-.134v-.003c0-.044.004-.09.012-.134.063-.51.472-.917.982-.977a.798.798 0 01.262 0c.513.06.923.47.983.983a.702.702 0 010 .261 1.12 1.12 0 01-1.114.995z"}})])
          )
        }
      }
    