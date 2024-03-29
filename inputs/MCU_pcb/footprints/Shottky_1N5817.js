// Shottky diode footprint for 1N5817 TH model
module.exports = {
  params: {
    designator: '4P4C_Extra_Safety_VCC-GND',
    side: 'F',
    flip: false,
    INPUT: undefined,
    POWER: { type: 'net', value: 'POWER'}
  },
  body: p => {
    const standard = `
    (module Shottky_1N5817_TH (layer F.Cu) (tedit 5970F8E5)

    ${p.at /* parametric position */}   

    ${'' /* footprint reference */}
    (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
    (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
    `
    function pins(def_neg, def_pos) {
      return `
        ${'' /* footprint outline */}
        (fp_line (start ${def_neg}2.3175 -1.18) (end ${def_neg}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}2.75 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 1.18) (end ${def_pos}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.6 -1.18) (end ${def_pos}1.6 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.72 -1.18) (end ${def_pos}1.72 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.83 -1.18) (end ${def_pos}1.83 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 -1.18) (end ${def_neg}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}2.75 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 1.18) (end ${def_pos}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_circle (center ${def_neg}5.75 0) (end ${def_neg}5.65 0) (stroke (width 0.2) (type solid)) (fill none) (layer ${p.side}.SilkS))
        
        ${'' /* footprint limits */}
        (fp_line (start ${def_neg}5 -1.43) (end ${def_neg}5 1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}5 1.43) (end ${def_pos}5 1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}5 -1.43) (end ${def_neg}5 -1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}5 1.43) (end ${def_pos}5 -1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        
        ${'' /* footprint fabrication info */}
        (fp_line (start ${def_neg}2.3175 -1.18) (end ${def_neg}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}4 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 1.18) (end ${def_pos}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.6 -1.18) (end ${def_pos}1.6 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.72 -1.18) (end ${def_pos}1.72 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.83 -1.18) (end ${def_pos}1.83 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 -1.18) (end ${def_neg}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}4 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 1.18) (end ${def_pos}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_circle (center ${def_neg}5.75 0) (end ${def_neg}5.65 0) (stroke (width 0.2) (type solid)) (fill none) (layer ${p.side}.Fab))
        
        ${'' /* footprint holes*/}
        (pad 1 thru_hole rect (at ${def_neg}4 0 ${p.rot}) (size 1.59 1.59) (drill 1.06) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.INPUT.str})
        (pad 2 thru_hole circle (at ${def_pos}4 0) (size 1.59 1.59) (drill 1.06) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.POWER.str})
        `
    }
    if (p.side == 'F') {
      if (p.flip == true) {
        return `
          ${standard}
          ${pins('', '-')})
          `
      } else {
        return `
          ${standard}
          ${pins('-', '')})
          `
      }
    } else {
      if (p.flip == true) {
        return `
          ${standard}
          ${pins('-', '')})
          `
      } else {
        return `
          ${standard}
          ${pins('', '-')})
          `
      }
    }
  }
}