module.exports = {
  params: {
    designator: 'PinHeader_2x05_KeyMatrix',
    side: 'F',
    flip: false,
    reversible: false,
    P1: undefined,
    P2: undefined,
    P3: undefined,
    P4: undefined,
    P5: undefined,
    P6: undefined,
    P7: undefined,
    P8: undefined,
    P9: undefined,
    P10: undefined
  },
  body: p => {
    const standard = `
      (module PinHeader_2x20_P2.54 (layer F.Cu) (tedit 20221018)
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      `

    function outline(def_neg, def_pos, side){
      return `
        ${'' /* component outline*/}
        (fp_line (start ${def_neg}1.33 -1.33) (end 0 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 0) (end ${def_neg}1.33 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_neg}1.33 11.49) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_pos}1.27 1.27) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 11.49) (end ${def_pos}3.87 11.49) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}1.27 -1.33) (end ${def_pos}3.87 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}1.27 1.27) (end ${def_pos}1.27 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}3.87 -1.33) (end ${def_pos}3.87 11.49) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
    
        ${'' /* footprint limits*/}
        (fp_line (start ${def_neg}1.8 -1.8) (end ${def_neg}1.8 11.95) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_neg}1.8 11.95) (end ${def_pos}4.35 11.95) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_pos}4.35 -1.8) (end ${def_neg}1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_pos}4.35 11.95) (end ${def_pos}4.35 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
    
         ${''/* footprint fabrication outline*/}
        (fp_line (start ${def_neg}1.27 0) (end 0 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_neg}1.27 11.43) (end ${def_neg}1.27 0) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start 0 -1.27) (end ${def_pos}3.81 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}3.81 -1.27) (end ${def_pos}3.81 11.43) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}3.81 11.43) (end ${def_neg}1.27 11.43) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
      `
    }
    function pins(def_neg, def_pos) {
      return `
        ${'' /* pin holes*/}
        (pad "P1" thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P1.str})
        (pad "P2" thru_hole oval (at ${def_pos}2.54 0) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P2.str})
        (pad "P3" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P3.str})
        (pad "P4" thru_hole oval (at ${def_pos}2.54 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P4.str})
        (pad "P5" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P5.str})
        (pad "P6" thru_hole oval (at ${def_pos}2.54 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P6.str})
        (pad "P7" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P7.str})
        (pad "P8" thru_hole oval (at ${def_pos}2.54 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P8.str})
        (pad "P9" thru_hole oval (at 0 10.16) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P9.str})
        (pad "P10" thru_hole oval (at ${def_pos}2.54 10.16) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.P10.str})
        `
    }
    if(p.reversible == true) {
      if(p.flip == true) {
        return `
        ${standard}
        ${pins('', '-')}
        ${outline('', '-', 'F')}
        ${outline('', '-', 'B')})
        `
      } else {
        return `
        ${standard}
        ${pins('-', '')}
        ${outline('-', '', 'F')}
        ${outline('-', '', 'B')})
        `
      }
    } else {
      if (p.side == 'F') {
        if(p.flip == true) {
          return `
          ${standard}
          ${pins('', '-')}
          ${outline('', '-', 'F')})
          `
        } else{
          return `
          ${standard}
          ${pins('-', '')}
          ${outline('-', '', 'F')})
          `
        }
      }
      else {
        if(p.flip == true) {
          return `
          ${standard}
          ${pins('-', '')}
          ${outline('-', '', 'B')})
          `
        } else {
          return `
          ${standard}
          ${pins('', '-')}
          ${outline('', '-', 'B')})
          `
        }
      }
    }
  }
}