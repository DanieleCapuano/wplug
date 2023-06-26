export function config_getter(shad_data) {
    //change the stride to all attributes to include the texcood attribute
    Object.keys((shad_data || {}).attributes || {}).forEach((sd_key) => {
        shad_data.attributes[sd_key].opts.stride = 20;
    });

    return {
        "attributes": {
            "a_texcoord": {
                "name": "a_texcoord",
                "opts": {
                    "size": 2,
                    "data_type": "UNSIGNED_SHORT",
                    "normalized": true,
                    "stride": 20,
                    "offset": 16
                }
            }
        },
        "uniforms": {}
    };
}