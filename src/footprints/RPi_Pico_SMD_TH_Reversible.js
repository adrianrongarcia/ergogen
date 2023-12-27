// RPi Pico footprint with SMD option
// Params
// orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb
// side: default is F (front)

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    side: 'F',
    VBUS: {type: 'net', value: 'VBUS'},
    VSYS: {type: 'net', value: 'VSYS'},
    GND: {type: 'net', value: 'GND'},
    V3_EN: {type: 'net', value: 'V3_EN'},
    V3: {type: 'net', value: 'V3'},
    ADC_VREF: {type: 'net', value: 'ADC_VREF'},
    GP28: {type: 'net', value: 'GP28'},
    AGND: {type: 'net', value: 'AGND'},
    GP27: {type: 'net', value: 'GP27'},
    GP26: {type: 'net', value: 'GP26'},
    RUN: {type: 'net', value: 'RUN'},
    GP22: {type: 'net', value: 'GP22'},
    GP21: {type: 'net', value: 'GP21'},
    GP20: {type: 'net', value: 'GP20'},
    GP19: {type: 'net', value: 'GP19'},
    GP18: {type: 'net', value: 'GP18'},
    GP17: {type: 'net', value: 'GP17'},
    GP16: {type: 'net', value: 'GP16'},
    GP15: {type: 'net', value: 'GP15'},
    GP14: {type: 'net', value: 'GP14'},
    GP13: {type: 'net', value: 'GP13'},
    GP12: {type: 'net', value: 'GP12'},
    GP11: {type: 'net', value: 'GP11'},
    GP10: {type: 'net', value: 'GP10'},
    GP9: {type: 'net', value: 'GP9'},
    GP8: {type: 'net', value: 'GP8'},
    GP7: {type: 'net', value: 'GP7'},
    GP6: {type: 'net', value: 'GP6'},
    GP5: {type: 'net', value: 'GP5'},
    GP4: {type: 'net', value: 'GP4'},
    GP3: {type: 'net', value: 'GP3'},
    GP2: {type: 'net', value: 'GP2'},
    GP1: {type: 'net', value: 'GP1'},
    GP0: {type: 'net', value: 'GP0'}
  },
  body: p => {
    const standard = `
    (module RPi_Pico_SMD_TH (layer F.Cu) (tedit 20221018)
    ${p.at /* parametric position */}
    
    ${'' /* footprint reference */}
    (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
    (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    
    ${'' /* component outline*/}
    (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -18) (end -10.5 -17.6) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -15.4) (end -10.5 -15) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -10.4) (end -10.5 -10) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 -0.2) (end -10.5 0.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 2.3) (end -10.5 2.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 4.9) (end -10.5 5.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 7.4) (end -10.5 7.8) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 10) (end -10.5 10.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 12.5) (end -10.5 12.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 15.1) (end -10.5 15.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 17.6) (end -10.5 18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 20.1) (end -10.5 20.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start -10.5 22.7) (end -10.5 23.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -18) (end 10.5 -17.6) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -15.4) (end 10.5 -15) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -10.4) (end 10.5 -10) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 -0.2) (end 10.5 0.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 2.3) (end 10.5 2.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 4.9) (end 10.5 5.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 7.4) (end 10.5 7.8) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 10) (end 10.5 10.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 12.5) (end 10.5 12.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 15.1) (end 10.5 15.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 17.6) (end 10.5 18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 20.1) (end 10.5 20.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 22.7) (end 10.5 23.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    (fp_line (start 10.5 25.5) (end -10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
    
    ${'' /* user drawings for USB area and some extra components */}
    (fp_poly
    (pts
      (xy -1.5 -16.5)
      (xy -3.5 -16.5)
      (xy -3.5 -18.5)
      (xy -1.5 -18.5)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
    (fp_poly
    (pts
      (xy -1.5 -14)
      (xy -3.5 -14)
      (xy -3.5 -16)
      (xy -1.5 -16)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
    (fp_poly
    (pts
      (xy -1.5 -11.5)
      (xy -3.5 -11.5)
      (xy -3.5 -13.5)
      (xy -1.5 -13.5)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
    (fp_poly
    (pts
      (xy 3.7 -20.2)
      (xy -3.7 -20.2)
      (xy -3.7 -24.9)
      (xy 3.7 -24.9)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
    ${'' /* edge cut for easy soldering of debug pins when soldering MCU via SMD*/}
    (fp_rect (start -4.65 23.05) (end 4.65 24.75) (stroke (width 0.12) (type solid)) (fill solid) (layer Edge.Cuts))
    
    ${'' /* clearance holes for USB solder pins protruding the back of MCU PCB*/}
    (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
    `

    function pins(def_neg, def_pos, def_text_mirror) {
      return `
      ${''/* extra border around "GP0", for extra distinctive info */}
      (fp_line (start ${def_neg}7.493 -22.833) (end ${def_neg}7.493 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start ${def_neg}10.5 -22.833) (end ${def_neg}7.493 -22.833) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      
      ${''/* footprint limits*/}
      (fp_line (start -11 -26) (end 11 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start -11 26) (end -11 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start 11 -26) (end 11 26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start 11 26) (end -11 26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
      
      ${''/* fabrication info*/}
      (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
      (fp_line (start ${def_neg}10.5 -24.2) (end ${def_neg}9.2 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
      (fp_line (start -10.5 25.5) (end -10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
      (fp_line (start 10.5 -25.5) (end 10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
      (fp_line (start 10.5 25.5) (end -10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
      
      ${''/* pin names */}
      (fp_text user VBUS (at ${def_pos}13.4 -24.2) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user VSYS (at ${def_pos}13.3 -21.59) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_pos}13 -19.05) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user 3V3_EN (at ${def_pos}14 -16.5) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user 3V3 (at ${def_pos}12.9 -13.9) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user ADC_VREF (at ${def_pos}14.8 -11.4) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP28 (at ${def_pos}13.3 -8.8) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user AGND (at ${def_pos}13.4 -6.35) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP27 (at ${def_pos}13.3 -3.8) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP26 (at ${def_pos}13.3 -1.27) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user RUN (at ${def_pos}13 1.27) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP22 (at ${def_pos}13.4 3.81) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_pos}13.1 6.35) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP21 (at ${def_pos}13.4 8.9) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP20 (at ${def_pos}13.4 11.43) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP19 (at ${def_pos}13.4 13.97) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP18 (at ${def_pos}13.4 16.6) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_neg}13.1 19.05) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP17 (at ${def_pos}13.4 21.6) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP16 (at ${def_pos}13.4 24.13) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP15 (at ${def_neg}13.335 24.13) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP14 (at ${def_neg}13.335 21.59) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_neg}13 19.05) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP13 (at ${def_neg}13.335 16.51) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP12 (at ${def_neg}13.335 13.97) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP11 (at ${def_neg}13.335 11.43) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP10 (at ${def_neg}13.335 8.89) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_neg}13 6.35) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP9 (at ${def_neg}13 3.8) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP8 (at ${def_neg}13 1.27) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP7 (at ${def_neg}13 -1.2) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP6 (at ${def_neg}13 -3.81) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_neg}13 -6.35) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP5 (at ${def_neg}12.9 -8.89) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP4 (at ${def_neg} 12.9 -11.43) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP3 (at ${def_neg}12.9 -13.97) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP2 (at ${def_neg}13 -16.51) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GND (at ${def_neg}13 -19.05) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP1 (at ${def_neg}12.9 -21.6) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
      (fp_text user GP0 (at ${def_neg}13 -24.13) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15) ${def_text_mirror}))
  
      ${''/* pin holes */}
      (pad 1 thru_hole oval (at ${def_neg}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP0})
      (pad 2 thru_hole oval (at ${def_neg}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP1})
      (pad 3 thru_hole rect (at ${def_neg}8.89 -19.05 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 4 thru_hole oval (at ${def_neg}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP2})
      (pad 5 thru_hole oval (at ${def_neg}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP3})
      (pad 6 thru_hole oval (at ${def_neg}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP4})
      (pad 7 thru_hole oval (at ${def_neg}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP5})
      (pad 8 thru_hole rect (at ${def_neg}8.89 -6.35 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 9 thru_hole oval (at ${def_neg}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP6})
      (pad 10 thru_hole oval (at ${def_neg}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP7})
      (pad 11 thru_hole oval (at ${def_neg}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP8})
      (pad 12 thru_hole oval (at ${def_neg}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP9})
      (pad 13 thru_hole rect (at ${def_neg}8.89 6.35 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 14 thru_hole oval (at ${def_neg}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP10})
      (pad 15 thru_hole oval (at ${def_neg}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP11})
      (pad 16 thru_hole oval (at ${def_neg}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP12})
      (pad 17 thru_hole oval (at ${def_neg}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP13})
      (pad 18 thru_hole rect (at ${def_neg}8.89 19.05 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 19 thru_hole oval (at ${def_neg}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP14})
      (pad 20 thru_hole oval (at ${def_neg}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP15})
      
      (pad 21 thru_hole oval (at ${def_pos}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP16})
      (pad 22 thru_hole oval (at ${def_pos}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP17})
      (pad 23 thru_hole rect (at ${def_pos}8.89 19.05 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 24 thru_hole oval (at ${def_pos}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP18})
      (pad 25 thru_hole oval (at ${def_pos}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP19})
      (pad 26 thru_hole oval (at ${def_pos}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP20})
      (pad 27 thru_hole oval (at ${def_pos}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP21})
      (pad 28 thru_hole rect (at ${def_pos}8.89 6.35 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 29 thru_hole oval (at ${def_pos}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP22})
      (pad 30 thru_hole oval (at ${def_pos}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.RUN})
      (pad 31 thru_hole oval (at ${def_pos}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP26})
      (pad 32 thru_hole oval (at ${def_pos}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP27})
      (pad 33 thru_hole rect (at ${def_pos}8.89 -6.35 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.AGND})
      (pad 34 thru_hole oval (at ${def_pos}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP28})
      (pad 35 thru_hole oval (at ${def_pos}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.ADC_VREF})
      (pad 36 thru_hole oval (at ${def_pos}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3})
      (pad 37 thru_hole oval (at ${def_pos}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3_EN})
      (pad 38 thru_hole rect (at ${def_pos}8.89 -19.05 ${p.r}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND})
      (pad 39 thru_hole oval (at ${def_pos}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VSYS})
      (pad 40 thru_hole oval (at ${def_pos}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VBUS})
      
      ${''/* SMD Pads */}
      (pad 1 smd rect (at ${def_neg}8.89 -24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 2 smd rect (at ${def_neg}8.89 -21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 3 smd rect (at ${def_neg}8.89 -19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 4 smd rect (at ${def_neg}8.89 -16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 5 smd rect (at ${def_neg}8.89 -13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 6 smd rect (at ${def_neg}8.89 -11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 7 smd rect (at ${def_neg}8.89 -8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 8 smd rect (at ${def_neg}8.89 -6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 9 smd rect (at ${def_neg}8.89 -3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 10 smd rect (at ${def_neg}8.89 -1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 11 smd rect (at ${def_neg}8.89 1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 12 smd rect (at ${def_neg}8.89 3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 13 smd rect (at ${def_neg}8.89 6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 14 smd rect (at ${def_neg}8.89 8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 15 smd rect (at ${def_neg}8.89 11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 16 smd rect (at ${def_neg}8.89 13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 17 smd rect (at ${def_neg}8.89 16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 18 smd rect (at ${def_neg}8.89 19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 19 smd rect (at ${def_neg}8.89 21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 20 smd rect (at ${def_neg}8.89 24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      
      (pad 21 smd rect (at ${def_pos}8.89 24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 22 smd rect (at ${def_pos}8.89 21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 23 smd rect (at ${def_pos}8.89 19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 24 smd rect (at ${def_pos}8.89 16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu" ${p.side}.Mask))
      (pad 25 smd rect (at ${def_pos}8.89 13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 26 smd rect (at ${def_pos}8.89 11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 27 smd rect (at ${def_pos}8.89 8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 28 smd rect (at ${def_pos}8.89 6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 29 smd rect (at ${def_pos}8.89 3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 30 smd rect (at ${def_pos}8.89 1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 31 smd rect (at ${def_pos}8.89 -1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 32 smd rect (at ${def_pos}8.89 -3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 33 smd rect (at ${def_pos}8.89 -6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 34 smd rect (at ${def_pos}8.89 -8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 35 smd rect (at ${def_pos}8.89 -11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 36 smd rect (at ${def_pos}8.89 -13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 37 smd rect (at ${def_pos}8.89 -16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 38 smd rect (at ${def_pos}8.89 -19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 39 smd rect (at ${def_pos}8.89 -21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      (pad 40 smd rect (at ${def_pos}8.89 -24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      
      `
    }
    
    if(p.orientation == 'down') {
      if(p.side == 'F') {
        return `
          ${standard}
          ${pins('', '-', '')})
          `
      } else {
        return `
          ${standard}
          ${pins('-', '', '(justify mirror)')})
          `
      }
    } else {
      if(p.side == 'F') {
        return `
          ${standard}
          ${pins('-', '', '')})
          `
      } else {
        return `
          ${standard}
          ${pins('', '', '(justify mirror)')})
          `
      }
    }
  }
}