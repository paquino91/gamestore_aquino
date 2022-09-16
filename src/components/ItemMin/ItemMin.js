import React from "react";

export const ItemMin = ({title, pictureUrl}) =>
{
    return(
        <>
            <figcaption className="info-wrap">
                <div className="row">
                    <div className="col-md-12">
                        <a href="#" className="font-objeto" data-abc="true">{title}</a>
                    </div>
                </div>
            </figcaption>
        <a href="#" className="img-wrap" data-abc="true"><img src={pictureUrl}/></a>
        </>
    )
}