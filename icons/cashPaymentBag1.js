
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
            children.concat([_c('path',{attrs:{"d":"M12.676 24c-5.481 0-7.426-2.729-7.426-5.066 0-3.592 2.554-6.517 3.617-7.579a27.468 27.468 0 01-1.367-.708v.067C7.5 11.447 6.984 12 6.3 12H4.5a.75.75 0 010-1.5H6v-6H4.5a.75.75 0 010-1.5h1.8c.637 0 1.128.48 1.193 1.138h.628a.63.63 0 00.45-.238l.947-1.333-.365-.682A1.33 1.33 0 019.147.668C9.335.274 9.737.015 10.19 0h5.842c.471.011.882.273 1.08.685.188.364.186.811-.009 1.189l-.998 1.877.333-.001c1.518 0 2.312.943 2.312 1.875 0 .214-.605 3.201-1.073 4.721-.185.598-.385 1.037-.74 1.31 1.107 1.178 3.313 3.946 3.313 7.278 0 3.5-3.804 5.066-7.574 5.066zm-2.213-12.079c-1.116.896-3.713 3.861-3.713 7.013 0 2.632 3.192 3.566 5.926 3.566 3.023 0 6.074-1.103 6.074-3.566 0-3.224-2.572-6.064-3.61-6.934h-3.896a3.98 3.98 0 01-.781-.079zm.174-1.499c.219.053.418.078.607.078H15.4c.273 0 .582 0 .634-.037.047-.034.133-.313.209-.558.448-1.453.91-3.841 1.001-4.32-.037-.141-.271-.334-.804-.334l-5.024.02a.75.75 0 01-.664-.396l-.444-.83-.542.761c-.412.513-.997.81-1.619.832H7.5v3.301l.306.167c1.009.552 1.882 1.03 2.601 1.25a.736.736 0 01.23.066zm1.225-6.654l2.541-.01L15.604 1.5h-4.956l.389.727a.617.617 0 01.038.072l.787 1.469z"}}),_c('path',{attrs:{"d":"M12.937 21.75a.75.75 0 01-.75-.75v-.354a2.987 2.987 0 01-1.705-1.098.745.745 0 01-.146-.555.746.746 0 011.34-.353 1.48 1.48 0 001.172.581l.059-.001c.775 0 1.343-.421 1.343-.797 0-.376-.562-.796-1.313-.796-1.551 0-2.812-1.031-2.812-2.298 0-1.052.849-1.943 2.062-2.212v-.367a.75.75 0 011.5 0v.354a2.98 2.98 0 011.705 1.098.751.751 0 01-.597 1.204.754.754 0 01-.597-.296 1.463 1.463 0 00-1.176-.58l-.056.001c-.773 0-1.341.421-1.341.797 0 .377.561.798 1.312.798 1.551 0 2.813 1.03 2.813 2.296 0 1.052-.85 1.943-2.063 2.212V21a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    