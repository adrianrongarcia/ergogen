// Mounting Hole of 2.5mm with pad on both sides
module.exports = {
    params: {
        designator: 'H',
    },
    body: p => `
        (module MountingHole_2.5mm (layer F.Cu) (tedit 5B24D78E) 
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${'' /* Hole */}
        (fp_circle (center 0 0) (end 2.75 0) (stroke (width 0.05) (type solid)) (fill none) (layer F.CrtYd))
        (pad 1 thru_hole circle (at 0 0) (size 2.9 2.9) (drill 2.5) (layers *.Cu *.Mask))
        
        ${'' /* Pads */}
        (pad 1 connect circle (at 0 0) (size 5 5) (layers F.Cu F.Mask))
        (pad 1 connect circle (at 0 0) (size 5 5) (layers B.Cu B.Mask)))
    `
}