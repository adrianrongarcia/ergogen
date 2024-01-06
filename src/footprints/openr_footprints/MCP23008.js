module.exports = {
  params: {
    designator: 'MCP23008',
    side: 'F',
    SCL: undefined,
    SDA: undefined,
    A2: undefined,
    A1: undefined,
    A0: undefined,
    RESET: undefined,
    NC: {type: 'net', value: 'NC'},
    INT: {type: 'net', value: 'INT'},
    VSS: undefined,
    VDD: undefined,
    EXTRA_7: {type: 'net', value: 'EXTRA_7'},
    EXTRA_6: {type: 'net', value: 'EXTRA_6'},
    EXTRA_5: {type: 'net', value: 'EXTRA_5'},
    EXTRA_4: {type: 'net', value: 'EXTRA_4'},
    EXTRA_3: {type: 'net', value: 'EXTRA_3'},
    EXTRA_2: {type: 'net', value: 'EXTRA_2'},
    EXTRA_1: {type: 'net', value: 'EXTRA_1'},
    EXTRA_0: {type: 'net', value: 'EXTRA_0'}
  },
  body: p => {
    const standard = `
      (module MCP23008 (layer F.Cu) (tedit 20221018)
      ${p.at /* parametric position */}
      
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
      ${'' /* component outline */}
      (fp_line (start -11.38 -5) (end 11.38 -5) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -11.38 -1.27) (end -11.38 -5) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -11.38 5) (end -11.38 1.27) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 11.38 -5) (end 11.38 5) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 11.38 5) (end -11.38 5) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_arc (start -11.38 0) (end -11.38 -1.27) (angle 90) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      (fp_arc (start -11.38 0) (end -11.38 1.27) (angle -90) (stroke (width 0.127) (type solid)) (layer ${p.side}.SilkS))
      
      ${'' /* component limits */}
      (fp_poly
      (pts
        (xy -11.385 -5)
        (xy 11.38 -5)
        (xy 11.38 5.00219)
        (xy -11.385 5.00219)
      )
      (stroke (width 0.01) (type solid)) (fill solid) (layer ${p.side}.CrtYd))
      `

    function pins(def_neg, def_pos) {
      return `
        ${'' /* pin holes*/}
        (pad 1 thru_hole rect (at -10.16 ${def_pos}3.81 ${p.rot}) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.SCL.str})
        (pad 2 thru_hole circle (at -7.62 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.SDA.str})
        (pad 3 thru_hole circle (at -5.08 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.A2.str})
        (pad 4 thru_hole circle (at -2.54 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.A1.str})
        (pad 5 thru_hole circle (at 0 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.A0.str})
        (pad 6 thru_hole circle (at 2.54 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.RESET.str})
        (pad 7 thru_hole circle (at 5.08 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.NC.str})
        (pad 8 thru_hole circle (at 7.62 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.INT.str})
        (pad 9 thru_hole circle (at 10.16 ${def_pos}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.VSS.str})
        (pad 10 thru_hole circle (at 10.16 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_0.str})
        (pad 11 thru_hole circle (at 7.62 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_1.str})
        (pad 12 thru_hole circle (at 5.08 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_2.str})
        (pad 13 thru_hole circle (at 2.54 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_3.str})
        (pad 14 thru_hole circle (at 0 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_4.str})
        (pad 15 thru_hole circle (at -2.54 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_5.str})
        (pad 16 thru_hole circle (at -5.08 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_6.str})
        (pad 17 thru_hole circle (at -7.62 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.EXTRA_7.str})
        (pad 18 thru_hole circle (at -10.16 ${def_neg}3.81) (size 1.4 1.4) (drill 0.9) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.VDD.str})
       `
    }

    if (p.side == 'F') {
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