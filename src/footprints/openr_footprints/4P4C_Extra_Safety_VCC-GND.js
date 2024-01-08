
module.exports = {
  params: {
    designator: '4P4C_Extra_Safety_VCC-GND',
    side: 'F',
    flip: false,
    VOUT: undefined,
    VIN: undefined,
    POWER: { type: 'net', value: 'POWER'}
  },
  body: p => {
    const standard = `
    (module 4P4C_Extra_Safety_VCC-GND (layer F.Cu) (tedit 5970F8E5)

    ${p.at /* parametric position */}   

    ${'' /* footprint reference */}
    (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
    (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
    `
    function pins(def_neg, def_pos) {
      return `
        ${'' /* footprint outline */}
        (fp_line (start ${def_neg}2.6 1.9) (end ${def_pos}2.6 1.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.6 4.5) (end ${def_neg}2.6 1.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.6 7.1) (end ${def_neg}2.6 5.77) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 -1.18) (end ${def_neg}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}4.082 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}2.3175 1.18) (end ${def_pos}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}1.27 7.1) (end ${def_neg}2.6 7.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 0 4.5) (end ${def_neg}2.6 4.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 0 7.1) (end 0 4.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 0 7.1) (end ${def_pos}2.6 7.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.6 -1.18) (end ${def_pos}1.6 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.72 -1.18) (end ${def_pos}1.72 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}1.83 -1.18) (end ${def_pos}1.83 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 -1.18) (end ${def_neg}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}4.082 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.3175 1.18) (end ${def_pos}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}2.6 7.1) (end ${def_pos}2.6 1.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_circle (center ${def_neg}6.992 0) (end ${def_neg}6.892 0) (stroke (width 0.2) (type solid)) (fill none) (layer ${p.side}.SilkS))
        
        ${'' /* footprint limits */}
        (fp_line (start ${def_neg}6.242 -1.43) (end ${def_neg}6.242 1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}3.07 1.43) (end ${def_neg}6.242 1.43) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}3.07 1.43) (end ${def_neg}3.07 7.58) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_neg}3.07 7.58) (end ${def_pos}3.08 7.58) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}3.08 1.43) (end ${def_pos}6.242 1.43) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}3.08 7.58) (end ${def_pos}3.08 1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}6.242 -1.43) (end ${def_neg}6.242 -1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start ${def_pos}6.242 1.43) (end ${def_pos}6.242 -1.43) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
        
        ${'' /* footprint fabrication info */}
        (fp_line (start ${def_neg}2.54 1.96) (end ${def_pos}2.54 1.96) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.54 5.77) (end ${def_neg}2.54 1.96) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 -1.18) (end ${def_neg}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}5.197 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 0) (end ${def_neg}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}2.3175 1.18) (end ${def_pos}2.3175 1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}1.27 7.04) (end ${def_neg}2.54 5.77) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.6 -1.18) (end ${def_pos}1.6 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.72 -1.18) (end ${def_pos}1.72 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}1.83 -1.18) (end ${def_pos}1.83 1.18) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 -1.18) (end ${def_neg}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}2.3175 -1.18) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 0) (end ${def_pos}5.197 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.3175 1.18) (end ${def_pos}2.3175 0) (stroke (width 0.127) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.54 1.96) (end ${def_pos}2.54 7.04) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}2.54 7.04) (end ${def_neg}1.27 7.04) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_circle (center ${def_neg}6.992 0) (end ${def_neg}6.892 0) (stroke (width 0.2) (type solid)) (fill none) (layer ${p.side}.Fab))
        
        ${'' /* footprint holes*/}
        (pad 1 thru_hole rect (at ${def_neg}5.197 0 ${p.rot}) (size 1.59 1.59) (drill 1.06) (layers *.Cu *.Mask) (solder_mask_margin 0.102))
        (pad 2 thru_hole circle (at ${def_pos}5.197 0) (size 1.59 1.59) (drill 1.06) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.POWER.str})
        (pad 3 thru_hole rect (at ${def_neg}1.27 5.77 ${p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VIN.str})
        (pad 4 thru_hole oval (at ${def_pos}1.27 5.77) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.VOUT.str})
        (pad 5 thru_hole oval (at ${def_neg}1.27 3.23) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
        (pad 6 thru_hole oval (at ${def_pos}1.27 3.23) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask))
  
        ${'' /* footprint traces */}
        (fp_line (start ${def_neg}5.197 0) (end ${def_neg}2.38 0) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_neg}2.38 0) (end ${def_neg}1.27 1.21) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_neg}1.27 1.21) (end ${def_neg}1.27 3.23) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_neg}1.27 5.77) (end ${def_neg}1.27 3.23) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_pos}1.27 3.23) (end ${def_pos}1.27 1.21) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_pos}2.38 0) (end ${def_pos}1.27 1.21) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
        (fp_line (start ${def_pos}5.197 0) (end ${def_pos}2.38 0) (stroke (width 0.25) (type default)) (layer ${p.side}.Cu))
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