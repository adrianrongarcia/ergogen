
module.exports = {
  params: {
    designator: 'PinSocket_2x04_Display',
    side: 'F',
    reversible: false,
    flip: false,
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    SDA: {type: 'net', value: 'SDA'},
    SCL: {type: 'net', value: 'SCL'},
    MOSI: {type: 'net', value: 'MOSI'},
    MISO: {type: 'net', value: 'MISO'},
    SCK: {type: 'net', value: 'SCK'},
    SS: {type: 'net', value: 'SS'}
  },
  body: p => {
    const standard = `
      (module PinSocket_2x04_P2.54 (layer F.Cu) (tedit 20221018)
      
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
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_neg}1.33 8.95) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 1.27) (end ${def_pos}1.27 1.27) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_neg}1.33 8.95) (end ${def_pos}3.87 8.95) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}1.27 -1.33) (end ${def_pos}3.87 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}1.27 1.27) (end ${def_pos}1.27 -1.33) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
        (fp_line (start ${def_pos}3.87 -1.33) (end ${def_pos}3.87 8.95) (stroke (width 0.12) (type solid)) (layer ${side}.SilkS))
    
        ${'' /* footprint limits*/}
        (fp_line (start ${def_neg}1.8 -1.8) (end ${def_neg}1.8 8.95) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_neg}1.8 8.95) (end ${def_pos}4.35 8.95) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_pos}4.35 -1.8) (end ${def_neg}1.8 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
        (fp_line (start ${def_pos}4.35 8.95) (end ${def_pos}4.35 -1.8) (stroke (width 0.05) (type solid)) (layer ${side}.CrtYd))
    
         ${''/* footprint fabrication outline*/}
        (fp_line (start ${def_neg}1.27 0) (end 0 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_neg}1.27 8.95) (end ${def_neg}1.27 0) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start 0 -1.27) (end ${def_pos}3.81 -1.27) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}3.81 -1.27) (end ${def_pos}3.81 8.95) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
        (fp_line (start ${def_pos}3.81 8.95) (end ${def_neg}1.27 8.95) (stroke (width 0.1) (type solid)) (layer ${side}.Fab))
      `
      }
    function pins(def_neg, def_pos) {
      return `
        ${'' /* pin holes*/}
        (pad "VCC" thru_hole rect (at 0 0 ${p.rot}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.VCC.str})
        (pad "GND" thru_hole oval (at ${def_pos}2.54 0) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.GND.str})
        (pad "SDA" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SDA.str})
        (pad "SCL" thru_hole oval (at ${def_pos}2.54 2.54) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SCL.str})
        (pad "MOSI" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.MOSI.str})
        (pad "MISO" thru_hole oval (at ${def_pos}2.54 5.08) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.MISO.str})
        (pad "SCK" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SCK.str})
        (pad "SS" thru_hole oval (at ${def_pos}2.54 7.62) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") ${p.SS.str})
        `
    }
    if(p.side == 'F') {
      if(p.flip == true) {
        return `
          ${standard}
          ${outline('', '-', 'F')}
          ${pins('', '-')})
          `
      } else{
        return `
          ${standard}
          ${outline('-', '', 'F')}
          ${pins('-', '')})
          `
      }
    }
    else {
      if (p.flip == true) {
        return `
        ${standard}
        ${outline('-', '', 'B')}
        ${pins('-', '')})
        `
      } else {
        return `
        ${standard}
        ${outline('', '-', 'B')}
        ${pins('', '-')})
        `
      }
    }  
  }
}