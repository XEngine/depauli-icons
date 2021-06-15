
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 014.5 0H12a.75.75 0 010 1.5H4.5a2.252 2.252 0 00-2.25 2.25v15h12v-1.5a.75.75 0 011.5 0v3A3.754 3.754 0 0112 24H4.5zm-2.25-3.75A2.252 2.252 0 004.5 22.5H12a2.252 2.252 0 002.25-2.25h-12z"}}),_c('path',{attrs:{"d":"M8.227 16.722a6.159 6.159 0 01-1.224-.119.75.75 0 01-.573-.572c-.057-.26-.52-2.578.804-3.893a2.299 2.299 0 011.682-.723 2.325 2.325 0 011.828.884c.449.358.748.865.843 1.433a2.308 2.308 0 01-.703 2.082c-.755.749-1.862.908-2.657.908zm-.399-1.517c.123.01.264.017.413.017.508 0 1.197-.084 1.596-.483l.02-.019a.821.821 0 00.25-.741.82.82 0 00-.335-.536.746.746 0 01-.179-.18.825.825 0 00-1.281-.085c-.518.517-.527 1.483-.484 2.027z"}}),_c('path',{attrs:{"d":"M14.598 15.995a1.16 1.16 0 01-.504-.117 1.377 1.377 0 01-.739-.818l-.728-2.259-2.169-2.171-2.259-.727a1.402 1.402 0 01-.836-.761c-.195-.4-.13-.89.173-1.236l1.611-1.613.038-.036a2.323 2.323 0 011.52-.571c.373 0 .746.092 1.08.267l.476.225 2.015-3.338A4.131 4.131 0 0117.67.927l3.46.131.84-.838c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.839.84.131 3.415v.037a4.124 4.124 0 01-1.897 3.392l-3.334 2.014.219.517a2.31 2.31 0 01-.35 2.61l-1.576 1.576a1.15 1.15 0 01-.786.314zm.078-1.727l1.202-1.202a.82.82 0 00.09-.903.594.594 0 01-.027-.057l-.146-.345-1.613.974.494 1.533zm-1.275-2.814l2.335-1.411 3.896-2.353a2.614 2.614 0 001.189-2.134l-.116-3.012-3.037-.116a2.603 2.603 0 00-2.12 1.206l-3.752 6.215 1.605 1.605zm-2.887-2.381l.968-1.603-.366-.174a.883.883 0 00-.413-.107.802.802 0 00-.517.187L8.981 8.579l1.533.494z"}}),_c('path',{attrs:{"d":"M17.719 7.781c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    