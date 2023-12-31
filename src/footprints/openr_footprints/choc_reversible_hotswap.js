module.exports = {
    params: {
        designator: 'S' , // for Switch
        from: undefined,
        to: undefined
    },
    body: p => `
    
    (module Chock_optional_reversible (layer F.Cu)
    
        (descr "Kailh \"Choc\" PG1350 keyswitch with optional socket mount, reversible")
        (tags "kailh,choc")       
        
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* back outline  (mainly hotswap socket outline)*/}
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -2 -7.7) (end -1.5 -8.2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -2 -4.2) (end -1.5 -3.7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -1.5 -3.7) (end 1 -3.7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 1.5 -8.2) (end 2 -7.7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 2 -6.7) (end 2 -7.7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 2.5 -2.2) (end 2.5 -1.5) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 2.5 -1.5) (end 7 -1.5) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 -6.2) (end 2.5 -6.2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 -5.6) (end 7 -6.2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 -1.5) (end 7 -2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_arc (start 1 -3.7) (mid 2.06066 -3.26066) (end 2.5 -2.2) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_arc (start 2.5 -6.2) (mid 2.146447 -6.346447) (end 2 -6.7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        
        ${'' /* front outline  (mainly hotswap socket outline)*/}
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 -6.2) (end -2.5 -6.2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 -5.6) (end -7 -6.2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 -1.5) (end -7 -2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -2.5 -2.2) (end -2.5 -1.5) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -2.5 -1.5) (end -7 -1.5) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -2 -6.7) (end -2 -7.7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -1.5 -8.2) (end -2 -7.7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 1.5 -8.2) (end -1.5 -8.2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 1.5 -3.7) (end -1 -3.7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 2 -7.7) (end 1.5 -8.2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 2 -4.2) (end 1.5 -3.7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_arc (start -2.5 -2.2) (mid -2.06066 -3.26066) (end -1 -3.7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_arc (start -2 -6.7) (mid -2.146447 -6.346447) (end -2.5 -6.2) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        
        ${'' /* back fabrication otuline  (mainly hotswap socket outline and switch limits) */}
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -4.5 -7.25) (end -2 -7.25) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -4.5 -4.75) (end -4.5 -7.25) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -2 -7.7) (end -1.5 -8.2) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -2 -4.75) (end -4.5 -4.75) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -2 -4.25) (end -2 -7.7) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -2 -4.2) (end -1.5 -3.7) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -1.5 -3.7) (end 1 -3.7) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 1.5 -8.2) (end 2 -7.7) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 2 -6.7) (end 2 -7.7) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 2.5 -2.2) (end 2.5 -1.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 2.5 -1.5) (end 7 -1.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 7 -6.2) (end 2.5 -6.2) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 7 -5) (end 9.5 -5) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 7 -1.5) (end 7 -6.2) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 9.5 -5) (end 9.5 -2.5) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 9.5 -2.5) (end 7 -2.5) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_arc (start 1 -3.7) (mid 2.06066 -3.26066) (end 2.5 -2.2) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_arc (start 2.5 -6.2) (mid 2.146447 -6.346447) (end 2 -6.7) (stroke (width 0.15) (type solid)) (layer B.Fab))
        
        ${'' /* front fabrication otuline  (mainly hotswap socket outline and switch limits) */}
        (fp_line (start -9.5 -5) (end -9.5 -2.5) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -9.5 -2.5) (end -7 -2.5) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -7 -6.2) (end -2.5 -6.2) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -7 -5) (end -9.5 -5) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -7 -1.5) (end -7 -6.2) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -2.5 -2.2) (end -2.5 -1.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -2.5 -1.5) (end -7 -1.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -2 -6.7) (end -2 -7.7) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -1.5 -8.2) (end -2 -7.7) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 1.5 -8.2) (end -1.5 -8.2) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 1.5 -3.7) (end -1 -3.7) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 2 -7.7) (end 1.5 -8.2) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 2 -4.75) (end 4.5 -4.75) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 2 -4.25) (end 2 -7.7) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 2 -4.2) (end 1.5 -3.7) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 4.5 -7.25) (end 2 -7.25) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 4.5 -4.75) (end 4.5 -7.25) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_arc (start -2.5 -2.2) (mid -2.06066 -3.26066) (end -1 -3.7) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_arc (start -2 -6.7) (mid -2.146447 -6.346447) (end -2.5 -6.2) (stroke (width 0.15) (type solid)) (layer F.Fab))
  
        ${''/* middle shaft */}
        (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
        ${''/* stabilizers */}
        (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
        
        ${'' /* hotswap sockets related thru holes*/}
        (pad "" np_thru_hole circle (at -5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* direct solder pin holes*/}
        (pad "1" thru_hole circle (at 0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from})
        (pad "2" thru_hole circle (at -5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
        (pad "2" thru_hole circle (at 5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
        
        ${'' /* hotwswap sockets net pads*/}
        (pad "1" smd rect (at -3.275 -5.95 ${p.r}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.from})
        (pad "1" smd rect (at 3.275 -5.95 ${p.r}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.from})
        (pad "2" smd rect (at -8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.to})
        (pad "2" smd rect (at 8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.to})
  
    )
    
    `
}