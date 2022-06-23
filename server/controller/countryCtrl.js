const create = async (req,res)=>{
    const cekReg = req.regions
    try {
        const country = await req.context.models.countries.create({
            country_name : req.body.country_name,
            country_id : req.body.country_id,
            region_id : cekReg.region_id
        })
        return res.send(country)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    create
}