module.exports = {
  params: {
    designator: 'DRV2605L',
    side: 'F',
    reversible: false,
    flip: false,
    legends: true,
    Vin: undefined,
    GND: undefined,
    SCL: undefined,
    SDA: undefined,
    MOTOR_INT: undefined,
    MOTOR_PLUS: {type: 'net', value: 'MOTOR_PLUS'},
    MOTOR_MINUS: {type: 'net', value: 'MOTOR_MINUS'}
  },
  body: p => {
    const standard = `
      (module DRV2605L (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
    
      ${'' /* fooptrint mounting holes */}
      (pad "" thru_hole circle (at -6.39 -5.755) (size 3.5 3.5) (drill 2.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508))
      (pad "" thru_hole circle (at 6.39 -5.755) (size 3.5 3.5) (drill 2.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508))
      `

    function core(side) {
      return `
        ${'' /* footprint outline */}
        (fp_line (start -8.89 5.755) (end -8.89 -5.755) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_line (start -6.39 -8.255) (end 6.39 -8.255) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_line (start -6.39 8.255) (end 6.39 8.255) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_line (start 8.89 5.755) (end 8.89 -5.755) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_arc (start -6.39 -5.755) (end -6.39 -8.255) (angle -90) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_arc (start -6.39 5.755) (end -8.89 5.755) (angle -90) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_arc (start 6.39 -5.755) (end 8.89 -5.755) (angle -90) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
        (fp_arc (start 6.39 5.755) (end 6.39 8.255) (angle -90) (stroke (width 0.1) (type default)) (layer ${side}.SilkS))
      
        ${''/* footprint mounting holes outline */}
        (fp_circle (center -6.39 -5.755) (end -4.39 -5.755) (stroke (width 0.1) (type default)) (fill none) (layer ${side}.SilkS))
        (fp_circle (center 6.39 -5.755) (end 8.39 -5.755) (stroke (width 0.1) (type default)) (fill none) (layer ${side}.SilkS))
      
        ${''/* Output otuline representation*/}
        (fp_rect (start -3.66 -7.5) (end -1.35 -5.2) (stroke (width 0.1) (type default)) (fill none) (layer ${side}.SilkS))
        (fp_rect (start 1.33 -7.51) (end 3.64 -5.21) (stroke (width 0.1) (type default)) (fill none) (layer ${side}.SilkS))
      
        ${'' /* footprint limits */}
        (fp_line (start -9.39 5.755) (end -9.39 -5.755) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_line (start -6.39 -8.755) (end 6.39 -8.755) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_line (start -6.39 8.755) (end 6.39 8.755) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_line (start 9.39 5.755) (end 9.39 -5.755) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_arc (start -6.39 -5.755) (end -6.39 -8.755) (angle -90) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_arc (start -6.39 5.755) (end -9.39 5.755) (angle -90) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_arc (start 6.39 -5.755) (end 9.39 -5.755) (angle -90) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        (fp_arc (start 6.39 5.755) (end 6.39 8.755) (angle -90) (stroke (width 0.05) (type default)) (layer ${side}.CrtYd))
        `
    }

    function pins(def_neg, def_pos) {
      return `
        (pad "+" thru_hole rect (at ${def_pos}2.5 -6.35 ${p.rot + 90}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.MOTOR_PLUS.str})
        (pad "-" thru_hole rect (at ${def_neg}2.5 -6.35 ${p.rot + 90}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.MOTOR_MINUS.str})
        
        (pad "Vin" thru_hole rect (at ${def_neg}5.09 6.35 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.Vin.str})
        (pad "GND" thru_hole oval (at ${def_neg}2.55 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
        (pad "SCL" thru_hole oval (at 0.0 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SCL.str})
        (pad "SDA" thru_hole oval (at ${def_pos}2.53 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SDA.str})
        (pad "INT" thru_hole oval (at ${def_pos}5.07 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.MOTOR_INT.str})
        `
    }

    function outline(def_neg, def_pos, side) {
      return `
        ${''/* Pin_Header 1X05 fab traces*/}
        (fp_line (start ${def_neg}6.36 5.08) (end ${def_pos}6.34 5.08) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_neg}6.36 6.985) (end ${def_neg}6.36 5.08) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_neg}5.725 7.62) (end ${def_neg}6.36 6.985) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}6.34 5.08) (end ${def_pos}6.34 7.62) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}6.34 7.62) (end ${def_neg}5.725 7.62) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        
        ${''/* Pin_Header 1X05 representation*/}
        (fp_line (start ${def_neg}5.09 7.68) (end ${def_neg}6.42 7.68) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}6.42 7.68) (end ${def_neg}6.42 6.35) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}6.4 7.68) (end ${def_pos}6.4 5.02) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}3.82 7.68) (end ${def_pos}6.4 7.68) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}3.82 5.02) (end ${def_pos}6.4 5.02) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}3.82 7.68) (end ${def_neg}3.82 5.02) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        `
    }

    function legend(def_neg, def_pos, def_text_mirror, side) {
      return `
        ${'' /* footprint Symbol minus */}
        (fp_circle (center ${def_neg}2.52 -3.95) (end ${def_neg}1.7383 -3.95) (stroke (width 0.2032) (type solid)) (fill none) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}2.1232 -3.95) (end ${def_neg}2.9169 -3.95) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
      
        ${'' /* footprint Symbol plus*/}
        (fp_circle (center ${def_pos}2.52 -3.9217) (end ${def_pos}3.3017 -3.9217) (stroke (width 0.2032) (type solid)) (fill none) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}2.1232 -3.9217) (end ${def_pos}2.9169 -3.9217) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}2.52 -3.5249) (end ${def_pos}2.52 -4.3185) (stroke (width 0.3048) (type solid)) (layer ${side}.SilkS))
      
        ${''/* pin names */}
        (fp_text user "DRV2605L" (at -0.78 0 ${p.rot}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        
        (fp_text user "Vin" (at ${def_neg}5.12 3.25 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "SCL" (at 0.0 3.17 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "SDA" (at ${def_pos}2.54 3.17 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "Gnd" (at ${def_neg}2.62 3.16 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "INT" (at ${def_pos}5.1 3.86 ${p.rot + 90}) (layer ${side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        `
    }

    if (p.flip == true) {
      if (p.reversible = true) {
        if (p.legends = true) {
          return `
            ${standard}
            ${core('F')}
            ${core('B')}
            ${pins('', '-')}
            ${outline('', '-', 'F')}
            ${outline('', '-', 'B')}
            ${legend('', '-', '', 'F')}
            ${legend('', '-', '(justify mirror)', 'B')}
          )`
        } else {
          return `
            ${standard}
            ${core('F')}
            ${core('B')}
            ${pins('', '-')}
            ${outline('', '-', 'F')}
            ${outline('', '-', 'B')}
          )`
        }
      } else {
        if (p.legends = true) {
          if(p.side = 'F'){
            return `
              ${standard}
              ${core(p.side)}
              ${pins('', '-')}
              ${outline('', '-', p.side)}
              ${legend('', '-', '', p.side)}
            )`
          } else {
            return `
              ${standard}
              ${core(p.side)}
              ${pins('', '-')}
              ${outline('', '-', p.side)}
              ${legend('', '-', '(justify mirror)', p.side)}
            )`
          }
        } else {
          return `
            ${standard}
            ${core(p.side)}
            ${pins('', '-')}
            ${outline('', '-', p.side)}
          )`
        }
      }
    } else {
      if (p.reversible = true) {
        if (p.legends = true) {
          return `
            ${standard}
            ${core('F')}
            ${core('B')}
            ${pins('-', '')}
            ${outline('-', '', 'F')}
            ${outline('-', '', 'B')}
            ${legend('-', '', '', 'F')}
            ${legend('-', '', '(justify mirror)', 'B')}
          )`
        } else {
          return `
            ${standard}
            ${core('F')}
            ${core('B')}
            ${pins('-', '')}
            ${outline('-', '', 'F')}
            ${outline('-', '', 'B')}
          )`
        }
      } else {
        if (p.legends = true) {
          if (p.side = 'F'){
            return `
              ${standard}
              ${core(p.side)}
              ${pins('', '-')}
              ${outline('', '-', p.side)}
              ${legend('', '-', '', p.side)}
            )`
          } else {
            return `
              ${standard}
              ${core(p.side)}
              ${pins('', '-')}
              ${outline('', '-', p.side)}
              ${legend('', '-', '(justify mirror)', p.side)}
            )`
          }
        } else {
          return `
            ${standard}
            ${core(p.side)}
            ${pins('-', '')}
            ${outline('-', '', p.side)}
          )`
        }
      }
    }
  }
}